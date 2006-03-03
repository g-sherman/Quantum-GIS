/*******************************************************************
                              qgsgrassbrowser.cpp
                             -------------------
    begin                : February, 2006
    copyright            : (C) 2006 by Radim Blazek
    email                : radim.blazek@gmail.com
********************************************************************/
/********************************************************************
 This program is free software; you can redistribute it and/or modify  
 it under the terms of the GNU General Public License as published by 
 the Free Software Foundation; either version 2 of the License, or     
 (at your option) any later version.                                   
*******************************************************************/
#include <iostream>
#include <vector>

#include <QApplication>
#include <QStyle>
#include <qdir.h>
#include <qfile.h>
#include <qsettings.h>
#include <qstringlist.h>
#include <qmessagebox.h>
#include <qpainter.h>
#include <qpixmap.h>
#include <qnamespace.h>
#include <qevent.h>
#include <qsize.h>
#include <qicon.h>
#include <QTreeView>
#include <QHeaderView>
#include <QMainWindow>
#include <QActionGroup>
#include <QToolBar>
#include <QAction>
#include <QTextBrowser>
#include <QSplitter>
#include <QProcess>

#include "qgis.h"
#include "qgsapplication.h"

extern "C" {
#include <grass/gis.h>
#include <grass/Vect.h>
}

#include "../../src/providers/grass/qgsgrass.h"
#include "qgsgrassmodel.h"
#include "qgsgrassbrowser.h"

QgsGrassBrowser::QgsGrassBrowser ( QgisIface *iface, 
	 QWidget * parent, Qt::WFlags f )
             :mIface(iface), QMainWindow(parent, Qt::WType_Dialog)
{
    #ifdef QGISDEBUG
    std::cerr << "QgsGrassBrowser()" << std::endl;
    #endif

    QActionGroup *ag = new QActionGroup ( this );
    QToolBar *tb = addToolBar(tr("Tools"));

    QString myIconPath = QgsApplication::themePath() + "/grass/";
    mActionAddMap = new QAction( 
	                     QIcon(myIconPath+"grass_add_map.png"), 
	                     tr("Add selected map to canvas"), this);
    mActionAddMap->setEnabled(false); 
    ag->addAction ( mActionAddMap );
    tb->addAction ( mActionAddMap );
    connect ( mActionAddMap, SIGNAL(triggered()), this, SLOT(addMap()) );

    mActionDeleteMap = new QAction( 
	                     QIcon(myIconPath+"grass_delete_map.png"), 
	                     tr("Delete selected map"), this);
    mActionDeleteMap->setEnabled(false); 
    ag->addAction ( mActionDeleteMap );
    tb->addAction ( mActionDeleteMap );
    connect ( mActionDeleteMap, SIGNAL(triggered()), this, SLOT(deleteMap()) );

    mActionRefresh = new QAction( 
	                     QIcon(myIconPath+"grass_refresh.png"), 
	                     tr("Refresh"), this);
    ag->addAction ( mActionRefresh );
    tb->addAction ( mActionRefresh );
    connect ( mActionRefresh, SIGNAL(triggered()), this, SLOT(refresh()) );

    // Add model
    mModel = new QgsGrassModel ( this );

    mTree = new QTreeView(0);
    mTree->header()->hide();
    mTree->setModel(mModel);

    mTextBrowser = new QTextBrowser(0);
    mTextBrowser->setTextFormat(Qt::RichText);
    mTextBrowser->setReadOnly(TRUE);

    mSplitter = new QSplitter(0);
    mSplitter->addWidget(mTree);
    mSplitter->addWidget(mTextBrowser);

    this->setCentralWidget(mSplitter);

    connect ( mTree->selectionModel(), 
	      SIGNAL(selectionChanged(QItemSelection,QItemSelection)),
	      this, SLOT(selectionChanged(QItemSelection,QItemSelection)) );

    connect ( mTree->selectionModel(), 
	      SIGNAL(currentChanged(QModelIndex,QModelIndex)),
	      this, SLOT(currentChanged(QModelIndex,QModelIndex)) );
}

QgsGrassBrowser::~QgsGrassBrowser() { }

