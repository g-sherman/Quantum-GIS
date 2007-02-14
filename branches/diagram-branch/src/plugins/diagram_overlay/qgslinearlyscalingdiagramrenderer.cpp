#include "qgslinearlyscalingdiagramrenderer.h"
#include "qgsfeature.h"
#include "qgsfeatureattribute.h"
#include <limits>

QgsLinearlyScalingDiagramRenderer::QgsLinearlyScalingDiagramRenderer(const QString& name, const QgsAttributeList& att, const std::list<QColor>& c): QgsDiagramRenderer(name, att, c)
{
  
}

QgsLinearlyScalingDiagramRenderer::~QgsLinearlyScalingDiagramRenderer()
{

}

QImage* QgsLinearlyScalingDiagramRenderer::renderDiagram(const QgsFeature& f) const
{ 
  double theValue;
  int width, height;
  if(getDiagramSize(width, height, theValue, f))
    {
      return 0;
    }
  else
    {
      return mFactory.createDiagram(width, height, f);
    }
}

int QgsLinearlyScalingDiagramRenderer::getDiagramSize(int& width, int& height, double& value, const QgsFeature& f) const
{
  //find out attribute value of the feature
  QgsAttributeMap featureAttributes = f.attributeMap();
  QgsAttributeMap::const_iterator iter = featureAttributes.find(mClassificationField);
  if(iter == featureAttributes.constEnd())
    {
      return 0;
    }
  
  value = iter.value().fieldValue().toDouble();
  double scalefactor = (value - mLowerItem.lowerBound()) / (mUpperItem.lowerBound() - mLowerItem.lowerBound());

  //linearly interpolate height and width according to min/max value
  if(mWellKnownName == "Pie")
    {
      height = (int)(mLowerItem.height() + (mUpperItem.height() - mLowerItem.height())*scalefactor);
      width = (int)(mLowerItem.width() + (mUpperItem.width() - mLowerItem.height())*scalefactor);
    }
  else if(mWellKnownName == "Bar")
    {
      //height of the classification attribute
      int heightClassAttr = (int)(mLowerItem.height() + (mUpperItem.height() - mLowerItem.height())*scalefactor);
      //find out the highest value of all attributes
      double highestValue = -std::numeric_limits<double>::max();
      double currentValue = 0;
      for(QgsAttributeMap::const_iterator iter = featureAttributes.constBegin(); iter != featureAttributes.constEnd(); ++iter)
	{
	  currentValue = iter.value().fieldValue().toDouble();
	  if(currentValue > highestValue)
	    {
	      highestValue = currentValue;
	    }
	}
      height = (int)(heightClassAttr / value * highestValue);


      //calculate height for the highest value
      //width only depends on number of attributes
      width = featureAttributes.size() * 120;
      
    }
  return 0;
}
