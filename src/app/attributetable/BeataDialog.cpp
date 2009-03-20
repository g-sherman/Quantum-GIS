/***************************************************************************
  BeataDialog.cpp 
  BEtter Attribute TAble
  -------------------
         date                 : Feb 2009
         copyright            : Vita Cizek
         email                : weetya (at) gmail.com

 ***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#include <QtGui>

#include "BeataDialog.h"
#include "BeataModel.h"
#include "BeataView.h"

#include <qgsapplication.h>
#include <qgsvectordataprovider.h>
#include <qgsvectorlayer.h>
#include <qgssearchstring.h>
#include <qgssearchtreenode.h>

#include "qgisapp.h"
#include "qgssearchquerybuilder.h"

BeataDialog::BeataDialog(QgsVectorLayer *theLayer, QWidget *parent, Qt::WindowFlags flags)
  : QDialog(parent, flags)
{
  mLayer = theLayer;

  setupUi(this);
  
  setAttribute(Qt::WA_DeleteOnClose);

  QSettings settings;
  restoreGeometry( settings.value( "/Windows/BetterAttributeTable/geometry" ).toByteArray() );
  
  mView->setLayer(mLayer);
  mFilterModel = (BeataFilterModel *) mView->model();
  mModel = (BeataModel *)((BeataFilterModel *)mView->model())->sourceModel();

  mQuery = query;
  mColumnBox = columnBox;
  columnBoxInit();

  mShowBox = showBox;
  mShowBox->addItem("Show unselected rows");
  mShowBox->addItem("Hide unselected rows");
  
  mMenuActions = new QMenu();
  mMenuActions->addAction(tr("Advanced search"), this, SLOT(advancedSearch()));
  mMenuActions->addSeparator();
  mMenuActions->addAction(getThemeIcon( "/mActionCopySelected.png" ), tr("Copy selected rows"), this, SLOT(copySelectedRowsToClipboard()));
  mMenuActions->addAction(getThemeIcon( "/mActionZoomToSelected.png" ), tr("Zoom to selected"), this, SLOT(zoomMapToSelectedRows()));
  mMenuActions->addAction(getThemeIcon( "/mActionSelectedToTop.png" ), tr("Move selected to top"), this, SLOT(selectedToTop()));
  mMenuActions->addAction(getThemeIcon( "/mActionUnselectAttributes.png" ), tr("Clear selection"), this, SLOT(removeSelection()));
  mMenuActions->addAction(getThemeIcon( "/mActionInvertSelection.png" ), tr("Invert selection"), this, SLOT(invertSelection()));
  mMenuActions->addSeparator();
  
  // toggle editing
  mActionToggleEditing = mMenuActions->addAction(getThemeIcon( "/mActionToggleEditing.png" ), tr("Toggle editing"), this, SLOT(toggleEditing()));
  mActionToggleEditing->setCheckable( true );
  mActionToggleEditing->setEnabled( mLayer->dataProvider()->capabilities() & QgsVectorDataProvider::ChangeAttributeValues );
  // info from table to application
  connect( this, SIGNAL( editingToggled( QgsMapLayer * ) ), parentWidget(), SLOT( toggleEditing( QgsMapLayer * ) ) );
  // info from layer to table
  connect( mLayer, SIGNAL( editingStarted() ), this, SLOT( editingToggled() ) );
  connect( mLayer, SIGNAL( editingStopped() ), this, SLOT( editingToggled() ) );
  
  connect(mShowBox, SIGNAL(currentIndexChanged(const QString &)), this, SLOT(toggleShowDeselected(const QString &)));
  connect(searchButton, SIGNAL(clicked()), this, SLOT(search()));
  connect(actionsButton, SIGNAL(clicked()), this, SLOT(showAdvanced()));

  connect(mLayer, SIGNAL(selectionChanged()), this, SLOT(updateSelectionFromLayer()));
  connect(mLayer, SIGNAL(layerDeleted()), this, SLOT( close()));
  connect(mView->verticalHeader(), SIGNAL(sectionClicked(int)), this, SLOT(updateRowSelection(int)));
  connect(mModel, SIGNAL(modelChanged()), this, SLOT(updateSelection()));

  mLastClickedHeaderIndex = 0;
  mSelectionModel = new QItemSelectionModel(mFilterModel);
  updateSelectionFromLayer();
}

BeataDialog::~BeataDialog()
{
}

void BeataDialog::closeEvent( QCloseEvent* event )
{
  QDialog::closeEvent( event );
  
  QSettings settings;
  settings.setValue( "/Windows/BetterAttributeTable/geometry", saveGeometry() );
}


QIcon BeataDialog::getThemeIcon( const QString theName )
{
  // copied from QgisApp::getThemeIcon. To be removed when merged to SVN
  
  QString myPreferredPath = QgsApplication::activeThemePath() + QDir::separator() + theName;
  QString myDefaultPath = QgsApplication::defaultThemePath() + QDir::separator() + theName;
  if ( QFile::exists( myPreferredPath ) )
  {
    return QIcon( myPreferredPath );
  }
  else if ( QFile::exists( myDefaultPath ) )
  {
    //could still return an empty icon if it
    //doesnt exist in the default theme either!
    return QIcon( myDefaultPath );
  }
  else
  {
    return QIcon();
  }
}

void BeataDialog::showAdvanced()
{
  mMenuActions->exec(QCursor::pos());
}

void BeataDialog::selectedToTop()
{
  int freeIndex = 0;

  //QgsFeatureIds fids = mSelectedFeatures;
  //QgsFeatureIds::Iterator it = fids.begin();

  mModel->incomingChangeLayout();

  QgsFeatureIds::Iterator it = mSelectedFeatures.begin();
  for (; it != mSelectedFeatures.end(); ++it, ++freeIndex)
  {
    QModelIndex sourceIndex = mFilterModel->mapToSource(mFilterModel->index(freeIndex, 0));
    mModel->swapRows(mModel->rowToId(sourceIndex.row()), *it);
  }

/*
  while (it != fids.end())
  { //map!!!!
    //mModel->swapRows(mModel->rowToId(freeIndex), *it);
    //QModelIndex index = mFilterModel->mapFromSource(mModel->index(mModel->idToRow(*it), 0));
    QModelIndex sourceIndex = mFilterModel->mapToSource(mFilterModel->index(freeIndex, 0));
    mModel->swapRows(mModel->rowToId(sourceIndex.row()), *it);
    //mModel->swapRows(freeIndex, *it);

    if (fids.empty())
      break;
    else
      ++it;

    ++freeIndex; 
  }
*/
  // just select proper rows
  //mModel->reload(mModel->index(0,0), mModel->index(mModel->rowCount(), mModel->columnCount()));
  //mModel->changeLayout();
  mModel->resetModel();
  updateSelection();
}

