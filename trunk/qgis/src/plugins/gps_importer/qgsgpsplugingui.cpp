/***************************************************************************
 *   Copyright (C) 2003 by Tim Sutton                                      *
 *   tim@linfiniti.com                                                     *
 *                                                                         *
 *   This is a plugin generated from the QGIS plugin template              *
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 ***************************************************************************/
#include "qgsgpsplugingui.h"
#include "qgsgpsdevicedialog.h"
#include "qgsmaplayer.h"
#include "qgsdataprovider.h"
#include "qgscontexthelp.h"
#include "qgslogger.h"

//qt includes
#include <QFileDialog>
#include <QSettings>

//standard includes
#include <cassert>
#include <cstdlib>
#include <iostream>


QgsGPSPluginGui::QgsGPSPluginGui(const BabelMap& importers, 
				 std::map<QString, QgsGPSDevice*>& devices,
				 std::vector<QgsVectorLayer*> gpxMapLayers, 
				 QWidget* parent, Qt::WFlags fl)
  : QDialog(parent, fl), mGPXLayers(gpxMapLayers),
    mImporters(importers), mDevices(devices) 
{
  setupUi(this);
  populatePortComboBoxes();
  populateULLayerComboBox();
  populateIMPBabelFormats();
  populateCONVDialog();
  
  connect(pbULEditDevices, SIGNAL(clicked()), this, SLOT(openDeviceEditor()));
  connect(pbDLEditDevices, SIGNAL(clicked()), this, SLOT(openDeviceEditor()));
  
  // make sure that the OK button is enabled only when it makes sense to
  // click it
  pbnOK = buttonBox->button(QDialogButtonBox::Ok);
  pbnOK->setEnabled(false);
  connect(leGPXFile, SIGNAL(textChanged(const QString&)), 
   this, SLOT(enableRelevantControls()));
  connect(leIMPInput, SIGNAL(textChanged(const QString&)), 
   this, SLOT(enableRelevantControls()));
  connect(leIMPOutput, SIGNAL(textChanged(const QString&)), 
   this, SLOT(enableRelevantControls()));
  connect(leIMPLayer, SIGNAL(textChanged(const QString&)), 
   this, SLOT(enableRelevantControls()));
  connect(leCONVInput, SIGNAL(textChanged(const QString&)), 
   this, SLOT(enableRelevantControls()));
  connect(leCONVOutput, SIGNAL(textChanged(const QString&)), 
   this, SLOT(enableRelevantControls()));
  connect(leCONVLayer, SIGNAL(textChanged(const QString&)), 
   this, SLOT(enableRelevantControls()));
  connect(leDLOutput, SIGNAL(textChanged(const QString&)), 
   this, SLOT(enableRelevantControls()));
  connect(leDLBasename, SIGNAL(textChanged(const QString&)), 
   this, SLOT(enableRelevantControls()));
  connect(cmbULLayer, SIGNAL(textChanged(QString)), 
   this, SLOT(enableRelevantControls()));
  connect(tabWidget, SIGNAL(currentChanged(int)), 
   this, SLOT(enableRelevantControls()));

  // drag and drop filter
  leGPXFile->setSuffixFilter("gpx");
}

QgsGPSPluginGui::~QgsGPSPluginGui()
{
}

void QgsGPSPluginGui::on_buttonBox_accepted()
{
  
  // what should we do?
  switch (tabWidget->currentPageIndex())
  {
  // add a GPX layer?
  case 0:
    emit loadGPXFile(leGPXFile->text(), cbGPXWaypoints->isChecked(), 
		     cbGPXRoutes->isChecked(), cbGPXTracks->isChecked());
    break;
  
    // or import other file?
  case 1: {
    const QString& typeString(cmbIMPFeature->currentText());
    emit importGPSFile(leIMPInput->text(), 
		       mImporters.find(mImpFormat)->second,
		       typeString == tr("Waypoints"), typeString == tr("Routes"),
		       typeString == tr("Tracks"), leIMPOutput->text(),
		       leIMPLayer->text());
    break;
  }
  // or download GPS data from a device?
  case 2: {
    int featureType = cmbDLFeatureType->currentItem();
    emit downloadFromGPS(cmbDLDevice->currentText(), cmbDLPort->currentText(),
			 featureType == 0, featureType == 1, featureType == 2, 
			 leDLOutput->text(), leDLBasename->text());
    break;
  }
  // or upload GPS data to a device?
  case 3: {
    emit uploadToGPS(mGPXLayers[cmbULLayer->currentItem()], 
		     cmbULDevice->currentText(), cmbULPort->currentText());
    break;
  }
  // or convert between waypoints/tracks=
  case 4: {
    int convertType = cmbCONVType->currentItem();
    emit convertGPSFile(leCONVInput->text(), 
                        convertType,
                        leCONVOutput->text(),
                        leCONVLayer->text());
    break;
  }
  }
  // The slots that are called above will emit closeGui() when successfull.
  // If not succesfull, the user will get another shot without starting from scratch
  // accept();
} 


