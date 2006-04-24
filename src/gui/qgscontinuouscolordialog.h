/***************************************************************************
                          qgscontinuouscolordialog.h 
                        Continuous color renderer dialog
                             -------------------
    begin                : 2004-02-12
    copyright            : (C) 2004 by Gary E.Sherman
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

#ifndef QGSCONTINUOUSCOLORDIALOG_H
#define QGSCONTINUOUSCOLORDIALOG_H

#include "ui_qgscontinuouscolordialogbase.h"
#include "qgsrendererdialog.h"
#include <map>

class QgsContinuousColorDialog: public QgsRendererDialog, private Ui::QgsContinuousColorDialogBase
{
    Q_OBJECT
 public: 
    QgsContinuousColorDialog(QgsVectorLayer* layer);
    ~QgsContinuousColorDialog();
    void apply();	
 protected slots:
    void selectMinimumColor();
    void selectMaximumColor();
 protected:
    /**Stores the names and numbers of the fields with numeric values*/
     std::map<QString,int> mFieldMap;
 private:
    QgsContinuousColorDialog();
};

#endif
