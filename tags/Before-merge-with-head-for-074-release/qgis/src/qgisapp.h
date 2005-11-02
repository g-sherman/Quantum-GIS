/***************************************************************************
                          qgisapp.h  -  description
                             -------------------
    begin                : Sat Jun 22 2002
    copyright            : (C) 2002 by Gary E.Sherman
    email                : sherman at mrcc.com
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

#ifndef QGISAPP_H
#define QGISAPP_H

class QCanvas;
class QRect;
class QCanvasView;
class QStringList;
class QScrollView;
class QgsPoint;
class QgsLegend;
class QgsLegendView;
class QVBox;
class QCursor;
class QLabel;
class QListView;
class QListViewItem;
class QProgressBar;
class QFileInfo;
class QgsMapLayer;
class QSettings;
class QSocket;
class QgsProviderRegistry;
class QgsHelpViewer;
class QgsMapCanvas;
class QgsMapLayerRegistry;
class QgsRasterLayer;
class QCheckBox;
class QEvent;
class QgsComposer;
class QPushButton;
#ifdef WIN32
#include "qgisappbase.h"
#else
#include "qgisappbase.uic.h"
#endif
#include "qgisiface.h"
#include "splashscreen.h"
#include "qgsconfig.h"
#include "qgsvectordataprovider.h"

#include <map>

static SplashScreen * gSplashScreen ;


/*! \class QgisApp
 * \brief Main window for the Qgis application
 */
class QgisApp : public QgisAppBase
{
    Q_OBJECT;

public:

    //! Constructor
    QgisApp(QWidget * parent = 0, const char *name = 0, WFlags fl = WType_TopLevel);

    ~QgisApp();

    QgisIface *getInterface();

    /** \brief Set the Z order of both mapcanvas and overview
     * canvas. Typically this will be called by projectio when loading a
     * stored project.
     */
    void setZOrder (std::list<QString>);

    void addVectorLayer(QString vectorLayerPath, QString baseName, QString providerKey);
    /** \brief overloaded vesion of the privat addLayer method that takes a list of
    * filenames instead of prompting user with a dialog.
    @param enc encoding type for the layer 
    @returns true if successfully added layer

    @note

    This should be deprecated because it's possible to have a
    heterogeneous set of files; i.e., a mix of raster and vector.
    It's much better to try to just open one file at a time.

    */
    bool addLayer(QStringList const & theLayerQStringList, const QString& enc);

    /** open a vector layer for the given file

    
    @returns false if unable to open a raster layer for rasterFile

      @note

      This is essentially a simplified version of the above
    */
    bool addLayer(QFileInfo const & vectorFile);


    /** overloaded vesion of the private addRasterLayer()

    Method that takes a list of filenames instead of prompting
    user with a dialog.

    @returns true if successfully added layer(s)

    @note

    This should be deprecated because it's possible to have a
    heterogeneous set of files; i.e., a mix of raster and vector.
    It's much better to try to just open one file at a time.

    */
    bool addRasterLayer(QStringList const & theLayerQStringList, bool guiWarning=true);


    /** open a raster layer for the given file

       @returns false if unable to open a raster layer for rasterFile

       @note

       This is essentially a simplified version of the above
    */
    bool addRasterLayer(QFileInfo const & rasterFile, bool guiWarning=true);

    /** Add a 'pre-made' map layer to the project */
    void addMapLayer(QgsMapLayer *theMapLayer);

    /** Set the extents of the map canvas */
    void setExtent(QgsRect theRect);

    //! Remove all layers from the map and legend - reimplements same method from qgisappbase
    void removeAllLayers();

    /** Open a raster or vector file; ignore other files.
    Used to process a commandline argument or OpenDocument AppleEvent.
    @returns true if the file is successfully opened
    */
    bool openLayer(const QString & fileName);

    /** Open the specified project file; prompt to save previous project if necessary.
    Used to process a commandline argument or OpenDocument AppleEvent.
    */
    void openProject(const QString & fileName);

    /** opens a qgis project file
    @returns false if unable to open the project

    */
    bool addProject(QString projectFile);

