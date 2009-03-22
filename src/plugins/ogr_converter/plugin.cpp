// $Id$
//////////////////////////////////////////////////////////////////////////////
//
// begin                : Aug 24, 2008
// copyright            : (C) 2008 by Mateusz Loskot
// email                : mateusz@loskot.net
//
//////////////////////////////////////////////////////////////////////////////
//
// This program is free software; you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation; either version 2 of the License,
// or (at your option) any later version.
//
//////////////////////////////////////////////////////////////////////////////

// qgis::plugin::ogrconv
#include "plugin.h"
#include "dialog.h"
// QGIS
#include <qgisinterface.h>
#include <qgisgui.h>
#include <qgsapplication.h>
#include <qgslogger.h>
// Qt
#include <QAction>
#include <QFile>
#include <QToolBar>
// std
#include <cassert>

#include <ogr_api.h>

static const char * const sIdent = "$Id$";
static const QString sName = QObject::tr( "OGR Layer Converter" );
static const QString sDescription = QObject::tr( "Translates vector layers between formats supported by OGR library" );
static const QString sPluginVersion = QObject::tr( "Version 0.1" );
static const QgisPlugin::PLUGINTYPE sPluginType = QgisPlugin::UI;

//////////////////////////////////////////////////////////////////////////////
// THE FOLLOWING METHODS ARE MANDATORY FOR ALL PLUGINS
//////////////////////////////////////////////////////////////////////////////

OgrPlugin::OgrPlugin( QgisInterface * theQgisInterface ) :
    QgisPlugin( sName, sDescription, sPluginVersion, sPluginType ),
    mQGisIface( theQgisInterface ),
    mQActionPointer( 0 )
{
  assert( 0 != mQGisIface );
}

OgrPlugin::~OgrPlugin()
{
}

void OgrPlugin::initGui()
{
  // Create the action for tool
  mQActionPointer = new QAction( QIcon(), tr( "Run OGR Layer Converter" ), this );

  // Set the icon
  setCurrentTheme( "" );

  // Set the what's this text
  mQActionPointer->setWhatsThis( tr( "Translates vector layers between formats supported by OGR library" ) );

  // Connect the action to the run
  connect( mQActionPointer, SIGNAL( triggered() ), this, SLOT( run() ) );

  // Add the icon to the toolbar
  mQGisIface->addToolBarIcon( mQActionPointer );
  mQGisIface->addPluginToMenu( tr( "OG&R Converter" ), mQActionPointer );

  // this is called when the icon theme is changed
  connect( mQGisIface, SIGNAL( currentThemeChanged ( QString ) ), this, SLOT( setCurrentTheme( QString ) ) );
}

//method defined in interface
void OgrPlugin::help()
{
  //implement me!
}

void OgrPlugin::run()
{
  assert( 0 != mQGisIface );

  Dialog* ogrDialog = new Dialog( mQGisIface->mainWindow(), QgisGui::ModalDialogFlags );
  ogrDialog->setAttribute( Qt::WA_DeleteOnClose );
  ogrDialog->show();
}

void OgrPlugin::unload()
{
  assert( 0 != mQGisIface );

  // TODO: Who is responsible for OGR cleanup?
  //OGRCleanupAll();

  // remove the GUI
  mQGisIface->removePluginMenu( "OG&R Converter", mQActionPointer );
  mQGisIface->removeToolBarIcon( mQActionPointer );
  delete mQActionPointer;
}

//! Set icons to the current theme
void OgrPlugin::setCurrentTheme( QString theThemeName )
{
  QString myCurThemePath = QgsApplication::activeThemePath() + "/plugins/ogr_converter.png";
  QString myDefThemePath = QgsApplication::defaultThemePath() + "/plugins/ogr_converter.png";
  QString myQrcPath = ":/ogr_converter.png";
  if ( QFile::exists( myCurThemePath ) )
  {
    mQActionPointer->setIcon( QIcon( myCurThemePath ) );
  }
  else if ( QFile::exists( myDefThemePath ) )
  {
    mQActionPointer->setIcon( QIcon( myDefThemePath ) );
  }
  else if ( QFile::exists( myQrcPath ) )
  {
    mQActionPointer->setIcon( QIcon( myQrcPath ) );
  }
  else
  {
    mQActionPointer->setIcon( QIcon() );
  }
}

/////////////////////////////////////////////////////////////////////////////
//  THE FOLLOWING CODE IS AUTOGENERATED BY THE PLUGIN BUILDER SCRIPT
//    YOU WOULD NORMALLY NOT NEED TO MODIFY THIS, AND YOUR PLUGIN
//      MAY NOT WORK PROPERLY IF YOU MODIFY THIS INCORRECTLY
/////////////////////////////////////////////////////////////////////////////

// Required extern functions needed  for every plugin
// These functions can be called prior to creating an instance
// of the plugin class.

// Class factory to return a new instance of the plugin class
QGISEXTERN QgisPlugin * classFactory( QgisInterface * theQgisInterfacePointer )
{
  return new OgrPlugin( theQgisInterfacePointer );
}

// Return the name of the plugin - note that we do not user class members as
// the class may not yet be insantiated when this method is called.
QGISEXTERN QString name()
{
  return sName;
}

// Return the description
QGISEXTERN QString description()
{
  return sDescription;
}

// Return the type (either UI or MapLayer plugin)
QGISEXTERN int type()
{
  return sPluginType;
}

// Return the version number for the plugin
QGISEXTERN QString version()
{
  return sPluginVersion;
}

// Delete ourself
QGISEXTERN void unload( QgisPlugin * thePluginPointer )
{
  delete thePluginPointer;
}