void QgsGrassBrowser::refresh()
{
    #ifdef QGISDEBUG
    std::cerr << "QgsGrassBrowser::refresh()" << std::endl;
    #endif

    mModel->refresh();
    mTree->update();
}

void QgsGrassBrowser::addMap()
{
    #ifdef QGISDEBUG
    std::cerr << "QgsGrassBrowser::addMap()" << std::endl;
    #endif
    
    QModelIndexList indexes = mTree->selectionModel()->selectedIndexes();
    bool mapSelected = false;

    QList<QModelIndex>::const_iterator it = indexes.begin();
    for (; it != indexes.end(); ++it)
    {
	int type = mModel->itemType(*it);
	QString uri = mModel->uri(*it);
        if ( type == QgsGrassModel::Raster )
	{
            std::cerr << "add raster: " << uri.ascii() << std::endl;
	    mIface->addRasterLayer( uri );
	    mapSelected = true;
	}
	else if ( type == QgsGrassModel::VectorLayer )
	{
	    // TODO: common method for vector names
	    QStringList split = QStringList::split ( '/', uri );
	    QString layer = split.last();
	    split.pop_back(); // map
	    QString vector = split.last();
	    mIface->addVectorLayer( uri, layer, "grass");
            std::cerr << "add vector: " << uri.ascii() << std::endl;
	    mapSelected = true;
	}
    }
}

void QgsGrassBrowser::deleteMap()
{
    #ifdef QGISDEBUG
    std::cerr << "QgsGrassBrowser::deleteMap()" << std::endl;
    #endif
    
    QModelIndexList indexes = mTree->selectionModel()->selectedIndexes();
    bool mapSelected = false;

    QList<QModelIndex>::const_iterator it = indexes.begin();
    for (; it != indexes.end(); ++it)
    {
	int type = mModel->itemType(*it);
	QString mapset = mModel->itemMapset(*it);
	QString map = mModel->itemMap(*it);

        QString typeName;
        if ( type == QgsGrassModel::Raster ) typeName = "rast";
        else if ( type == QgsGrassModel::Vector ) typeName = "vect";

	if ( mapset != QgsGrass::getDefaultMapset() ) 
	{
            continue; // should not happen
        }
         
        int ret = QMessageBox::question ( 0, "Warning",
              "Delete map <b>" + map + "</b>",
              QMessageBox::Yes,  QMessageBox::No );

        if ( ret == QMessageBox::No ) continue;

        QString module = "g.remove";
#ifdef WIN32
	module.append(".exe");
#endif
        QProcess process(this);
        process.start(module, QStringList( typeName + "=" + map ) );
        if ( !process.waitForFinished() )
        {
            QMessageBox::warning( 0, "Warning", "Cannot delete map "
                                  + map ); 
        }
        else
        {
            refresh();
        }
    }
}

void QgsGrassBrowser::selectionChanged(const QItemSelection & selected, const QItemSelection & deselected)
{
    #ifdef QGISDEBUG
    std::cerr << "QgsGrassBrowser::selectionChanged()" << std::endl;
    #endif

    mActionAddMap->setEnabled(false);
    mActionDeleteMap->setEnabled(false);
    
    QModelIndexList indexes = mTree->selectionModel()->selectedIndexes();

    mTextBrowser->clear();

    QList<QModelIndex>::const_iterator it = indexes.begin();
    for (; it != indexes.end(); ++it)
    {
        mTextBrowser->append ( mModel->itemInfo(*it) );
	
	int type = mModel->itemType(*it);
        if ( type == QgsGrassModel::Raster || type == QgsGrassModel::VectorLayer )
	{
	    mActionAddMap->setEnabled(true);
	}
        if ( type == QgsGrassModel::Raster || type == QgsGrassModel::Vector )
	{
	    QString mapset = mModel->itemMapset(*it);
            if ( mapset == QgsGrass::getDefaultMapset() ) 
            {
	        mActionDeleteMap->setEnabled(true);
            }
	}
    }
}

void QgsGrassBrowser::currentChanged(const QModelIndex & current, const QModelIndex & previous)
{
    #ifdef QGISDEBUG
    std::cerr << "QgsGrassBrowser::currentChanged()" << std::endl;
    #endif
}

