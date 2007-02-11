/***************************************************************************
    qgsvertexmarker.cpp  - canvas item which shows a simple vertex marker
    ---------------------
    begin                : February 2006
    copyright            : (C) 2006 by Martin Dobias
    email                : wonder.sk at gmail dot com
 ***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/
/* $Id$ */

#include <QPainter>

#include "qgsvertexmarker.h"


QgsVertexMarker::QgsVertexMarker(QgsMapCanvas* mapCanvas)
  : QgsMapCanvasItem(mapCanvas)
{
  mIconSize = 10;
  mIconType = ICON_X;
}

void QgsVertexMarker::setIconType(int type)
{
  mIconType = type;
}
    
void QgsVertexMarker::setIconSize(int iconSize)
{
  mIconSize = iconSize;
}
    
void QgsVertexMarker::setCenter(const QgsPoint& point)
{
   mCenter = point;
   QPointF pt = toCanvasCoords(mCenter);
   setPos(pt);
   std::cout << "at " << (int) pt.x() << " " << (int) pt.y() << std::endl;
}


void QgsVertexMarker::paint(QPainter* p)
{
  qreal s = (mIconSize - 1) / 2;

  p->setPen(QColor(255,0,0));
  switch (mIconType)
  {
    case ICON_NONE:
      break;
      
    case ICON_CROSS:
      p->drawLine(QLineF(-s, 0, s, 0));
      p->drawLine(QLineF( 0,-s, 0, s));
      break;
      
    case ICON_X:
      p->drawLine(QLineF(-s,-s, s, s));
      p->drawLine(QLineF(-s, s, s,-s));
      break;
      
    case ICON_BOX:
      p->drawLine(QLineF(-s,-s, s,-s));
      p->drawLine(QLineF( s,-s, s, s));
      p->drawLine(QLineF( s, s,-s, s));
      p->drawLine(QLineF(-s, s,-s,-s));
      break;
  }
}


QRectF QgsVertexMarker::boundingRect() const
{
  qreal s = qreal(mIconSize + QPen(QColor(255,0,0)).width()) / 2.0;
  return QRectF(-s,-s,2.0*s,2.0*s);
}

void QgsVertexMarker::updatePosition()
{
  setCenter(mCenter);
}