    //!Overloaded version of the private function with same name that takes the imagename as a parameter
    void saveMapAsImage(QString, QPixmap *);
    QgsMapCanvas * getMapCanvas() { return mMapCanvas; };

    /** return the layer registry

       @note

       Returns QgsMapLayerRegistry::instance(); i.e., it's a Singleton
    */
    QgsMapLayerRegistry * getLayerRegistry();

    //! Set theme (icons)
    void setTheme(QString themeName="default");
    //! Setup the toolbar popup menus for a given theme
    void setupToolbarPopups(QString themeName);

private:

    //! Add a vector layer to the map
    void addLayer();
    //! Add a raster layer to the map (will prompt user for filename using dlg
    void addRasterLayer();
    //! Add a raster layer to the map (passed in as a ptr). It waont force a refresh unless you explicitly
    //use the force redraw flag.
    //
    bool addRasterLayer(QgsRasterLayer * theRasterLayer, bool theForceRedrawFlag=false);
    //@todo We should move these next two into vector layer class
    /** This helper checks to see whether the filename appears to be a valid vector file name */
    bool isValidVectorFileName (QString theFileNameQString);
    /** Overloaded version of the above function provided for convenience that takes a qstring pointer */
    bool isValidVectorFileName (QString * theFileNameQString);
#ifdef HAVE_POSTGRESQL
    //! Add a databaselayer to the map
    void addDatabaseLayer();
#endif

    //! Exit Qgis
    void fileExit();
    
    //! add this file to the recently opened/saved projects list
    //  pass settings by reference since creating more than one
    //! instance simultaneously results in data loss.
    void saveRecentProjectPath(QString projectPath, QSettings & settings);
    //! Update file menu with the current list of recently accessed projects
    void updateRecentProjectPaths();
    //! Set map tool to Zoom out
    void zoomOut();
    //! Set map tool to Zoom in
    void zoomIn();
    //! Zoom to full extent
    void zoomFull();
    //! Zoom to the previous extent
    void zoomPrevious();
    //! Zoom to selected features
    void zoomToSelected();
    //! Set map tool to pan
    void pan();
    //! Identify feature(s) on the currently selected layer
    void identify();
    //! Measure distance
    void measure();
    //! show the attribute table for the currently selected layer
    void attributeTable();
    /**Deletes the selected attributes for the currently selected vector layer*/
    void deleteSelected();
    //! Read Well Known Binary stream from PostGIS
    //void readWKB(const char *, QStringList tables);
    //! Draw a point on the map canvas
    void drawPoint(double x, double y);
    //! draw layers
    void drawLayers();
    //! test function
    void testButton();
    //! About QGis
    void about();
    //! activates the capture point tool
    void capturePoint();
    //! activates the capture line tool
    void captureLine();
    //! activates the capture polygon tool
    void capturePolygon();
    //! activates the selection tool
    void select();
    //! check to see if file is dirty and if so, prompt the user th save it
    int saveDirty();


    
private slots:

    //! reimplements widget keyPress event so we can check if cancel was pressed
    void keyPressEvent ( QKeyEvent * e );

   /** for when a menu bar item is activated
       Used to dynamically update pop-up menu items
   */
    /* virtual */ void menubar_highlighted( int i );


    /** toggles whether the current selected layer is in overview or not */
    void inOverview(bool);
    //! Slot to show the map coordinate position of the mouse cursor
    void showMouseCoordinate(QgsPoint &);
    //copy the click coord to clipboard and let the user know its there
    void showCapturePointCoordinate(QgsPoint &);
    //! Slot to show current map scale;
    void showScale(QString theScale);
    //! Show layer properties for the selected layer
    void layerProperties(QListViewItem *);
    //! Show layer properties for selected layer (called by right-click menu)
    void layerProperties();
    //! Show the right-click menu for the legend
    void rightClickLegendMenu(QListViewItem *, const QPoint &, int);
    //! Disable/enable toolbar buttons as appropriate for selected layer
    void currentLayerChanged(QListViewItem *);
    //! Remove a layer from the map and legend
    void removeLayer();
    //! zoom to extent of layer
    void zoomToLayerExtent();
    //! load any plugins used in the last qgis session
    void restoreSessionPlugins(QString thePluginDirString);
    //! test plugin functionality
    void testPluginFunctions();
    //! test maplayer plugins
    void testMapLayerPlugins();
    //! plugin manager
    void actionPluginManager_activated();
    //! plugin loader
    void loadPlugin(QString name, QString description, QString mFullPath);
    //! Add a plugin menu to the main Plugins menu
    int addPluginMenu(QString menuText, QPopupMenu *menu);