void BeataDialog::copySelectedRowsToClipboard()
{
  QgisApp* pApp = dynamic_cast<QgisApp*>(parentWidget());
  if (pApp)
    pApp->editCopy(mLayer);
}

void BeataDialog::zoomMapToSelectedRows()
{
  QgisApp* pApp = dynamic_cast<QgisApp*>(parentWidget());
  if (pApp)
    pApp->zoomToSelected();
}

void BeataDialog::invertSelection()
{
  mLayer->invertSelection();
}

void BeataDialog::removeSelection()
{
  mLayer->removeSelection();
}

void BeataDialog::toggleShowDeselected(const QString &text)
{
  if (text == "Show unselected rows")
  {
    mFilterModel->mHideUnselected = false;
    //TODO: divne
    //mModel->changeLayout();
    mFilterModel->invalidate();
    return;
  }

  // show only selected
  mFilterModel->mHideUnselected = true;
  mFilterModel->invalidate();
  //mModel->changeLayout();
}

void BeataDialog::columnBoxInit()
{
  QgsFieldMap fieldMap = mLayer->dataProvider()->fields();
  QgsFieldMap::Iterator it = fieldMap.begin();

  for (; it != fieldMap.end(); ++it)
    mColumnBox->addItem(it.value().name());
}

int BeataDialog::columnBoxColumnId()
{
  QgsFieldMap fieldMap = mLayer->dataProvider()->fields();
  QgsFieldMap::Iterator it = fieldMap.begin();

  for (; it != fieldMap.end(); ++it)
    if (it.value().name() == mColumnBox->currentText())
      return it.key();

  return 0;
}

