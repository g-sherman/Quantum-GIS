/***************************************************************************
 *  File Name:               plugin.cpp 
 * 
 *  The georeferencer plugin is a tool for adding projection info to rasters
 *
 *--------------------------------------------------------------------------
 *    begin                : Jan 21, 2004
 *    copyright            : (C) 2004 by Tim Sutton
 *    email                : tim@linfiniti.com
 *
 ***************************************************************************/

/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/
/*  $Id$ */

/***************************************************************************
 *   QGIS Programming conventions:
 *   
 *   mVariableName - a class level member variable
 *   sVariableName - a static class level member variable
 *   variableName() - accessor for a class member (no 'get' in front of name)
 *   setVariableName() - mutator for a class member (prefix with 'set')
 *
 *   Additional useful conventions:
 *
 *   theVariableName - a method parameter (prefix with 'the')
 *   myVariableName - a locally declared variable within a method ('my' prefix)
 * 
 *   DO: Use mixed case variable names - myVariableName
 *   DON'T: separate variable names using underscores: my_variable_name (NO!)
 *
 * **************************************************************************/

//
// Required qgis includes
// 

#include <qgisinterface.h>
#include <qgsmaplayer.h>
#include <qgsrasterlayer.h>
#include "plugin.h"

//
//the gui subclass
//
#include "plugingui.h"


#ifdef WIN32
#define QGISEXTERN extern "C" __declspec( dllexport )
#else
#define QGISEXTERN extern "C"
#endif

static const char * const sIdent = "$Id$";
static const char * const sName = "Georeferencer";
static const char * const sDescription = "The georeferencer plugin is a tool for adding projection info to rasters";
static const char * const sPluginVersion = "Version 0.1";
static const QgisPlugin::PLUGINTYPE sPluginType = QgisPlugin::UI;

//////////////////////////////////////////////////////////////////////
//
// THE FOLLOWING METHODS ARE MANDATORY FOR ALL PLUGINS
//
//////////////////////////////////////////////////////////////////////

/**
 * Constructor for the plugin. The plugin is passed a pointer to the main app
 * and an interface object that provides access to exposed functions in QGIS.
 * @param theQGisApp - Pointer to the QGIS main window
 * @param theQGisInterface - Pointer to the QGIS interface object
 */
QgsGeorefPlugin::QgsGeorefPlugin(QgisInterface * theQgisInterface):
                 QgisPlugin(sName,sDescription,sPluginVersion,sPluginType),
                 mQGisIface(theQgisInterface)
{
}

QgsGeorefPlugin::~QgsGeorefPlugin()
{

}

/*
 * Initialize the GUI interface for the plugin 
 */
void QgsGeorefPlugin::initGui()
{
  // Create the action for tool
  mQActionPointer = new QAction(QIcon(":/icon.png"), tr("&Georeferencer"), this);

  // Connect the action to the run
  connect(mQActionPointer, SIGNAL(activated()), this, SLOT(run()));
  
  // Add to the toolbar & menu
  mQGisIface->addToolBarIcon(mQActionPointer);
  mQGisIface->addPluginMenu(tr("&Georeferencer"), mQActionPointer);

}
//method defined in interface
void QgsGeorefPlugin::help()
{
  //implement me!
}

// Slot called when the buffer menu item is activated
void QgsGeorefPlugin::run()
{
  QgsGeorefPluginGui *myPluginGui=new QgsGeorefPluginGui(mQGisIface, mQGisIface->getMainWindow());
  myPluginGui->show();
}

// Unload the plugin by cleaning up the GUI
void QgsGeorefPlugin::unload()
{
  // remove the GUI
  mQGisIface->removePluginMenu(tr("&Georeferencer"),mQActionPointer);
  mQGisIface->removeToolBarIcon(mQActionPointer);
  delete mQActionPointer;
}

//////////////////////////////////////////////////////////////////////
//
//                  END OF MANDATORY PLUGIN METHODS
//
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////
//
//
//  THE FOLLOWING CODE IS AUTOGENERATED BY THE PLUGIN BUILDER SCRIPT
//    YOU WOULD NORMALLY NOT NEED TO MODIFY THIS, AND YOUR PLUGIN
//      MAY NOT WORK PROPERLY IF YOU MODIFY THIS INCORRECTLY
//
//
//////////////////////////////////////////////////////////////////////////


/** 
 * Required extern functions needed  for every plugin 
 * These functions can be called prior to creating an instance
 * of the plugin class
 */
// Class factory to return a new instance of the plugin class
QGISEXTERN QgisPlugin * classFactory(QgisInterface * theQgisInterfacePointer)
{
  return new QgsGeorefPlugin(theQgisInterfacePointer);
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
QGISEXTERN void unload(QgisPlugin * thePluginPointer)
{
  delete thePluginPointer;
}
