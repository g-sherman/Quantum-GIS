/***************************************************************************
  labelinggui.cpp
  Smart labeling for vector layers
  -------------------
         begin                : June 2009
         copyright            : (C) Martin Dobias
         email                : wonder.sk at gmail.com

 ***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#include "labelinggui.h"

#include <qgsvectorlayer.h>
#include <qgsvectordataprovider.h>
#include <qgsmaplayerregistry.h>

#include "pallabeling.h"
#include "engineconfigdialog.h"

#include <QColorDialog>
#include <QFontDialog>

#include <iostream>
#include <QApplication>



LabelingGui::LabelingGui( PalLabeling* lbl, QString layerId, QWidget* parent )
    : QDialog( parent ), mLBL( lbl ), mLayerId( layerId )
{
  setupUi( this );

  connect(btnTextColor, SIGNAL(clicked()), this, SLOT(changeTextColor()) );
  connect(btnChangeFont, SIGNAL(clicked()), this, SLOT(changeTextFont()) );
  connect(chkBuffer, SIGNAL(toggled(bool)), this, SLOT(updatePreview()) );
  connect(btnBufferColor, SIGNAL(clicked()), this, SLOT(changeBufferColor()) );
  connect(spinBufferSize, SIGNAL(valueChanged(int)), this, SLOT(updatePreview()) );
  connect(btnEngineSettings, SIGNAL(clicked()), this, SLOT(showEngineConfigDialog()) );

  populatePlacementMethods();
  populateFieldNames();

  const LayerSettings& lyr = lbl->layer(layerId);
  if (!lyr.layerId.isEmpty())
  {
    // load the labeling settings
    cboPlacement->setCurrentIndex( cboPlacement->findData( QVariant( (int)lyr.placement ) ) );
    cboFieldName->setCurrentIndex( cboFieldName->findText(lyr.fieldName) );
    chkEnableLabeling->setChecked( lyr.enabled );
    sliderPriority->setValue( lyr.priority );
    chkNoObstacle->setChecked( !lyr.obstacle );
    spinDist->setValue( lyr.dist );

    bool scaleBased = (lyr.scaleMin != 0 && lyr.scaleMax != 0);
    chkScaleBasedVisibility->setChecked(scaleBased);
    if (scaleBased)
    {
      spinScaleMin->setValue(lyr.scaleMin);
      spinScaleMax->setValue(lyr.scaleMax);
    }

    bool buffer = (lyr.bufferSize != 0);
    chkBuffer->setChecked(buffer);
    if (buffer)
      spinBufferSize->setValue(lyr.bufferSize);
  }
  else
  {
    // set enabled by default
    chkEnableLabeling->setChecked( true );

  }

  // feature distance available only for points and lines
  if (layer()->geometryType() == QGis::Polygon)
  {
    spinDist->setEnabled( false );
  }

  btnTextColor->setColor( lyr.textColor );
  btnBufferColor->setColor( lyr.bufferColor );
  updateFont( lyr.textFont );
  updateUi();

  connect(chkBuffer, SIGNAL(toggled(bool)), this, SLOT(updateUi()) );
  connect(chkScaleBasedVisibility, SIGNAL(toggled(bool)), this, SLOT(updateUi()) );
}

LabelingGui::~LabelingGui()
{
}

QgsVectorLayer* LabelingGui::layer()
{
  QgsMapLayer* layer = QgsMapLayerRegistry::instance()->mapLayer(mLayerId);
  if (layer == NULL || layer->type() != QgsMapLayer::VectorLayer)
    return NULL;
  return static_cast<QgsVectorLayer*>(layer);
}

LayerSettings LabelingGui::layerSettings()
{
  LayerSettings lyr;
  lyr.layerId = mLayerId;
  lyr.fieldName = cboFieldName->currentText();
  lyr.placement = (LayerSettings::Placement) cboPlacement->itemData(cboPlacement->currentIndex()).toInt();
  lyr.textColor = btnTextColor->color();
  lyr.textFont = lblFontPreview->font();
  lyr.enabled = chkEnableLabeling->isChecked();
  lyr.priority = sliderPriority->value();
  lyr.obstacle = !chkNoObstacle->isChecked();
  lyr.dist = spinDist->value();
  if (chkScaleBasedVisibility->isChecked())
  {
    lyr.scaleMin = spinScaleMin->value();
    lyr.scaleMax = spinScaleMax->value();
  }
  else
  {
    lyr.scaleMin = lyr.scaleMax = 0;
  }
  if (chkBuffer->isChecked())
  {
    lyr.bufferSize = spinBufferSize->value();
    lyr.bufferColor = btnBufferColor->color();
  }
  else
  {
    lyr.bufferSize = 0;
  }

  return lyr;
}

void LabelingGui::populatePlacementMethods()
{
  switch (layer()->geometryType())
  {
    case QGis::Point:
      cboPlacement->addItem(tr("Around the point"), QVariant(LayerSettings::AroundPoint));
      break;
    case QGis::Line:
      cboPlacement->addItem(tr("On the line"), QVariant(LayerSettings::OnLine));
      cboPlacement->addItem(tr("Around the line"), QVariant(LayerSettings::AroundLine));
      break;
    case QGis::Polygon:
      cboPlacement->addItem(tr("Horizontal"), QVariant(LayerSettings::Horizontal));
      cboPlacement->addItem(tr("Free"), QVariant(LayerSettings::Free));
      cboPlacement->addItem(tr("Around the centroid"), QVariant(LayerSettings::AroundPoint));
      cboPlacement->addItem(tr("On the perimeter"), QVariant(LayerSettings::OnLine));
      cboPlacement->addItem(tr("Around the perimeter"), QVariant(LayerSettings::AroundLine));
      break;
  }
}

void LabelingGui::populateFieldNames()
{
  QgsFieldMap fields = layer()->dataProvider()->fields();
  for (QgsFieldMap::iterator it = fields.begin(); it != fields.end(); it++)
  {
    cboFieldName->addItem(it->name());
  }
}

void LabelingGui::changeTextColor()
{
  QColor color = QColorDialog::getColor( btnTextColor->color(), this);
  if (!color.isValid())
    return;

  btnTextColor->setColor(color);
  updatePreview();
}

void LabelingGui::changeTextFont()
{
  bool ok;
  QFont font = QFontDialog::getFont(&ok, lblFontPreview->font(), this);
  if (ok)
    updateFont( font );
}

void LabelingGui::updateFont(QFont font)
{
  lblFontName->setText( QString("%1, %2").arg(font.family()).arg(font.pointSize()) );
  lblFontPreview->setFont(font);

  updatePreview();
}

void LabelingGui::updatePreview()
{
  lblFontPreview->setTextColor(btnTextColor->color());
  if (chkBuffer->isChecked())
    lblFontPreview->setBuffer(spinBufferSize->value(), btnBufferColor->color());
  else
    lblFontPreview->setBuffer(0, Qt::white);
}

void LabelingGui::showEngineConfigDialog()
{
  EngineConfigDialog dlg(mLBL, this);
  dlg.exec();
}

void LabelingGui::updateUi()
{
  // enable/disable scale-based, buffer
  bool buf = chkBuffer->isChecked();
  spinBufferSize->setEnabled(buf);
  btnBufferColor->setEnabled(buf);

  bool scale = chkScaleBasedVisibility->isChecked();
  spinScaleMin->setEnabled(scale);
  spinScaleMax->setEnabled(scale);
}

void LabelingGui::changeBufferColor()
{
  QColor color = QColorDialog::getColor( btnBufferColor->color(), this);
  if (!color.isValid())
    return;

  btnBufferColor->setColor(color);
  updatePreview();
}
