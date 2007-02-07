/***************************************************************************
                         qgsrenderer.h  -  description
                             -------------------
    begin                : Sat Jan 4 2003
    copyright            : (C) 2003 by Gary E.Sherman
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
/* $Id$ */
#ifndef QGSRENDERER_H
#define QGSRENDERER_H

class QgsFeature;
class QgsVectorLayer;
class QPainter;
class QImage;
class QDomNode;
class QDomDocument;
class QColor;

#include "qgis.h"

#include <list>

class QgsRenderItem;
class QgsSymbol;

typedef QList<int> QgsAttributeList;


/**Abstract base class for renderers. A renderer holds all the information necessary to draw the contents of a vector layer to a map canvas. The vector layer then passes each feature to paint to the renderer*/
class CORE_EXPORT QgsRenderer
{
 public:
    /** Default ctor sets up selection colour from project properties */
    QgsRenderer();
    /** Virtual destructor because we have virtual methods... */
    virtual ~QgsRenderer();
    /** Determines if a feature will be rendered or not 
	@param f a pointer to the feature to determine if rendering will happen*/
    virtual bool willRenderFeature(QgsFeature *f) {return true;}
    /**A vector layer passes features to a renderer object to change the brush and pen of the qpainter
     @param p the painter storing brush and pen
     @param f a pointer to the feature to be rendered
     @param pic pointer to an image (used for point symbols)
     @param scalefactor pointer to the scale factor for the marker image*/
    virtual void renderFeature(QPainter* p, QgsFeature& f,QImage* pic, double* scalefactor, bool selected, double widthScale = 1.)=0;
    /**Reads the renderer configuration from an XML file
     @param rnode the DOM node to read 
     @param vl the vector layer which will be associated with the renderer*/
    virtual void readXML(const QDomNode& rnode, QgsVectorLayer& vl)=0;
    /**Writes the contents of the renderer to a configuration file*/
    // virtual void writeXML(std::ostream& xml)=0;
    /**Writes the contents of the renderer to a configuration file
     @ return true in case of success*/
    virtual bool writeXML( QDomNode & layer_node, QDomDocument & document ) const=0;
    /** Returns true, if attribute values are used by the renderer and false otherwise*/
    virtual bool needsAttributes() const=0;
    /**Returns a list with indexes of classification attributes*/
    virtual QgsAttributeList classificationAttributes() const=0;
    /**Returns the renderers name*/
    virtual QString name() const=0;    
    /**Return symbology items*/
    virtual const std::list<QgsSymbol*> symbols() const=0;
    /**Returns a copy of the renderer (a deep copy on the heap)*/
    virtual QgsRenderer* clone() const=0;
    /** Change selection color */
    static void setSelectionColor(QColor color);
    /**Returns true if this renderer returns a pixmap in the render method (e.g. for point data or diagrams)*/
    virtual bool containsPixmap() const;
   
 protected:
    /**Color to draw selected features - static so we can change it in proj props and automatically 
     all renderers are updated*/
   static QColor mSelectionColor;

   /**Layer type*/
    QGis::VectorType mVectorType;
};

#endif // QGSRENDERER_H