void BeataDialog::updateSelection()
{
  QModelIndex index;
  mView->setSelectionMode(QAbstractItemView::MultiSelection);

  QItemSelection selection;
  
  QgsFeatureIds::Iterator it = mSelectedFeatures.begin();
  for (; it != mSelectedFeatures.end(); ++it)
  {
    QModelIndex leftUpIndex = mFilterModel->mapFromSource(mModel->index(mModel->idToRow(*it), 0));
    QModelIndex rightBottomIndex = mFilterModel->mapFromSource(mModel->index(mModel->idToRow(*it), mModel->columnCount() - 1));
    selection.append(QItemSelectionRange(leftUpIndex, rightBottomIndex));
    //selection.append(QItemSelectionRange(leftUpIndex, leftUpIndex));
  }

  mSelectionModel->select(selection, QItemSelectionModel::ClearAndSelect);// | QItemSelectionModel::Columns);
  mView->setSelectionModel(mSelectionModel);
  mView->setSelectionMode(QAbstractItemView::NoSelection);

  /*for (int i = 0; i < mModel->rowCount(); ++i)
  {
	 int id = mModel->rowToId(i);
    std::cout << id << "\n";
  }
  std::cout << "--------------\n";
*/
}

void BeataDialog::updateRowSelection(int index)
{
  // map index to filter model
  //index = mFilterModel->mapFromSource(mModel->index(index, 0)).row();

  if (mView->shiftPressed) {
	std::cout << "shift\n";
    // get the first and last index of the rows to be selected/deselected
    int first, last;
    if (index > mLastClickedHeaderIndex) {
      first = mLastClickedHeaderIndex + 1;
      last = index;
    }
    else if (index == mLastClickedHeaderIndex) {
      // row was selected and now it is shift-clicked
      // ignore the shift and deselect the row
      first = last = index;
    }
    else {
      first = index;
      last = mLastClickedHeaderIndex - 1;
    }
    
    // for all the rows update the selection, without starting a new selection
    if (first <= last)
      updateRowSelection(first, last, false);
      
    mLastClickedHeaderIndex = last;
  }
  else if (mView->ctrlPressed) {
	std::cout << "ctrl\n";
    // update the single row selection, without starting a new selection
    updateRowSelection(index, index, false);
    
    // the next shift would start from here
    mLastClickedHeaderIndex = index;
  } 
  else {
	std::cout << "ordinary click\n";
    // update the single row selection, start a new selection if the row was not selected
    updateRowSelection(index, index, true);
    
    // the next shift would start from here
    mLastClickedHeaderIndex = index;
  }
}

// fast row deselection needed
void BeataDialog::updateRowSelection(int first, int last, bool startNewSelection)
{  
  disconnect(mLayer, SIGNAL(selectionChanged()), this, SLOT(updateSelectionFromLayer()));

  //index = mFilterModel->mapFromSource(mModel->index(index, 0)).row();
  // Id must be mapped to table/view row
  QModelIndex index = mFilterModel->mapToSource(mFilterModel->index(first, 0));
  int fid = mModel->rowToId(index.row());
  bool wasSelected = mSelectedFeatures.contains(fid);

  // new selection should be created
  if (startNewSelection)
  {
    mView->clearSelection();
    mSelectedFeatures.clear();

    if (wasSelected)
    {
      mLayer->removeSelection();
      connect(mLayer, SIGNAL(selectionChanged()), this, SLOT(updateSelectionFromLayer()));
      return;
    }

    // set clicked row to current
    mView->setCurrentIndex(mFilterModel->index(first, 0));
    mView->setSelectionMode(QAbstractItemView::SingleSelection);

    //QModelIndex index = mFilterModel->mapFromSource(mModel->index(first, 0));

    mView->selectRow(first);
    mView->setSelectionMode(QAbstractItemView::NoSelection);

    mSelectedFeatures.insert(fid);
    //mLayer->setSelectedFeatures(mSelectedFeatures);
    mLayer->removeSelection();
    mLayer->select(fid);
    //mFilterModel->invalidate();
    connect(mLayer, SIGNAL(selectionChanged()), this, SLOT(updateSelectionFromLayer()));
    return;
  }

  // existing selection should be updated
  for (int i = first; i <= last; ++i) {
    if (i > first) {
      // Id must be mapped to table/view row
      index = mFilterModel->mapToSource(mFilterModel->index(i, 0));
      fid = mModel->rowToId(index.row());
      wasSelected = mSelectedFeatures.contains(fid);
    }
    
    if (wasSelected) 
      mSelectedFeatures.remove(fid);
    else
      mSelectedFeatures.insert(fid);
  }
  //mFilterModel->invalidate();
    
  /*
  QItemSelection selection;
  QModelIndex leftUpIndex = mFilterModel->index(first, 0);
  QModelIndex rightBottomIndex = mFilterModel->index(last, mModel->columnCount() - 1);
  selection.append(QItemSelectionRange(leftUpIndex, rightBottomIndex));
  mSelectionModel->select(selection, QItemSelectionModel::Select);
  mView->setSelectionModel(mSelectionModel);
  */
  updateSelection();
  mLayer->setSelectedFeatures(mSelectedFeatures);
  connect(mLayer, SIGNAL(selectionChanged()), this, SLOT(updateSelectionFromLayer()));
}