    QPopupMenu* getPluginMenu(QString menuName);

    void removePluginMenuItem(QString name, int menuId);

    //! Add an icon to the plugin toolbar
    int addPluginToolBarIcon (QAction * qAction);
    //! Remove an icon from the plugin toolbar
    void removePluginToolBarIcon(QAction *qAction);
    //! Save window state
    void saveWindowState();
    //! Restore the window and toolbar state
    void restoreWindowState();
    //! Save project
    void fileSave();
    //! Save project as
    void fileSaveAs();
    //! Open the project file corresponding to the
    //! path at the given index in mRecentProjectPaths
    void openProject(int pathIndex);
    //! Save the map view as an image - user is prompted for image name using a dialog
    void saveMapAsImage();
    //! Open a project
    void fileOpen();
    //! Create a new project
    void fileNew();
    //! As above but allows forcing without prompt
    void fileNew(bool thePromptToSaveFlag);
    //! Create a new empty vector layer
    void newVectorLayer();
    //! Print the current map view frame
    void filePrint();
    //! Add all loaded layers into the overview - overides qgisappbase method
    void addAllToOverview();
    //! Remove all loaded layers from the overview - overides qgisappbase method
    void removeAllFromOverview();
    //reimplements method from base (gui) class
    void hideAllLayers();
    //reimplements method from base (gui) class
    void showAllLayers();
    //! Export current view as a mapserver map file
    void exportMapServer();
    //! Return pointer to the active layer
    QgsMapLayer *activeLayer();
    //! Return data source of the active layer
    QString activeLayerSource();
    //! Open the help contents in a browser
    void helpContents();
    //! Open the QGIS homepage in users browser
    void helpQgisHomePage();
    //! Open the QGIS Sourceforge page in users browser
    void helpQgisSourceForge();
    //! Open a url in the users configured browser
    void openURL(QString url, bool useQgisDocDirectory=true);
    //! Check qgis version against the qgis version server
    void checkQgisVersion();
    //!Invoke the custom projection dialog
    void actionCustomProjection_activated(); 
    //! options dialog slot
    void options();
    //! Whats-this help slot
    void whatsThis();
    //! Get the Menu map (key is name, value is menu id)
    std::map<QString, int> menuMapByName();
    //! Get the Menu map (key is menu id, value is name)
    std::map<int, QString> menuMapById();
    //! Populate the menu maps
    void populateMenuMaps();
    void socketConnected();
    void socketConnectionClosed();
    void socketReadyRead();
    void socketError(int e);
    //! Set project properties, including map untis
    void projectProperties();
    //! Open project properties dialog and show the projections tab
    void projectPropertiesProjections();
    /*  void urlData(); */
    /** Used to (re)set the zordering of the overview map*/
    void setOverviewZOrder(QgsLegend * );
    //! Kills the splash screen
    void killSplashScreen();
    //! Show the spatial bookmarks dialog
    void actionShowBookmarks_activated();
    //! Create a new spatial bookmark
    void actionNewBookmark_activated();

public slots:
    void showProgress(int theProgress, int theTotalSteps);
    void showExtents(QgsRect theExtents);
    void showStatusMessage(QString theMessage);
    void setLayerOverviewStatus(QString theLayerId, bool theVisibilityFlag);
    void drawExtentRectangle(QPainter *);
    void updateMouseCoordinatePrecision();
    void projectionsEnabled(bool theFlag);
//    void debugHook();
    void stopZoom();

signals:
    /** emitted when a key is pressed and we want non widget sublasses to be able
        to pick up on this (e.g. maplayer) */
    void keyPressed (QKeyEvent *e);

    /** emitted when a project file is successfully read

      @note

      This is useful for plug-ins that store properties with project files.  A
      plug-in can connect to this signal.  When it is emitted, the plug-in
      knows to then check the project properties for any relevant state.

    */
    void projectRead();