void QgsGPSPluginGui::on_pbnDLOutput_clicked()
{
  QString myFileNameQString = 
    QFileDialog::getSaveFileName(this, //parent dialog
				 tr("Choose a filename to save under"),
                 "." , //initial dir
				 tr("GPS eXchange format (*.gpx)"));
  if (!myFileNameQString.isEmpty())
    leDLOutput->setText(myFileNameQString);
}


void QgsGPSPluginGui::enableRelevantControls() 
{
  // load GPX
  if (tabWidget->currentPageIndex() == 0) {
    if ((leGPXFile->text()==""))
    {
      pbnOK->setEnabled(false);
      cbGPXWaypoints->setEnabled(false);
      cbGPXRoutes->setEnabled(false);
      cbGPXTracks->setEnabled(false);
      cbGPXWaypoints->setChecked(false);
      cbGPXRoutes->setChecked(false);
      cbGPXTracks->setChecked(false);
    }
    else
    {
      pbnOK->setEnabled(true);
      cbGPXWaypoints->setEnabled(true);
      cbGPXWaypoints->setChecked(true);
      cbGPXRoutes->setEnabled(true);
      cbGPXTracks->setEnabled(true);
      cbGPXRoutes->setChecked(true);
      cbGPXTracks->setChecked(true);
    }
  }
  
  // import other file
  else if (tabWidget->currentPageIndex() == 1) {
    
    if ((leIMPInput->text() == "") || (leIMPOutput->text() == "") ||
	(leIMPLayer->text() == ""))
      pbnOK->setEnabled(false);
    else
      pbnOK->setEnabled(true);
  }
  
  // download from device
  else if (tabWidget->currentPageIndex() == 2) {
    if (cmbDLDevice->currentText() == "" || leDLBasename->text() == "" ||
	leDLOutput->text() == "")
      pbnOK->setEnabled(false);
    else
      pbnOK->setEnabled(true);
  }

  // upload to device
  else if (tabWidget->currentPageIndex() == 3) {
    if (cmbULDevice->currentText() == "" || cmbULLayer->currentText() == "")
      pbnOK->setEnabled(false);
    else
      pbnOK->setEnabled(true);
  }

  // convert between waypoint/routes
  else if (tabWidget->currentPageIndex() == 4) {
    
    if ((leCONVInput->text() == "") || (leCONVOutput->text() == "") ||
	(leCONVLayer->text() == ""))
      pbnOK->setEnabled(false);
    else
      pbnOK->setEnabled(true);
  }
}


void QgsGPSPluginGui::on_buttonBox_rejected()
{
  reject();
}


void QgsGPSPluginGui::on_pbnGPXSelectFile_clicked()
{
  QgsLogger::debug(" Gps File Importer::pbnGPXSelectFile_clicked() ");
  QString myFileTypeQString;
  QString myFilterString=tr("GPS eXchange format (*.gpx)");
  QSettings settings;
  QString dir = settings.readEntry("/Plugin-GPS/gpxdirectory");
  if (dir.isEmpty())
    dir = ".";
  QString myFileNameQString = QFileDialog::getOpenFileName(
          this, //parent dialog
          tr("Select GPX file"), //caption
          dir, //initial dir
          myFilterString, //filters to select
          &myFileTypeQString); //the pointer to store selected filter
  QgsLogger::debug("Selected filetype filter is : " + myFileTypeQString);
  if (!myFileNameQString.isEmpty())
    leGPXFile->setText(myFileNameQString);
}


