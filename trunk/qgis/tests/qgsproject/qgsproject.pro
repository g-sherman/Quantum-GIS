######################################################################
# Automatically generated by qmake (1.07a) Fri Jan 14 13:01:49 2005
######################################################################

TEMPLATE = app
TARGET = testproject


# get gdal info
GDAL_LIBS = $$system(gdal-config --libs)
GDAL_DEPS = $$system(gdal-config --dep-libs)

# get gdal inludes
GDAL_INC = $$system(gdal-config --cflags)
INCLUDEPATH += . $$GDAL_INC

# qgis
QGIS_INC = $(HOME)/include/qgis
INCLUDEPATH += $$QGIS_INC

QGIS_FILES = 	qgisapp.o					\
		qgisiface.o					\
		qgisinterface.o					\
		qgsacetatelines.o				\
		qgsacetateobject.o				\
		qgsacetaterectangle.o				\
		qgsattributeaction.o				\
		qgsattributeactiondialog.o			\
		qgsattributedialog.o				\
		qgsattributetable.o				\
		qgsattributetabledisplay.o			\
		qgscolortable.o					\
		qgscontcoldialog.o				\
		qgscontinuouscolrenderer.o			\
		qgscoordinatetransform.o			\
		qgsmaptopixel.o					\
		qgscustomsymbol.o				\
		qgsdatasource.o					\
		qgsdlgvectorlayerproperties.o			\
		qgsfeatureattribute.o				\
		qgsfeature.o					\
		qgsfield.o					\
		qgsgeomtypedialog.o				\
		qgsrenderer.o					\
		qgsgraduatedmarenderer.o			\
		qgsgraduatedsymrenderer.o			\
		qgsgramadialog.o				\
		qgsgramaextensionwidget.o			\
		qgsgrasydialog.o				\
		qgshelpviewer.o					\
		qgsidentifyresults.o				\
		qgslabelattributes.o				\
		qgslabel.o					\
		qgslabeldialog.o				\
		qgslegend.o					\
		qgslegenditem.o					\
		qgsline.o					\
		qgslinestyledialog.o				\
		qgslinesymbol.o					\
		qgsludialog.o					\
		qgsmapcanvas.o					\
		qgsmaplayer.o					\
		qgsmaplayerregistry.o				\
		qgsmapserverexport.o				\
		qgsmarkerdialog.o				\
		qgsmarkersymbol.o				\
		qgsoptions.o					\
		qgspatterndialog.o				\
		qgspluginitem.o					\
		qgspluginmanager.o				\
		qgspluginmetadata.o				\
		qgspluginregistry.o				\
		qgspoint.o					\
		qgspolygonsymbol.o				\
		qgsproject.o					\
		qgsprojectproperties.o				\
		qgsprovidermetadata.o				\
		qgsproviderregistry.o				\
		qgsrangerenderitem.o				\
		qgsrasterlayer.o				\
		qgsrasterlayerproperties.o			\
		qgsrect.o					\
		qgsrenderitem.o					\
		qgsscalecalculator.o				\
		qgssimadialog.o					\
		qgssimarenderer.o				\
		qgssinglesymrenderer.o				\
		qgssisydialog.o					\
		qgssvgcache.o					\
		qgssymbol.o					\
		qgssymbologyutils.o				\
		qgsuniquevalrenderer.o				\
		qgsuvaldialog.o					\
		qgsuvalmadialog.o				\
		qgsuvalmarenderer.o				\
		qgsvectordataprovider.o				\
		qgsvectorfilewriter.o				\
		qgsvectorlayer.o				\
		splashscreen.o					\
		qgisappbase.uic.o				\
		qgsabout.uic.o					\
		qgsattributedialogbase.uic.o			\
		qgsattributeactiondialogbase.uic.o		\
		qgsattributetablebase.uic.o			\
		qgscontcoldialogbase.uic.o			\
		qgsdlgvectorlayerpropertiesbase.uic.o		\
		qgsgeomtypedialogbase.uic.o			\
		qgsgramadialogbase.uic.o			\
		qgsgrasydialogbase.uic.o			\
		qgshelpviewerbase.uic.o				\
		qgsidentifyresultsbase.uic.o			\
		qgslabeldialogbase.uic.o			\
		qgslegenditembase.uic.o				\
		qgslinestyledialogbase.uic.o			\
		qgsludialogbase.uic.o				\
		qgsmapserverexportbase.uic.o			\
		qgsmarkerdialogbase.uic.o			\
		qgsmessageviewer.uic.o				\
		qgsoptionsbase.uic.o				\
		qgspatterndialogbase.uic.o			\
		qgspluginmanagerbase.uic.o			\
		qgsprojectpropertiesbase.uic.o			\
		qgsrasterlayerpropertiesbase.uic.o		\
		qgssimadialogbase.uic.o				\
		qgssisydialogbase.uic.o				\
		qgsuvaldialogbase.uic.o				\
		qgsuvalmadialogbase.uic.o			\
		qgsdbsourceselect.o				\
		qgsdbsourceselect.moc.o				\
		qgsnewconnection.o				\
		qgsnewconnection.moc.o				\
		qgspgquerybuilder.o				\
		qgspgquerybuilder.moc.o				\
		qgisapp.moc.o					\
		qgisinterface.moc.o				\
		qgsattributeaction.moc.o			\
		qgsattributeactiondialog.moc.o			\
		qgsattributedialog.moc.o			\
		qgsattributetable.moc.o				\
		qgscoordinatetransform.moc.o			\
		qgscontcoldialog.moc.o				\
		qgsdlgvectorlayerproperties.moc.o		\
		qgsgeomtypedialog.moc.o				\
		qgsgramadialog.moc.o				\
		qgsgramaextensionwidget.moc.o			\
		qgsgrasydialog.moc.o				\
		qgshelpviewer.moc.o				\
		qgsidentifyresults.moc.o			\
		qgslabeldialog.moc.o				\
		qgslegenditem.moc.o				\
		qgslegend.moc.o					\
		qgslinestyledialog.moc.o			\
		qgsludialog.moc.o				\
		qgsmapcanvas.moc.o				\
		qgsmaplayerinterface.moc.o			\
		qgsmaplayer.moc.o				\
		qgsmaplayerregistry.moc.o			\
		qgsmapserverexport.moc.o			\
		qgsmarkerdialog.moc.o				\
		qgsoptions.moc.o				\
		qgspatterndialog.moc.o				\
		qgspluginmanager.moc.o				\
		qgsprojectproperties.moc.o			\
		qgsrasterlayer.moc.o				\
		qgsrasterlayerproperties.moc.o			\
		qgssimadialog.moc.o				\
		qgssisydialog.moc.o				\
		qgsuvaldialog.moc.o				\
		qgsuvalmadialog.moc.o				\
		qgsvectorlayer.moc.o				\
		splashscreen.moc.o				\
		qgisappbase.moc.uic.o				\
		qgsabout.moc.uic.o				\
		qgsattributedialogbase.moc.uic.o		\
		qgsattributeactiondialogbase.moc.uic.o		\
		qgsattributetablebase.moc.uic.o			\
		qgscontcoldialogbase.moc.uic.o			\
		qgsdlgvectorlayerpropertiesbase.moc.uic.o	\
		qgsgeomtypedialogbase.moc.uic.o			\
		qgsgramadialogbase.moc.uic.o			\
		qgsgrasydialogbase.moc.uic.o			\
		qgshelpviewerbase.moc.uic.o			\
		qgsidentifyresultsbase.moc.uic.o		\
		qgslabeldialogbase.moc.uic.o			\
		qgslegenditembase.moc.uic.o			\
		qgslinestyledialogbase.moc.uic.o		\
		qgsludialogbase.moc.uic.o			\
		qgsmapserverexportbase.moc.uic.o		\
		qgsmarkerdialogbase.moc.uic.o			\
		qgsmessageviewer.moc.uic.o			\
		qgsoptionsbase.moc.uic.o			\
		qgspatterndialogbase.moc.uic.o			\
		qgspluginmanagerbase.moc.uic.o			\
		qgsprojectpropertiesbase.moc.uic.o		\
		qgsrasterlayerpropertiesbase.moc.uic.o		\
		qgssimadialogbase.moc.uic.o			\
		qgssisydialogbase.moc.uic.o			\
		qgsuvaldialogbase.moc.uic.o			\
		qgsuvalmadialogbase.moc.uic.o			\
		qgsdbsourceselectbase.uic.o			\
		qgsnewconnectionbase.uic.o			\
		qgspgquerybuilderbase.uic.o			\
		qgsdbsourceselectbase.moc.uic.o			\
		qgsnewconnectionbase.moc.uic.o			\
		qgspgquerybuilderbase.moc.uic.o	


QGIS_OBJS = $$join(QGIS_FILES," ../../src/qgis-"," ../../src/qgis-")

INCLUDEPATH += .
LIBPATH += $(HOME)/lib

CONFIG += qt warn_on debug thread exceptions stl rtti

DEFINES = QGISDEBUG

LIBS += -lcppunit -dl -lqgis $$QGIS_OBJS $$GDAL_LIBS

# Input
HEADERS += projecttest.h
SOURCES += main.cpp