    /** emitted when starting an entirely new project

      @note

       This is similar to projectRead(); plug-ins might want to be notified
       that they're in a new project.  Yes, projectRead() could have been
       overloaded to be used in the case of new projects instead.  However,
       it's probably more semantically correct to have an entirely separate
       signal for when this happens.

    */
    void newProject();

    /** emitted when a new bookmark is added 
     */
    void bookmarkAdded();
private:

    /// QgisApp aren't copyable
    QgisApp( QgisApp const & );

    /// QgisApp aren't copyable
    QgisApp & operator=( QgisApp const & );
    
    //! A central registry that keeps track of all loaded layers.
    // prefer QgsMapLayerRegistry::instance() to emphasize Singleton
    ///QgsMapLayerRegistry * mMapLayerRegistry;
    //! Widget that will live on the statusbar to display scale
    QLabel * mScaleLabel;
    //! Widget that will live in the statusbar to display coords
    QLabel * mCoordsLabel;
    //! Widget that will live in the statusbar to show progress of operations
    QProgressBar * mProgressBar;
    //! Widget used to suppress rendering
    QCheckBox * mRenderSuppresionCBox;
    //! Widget in status bar used to show status of on the fly projection
    QToolButton * mOnTheFlyProjectionStatusButton;
    //! Popup menu
    QPopupMenu * mPopupMenu;
    //! Top level plugin menu
    QPopupMenu *mPluginMenu;
    //! Popup menu for the map overview tools
    QPopupMenu *toolPopupOverviews;
    //! Popup menu for the display tools
    QPopupMenu *toolPopupDisplay;
    //! Popup menu for the capture tools
    QPopupMenu *toolPopupCapture;
    //! Legend list view control
    //doesnt see to be used...(TS)
    //QgsLegendView *mLegendView;
    //! Map canvas
    QgsMapCanvas *mMapCanvas;
    //! Map layer registry
    // use instance() now QgsMapLayerRegistry *mLayerRegistry;
    //! Overview canvas where the map overview is shown
    QgsMapCanvas * mOverviewCanvas;
    //! Table of contents (legend) for the map
    QgsLegend *mMapLegend;
    QCursor *mMapCursor;
    //! scale factor
    double mScaleFactor;
    //! Current map window extent in real-world coordinates
    QRect *mMapWindow;
    //! Current map tool
    int mMapTool;
    //! The previously selected non zoom map tool.
    int mPreviousNonZoomMapTool;
    //QCursor *mCursorZoomIn; //doesnt seem to be used anymore (TS)
    QString mStartupPath;
    //! full path name of the current map file (if it has been saved or loaded)
    QString mFullPathName;
    QgisIface *mQgisInterface;
    QSocket *mSocket;
    QString mVersionMessage;
    friend class QgisIface;
    QgsProviderRegistry *mProviderRegistry;
    //! application directory
    QString mAppDir;
    //! help viewer
    QgsHelpViewer *mHelpViewer;

    //! Flag to indicate if the splash screen is shown on startup
    bool myHideSplashFlag;
    //! Flag to indicate that newly added layers are not shown on
    //  the map
    bool mAddedLayersHidden;
    //! menu map (key is name, value is menu id)
    std::map<QString, int>mMenuMapByName;
    //! menu map (key is menu id, value is name)
    std::map<int, QString>mMenuMapById;
    //! list of recently opened/saved project files
    QStringList mRecentProjectPaths;

    //! Map composer
    QgsComposer *mComposer;

    //! How to determine the number of decimal places used to
    //! display the mouse position
    bool mMousePrecisionAutomatic;
    //! The number of decimal places to use if not automatic
    unsigned int mMousePrecisionDecimalPlaces;
    //! Flag to indicate how the project properties dialog was summoned
    bool mShowProjectionTab;

    /** String containing supporting vector file formats 

       Suitable for a QFileDialog file filter.  Build in ctor.
    */
    QString mVectorFileFilter;

    /** String containing supporting raster file formats 

       Suitable for a QFileDialog file filter.  Build in ctor.
    */
    QString mRasterFileFilter;
};

#endif