void QgsGPSPluginGui::on_pbnIMPInput_clicked() {
  QString myFileType;
  QString myFileName = QFileDialog::getOpenFileName(
          this, //parent dialog
          tr("Select file and format to import"), //caption
          ".", //initial dir
          mBabelFilter,
          &myFileType); //the pointer to store selected filter
  if (!myFileName.isEmpty())
  {
    mImpFormat = myFileType.left(myFileType.length() - 6);
    std::map<QString, QgsBabelFormat*>::const_iterator iter;
    iter = mImporters.find(mImpFormat);
    if (iter == mImporters.end()) {
      QgsLogger::warning("Unknown file format selected: " +
                         myFileType.left(myFileType.length() - 6));
    }
    else {
      QgsLogger::debug(iter->first + " selected");
      leIMPInput->setText(myFileName);
      cmbIMPFeature->clear();
      if (iter->second->supportsWaypoints())
        cmbIMPFeature->insertItem(tr("Waypoints"));
      if (iter->second->supportsRoutes())
        cmbIMPFeature->insertItem(tr("Routes"));    
      if (iter->second->supportsTracks())
        cmbIMPFeature->insertItem(tr("Tracks"));
    }
  }
}


void QgsGPSPluginGui::on_pbnIMPOutput_clicked() {
  QString myFileNameQString = 
    QFileDialog::getSaveFileName(this, //parent dialog
				 tr("Choose a filename to save under"),
                 ".", //initial dir
				 tr("GPS eXchange format (*.gpx)"));
  if (!myFileNameQString.isEmpty())
    leIMPOutput->setText(myFileNameQString);
}


void QgsGPSPluginGui::populatePortComboBoxes() {
  
#ifdef linux
  // look for linux serial devices
  QString linuxDev("/dev/ttyS%1");
  for (int i = 0; i < 10; ++i) {
    if (QFileInfo(linuxDev.arg(i)).exists()) {
      cmbDLPort->insertItem(linuxDev.arg(i));
      cmbULPort->insertItem(linuxDev.arg(i));
    }
    else
      break;
  }
  
  // and the ttyUSB* devices (serial USB adaptor)
  linuxDev = "/dev/ttyUSB%1";
  for (int i = 0; i < 10; ++i) {
    if (QFileInfo(linuxDev.arg(i)).exists()) {
      cmbDLPort->insertItem(linuxDev.arg(i));
      cmbULPort->insertItem(linuxDev.arg(i));
    }
    else
      break;
  }
  
#endif

#ifdef __FreeBSD__ // freebsd
  // and freebsd devices (untested)
  QString freebsdDev("/dev/cuaa%1");
  for (int i = 0; i < 10; ++i) {
    if (QFileInfo(freebsdDev.arg(i)).exists()) {
      cmbDLPort->insertItem(freebsdDev.arg(i));
      cmbULPort->insertItem(freebsdDev.arg(i));
    }
    else
      break;
  }

  // and the ucom devices (serial USB adaptors)
  freebsdDev = "/dev/ucom%1";
  for (int i = 0; i < 10; ++i) {
    if (QFileInfo(freebsdDev.arg(i)).exists()) {
      cmbDLPort->insertItem(freebsdDev.arg(i));
      cmbULPort->insertItem(freebsdDev.arg(i));
    }
    else
      break;
  }
 
#endif
  
#ifdef sparc
  // and solaris devices (also untested)
  QString solarisDev("/dev/cua/%1");
  for (int i = 'a'; i < 'k'; ++i) {
    if (QFileInfo(solarisDev.arg(char(i))).exists()) {
      cmbDLPort->insertItem(solarisDev.arg(char(i)));
      cmbULPort->insertItem(solarisDev.arg(char(i)));
    }
    else
      break;
  }
#endif

#ifdef WIN32
  cmbULPort->insertItem("com1");
  cmbULPort->insertItem("com2");
  cmbULPort->insertItem("usb:");
  cmbDLPort->insertItem("com1");
  cmbDLPort->insertItem("com2");
  cmbDLPort->insertItem("usb:");
#endif

  // OSX, OpenBSD, NetBSD etc? Anyone?
  
  // remember the last ports used
  QSettings settings;
  QString lastDLPort = settings.readEntry("/Plugin-GPS/lastdlport", "");
  QString lastULPort = settings.readEntry("/Plugin-GPS/lastulport", "");
  for (int i = 0; i < cmbDLPort->count(); ++i) {
    if (cmbDLPort->text(i) == lastDLPort) {
      cmbDLPort->setCurrentItem(i);
      break;
    }
  }
  for (int i = 0; i < cmbULPort->count(); ++i) {
    if (cmbULPort->text(i) == lastULPort) {
      cmbULPort->setCurrentItem(i);
      break;
    }
  }
}


