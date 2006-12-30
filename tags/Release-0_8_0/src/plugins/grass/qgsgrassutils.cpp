/*******************************************************************
                              qgsgrassutils.cpp
                             -------------------
    begin                : March, 2006
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
#include <QDialog>
#include <QLineEdit>
#include <QLabel>
#include <QPushButton>
#include <QVBoxLayout>
#include <QHBoxLayout>
#include <QFileInfo>
#include <QRegExpValidator>
#include <QRegExp>

extern "C" {
#include <grass/gis.h>
#include <grass/Vect.h>
}

#include "../../src/providers/grass/qgsgrass.h"
#include "qgsgrassutils.h"
#include "qgsgrassselect.h"

QgsGrassUtils::QgsGrassUtils() {}
QgsGrassUtils::~QgsGrassUtils() {}

QString QgsGrassUtils::vectorLayerName( QString map, QString layer, 
                                        int nLayers )
{
    QString name = map;
    if ( nLayers > 1 ) name += " " + layer;
    return name;
}

void QgsGrassUtils::addVectorLayers ( QgisIface *iface,
        QString gisbase, QString location, QString mapset, QString map)
{
    QStringList layers = QgsGrassSelect::vectorLayers(
			   gisbase, location, mapset, map );


    for ( int i = 0; i < layers.count(); i++ )
    {
        QString name = QgsGrassUtils::vectorLayerName (
	  		      map, layers[i], layers.size() );

	QString uri = gisbase + "/" + location + "/"
		   + mapset + "/" + map + "/" + layers[i];

#ifdef QGISDEBUG
         std::cerr << "layer = " << layers[i].local8Bit().data() << std::endl;
         std::cerr << "uri = " << uri.local8Bit().data() << std::endl;
         std::cerr << "name = " << name.local8Bit().data() << std::endl;
#endif

	iface->addVectorLayer( uri, name, "grass");
    }
}

bool QgsGrassUtils::itemExists ( QString element, QString item )
{
    QString path = QgsGrass::getDefaultGisdbase() + "/"
                  + QgsGrass::getDefaultLocation() + "/"
                  + QgsGrass::getDefaultMapset() + "/"
                  + "/" + element + "/" + item;

    QFileInfo fi(path);
    return fi.exists(); 
}

QgsGrassElementDialog::QgsGrassElementDialog() : QObject() 
{
}
QgsGrassElementDialog::~QgsGrassElementDialog() {}

QString QgsGrassElementDialog::getItem ( QString element,
                       QString title, QString label,
                       QString text, QString source, bool * ok )
{
#ifdef QGISDEBUG
    std::cerr << "QgsGrassElementDialog::getItem" << std::endl;
#endif
    if ( ok ) *ok = false;
    mElement = element;
    mSource = source;
    mDialog = new QDialog ();
    mDialog->setWindowTitle(title);
    QVBoxLayout *layout = new QVBoxLayout ( mDialog );
    QHBoxLayout *buttonLayout = new QHBoxLayout ( );

    mLabel = new QLabel ( label );
    layout->addWidget( mLabel );

    mLineEdit = new QLineEdit ( text );
    QRegExp rx;
    if ( element == "vector" )
    {
	rx.setPattern("[A-Za-z_][A-Za-z0-9_]+");
    }
    else
    {
	rx.setPattern("[A-Za-z0-9_.]+");
    }
    QRegExpValidator *val = new QRegExpValidator( rx, this );
    mLineEdit->setValidator ( val );

    layout->addWidget( mLineEdit );

    mErrorLabel = new QLabel ( "X" );
    layout->addWidget( mErrorLabel );
    // Intention: keep fixed size - but it does not help
    mErrorLabel->adjustSize();
    mErrorLabel->setMinimumHeight ( mErrorLabel->height()+5 );

    mOkButton = new QPushButton ( );
    mCancelButton = new QPushButton ( "Cancel" );
     
    layout->insertLayout( -1, buttonLayout );
    buttonLayout->addWidget( mOkButton );
    buttonLayout->addWidget( mCancelButton );

    connect ( mLineEdit, SIGNAL(textChanged(QString)), this, SLOT(textChanged() ) );
    connect ( mOkButton, SIGNAL(clicked()), mDialog, SLOT(accept() ) );
    connect ( mCancelButton, SIGNAL(clicked()), mDialog, SLOT(reject() ) );

    textChanged ();
    if ( ok && mDialog->exec() == QDialog::Accepted )
    {
        *ok = true;
    }

    QString name = mLineEdit->text();
    delete mDialog;

    return name;
}

void QgsGrassElementDialog::textChanged ()
{
#ifdef QGISDEBUG
    std::cerr << "QgsGrassElementDialog::textChanged" << std::endl;
#endif

   QString text = mLineEdit->text().trimmed();

   mErrorLabel->setText ( "   " );
   mOkButton->setText ("Ok");
   mOkButton->setEnabled ( true );

   if ( text.length() == 0 )
   {
       mErrorLabel->setText ( "<font color='red'>Enter a name!</font>" );
       mOkButton->setEnabled ( false );
       return;
   }

#ifdef WIN32
   if ( !mSource.isNull() && text.toLower() == mSource.toLower() )
#else
   if ( !mSource.isNull() && text == mSource )
#endif
   {
       mErrorLabel->setText ( "<font color='red'>This is name of the source!</font>" );
       mOkButton->setEnabled ( false );
       return;
   }
   if ( QgsGrassUtils::itemExists( mElement, text ) )
   {
       mErrorLabel->setText ( "<font color='red'>Exists!</font>" );
       mOkButton->setText ("Overwrite");
       return;
   }
}

