/***************************************************************************
                         qgscontinuouscolrenderer.cpp  -  description
                             -------------------
    begin                : Nov 2003
    copyright            : (C) 2003 by Marco Hugentobler
    email                : mhugent@geo.unizh.ch
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
#include "qgscontinuouscolrenderer.h"
#include "qgis.h"
#include "qgsvectorlayer.h"
#include <cfloat>
#include "qgslegenditem.h"
#include "qgscontcoldialog.h"
#include "qgssymbologyutils.h"
#include "qgsmarkercatalogue.h"
#include <qdom.h>

QgsContinuousColRenderer::~QgsContinuousColRenderer()
{
    if (mMinimumItem)
    {
  delete mMinimumItem;
    }
    if (mMaximumItem)
    {
  delete mMaximumItem;
    }
}

void QgsContinuousColRenderer::setMinimumItem(QgsRenderItem * it)
{
    if (mMinimumItem)
    {
  delete mMinimumItem;
    }
    mMinimumItem = it;
}

void QgsContinuousColRenderer::setMaximumItem(QgsRenderItem * it)
{
    if (mMaximumItem)
    {
  delete mMaximumItem;
    }
    mMaximumItem = it;
}

void QgsContinuousColRenderer::initializeSymbology(QgsVectorLayer * layer, QgsDlgVectorLayerProperties * pr)
{
    mVectorType = layer->vectorType();
    bool toproperties = false;    //if false: rendererDialog is associated with the vector layer and image is rendered, true: rendererDialog is associated with buffer dialog of vector layer properties and no image is rendered
    if (pr)
    {
  toproperties = true;
    }

    setClassificationField(0);    //the classification field does not matter
    
    if (layer)
    {
  QgsSymbol* misy = new QgsSymbol();
  QgsSymbol* masy = new QgsSymbol();
  misy->brush().setStyle(Qt::SolidPattern);
  masy->brush().setStyle(Qt::SolidPattern);
  misy->pen().setStyle(Qt::SolidLine);
  masy->pen().setStyle(Qt::SolidLine);
  misy->pen().setWidth(1);
  masy->pen().setWidth(1);
  
  //random fill colors for points and polygons and pen colors for lines
  int red = 1 + (int) (255.0 * rand() / (RAND_MAX + 1.0));
  int green = 1 + (int) (255.0 * rand() / (RAND_MAX + 1.0));
  int blue = 1 + (int) (255.0 * rand() / (RAND_MAX + 1.0));
  
  //font tor the legend text
  QFont f("arial", 10, QFont::Normal);
  QFontMetrics fm(f);

  QPixmap *pixmap;
  if (toproperties)
        {
      pixmap = pr->getBufferPixmap();
  } 
  else
        {
      pixmap = layer->legendPixmap();
        }
  QString name = layer->name();
  int width = 40 + fm.width(layer->name());
  int height = (fm.height() + 10 > 35) ? fm.height() + 10 : 35;
  pixmap->resize(width, height);
  pixmap->fill();
  QPainter p(pixmap);

  if ( layer->vectorType() == QGis::Line || layer->vectorType() == QGis::Point )
        {
      misy->pen().setColor(QColor(red, green, blue));
      masy->pen().setColor(QColor(red, green, blue));
      //paint the pixmap for the legend
      p.setPen(misy->pen());
      p.drawLine(10, pixmap->height() - 25, 25, pixmap->height() - 10);
  } 
  else
        {
      misy->brush().setColor(QColor(red, green, blue));
      masy->brush().setColor(QColor(red, green, blue));
      misy->pen().setColor(QColor(0, 0, 0));
      masy->pen().setColor(QColor(0, 0, 0));
      //paint the pixmap for the legend
      p.setPen(misy->pen());
      p.setBrush(misy->brush());
      if (layer->vectorType() == QGis::Point)
            {
    p.drawRect(20, pixmap->height() - 17, 5, 5);
      } 
      else                //polygon
            {
    p.drawRect(10, pixmap->height() - 25, 20, 15);
            }
  }

  p.setPen(Qt::black);
  p.setFont(f);
  p.drawText(35, pixmap->height() - 10, name);
  
  QgsRenderItem *QgsRenderItem1 = new QgsRenderItem(misy, QString::number(DBL_MIN, 'f', 6), "");
  QgsRenderItem *QgsRenderItem2 = new QgsRenderItem(masy, QString::number(DBL_MAX, 'f', 6), "");

  setMinimumItem(QgsRenderItem1);
  setMaximumItem(QgsRenderItem2);

  QgsContColDialog *dialog = new QgsContColDialog(layer);

  if (toproperties)
        {
      pr->setBufferDialog(dialog);
  } 
  else
        {
      layer->setRendererDialog(dialog);
      QgsLegendItem *item;
      layer->updateItemPixmap();
        }
    } 
    else
    {
  qWarning("Warning, layer is null in QgsContinuousSymRenderer::initializeSymbology(..)");
    }
}

void QgsContinuousColRenderer::renderFeature(QPainter * p, QgsFeature * f, QPicture* pic, 
	double* scalefactor, bool selected, int oversampling, double widthScale)
{
    if ((mMinimumItem && mMaximumItem))
    {
  //first find out the value for the classification attribute
  std::vector < QgsFeatureAttribute > vec = f->attributeMap();
  double fvalue = vec[0].fieldValue().toDouble();
  
  //double fvalue = vec[mClassificationField].fieldValue().toDouble();
  double minvalue = mMinimumItem->value().toDouble();
  double maxvalue = mMaximumItem->value().toDouble();
  
  QColor mincolor, maxcolor;
  
  if ( mVectorType == QGis::Line || mVectorType == QGis::Point )
  {
      mincolor = mMinimumItem->getSymbol()->pen().color();
      maxcolor = mMaximumItem->getSymbol()->pen().color();
  } 
  else                    //if polygon
  {
      p->setPen(mMinimumItem->getSymbol()->pen());
      mincolor = mMinimumItem->getSymbol()->fillColor();
      maxcolor = mMaximumItem->getSymbol()->fillColor();
  }

  int red,green,blue;

  if((maxvalue - minvalue)!=0)
  {
      red = int (maxcolor.red() * (fvalue - minvalue) / (maxvalue - minvalue) + mincolor.red() * (maxvalue - fvalue) / (maxvalue - minvalue));
      green = int (maxcolor.green() * (fvalue - minvalue) / (maxvalue - minvalue) + mincolor.green() * (maxvalue - fvalue) / (maxvalue - minvalue));
      blue =  int (maxcolor.blue() * (fvalue - minvalue) / (maxvalue - minvalue) + mincolor.blue() * (maxvalue - fvalue) / (maxvalue - minvalue));
  }
  else
  {
      red = int (mincolor.red());
      green = int (mincolor.green());
      blue = int (mincolor.blue());
  }
      
  if ( mVectorType == QGis::Point && pic) {
      // TODO we must get always new marker -> slow, but continuous color for points 
      // probably is not used frequently

      QgsSymbol *sym = mMinimumItem->getSymbol();

      // Use color for both pen and brush (user can add another layer with outpine)
      // later add support for both pen and brush to dialog
      QPen pen = sym->pen();
      pen.setColor ( QColor(red, green, blue) );
      pen.setWidth ( (int) ( widthScale * pen.width() ) );

      QBrush brush = sym->brush();

      if ( selected ) {
          pen.setColor ( mSelectionColor );
          brush.setColor ( mSelectionColor );
      } else {
          brush.setColor ( QColor(red, green, blue) );
      }
      brush.setStyle ( Qt::SolidPattern );
      
      // Always with oversampling 0
      *pic = QgsMarkerCatalogue::instance()->marker ( sym->pointSymbolName(), sym->pointSize(),
	                                      pen, brush, 0 );

      if ( scalefactor ) *scalefactor = 1;
  } 
  else if ( mVectorType == QGis::Line )
  {
      p->setPen( QPen(QColor(red, green, blue),
		 (int)(widthScale*mMinimumItem->getSymbol()->pen().width()) ));//make sure the correct line width is used
  } 
  else
        {
      p->setBrush(QColor(red, green, blue));
        }
  if(selected)
  {
       QPen pen=mMinimumItem->getSymbol()->pen();
       pen.setColor(mSelectionColor);
       QBrush brush=mMinimumItem->getSymbol()->brush();
       brush.setColor(mSelectionColor);
       p->setPen(pen);
       p->setBrush(brush);
  }
    }
    
    
}

void QgsContinuousColRenderer::readXML(const QDomNode& rnode, QgsVectorLayer& vl)
{
    mVectorType = vl.vectorType();

    QgsSymbol* lsy = new QgsSymbol(); 
    QgsSymbol* usy = new QgsSymbol();
    QPen lpen, upen;
    QBrush lbrush, ubrush;

    QDomNode classnode = rnode.namedItem("classificationfield");
    int classificationfield = classnode.toElement().text().toInt();
    this->setClassificationField(classificationfield);

    //read the settings for the renderitem of the minimum value
    QDomNode lowernode = rnode.namedItem("lowestitem");
    QDomNode litemnode = lowernode.namedItem("renderitem");
    QString lvalue = litemnode.namedItem("value").toElement().text();

    QDomNode lsymbol = litemnode.namedItem("symbol");

    QDomElement loulcelement = lsymbol.namedItem("outlinecolor").toElement();
    int red = loulcelement.attribute("red").toInt();
    int green = loulcelement.attribute("green").toInt();
    int blue = loulcelement.attribute("blue").toInt();
    lpen.setColor(QColor(red, green, blue));

    QDomElement loustelement = lsymbol.namedItem("outlinestyle").toElement();
    lpen.setStyle(QgsSymbologyUtils::qString2PenStyle(loustelement.text()));

    QDomElement loulwelement = lsymbol.namedItem("outlinewidth").toElement();
    lpen.setWidth(loulwelement.text().toInt());

    QDomElement lfillcelement = lsymbol.namedItem("fillcolor").toElement();
    red = lfillcelement.attribute("red").toInt();
    green = lfillcelement.attribute("green").toInt();
    blue = lfillcelement.attribute("blue").toInt();
    lbrush.setColor(QColor(red, green, blue));

    QDomElement lfillpelement = lsymbol.namedItem("fillpattern").toElement();
    lbrush.setStyle(QgsSymbologyUtils::qString2BrushStyle(lfillpelement.text()));

    QString llabel = litemnode.namedItem("label").toElement().text();

    QDomNode uppernode = rnode.namedItem("highestitem");
    QDomNode uitemnode = uppernode.namedItem("renderitem");
    QString uvalue = uitemnode.namedItem("value").toElement().text();

    QDomNode usymbol = uitemnode.namedItem("symbol");

    QDomElement uoulcelement = usymbol.namedItem("outlinecolor").toElement();
    red = uoulcelement.attribute("red").toInt();
    green = uoulcelement.attribute("green").toInt();
    blue = uoulcelement.attribute("blue").toInt();
    upen.setColor(QColor(red, green, blue));

    QDomElement uoustelement = usymbol.namedItem("outlinestyle").toElement();
    upen.setStyle(QgsSymbologyUtils::qString2PenStyle(uoustelement.text()));

    QDomElement uoulwelement = usymbol.namedItem("outlinewidth").toElement();
    upen.setWidth(uoulwelement.text().toInt());

    QDomElement ufillcelement = usymbol.namedItem("fillcolor").toElement();
    red = ufillcelement.attribute("red").toInt();
    qWarning("red: " + QString::number(red).local8Bit());
    green = ufillcelement.attribute("green").toInt();
    qWarning("green: " + QString::number(green).local8Bit());
    blue = ufillcelement.attribute("blue").toInt();
    qWarning("blue: " + QString::number(blue).local8Bit());
    ubrush.setColor(QColor(red, green, blue));

    QDomElement ufillpelement = usymbol.namedItem("fillpattern").toElement();
    ubrush.setStyle(QgsSymbologyUtils::qString2BrushStyle(ufillpelement.text()));

    QString ulabel = uitemnode.namedItem("label").toElement().text();

    //add all together
    lsy->setPen(lpen);
    lsy->setBrush(lbrush);
    usy->setPen(upen);
    usy->setBrush(ubrush);

    QgsRenderItem *litem = new QgsRenderItem(lsy, lvalue, llabel);
    QgsRenderItem *uitem = new QgsRenderItem(usy, uvalue, ulabel);

    this->setMinimumItem(litem);
    this->setMaximumItem(uitem);

    vl.setRenderer(this);
    QgsContColDialog *cdialog = new QgsContColDialog(&vl);
    vl.setRendererDialog(cdialog);

    QgsDlgVectorLayerProperties *properties = new QgsDlgVectorLayerProperties(&vl);
    vl.setLayerProperties(properties);
    properties->setLegendType("Continuous Color");

    cdialog->apply();
}

void QgsContinuousColRenderer::writeXML(std::ostream& xml)
{
  // Always use utf8 in XML?
    xml << "\t\t<continuoussymbol>\n";
    xml << "\t\t\t<classificationfield>" << QString::number(this->classificationField()).utf8() <<
  "</classificationfield>\n";


    QgsRenderItem *lowestitem = this->minimumItem();
    QgsSymbol *lsymbol = lowestitem->getSymbol();
    xml << "\t\t\t<lowestitem>\n";
    xml << "\t\t\t\t<renderitem>\n";
    xml << "\t\t\t\t<value>" << lowestitem->value().utf8() << "</value>\n";
    xml << "\t\t\t\t\t<symbol>\n";
    xml << "\t\t\t\t\t\t<outlinecolor red=\"" 
        << QString::number(lsymbol->pen().color().red()).utf8()
      << "\" green=\"" 
        << QString::number(lsymbol->pen().color().green()).utf8()
      <<  "\" blue=\"" 
        << QString::number(lsymbol->pen().color().blue()).utf8() 
      << "\" />\n";
    xml << "\t\t\t\t\t\t<outlinestyle>" << QgsSymbologyUtils::penStyle2QString(lsymbol->pen().style()).utf8() << "</outlinestyle>\n";
    xml << "\t\t\t\t\t\t<outlinewidth>" << QString::number(lsymbol->pen().width()).utf8() << "</outlinewidth>\n";
    xml << "\t\t\t\t\t\t<fillcolor red=\"" << QString::number(lsymbol->brush().color().red()).utf8() << "\" green=\"" <<
  QString::number(lsymbol->brush().color().green()).utf8() << "\" blue=\"" <<
  QString::number(lsymbol->brush().color().blue()).utf8() << "\" />\n";
    xml << "\t\t\t\t\t\t<fillpattern>" << QgsSymbologyUtils::brushStyle2QString(lsymbol->brush().style()).utf8() <<
  "</fillpattern>\n";
    xml << "\t\t\t\t\t</symbol>\n";
    xml << "\t\t\t\t\t<label>" << lowestitem->label().utf8() << "</label>\n";
    xml << "\t\t\t\t</renderitem>\n";
    xml << "\t\t\t</lowestitem>\n";

    QgsRenderItem *highestitem = this->maximumItem();
    QgsSymbol *hsymbol = highestitem->getSymbol();
    xml << "\t\t\t<highestitem>\n";
    xml << "\t\t\t\t<renderitem>\n";
    xml << "\t\t\t\t<value>" << highestitem->value().utf8() << "</value>\n";
    xml << "\t\t\t\t\t<symbol>\n";
    xml << "\t\t\t\t\t\t<outlinecolor red=\"" << QString::number(hsymbol->pen().color().red()).utf8() << "\" green=\"" <<
  QString::number(hsymbol->pen().color().green()).utf8() << "\" blue=\"" << QString::number(hsymbol->pen().color().blue()).utf8() <<
  "\" />\n";
    xml << "\t\t\t\t\t\t<outlinestyle>" << QgsSymbologyUtils::penStyle2QString(hsymbol->pen().style()).utf8() <<
  "</outlinestyle>\n";
    xml << "\t\t\t\t\t\t<outlinewidth>" << QString::number(hsymbol->pen().width()).utf8() << "</outlinewidth>\n";
    xml << "\t\t\t\t\t\t<fillcolor red=\"" << QString::number(hsymbol->brush().color().red()).utf8() << "\" green=\"" <<
  QString::number(hsymbol->brush().color().green()).utf8() << "\" blue=\"" <<
  QString::number(hsymbol->brush().color().blue()).utf8() << "\" />\n";
    xml << "\t\t\t\t\t\t<fillpattern>" << QgsSymbologyUtils::brushStyle2QString(hsymbol->brush().style()).utf8() <<
  "</fillpattern>\n";
    xml << "\t\t\t\t\t</symbol>\n";
    xml << "\t\t\t\t\t<label>" << highestitem->label().utf8() << "</label>\n";
    xml << "\t\t\t\t</renderitem>\n";
    xml << "\t\t\t</highestitem>\n";
    xml << "\t\t</continuoussymbol>\n";
}

std::list<int> QgsContinuousColRenderer::classificationAttributes()
{
    std::list<int> list;
    list.push_back(mClassificationField);
    return list;
}

QString QgsContinuousColRenderer::name()
{
    return "Continuous Color";
}

bool QgsContinuousColRenderer::writeXML( QDomNode & layer_node, QDomDocument & document )
{
    bool returnval=true;
    QDomElement continuoussymbol=document.createElement("continuoussymbol");
    layer_node.appendChild(continuoussymbol);
    QDomElement classificationfield=document.createElement("classificationfield");
    QDomText classificationfieldtxt=document.createTextNode(QString::number(mClassificationField));
    classificationfield.appendChild(classificationfieldtxt);
    continuoussymbol.appendChild(classificationfield);
    QDomElement lowestitem=document.createElement("lowestitem");
    continuoussymbol.appendChild(lowestitem);
    if(mMinimumItem)
    {
	mMinimumItem->writeXML(lowestitem,document);
    }
    QDomElement highestitem=document.createElement("highestitem");
    continuoussymbol.appendChild(highestitem);
    if(mMaximumItem)
    {
	mMaximumItem->writeXML(highestitem,document);
    }
#ifdef WIN32
	return true;
#endif
}

const std::list<QgsRenderItem*> QgsContinuousColRenderer::items() const
{
    std::list<QgsRenderItem*> list;
    list.push_back(mMinimumItem);
    list.push_back(mMaximumItem);
    return list;
}