void BeataDialog::updateSelectionFromLayer()
{
  std::cout << "updateFromLayer\n";
  mSelectedFeatures = mLayer->selectedFeaturesIds();
  updateSelection();
}

void BeataDialog::doSearch(QString searchString)
{
  // parse search string and build parsed tree
  QgsSearchString search;
  if (!search.setString(searchString))
  {
    QMessageBox::critical(this, tr("Search string parsing error"), search.parserErrorMsg());
    return;
  }

  QgsSearchTreeNode* searchTree = search.tree();
  if (searchTree == NULL)
  {
    QMessageBox::information(this, tr("Search results"), tr("You've supplied an empty search string."));
    return;
  }

  QApplication::setOverrideCursor(Qt::WaitCursor);

  mSelectedFeatures.clear();
  mLayer->select(mLayer->pendingAllAttributesList(), QgsRectangle(), false);

  QgsFeature f;
  while (mLayer->nextFeature(f))
  {
    if (searchTree->checkAgainst(mLayer->pendingFields(), f.attributeMap()))
      mSelectedFeatures << f.id();

    // check if there were errors during evaluating
    if (searchTree->hasError())
      break;
  }

  QApplication::restoreOverrideCursor();

  if (searchTree->hasError())
  {
    QMessageBox::critical(this, tr("Error during search"), searchTree->errorMsg());
    return;
  }

  // update view
  updateSelection();

  disconnect(mLayer, SIGNAL(selectionChanged()), this, SLOT(updateSelectionFromLayer()));
  mLayer->setSelectedFeatures(mSelectedFeatures);
  connect(mLayer, SIGNAL(selectionChanged()), this, SLOT(updateSelectionFromLayer()));

  QString str;
  if (mSelectedFeatures.size())
    str.sprintf(tr("Found %d matching features.", "", mSelectedFeatures.size()).toUtf8(), mSelectedFeatures.size());
  else
    str = tr("No matching features found.");

  QMessageBox::information(this, tr("Search results"), str);
}

void BeataDialog::search()
{

  QString str = mColumnBox->currentText();

  const QgsFieldMap& flds = mLayer->dataProvider()->fields();
  int fldIndex = mLayer->dataProvider()->fieldNameIndex(str);
  QVariant::Type fldType = flds[fldIndex].type();
  bool numeric = (fldType == QVariant::Int || fldType == QVariant::Double);
  
  if (numeric)
    str += " = '";
  else
    str += " ~ '";
  
  str += mQuery->displayText();
  str += "'";

  doSearch(str);
}

void BeataDialog::advancedSearch()
{
  QgsSearchQueryBuilder dlg(mLayer, this);
  dlg.setSearchString(mQuery->displayText());

  if (dlg.exec())
    doSearch(dlg.searchString());
}

void BeataDialog::toggleEditing()
{
  emit editingToggled( mLayer );
}

void BeataDialog::editingToggled()
{
  mActionToggleEditing->setChecked( mLayer->isEditable() );
  
  // (probably reload data if user stopped editing - possible revert)
  mModel->reload(mModel->index(0,0), mModel->index(mModel->rowCount(), mModel->columnCount()));
  
  // not necessary to set table read only if layer is not editable
  // because model always reflects actual state when returning item flags
}

// not used now
void BeataDialog::startEditing()
{
  mLayer->startEditing();
}

// not used now
void BeataDialog::submit()
{
  mLayer->commitChanges();
}

// not used now
void BeataDialog::revert()
{
  mLayer->rollBack();
  mModel->revert();
  mModel->reload(mModel->index(0,0), mModel->index(mModel->rowCount(), mModel->columnCount()));
}