void QgsGPSPluginGui::populateULLayerComboBox() {
  for (std::vector<QgsVectorLayer*>::size_type i = 0; i < mGPXLayers.size(); ++i)
    cmbULLayer->insertItem(mGPXLayers[i]->name());
}


void QgsGPSPluginGui::populateIMPBabelFormats() {
  mBabelFilter = "";
  cmbULDevice->clear();
  cmbDLDevice->clear();
  QSettings settings;
  QString lastDLDevice = settings.readEntry("/Plugin-GPS/lastdldevice", "");
  QString lastULDevice = settings.readEntry("/Plugin-GPS/lastuldevice", "");
  BabelMap::const_iterator iter;
  for (iter = mImporters.begin(); iter != mImporters.end(); ++iter)
    mBabelFilter.append((const char*)iter->first).append(" (*.*);;");
  mBabelFilter.chop(2);   // Remove the trailing ;;, which otherwise leads to an empty filetype
  int u = -1, d = -1;
  std::map<QString, QgsGPSDevice*>::const_iterator iter2;
  for (iter2 = mDevices.begin(); iter2 != mDevices.end(); ++iter2) {
    cmbULDevice->insertItem(iter2->first);
    if (iter2->first == lastULDevice)
      u = cmbULDevice->count() - 1;
    cmbDLDevice->insertItem(iter2->first);
    if (iter2->first == lastDLDevice)
      d = cmbDLDevice->count() - 1;
  }
  if (u != -1)
    cmbULDevice->setCurrentItem(u);
  if (d != -1)
    cmbDLDevice->setCurrentItem(d);
}

void QgsGPSPluginGui::populateCONVDialog() {
  cmbCONVType->insertItem(tr("Route -> Waypoint"));
  cmbCONVType->insertItem(tr("Waypoint -> Route"));
  QString format = QString("<html><head><meta name=\"qrichtext\" content=\"1\" /><style type=\"text/css\"> p, li { white-space: pre-wrap; } </style></head><body style=\" font-family:'Sans Serif'; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;\"><p style=\" margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'Arial'; font-size:12pt;\"><span style=\" font-size:10pt;\">"\
"%1"\
"</span><a href=\"http://gpsbabel.sf.net\"><span style=\" font-size:10pt; text-decoration: underline; color:#0000ff;\">http://gpsbabel.sf.net</span></a><span style=\" font-size:10pt;\">"\
"%2"\
"</span></p><p style=\" margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'Arial'; font-size:10pt;\">"\
"%3"\
                           "</p></body></html>");
  QString text = format
    .arg(tr("QGIS can perform conversions of GPX files, by using GPSBabel ("))
    .arg(tr(") to perform the conversions. This requires that you have GPSBabel installed where QGIS can find it."))
    .arg(tr("Select a GPX input file name, the type of conversion you want to perform, a GPX filename that you want to save the converted file as, and a name for the new layer created from the result."));

  teCONVDescription->setHtml(text);
  QgsDebugMsg(text);
}

void QgsGPSPluginGui::on_pbnCONVInput_clicked()
{
  QString myFileTypeQString;
  QString myFilterString=tr("GPS eXchange format (*.gpx)");
  QSettings settings;
  QString dir = settings.readEntry("/Plugin-GPS/gpxdirectory");
  if (dir.isEmpty())
    dir = ".";
  QString myFileNameQString = QFileDialog::getOpenFileName(
          this, //parent dialog
          tr("Select GPX file"), //caption
          dir, //initial dir
          myFilterString, //filters to select
          &myFileTypeQString); //the pointer to store selected filter
  if (!myFileNameQString.isEmpty())
    leCONVInput->setText(myFileNameQString);
}

void QgsGPSPluginGui::on_pbnCONVOutput_clicked() {
  QString myFileNameQString = 
    QFileDialog::getSaveFileName(this, //parent dialog
				 tr("Choose a filename to save under"),
                 ".", //initial dir
				 tr("GPS eXchange format (*.gpx)"));
  if (!myFileNameQString.isEmpty())
    leCONVOutput->setText(myFileNameQString);
}

void QgsGPSPluginGui::openDeviceEditor() {
  QgsGPSDeviceDialog* dlg = new QgsGPSDeviceDialog(mDevices);
  dlg->show();
  connect(dlg, SIGNAL(devicesChanged()), this, SLOT(devicesUpdated()));
}


void QgsGPSPluginGui::devicesUpdated() {
  populateIMPBabelFormats();
}


void QgsGPSPluginGui::on_buttonBox_helpRequested()
{
  QgsContextHelp::run(context_id);
}
