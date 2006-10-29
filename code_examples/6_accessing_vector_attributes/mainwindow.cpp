/***************************************************************************
 *   Copyright (C) 2006 by Tim Sutton   *
 *   tim@linfiniti.com   *
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 *   This program is distributed in the hope that it will be useful,       *
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of        *
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         *
 *   GNU General Public License for more details.                          *
 *                                                                         *
 *   You should have received a copy of the GNU General Public License     *
 *   along with this program; if not, write to the                         *
 *   Free Software Foundation, Inc.,                                       *
 *   59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.             *
 ***************************************************************************/
#include "mainwindow.h"
//
// QGIS Includes
//
#include <qgsapplication.h>
#include <qgsproviderregistry.h>
#include <qgsmaplayerregistry.h>
#include <qgsvectorlayer.h>
#include <qgsfield.h>


MainWindow::MainWindow(QWidget* parent, Qt::WFlags fl)
    : QMainWindow(parent,fl)
{
  //required by Qt4 to initialise the ui
  setupUi(this);

  // Instantiate Provider Registry
#if defined(Q_WS_MAC)
  QString myPluginsDir        = "/Users/timsutton/apps/qgis.app/Contents/MacOS/lib/qgis";
#else
  QString myPluginsDir        = "/home/timlinux/apps/lib/qgis";
#endif
  QgsProviderRegistry::instance(myPluginsDir);

  addLayer();
}

MainWindow::~MainWindow()
{
}

void MainWindow::addLayer()
{
  QString myLayerPath         = "data";
  QString myLayerBaseName     = "test";
  QString myProviderName      = "ogr";
  
  QgsVectorLayer * mypLayer = new QgsVectorLayer(myLayerPath, myLayerBaseName, myProviderName);

  if (mypLayer->isValid())
  {
    qDebug("Layer is valid");
  }
  else
  {
    qDebug("Layer is NOT valid");
    return;
  }
  
  //get the field list associated with the layer
  //we'll print the names out to console for diagnostic purposes
  std::vector<QgsField> myFields = mypLayer->fields();
  for (unsigned int i = 0; i < myFields.size(); i++ )
  {
    qDebug("Field Name: " +  myFields[i].name().toLocal8Bit() );
  }

}

