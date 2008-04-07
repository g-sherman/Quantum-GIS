/***************************************************************************
                              qgsrendercontext.h    
                              ------------------
  begin                : March 16, 2008
  copyright            : (C) 2008 by Marco Hugentobler
  email                : marco dot hugentobler at karto dot baug dot ethz dot ch
 ***************************************************************************/

/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#ifndef QGSRENDERCONTEXT_H
#define QGSRENDERCONTEXT_H

#include "qgscoordinatetransform.h"
#include "qgsmaptopixel.h"
#include "qgsrect.h"

class QPainter;

/**Contains information about the context of a rendering operation*/
class QgsRenderContext
{
 public:
  QgsRenderContext();
  ~QgsRenderContext();

  //getters

  QPainter* painter() {return mPainter;}

  const QgsCoordinateTransform* coordTransform() const {return mCoordTransform;}

  const QgsRect& extent() const {return mExtent;}

  const QgsMapToPixel& mapToPixel() const {return mMapToPixel;}

  double scaleFactor() const {return mScaleFactor;}

  double rasterScaleFactor() const {return mRasterScaleFactor;}
  
  bool renderingStopped() const {return mRenderingStopped;}

  bool forceVectorOutput() const {return mForceVectorOutput;}

  bool drawEditingInformation() const {return mDrawEditingInformation;}

  //setters

  /**Sets coordinate transformation. QgsRenderContext takes ownership and deletes if necessary*/
  void setCoordTransform(QgsCoordinateTransform* t);
  void setMapToPixel(const QgsMapToPixel& mtp) {mMapToPixel = mtp;}
  void setExtent(const QgsRect& extent){mExtent = extent;}
  void setDrawEditingInformation(bool b){mDrawEditingInformation = b;}
  void setRenderingStopped(bool stopped){mRenderingStopped = stopped;}
  void setScaleFactor(double factor){mScaleFactor = factor;}
  void setRasterScaleFactor(double factor){mRasterScaleFactor = factor;}
  void setPainter(QPainter* p){mPainter = p;}

 private:

  //Copy constructor and assignement operator forbidden
   QgsRenderContext(const QgsRenderContext& other){}
   QgsRenderContext& operator=(const QgsRenderContext&){}

   /**Painter for rendering operations*/
   QPainter* mPainter;
   
   /**For transformation between coordinate systems. Can be 0 if on-the-fly reprojection is not used*/
   QgsCoordinateTransform* mCoordTransform;
   
   /**True if vertex markers for editing should be drawn*/
   bool mDrawEditingInformation;
   
   QgsRect mExtent;
   
  /**If true then no rendered vector elements should be cached as image*/
   bool mForceVectorOutput;
   
   QgsMapToPixel mMapToPixel;
   
   /**True if the rendering has been canceled*/
   bool mRenderingStopped;
   
   /**Factor to scale line widths and point marker sizes*/
   double mScaleFactor;

   /**Factor to scale rasters*/
   double mRasterScaleFactor;
};

#endif
