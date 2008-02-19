<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS><TS version="1.1" language="de_CH">
<context>
    <name>@default</name>
    <message>
        <location filename="" line="0"/>
        <source>OGR Driver Manager</source>
        <translation>OGR Driver Manager</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>unable to get OGRDriverManager</source>
        <translation>Kann den OGRDriverManager nicht öffnen.</translation>
    </message>
</context>
<context>
    <name>Dialog</name>
    <message>
        <location filename="" line="0"/>
        <source>QGIS Plugin Installer</source>
        <translation>QGIS Plugin Installierer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Name of plugin to install</source>
        <translation>Name des zu installierenden Plugins</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Get List</source>
        <translation>Hole Liste</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Done</source>
        <translation type="unfinished">Fertig</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Install Plugin</source>
        <translation>Installiere das Plugin</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The plugin will be installed to ~/.qgis/python/plugins</source>
        <translation>Das Plugin wird unter ~/.qgis/python/plugins installiert</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Name</source>
        <translation type="unfinished">Name</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Version</source>
        <translation type="unfinished">Version</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Description</source>
        <translation type="unfinished">Beschreibung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Author</source>
        <translation>Autor</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Select repository, retrieve the list of available plugins, select one and install it</source>
        <translation>Wähle ein Repository, empfange die Liste mit vorhandenen Plugins und installiere eines davon.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Repository</source>
        <translation>Repository</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Active repository:</source>
        <translation>Aktives Repository:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add</source>
        <translation type="unfinished">Hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Edit</source>
        <translation type="unfinished">Bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Delete</source>
        <translation type="unfinished">Löschen</translation>
    </message>
</context>
<context>
    <name>Gui</name>
    <message>
        <location filename="" line="0"/>
        <source>Welcome to your automatically generated plugin!</source>
        <translation>Willkommen zu Ihrem automatisch installierten Plugin!</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>This is just a starting point. You now need to modify the code to make it do something useful....read on for a more information to get yourself started.</source>
        <translation>Dies ist erst der erste Schritt. Sie müssen nun den Quellcode anpassen, damit es etwas sinnvolles macht ... lesen Sie dazu weiter.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Documentation:</source>
        <translation>Dokumentation:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>You really need to read the QGIS API Documentation now at:</source>
        <translation>Sie sollten nun unbedingt die QGIS API-Dokumentation lesen unter:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>In particular look at the following classes:</source>
        <translation>Schauen Sie insbesondere nach den folgenden Klassen:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>QgsPlugin is an ABC that defines required behaviour your plugin must provide. See below for more details.</source>
        <translation>QgsPlugin ist eine Grundlage, die das notwendige Verhalten Ihres Plugins definiert und bereitstellt. Lesen Sie weiter für mehr Details.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>What are all the files in my generated plugin directory for?</source>
        <translation>Wozu sind die ganzen Dateien in dem gerade erstellten Plugin-Ordner nützlich?</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>This is the generated CMake file that builds the plugin. You should add you application specific dependencies and source files to this file.</source>
        <translation>Dies ist die CMake-Datei, die den Plugin erstellt. Sie sollten die anwendungsspezifischen Abhängigkeiten und die Quelldateien in der CMake-Datei ergänzen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>This is the class that provides the &apos;glue&apos; between your custom application logic and the QGIS application. You will see that a number of methods are already implemented for you - including some examples of how to add a raster or vector layer to the main application map canvas. This class is a concrete instance of the QgisPlugin interface which defines required behaviour for a plugin. In particular, a plugin has a number of static methods and members so that the QgsPluginManager and plugin loader logic can identify each plugin, create an appropriate menu entry for it etc. Note there is nothing stopping you creating multiple toolbar icons and menu entries for a single plugin. By default though a single menu entry and toolbar button is created and its pre-configured to call the run() method in this class when selected. This default implementation provided for you by the plugin builder is well documented, so please refer to the code for further advice.</source>
        <translation>Dies ist die Klasse, die Ihre Applikation mit QGIS verbindet. Sie werden sehen, dass bereits eine Vielzahl an Methoden bereitstehen, inklusive einiger Beispiele, etwa wie Raster- oder Vektorlayer in das Kartenfenster integriert werden können. Diese Klasse ist eine feste Instanz des QGIS Plugin-Interfaces, welche notwendiges Verhalten des Plugins definiert. Genau gesagt, enthält ein Plugin eine Reihe statischer Methoden und Klassenmitglieder, damit der QGIS Pluginmanager und der Pluginlader jedes Plugin identifizieren, einen passenden Menüeintrag erstellen kann usw. Beachten Sie, dass Sie auch mehrere Icons für die Werkzeugleiste sowie mehere Menüeinträge für ein einzelnes Plugin erstellen können. Standardmässig wird jedoch ein einzelnes Icon und ein Menüeintrag erstellt und so vorkonfiguriert, dass die Methode run() dieser Klasse bei ihrer Auswahl gestarted wird. Diese durch den Pluginbuilder bereitgestellte Standardimplementierung ist sehr gut dokumentiert. Beziehen Sie sich daher bitte auf den Quellcode für weitere Hinweise.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>This is a Qt designer &apos;ui&apos; file. It defines the look of the default plugin dialog without implementing any application logic. You can modify this form to suite your needs or completely remove it if your plugin does not need to display a user form (e.g. for custom MapTools).</source>
        <translation>Dies ist eine Qt Designer &apos;ui&apos; Datei. Sie definiert das Aussehen des Standard Plugindialogs ohne irgendeine Anwendungsfunktion. Sie können die Vorlage an Ihre Bedürfnisse anpassen oder auch löschen, wenn Ihr Plugin keinen Benutzerdialog braucht (z.B. für angepasste MapTools).</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>This is the concrete class where application logic for the above mentioned dialog should go. The world is your oyster here really....</source>
        <translation>Dies ist eine feste Klasse in welche die Applikationstechnologie des oben beschriebenen Dialogs,eingefügt werden sollte Die Welt steht Ihnen an dieser Stelle absolut offen....</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>This is the Qt4 resources file for your plugin. The Makefile generated for your plugin is all set up to compile the resource file so all you need to do is add your additional icons etc using the simple xml file format. Note the namespace used for all your resources e.g. (&apos;:/Homann/&apos;). It is important to use this prefix for all your resources. We suggest you include any other images and run time data in this resurce file too.</source>
        <translation>Dies ist die Qt4-Resourcendatei für Ihren plugin. Der für Ihr Plugin erstellte Makefile ist erstellt, um die Resourcendatei zu kompilieren. Alles was Sie hier tun müssen, ist die zusätzlichen Icons usw. mit Hilfe des einfachen XML-Formates zu ergänzen. Beachten Sie, die Namensräume für Ihre Resourcen z.B. (&apos;:/Homann/&apos;). Es ist wichtig diesen Prefix für all Ihre Resourcen zu verwenden. Wir schlagen vor, Sie bauen ein irgendwelche anderen Bilder und Laufzeitdaten in die Resourcendatei ein.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>This is the icon that will be used for your plugin menu entry and toolbar icon. Simply replace this icon with your own icon to make your plugin disctinctive from the rest.</source>
        <translation>Dies ist das Icon, dass für Ihr Pluginmenü und die Werkzeugleiste benutzt wird. Ersetzen Sie das Icon einfach durch ihr eigenes, um Ihr Plugin von den anderen zu unterscheiden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>This file contains the documentation you are reading now!</source>
        <translation>Diese Datei enthält die Dokumentation, die Sie gerade lesen!</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Getting developer help:</source>
        <translation>Entwickler-Hilfe bekommen:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>For Questions and Comments regarding the plugin builder template and creating your features in QGIS using the plugin interface please contact us via:</source>
        <translation>Für Fragen und Kommentare in Bezug auf das &apos;Plugin-Builder&apos; Template und die Erstellung eigener Funktionen in QGIS mit Hilfe des Plugin-Interfaces kontaktieren Sie uns bitter unter:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;li&gt; the QGIS developers mailing list, or &lt;/li&gt;&lt;li&gt; IRC (#qgis on freenode.net)&lt;/li&gt;</source>
        <translation>&lt;li&gt; Die QGIS Entwickler-Mailingliste, oder &lt;/li&gt;&lt;li&gt; IRC (#qgis on freenode.net)&lt;/li&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>QGIS is distributed under the Gnu Public License. If you create a useful plugin please consider contributing it back to the community.</source>
        <translation>QGIS ist veröffentlicht unter der GNU General Public License. Wenn Sie ein nützliches Plugin erstellt haben, überlegen Sie bitte, es der Community bereitzustellen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Have fun and thank you for choosing QGIS.</source>
        <translation>Viel Spass und danke, dass Sie sich für QGIS entschieden haben.</translation>
    </message>
</context>
<context>
    <name>MapCoordsDialogBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Enter map coordinates</source>
        <translation>Kartenkoordinaten eingeben</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>X:</source>
        <translation>X:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Y:</source>
        <translation>Y:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Abbrechen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Enter X and Y coordinates which correspond with the selected point on the image. Alternatively, click the button with icon of a pencil and then click a corresponding point on map canvas of QGIS to fill in coordinates of that point.</source>
        <translation>Klicken Sie auf den &apos;aus Karte&apos; Knopf und wählen Sie dann den korrespondierenden Punkt in der Hauptkarte per Klick aus, um die Koordinaten von dort zu übernehmen. Alternativ, können Sie die Koordinaten auch manuell eingeben.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> from map canvas</source>
        <translation> aus Karte</translation>
    </message>
</context>
<context>
    <name>QFileDialog</name>
    <message>
        <location filename="" line="0"/>
        <source>Save experiment report to portable document format (.pdf)</source>
        <translation>Speichere den vorläufigen Bericht im &apos;Portable Document Format&apos; (.pdf)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Load layer properties from style file (.qml)</source>
        <translation>Lade Layereigenschaften von der Style-Datei (.qml)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Save layer properties as style file (.qml)</source>
        <translation>Speicher Layereigenschaften als Style-Datei (.qml)</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="" line="0"/>
        <source>No Data Providers</source>
        <translation>Keine Datenlieferanten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No Data Provider Plugins</source>
        <comment>No QGIS data provider plugins found in:</comment>
        <translation>Keine Datenlieferanten Plugins</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No vector layers can be loaded. Check your QGIS installation</source>
        <translation>Es können keine Vektorlayer geladen werden. Bitte QGIS Installation überprüfen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No data provider plugins are available. No vector layers can be loaded</source>
        <translation>Keine Datenlieferanten-Plugins verfügbar. Es können keine Vektorlayer geladen werden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>QGis files (*.qgs)</source>
        <translation>QGIS Dateien (*.qgs)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> at line </source>
        <translation>bei Linie</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> column </source>
        <translation>Kolonne</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> for file </source>
        <translation>Für Datei</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Unable to save to file </source>
        <translation>Datei kann nicht gespeichert werden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Referenced column wasn&apos;t found: </source>
        <translation>Die Referenzspalte würde nicht gefunden:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Division by zero.</source>
        <translation>Division durch Null.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No active layer</source>
        <translation>Keine aktiven Layer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Band</source>
        <translation>Kanal</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>action</source>
        <translation>Aktion</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> features found</source>
        <translation> Objekte gefunden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> 1 feature found</source>
        <translation> 1 Objekt gefunden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No features found</source>
        <translation>Keine Objekte gefunden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No features were found in the active layer at the point you clicked</source>
        <translation>Keine Objekte im aktiven Layer am gewählten Punkt gefunden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Could not identify objects on</source>
        <translation>Konnte Objekte nicht identifizieren auf</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>because</source>
        <translation>weil</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>New centroid</source>
        <translation>Neues Zentroid</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>New point</source>
        <translation>Neuer Punkt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>New vertex</source>
        <translation>Neuer Vertex</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Undo last point</source>
        <translation>Undo letzter Punkt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Close line</source>
        <translation>Linie schliessen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Select vertex</source>
        <translation>Vertex selektieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Select new position</source>
        <translation>Selektiere neue Position</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Select line segment</source>
        <translation>Liniensegment selektieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>New vertex position</source>
        <translation>Neue Vertexposition</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Release</source>
        <translation>Freigeben</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Delete vertex</source>
        <translation>Lösche Vertex</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Release vertex</source>
        <translation>Vertex freigeben</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Select element</source>
        <translation>Element selektieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>New location</source>
        <translation>Neue Location</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Release selected</source>
        <translation>Selektierte freigeben</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Delete selected / select next</source>
        <translation>Selektion löschen/ nächstes selektieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Select position on line</source>
        <translation>Position auf Linie selektieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Split the line</source>
        <translation>Linie auftrennen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Release the line</source>
        <translation>Linie freigeben</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Select point on line</source>
        <translation>Punkt in der Mitte selektieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Length</source>
        <translation>Länge</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Area</source>
        <translation>Fläche</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Project file read error: </source>
        <translation>Fehler beim Lesen der Projektionsdatei:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Label</source>
        <translation>Beschriftung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Fit to a linear transform requires at least 2 points.</source>
        <translation>Anpassung an eine lineare Transformation benötigt mindestens 2 Punkte.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Fit to a Helmert transform requires at least 2 points.</source>
        <translation>Eine Helmert-Transformation benötigt mindestens 2 Punkte.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Fit to an affine transform requires at least 4 points.</source>
        <translation>Anpassung an eine affine Transformation benötigt mindestens 4 Punkte.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Couldn&apos;t open the data source: </source>
        <translation>Kann die Datenquelle nicht öffnen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Parse error at line </source>
        <translation>Interpretationsfehler in Linie</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GPS eXchange format provider</source>
        <translation>GPS eXchange Format Provider</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Caught a coordinate system exception while trying to transform a point. Unable to calculate line length.</source>
        <translation>Ein Problem beim Versuch einer Koordinatentransformation eines Punktes aus. Konnte daher die Linienlänge nicht berechnen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Caught a coordinate system exception while trying to transform a point. Unable to calculate polygon area.</source>
        <translation>Ein Problem beim Versuch einer Koordinatentransformation eines Punktes aus. Konnte daher die Fläches des Polygons nicht berechnen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GRASS plugin</source>
        <translation>GRASS plugin</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>QGIS couldn&apos;t find your GRASS installation.
Would you like to specify path (GISBASE) to your GRASS installation?</source>
        <translation>QGIS konnte Ihre GRASS-Installation nicht finden. Wollen Sie den Pfad zu Ihrer GRASS-Installation (GISBASE) angeben?</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Choose GRASS installation path (GISBASE)</source>
        <translation>Bitte wählen Sie einen GRASS-Installationspfad (GISBASE)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GRASS data won&apos;t be available if GISBASE is not specified.</source>
        <translation>GRASS-Daten können nicht benutzt werden, wenn keine GISBASE definiert ist.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>CopyrightLabel</source>
        <translation>CopyrightLabel</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Draws copyright information</source>
        <translation>Zeichnet Urhebersrechtsinformationen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Version 0.1</source>
        <translation>Version 0.1</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Version 0.2</source>
        <translation>Version 0.2</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Loads and displays delimited text files containing x,y coordinates</source>
        <translation>Lädt und stellt Textdateien in CSV-Format, die x und y-Koordinaten haben, dar.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add Delimited Text Layer</source>
        <translation>Lade Layer aus Textdatei</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Georeferencer</source>
        <translation>Georeferenzierer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Adding projection info to rasters</source>
        <translation>Fügt Projektionsinformationen zu Rasterdateien hinzu.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GPS Tools</source>
        <translation>GPS Werkzeuge</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Tools for loading and importing GPS data</source>
        <translation>Werkzeuge zum Laden und Importieren von GPS-Daten.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GRASS</source>
        <translation>GRASS</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GRASS layer</source>
        <translation>GRASS-Vektorlayer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Graticule Creator</source>
        <translation>Gradnetz Generator</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Builds a graticule</source>
        <translation>Erstellt ein Gradnetz</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>NorthArrow</source>
        <translation>Nordpfeil</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Displays a north arrow overlayed onto the map</source>
        <translation>Stelle einen Nordpfeil auf der Kartendarstellung dar.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>[menuitemname]</source>
        <translation>[menuitemname]</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>[plugindescription]</source>
        <translation>[plugindescription]</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>ScaleBar</source>
        <translation>Maßstab</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Draws a scale bar</source>
        <translation>Zeichnet einen Maßstab</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>SPIT</source>
        <translation>SPIT</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Shapefile to PostgreSQL/PostGIS Import Tool</source>
        <translation>Werkzeug zum Importieren von Shapes in PostgreSQL/PostGIS</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>WFS plugin</source>
        <translation>WFS-Plugin</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Adds WFS layers to the QGIS canvas</source>
        <translation>Fügt einen WFS-Layer zur Kartendarstellung hinzu.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Not a vector layer</source>
        <translation>Keine Vektorlayer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The current layer is not a vector layer</source>
        <translation>Der aktuelle Layer ist kein Vektorlayer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Layer cannot be added to</source>
        <translation>Der Layer kann nicht hinzugefügt werden zu</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The data provider for this layer does not support the addition of features.</source>
        <translation>Der Datenlieferant dieses Layers unterstützt das Hinzufügen von neuen Objekten nicht.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Layer not editable</source>
        <translation>Der Layer kann nicht bearbeitet werden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot edit the vector layer. To make it editable, go to the file item of the layer, right click and check &apos;Allow Editing&apos;.</source>
        <translation>Der Vektorlayer kann nicht geändert werden. Um ihn zu bearbeiten, klicken Sie bitte erst mit der rechten Maustaste auf den Dateieintrag des Layers und dann auf &apos;Bearbeitungsstatus umschalten&apos;.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>To select features, you must choose a vector layer by clicking on its name in the legend</source>
        <translation>Um Objekte zu selektieren, müssen Sie einen Vektorlayer durch anklicken in der Legende auswählen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Python error</source>
        <translation type="unfinished">Python-Fehler</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Couldn&apos;t load SIP module.
Python support will be disabled.</source>
        <translation type="unfinished">SIP-Modul konnte nicht geladen werden.
Die Pythonunterstützung wird abgeschaltet.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Couldn&apos;t load PyQt bindings.
Python support will be disabled.</source>
        <translation type="unfinished">PyQt-Bindings konnten nicht geladen werden.
Die Python-Unterstützung wird abgeschaltet.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Couldn&apos;t load QGIS bindings.
Python support will be disabled.</source>
        <translation type="unfinished">QGIS-Bindings konnten nicht geladen werden.
Die Python-Unterstützung wird abgeschaltet.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Couldn&apos;t load plugin </source>
        <translation>Plugin konnte nicht geladen werden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> due an error when calling its classFactory() method</source>
        <translation> konnte durch einen Fehler beim Aufruf dessen classFactory()-Methode nicht laden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> due an error when calling its initGui() method</source>
        <translation> konnte durch einen Fehler beim Aufruf dessen initGui()-Methode nicht laden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Error while unloading plugin </source>
        <translation type="unfinished">Fehler beim Entladen des Plugins </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>2.5D shape type not supported</source>
        <translation>2,5D Shapetyp wird nicht unterstützt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Adding features to 2.5D shapetypes is not supported yet</source>
        <translation>Das Hinzufügen von 2.5D Shape Informationen wird zur Zeit nicht unterstützt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Wrong editing tool</source>
        <translation type="unfinished">Falsches Bearbeitungswerkzeug</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot apply the &apos;capture point&apos; tool on this vector layer</source>
        <translation>Das &apos;Punkt digitalisieren&apos;-Werkzeug kann nicht auf diesen Vektorlayer angewendet werden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Coordinate transform error</source>
        <translation type="unfinished">Koordinatentransformationsfehler</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot transform the point to the layers coordinate system</source>
        <translation>Konnte den Punkt nicht auf das Koordinatensystem des Layers transformieren.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot apply the &apos;capture line&apos; tool on this vector layer</source>
        <translation>Das &apos;Linie digitalisieren&apos;-Werkzeug kann nicht auf diesen Vektorlayer angewendet werden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot apply the &apos;capture polygon&apos; tool on this vector layer</source>
        <translation>Das &apos;Polygon digitalisieren&apos;-Werkzeug kann nicht auf diesen Vektorlayer angewendet werden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Error</source>
        <translation type="unfinished">Fehler</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot add feature. Unknown WKB type</source>
        <translation type="unfinished">Konnte Objekt nicht hinzufügen. Unbekannter WKB-Typ</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Error, could not add island</source>
        <translation>Fehler beim Hinzufügen des Insel-Polygons</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>A problem with geometry type occured</source>
        <translation>Es ist ein Problem mit dem Geometrietyp aufgetreten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The inserted Ring is not closed</source>
        <translation type="unfinished">Der eingefügte Ring ist nicht geschlossen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The inserted Ring is not a valid geometry</source>
        <translation type="unfinished">Der eingefügte Ring hat keine gültige Geometrie</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The inserted Ring crosses existing rings</source>
        <translation type="unfinished">Der eingefügte Ring überschneidet sich mit vorhandenen Ringen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The inserted Ring is not contained in a feature</source>
        <translation type="unfinished">Der eingefügte Ring befindet sich nicht innerhalb des Objekts.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>An unknown error occured</source>
        <translation type="unfinished">Ein unbekannter Fehler trat auf.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Error, could not add ring</source>
        <translation type="unfinished">Es ist ein Fehler beim Einfügen des Rings aufgetreten.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> km2</source>
        <translation type="unfinished"> km2</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> ha</source>
        <translation type="unfinished"> ha</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> m2</source>
        <translation type="unfinished"> m2</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> m</source>
        <translation type="unfinished"> m</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> km</source>
        <translation type="unfinished"> km</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> mm</source>
        <translation type="unfinished"> mm</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> cm</source>
        <translation type="unfinished"> cm</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> sq mile</source>
        <translation type="unfinished"> Quadratmeile</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> sq ft</source>
        <translation type="unfinished"> Quadratfuß</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> mile</source>
        <translation type="unfinished"> Meilen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> foot</source>
        <translation type="unfinished"> Fuß</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> feet</source>
        <translation type="unfinished"> Fuß</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> sq.deg.</source>
        <translation type="unfinished"> sq.deg.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> degree</source>
        <translation type="unfinished"> Grad</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> degrees</source>
        <translation type="unfinished"> Grad</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> unknown</source>
        <translation type="unfinished"> unbekannt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Received %1 of %2 bytes</source>
        <translation type="unfinished">%1 von %2 Bytes empfangen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Received %1 bytes (total unknown)</source>
        <translation type="unfinished">%1 Bytes empfangen (Gesamtzahl unbekannt)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Not connected</source>
        <translation type="unfinished">Nicht verbunden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Looking up &apos;%1&apos;</source>
        <translation type="unfinished">Löse &apos;%1&apos; auf</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Connecting to &apos;%1&apos;</source>
        <translation type="unfinished">Verbinde mit &apos;%1&apos;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Sending request &apos;%1&apos;</source>
        <translation type="unfinished">Anfrage wird an &apos;%1&apos; gesandt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Receiving reply</source>
        <translation type="unfinished">Emfange Antwort</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Response is complete</source>
        <translation type="unfinished">Antwort ist vollständig</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Closing down connection</source>
        <translation type="unfinished">Verbindung wird geschlossen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Unable to open </source>
        <translation type="unfinished">Fehler beim Öffnen: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Regular expressions on numeric values don&apos;t make sense. Use comparison instead.</source>
        <translation type="unfinished">Reguläre Ausdrücke auf numerische Werte haben keinen Sinn. Bitte benutzen Sie Vergleichsoperatoren.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>PostgreSQL Geoprocessing</source>
        <translation>PostgreSQL-Geodatenverarbeitung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Geoprocessing functions for working with PostgreSQL/PostGIS layers</source>
        <translation>Geodatenverarbeitungsfunktionen für PostgreSQL-/PostGIS-Layer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Location: </source>
        <translation>Location: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;br&gt;Mapset: </source>
        <translation>&lt;br&gt;Mapset: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;b&gt;Raster&lt;/b&gt;</source>
        <translation type="unfinished">&lt;b&gt;Raster&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot open raster header</source>
        <translation type="unfinished">Header des Rasters konnte nicht geöffnet werden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Rows</source>
        <translation type="unfinished">Zeilen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Columns</source>
        <translation type="unfinished">Spalten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>N-S resolution</source>
        <translation type="unfinished">N-S Auflösung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>E-W resolution</source>
        <translation type="unfinished">O-W Auflösung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>North</source>
        <translation type="unfinished">Nord</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>South</source>
        <translation type="unfinished">Süd</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>East</source>
        <translation type="unfinished">Ost</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>West</source>
        <translation type="unfinished">West</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Format</source>
        <translation type="unfinished">Format</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Minimum value</source>
        <translation type="unfinished">Minimalwert</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Maximum value</source>
        <translation type="unfinished">Maximalwert</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Data source</source>
        <translation type="unfinished">Datenquelle</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Data description</source>
        <translation type="unfinished">Datenbeschreibung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Comments</source>
        <translation type="unfinished">Kommentare</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Categories</source>
        <translation type="unfinished">Kategorien</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;b&gt;Vector&lt;/b&gt;</source>
        <translation type="unfinished">&lt;b&gt;Vektor&lt;/b;&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Points</source>
        <translation type="unfinished">Punkte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Lines</source>
        <translation type="unfinished">Zeilen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Boundaries</source>
        <translation type="unfinished">Grenzen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Centroids</source>
        <translation>Zentroide</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Faces</source>
        <translation type="unfinished">Oberflächen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Kernels</source>
        <translation type="unfinished">Kerne</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Areas</source>
        <translation type="unfinished">Bereiche</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Islands</source>
        <translation type="unfinished">Inseln</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Top</source>
        <translation type="unfinished">Oben</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Bottom</source>
        <translation type="unfinished">Unten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>yes</source>
        <translation type="unfinished">ja</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>no</source>
        <translation type="unfinished">nein</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>History&lt;br&gt;</source>
        <translation type="unfinished">Geschichte&lt;br&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;b&gt;Layer&lt;/b&gt;</source>
        <translation>&lt;b&gt;Layer&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Features</source>
        <translation>Objekte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Driver</source>
        <translation type="unfinished">Treiber</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Database</source>
        <translation type="unfinished">Datenbank</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Table</source>
        <translation type="unfinished">Tabelle</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Key column</source>
        <translation type="unfinished">Schlüsselspalte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GISBASE is not set.</source>
        <translation type="unfinished">GISBASE nicht gesetzt.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> is not a GRASS mapset.</source>
        <translation> ist keine GRASS-Mapset.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot start </source>
        <translation type="unfinished">Fehler beim Start von </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Mapset is already in use.</source>
        <translation>Mapset wird bereits benutzt.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Temporary directory </source>
        <translation type="unfinished">Temporäres Verzeichnis </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> exist but is not writable</source>
        <translation type="unfinished"> existiert, ist aber nicht beschreibbar.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot create temporary directory </source>
        <translation>Fehler beim Anlegen des temporären Verzeichnisses </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot create </source>
        <translation type="unfinished">Fehler beim Anlegen </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot remove mapset lock: </source>
        <translation>Kann Mapsetsperre nicht entfernen: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Warning</source>
        <translation type="unfinished">Warnung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot read raster map region</source>
        <translation>Konnte &apos;region&apos; der Rasterkarte nicht lesen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot read vector map region</source>
        <translation>Konnte &apos;region der Vektorkarte nicht lesen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot read region</source>
        <translation>Konnte &apos;region&apos; nicht lesen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Where is &apos;</source>
        <translation type="unfinished">Wo ist &apos;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>original location: </source>
        <translation>Original-Location: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>To identify features, you must choose an active layer by clicking on its name in the legend</source>
        <translation>Um Objekte zu identifizieren müssen Sie einen Layer in der Legende auswählen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Location: </source>
        <comment>Metadata in GRASS Browser</comment>
        <translation>Location: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;br&gt;Mapset: </source>
        <comment>Metadata in GRASS Browser</comment>
        <translation>&lt;br&gt;Mapset: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Could not remove polygon intersection</source>
        <translation>Konnte Polygon-Überscheidung (Intersection) nicht löschen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Quick Print</source>
        <translation>Schnelles Drucken</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Quick Print is a plugin to quickly print a map with minimal effort.</source>
        <translation>Quick Print ist ein Plugin, um mal eben schnell und ohne großen Aufwandt eine Karte zu drucken.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Currently only filebased datasets are supported</source>
        <translation>Aktuell werden nur filebasierte Daten unterstützt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Loaded default style file from </source>
        <translation>Standard Style geladen von </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The directory containing your dataset needs to be writeable!</source>
        <translation>Der Ordner mit den Daten muss beschreibbar sein!</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Created default style file as </source>
        <translation>Standard Style-Datei erstellt als </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>ERROR: Failed to created default style file as </source>
        <translation>FEHLER: Konnte standard Style-Datei nicht erstellen als </translation>
    </message>
</context>
<context>
    <name>QgisApp</name>
    <message>
        <location filename="" line="0"/>
        <source>Quantum GIS - </source>
        <translation>Quantum GIS -</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Version </source>
        <translation>Version</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> with PostgreSQL support</source>
        <translation>mit PostgreSQL Unterstützung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> (no PostgreSQL support)</source>
        <translation>(keine PostgreSQL Unterstützung)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Version</source>
        <translation>Version</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Available Data Provider Plugins</source>
        <translation>Verfügbare Datenlieferanten Plugins</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>is not a valid or recognized data source</source>
        <translation type="unfinished">ist keine zulässige oder erkannte Datenquelle</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Invalid Data Source</source>
        <translation type="unfinished">Ungültige Datenquelle</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No Layer Selected</source>
        <translation type="unfinished">Keinen Layer ausgewählt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No MapLayer Plugins</source>
        <translation type="unfinished">Keine Kartenlayer-Plugins</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No MapLayer plugins in ../plugins/maplayer</source>
        <translation type="unfinished">Keine Kartenlayer-Plugins in ../plugins/maplayer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No Plugins</source>
        <translation type="unfinished">Keine Plugins</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No plugins found in ../plugins. To test plugins, start qgis from the src directory</source>
        <translation type="unfinished">Keine Plugins in ../plugins gefunden. Um Plugins zu testen, qgis aus dem src Verzeichnis starten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Name</source>
        <translation type="unfinished">Name</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Plugin %1 is named %2</source>
        <translation type="unfinished">Plugin %1 heißt %2</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Plugin Information</source>
        <translation type="unfinished">Plugin Informationen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>QGis loaded the following plugin:</source>
        <translation type="unfinished">QGis hat die follgen Plugins geladen:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Name: %1</source>
        <translation type="unfinished">Name: %1</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Version: %1</source>
        <translation type="unfinished">Version: %1</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Description: %1</source>
        <translation type="unfinished">Beschreibung: %1</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Unable to Load Plugin</source>
        <translation type="unfinished">Laden des Plugin nicht möglich</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>QGIS was unable to load the plugin from: %1</source>
        <translation type="unfinished">QGIS konnte das Plugin nicht laden von : %1</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>There is a new version of QGIS available</source>
        <translation type="unfinished">Eine neue Version von QGIS ist verfügbar</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>You are running a development version of QGIS</source>
        <translation type="unfinished">Sie verwenden eine Entwicklungsversion von QGIS</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>You are running the current version of QGIS</source>
        <translation type="unfinished">Sie verwenden die aktuelle Version von QGIS</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Would you like more information?</source>
        <translation type="unfinished">Wollen Sie mehr Information?</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>QGIS Version Information</source>
        <translation type="unfinished">QGIS Versionsinformationen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Unable to get current version information from server</source>
        <translation type="unfinished">Kann Informationen zu aktuellen Version nicht vom Server holen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Connection refused - server may be down</source>
        <translation type="unfinished">Verbunging abgelehnt - Server wahrschinlich offline</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>QGIS server was not found</source>
        <translation type="unfinished">QGIS Server nicht gefunden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Invalid Layer</source>
        <translation type="unfinished">Ungültiger Layer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>%1 is an invalid layer and cannot be loaded.</source>
        <translation type="unfinished">%1 ist ein ungültiger Layer und kann nicht geladen werden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Error Loading Plugin</source>
        <translation type="unfinished">Fehler beim Laden des Plugins</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>There was an error loading %1.</source>
        <translation type="unfinished">Es trat ein Fehler auf beim Laden von %1.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Saved map image to</source>
        <translation type="unfinished">Speichere Kartenbild nach</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Choose a filename to save the map image as</source>
        <translation type="unfinished">Wähle einen Dateinamen zum Speichern des Kartebildes</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Extents: </source>
        <translation type="unfinished">Ausmasse:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Problem deleting features</source>
        <translation type="unfinished">Problem beim Löschen der Objekte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>A problem occured during deletion of features</source>
        <translation type="unfinished">Beim Löschen der Objekte ist ein Problem aufgetreten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No Vector Layer Selected</source>
        <translation type="unfinished">Es wurde kein Vektorlayer selektiert</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Deleting features only works on vector layers</source>
        <translation type="unfinished">Löschen von Objekten ist nur in Vektorlayern möglich</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>To delete features, you must select a vector layer in the legend</source>
        <translation type="unfinished">Um Objekte zu löschen, muss ein Vektorlayer in der Legende selektiert werden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Quantum GIS is licensed under the GNU General Public License</source>
        <translation>Quantum GIS ist unter der GNU General Public License lizenziert</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>http://www.gnu.org/licenses</source>
        <translation>http://www.gnu.org/licenses</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Map legend that displays all the layers currently on the map canvas. Click on the check box to turn a layer on or off. Double click on a layer in the legend to customize its appearance and set other properties.</source>
        <translation>Legende, die alle im Kartenfester angezeigten Layer enthält. Bitte auf die Checkbox klicken, um einen Layer an- oder auszuschalten. Mit einem Doppelklick in der Legende kann die Erscheinung und sonstige Eigenschaften eines Layers festgelegt werden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Map overview canvas. This canvas can be used to display a locator map that shows the current extent of the map canvas. The current extent is shown as a red rectangle. Any layer on the map can be added to the overview canvas.</source>
        <translation>Übersichtsfenster. Dieses Fenster kann benutzt werden um die momentane Ausdehnung des Kartenfensters darzustellen. Der momentane Ausschnitt ist als rotes Rechteck dargestellt. Jeder Layer in der Karte kann zum Übersichtsfenster hinzugefügt werden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Map canvas. This is where raster and vector layers are displayed when added to the map</source>
        <translation>Kartenfenster. Dies ist der Bereich, in dem Raster- und Vektorlayer dargestellt werden, sobald sie hinzugefügt wurden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Plugins</source>
        <translation>&amp;Plugins</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Progress bar that displays the status of rendering layers and other time-intensive operations</source>
        <translation>Fortschrittsbalken. Er zeigt den Zustand von zeitintensiven Aktionen an</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Displays the current map scale</source>
        <translation>Zeigt den momentanen Kartenmassstab an</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Render</source>
        <translation>Zeichnen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>When checked, the map layers are rendered in response to map navigation commands and other events. When not checked, no rendering is done. This allows you to add a large number of layers and symbolize them before rendering.</source>
        <translation>Wenn angewählt, werden die Kartenlayer abhängig von der Bedienung der Navigationsinstrumente, gezeichnet. Anderenfalls werden die Layer nicht gezeichnet. Dies erlaubt es, eine grosse Layeranzahl hinzuzufügen und das Aussehen der Layer vor dem Zeichnen zu setzen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Choose a QGIS project file</source>
        <translation type="unfinished">Eine QGIS-Projektdatei wählen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Unable to save project</source>
        <translation type="unfinished">Projekt kann nicht gespeichert werden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Unable to save project to </source>
        <translation type="unfinished">Projekt kann nicht gespeichert werden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Toggle map rendering</source>
        <translation>Zeichnen der Karte einschalten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>This icon shows whether on the fly projection is enabled or not. Click the icon to bring up the project properties dialog to alter this behaviour.</source>
        <translation>Dieses Icon zeigt an, ob Projektion zur Laufzeit eingeschaltet ist. Ein Klick darauf öffnet den Projekteigenschaften-Dialog, in dem dieses Verhalten geändert werden kann.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Projection status - Click to open projection dialog</source>
        <translation>Projektionsstatus - Ein Mausklick öffnet den Projektionendialog</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Open an OGR Supported Vector Layer</source>
        <translation type="unfinished">Öffnen eines OGR-Vektorlayers</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>QGIS Project Read Error</source>
        <translation type="unfinished">Fehler beim Lesen des QGIS-Projektes</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Try to find missing layers?</source>
        <translation type="unfinished">Versuchen, fehlende Layer zu finden?</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Open a GDAL Supported Raster Data Source</source>
        <translation type="unfinished">Öffnen einer GDAL-Rasterdatenquelle</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Save As</source>
        <translation type="unfinished">Speichern als</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Choose a QGIS project file to open</source>
        <translation type="unfinished">QGIS-Projektdatei zum Öffnen wählen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Saved project to:</source>
        <translation type="unfinished">Projekt wurde gespeichert in:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>QGIS Browser Selection</source>
        <translation type="unfinished">QGIS-Browserauswahl</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Enter the name of a web browser to use (eg. konqueror).
</source>
        <translation type="unfinished">Geben Sie den Namen eines Webbrowsers ein (z.B. Konqueror).</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Enter the full path if the browser is not in your PATH.
</source>
        <translation type="unfinished">Geben Sie den vollen Namen ein, wenn der Browser nicht im PATH ist.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Reading settings</source>
        <translation>Lese Einstellungen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Setting up the GUI</source>
        <translation>Richte die Oberfläche ein</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Checking database</source>
        <translation>Überprüfe die Datenbank</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Restoring loaded plugins</source>
        <translation>Stelle die geladenen Plugins wieder her</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Initializing file filters</source>
        <translation>Initialisiere Dateifilter</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Restoring window state</source>
        <translation>Stelle Fensterstatus wieder her</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>QGIS Ready!</source>
        <translation>QGIS ist startklar!</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;New Project</source>
        <translation>&amp;Neues Projekt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ctrl+N</source>
        <comment>New Project</comment>
        <translation>Ctrl+N</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>New Project</source>
        <translation>Neues Projekt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Open Project...</source>
        <translation>Pr&amp;ojekt öffnen...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ctrl+O</source>
        <comment>Open a Project</comment>
        <translation>Ctrl+O</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Open a Project</source>
        <translation>Projekt öffnen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Save Project</source>
        <translation>&amp;Speichere Projekt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ctrl+S</source>
        <comment>Save Project</comment>
        <translation>Ctrl+S</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Save Project</source>
        <translation>Projekt speichern</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Save Project &amp;As...</source>
        <translation>Speichere Projekt &amp;als...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ctrl+A</source>
        <comment>Save Project under a new name</comment>
        <translation>Ctrl+A</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Save Project under a new name</source>
        <translation>Speichere das Projekt unter einem neuen Namen ab.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Print...</source>
        <translation>&amp;Drucken...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ctrl+P</source>
        <comment>Print</comment>
        <translation>Ctrl+P</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Print</source>
        <translation>Drucken</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Save as Image...</source>
        <translation>Speicher Bild als...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ctrl+I</source>
        <comment>Save map as image</comment>
        <translation>Ctrl+I</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Save map as image</source>
        <translation>Speicher Karte als Bild</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Exit</source>
        <translation>Beenden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ctrl+Q</source>
        <comment>Exit QGIS</comment>
        <translation>Ctrl+Q</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Exit QGIS</source>
        <translation>Beende QGIS</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add a Vector Layer...</source>
        <translation>Vektorlayer hinzufügen...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>V</source>
        <comment>Add a Vector Layer</comment>
        <translation>V</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add a Vector Layer</source>
        <translation>Vektorlayer hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add a Raster Layer...</source>
        <translation>Rasterlayer hinzufügen...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>R</source>
        <comment>Add a Raster Layer</comment>
        <translation>R</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add a Raster Layer</source>
        <translation>Rasterlayer hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add a PostGIS Layer...</source>
        <translation>PostGIS-Layer hinzufügen...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>D</source>
        <comment>Add a PostGIS Layer</comment>
        <translation>D</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add a PostGIS Layer</source>
        <translation>PostGIS-Layer hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>New Vector Layer...</source>
        <translation>Neuer Vektorlayer...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>N</source>
        <comment>Create a New Vector Layer</comment>
        <translation>N</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Create a New Vector Layer</source>
        <translation>Erzeuge einen neuen Vektorlayer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Remove Layer</source>
        <translation>Layer löschen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ctrl+D</source>
        <comment>Remove a Layer</comment>
        <translation>Ctrl+D</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Remove a Layer</source>
        <translation>Lösche einen Layer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add All To Overview</source>
        <translation>Alle zur Übersicht hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>+</source>
        <comment>Show all layers in the overview map</comment>
        <translation>+</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Show all layers in the overview map</source>
        <translation>Zeige alle Layer in der Übersichtskarte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Remove All From Overview</source>
        <translation>Alle aus Übersicht entfernen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>-</source>
        <comment>Remove all layers from overview map</comment>
        <translation>-</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Remove all layers from overview map</source>
        <translation>Alle Ebnene aus der Übersichtskarte entfernen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Show All Layers</source>
        <translation>Alle Layer anzeigen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>S</source>
        <comment>Show all layers</comment>
        <translation>S</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Show all layers</source>
        <translation>Alle Layer zeigen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Hide All Layers</source>
        <translation>Alle Layer ausblenden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>H</source>
        <comment>Hide all layers</comment>
        <translation>H</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Hide all layers</source>
        <translation>Alle Layer ausblenden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Project Properties...</source>
        <translation>Projekteinstellungen...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>P</source>
        <comment>Set project properties</comment>
        <translation>P</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Set project properties</source>
        <translation>Projekteigenschaften setzen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Options...</source>
        <translation>Optionen...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Change various QGIS options</source>
        <translation>Verschiedene QGIS-Einstellungen ändern</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Custom Projection...</source>
        <translation>Benutzerprojektionen...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Manage custom projections</source>
        <translation>Benutzerprojektionen verwalten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Help Contents</source>
        <translation>Hilfe-Übersicht</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>F1</source>
        <comment>Help Documentation</comment>
        <translation>F1</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Help Documentation</source>
        <translation>Hilfe</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Qgis Home Page</source>
        <translation>QGIS-Homepage</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ctrl+H</source>
        <comment>QGIS Home Page</comment>
        <translation>Ctrl+H</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>QGIS Home Page</source>
        <translation>QGIS-Homepage</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>About</source>
        <translation>Über</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>About QGIS</source>
        <translation>Über QGIS</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Check Qgis Version</source>
        <translation>QGIS Version überprüfen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Check if your QGIS version is up to date (requires internet access)</source>
        <translation>Aktualität Ihre QGIS-Version überprüfen (erfordert Internetzugang)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Refresh</source>
        <translation>Erneuern</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ctrl+R</source>
        <comment>Refresh Map</comment>
        <translation>Ctrl+R</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Refresh Map</source>
        <translation>Karte neu zeichnen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Zoom In</source>
        <translation>Hineinzoomen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ctrl++</source>
        <comment>Zoom In</comment>
        <translation>Ctrl++</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Zoom Out</source>
        <translation>Hinauszoomen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ctrl+-</source>
        <comment>Zoom Out</comment>
        <translation>Ctrl+-</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Zoom Full</source>
        <translation>Volle Ausdehnung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>F</source>
        <comment>Zoom to Full Extents</comment>
        <translation>F</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Zoom to Full Extents</source>
        <translation>Auf die volle Ausdehnung herauszoomen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Zoom To Selection</source>
        <translation>Auf die Auswahl zoomen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ctrl+F</source>
        <comment>Zoom to selection</comment>
        <translation>Ctrl+F</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Zoom to selection</source>
        <translation>Auf die Auswahl zoomen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Pan Map</source>
        <translation>Karte verschieben</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Pan the map</source>
        <translation>Karte verschieben</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Zoom Last</source>
        <translation>Zur vorherigen Zoomeinstellung zurückkehren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Zoom to Last Extent</source>
        <translation>Zur vorherigen Zoomeinstellung zurückkehren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Zoom To Layer</source>
        <translation>Auf den Layer zoomen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Zoom to Layer</source>
        <translation>Auf den Layer zoomen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Identify Features</source>
        <translation>Objekte abfragen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>I</source>
        <comment>Click on features to identify them</comment>
        <translation>I</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Click on features to identify them</source>
        <translation>Klicken Sie auf ein Objekt, um Informationen dazu zuerhalten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Select Features</source>
        <translation>Wähle Objekte aus</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Open Table</source>
        <translation>Attributtabelle öffnen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Measure Line </source>
        <translation>Linie messen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ctrl+M</source>
        <comment>Measure a Line</comment>
        <translation>Ctrl+M</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Measure a Line</source>
        <translation>Linie messen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Measure Area</source>
        <translation>Fläche messen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ctrl+J</source>
        <comment>Measure an Area</comment>
        <translation>Ctrl+J</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Measure an Area</source>
        <translation>Fläche messen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Show Bookmarks</source>
        <translation>Lesezeichen anzeigen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>B</source>
        <comment>Show Bookmarks</comment>
        <translation>B</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>New Bookmark...</source>
        <translation>Neues Lesezeichen...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ctrl+B</source>
        <comment>New Bookmark</comment>
        <translation>Ctrl+B</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>New Bookmark</source>
        <translation>Neues Lesezeichen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add WMS Layer...</source>
        <translation>WMS-Layer hinzufügen...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>W</source>
        <comment>Add Web Mapping Server Layer</comment>
        <translation>W</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add Web Mapping Server Layer</source>
        <translation>WMS-Layer hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>In Overview</source>
        <translation>In Übersicht anzeigen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>O</source>
        <comment>Add current layer to overview map</comment>
        <translation>O</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add current layer to overview map</source>
        <translation>Aktuellen Layer zur Übersicht hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Plugin Manager...</source>
        <translation>Plugin Manager...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Open the plugin manager</source>
        <translation>Öffne den Pluginmanager</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Capture Point</source>
        <translation>Punkt digitalisieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>.</source>
        <comment>Capture Points</comment>
        <translation>.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Capture Points</source>
        <translation>Punkte digitalisieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Capture Line</source>
        <translation>Linie digitalisieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>/</source>
        <comment>Capture Lines</comment>
        <translation>/</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Capture Lines</source>
        <translation>Linien digitalisieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Capture Polygon</source>
        <translation>Polygon digitalisieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ctrl+/</source>
        <comment>Capture Polygons</comment>
        <translation>Ctrl+/</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Capture Polygons</source>
        <translation>Polygon digitialisieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Delete Selected</source>
        <translation>Ausgewähltes löschen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add Vertex</source>
        <translation>Stützpunkt hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Delete Vertex</source>
        <translation>Stützpunkt löschen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Move Vertex</source>
        <translation>Stützpunkt verschieben</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;File</source>
        <translation>&amp;Datei</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Open Recent Projects</source>
        <translation>Aktuelle Pr&amp;ojekte öffnen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;View</source>
        <translation>&amp;Ansicht</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Layer</source>
        <translation>&amp;Layer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Settings</source>
        <translation>&amp;Einstellungen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Help</source>
        <translation>&amp;Hilfe</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>File</source>
        <translation>Datei</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Manage Layers</source>
        <translation>Layer koordinieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Help</source>
        <translation>Hilfe</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Digitizing</source>
        <translation>Digitalisierung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Map Navigation</source>
        <translation>Kartennavigation</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Attributes</source>
        <translation>Attribute</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Plugins</source>
        <translation>Plugins</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ready</source>
        <translation>Fertig</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>New features</source>
        <translation>Neue Objekte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Unable to open project</source>
        <translation type="unfinished">Kann das Projekt nicht öffnen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Unable to save project </source>
        <translation type="unfinished">Kann das Projekt nicht speichern </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Choose a filename to save the QGIS project file as</source>
        <translation type="unfinished">Bitte wählen Sie einen Dateinamen, unter dem Sie das Projekt speichern wollen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>QGIS: Unable to load project</source>
        <translation type="unfinished">QGIS: Kann das Projekt nicht laden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Unable to load project </source>
        <translation type="unfinished">Kann das Projekt nicht laden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>QGIS - Changes in SVN Since Last Release</source>
        <translation type="unfinished">QGIS - Änderungen in SVN seit dem letzten Release</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>You can change this option later by selecting Options from the Settings menu (Help Browser tab).</source>
        <translation type="unfinished">Sie können diese Option später ändern, indem Sie Optionen aus dem Einstellungen Menü wählen. (Hilfe-Browser-Reiter).</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Layer is not valid</source>
        <translation type="unfinished">Layer ist ungültig</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The layer is not a valid layer and can not be added to the map</source>
        <translation type="unfinished">Der Layer ist ungültig und kann daher nicht zum Kartenfenster hinzugefügt werden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Save?</source>
        <translation type="unfinished">Speichern?</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Clipboard contents set to: </source>
        <translation type="unfinished">Inhalt der Zwischenablage gesetzt auf: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> is not a valid or recognized raster data source</source>
        <translation type="unfinished"> ist keine gültige Rasterdatenquelle.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> is not a supported raster data source</source>
        <translation type="unfinished"> ist kein unterstütztes Rasterdatenformat.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Unsupported Data Source</source>
        <translation type="unfinished">Nicht unterstütztes Datenformat</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Enter a name for the new bookmark:</source>
        <translation type="unfinished">Bitte geben Sie einen Namen für das Lesenzeichen ein:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Error</source>
        <translation type="unfinished">Fehler</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Unable to create the bookmark. Your user database may be missing or corrupted</source>
        <translation type="unfinished">Kann das Lesezeichen nicht erstellen. Ihre Datenbank scheint zu fehlen oder ist kaputt.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cut Features</source>
        <translation>Selektierte Objekte ausschneiden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cut selected features</source>
        <translation>Selektierte Objekte ausschneiden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Copy Features</source>
        <translation>Objekte kopieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Copy selected features</source>
        <translation>Selektierte Objekte kopieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Paste Features</source>
        <translation>Objekte einfügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Paste selected features</source>
        <translation>Selektierte Objekte einfügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ctrl+?</source>
        <comment>Help Documentation (Mac)</comment>
        <translation>Ctrl+?</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Show most toolbars</source>
        <translation>Die meisten Werkzeugleisten anzeigen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Hide most toolbars</source>
        <translation>Die meisten Werkzeugleisten ausblenden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>
Compiled against Qt </source>
        <translation>
Kompiliert gegen QT Version </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>, running against Qt </source>
        <translation>, läuft mit QT </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Network error while communicating with server</source>
        <translation type="unfinished">Es trat ein Netzwerkfehler während der Kommunikation zum Server auf.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Unknown network socket error</source>
        <translation type="unfinished">Unbekannter Netzwerkfehler (Socketfehler)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Unable to communicate with QGIS Version server</source>
        <translation type="unfinished">Kann nicht mit dem QGIS-Server kommunizieren.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Checking provider plugins</source>
        <translation type="unfinished">Provider-Plugins werden geprüft</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Starting Python</source>
        <translation type="unfinished">Python wird gestartet</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Python error</source>
        <translation type="unfinished">Python-Fehler</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Error when reading metadata of plugin </source>
        <translation type="unfinished">Fehler beim Lesen der Plugin-Metadaten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Provider does not support deletion</source>
        <translation type="unfinished">Provider unterstützt keine Löschoperationen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Data provider does not support deleting features</source>
        <translation type="unfinished">Der Provider hat nicht die Möglichkeit, Objekte zu löschen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Layer not editable</source>
        <translation type="unfinished">Der Layer kann nicht bearbeitet werden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The current layer is not editable. Choose &apos;Start editing&apos; in the digitizing toolbar.</source>
        <translation type="unfinished">Der aktuelle Layer kann nicht bearbeitet werden. Bitte wählen Sie &apos;Bearbeitungsstatus umschalten&apos; aus der Digitalisierwerkzeugleiste.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Toggle editing</source>
        <translation type="unfinished">Bearbeitungsstatus umschalten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Toggles the editing state of the current layer</source>
        <translation>Bearbeitungsstatus des aktuellen Layers umschalten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add Ring</source>
        <translation type="unfinished">Ring hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add Island</source>
        <translation>Insel hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add Island to multipolygon</source>
        <translation type="unfinished">Insel in Multipolygon einfügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Toolbar Visibility...</source>
        <translation type="unfinished">Werkzeugleistenanzeige...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Scale </source>
        <translation type="unfinished">Maßstab </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Current map scale (formatted as x:y)</source>
        <translation type="unfinished">Aktueller Kartenmaßstab (x:y formatiert)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Map coordinates at mouse cursor position</source>
        <translation type="unfinished">Kartenkoordinaten beim Mauszeiger</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Invalid scale</source>
        <translation type="unfinished">Ungültiger Maßstab</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Do you want to save the current project?</source>
        <translation type="unfinished">Wollen Sie das aktuelle Projekt speichern?</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Python bindings - This is the major focus of this release it is now possible to create plugins using python. It is also possible to create GIS enabled applications written in python that use the QGIS libraries.</source>
        <translation>Python-Bindings - Hauptfokus dieses Releases ist die neue Möglichkeit Plugins mit Python zu schreiben.  Es ist auch möglich mit den QGIS-Bibliotheken neue GIS-Applikationen in Python zu entwickeln.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Removed automake build system - QGIS now needs CMake for compilation.</source>
        <translation>Automake-Buildsystem entfernt - QGIS benutzt nun CMake zur Kompilation.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Many new GRASS tools added (with thanks to http://faunalia.it/)</source>
        <translation type="unfinished">Viele neue GRASS-Werkzeuge hinzugefügt (mit Dank an http://faunalia.it)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Map Composer updates</source>
        <translation type="unfinished">Updates für die Druckaufbereitung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Crash fix for 2.5D shapefiles</source>
        <translation type="unfinished">Absturz für 2,5D-Shapefiles repariert.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The QGIS libraries have been refactored and better organised.</source>
        <translation>Die QGIS-Bibliotheken wurden überarbeitet und besser organisiert.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Improvements to the GeoReferencer</source>
        <translation type="unfinished">Verbesserungen am Georeferenzierer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Python console</source>
        <translation type="unfinished">Python-Konsole</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Shows the map coordinates at the current cursor position. The display is continuously updated as the mouse is moved.</source>
        <translation type="unfinished">Zeigt die Kartenkoordinate der aktuellen Cursorposition. Die Anzeige wird laufend aktualisiert, während die Maus bewegt wird.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Added locale options to options dialog.</source>
        <translation>Sprachoptionen wurden dem Optionen Dialog hinzugefügt.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Move Feature</source>
        <translation>Objekt verschieben</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Split Features</source>
        <translation>Objekte trennen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Map Tips</source>
        <translation>Kartenhinweise</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Show information about a feature when the mouse is hovered over it</source>
        <translation>Zeige Informationen zu einem Objekt, wenn die Maus darüber fährt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Current map scale</source>
        <translation>Aktueller Kartenmaßstab</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Project file is older</source>
        <translation>Projektdatei ist älter</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;p&gt;This project file was saved by an older version of QGIS.</source>
        <translation>&lt;p&gt;Diese Projektdatei wurde von einer älteren QGIS Version abgespeichert.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> When saving this project file, QGIS will update it to the latest version, possibly rendering it useless for older versions of QGIS.</source>
        <translation> Wenn Sie diese Projektdatei speichern, wird QGIS es auf die neueste Version updaten und dadurch möglicherweise  nutzlos für ältere Versionen machen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;p&gt;Even though QGIS developers try to maintain backwards compatibility, some of the information from the old project file might be lost.</source>
        <translation>&lt;p&gt;Obwohl QGIS-Entwickler versuchen, Rückwärtskompatibilität zu gewährleisten, können einige Informationen der Projektdatei verloren gehen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> To improve the quality of QGIS, we appreciate if you file a bug report at %3.</source>
        <translation> Um die Qualität von QGIS zu verbessern, möchten wir Sie bitten, einen Fehlerreport zu erstellen unter %3.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> Be sure to include the old project file, and state the version of QGIS you used to discover the error.</source>
        <translation> Stellen Sie sicher, dass die alte Projektdatei und die QGIS Version, bei der der Fehler auftritt angegeben sind, um den Fehler zu finden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;p&gt;To remove this warning when opening an older project file, uncheck the box &apos;%5&apos; in the %4 menu.</source>
        <translation>&lt;p&gt;Um diese Warnung beim Öffnen einer alten Projektdatei abzustellen, deaktivieren Sie die Box &apos;%5&apos; im Menü %4.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;p&gt;Version of the project file: %1&lt;br&gt;Current version of QGIS: %2</source>
        <translation>&lt;p&gt;Version der Projektdatei: %1&lt;br&gt;Aktueller QGIS Version: %2</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;tt&gt;Settings:Options:General&lt;/tt&gt;</source>
        <comment>Menu path to setting options</comment>
        <translation>&lt;tt&gt;Einstellungen:Optionen:Allgemein&lt;/tt&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Warn me when opening a project file saved with an older version of QGIS</source>
        <translation>Warne mich beim Öffnen einer Projektdatei, die mit einer älteren QGIS Version erstellt wurde</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>T</source>
        <comment>




Show most toolbars</comment>
        <translation type="unfinished">Die meisten Werkzeugleisten anzeigen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ctrl+T</source>
        <comment>




Hide most toolbars</comment>
        <translation type="unfinished">Ctrl+T</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source></source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgisAppBase</name>
    <message>
        <location filename="" line="0"/>
        <source>MainWindow</source>
        <translation>Hauptfenster</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Legend</source>
        <translation>Legende</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Map View</source>
        <translation>Kartenansicht</translation>
    </message>
</context>
<context>
    <name>QgsAbout</name>
    <message>
        <location filename="" line="0"/>
        <source>About Quantum GIS</source>
        <translation>Über Quantum GIS</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ok</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>About</source>
        <translation>Über</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Version</source>
        <translation>Version</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>What&apos;s New</source>
        <translation>Was ist neu</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;h2&gt;Quantum GIS (qgis)&lt;/h2&gt;</source>
        <translation>&lt;h2&gt;Quantum GIS (qgis)&lt;/h2&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>QGIS Home Page</source>
        <translation>QGIS Homepage</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Subscribe to the QGIS-User mailing list</source>
        <translation>QGIS-User-Mailingliste abonnieren.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Providers</source>
        <translation>Datenlieferant</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Developers</source>
        <translation>Entwickler</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;h2&gt;QGIS Developers&lt;/h2&gt;</source>
        <translation>&lt;h2&gt;QGIS-Entwickler&lt;/h2&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Sponsors</source>
        <translation>Sponsoren</translation>
    </message>
</context>
<context>
    <name>QgsAddAttrDialogBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Add Attribute</source>
        <translation>Attribut hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Name:</source>
        <translation>Name:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Type:</source>
        <translation>Typ:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cancel</source>
        <translation>Abbrechen</translation>
    </message>
</context>
<context>
    <name>QgsAttributeActionDialog</name>
    <message>
        <location filename="" line="0"/>
        <source>Name</source>
        <translation type="unfinished">Name</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Action</source>
        <translation type="unfinished">Aktion</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Capture</source>
        <translation type="unfinished">Erfassen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Select an action</source>
        <comment>




File dialog window title</comment>
        <translation type="unfinished">Eine Aktion wählen</translation>
    </message>
</context>
<context>
    <name>QgsAttributeActionDialogBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Form1</source>
        <translation>Formular1</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>This list contains all actions that have been defined for the current layer. Add actions by entering the details in the controls below and then pressing the Insert action button. Actions can be edited here by double clicking on the item.</source>
        <translation>Diese Liste beinhaltet alle Aktionen, die für aktive Layer definiert wurden. Fügen Sie durch Eingabe von Details in den untenstehenden Kontrollelementen Aktionen hinzu und drücken Sie dann den Knopf mit der Aufschrift &apos;Aktion hinzufügen&apos;. Aktionen können durch Doppelklick auf das entsprechende Element bearbeitet werden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Move up</source>
        <translation>Verschiebe aufwärts</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Move the selected action up</source>
        <translation>Bewege die selektierte Aktion aufwärts</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Move down</source>
        <translation>Verschiebe abwärts</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Move the selected action down</source>
        <translation>Bewege die selektierte Aktion abwärts</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Remove</source>
        <translation>Entfernen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Remove the selected action</source>
        <translation>Entferne die selektierte Aktion</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Name:</source>
        <translation>Name:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Enter the name of an action here. The name should be unique (qgis will make it unique if necessary).</source>
        <translation>Bitte Namen der Aktion eingeben. Der Name sollte eindeutig sein (qgis macht ihn eindeutig, falls notwendig). </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Enter the action name here</source>
        <translation>Namen der Aktion hier eingeben</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Action:</source>
        <translation>Aktion:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Enter the action command here</source>
        <translation>Kommando für die Aktion hier eingeben</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Browse</source>
        <translation>Durchsuchen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Browse for action commands</source>
        <translation>Nach Aktion durchsuchen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Insert action</source>
        <translation>Aktion hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Inserts the action into the list above</source>
        <translation>Aktion in die obenstehende Liste einfügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Update action</source>
        <translation>Aktualisiere die Aktion</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Update the selected action</source>
        <translation>Aktualisiere die markierte Aktion</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Insert field</source>
        <translation>Attribut einfügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Inserts the selected field into the action, prepended with a %</source>
        <translation>Fügt das markierte Attribut mit vorangestelltem &apos;%&apos; in die Aktion ein</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The valid attribute names for this layer</source>
        <translation>Die gültigen Attributnamen für diesen Layer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Capture output</source>
        <translation>Ausgaben aufzeichnen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Captures any output from the action</source>
        <translation>Ausgaben der Aktion aufzeichnen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Captures the standard output or error generated by the action and displays it in a dialog box</source>
        <translation>Nimmt Ausgaben ader Aktion auf Standardausgabe- oder -fehlerkanal auf und zeigt ihn in einem Dialog an</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Enter the action here. This can be any program, script or command that is available on your system. When the action is invoked any set of characters that start with a % and then have the name of a field will be replaced by the value of that field. The special characters %% will be replaced by the value of the field that was selected. Double quote marks group text into single arguments to the program, script or command. Double quotes will be ignored if preceeded by a backslash</source>
        <translation type="unfinished">Geben Sie hier die Aktion ein. Dies kann jedes Programm, Skript oder Kommando sein, dass in Ihrem System verfügbar ist.  Wenn die Aktion ausgeführt wird jeder durch % eingeleiteter Feldname durch den Feldwert ersetzt.  Die besondere Zeichenfolge %% wird durch den Wert des gewählten Felds ersetzt.  Mit Anführungszeichen können mehrere Wörter zu einem Argument der Aktion zusammengefaßt werden. Für mit Backslash (\) eingeleitete Anführungszeichen gilt dies nicht.</translation>
    </message>
</context>
<context>
    <name>QgsAttributeDialogBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Enter Attribute Values</source>
        <translation>Gib den Attributwert ein</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>1</source>
        <translation>1</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Attribute</source>
        <translation>Attribute</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Value</source>
        <translation>Wert</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Abbrechen</translation>
    </message>
</context>
<context>
    <name>QgsAttributeTable</name>
    <message>
        <location filename="" line="0"/>
        <source>Run action</source>
        <translation>Aktion starten</translation>
    </message>
</context>
<context>
    <name>QgsAttributeTableBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Attribute Table</source>
        <translation>Attributtabelle</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Start editing</source>
        <translation>Bearbeitun&amp;g starten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Close</source>
        <translation>&amp;Schließen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ctrl+X</source>
        <translation>Ctrl+X</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ctrl+N</source>
        <translation>Ctrl+N</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ctrl+S</source>
        <translation>Ctrl+S</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Invert selection</source>
        <translation>Selektion umkehren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ctrl+T</source>
        <translation>Ctrl+T</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Move selected to top</source>
        <translation>Selektierte Objekte nach oben</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Remove selection</source>
        <translation>Selektion löschen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Copy selected rows to clipboard (Ctrl+C)</source>
        <translation>Selektieren Zeilen in die Zwischenablage kopieren (Ctrl+C).</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Copies the selected rows to the clipboard</source>
        <translation>Kopiert die selektierten Zeilen in die Zwischenablage.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ctrl+C</source>
        <translation>Ctrl+C</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Stop editin&amp;g</source>
        <translation>Bearbeitun&amp;g beenden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Alt+G</source>
        <translation>Alt+G</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Search for:</source>
        <translation>Suchen nach:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>in</source>
        <translation>in</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Search</source>
        <translation>Suchen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Adva&amp;nced...</source>
        <translation>Erw&amp;eitert...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Alt+N</source>
        <translation>Alt+N</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Help</source>
        <translation>&amp;Hilfe</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>New column</source>
        <translation>Neue Attributspalte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Delete column</source>
        <translation>Lösche Attributspalte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Zoom map to the selected rows (Ctrl-F)</source>
        <translation>Zoome Karte zum ausgewählten Spalteneintrag (Ctrl-F)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Zoom map to the selected rows</source>
        <translation>Zoome Karte zu den ausgewählten Spalteneinträgen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ctrl+F</source>
        <translation type="unfinished">Ctrl+F</translation>
    </message>
</context>
<context>
    <name>QgsAttributeTableDisplay</name>
    <message>
        <location filename="" line="0"/>
        <source>select</source>
        <translation>Selektiere</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>select and bring to top</source>
        <translation>Selektiere und schiebe nach oben</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>show only matching</source>
        <translation>Nur Treffer zeigen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Search string parsing error</source>
        <translation>Fehler im Suchbegriff.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Search results</source>
        <translation>Suchergebnisse</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>You&apos;ve supplied an empty search string.</source>
        <translation>Sie haben einen leeren Suchbegriff eingegeben.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Error during search</source>
        <translation>Fehler beim Suchen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No matching features found.</source>
        <translation>Keine Treffer gefunden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Name conflict</source>
        <translation type="unfinished">Namenskonflikt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Stop editing</source>
        <translation>Bearbeitung beenden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Do you want to save the changes?</source>
        <translation type="unfinished">Sollen die Änderungen gespeichert werden?</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Error</source>
        <translation type="unfinished">Fehler</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Could not commit changes</source>
        <translation type="unfinished">Kann die Änderungen nicht abspeichern.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The attribute could not be inserted. The name already exists in the table.</source>
        <translation type="unfinished">Das Attribut konnte nicht eingefügt werden, da der Name bereits vorhanden ist.</translation>
    </message>
</context>
<context>
    <name>QgsBookmarks</name>
    <message>
        <location filename="" line="0"/>
        <source>Really Delete?</source>
        <translation>Wirklich löschen?</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Are you sure you want to delete the </source>
        <translation>Sind Sie sicher, dass Sie das Lesezeichen </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> bookmark?</source>
        <translation> löschen wollen?</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Error deleting bookmark</source>
        <translation>Fehler beim Löschen eines Lesezeichens</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Failed to delete the </source>
        <translation>Das Löschen des </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> bookmark from the database. The database said:
</source>
        <translation> Lesezeichens aus der Datenbank schlug fehl. Die Datenbank meldete:</translation>
    </message>
</context>
<context>
    <name>QgsBookmarksBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Geospatial Bookmarks</source>
        <translation>Räumliches Lesezeichen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Name</source>
        <translation>Name</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Project</source>
        <translation>Projekt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Extent</source>
        <translation>Ausdehnung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Id</source>
        <translation>Id</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Zoom To</source>
        <translation>Zoomen auf</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Zoom to the currently selected bookmark</source>
        <translation>Auf das selektierte Lesezeichen zoomen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Delete</source>
        <translation>Löschen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Delete the currently selected bookmark</source>
        <translation>Das selektierte Lesezeichen löschen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Close</source>
        <translation>Schliessen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Close the dialog</source>
        <translation>Dialog schliessen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Help</source>
        <translation>Hilfe</translation>
    </message>
</context>
<context>
    <name>QgsComposer</name>
    <message>
        <location filename="" line="0"/>
        <source>Choose a filename to save the map image as</source>
        <translation>Einen Dateinamen zum Speichern des Kartenbildes wählen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Choose a filename to save the map as</source>
        <translation>Einen Dateinamen zum Speichern der Karte wählen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> for read/write</source>
        <translation>um zu lesen/ schreiben</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Error in Print</source>
        <translation>Fehler beim Drucken</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot seek</source>
        <translation>Kann nicht suchen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot overwrite BoundingBox</source>
        <translation>Kann die Umgrenzung nicht überschreiben</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot find BoundingBox</source>
        <translation>Kann die Umgrenzung nicht finden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot overwrite translate</source>
        <translation>Kann Übersetzung nicht überschreiben.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot find translate</source>
        <translation>Kann Übersetzung nicht finden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>File IO Error</source>
        <translation>Dateifehler</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Paper does not match</source>
        <translation>Papier passt nicht</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The selected paper size does not match the composition size</source>
        <translation>Die ausgewählte Papiergröße passt nicht zur Auswahl.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Big image</source>
        <translation>Großes Bild</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>To create image </source>
        <translation>Um ein Bild zu erzeugen </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> requires circa </source>
        <translation>werden ca. </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> MB of memory</source>
        <translation> MB Speicher benötigt.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>QGIS - print composer</source>
        <translation>QGIS - Druckzusammenstellung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Map 1</source>
        <translation>Karte 1</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Couldn&apos;t open </source>
        <translation>Kann nicht öffnen </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>format</source>
        <translation>Format</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>SVG warning</source>
        <translation>SVG-Warnung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Don&apos;t show this message again</source>
        <translation>Diese Nachricht nicht mehr anzeigen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;p&gt;The SVG export function in Qgis has several problems due to bugs and deficiencies in the Qt4 svg code. Of note, text does not appear in the SVG file and there are problems with the map bounding box clipping other items such as the legend or scale bar.&lt;/p&gt;If you require a vector-based output file from Qgis it is suggested that you try printing to PostScript if the SVG output is not satisfactory.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Die SVG-Exportfunktion in Qgis hat derzeit einige Probleme die im Qt4-SVG-Code liegen. Es ist zu bemerken, dass derzeit kein Text in der SVG-Datei erscheint. Ferner bestehen Probleme mit der Abgrenzung der Karte von daran angrenzenden Objekten wie Legende oer Maßstabsbalken.&lt;/p&gt;Falls Sie ein vektorbasiertes Layout benötigen, empfehlen wird in PostScript zu drucken, falls die SVG-Ausgabe nicht zufriedenstellend ist.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>SVG Format</source>
        <translation>SVG-Format</translation>
    </message>
</context>
<context>
    <name>QgsComposerBase</name>
    <message>
        <location filename="" line="0"/>
        <source>General</source>
        <translation>Allgemein</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Composition</source>
        <translation>Zusammenstellung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Item</source>
        <translation>Eintrag</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Open Template ...</source>
        <translation>&amp;Schablone öffnen...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Save Template &amp;As...</source>
        <translation>Schablone speichern &amp;als... </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Print...</source>
        <translation>&amp;Drucken...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add new map</source>
        <translation>Neue Karte hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add new label</source>
        <translation>Neue Beschriftung hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add new vect legend</source>
        <translation>Neue Vektorlegende hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Select/Move item</source>
        <translation>Eintrag selektieren/verschieben</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Export as image</source>
        <translation>Exportiere als Bild</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Export as SVG</source>
        <translation>Exportiere als SVG</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add new scalebar</source>
        <translation>Neuen Massstab hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Refresh view</source>
        <translation>Aktualisiere Ansicht</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>MainWindow</source>
        <translation>MainWindow</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Zoom All</source>
        <translation>Auf Alles zoomen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Zoom In</source>
        <translation>Hineinzoomen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Zoom Out</source>
        <translation>Hinauszoomen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add Image</source>
        <translation>Bild hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Close</source>
        <translation>Schließen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Help</source>
        <translation>Hilfe</translation>
    </message>
</context>
<context>
    <name>QgsComposerLabelBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Label Options</source>
        <translation>Beschriftungsoption</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Font</source>
        <translation>Schrift</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Box</source>
        <translation>Box</translation>
    </message>
</context>
<context>
    <name>QgsComposerMap</name>
    <message>
        <location filename="" line="0"/>
        <source>Extent (calculate scale)</source>
        <translation>Ausdehnung (Massstabsberechnung)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Scale (calculate extent)</source>
        <translation>Massstab (Ausdenungsberechnung)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Map %1</source>
        <translation>Karte %1</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cache</source>
        <translation>Cache</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Render</source>
        <translation>Zeichnen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Rectangle</source>
        <translation>Rechteck</translation>
    </message>
</context>
<context>
    <name>QgsComposerMapBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Map options</source>
        <translation>Kartenoptionen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;b&gt;Map&lt;/b&gt;</source>
        <translation>&lt;b&gt;Karte&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Set</source>
        <translation>Setzen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Width</source>
        <translation>Breite</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Height</source>
        <translation>Höhe</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Set Extent</source>
        <translation>Ausdehnung setzen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Set map extent to current extent in QGIS map canvas</source>
        <translation>Ausdehnung auf die Ausmasse des QGIS Kartenausschnitts setzen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Line width scale</source>
        <translation>Linienbreitemassstab</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Width of one unit in millimeters</source>
        <translation>Breite einer Einheit in Millimeter</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Symbol scale</source>
        <translation>Symbol Massstab</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Font size scale</source>
        <translation>Massstab der Schriftgrösse</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Frame</source>
        <translation>Rahmen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Preview</source>
        <translation>Vorschau</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>1:</source>
        <translation type="unfinished">1:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Scale:</source>
        <translation>Massstab:</translation>
    </message>
</context>
<context>
    <name>QgsComposerPicture</name>
    <message>
        <location filename="" line="0"/>
        <source>Warning</source>
        <translation>Warnung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot load picture.</source>
        <translation>Kann das Bild nicht laden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Choose a file</source>
        <translation>Wählen Sie eine Datei</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Pictures (</source>
        <translation>Bilder (</translation>
    </message>
</context>
<context>
    <name>QgsComposerPictureBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Picture Options</source>
        <translation>Bild-Optionen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Frame</source>
        <translation>Rahmen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Angle</source>
        <translation>Winkel</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Width</source>
        <translation>Breite</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Height</source>
        <translation>Höhe</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Browse</source>
        <translation type="unfinished">Durchsuchen</translation>
    </message>
</context>
<context>
    <name>QgsComposerScalebarBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Barscale Options</source>
        <translation>Optionen für Massstabsbalken</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Segment size</source>
        <translation>Segmentgrösse</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Number of segments</source>
        <translation>Anzahl Segmente</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Map units per scalebar unit</source>
        <translation>Karteneinheiten pro Massstabsbalkeneinheit</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Unit label</source>
        <translation>Beschriftung der Einheit</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Map</source>
        <translation>Karte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Font</source>
        <translation>Schrift</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Line width</source>
        <translation>Linienbreite</translation>
    </message>
</context>
<context>
    <name>QgsComposerVectorLegend</name>
    <message>
        <location filename="" line="0"/>
        <source>Layers</source>
        <translation>Layer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Group</source>
        <translation>Gruppe</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Combine selected layers</source>
        <translation>Kombiniere die ausgewählten Layer.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cache</source>
        <translation>Cache</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Render</source>
        <translation>Zeichnen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Rectangle</source>
        <translation>Rechteck</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Legend</source>
        <translation>Legende</translation>
    </message>
</context>
<context>
    <name>QgsComposerVectorLegendBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Vector Legend Options</source>
        <translation>Optionen für Vektorlegende</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Title</source>
        <translation>Titel</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Map</source>
        <translation>Karte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Font</source>
        <translation>Schrift</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Box</source>
        <translation>Box</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Column 1</source>
        <translation>Kolonne 1</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Preview</source>
        <translation>Vorschau</translation>
    </message>
</context>
<context>
    <name>QgsComposition</name>
    <message>
        <location filename="" line="0"/>
        <source>Custom</source>
        <translation>Benutzerdefiniert</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>A5 (148x210 mm)</source>
        <translation>A5 (148x210 mm)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>A4 (210x297 mm)</source>
        <translation>A4 (210x297 mm)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>A3 (297x420 mm)</source>
        <translation>A3 (297x420 mm)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>A2 (420x594 mm)</source>
        <translation>A2 (420x594 mm)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>A1 (594x841 mm)</source>
        <translation>A1 (594x841 mm)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>A0 (841x1189 mm)</source>
        <translation>A0 (841x1189 mm)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>B5 (176 x 250 mm)</source>
        <translation>B5 (176 x 250 mm)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>B4 (250 x 353 mm)</source>
        <translation>B4 (250 x 353 mm)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>B3 (353 x 500 mm)</source>
        <translation>B3 (353 x 500 mm)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>B2 (500 x 707 mm)</source>
        <translation>B2 (500 x 707 mm)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>B1 (707 x 1000 mm)</source>
        <translation>B1 (707 x 1000 mm)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>B0 (1000 x 1414 mm)</source>
        <translation>B0 (1000 x 1414 mm)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Letter (8.5x11 inches)</source>
        <translation>Letter (8.5x11 inches)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Legal (8.5x14 inches)</source>
        <translation>Legal (8.5x14 inches)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Portrait</source>
        <translation>Hochformat</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Landscape</source>
        <translation>Querformat</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Out of memory</source>
        <translation>Speicher ist zu Ende (Out-of-memory).</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Qgis is unable to resize the paper size due to insufficient memory.
 It is best that you avoid using the map composer until you restart qgis.
</source>
        <translation>QGIS kann die Papiergröße wegen zu wenig Speicher nicht anpassen. Am besten Sie verweden den Mapcomposer nicht mehr, so lange sie QGIS nicht neu gestartet haben.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Label</source>
        <translation>Beschriftung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Warning</source>
        <translation>Warnung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot load picture.</source>
        <translation>Kann das Bild nicht laden.</translation>
    </message>
</context>
<context>
    <name>QgsCompositionBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Composition</source>
        <translation>Zusammenstellung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Paper</source>
        <translation>Papier</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Size</source>
        <translation>Grösse</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Units</source>
        <translation>Einheiten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Width</source>
        <translation>Breite</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Height</source>
        <translation>Höhe</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Orientation</source>
        <translation>Orientierung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Resolution (dpi)</source>
        <translation>Auflösung (dpi)</translation>
    </message>
</context>
<context>
    <name>QgsConnectionDialog</name>
    <message>
        <location filename="" line="0"/>
        <source>Test connection</source>
        <translation>Verbindung testen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Connection to </source>
        <translation>Verbindung zu </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> was successfull</source>
        <translation> war erfolgreich.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Connection failed - Check settings and try again </source>
        <translation>Verbindung fehlgeschlagen - Einstellungen überprüfen und erneut versuchen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>General Interface Help:

</source>
        <translation>Allgemeine Hilfe:</translation>
    </message>
</context>
<context>
    <name>QgsConnectionDialogBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Connection Information</source>
        <translation>Verbindunginformationen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Host</source>
        <translation>Host</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Database</source>
        <translation>Datenbank</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Username</source>
        <translation>Benutzername</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Name</source>
        <translation>Name</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Name of the new connection</source>
        <translation>Name der neuen Verbindung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Password</source>
        <translation>Passwort</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Test Connect</source>
        <translation>Teste Verbindung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Save Password</source>
        <translation>Speichere Passwort</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Create a New PostGIS connection</source>
        <translation>Erzeuge neue PostGIS Verbindung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Port</source>
        <translation>Port</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>5432</source>
        <translation>5432</translation>
    </message>
</context>
<context>
    <name>QgsContinuousColorDialogBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Continuous color</source>
        <translation>Fortlaufende Farbe</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Maximum Value:</source>
        <translation>Größter Wert:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Outline Width:</source>
        <translation>Umrandungsbreite:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Minimum Value:</source>
        <translation>Kleinster Wert:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Classification Field:</source>
        <translation>Klassifizierungsfeld:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Draw polygon outline</source>
        <translation>Polygon-Umriss zeichnen</translation>
    </message>
</context>
<context>
    <name>QgsCoordinateTransform</name>
    <message>
        <location filename="" line="0"/>
        <source>Failed</source>
        <translation>Fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>transform of</source>
        <translation>Transformation von</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>with error: </source>
        <translation>mit Fehler:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The source spatial reference system (SRS) is not valid. </source>
        <translation>Das Quell-Referenzsystem (SRS) ist nicht gültig. </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The coordinates can not be reprojected. The SRS is: </source>
        <translation>Die Koordinaten können nicht reprojiziert werden. Das SRS ist: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The destination spatial reference system (SRS) is not valid. </source>
        <translation>Das Zielreferenzsystem (SRS) ist nicht gültig. </translation>
    </message>
</context>
<context>
    <name>QgsCopyrightLabelPlugin</name>
    <message>
        <location filename="" line="0"/>
        <source>Bottom Left</source>
        <translation>Unten links</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Top Left</source>
        <translation>Oben links</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Top Right</source>
        <translation>Oben rechts</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Bottom Right</source>
        <translation>Unten rechts</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Copyright Label</source>
        <translation>&amp;Urhebersrechtshinweis</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Creates a copyright label that is displayed on the map canvas.</source>
        <translation>Erzeugt einen Urheberrechtshinweis auf dem Kartenbild.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Decorations</source>
        <translation>&amp;Dekorationen</translation>
    </message>
</context>
<context>
    <name>QgsCopyrightLabelPluginGuiBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Copyright Label Plugin</source>
        <translation>Urhebersrechtsnachweis-Plugin</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Placement</source>
        <translation>Platzierung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Bottom Left</source>
        <translation>Unten links</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Top Left</source>
        <translation>Oben links</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Bottom Right</source>
        <translation>Unten rechts</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Top Right</source>
        <translation>Oben rechts</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Orientation</source>
        <translation>Orientierung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Horizontal</source>
        <translation>Horizontal</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Vertical</source>
        <translation>Vertikal</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Enable Copyright Label</source>
        <translation>Urheberrechtshinweis aktivieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Color</source>
        <translation type="unfinished">Farbe</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-size:12pt;&quot;&gt;Description&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Enter your copyright label below. This plugin supports basic html markup tags for formatting the label. For example:&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;&amp;lt;B&amp;gt; Bold text &amp;lt;/B&amp;gt; &lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-weight:600;&quot;&gt;&lt;span style=&quot; font-weight:400; font-style:italic;&quot;&gt;&amp;lt;I&amp;gt; Italics &amp;lt;/I&amp;gt;&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-style:italic;&quot;&gt;&lt;span style=&quot; font-style:normal;&quot;&gt;(note: &amp;amp;copy; gives a copyright symbol)&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-size:12pt;&quot;&gt;Beschreibung&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Fügen Sie unten einen Urheberrechtshinweis hinzu. Dieses Plugin unterstützt Standard-HTML &apos;Markup Tags&apos; für die Formatierung. Zum Beispiel:&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;&amp;lt;B&amp;gt; Fettgedruckter Text &amp;lt;/B&amp;gt; &lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-weight:600;&quot;&gt;&lt;span style=&quot; font-weight:400; font-style:italic;&quot;&gt;&amp;lt;I&amp;gt; Kursivschrift &amp;lt;/I&amp;gt;&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-style:italic;&quot;&gt;&lt;span style=&quot; font-style:normal;&quot;&gt;(Bemerkung: &amp;amp;copy; stellt ein Copyright Symbol dar)&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&#xa9; QGIS 2008</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsCustomProjectionDialog</name>
    <message>
        <location filename="" line="0"/>
        <source>Delete Projection Definition?</source>
        <translation>Projektdefinition löschen?</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Deleting a projection definition is not reversable. Do you want to delete it?</source>
        <translation>Das Löschen einer Projektdefinition ist nicht umkehrbar. Wirklich löschen?</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Abort</source>
        <translation>Abbrechen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>New</source>
        <translation>Neu</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>QGIS Custom Projection</source>
        <translation>QGIS benutzerdefinierte Projektion</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>This proj4 projection definition is not valid. Please correct before pressing save.</source>
        <translation>Diese proj4 Definition ist ungültig. Bitte vor dem speichern korrigieren.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>This proj4 projection definition is not valid. Please give the projection a name before pressing save.</source>
        <translation>Diese proj4 Projektionsdefinition ist ungültig. Bitte Sie einen Projektionsnamen an, bevor &apos;speichern&apos; gedrückt wird.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>This proj4 projection definition is not valid. Please add the parameters before pressing save.</source>
        <translation>Diese proj4 Projektionsdefinition ist ungültig. Bitte geben sie Parameter an, bevor &apos;speichern&apos; gedrückt wird.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>This proj4 projection definition is not valid. Please add a proj= clause before pressing save.</source>
        <translation>Diese proj4 Projektionsdefinition ist ungültig. Bitte fügen sie einen proj= Ausdruck hinzu, bevor &apos;speichern&apos; gedrückt wird. </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>This proj4 ellipsoid definition is not valid. Please add a ellips= clause before pressing save.</source>
        <translation>Diese proj4 Ellipsoiddefinition ist ungültig. Bitte fügen Sie einen proj= Ausdruck hinzu, bevor &apos;speichern&apos; gedrückt wird. </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>This proj4 projection definition is not valid.</source>
        <translation>Diese proj4 Projektionsdefinition ist ungültig.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Northing and Easthing must be in decimal form.</source>
        <translation>Northing und Easthing muss in dezimaler Form sein.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Internal Error (source projection invalid?)</source>
        <translation>Interner Fehler (Quellprojektion ungültig?)</translation>
    </message>
</context>
<context>
    <name>QgsCustomProjectionDialogBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Name:</source>
        <translation>Name:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Custom Projection Definition</source>
        <translation>Definition der Benutzerprojektion</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Parameters:</source>
        <translation>Parameter:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>|&lt;</source>
        <translation>|&lt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;</source>
        <translation>&lt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>1 of 1</source>
        <translation>1 von 1</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&gt;</source>
        <translation>&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&gt;|</source>
        <translation>&gt;|</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>New</source>
        <translation>Neu</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Save</source>
        <translation>Speichern</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Delete</source>
        <translation>Löschen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Close</source>
        <translation>Schliessen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Define</source>
        <translation>Definieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Test</source>
        <translation>Testen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Transform from WGS84 to the chosen projection</source>
        <translation>Von WGS84 zur ausgewählten Projektion transformieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Calculate</source>
        <translation>Berechnen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Geographic / WGS84</source>
        <translation>Geographisch/ WGS84</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>North:</source>
        <translation>Nord:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>East:</source>
        <translation>Ost:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>You can define your own custom projection here. The definition must conform to the proj4 format for specifying a Spatial Reference System.</source>
        <translation>Sie können hier Ihre eigene Projektion erstellen. Die Definition muss proj4 Format zur Angabe eines Koordinatensystems entsprechen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Use the text boxes below to test the projection definition you are creating. Enter a coordinate where both the lat/long and the projected result are known (for example by reading off a map). Then press the calculate button to see if the projection definition you are creating is accurate.</source>
        <translation>Nutzen Sie die Textfelder unten, um die Projektion zu testen. Geben Sie Koordinaten an, die in lat/long und Ihrer Projektion bekannt sind (z.B. aus einer Karte). Dann klicken Sie auf Berechnen, um zu sehen, ob die von Ihnen angegebenen Projektionsparameter korrekt sind.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Projected Coordinate System</source>
        <translation>Projiziertes Koordinatensystem</translation>
    </message>
</context>
<context>
    <name>QgsDbSourceSelect</name>
    <message>
        <location filename="" line="0"/>
        <source>Are you sure you want to remove the </source>
        <translation>Sind Sie sicher das Sie die Verbindung und </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> connection and all associated settings?</source>
        <translation> alle damit verbunden Einstellungen löschen wollen?</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Confirm Delete</source>
        <translation>Löschen bestätigen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Select Table</source>
        <translation>Tabelle wählen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>You must select a table in order to add a Layer.</source>
        <translation>Es muß eine Tabelle gewählt werden, um einen Layer hinzuzufügen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Password for </source>
        <translation>Passwort für </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Please enter your password:</source>
        <translation>Bitte Passwort eingeben:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Connection failed</source>
        <translation>Verbindungsfehler</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Type</source>
        <translation>Typ</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Sql</source>
        <translation>Sql</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Connection to %1 on %2 failed. Either the database is down or your settings are incorrect.%3Check your username and password and try again.%4The database said:%5%6</source>
        <translation>Verbindung zu %1 auf %2 ist fehlgeschlagen. Entweder ist die Datenbank abgeschaltet oder Ihre Einstellungen sind falsch. %3 Bitte überprüfen Sie den Benutzernamen und das Passwort und probieren Sie es noch einmal. %4 Die Datenbank meldete folgendes:%5%6.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Wildcard</source>
        <translation>Platzhalter</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>RegExp</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>All</source>
        <translation type="unfinished">Alle</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Schema</source>
        <translation type="unfinished">Schema</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Table</source>
        <translation type="unfinished">Tabelle</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Geometry column</source>
        <translation>Geometriespalte</translation>
    </message>
</context>
<context>
    <name>QgsDbSourceSelectBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Add PostGIS Table(s)</source>
        <translation>PostGIS-Tabelle(n) hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add</source>
        <translation>Hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Help</source>
        <translation>Hilfe</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Connect</source>
        <translation>Verbinden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>New</source>
        <translation>Neu</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Edit</source>
        <translation>Bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Delete</source>
        <translation>Löschen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Close</source>
        <translation>Schließen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>PostgreSQL Connections</source>
        <translation>PostgreSQL-Verbindungen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Search:</source>
        <translation>Suchen:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Search mode:</source>
        <translation>Suchmodus:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Search in columns:</source>
        <translation>Suche in Spalten:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Search options...</source>
        <translation>Suchoptionen...</translation>
    </message>
</context>
<context>
    <name>QgsDbTableModel</name>
    <message>
        <location filename="" line="0"/>
        <source>Schema</source>
        <translation type="unfinished">Schema</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Table</source>
        <translation type="unfinished">Tabelle</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Type</source>
        <translation type="unfinished">Typ</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Geometry column</source>
        <translation>Geometriespalte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Sql</source>
        <translation type="unfinished">Sql</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Point</source>
        <translation type="unfinished">Punkt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Multipoint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Line</source>
        <translation type="unfinished">Linie</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Multiline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Polygon</source>
        <translation type="unfinished">Polygon</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Multipolygon</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsDelAttrDialogBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Delete Attributes</source>
        <translation>Attribute löschen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cancel</source>
        <translation>Abbrechen</translation>
    </message>
</context>
<context>
    <name>QgsDelimitedTextPlugin</name>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Add Delimited Text Layer</source>
        <translation>Getrennte Textdatei hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add a delimited text file as a map layer. </source>
        <translation>Eine Textdatei dem Kartenfenster als Layer hinzufügen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The file must have a header row containing the field names. </source>
        <translation>Die Datei muss eine Kopfzeile mit Spaltennamen enthalten.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>X and Y fields are required and must contain coordinates in decimal units.</source>
        <translation>X- und Y-Spalten mit dezimalen Koordinaten sind unbedingt erforderlich</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Delimited text</source>
        <translation>&amp;Getrennter Text</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>DelimitedTextLayer</source>
        <translation>Layer aus Textdatei</translation>
    </message>
</context>
<context>
    <name>QgsDelimitedTextPluginGui</name>
    <message>
        <location filename="" line="0"/>
        <source>No layer name</source>
        <translation>Kein Layername</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Please enter a layer name before adding the layer to the map</source>
        <translation>Bitte geben Sie einen Layernamen ein, bevor Sie den Layer zum Kartenfenster hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No delimiter</source>
        <translation>Kein Trennzeichen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Please specify a delimiter prior to parsing the file</source>
        <translation>Es muss ein Trennzeichen eingegeben werden, damit die Datei abgearbeitet werden kann</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Choose a delimited text file to open</source>
        <translation>Textdatei zum Öffnen wählen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Parse</source>
        <translation>Analysieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Description</source>
        <translation>Beschreibung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Select a delimited text file containing a header row and one or more rows of x and y coordinates that you would like to use as a point layer and this plugin will do the job for you!</source>
        <translation>Wähle eine Textdatei mit Trennzeichen, das eine Kopfzeile, und Spalten mit X- und Y-Koordinaten enthält, die Sie gerne als Punktlayer darstellen möchten und QGIS erledigt das für Sie!</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Use the layer name box to specify the legend name for the new layer. Use the delimiter box to specify what delimeter is used in your file (e.g. space, comma, tab or a regular expression in Perl style). After choosing a delimiter, press the parse button and select the columns containing the x and y values for the layer.</source>
        <translation>Benutzen Sie die Layername Box, um den Legendennamen des zu erstellenden Layers anzugeben. Benutzen Sie die Trennzeichen Box, um das in der Textdatei verwendete Trennzeichen anzugeben (z.B.: Leerzeichen, Kommar, Tabulator oder ein anderer regulärer Ausdruck im Perl-Stil), Nun drücken Sie den Knopf Analysieren und wählen die Spalten mit den X- und Y-Koordinaten aus.</translation>
    </message>
</context>
<context>
    <name>QgsDelimitedTextPluginGuiBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Create a Layer from a Delimited Text File</source>
        <translation>Textdatei aus Layer erzeugen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;p align=&quot;right&quot;&gt;X field&lt;/p&gt;</source>
        <translation>&lt;p align=&quot;right&quot;&gt;X-Feld&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Name of the field containing x values</source>
        <translation>Nennen Sie das Feld, das die X-Werte enthält</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Name of the field containing x values. Choose a field from the list. The list is generated by parsing the header row of the delimited text file.</source>
        <translation>Nennen Sie das Feld, das die X-Werte enthält. Wähle ein Feld aus der Liste, die aus der Kopfzeile der Textdatei erzeugt wurde.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;p align=&quot;right&quot;&gt;Y field&lt;/p&gt;</source>
        <translation>&lt;p align=&quot;right&quot;&gt;Y Feld&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Name of the field containing y values</source>
        <translation>Nennen Sie das Feld, das die y-Werte enthält</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Name of the field containing y values. Choose a field from the list. The list is generated by parsing the header row of the delimited text file.</source>
        <translation>Nennen Sie das Feld, das die y-Werte enthält. Wähle ein Feld aus der Liste, die aus der Kopfzeile der Textdatei erzeugt wurde.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Layer name</source>
        <translation>Layername</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Name to display in the map legend</source>
        <translation>Name, der in der Kartenlegende angezeigt wird</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Name displayed in the map legend</source>
        <translation>Name, der in der Kartenlegende angezeigt wird</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Delimiter</source>
        <translation>Trennzeichen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Delimiter to use when splitting fields in the text file. The delimiter can be more than one character.</source>
        <translation>Trennzeichen, das zum Aufspalten der Felder in der Textdatei verwendet wird. Das Trennzeichen kann mehr als ein Zeichen sein.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Delimiter to use when splitting fields in the delimited text file. The delimiter can be 1 or more characters in length.</source>
        <translation>Trennzeichen, das zum Aufspalten der Felder in der Textdatei verwendet wird. Das Trennzeichen kann ein oder mehrere Zeichen lang sein.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Delimited Text Layer</source>
        <translation>Layer aus Textdatei</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Delimited text file</source>
        <translation>Textdatei</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Full path to the delimited text file</source>
        <translation>Vollständiger Pfad zur Textdatei</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Full path to the delimited text file. In order to properly parse the fields in the file, the delimiter must be defined prior to entering the file name. Use the Browse button to the right of this field to choose the input file.</source>
        <translation>Vollständiger Pfad zur Textdatei. Um die Felder in der Datei ordentlich verarbeiten zu können, muß das Trennzeichen vor der Eingabe des Dateinamens definiert sein. Zum Wählen der Eingabedatei den Durchsuchen- Knopf rechts des Feldes verwenden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Browse to find the delimited text file to be processed</source>
        <translation>Durchsuchen zum Finden der zuverarbeitenden Textdatei</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Use this button to browse to the location of the delimited text file. This button will not be enabled until a delimiter has been entered in the &lt;i&gt;Delimiter&lt;/i&gt; box. Once a file is chosen, the X and Y field drop-down boxes will be populated with the fields from the delimited text file.</source>
        <translation>Verwende diesen Knopf zum Durchsuchen nach dem Ort der Textdatei. Dieser Knopf ist nicht aktiv bis ein Trennzeichen in der &lt;i&gt;Trennzeichen&lt;/i&gt; Box eingegeben wurde. Wenn die Datei erst einmal gewählt wurde, werden die X- und Y-Feld Dropdownboxen mit den Feldern aus der Textdatei gefüllt.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Sample text</source>
        <translation>Beispieltext</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Browse...</source>
        <translation>Suchen...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The delimiter is taken as is</source>
        <translation>Das Trennzeichen wurde wie vorhanden verwendet</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Plain characters</source>
        <translation>Klartext</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The delimiter is a regular expression</source>
        <translation>Dast Trennzeichen ist ein regulärer Ausdruck</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Regular expression</source>
        <translation>Regulärer Ausdruck</translation>
    </message>
</context>
<context>
    <name>QgsDelimitedTextProvider</name>
    <message>
        <location filename="" line="0"/>
        <source>Note: the following lines were not loaded because Qgis was unable to determine values for the x and y coordinates:
</source>
        <translation>Beachte: Die folgenden Linien wurden nicht geladen, da QGIS die Werte für die X und Y Koordinaten nicht herausfinden konnte.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Error</source>
        <translation>Fehler</translation>
    </message>
</context>
<context>
    <name>QgsDlgPgBufferBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Buffer features</source>
        <translation>Puffereigenschaften</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Buffer distance in map units:</source>
        <translation>Gepufferte Entfernung in Karteneinheiten:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Table name for the buffered layer:</source>
        <translation>Tabellenname für den gepufferten Layer:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Create unique object id</source>
        <translation>Erzeuge eindeutige Objekt ID</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>public</source>
        <translation>öffentlich</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Geometry column:</source>
        <translation>Geometriespalte:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Spatial reference ID:</source>
        <translation>Räumliche Referenz ID:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Unique field to use as feature id:</source>
        <translation>Eindeutiges Feld zur Verwendung als Objekt-ID:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Schema:</source>
        <translation>Schema:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add the buffered layer to the map?</source>
        <translation>Den gepufferten Layer zur Karte hinzufügen?</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;h2&gt;Buffer the features in layer: &lt;/h2&gt;</source>
        <translation>&lt;h2&gt;Objekte im Layer puffern: &lt;/h2&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Parameters</source>
        <translation>Parameter</translation>
    </message>
</context>
<context>
    <name>QgsEditReservedWordsBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Edit Reserved Words</source>
        <translation>Bearbeite reservierte Worte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Status</source>
        <translation>Status</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Index</source>
        <translation>Index</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Reserved Words</source>
        <translation>Reservierte Worte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Double click the Column Name column to change the name of the column.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Doppelklicken SIe auf den Spaltennamen, um ihn zu ändern.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Column Name</source>
        <translation>Spaltenname</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;This shapefile contains reserved words. These may affect the import into PostgreSQL. Edit the column names so none of the reserved words listed at the right are used (click on a Column Name entry to edit). You may also change any other column name if desired.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Diesses Shapefile enthält reservierte Wörter. Das könnte den Import in PostgreSQL beeinträchtigen. Editieren Sie die Spaltennamen so dass dort keine reservierten Wörter, die auf der rechten Seite aufgelistet sind, mehr vorkommen. (Zum Ändern auf den Spaltennamen klicken). Andere Spalten können natürlich auch geändert werden.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
</context>
<context>
    <name>QgsEditReservedWordsDialog</name>
    <message>
        <location filename="" line="0"/>
        <source>Status</source>
        <translation>Status</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Column Name</source>
        <translation>Spaltenname</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Index</source>
        <translation>Index</translation>
    </message>
</context>
<context>
    <name>QgsEncodingFileDialog</name>
    <message>
        <location filename="" line="0"/>
        <source>Encoding:</source>
        <translation>Kodierung:</translation>
    </message>
</context>
<context>
    <name>QgsFillStyleWidgetBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Form1</source>
        <translation>Formular1</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Fill Style</source>
        <translation>Füllung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>PolyStyleWidget</source>
        <translation>PolyStyleWidget</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Colour:</source>
        <translation>Farbe:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>col</source>
        <translation>col</translation>
    </message>
</context>
<context>
    <name>QgsGPSDeviceDialog</name>
    <message>
        <location filename="" line="0"/>
        <source>New device %1</source>
        <translation>Neues Gerät %1</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Are you sure?</source>
        <translation>Sind Sie sicher?</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Are you sure that you want to delete this device?</source>
        <translation>Sind Sie sicher, dass sie dieses Gerät löschen wollen?</translation>
    </message>
</context>
<context>
    <name>QgsGPSDeviceDialogBase</name>
    <message>
        <location filename="" line="0"/>
        <source>GPS Device Editor</source>
        <translation>GPS-Geräteeditor</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Device name:</source>
        <translation>Gerätename:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>This is the name of the device as it will appear in the lists</source>
        <translation>Dies ist der Name des Gerätes, so wie er in der Liste erscheinen wird</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Update device</source>
        <translation>Gerät zum Hinaufladen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Delete device</source>
        <translation>Lösche Gerät</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>New device</source>
        <translation>Neues Gerät</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Close</source>
        <translation>Schliessen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Commands</source>
        <translation>Kommandos</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Waypoint download:</source>
        <translation>Wegpunkt herunterladen:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Waypoint upload:</source>
        <translation>Wegpunkt hinaufladen:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Route download:</source>
        <translation>Route herunterladen:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Route upload:</source>
        <translation>Route hinaufladen:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Track download:</source>
        <translation>Spur herunterladen:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The command that is used to upload tracks to the device</source>
        <translation>Das Kommando, welches gebraucht wird, um eine Spur auf das Gerät hochzuladen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Track upload:</source>
        <translation>Spur hinaufladen:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The command that is used to download tracks from the device</source>
        <translation>Das Kommando, um Spuren vom Gerät herunterzuladen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The command that is used to upload routes to the device</source>
        <translation>Das Kommando zum Hinaufladen von Routen zum Gerät</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The command that is used to download routes from the device</source>
        <translation>Das Kommando, um eine Route vom Gerät herunterzuladen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The command that is used to upload waypoints to the device</source>
        <translation>Das Kommando, zum Heraufladen von Wegpunkten zum Gerät</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The command that is used to download waypoints from the device</source>
        <translation>Das Kommando, um Wegpunkte vom Gerät herunterzuladen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;In the download and upload commands there can be special words that will be replaced by QGIS when the commands are used. These words are:&lt;span style=&quot; font-style:italic;&quot;&gt;%babel&lt;/span&gt; - the path to GPSBabel&lt;br /&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;%in&lt;/span&gt; - the GPX filename when uploading or the port when downloading&lt;br /&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;%out&lt;/span&gt; - the port when uploading or the GPX filename when downloading&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Im Upload- und Download-Kommando können speizielle Wörter verwendet werden, die durch QGIS bei der Ausführung der Kommandos ersetzt werden. Die Wörter sind:&lt;span style=&quot; font-style:italic;&quot;&gt;%babel&lt;/span&gt; - Pfad zur GPSBabel&lt;br /&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;%in&lt;/span&gt; - Die GPX-Datei zum Hochladen oder den Port fürs Downloaden.&lt;br /&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;%out&lt;/span&gt; - den Port fürs Hochladen oder die GPX-Datei zum Downloaden.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
</context>
<context>
    <name>QgsGPSPlugin</name>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Gps Tools</source>
        <translation>&amp;GPS Werkzeuge</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Create new GPX layer</source>
        <translation>Erstelle neuen GPX-Layer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Creates a new GPX layer and displays it on the map canvas</source>
        <translation>Erzeugt einen neuen GPX-Layer und zeichnet ihn in das Kartenfenster.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Gps</source>
        <translation>&amp;Gps</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Save new GPX file as...</source>
        <translation>Speicher neue GPX-Datei als...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GPS eXchange file (*.gpx)</source>
        <translation>GPS eXchange Datei (*.gpx)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Could not create file</source>
        <translation>Kann die Datei nicht erzeugen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Unable to create a GPX file with the given name. </source>
        <translation>Kann die GPX-Datei mit dem angegebenen Namen nicht erzeugen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Try again with another name or in another </source>
        <translation>Bitte probieren Sie es mit einem anderen Namen oder in einem anderen </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>directory.</source>
        <translation>Ordner.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GPX Loader</source>
        <translation>GPX Lader</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Unable to read the selected file.
</source>
        <translation>Kann die ausgewählte Datei nicht lesen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Please reselect a valid file.</source>
        <translation>Bitte wählen Sie eine gültige Datei aus.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Could not start process</source>
        <translation>Kann den Prozess nicht starten.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Could not start GPSBabel!</source>
        <translation>Kann GPSBabel nicht starten!</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Importing data...</source>
        <translation>Importiere Daten...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cancel</source>
        <translation>Abbrechen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Could not import data from %1!

</source>
        <translation>Konnte die daten von %1 nicht importieren!</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Error importing data</source>
        <translation>Fehler beim Importieren der Daten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Not supported</source>
        <translation>Nicht unterstützt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>This device does not support downloading </source>
        <translation>Dieses Gerät unterstützt den Download </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>of </source>
        <translation>von nicht.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Downloading data...</source>
        <translation>Lade Daten herunter...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Could not download data from GPS!

</source>
        <translation>Konnte die Daten nicht vom GPS-Gerät herunterladen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Error downloading data</source>
        <translation>Fehler beim Herunterladen der Daten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>This device does not support uploading of </source>
        <translation>Dieses Gerät unterstützt das Hochladen von </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Uploading data...</source>
        <translation>Lade Daten hoch...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Error while uploading data to GPS!

</source>
        <translation>Fehler beim Hochladen der Daten ins GPS!</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Error uploading data</source>
        <translation>Fehler beim Hochladen der Daten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Could not convert data from %1!

</source>
        <translation>Konnte Daten von %1 nicht konvertieren!</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Error converting data</source>
        <translation>Fehler beim Datenkonvertieren</translation>
    </message>
</context>
<context>
    <name>QgsGPSPluginGui</name>
    <message>
        <location filename="" line="0"/>
        <source>Choose a filename to save under</source>
        <translation>Bitte wählen Sie einen Dateinamen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GPS eXchange format (*.gpx)</source>
        <translation>GPS eXchange Format (*.gpx)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Select GPX file</source>
        <translation>Wählen Sie GPX-Datei aus</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Select file and format to import</source>
        <translation>Selektieren SIe Datei und Format zum Importieren.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Waypoints</source>
        <translation type="unfinished">Wegpunkte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Routes</source>
        <translation type="unfinished">Routen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Tracks</source>
        <translation type="unfinished">Spuren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>QGIS can perform conversions of GPX files, by using GPSBabel (%1) to perform the conversions.</source>
        <translation>QGIS kann GPX-Dateien mit Hilfe von GPSBabel (%1) konvertieren.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>This requires that you have GPSBabel installed where QGIS can find it.</source>
        <translation>Dazu muss GPSBabel an einem Ort installiert sein, den QGIS finden kann.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Select a GPX input file name, the type of conversion you want to perform, a GPX filename that you want to save the converted file as, and a name for the new layer created from the result.</source>
        <translation>Wählen Sie eine GPX-Eingabedatei, die Konvertierung, die Sie durchführen möchten, einen Namen für die Ausgabedatei und einen Namen für den Layer, der aus den Ergebnissen erstellt werden soll.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GPX is the %1, which is used to store information about waypoints, routes, and tracks.</source>
        <translation>GPX ist das %1, das benutzt wird, um Informationen zu Wegpunkten, Routen und Spuren zu speichern.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GPS eXchange file format</source>
        <translation>GPS eXchange Dateiformat</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Select a GPX file and then select the feature types that you want to load.</source>
        <translation>Wählen Sie eine GPX Datei und dann die Objekttypen, die Sie laden möchten.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>This tool will help you download data from a GPS device.</source>
        <translation>Dieses Werkzeug hilft Ihnen dabei, Daten von Ihrem GPS-Gerät herunterzuladen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Choose your GPS device, the port it is connected to, the feature type you want to download, a name for your new layer, and the GPX file where you want to store the data.</source>
        <translation>Wählen Sie Ihr GPS-Gerät, den Port, an den es angeschlossen ist, den Objekttyp, den Sie herunterladen möchten, einen Namen für den neuen Layer und die GPX-Datei, als die Sie die Daten speichern möchten.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>If your device isn&apos;t listed, or if you want to change some settings, you can also edit the devices.</source>
        <translation>Wenn Ihr Gerät nicht aufgelistet ist, oder Sie Einstellungen ändern möchten, können Sie die Geräteeinstellungen editieren.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>This tool uses the program GPSBabel (%1) to transfer the data.</source>
        <translation>Dieses Werkzeug benutzt GPSBabel (%1), um die Daten zu transferieren.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>This tool will help you upload data from a GPX layer to a GPS device.</source>
        <translation>Dieses Werkzeug hilft Ihnen, Daten aus einem GPX-Layer auf ein GPS-Gerät zu spielen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Choose the layer you want to upload, the device you want to upload it to, and the port your device is connected to.</source>
        <translation>Wählen Sie einen Layer, den sie hochladen möchten, das GPS-Gerät und den Port, über den das Gerät verbunden ist.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>QGIS can only load GPX files by itself, but many other formats can be converted to GPX using GPSBabel (%1).</source>
        <translation>QGIS selbst kann nur GPX-Dateien laden, aber viele andere Formate können nach GPX konvertiert werden mit  (%1).</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Select a GPS file format and the file that you want to import, the feature type that you want to use, a GPX filename that you want to save the converted file as, and a name for the new layer.</source>
        <translation>Wählen SIe ein GPS-Dateiformat, die Datei, die Sie importieren möchten, den Objekttyp, den Sie benutzen möchten, einen GPX-Dateinamen, unter dem Sie die konvertierten Daten speichern möchten und einen Namen für den neuen Layer.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>All file formats can not store waypoints, routes, and tracks, so some feature types may be disabled for some file formats.</source>
        <translation>Nicht alle Dateiformate können Wegpunkte, Routen und Spuren speichern, daher können einige Objekttypen für verschiedene Formate deaktiviert sein.</translation>
    </message>
</context>
<context>
    <name>QgsGPSPluginGuiBase</name>
    <message>
        <location filename="" line="0"/>
        <source>GPS Tools</source>
        <translation>GPS Werkzeuge</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Load GPX file</source>
        <translation>Lade GPX Datei</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>File:</source>
        <translation>Datei:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Feature types:</source>
        <translation>Objekttypen:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Waypoints</source>
        <translation>Wegpunkte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Routes</source>
        <translation>Routen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Tracks</source>
        <translation>Spuren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Import other file</source>
        <translation>Importiere andere Datei</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>File to import:</source>
        <translation>Zu importierende Datei:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Feature type:</source>
        <translation>Objekttyp:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GPX output file:</source>
        <translation>GPX Ausgabedatei:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Layer name:</source>
        <translation>Layername:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Download from GPS</source>
        <translation>Von GPS herunterladen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Edit devices</source>
        <translation>Editiere Geräte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GPS device:</source>
        <translation>GPS Gerät:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Output file:</source>
        <translation>Ausgabedatei:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Port:</source>
        <translation>Port:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Upload to GPS</source>
        <translation>nach GPS hochladen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Data layer:</source>
        <translation>Datenlayer:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Browse...</source>
        <translation>Suchen...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Save As...</source>
        <translation type="unfinished">Speichern unter...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>(Note: Selecting correct file type in browser dialog important!)</source>
        <translation>(Bemerkung: Die Auswahl des richtigen Datentyps ist wichtig!)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GPX Conversions</source>
        <translation>GPX-Konvertierung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Conversion:</source>
        <translation>Konvertierung:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GPX input file:</source>
        <translation>GPX-Eingabedatei</translation>
    </message>
</context>
<context>
    <name>QgsGPXProvider</name>
    <message>
        <location filename="" line="0"/>
        <source>Bad URI - you need to specify the feature type.</source>
        <translation>Falsche URI - Bitte geben Sie den Featuretype an.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GPS eXchange file</source>
        <translation>GPS eXchange Datei</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Digitized in QGIS</source>
        <translation>Digitalisiert mit QGIS</translation>
    </message>
</context>
<context>
    <name>QgsGeomTypeDialog</name>
    <message>
        <location filename="" line="0"/>
        <source>Name</source>
        <translation>Name</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Type</source>
        <translation>Typ</translation>
    </message>
</context>
<context>
    <name>QgsGeomTypeDialogBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Type</source>
        <translation>Typ</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Point</source>
        <translation>Punkt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Line</source>
        <translation>Linie</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Polygon</source>
        <translation>Polygon</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>New Vector Layer</source>
        <translation>Neuer Vektorlayer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Attributes:</source>
        <translation>Attribute:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add</source>
        <translation>Hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Column 1</source>
        <translation>Kolonne 1</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Remove</source>
        <translation>Entfernen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>File Format:</source>
        <translation>Dateiformat:</translation>
    </message>
</context>
<context>
    <name>QgsGeorefDescriptionDialogBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Description georeferencer</source>
        <translation>Beschreibung Georeferenzierer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:12pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-size:11pt; font-weight:600;&quot;&gt;Description&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:9pt;&quot;&gt;This plugin can generate world files for rasters. You select points on the raster and give their world coordinates, and the plugin will compute the world file parameters. The more coordinates you can provide the better the result will be.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;(new line)p, li { white-space: pre-wrap; }(new line)&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:12pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-size:11pt; font-weight:600;&quot;&gt;Beschreibung&lt;/span&gt;&lt;/p&gt;&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:9pt;&quot;&gt;Dieses Plugin generiert World-Dateien für Raster. Es können Punkte auf dem Raster selektiert und deren Kartenkoordinaten angegeben werden. Je mehr Punkt angegeben werden desto besser wird das Resultat sein.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
</context>
<context>
    <name>QgsGeorefPlugin</name>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Georeferencer</source>
        <translation>&amp;Georeferenzierer</translation>
    </message>
</context>
<context>
    <name>QgsGeorefPluginGui</name>
    <message>
        <location filename="" line="0"/>
        <source>Choose a raster file</source>
        <translation>Wähle eine Rasterkarte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Raster files (*.*)</source>
        <translation>Rasterkarten (*.*)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Error</source>
        <translation type="unfinished">Fehler</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The selected file is not a valid raster file.</source>
        <translation>Die ausgewählte Karte ist keine gültige Rasterdatei.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>World file exists</source>
        <translation>World file existiert</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;p&gt;The selected file already seems to have a </source>
        <translation>&lt;p&gt;Die ausgewählte Datei hat scheinbar bereits einen </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>world file! Do you want to replace it with the </source>
        <translation>World file! Möchten Sie ihn ersetzen mit dem </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>new world file?&lt;/p&gt;</source>
        <translation>neuen World file?&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>QgsGeorefPluginGuiBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Georeferencer</source>
        <translation>Georeferenzierer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Close</source>
        <translation>Schliessen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>...</source>
        <translation type="unfinished">...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Raster file:</source>
        <translation>Rasterdatei:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Arrange plugin windows</source>
        <translation>Fenster anordnen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Description...</source>
        <translation>Beschreibung...</translation>
    </message>
</context>
<context>
    <name>QgsGeorefWarpOptionsDialog</name>
    <message>
        <location filename="" line="0"/>
        <source>unstable</source>
        <translation>instabil</translation>
    </message>
</context>
<context>
    <name>QgsGeorefWarpOptionsDialogBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Warp options</source>
        <translation>Verzerrungsoptionen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Resampling method:</source>
        <translation>Stichprobenmethode:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Nearest neighbour</source>
        <translation>Nächster Nachbar</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Linear</source>
        <translation>Linear</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cubic</source>
        <translation>Kubisch</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Use 0 for transparency when needed</source>
        <translation>0 für Transparanz verwenden falls benötigt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Compression:</source>
        <translation>Komprimierung:</translation>
    </message>
</context>
<context>
    <name>QgsGraduatedSymbolDialog</name>
    <message>
        <location filename="" line="0"/>
        <source>Equal Interval</source>
        <translation>Gleiches Intervall</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Quantiles</source>
        <translation>Quantile</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Empty</source>
        <translation>Leer</translation>
    </message>
</context>
<context>
    <name>QgsGraduatedSymbolDialogBase</name>
    <message>
        <location filename="" line="0"/>
        <source>graduated Symbol</source>
        <translation>abgestuftes Symbol</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Classification Field:</source>
        <translation>Klassifizierungsfeld:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Mode:</source>
        <translation>Modus:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Number of Classes:</source>
        <translation>Anzahl Klassen:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Delete class</source>
        <translation type="unfinished">Klasse löschen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Classify</source>
        <translation type="unfinished">Klassifizieren</translation>
    </message>
</context>
<context>
    <name>QgsGrassAttributes</name>
    <message>
        <location filename="" line="0"/>
        <source>Warning</source>
        <translation>Warnung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Column</source>
        <translation type="unfinished">Spalte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Value</source>
        <translation type="unfinished">Wert</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Type</source>
        <translation type="unfinished">Typ</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>ERROR</source>
        <translation type="unfinished">FEHLER</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>OK</source>
        <translation type="unfinished">OK</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Layer</source>
        <translation type="unfinished">Layer</translation>
    </message>
</context>
<context>
    <name>QgsGrassAttributesBase</name>
    <message>
        <location filename="" line="0"/>
        <source>GRASS Attributes</source>
        <translation>GRASS Attribute</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Tab 1</source>
        <translation>Tab 1</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>result</source>
        <translation>Resultat</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Update</source>
        <translation>Aktualisieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Update database record</source>
        <translation>Aktualisiere Datenbankeintrag</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>New</source>
        <translation>Neu</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add new category using settings in GRASS Edit toolbox</source>
        <translation>Eine neue Kategorie mit den Einstellungen der &apos;GRASS Digitalisieren&apos;-Werkzeugkiste hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Delete</source>
        <translation>Löschen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Delete selected category</source>
        <translation>Lösche selektierte Kategorie</translation>
    </message>
</context>
<context>
    <name>QgsGrassBrowser</name>
    <message>
        <location filename="" line="0"/>
        <source>Tools</source>
        <translation>Werkzeuge</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add selected map to canvas</source>
        <translation>Ausgewählten Layer dem Kartenfenster hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Copy selected map</source>
        <translation>Gewählte Karte kopieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Rename selected map</source>
        <translation>Gewählte Karte umbenennen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Delete selected map</source>
        <translation>Gewählte Karte löschen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Set current region to selected map</source>
        <translation>Setze die Region auf die selektierte Karte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Refresh</source>
        <translation>Neu zeichnen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Warning</source>
        <translation>Warnung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot copy map </source>
        <translation>Kann die Karte nicht kopieren.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;br&gt;command: </source>
        <translation>&lt;br&gt; Kommando: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot rename map </source>
        <translation>Kann die Karte nicht umbenennen </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Delete map &lt;b&gt;</source>
        <translation>Lösche Karte &lt;b&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot delete map </source>
        <translation>Kann die Karte nicht löschen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot write new region</source>
        <translation>Kann die neue Region nicht schreiben.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>New name</source>
        <translation type="unfinished">Neuer Name</translation>
    </message>
</context>
<context>
    <name>QgsGrassEdit</name>
    <message>
        <location filename="" line="0"/>
        <source>New point</source>
        <translation>Neuer Punkt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>New centroid</source>
        <translation>Neues Zentroid</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Delete vertex</source>
        <translation>Lösche Vertex</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Left: </source>
        <translation>Links:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Middle: </source>
        <translation>Mitte:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Edit tools</source>
        <translation>Digitalisierwerkzeuge</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>New line</source>
        <translation>Neue Zeile</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>New boundary</source>
        <translation>Neue Grenze</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Move vertex</source>
        <translation>Verschiebe Vertex</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add vertex</source>
        <translation>Vertex hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Move element</source>
        <translation>Verschiebe Element</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Split line</source>
        <translation>Unterteile Linie</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Delete element</source>
        <translation>Element löschen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Edit attributes</source>
        <translation>Editiere Attribute</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Close</source>
        <translation>Schliessen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Warning</source>
        <translation>Warnung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>You are not owner of the mapset, cannot open the vector for editing.</source>
        <translation>Sie sind nicht Besitzer des Mapsets. Folglich kann der Datensatz nicht zum Editieren geöffnet werden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot open vector for update.</source>
        <translation>Kann die Vekordatei nicht zum Aktualisiern öffnen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Info</source>
        <translation>Information</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The table was created</source>
        <translation>Die Tabelle wurde erstellt.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Tool not yet implemented.</source>
        <translation>Werkzeug ist noch nicht implementiert.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot check orphan record: </source>
        <translation>Kann den verwaisten Eintrag nicht überprüfen: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Orphan record was left in attribute table. &lt;br&gt;Delete the record?</source>
        <translation>Verwaister Eintrag in der Attributtabelle gefunden. &lt;br&gt; Diesen Eintrag löschen?</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot delete orphan record: </source>
        <translation>Kann den verwaisten Eintrag nicht löschen:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot describe table for field </source>
        <translation>Kann Tabelle oder Feld nicht beschreiben</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Background</source>
        <translation type="unfinished">Hintergrund</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Highlight</source>
        <translation type="unfinished">Hervorheben</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Dynamic</source>
        <translation type="unfinished">Dynamisch</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Point</source>
        <translation type="unfinished">Punkt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Line</source>
        <translation type="unfinished">Linie</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Boundary (no area)</source>
        <translation>Grenzlinie (keine Fläche)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Boundary (1 area)</source>
        <translation>Grenzlinie (eine Fläche)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Boundary (2 areas)</source>
        <translation>Grenzlinie (zwei Flächen)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Centroid (in area)</source>
        <translation>Zentroid (innerhalb der Fläche)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Centroid (outside area)</source>
        <translation>Zentroid (außerhalb der Fläche)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Centroid (duplicate in area)</source>
        <translation>Zentroid (Duplikat in der Fläche)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Node (1 line)</source>
        <translation>Knotenpunkt (1 Linie)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Node (2 lines)</source>
        <translation>Knotenpunkt (2 Linien)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Column</source>
        <translation type="unfinished">Spalte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Type</source>
        <translation type="unfinished">Typ</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Length</source>
        <translation type="unfinished">Länge</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Next not used</source>
        <translation>Nächst folgender Kategoriewert</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Manual entry</source>
        <translation type="unfinished">Manueller Eintrag</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No category</source>
        <translation type="unfinished">Keine Kategorie</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Right: </source>
        <translation type="unfinished">Rechts: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Disp</source>
        <comment>




Column title</comment>
        <translation type="unfinished">Anz.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Color</source>
        <comment>




Column title</comment>
        <translation type="unfinished">Farbe</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Type</source>
        <comment>




Column title</comment>
        <translation type="unfinished">Typ</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Index</source>
        <comment>




Column title</comment>
        <translation type="unfinished">Index</translation>
    </message>
</context>
<context>
    <name>QgsGrassEditBase</name>
    <message>
        <location filename="" line="0"/>
        <source>GRASS Edit</source>
        <translation>GRASS Digitalisieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Category</source>
        <translation>Kategorie</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Mode</source>
        <translation>Modus</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Settings</source>
        <translation>Einstellungen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Snapping in screen pixels</source>
        <translation>Snappingtoleranz in Bildschirmpixel</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Symbology</source>
        <translation>Bezeichnungen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Column 1</source>
        <translation>Kolonne 1</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Table</source>
        <translation>Tabelle</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add Column</source>
        <translation>Attribut hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Create / Alter Table</source>
        <translation>Erzeuge/ Verändere Tabelle</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Line width</source>
        <translation>Linienbreite</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Marker size</source>
        <translation>Markergröße</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Layer</source>
        <translation type="unfinished">Layer</translation>
    </message>
</context>
<context>
    <name>QgsGrassElementDialog</name>
    <message>
        <location filename="" line="0"/>
        <source>Cancel</source>
        <translation type="unfinished">Abbrechen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ok</source>
        <translation type="unfinished">OK</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;font color=&apos;red&apos;&gt;Enter a name!&lt;/font&gt;</source>
        <translation type="unfinished">&lt;font color=&apos;red&apos;&gt;Name eingeben!&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;font color=&apos;red&apos;&gt;This is name of the source!&lt;/font&gt;</source>
        <translation>&lt;font color=&apos;red&apos;&gt;Dies ist der Name der Quelle!&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;font color=&apos;red&apos;&gt;Exists!&lt;/font&gt;</source>
        <translation>&lt;font color=&apos;red&apos;&gt;Existiert!&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Overwrite</source>
        <translation type="unfinished">Überschreiben</translation>
    </message>
</context>
<context>
    <name>QgsGrassMapcalc</name>
    <message>
        <location filename="" line="0"/>
        <source>Mapcalc tools</source>
        <translation>Mapcalc-Werkzeug</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add map</source>
        <translation>Karte hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add constant value</source>
        <translation>Konstanten Wert hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add operator or function</source>
        <translation>Operator oder Funktion hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add connection</source>
        <translation>Verbindung hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Select item</source>
        <translation>Selektiere Objekt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Delete selected item</source>
        <translation>Lösche selektiertes Objekt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Open</source>
        <translation>Öffnen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Save</source>
        <translation>Speichern</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Save as</source>
        <translation>Speichern unter</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Addition</source>
        <translation>Addition</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Subtraction</source>
        <translation>Subtraktion</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Multiplication</source>
        <translation>Multiplikation</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Division</source>
        <translation>Teilung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Modulus</source>
        <translation>Modus</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Exponentiation</source>
        <translation>Exponent</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Equal</source>
        <translation>gleich</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Not equal</source>
        <translation>ungleich</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Greater than</source>
        <translation>größer als</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Greater than or equal</source>
        <translation>größer gleich</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Less than</source>
        <translation>kleiner als</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Less than or equal</source>
        <translation>kleiner gleich</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>And</source>
        <translation>Und</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Or</source>
        <translation>Oder</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Absolute value of x</source>
        <translation>Absoluter Wert für x</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Inverse tangent of x (result is in degrees)</source>
        <translation>Inverser tangenz von X (Resultat in Grad),</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Inverse tangent of y/x (result is in degrees)</source>
        <translation>Inverser Tangenz von y/x (Resultat in Grad).</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Current column of moving window (starts with 1)</source>
        <translation>Aktuelle Spalte des Moving Windows (startet bei 1)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cosine of x (x is in degrees)</source>
        <translation>Kosinus von X (X in Grad).</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Convert x to double-precision floating point</source>
        <translation>Konvertiert x in doppelte Fließkommazahl</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Current east-west resolution</source>
        <translation>Aktuelle Ost-West-Auflösung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Exponential function of x</source>
        <translation>Exponentielle Funktion von x</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>x to the power y</source>
        <translation>x hoch y</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Convert x to single-precision floating point</source>
        <translation>Konvertiert x in einfache Fließkommazahl</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Decision: 1 if x not zero, 0 otherwise</source>
        <translation>Entscheidung: 1 wenn x nicht NULL, andererseits 0</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Decision: a if x not zero, 0 otherwise</source>
        <translation>Entscheidung: a wenn x nicht NULL, andererseits 0</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Decision: a if x not zero, b otherwise</source>
        <translation>Entscheidung: a wenn x nicht NULL, andererseits b</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Decision: a if x &gt; 0, b if x is zero, c if x &lt; 0</source>
        <translation>Entscheidung: a wenn x &gt; 0, c wenn x &lt; 0</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Convert x to integer [ truncates ]</source>
        <translation>Konvertiert x zu integer [ schneidet ab ]</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Check if x = NULL</source>
        <translation>Überprüfe, wenn x = NULL</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Natural log of x</source>
        <translation>Natürlicher Log von x </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Log of x base b</source>
        <translation>Log von x zur Basis b</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Largest value</source>
        <translation>Maximum</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Median value</source>
        <translation>Median</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Smallest value</source>
        <translation>Minimum</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Mode value</source>
        <translation>Modus</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>1 if x is zero, 0 otherwise</source>
        <translation>1 wenn x zero ist, ansonsten 0</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Current north-south resolution</source>
        <translation>Aktuelle Nord-Süd-Auflösung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>NULL value</source>
        <translation>NULL Wert</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Random value between a and b</source>
        <translation>Zufallswert zwischen a und b</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Round x to nearest integer</source>
        <translation>Runde x zum nächsten Integerwert</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Current row of moving window (Starts with 1)</source>
        <translation>Aktuelle Zeile des Moving windows (startet bei 1)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Sine of x (x is in degrees)</source>
        <comment>sin(x)</comment>
        <translation>Sinus von X (x in Grad).</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Square root of x</source>
        <comment>sqrt(x)</comment>
        <translation>Wurzel von x</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Tangent of x (x is in degrees)</source>
        <comment>tan(x)</comment>
        <translation>Tangenz von X (X in Grad).</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Current x-coordinate of moving window</source>
        <translation>Aktuelle X-Koordinate des Moving-Windows.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Current y-coordinate of moving window</source>
        <translation>Aktuelle Y-Koordinate des Moving-Windows.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Warning</source>
        <translation>Warnung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot get current region</source>
        <translation>Kann die aktuelle Region nicht ermitteln.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot check region of map </source>
        <translation>Kann die Region der Karte nicht überprüfen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot get region of map </source>
        <translation>Kann die Region der Karte nicht ermitteln</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No GRASS raster maps currently in QGIS</source>
        <translation>Derzeit sind keine GRASS-Rasterkarten in QGIS geladen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot create &apos;mapcalc&apos; directory in current mapset.</source>
        <translation>Kann keinen &apos;Mapcalc&apos;-Odner im aktuellen Mapset erstellen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>New mapcalc</source>
        <translation>Neue Mapcalc</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Enter new mapcalc name:</source>
        <translation>Einen neuen Mapcalc-Namen eingeben:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Enter vector name</source>
        <translation>Name für die Vektordatei eingeben.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The file already exists. Overwrite? </source>
        <translation>Die Datei existiert bereits. Überschreiben?</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Save mapcalc</source>
        <translation>Speichere mapcalc</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>File name empty</source>
        <translation>Dateiname leer.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot open mapcalc file</source>
        <translation>Kann die Mapcalc-Datei nicht öffnen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The mapcalc schema (</source>
        <translation>Das Mapcalc-Schema (</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>) not found.</source>
        <translation>) nicht gefunden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot open mapcalc schema (</source>
        <translation>Kann das Mapcalc-Schema nicht öffnen (</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot read mapcalc schema (</source>
        <translation>Kann das Mapcalc-Schema nicht lesen (</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>
at line </source>
        <translation>
bei Zeile </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> column </source>
        <translation> Spalte </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Output</source>
        <translation type="unfinished">Ergebnis</translation>
    </message>
</context>
<context>
    <name>QgsGrassMapcalcBase</name>
    <message>
        <location filename="" line="0"/>
        <source>MainWindow</source>
        <translation>MainWindow</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Output</source>
        <translation>Ergebnis</translation>
    </message>
</context>
<context>
    <name>QgsGrassModule</name>
    <message>
        <location filename="" line="0"/>
        <source>Run</source>
        <translation>Los</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Stop</source>
        <translation>Stop</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Module</source>
        <translation type="unfinished">Modul</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Warning</source>
        <translation type="unfinished">Warnung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The module file (</source>
        <translation type="unfinished">Die Moduldatei </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>) not found.</source>
        <translation type="unfinished">) nicht gefunden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot open module file (</source>
        <translation type="unfinished">Moduldatei nicht geöffnet (</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>)</source>
        <translation type="unfinished">)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot read module file (</source>
        <translation type="unfinished">Konnte Moduldatei nicht lesen (</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>):
</source>
        <translation type="unfinished">):
</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>
at line </source>
        <translation type="unfinished">
bei Zeile </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Module </source>
        <translation type="unfinished">Modul </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> not found</source>
        <translation type="unfinished"> nicht gefunden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot find man page </source>
        <translation type="unfinished">Handbuchseite nicht gefunden: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Not available, description not found (</source>
        <translation type="unfinished">Nicht verfügbar, Beschreibung nicht gefunden (</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Not available, cannot open description (</source>
        <translation type="unfinished">Nicht verfügbar, konnte Beschreibung nicht öffnen (</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> column </source>
        <translation type="unfinished"> Spalte </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Not available, incorrect description (</source>
        <translation type="unfinished">Nicht verfügbar, falsche Beschreibung (</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot get input region</source>
        <translation>Konnte Eingabe-&apos;region&apos; nicht finden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Use Input Region</source>
        <translation>Eingabe-&apos;region&apos; benutzen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot find module </source>
        <translation type="unfinished">Konnte Modul nicht finden: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot start module: </source>
        <translation type="unfinished">Konnte Modul nicht starten: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;B&gt;Successfully finished&lt;/B&gt;</source>
        <translation type="unfinished">&lt;B&gt;Erfolgreich beendet&lt;/B&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;B&gt;Finished with error&lt;/B&gt;</source>
        <translation type="unfinished">&lt;B&gt;Mit Fehler beendet&lt;/B&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;B&gt;Module crashed or killed&lt;/B&gt;</source>
        <translation type="unfinished">&lt;B&gt;Modul abgestürzt oder abgebrochen&lt;/B&gt;</translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleBase</name>
    <message>
        <location filename="" line="0"/>
        <source>GRASS Module</source>
        <translation>GRASS Modul</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Options</source>
        <translation>Optionen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Output</source>
        <translation>Ergebnis</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Manual</source>
        <translation>Handbuch</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Run</source>
        <translation>Starten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Close</source>
        <translation>Schliessen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>View output</source>
        <translation>Ergebnis visualisieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>TextLabel</source>
        <translation type="unfinished">Textbeschriftung</translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleField</name>
    <message>
        <location filename="" line="0"/>
        <source>Attribute field</source>
        <translation type="unfinished">Attributfeld</translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleFile</name>
    <message>
        <location filename="" line="0"/>
        <source>File</source>
        <translation type="unfinished">Datei</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>:&amp;nbsp;missing value</source>
        <translation type="unfinished">:&amp;nbsp;fehlender Wert</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>:&amp;nbsp;directory does not exist</source>
        <translation type="unfinished">:&amp;nbsp;Verzeichnis existiert nicht</translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleGdalInput</name>
    <message>
        <location filename="" line="0"/>
        <source>Warning</source>
        <translation type="unfinished">Warnung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot find layeroption </source>
        <translation type="unfinished">Kann Layeroption nicht finden: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>PostGIS driver in OGR does not support schemas!&lt;br&gt;Only the table name will be used.&lt;br&gt;It can result in wrong input if more tables of the same name&lt;br&gt;are present in the database.</source>
        <translation type="unfinished">Der PostGIS-Treiber in OGR unterstützt keine Schemata!&lt;br&gt;Nur der Tabellenname wird benutzt.&lt;br&gt;Die kann zu falschen Eingaben führen, wenn mehrere Tabellen gleichen Namens&lt;br&gt;in der Datenbank vorkommen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>:&amp;nbsp;no input</source>
        <translation type="unfinished">:&amp;nbsp;keine Eingabe</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot find whereoption </source>
        <translation>Kann where Option nicht finden  </translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleInput</name>
    <message>
        <location filename="" line="0"/>
        <source>Warning</source>
        <translation type="unfinished">Warnung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot find typeoption </source>
        <translation type="unfinished">Typoption nicht gefunden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot find values for typeoption </source>
        <translation type="unfinished">Keine Werte für Typoption gefunden: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot find layeroption </source>
        <translation type="unfinished">Layeroption nicht gefunden: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GRASS element </source>
        <translation type="unfinished">GRASS-Element </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> not supported</source>
        <translation type="unfinished"> nicht unterstützt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Use region of this map</source>
        <translation>Karten-&apos;region&apos; benutzen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>:&amp;nbsp;no input</source>
        <translation type="unfinished">:&amp;nbsp;Keine Eingabe</translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleOption</name>
    <message>
        <location filename="" line="0"/>
        <source>:&amp;nbsp;missing value</source>
        <translation type="unfinished">:&amp;nbsp;fehlender Wert</translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleSelection</name>
    <message>
        <location filename="" line="0"/>
        <source>Attribute field</source>
        <translation type="unfinished">Attributfeld</translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleStandardOptions</name>
    <message>
        <location filename="" line="0"/>
        <source>Warning</source>
        <translation type="unfinished">Warnung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot find module </source>
        <translation type="unfinished">Kann Modul nicht finden: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot start module </source>
        <translation type="unfinished">Kann Modul nicht starten: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot read module description (</source>
        <translation type="unfinished">Kann Modulbeschreibung nicht lesen: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>):
</source>
        <translation type="unfinished">):
</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>
at line </source>
        <translation type="unfinished">
bei Zeile </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> column </source>
        <translation type="unfinished"> Spalte </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot find key </source>
        <translation type="unfinished">Kann Schlüssel nicht finden: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Item with id </source>
        <translation type="unfinished">Element mit ID </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> not found</source>
        <translation type="unfinished"> nicht gefunden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot get current region</source>
        <translation>Kann die aktuelle &apos;region&apos; nicht ermitteln.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot check region of map </source>
        <translation>Kann die &apos;region&apos; der Karte nicht überprüfen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot set region of map </source>
        <translation>Kann Karten-&apos;region&apos; nicht setzen: </translation>
    </message>
</context>
<context>
    <name>QgsGrassNewMapset</name>
    <message>
        <location filename="" line="0"/>
        <source>GRASS database</source>
        <translation type="unfinished">GRASS-Datenbank</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GRASS location</source>
        <translation>GRASS-Location</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Projection</source>
        <translation type="unfinished">Projektion</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Default GRASS Region</source>
        <translation>Voreingestellte GRASS-&apos;region&apos;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Mapset</source>
        <translation>Mapset</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Create New Mapset</source>
        <translation>Neues Mapset erzeugen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Tree</source>
        <translation type="unfinished">Baum</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Comment</source>
        <translation type="unfinished">Kommentar</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Database</source>
        <translation type="unfinished">Datenbank</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Location 2</source>
        <translation>2. Location</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>User&apos;s mapset</source>
        <translation>Benutzer Mapset</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>System mapset</source>
        <translation>System Mapset</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Location 1</source>
        <translation>1. Location</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Owner</source>
        <translation type="unfinished">Besitzer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Enter path to GRASS database</source>
        <translation type="unfinished">Pfad zur GRASS-Datenbank angeben</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The directory doesn&apos;t exist!</source>
        <translation type="unfinished">Das Verzeichnis existiert nicht!</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No writable locations, the database not writable!</source>
        <translation type="unfinished">Keine </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Enter location name!</source>
        <translation>Location-Name angeben</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The location exists!</source>
        <translation>Die Location existiert!</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Selected projection is not supported by GRASS!</source>
        <translation>Ausgewählte Projektion wird nicht von GRASS unterstützt!</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Warning</source>
        <translation type="unfinished">Warnung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot create projection.</source>
        <translation type="unfinished">Kann Projektion nicht erzeugen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot reproject previously set region, default region set.</source>
        <translation>Kann Region nicht reprojizieren. Voreingestellte Projektion gesetzt.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>North must be greater than south</source>
        <translation type="unfinished">Nord muß größer als Süd sein</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>East must be greater than west</source>
        <translation type="unfinished">Ost muß größer als West sein</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Regions file (</source>
        <translation>Region-Datei (</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>) not found.</source>
        <translation type="unfinished">) nicht gefunden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot open locations file (</source>
        <translation>Kann Location-Datei  nicht öffnen (</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>)</source>
        <translation>)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot read locations file (</source>
        <translation>Kann Location-Datei nicht lesen (</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>):
</source>
        <translation type="unfinished">):
</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>
at line </source>
        <translation type="unfinished">
bei Zeile </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> column </source>
        <translation type="unfinished"> Spalte </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot create QgsSpatialRefSys</source>
        <translation type="unfinished">Kann QgsSpatialRefSys nicht erzeugen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot reproject selected region.</source>
        <translation>Kann ausgewählte &apos;region&apos; nicht reprojizieren.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot reproject region</source>
        <translation>Kann &apos;region&apos; nicht reprojizieren.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Enter mapset name.</source>
        <translation>Mapset angeben</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The mapset already exists</source>
        <translation>Die Mapset existiert bereits</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Database: </source>
        <translation type="unfinished">Datenbank: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Location: </source>
        <translation>Location: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Mapset: </source>
        <translation>Mapset: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Create location</source>
        <translation>Location anlegen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot create new location: </source>
        <translation>Kann neue Location nicht anlegen: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Create mapset</source>
        <translation>Mapset anlegen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot create new mapset directory</source>
        <translation>Kann Mapset-Verzeichnis nicht anlegen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot open DEFAULT_WIND</source>
        <translation type="unfinished">Kann DEFAULT_WIND nicht öffnen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot open WIND</source>
        <translation type="unfinished">Kann WIND nicht öffnen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>New mapset</source>
        <translation>Neue Location/Mapset</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>New mapset successfully created, but cannot be opened: </source>
        <translation>Mapset erfolgreich angelegt, konnte aber nicht geöffnet werden: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>New mapset successfully created and set as current working mapset.</source>
        <translation>Mapset erfolgreich erzeugt und als aktuelle Arbeitsumgebung eingestellt.</translation>
    </message>
</context>
<context>
    <name>QgsGrassNewMapsetBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Column 1</source>
        <translation>Kolonne 1</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Example directory tree:</source>
        <translation>Beispielordnerstruktur:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;GRASS data are stored in tree directory structure.&lt;/p&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;The GRASS database is the top-level directory in this tree structure.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;GRASS-Daten werden in einer Baumstruktur abgespeichert. &lt;/p&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Die GRASS-Datenbank ist die oberste Ordnerebene in dieser Baumstruktur.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Database Error</source>
        <translation>Datenbank Fehler</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Database:</source>
        <translation>Datenbank:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Select existing directory or create a new one:</source>
        <translation>Selektiere existierende Ordner oder erzeugen einen neuen:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Location</source>
        <translation>Location</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Select location</source>
        <translation>Wähle Location</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Create new location</source>
        <translation>Erstelle neue Location</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Location Error</source>
        <translation>Location Fehler</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;The GRASS location is a collection of maps for a particular territory or project.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Die GRASS Location ist eine Ansammlung von Karten mit gleicher Projektion und für ein bestimmtes Gebiet.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Projection Error</source>
        <translation>Projektionsfehler</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Coordinate system</source>
        <translation>Koordinatensystem</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Projection</source>
        <translation>Projektion</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Not defined</source>
        <translation>Nicht definiert</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;The GRASS region defines a workspace for raster modules. The default region is valid for one location. It is possible to set a different region in each mapset. &lt;/p&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;It is possible to change the default location region later.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Die GRASS Region definiert eine BoundingBox für GRASS-Rastermodule. Die Standard-Region (default region) gilt für jeweils eine Location. Es ist möglich, unterschiedliche Regionen für jedes Mapset zu setzen.&lt;/p&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Die Standard Region für die Location kann später jederzeit verändert werden.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Set current QGIS extent</source>
        <translation>Setze aktuelle QGIS Ausdehnung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Set</source>
        <translation>Setzen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Region Error</source>
        <translation>Region-Fehler</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>S</source>
        <translation>S</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>W</source>
        <translation>W</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>E</source>
        <translation>E</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>N</source>
        <translation>N</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>New mapset:</source>
        <translation>Neues Mapset:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Mapset Error</source>
        <translation>Mapset Fehler</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;p align=&quot;center&quot;&gt;Existing masets&lt;/p&gt;</source>
        <translation>&lt;p align=&quot;center&quot;&gt; Vorhandene Mapsets&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;The GRASS mapset is a collection of maps used by one user. &lt;/p&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;A user can read maps from all mapsets in the location but &lt;/p&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;he can open for writing only his mapset (owned by user).&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Das GRASS Mapset ist eine Ansammlung von Karten, die von einem Benutzer verwendet werden.&lt;/p&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Ein Benutzer kann alle Karten in allen Mapset innerhalb einer Location lesen, aber &lt;/p&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt; er kann nur in seinem zum Schreiben geöffneten Mapset neue Karten ablegen. (Es muss ihm gehören).&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Location:</source>
        <translation>Location:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Mapset:</source>
        <translation>Mapset:</translation>
    </message>
</context>
<context>
    <name>QgsGrassPlugin</name>
    <message>
        <location filename="" line="0"/>
        <source>GRASS</source>
        <translation>GRASS</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;GRASS</source>
        <translation>&amp;GRASS</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Open mapset</source>
        <translation>Mapset öffnen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>New mapset</source>
        <translation>Neues Mapset</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Close mapset</source>
        <translation>Schliesse Mapset</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add GRASS vector layer</source>
        <translation>GRASS-Vektorlayer hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add GRASS raster layer</source>
        <translation>GRASS-Rasterlayer hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Open GRASS tools</source>
        <translation>GRASS-Werkzeugkiste öffnen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Display Current Grass Region</source>
        <translation>Aktuelle GRASS-Region darstellen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Edit Current Grass Region</source>
        <translation>Aktuelle GRASS-Region bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Edit Grass Vector layer</source>
        <translation>GRASS-Vektorlayer bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Adds a GRASS vector layer to the map canvas</source>
        <translation>Fügt dem Kartenfenster einen GRASS-Vektorlayer hinzu</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Adds a GRASS raster layer to the map canvas</source>
        <translation>Fügt dem Kartenfenster einen GRASS-Rasterlayer hinzu</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Displays the current GRASS region as a rectangle on the map canvas</source>
        <translation>Zeigt die aktuelle GRASS-Region als Rechteck auf dem Kartebild an</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Edit the current GRASS region</source>
        <translation>Aktuelle GRASS-Region bearbeiten.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Edit the currently selected GRASS vector layer.</source>
        <translation>Gewählten GRASS-Vektorlayer bearbeiten.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GrassVector</source>
        <translation>GrassVektor</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>0.1</source>
        <translation>0.1</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GRASS layer</source>
        <translation>GRASS-Layer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Create new Grass Vector</source>
        <translation>Neuen GRASS-Vektorlayer anlegen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Warning</source>
        <translation type="unfinished">Warnung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GRASS Edit is already running.</source>
        <translation type="unfinished">GRASS-Digitalisierung läuft bereits.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>New vector name</source>
        <translation type="unfinished">Neuer Vektorname</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot create new vector: </source>
        <translation type="unfinished">Kann Vektor nicht anlegen: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>New vector created but cannot be opened by data provider.</source>
        <translation type="unfinished">Neuer Vektor konnte nicht durch Datenlieferant geöffnet werden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot start editing.</source>
        <translation type="unfinished">Konnte Digialisierung nicht beginnen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GISDBASE, LOCATION_NAME or MAPSET is not set, cannot display current region.</source>
        <translation type="unfinished">GISDBASE, LOCATION_NAME oder MAPSET ist nicht gesetzt, aktuelle Region kann nicht angezeigt werden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot read current region: </source>
        <translation type="unfinished">Kann aktuelle Region nicht lesen: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot open the mapset. </source>
        <translation>Kann Mapset nicht öffnen: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot close mapset. </source>
        <translation>Kann Mapset nicht schließen. </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot close current mapset. </source>
        <translation>Kann aktuellen Mapset nicht schließen. </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot open GRASS mapset. </source>
        <translation>Kann GRASS-Mapset nicht öffnen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Could not add raster layer: </source>
        <translation>Konnte Rasterlayer nicht hinzufügen</translation>
    </message>
</context>
<context>
    <name>QgsGrassRegion</name>
    <message>
        <location filename="" line="0"/>
        <source>Warning</source>
        <translation type="unfinished">Warnung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GISDBASE, LOCATION_NAME or MAPSET is not set, cannot display current region.</source>
        <translation type="unfinished">GISDBASE, LOCATION_NAME oder MAPSET ist nicht gesetzt, kann aktuelle Region nicht anzeigen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot read current region: </source>
        <translation type="unfinished">Kann aktuelle Region nicht lesen: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot write region</source>
        <translation type="unfinished">Kann Region nicht schreiben</translation>
    </message>
</context>
<context>
    <name>QgsGrassRegionBase</name>
    <message>
        <location filename="" line="0"/>
        <source>GRASS Region Settings</source>
        <translation>GRASS-Regioneinstellungen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>N</source>
        <translation>N</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>W</source>
        <translation>W</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>E</source>
        <translation>E</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>S</source>
        <translation>SS</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>N-S Res</source>
        <translation>N-S Aufl.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Rows</source>
        <translation>Zeilen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cols</source>
        <translation>Spalten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>E-W Res</source>
        <translation>E-W Aufl.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Color</source>
        <translation>Farbe</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Width</source>
        <translation>Breite</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cancel</source>
        <translation>Abbrechen</translation>
    </message>
</context>
<context>
    <name>QgsGrassSelect</name>
    <message>
        <location filename="" line="0"/>
        <source>Select GRASS Vector Layer</source>
        <translation>Wählen Sie einen GRASS-Vektorlayer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Select GRASS Raster Layer</source>
        <translation>Wählen Sie einen GRASS-Rasterlayer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Select GRASS mapcalc schema</source>
        <translation>Wähen Sie ein GRASS Mapcalc-Schema</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Select GRASS Mapset</source>
        <translation>Wählen Sie ein GRASS Mapset</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Warning</source>
        <translation>Warnung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot open vector on level 2 (topology not available).</source>
        <translation>Kann den Vektordatensatz nicht in Level 2 öffnen (Topologie fehlt).</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Choose existing GISDBASE</source>
        <translation>Bitte wählen Sie eine existierende GISDBASE.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Wrong GISDBASE, no locations available.</source>
        <translation>Falsche GISDBASE, darin sind keine Locations vorhanden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Wrong GISDBASE</source>
        <translation>Falsche GISDBASE.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Select a map.</source>
        <translation>Wählen Sie eine Karte.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No map</source>
        <translation>Keine Karte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No layer</source>
        <translation>Kein Layer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No layers available in this map</source>
        <translation>Keine Layer in dieser Karte vorhanden.</translation>
    </message>
</context>
<context>
    <name>QgsGrassSelectBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Gisdbase</source>
        <translation>Gisdbase</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Location</source>
        <translation>Location</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Browse</source>
        <translation>Durchsuchen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Mapset</source>
        <translation>Kartenset</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Map name</source>
        <translation>Kartenname</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Layer</source>
        <translation>Layer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Select or type map name (wildcards &apos;*&apos; and &apos;?&apos; accepted for rasters)</source>
        <translation>Kartenname (Wildcards &apos;*&apos; und &apos;?&apos; werden für Raster akzeptiert) wählen oder eingeben</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add GRASS Layer</source>
        <translation>GRASS-Layer hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cancel</source>
        <translation>Abbrechen</translation>
    </message>
</context>
<context>
    <name>QgsGrassShellBase</name>
    <message>
        <location filename="" line="0"/>
        <source>GRASS Shell</source>
        <translation>GRASS Kommandozeile</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Close</source>
        <translation>Schliessen</translation>
    </message>
</context>
<context>
    <name>QgsGrassTools</name>
    <message>
        <location filename="" line="0"/>
        <source>Modules</source>
        <translation>Module</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Browser</source>
        <translation>Browser</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GRASS Tools</source>
        <translation>GRASS-Werkzeuge </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GRASS Tools: </source>
        <translation>GRASS-Werkzeuge: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Warning</source>
        <translation type="unfinished">Warnung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot find MSYS (</source>
        <translation type="unfinished">Kann MSYS nicht finden (</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GRASS Shell is not compiled.</source>
        <translation type="unfinished">GRASS-Shell ist nicht kompiliert.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The config file (</source>
        <translation type="unfinished">Die Konfigurationdatei (</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>) not found.</source>
        <translation type="unfinished">) nicht gefunden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot open config file (</source>
        <translation type="unfinished">Kann Konfiguration nicht öffnen (</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>)</source>
        <translation type="unfinished">)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cannot read config file (</source>
        <translation type="unfinished">Kann Konfiguration nicht lesen (</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>
at line </source>
        <translation type="unfinished">
bei Zeile </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> column </source>
        <translation type="unfinished"> Spalte </translation>
    </message>
</context>
<context>
    <name>QgsGridMakerPlugin</name>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Graticule Creator</source>
        <translation>Koordinatenlinien-Generator</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Creates a graticule (grid) and stores the result as a shapefile</source>
        <translation>Erzeugt ein Gradnetz (Grid) und speichert es in ein Shapefile.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Graticules</source>
        <translation>&amp;Geographisches Netz</translation>
    </message>
</context>
<context>
    <name>QgsGridMakerPluginGui</name>
    <message>
        <location filename="" line="0"/>
        <source>QGIS - Grid Maker</source>
        <translation>QGIS - Gitternetzbuilder</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Please enter the file name before pressing OK!</source>
        <translation>Bitte geben Sie einen Dateinamen ein, bevor Sie auf OK drücken!</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Longitude Interval is invalid - please correct and try again.</source>
        <translation>Das Longitude Interval ist ungültig - korrigieren Sie es bitte und versuchen Sie es erneut.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Latitude Interval is invalid - please correct and try again.</source>
        <translation>Das Latitude Interval ist ungültig - korrigieren Sie es bitte und versuchen Sie es erneut.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Longitude Origin is invalid - please correct and try again..</source>
        <translation>Der Longitude Ursprung ist ungültig - korrigieren Sie es bitte und versuchen Sie es erneut.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Latitude Origin is invalid - please correct and try again.</source>
        <translation>Der Latitude Ursprung ist ungültig - korrigieren Sie es bitte und versuchen Sie es erneut.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>End Point Longitude is invalid - please correct and try again.</source>
        <translation>Der Longitude Endpunkt ist ungültig - korrigieren Sie es bitte und versuchen Sie es erneut.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>End Point Latitude is invalid - please correct and try again.</source>
        <translation>Der Latitude Endpunkt ist ungültig - korrigieren Sie es bitte und versuchen Sie es erneut.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Choose a filename to save under</source>
        <translation type="unfinished">Bitte wählen Sie einen Dateinamen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>ESRI Shapefile (*.shp)</source>
        <translation>ESRI Shapedatei (*.shp)</translation>
    </message>
</context>
<context>
    <name>QgsGridMakerPluginGuiBase</name>
    <message>
        <location filename="" line="0"/>
        <source>QGIS Plugin Template</source>
        <translation>QGIS Plugin Vorlage</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Graticule Builder</source>
        <translation>Gitternetzbuilder</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>#000.00000; </source>
        <translation>#000.00000; </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Latitude:</source>
        <translation>Breite:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Longitude:</source>
        <translation>Länge:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Latitude Interval:</source>
        <translation>Breitengradinterval:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Longitude Interval:</source>
        <translation>Längengradinterval:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:Arial; font-size:11pt;&quot;&gt;&lt;span style=&quot; font-size:10pt;&quot;&gt;This plugin will help you to build a graticule shapefile that you can use as an overlay within your qgis map viewer.&lt;/span&gt;&lt;/p&gt;&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:Arial; font-size:10pt;&quot;&gt;Please enter all units in decimal degrees&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:Arial; font-size:11pt;&quot;&gt;&lt;span style=&quot; font-size:10pt;&quot;&gt;Dieses Plugin hilft Ihnen beim Erstellen eines Kartengitters, welches als Shapefile gespeichert und dann als Vektorlayer über die Karte gelegt werden kann.&lt;/span&gt;&lt;/p&gt;&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:Arial; font-size:10pt;&quot;&gt;Bitte geben Sie alle Einheiten in dezimalen Gradangaben ein.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Type</source>
        <translation>Typ</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Point</source>
        <translation>Punkt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Line</source>
        <translation>Linie</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Polygon</source>
        <translation>Polygon</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Origin (lower left)</source>
        <translation>Ursprung (links unten)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>End point (upper right)</source>
        <translation>Endpunkt (rechts oben)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Graticle size (units in degrees)</source>
        <translation>Größe der Kästchen (Einheiten in Grad)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Output (shape) file</source>
        <translation>Ergebnisdatei (Shape)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Save As...</source>
        <translation type="unfinished">Speichern unter...</translation>
    </message>
</context>
<context>
    <name>QgsHelpViewer</name>
    <message>
        <location filename="" line="0"/>
        <source>Quantum GIS Help - </source>
        <translation>Quantum GIS Hilfe -</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Failed to get the help text from the database</source>
        <translation>Der Hilfetext konnte nicht aus der Datenbank geholt werden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Error</source>
        <translation>Fehler</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The QGIS help database is not installed</source>
        <translation>Die QGIS Hilfedatenbank ist nicht installiert</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>This help file does not exist for your language</source>
        <translation>Diese Hilfedatei existiert noch nicht für Ihre Sprache.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>If you would like to create it, contact the QGIS development team</source>
        <translation>Wenn Sie es erstellen wollen, kontaktieren Sie bitte das QGIS Entwicklungsteam.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Quantum GIS Help</source>
        <translation>Quantum GIS Hilfe</translation>
    </message>
</context>
<context>
    <name>QgsHelpViewerBase</name>
    <message>
        <location filename="" line="0"/>
        <source>QGIS Help</source>
        <translation>QGIS Hilfe</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Home</source>
        <translation>&amp;Home</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Alt+H</source>
        <translation>Alt+H</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Forward</source>
        <translation>&amp;Vorwärts</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Alt+F</source>
        <translation>Alt+F</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Back</source>
        <translation>&amp;Rückwärts</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Alt+B</source>
        <translation>Alt+B</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Close</source>
        <translation>&amp;Schließen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
</context>
<context>
    <name>QgsHttpTransaction</name>
    <message>
        <location filename="" line="0"/>
        <source>WMS Server responded unexpectedly with HTTP Status Code %1 (%2)</source>
        <translation>WMS Server hat unerwarteterweise folgenden HTTP Status Code herausgegeben: %1 (%2)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>HTTP response completed, however there was an error: %1</source>
        <translation>HTTP Antwort beendet, es habe jedoch Fehler: %1</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>HTTP transaction completed, however there was an error: %1</source>
        <translation>HTTP Übertragung beendet, aber es trat ein Fehler auf: %1</translation>
    </message>
</context>
<context>
    <name>QgsIdentifyResults</name>
    <message>
        <location filename="" line="0"/>
        <source>Identify Results - </source>
        <translation>Anfrageergebnisse - </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Run action</source>
        <translation>Aktion starten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>(Derived)</source>
        <translation>(abgeleitet)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Feature</source>
        <translation>Objekt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Value</source>
        <translation>Wert</translation>
    </message>
</context>
<context>
    <name>QgsIdentifyResultsBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Identify Results</source>
        <translation>Identifikationsergebnis</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Help</source>
        <translation>Hilfe</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Close</source>
        <translation>Schließen</translation>
    </message>
</context>
<context>
    <name>QgsLUDialogBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Enter class bounds</source>
        <translation>Gib die Klassengrenzen ein</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Lower value</source>
        <translation>Untere Grenze</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>-</source>
        <translation>-</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cancel</source>
        <translation>Abbrechen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Upper value</source>
        <translation>Obere Grenze</translation>
    </message>
</context>
<context>
    <name>QgsLabelDialogBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Form1</source>
        <translation>Formular1</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Field containing label:</source>
        <translation>Attributspalte, welches das Label enthält:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Default label:</source>
        <translation>Standard Beschriftung:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Preview:</source>
        <translation>Vorschau:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>QGIS Rocks!</source>
        <translation>QGIS bringt&apos;s!</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Font Style</source>
        <translation>Schriftstil</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Font</source>
        <translation>Schrift</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Points</source>
        <translation>Punkte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Map units</source>
        <translation>Karteneinheiten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>%</source>
        <translation>%</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Transparency:</source>
        <translation>Transparenz:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Colour</source>
        <translation>Farbe</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Position</source>
        <translation>Position</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>X Offset (pts):</source>
        <translation>X-Verschiebung (pts):</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Y Offset (pts):</source>
        <translation>Y-Verschiebung (pts):</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Buffer Labels?</source>
        <translation>Pufferbeschriftungen?</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Size:</source>
        <translation>Grösse:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Size is in map units</source>
        <translation>Grösse in Karteneinheiten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Size is in points</source>
        <translation>Grösse in Punkten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Above</source>
        <translation>Oben</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Over</source>
        <translation>Über</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Left</source>
        <translation>Links</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Below</source>
        <translation>Unten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Right</source>
        <translation>Rechts</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Above Right</source>
        <translation>Oben rechts</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Below Right</source>
        <translation>Unten rechts</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Above Left</source>
        <translation>Oben links</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Below Left</source>
        <translation>Unten links</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Angle (deg):</source>
        <translation>Winkel (Grad):</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Data Defined Style</source>
        <translation>Datendefinierter Stil</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Font family:</source>
        <translation>&amp;Schriftfamilie:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Italic:</source>
        <translation>&amp;Kursiv:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Underline:</source>
        <translation>&amp;Unterstrichen:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Bold:</source>
        <translation>&amp;Fett:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Size:</source>
        <translation>&amp;Grösse:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>X Coordinate:</source>
        <translation>X-Koordinate:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Y Coordinate:</source>
        <translation>Y-Koordinate:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Placement:</source>
        <translation>Platzierung:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Font size units</source>
        <translation>Schriftgröße</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Font Alignment</source>
        <translation>Schriftausrichtung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Placement</source>
        <translation>Platzierung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Buffer</source>
        <translation>Puffer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Buffer size units</source>
        <translation>Puffergrößeneinheiten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Offset units</source>
        <translation>Offset Einheiten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Data Defined Alignment</source>
        <translation>Datendefinierte Verknüpfung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Data Defined Buffer</source>
        <translation>Puffer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Data Defined Position</source>
        <translation>Position aus Daten lesen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Source</source>
        <translation>Quelle</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Size Units:</source>
        <translation type="unfinished">Einheit der Größe:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&#xb0;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsLayerProjectionSelector</name>
    <message>
        <location filename="" line="0"/>
        <source>Define this layer&apos;s projection:</source>
        <translation>Definiere die Projektion des Layers:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>This layer appears to have no projection specification.</source>
        <translation>Dieser Layer scheint keine Projektionsangaben zu besitzen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>By default, this layer will now have its projection set to that of the project, but you may override this by selecting a different projection below.</source>
        <translation>Als standard wird die Projektion dieses Layers auf die des Projektes gesetzt, aber Sie können es durch auswählen einer anderen Projektion unten überschreiben.</translation>
    </message>
</context>
<context>
    <name>QgsLayerProjectionSelectorBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Layer Projection Selector</source>
        <translation>Projektionsselektion für Layer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
</context>
<context>
    <name>QgsLegend</name>
    <message>
        <location filename="" line="0"/>
        <source>group</source>
        <translation>Gruppe</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Remove</source>
        <translation>&amp;Entfernen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Make to toplevel item</source>
        <translation>Als Top-Level Objekt &amp;machen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Re&amp;name</source>
        <translation>Umbe&amp;nennen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Add group</source>
        <translation>Gruppe Hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Expand all</source>
        <translation>Alles Ausklapp&amp;en</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Collapse all</source>
        <translation>Alles zusammenfalten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Show file groups</source>
        <translation>Zeige Dateigruppen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No Layer Selected</source>
        <translation>Keinen Layer ausgewählt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>To open an attribute table, you must select a vector layer in the legend</source>
        <translation type="unfinished">Um eine Attributtabelle zu öffnen, müssen Sie einen Vektorlayer in der Legende auswählen</translation>
    </message>
</context>
<context>
    <name>QgsLegendLayer</name>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Zoom to layer extent</source>
        <translation>Auf die Layerausdehnung &amp;zoomen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Zoom to best scale (100%)</source>
        <translation type="unfinished">&amp;Auf besten Maßstab zoomen (100%)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Show in overview</source>
        <translation type="unfinished">&amp;In der Übersicht anzeigen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Remove</source>
        <translation type="unfinished">&amp;Entfernen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Open attribute table</source>
        <translation type="unfinished">&amp;Attributtabelle öffnen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Save as shapefile...</source>
        <translation type="unfinished">Als Shapefile abspeichern...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Save selection as shapefile...</source>
        <translation type="unfinished">Auswahl als Shapefile speichern...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Properties</source>
        <translation type="unfinished">&amp;Eigenschaften</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>More layers</source>
        <translation type="unfinished">Weitere Layer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>This item contains more layer files. Displaying more layers in table is not supported.</source>
        <translation type="unfinished">Dieser Eintrag enthält weitere Layerdateien. Die Anzeige von mehreren Layer in einer Tabelle wird nicht unterstützt.</translation>
    </message>
</context>
<context>
    <name>QgsLegendLayerFile</name>
    <message>
        <location filename="" line="0"/>
        <source>Attribute table - </source>
        <translation type="unfinished">Attributtabelle - </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Save layer as...</source>
        <translation>Layer speichern als...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Start editing failed</source>
        <translation type="unfinished">Beginnen der Editierung fehlgeschlagen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Provider cannot be opened for editing</source>
        <translation type="unfinished">Der Provider kann nicht zum Editieren geöffnet werden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Stop editing</source>
        <translation type="unfinished">Digitalisieren stoppen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Do you want to save the changes?</source>
        <translation type="unfinished">Sollen die Änderungen gespeichert werden?</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Error</source>
        <translation type="unfinished">Fehler</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Could not commit changes</source>
        <translation type="unfinished">Kann die Änderungen nicht abspeichern.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Problems during roll back</source>
        <translation type="unfinished">Problem beim Rückgängigmachen (rollback).</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Not a vector layer</source>
        <translation type="unfinished">Kein Vektorlayer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>To open an attribute table, you must select a vector layer in the legend</source>
        <translation type="unfinished">Um eine Attributetabelle zu Öffnen müssen Sie in der Legende einen Layer auswählen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Saving done</source>
        <translation type="unfinished">Speichern abgeschlossen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Export to Shapefile has been completed</source>
        <translation type="unfinished">Der Export in eine Shapedatei ist abgeschlossen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Driver not found</source>
        <translation type="unfinished">Treiber nicht gefunden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>ESRI Shapefile driver is not available</source>
        <translation type="unfinished">Der ESRI-Shapefile-Treiber ist nicht verfügbar</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Error creating shapefile</source>
        <translation type="unfinished">Fehler beim Erzeugen der Shapedatei</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The shapefile could not be created (</source>
        <translation type="unfinished">Das Shapefile konnte nicht erstellt werden (</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Layer creation failed</source>
        <translation type="unfinished">Layererzeugung schlug fehl</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Zoom to layer extent</source>
        <translation>Auf die Layerausdehnung &amp;zoomen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Show in overview</source>
        <translation type="unfinished">&amp;In Übersicht anzeigen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Remove</source>
        <translation type="unfinished">&amp;Entfernen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Open attribute table</source>
        <translation type="unfinished">&amp;Attributtabelle öffnen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Save as shapefile...</source>
        <translation type="unfinished">Als Shapedatei speichern...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Save selection as shapefile...</source>
        <translation type="unfinished">Auswahl als Shapedatei speichern...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Properties</source>
        <translation type="unfinished">&amp;Eigenschaften</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>bad_alloc exception</source>
        <translation>Speicher-Fehler</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Filling the attribute table has been stopped because there was no more virtual memory left</source>
        <translation>Das Auffüllen der Attributtabelle wurde beendet, da kein virtueller Speicher mehr zur Verfügung steht</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Layer attribute table contains unsupported datatype(s)</source>
        <translation>Die Attributtabelle des Layers enthält nicht unterstützte Datentypen.</translation>
    </message>
</context>
<context>
    <name>QgsLineStyleDialogBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Select a line style</source>
        <translation>Linienstil wählen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Styles</source>
        <translation>Stile</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ok</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cancel</source>
        <translation>Abbrechen</translation>
    </message>
</context>
<context>
    <name>QgsLineStyleWidgetBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Form2</source>
        <translation>Formular2</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Outline Style</source>
        <translation>Linienstil</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Width:</source>
        <translation>Breite:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Colour:</source>
        <translation>Farbe:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>LineStyleWidget</source>
        <translation>Linienstilfenster</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>col</source>
        <translation>col</translation>
    </message>
</context>
<context>
    <name>QgsMapCanvas</name>
    <message>
        <location filename="" line="0"/>
        <source>Could not draw</source>
        <translation>Konnte nicht zeichnen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>because</source>
        <translation>weil</translation>
    </message>
</context>
<context>
    <name>QgsMapLayer</name>
    <message>
        <location filename="" line="0"/>
        <source> Check file permissions and retry.</source>
        <translation> Prüfe Dateirechte und versuche erneut.</translation>
    </message>
</context>
<context>
    <name>QgsMapToolIdentify</name>
    <message>
        <location filename="" line="0"/>
        <source>No features found</source>
        <translation>Keine Objekte gefunden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;p&gt;No features were found within the search radius. Note that it is currently not possible to use the identify tool on unsaved features.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Es wurden keine Objekte innerhalb des Suchradius gefunden. Beachten Sie, dass das Identifizierwerkzeug nicht mit noch nicht abgespeicherten Objekten funktioniert.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>(clicked coordinate)</source>
        <translation>(Angeklickte Koordinate)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>WMS identify result for %1
%2</source>
        <translation>WMS-Abfrageergebnis für %1
%2</translation>
    </message>
</context>
<context>
    <name>QgsMapToolSplitFeatures</name>
    <message>
        <location filename="" line="0"/>
        <source>Split error</source>
        <translation>Trennfehler</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>An error occured during feature splitting</source>
        <translation>Ein Fehler ist beim Objekttrennen aufgetreten</translation>
    </message>
</context>
<context>
    <name>QgsMapToolVertexEdit</name>
    <message>
        <location filename="" line="0"/>
        <source>Snap tolerance</source>
        <translation>Snappingtoleranz</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Don&apos;t show this message again</source>
        <translation type="unfinished">Diese Nachricht nicht mehr anzeigen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Could not snap segment.</source>
        <translation>Konnte Segment nicht schnappen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Have you set the tolerance in Settings &gt; Project Properties &gt; General?</source>
        <translation>Haben Sie die Snappingtoleranz in Einstellungen &gt; Projekteinstellungen &gt; Allgemein eingestellt?</translation>
    </message>
</context>
<context>
    <name>QgsMapserverExport</name>
    <message>
        <location filename="" line="0"/>
        <source>Name for the map file</source>
        <translation type="unfinished">Name des Mapfile</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Choose the QGIS project file</source>
        <translation type="unfinished">QGIS-Projektdatei wählen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Overwrite File?</source>
        <translation type="unfinished">Datei überschreiben?</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> exists. 
Do you want to overwrite it?</source>
        <translation type="unfinished"> existiert.
Wollen Sie sie überschreiben?</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>MapServer map files (*.map);;All files (*.*)</source>
        <comment>Filter list for selecting files from a dialog box</comment>
        <translation>MapServer map files (*.map);;Alle Dateien (*.*)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>QGIS Project Files (*.qgs);;All files (*.*)</source>
        <comment>




Filter list for selecting files from a dialog box</comment>
        <translation type="unfinished">QGIS-Projektdatei (*.qgs);;Alle Dateien (*.*)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> exists. 
Do you want to overwrite it?</source>
        <comment>




a filename is prepended to this text, and appears in a dialog box</comment>
        <translation type="unfinished"> vorhanden.
Wollen Sie sie überschreiben?</translation>
    </message>
</context>
<context>
    <name>QgsMapserverExportBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Export to Mapserver</source>
        <translation>Exportieren in MapServer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Map file</source>
        <translation>Kartendatei</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Export LAYER information only</source>
        <translation>Nur die Layer-Informationen exportieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Map</source>
        <translation>Karte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Name</source>
        <translation>Name</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Height</source>
        <translation>Höhe</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Width</source>
        <translation>Breite</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>dd</source>
        <translation>dd</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>feet</source>
        <translation>Fuß</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>meters</source>
        <translation>Meter</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>miles</source>
        <translation>Meilen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>inches</source>
        <translation>Inch</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>kilometers</source>
        <translation>Kilometer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Units</source>
        <translation>Einheiten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Image type</source>
        <translation>Bildtyp</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>gif</source>
        <translation>gif</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>gtiff</source>
        <translation>gtiff</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>jpeg</source>
        <translation>jpeg</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>png</source>
        <translation>png</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>swf</source>
        <translation>swf</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>userdefined</source>
        <translation>benutzerdefiniert</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>wbmp</source>
        <translation>wbmp</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>MinScale</source>
        <translation>Minimalmassstab</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>MaxScale</source>
        <translation>Maximalmassstab</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Prefix attached to map, scalebar and legend GIF filenames created using this MapFile. It should be kept short.</source>
        <translation>Präfix, der Name der GIF-Dateien für Karten, Maßstabsleiste und Legende, die mit diesem Mapfile erzeugt wurden.  Es sollte kurz gehalten werden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Web Interface Definition</source>
        <translation>Web Interface Definition</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Header</source>
        <translation>Kopfzeile</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Footer</source>
        <translation>Fußzeile</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Template</source>
        <translation>Vorlage</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Help</source>
        <translation>&amp;Hilfe</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Abbrechen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Name for the map file to be created from the QGIS project file</source>
        <translation>Name des Mapfiles, das aus dem QGIS-Projekt erzeugt werden soll.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>If checked, only the layer information will be processed</source>
        <translation>Wenn ausgewählt, werden nur die Layerinformationen verarbeitet.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Path to the MapServer template file</source>
        <translation>Pfad zur MapServer-Vorlage</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Prefix attached to map, scalebar and legend GIF filenames created using this MapFile</source>
        <translation>Präfix, der Namen der GIF-Dateien für Karte, Massstabsleisten und Legenden, die mit diesem Mapfile erzeugt werden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Full path to the QGIS project file to export to MapServer map format</source>
        <translation>Kompletter Pfad zur QGIS-Projekt-Datei, die im MapServer Map-Format exportiert werden soll.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>QGIS project file</source>
        <translation>QGIS-Projektdatei</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Browse...</source>
        <translation type="unfinished">Durchsuchen...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Save As...</source>
        <translation type="unfinished">Speichern unter...</translation>
    </message>
</context>
<context>
    <name>QgsMarkerDialogBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Choose a marker symbol</source>
        <translation>Wähle ein Markersymbol</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Directory</source>
        <translation>Verzeichnis</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ok</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cancel</source>
        <translation>Abbrechen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>New Item</source>
        <translation>Neuer Eintrag</translation>
    </message>
</context>
<context>
    <name>QgsMeasureBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Measure</source>
        <translation>Messen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>New</source>
        <translation>Neu</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Help</source>
        <translation>Hilfe</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cl&amp;ose</source>
        <translation>Schli&amp;eßen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Total:</source>
        <translation>Total:</translation>
    </message>
</context>
<context>
    <name>QgsMeasureDialog</name>
    <message>
        <location filename="" line="0"/>
        <source>Segments (in meters)</source>
        <translation type="unfinished">Segmente (in Meter)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Segments (in feet)</source>
        <translation type="unfinished">Segmente (in Fuß)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Segments (in degrees)</source>
        <translation type="unfinished">Segmente (in Grad)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Segments</source>
        <translation type="unfinished">Segmente</translation>
    </message>
</context>
<context>
    <name>QgsMeasureTool</name>
    <message>
        <location filename="" line="0"/>
        <source>Incorrect measure results</source>
        <translation type="unfinished">Falsche Messergebnisse</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;p&gt;This map is defined with a geographic coordinate system (latitude/longitude) but the map extents suggests that it is actually a projected coordinate system (e.g., Mercator). If so, the results from line or area measurements will be incorrect.&lt;/p&gt;&lt;p&gt;To fix this, explicitly set an appropriate map coordinate system using the &lt;tt&gt;Settings:Project Properties&lt;/tt&gt; menu.</source>
        <translation>&lt;p&gt;Diese Karte ist mit einem geographischen Koordinatensystem definiert (latitude/longitude) aber die Kartenausdehnung zeigt, dass es tatsächlich eine projiziertes Koordinatensystem ist (z.B.: Mercator). Wenn das stimmt, sind die Ergebnisse der Strecken oder Flächenmessung falsch.&lt;/p&gt;&lt;p&gt;Um richtig messen zu können, definieren Sie bitte ein entsprechendes Koordinatensystem in dem Menü &lt;tt&gt;Einstellungen:Projekteinstellungen&lt;/tt&gt;.</translation>
    </message>
</context>
<context>
    <name>QgsMessageViewer</name>
    <message>
        <location filename="" line="0"/>
        <source>QGIS Message</source>
        <translation>QGIS-Nachricht</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Close</source>
        <translation>Schließen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Don&apos;t show this message again</source>
        <translation>Diese Nachricht nicht mehr anzeigen.</translation>
    </message>
</context>
<context>
    <name>QgsMySQLProvider</name>
    <message>
        <location filename="" line="0"/>
        <source>Unable to access relation</source>
        <translation>Auf die Relation kann nicht zugegriffen werden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Unable to access the </source>
        <translation>Fehler beim Zugriff auf die </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> relation.
The error message from the database was:
</source>
        <translation> Relation. Die Fehlermeldung der Datenbank war:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No GEOS Support!</source>
        <translation>Keine GEOS Unterstützung!</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Your PostGIS installation has no GEOS support.
Feature selection and identification will not work properly.
Please install PostGIS with GEOS support (http://geos.refractions.net)</source>
        <translation>Diese PostGIS-Installation hat keine GEOS-Unterstützung.
Objektselektion und -identifizierung kann nicht richtig funktionieren.
Bitte PostGIS mit GEOS-Unterstützung installieren (http://geos.refractions.net)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Save layer as...</source>
        <translation>Layer speichern als...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Error</source>
        <translation>Fehler</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Error creating field </source>
        <translation>Fehler beim Erzeugen des Feldes</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Layer creation failed</source>
        <translation>Erzeugung des Layers fehlgeschlagen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Error creating shapefile</source>
        <translation>Fehler beim Erstellen des Shapefiles.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The shapefile could not be created (</source>
        <translation>Das Shapefile konnte nicht erstellt werden (</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Driver not found</source>
        <translation>Treiber nicht gefunden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> driver is not available</source>
        <translation> Treiber ist nicht verfügbar.</translation>
    </message>
</context>
<context>
    <name>QgsNewConnection</name>
    <message>
        <location filename="" line="0"/>
        <source>Test connection</source>
        <translation>Verbindung testen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Connection failed - Check settings and try again.

Extended error information:
</source>
        <translation>Verbindung fehlgeschlagen - Bitte Einstellungen überprüfen und erneut versuchen.

Ausführliche Fehlerinformation:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Connection to %1 was successful</source>
        <translation type="unfinished">Verbindung zu %1 war erfolgreich</translation>
    </message>
</context>
<context>
    <name>QgsNewConnectionBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Create a New PostGIS connection</source>
        <translation>Neue PostGIS-Verbindung erzeugen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cancel</source>
        <translation>Abbrechen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Help</source>
        <translation>Hilfe</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Connection Information</source>
        <translation>Verbindunginformationen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Host</source>
        <translation>Host</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Database</source>
        <translation>Datenbank</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Username</source>
        <translation>Benutzername</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Name</source>
        <translation>Name</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Name of the new connection</source>
        <translation>Name der neuen Verbindung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Password</source>
        <translation>Passwort</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Test Connect</source>
        <translation>Verbindung testen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Save Password</source>
        <translation>Passwort speichern</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Port</source>
        <translation>Port</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>5432</source>
        <translation>5432</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Only look in the geometry_columns table</source>
        <translation>Nur in geometry_columns nachschauen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Only look in the &apos;public&apos; schema</source>
        <translation>Nur im &apos;public&apos; Schema nachschauen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Restrict the search to the public schema for spatial tables not in the geometry_columns table</source>
        <translation>Beschränke die Suche auf das public Schema für räumliche Tabellen nicht in der geometry_columns Tabelle</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>When searching for spatial tables that are not in the geometry_columns tables, restrict the search to tables that are in the public schema (for some databases this can save lots of time)</source>
        <translation>Bei der Suche nach räumlichen Tabellen, die nicht in der Tabelle geometry_columns sind, beschränke die Suche auf Tabellen, die in dem public Schema sind (bei einigen Datenbanken kann es eine Menge Zeit sparen)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Restrict the displayed tables to those that are in the geometry_columns table</source>
        <translation>Beschränke angezeigte Tabellen auf jene aus der Tabelle geometry_columns</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Restricts the displayed tables to those that are in the geometry_columns table. This can speed up the initial display of spatial tables.</source>
        <translation>Beschränke dargestellte Tabellen auf jene aus der Tabelle geometry_columns. Dies kann die Anzeige räumlicher Tabellen beschleunigen.</translation>
    </message>
</context>
<context>
    <name>QgsNewHttpConnectionBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Create a New WMS connection</source>
        <translation>Neue WMS-Verbindung erzeugen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Connection Information</source>
        <translation>Verbindunginformationen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Name</source>
        <translation>Name</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>URL</source>
        <translation>URL</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Proxy Host</source>
        <translation>Proxy-Rechner</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Proxy Port</source>
        <translation>Proxy-Port</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Proxy User</source>
        <translation>Proxy-Benutzer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Proxy Password</source>
        <translation>Proxy-Passwort</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Your user name for the HTTP proxy (optional)</source>
        <translation>Der Benutzername für den HTTP Proxy (optional)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Password for your HTTP proxy (optional)</source>
        <translation>Passwort für den HTTP Proxy (optional)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Name of the new connection</source>
        <translation>Name der neuen Verbindung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>HTTP address of the Web Map Server</source>
        <translation>HTTP-Adresse des WMS-Servers.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Name of your HTTP proxy (optional)</source>
        <translation>Name Ihres HTTP proxies (optional).</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Port number of your HTTP proxy (optional)</source>
        <translation>Port-Nummer des HTTP-Proxies (optional)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cancel</source>
        <translation>Abbrechen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Help</source>
        <translation>Hilfe</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>F1</source>
        <translation>F1</translation>
    </message>
</context>
<context>
    <name>QgsNorthArrowPlugin</name>
    <message>
        <location filename="" line="0"/>
        <source>Bottom Left</source>
        <translation>Unten links</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Top Right</source>
        <translation>Oben rechts</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Bottom Right</source>
        <translation>Unten rechts</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Top Left</source>
        <translation>Oben links</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;North Arrow</source>
        <translation>&amp;Nordpfeil</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Creates a north arrow that is displayed on the map canvas</source>
        <translation>Erzeugt einen Nordpfeil und stellt ihn in der Karte dar.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Decorations</source>
        <translation>&amp;Dekorationen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>North arrow pixmap not found</source>
        <translation>Nordpfeil nicht gefunden.</translation>
    </message>
</context>
<context>
    <name>QgsNorthArrowPluginGui</name>
    <message>
        <location filename="" line="0"/>
        <source>Pixmap not found</source>
        <translation>Bild nicht gefunden</translation>
    </message>
</context>
<context>
    <name>QgsNorthArrowPluginGuiBase</name>
    <message>
        <location filename="" line="0"/>
        <source>North Arrow Plugin</source>
        <translation>Nordpfeil Plugin</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Properties</source>
        <translation>Eigenschaften</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Angle</source>
        <translation>Winkel</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Placement</source>
        <translation>Platzierung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Set direction automatically</source>
        <translation>Richtung automatisch setzen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Enable North Arrow</source>
        <translation>Nordpfeil aktivieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Top Left</source>
        <translation>Oben links</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Top Right</source>
        <translation>Oben rechts</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Bottom Left</source>
        <translation>Unten links</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Bottom Right</source>
        <translation>Unten rechts</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Placement on screen</source>
        <translation>Platzierung am Bildschirm</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Preview of north arrow</source>
        <translation>Vorschau des Nordpfeils</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Icon</source>
        <translation>Icon</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>New Item</source>
        <translation>Neuer Eintrag</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Browse...</source>
        <translation type="unfinished">Durchsuchen...</translation>
    </message>
</context>
<context>
    <name>QgsOGRFactory</name>
    <message>
        <location filename="" line="0"/>
        <source>Wrong Path/URI</source>
        <translation>Falscher Pfad/URI</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The provided path for the dataset is not valid.</source>
        <translation>Der angegebene Pfad für den Datensatz ist nicht gültig.</translation>
    </message>
</context>
<context>
    <name>QgsOptions</name>
    <message>
        <location filename="" line="0"/>
        <source>Detected active locale on your system: </source>
        <translation type="unfinished">Festgestellte Spracheinstellung des Systems: </translation>
    </message>
</context>
<context>
    <name>QgsOptionsBase</name>
    <message>
        <location filename="" line="0"/>
        <source>QGIS Options</source>
        <translation>QGIS-Optionen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>epiphany</source>
        <translation>epiphany</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>galeon</source>
        <translation>galeon</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>konqueror</source>
        <translation>konqueror</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>mozilla</source>
        <translation>mozilla</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>opera</source>
        <translation>opera</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Hide splash screen at startup</source>
        <translation>Splashscreen beim Start nicht anzeigen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Appearance</source>
        <translation>&amp;Erscheinung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Icon Theme</source>
        <translation>&amp;Icon Motiv</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Theme</source>
        <translation>Motiv</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;b&gt;Note: &lt;/b&gt;Theme changes take effect the next time QGIS is started</source>
        <translation>&lt;b&gt;Beachte: &lt;/b&gt;Motivänderungen werden erst beim nächsten Start von QGIS aktiv</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Help &amp;Browser</source>
        <translation>Hilfe &amp;Browser</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Open help documents with</source>
        <translation>Hilfedokumentation öffnen mit</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Rendering</source>
        <translation>&amp;Darstellung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Update display after reading</source>
        <translation>Anzeige nach dem Lesen aktualisieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Map display will be updated (drawn) after this many features have been read from the data source</source>
        <translation>Kartenanzeige wird erneuert (gezeichnet) nachdem soviele Objekte von der Datenquelle gelesen wurden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>features</source>
        <translation>Objekte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>(Set to 0 to not update the display until all features have been read)</source>
        <translation>(Auf 0 setzen bewirkt das die Anzeige erst erneuert wird wenn alle Objekte gelesen wurden)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Initial Visibility</source>
        <translation>Anfängliche Sichtbarkeit</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Select Global Default ...</source>
        <translation>Globale Voreinstellung selektieren ...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Prompt for projection.</source>
        <translation>Projektion erfragen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Project wide default projection will be used.</source>
        <translation>Projektweite Voreinstellung wird benutzt.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>firefox</source>
        <translation>Firefox</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>mozilla-firefox</source>
        <translation>Mozilla-Firefox</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Splash screen</source>
        <translation>&amp;Startbildschirm</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Default Map Appearance (Overridden by project properties)</source>
        <translation>Voreingestellte Kartendarstellung (durch Projekteinstellungen überschrieben).</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Background Color:</source>
        <translation>Hintergrundfarbe:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Selection Color:</source>
        <translation>Selektierungsfarbe:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Appearance</source>
        <translation>Erscheinung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Capitalise layer name</source>
        <translation>Setzte Layernamen in Kapitälchen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Make lines appear less jagged at the expense of some drawing performance</source>
        <translation>Linien auf Kosten der Zeichengeschwindigkeit weniger gezackt zeichnen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>By default new la&amp;yers added to the map should be displayed</source>
        <translation>Standardmäßig werden alle neuen Layer im Kartenfenster angezeigt.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Update during drawing</source>
        <translation>Während des Zeichnens aktualisieren.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Measure tool</source>
        <translation>Messwerkzeug</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ellipsoid for distance calculations:</source>
        <translation>Ellipsoid zur Distanzberechnung:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Search radius</source>
        <translation>Suchradius</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Pro&amp;jection</source>
        <translation>Pro&amp;jektion</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>When layer is loaded that has no projection information</source>
        <translation>Wenn ein Layer ohne Projektionsinformationen geladen wird</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Global default projection displa&amp;yed below will be used.</source>
        <translation>wird die unten aufgeführte global voreingestellte Projektion benutzt.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;b&gt;Note:&lt;/b&gt; The browser must be in your PATH or you can specify the full path above</source>
        <translation>&lt;b&gt;Bemerkung:&lt;/b&gt; Der Browser muss im Suchpfad (PATH) liegen oder alternativ mit voller Pfadangabe angegeben werden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Rendering</source>
        <translation>Zeichne</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Fix problems with incorrectly filled polygons</source>
        <translation>Problem mit falsch gefüllten Polygonen beheben.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>%</source>
        <translation>%</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Continuously redraw the map when dragging the legend/map divider</source>
        <translation>Karte kontinuierlich neuzeichnen, wenn der Teiler zwischen Legende und Karte verschoben wird.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Map tools</source>
        <translation>&amp;Kartenwerkzeuge</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Panning and zooming</source>
        <translation>Verschieben und Zoomen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Zoom</source>
        <translation>Zoom</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Zoom and recenter</source>
        <translation>Zoomen und mittig zentrieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Nothing</source>
        <translation>Nichts</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Zoom factor:</source>
        <translation>Zoomfaktor:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Mouse wheel action:</source>
        <translation>Mausrad-Aktion:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;General</source>
        <translation type="unfinished">&amp;Allgemein</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>General</source>
        <translation type="unfinished">Allgemein</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ask to save project changes when required</source>
        <translation type="unfinished">Falls nötig zum Speichern des Projekts nachfragen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Rubberband color:</source>
        <translation type="unfinished">Gummibandfarbe:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Locale</source>
        <translation type="unfinished">Sprache</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Force Override System Locale</source>
        <translation type="unfinished">Andere Spracheinstellung erzwingen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Locale to use instead</source>
        <translation type="unfinished">Stattdessen folgende Spracheinstellungen benutzen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Note: Enabling / changing overide on local requires an application restart.</source>
        <translation type="unfinished">Bemerkung: Die Änderung der Spracheinstellung erfordert einen Neustart der Applikation.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Additional Info</source>
        <translation type="unfinished">Ergänzende Informationen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Detected active locale on your system:</source>
        <translation type="unfinished">Festgestellte aktive Spracheinstellung:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Digitizing</source>
        <translation type="unfinished">Digitalisierung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Rubberband</source>
        <translation>Gummiband</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Line Width:</source>
        <translation type="unfinished">Linienbreite:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Line width in pixels</source>
        <translation type="unfinished">Linienbreite in Pixel</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Line Colour:</source>
        <translation type="unfinished">Linienfarbe:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Snapping</source>
        <translation>Snapping</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Default Snapping Tolerance (in layer units):</source>
        <translation>Standard Snapping Toleranz (in Karteneinheiten):</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Search radius for vertex edits (in layer units):</source>
        <translation>Suchradius für Stützpunkt-Editierung (in Karteneinheiten):</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Warn me when opening a project file saved with an older version of QGIS</source>
        <translation>Warne mich beim Öffnen einer Projektdatei, die mit einer älteren QGIS Version erstellt wurde</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Selecting this will unselect the &apos;make lines less&apos; jagged toggle</source>
        <translation>Das Auswählen deaktiviert die Option Linien weniger gezackt zeichnen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>(Specify the search radius as a percentage of the map width)</source>
        <translation>(Gebe den Suchradius als Prozentanteil der Kartenbreite an)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Search Radius for Identifying Features and displaying Map Tips</source>
        <translation>Suchradius zum Abfragen von Objekten und Kartenhinweisen</translation>
    </message>
</context>
<context>
    <name>QgsPasteTransformationsBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Paste Transformations</source>
        <translation>Transformationen einfügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;b&gt;Note: This function is not useful yet!&lt;/b&gt;</source>
        <translation>&lt;b&gt;Bemerkung: Diese Funktion ist noch nicht nützlich!&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Source</source>
        <translation>Quelle</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Destination</source>
        <translation>Ziel</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Help</source>
        <translation>&amp;Hilfe</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add New Transfer</source>
        <translation>Neuen Transfer hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Abbrechen</translation>
    </message>
</context>
<context>
    <name>QgsPatternDialogBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Select a fill pattern</source>
        <translation>Füllmuster wählen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cancel</source>
        <translation>Abbrechen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ok</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No Fill</source>
        <translation>Keine Füllung</translation>
    </message>
</context>
<context>
    <name>QgsPgGeoprocessing</name>
    <message>
        <location filename="" line="0"/>
        <source>Buffer features in layer %1</source>
        <translation>Puffer Objekte in Layer %1</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Error connecting to the database</source>
        <translation>Fehler beim Verbinden mit der Datenbank</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Buffer features</source>
        <translation>O&amp;bjekte puffern.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>A new layer is created in the database with the buffered features.</source>
        <translation>Ein neuer Layer ist in der Datenbank erstellt wurden, der die gepufferten Objekte enthält.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Geoprocessing</source>
        <translation>&amp;Geodatenverarbeitung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Unable to add geometry column</source>
        <translation>Konnte die Geometriespalte nicht hinzufügen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Unable to add geometry column to the output table </source>
        <translation>Geometriespalte konnte nicht zur Ausgabetabelle hinzufügen: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Unable to create table</source>
        <translation>Kann die Tabelle nicht erstellen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Failed to create the output table </source>
        <translation>Erstellen der Ausgabetabelle fehlgeschlagen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No GEOS support</source>
        <translation>Keine GEOS-Unterstützung.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Buffer function requires GEOS support in PostGIS</source>
        <translation>Pufferfunktion benötigt GEOS-Unterstützung in PostGIS.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> is not a PostgreSQL/PostGIS layer.
</source>
        <translation> ist keine PostgreSQL/PostGIS-Layer.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Geoprocessing functions are only available for PostgreSQL/PostGIS Layers</source>
        <translation>Geodatenverarbeitungsfunktionen sind nur für PostgreSQL/PostGIS-Layer vorgesehen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No Active Layer</source>
        <translation>Kein aktiver Layer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>You must select a layer in the legend to buffer</source>
        <translation>Selektieren Sie einen Layer in der Legende, der gepuffert werden soll.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Not a PostgreSQL/PostGIS Layer</source>
        <translation>Kein PostgreSQL/PostGIS Layer</translation>
    </message>
</context>
<context>
    <name>QgsPgQueryBuilder</name>
    <message>
        <location filename="" line="0"/>
        <source>Table &lt;b&gt;%1&lt;/b&gt; in database &lt;b&gt;%2&lt;/b&gt; on host &lt;b&gt;%3&lt;/b&gt;, user &lt;b&gt;%4&lt;/b&gt;</source>
        <translation>Tabelle &lt;b&gt;%1&lt;/b&gt; in Datenbank &lt;b&gt;%2&lt;/b&gt; auf Host &lt;b&gt;%3&lt;/b&gt;, Benutzer &lt;b&gt;%4&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Connection Failed</source>
        <translation>Verbindung fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Connection to the database failed:</source>
        <translation>Verbindung zur Datenbank fehlgeschlagen:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Database error</source>
        <translation>Datenbankfehler</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Failed to get sample of field values</source>
        <translation>Übertragung der Attributwerte fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Query Result</source>
        <translation>Erfrage Resultat</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The where clause returned </source>
        <translation>Die WHERE-Klausel gab </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> rows.</source>
        <translation> Zeilen zurück.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Query Failed</source>
        <translation>Abfrage fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>An error occurred when executing the query:</source>
        <translation>Während der Ausführung der Abfrage trat ein Fehler auf:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No Records</source>
        <translation>Keine Einträge</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The query you specified results in zero records being returned. Valid PostgreSQL layers must have at least one feature.</source>
        <translation>Die Abfrage ergab keine Einträge. Gültige PostgreSQL-Layer müssen mindestens ein Objekt enthalten.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;p&gt;Failed to get sample of field values using SQL:&lt;/p&gt;&lt;p&gt;</source>
        <translation>&lt;p&gt;Konnte keine Beispiele der Werte mit SQL holen:&lt;/p&gt;&lt;p&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No Query</source>
        <translation type="unfinished">Keine Abfrage</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>You must create a query before you can test it</source>
        <translation type="unfinished">Sie müssen eine Anfrage erstellen bevor Sie sie testen können.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Error in Query</source>
        <translation type="unfinished">Fehler in Abfrage</translation>
    </message>
</context>
<context>
    <name>QgsPgQueryBuilderBase</name>
    <message>
        <location filename="" line="0"/>
        <source>PostgreSQL Query Builder</source>
        <translation>PostgreSQL Query Builder</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Clear</source>
        <translation>Löschen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Test</source>
        <translation>Testen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ok</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cancel</source>
        <translation>Abbrechen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Values</source>
        <translation>Werte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>All</source>
        <translation>Alle</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Sample</source>
        <translation>Stichprobe</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Fields</source>
        <translation>Felder</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Datasource:</source>
        <translation>Datenquelle:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Operators</source>
        <translation>Operatoren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>=</source>
        <translation>=</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>IN</source>
        <translation>IN</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>NOT IN</source>
        <translation>NOT IN</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;</source>
        <translation>&lt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&gt;</source>
        <translation>&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>%</source>
        <translation>%</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;=</source>
        <translation>&lt;=</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&gt;=</source>
        <translation>&gt;=</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>!=</source>
        <translation>!=</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>LIKE</source>
        <translation>ÄHNLICH</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>AND</source>
        <translation>UND</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>ILIKE</source>
        <translation>ILIKE</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>OR</source>
        <translation>ODER</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>NOT</source>
        <translation>NICHT</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>SQL where clause</source>
        <translation>SQL where clause</translation>
    </message>
</context>
<context>
    <name>QgsPluginManager</name>
    <message>
        <location filename="" line="0"/>
        <source>No Plugins</source>
        <translation>Keine Plugins</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No QGIS plugins found in </source>
        <translation>Keine QGIS-Plugins gefunden in </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Name</source>
        <translation type="unfinished">Name</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Version</source>
        <translation type="unfinished">Version</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Description</source>
        <translation type="unfinished">Beschreibung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Library name</source>
        <translation>Bibliotheksname</translation>
    </message>
</context>
<context>
    <name>QgsPluginManagerBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Plugin Directory</source>
        <translation>Pluginverzeichnis</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>To load a plugin, click the checkbox next to the plugin and click Ok</source>
        <translation>Um ein Plugin zu laden, das Häkchen daneben setzen und dann auf OK klicken</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Select All</source>
        <translation>&amp;Alle selektieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Alt+S</source>
        <translation>Alt+S</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>C&amp;lear All</source>
        <translation>&amp;Lösche alle</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Alt+L</source>
        <translation>Alt+L</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Ok</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Alt+O</source>
        <translation>Alt+O</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Close</source>
        <translation>&amp;Schließen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>QGIS Plugin Manager</source>
        <translation>QGIS Plugin Manager</translation>
    </message>
</context>
<context>
    <name>QgsPointDialog</name>
    <message>
        <location filename="" line="0"/>
        <source>Zoom In</source>
        <translation>Hineinzoomen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>z</source>
        <translation>z</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Zoom Out</source>
        <translation>Hinauszoomen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Z</source>
        <translation>Z</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Zoom To Layer</source>
        <translation>Auf den Layer zoomen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Zoom to Layer</source>
        <translation>Auf den Layer zoomen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Pan Map</source>
        <translation>Karte verschieben</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Pan the map</source>
        <translation>Karte verschieben</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add Point</source>
        <translation>Addiere Punkt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>.</source>
        <translation>.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Capture Points</source>
        <translation>Punkt digitalisieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Delete Point</source>
        <translation>Lösche Punkt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Delete Selected</source>
        <translation>Ausgewahl gelöscht.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Linear</source>
        <translation>Linear</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Helmert</source>
        <translation>Helmert</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Choose a name for the world file</source>
        <translation>Bitte einen Namen für das World-File eingeben.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Warning</source>
        <translation>Warnung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;p&gt;A Helmert transform requires modifications in the raster layer.&lt;/p&gt;&lt;p&gt;The modified raster will be saved in a new file and a world file will be generated for this new file instead.&lt;/p&gt;&lt;p&gt;Are you sure that this is what you want?&lt;/p&gt;</source>
        <translation>&lt;p&gt;Eine Helmert-Transformation ändert den Rasterlayer.&lt;/p&gt;&lt;p&gt;Stattdessen wird die veränderte Rasterdatei in einer neuen Datei mit einem dazu passenden Worldfile gespeichert.&lt;/p&gt;&lt;p&gt;Sind Sie sicher, dass Sie das wollen?&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Affine</source>
        <translation>Affin</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Not implemented!</source>
        <translation>Nicht implementiert!</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;p&gt;An affine transform requires changing the original raster file. This is not yet supported.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Eine Affin-Transformation wird die Original-Rasterdatei verändern. Dies ist noch nicht implementiert.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;p&gt;The </source>
        <translation>&lt;p&gt;Die </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> transform is not yet supported.&lt;/p&gt;</source>
        <translation>Transformation wird noch nicht unterstützt.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Error</source>
        <translation>Fehler</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Could not write to </source>
        <translation>Kann nicht </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Currently all modified files will be written in TIFF format.</source>
        <translation>Derzeit werden alle modifizierten Dateien im TIFF-Format geschrieben.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>-modified</source>
        <comment>




Georeferencer:QgsPointDialog.cpp - used to modify a user given filename</comment>
        <translation type="unfinished">-modifiziert</translation>
    </message>
</context>
<context>
    <name>QgsPointDialogBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Transform type:</source>
        <translation>Transformationstyp:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Zoom in</source>
        <translation>Hineinzoomen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Zoom out</source>
        <translation>Herauszoomen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Zoom to the raster extents</source>
        <translation>Auf die Rasterausdehnung zoomen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Pan</source>
        <translation>Verschieben</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add points</source>
        <translation>Punkte hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Delete points</source>
        <translation>Punkte löschen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>World file:</source>
        <translation>World file:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>...</source>
        <translation type="unfinished">...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Modified raster:</source>
        <translation>Raster modifizieren:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Reference points</source>
        <translation type="unfinished">Referenzpunkte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Create</source>
        <translation>Erstellen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Create and load layer</source>
        <translation>Erstellen und Layer laden</translation>
    </message>
</context>
<context>
    <name>QgsPointStyleWidgetBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Form3</source>
        <translation>Formular3</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Symbol Style</source>
        <translation>Symbolstil</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Scale</source>
        <translation>Massstab</translation>
    </message>
</context>
<context>
    <name>QgsPostgresProvider</name>
    <message>
        <location filename="" line="0"/>
        <source>Unable to access relation</source>
        <translation>Auf die Relation kann nicht zugegriffen werden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Unable to access the </source>
        <translation>Fehler beim Zugriff auf die</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> relation.
The error message from the database was:
</source>
        <translation>Relation. Die Fehlermeldung der Datenbank war:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No GEOS Support!</source>
        <translation>Keine GEOS Unterstützung!</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Your PostGIS installation has no GEOS support.
Feature selection and identification will not work properly.
Please install PostGIS with GEOS support (http://geos.refractions.net)</source>
        <translation>Diese PostGISinstallation hat keine GEOS unterstützung.
Objektselektion und -identifizierung kann nicht sauber funktionieren.
Bitte PostGIS mit GEOSunterstützung installieren (http://geos.refractions.net)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No suitable key column in table</source>
        <translation>Keine passende Schlüsselspalte in der Tabelle.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The table has no column suitable for use as a key.

Qgis requires that the table either has a column of type
int4 with a unique constraint on it (which includes the
primary key) or has a PostgreSQL oid column.
</source>
        <translation>Die Tabelle hat keine passende Spalte, die als Schlüssel verwendet werden kann. 

QGIS benötigt benötigt eine solche Spalte (Typ int4) mit einem eindeutigen Constraint (der dann einen eindeutigen Schlüssel beinhaltet. 
Alternativ kann die oid-Spalte von PostgresSQL benutzt werden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The unique index on column</source>
        <translation>Der eindeutige Index der Spalte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>is unsuitable because Qgis does not currently support non-int4 type columns as a key into the table.
</source>
        <translation>kann nicht benutzt werden, da QGIS derzeit nur Spalten vom Typ int4 als Schlüssel einer Tabelle akzeptiert.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>and </source>
        <translation>und </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The unique index based on columns </source>
        <translation>Der eindeutige Index basierend auf den Spalten </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> is unsuitable because Qgis does not currently support multiple columns as a key into the table.
</source>
        <translation> ist unbrauchbar, da QGIS derzeit nicht mehrere Spalten als Schlüssel in einer Tabelle unterstützt.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Unable to find a key column</source>
        <translation>Kann die Schlüsselspalte nicht finden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> derives from </source>
        <translation> kommt von </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>and is suitable.</source>
        <translation>und is passend.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>and is not suitable </source>
        <translation>und ist nicht passend.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>type is </source>
        <translation>Typ ist </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> and has a suitable constraint)</source>
        <translation> und hat einen passenden Constraint).</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> and does not have a suitable constraint)</source>
        <translation> und kat keinen passenden Constraint).</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The view you selected has the following columns, none of which satisfy the above conditions:</source>
        <translation>Das ausgewählte View hat die folgenden Spalten; keine dieser Spalten erfüllt die obigen Konditionen:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Qgis requires that the view has a column that can be used as a unique key. Such a column should be derived from a table column of type int4 and be a primary key, have a unique constraint on it, or be a PostgreSQL oid column. To improve performance the column should also be indexed.
</source>
        <translation>QGIS benötigt bei Views eine Spalte, die als eindeutige Schlüsselspalte verwendet werden kann. So eine Spalte (meist vom Typ int4) sollte im Datensatz vorhanden sein und als primärer Schlüssel definiert sein. Ferner sollte ein eindeutiger Constraint definiert sein. Ideal ist die von PostgreSQL unterstützte Spalte oid. Um die Geschwindigkeit zu erhöhen, sollte die Spalte auch indiziert sein.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The view </source>
        <translation>Das View </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>has no column suitable for use as a unique key.
</source>
        <translation>hat keine Spalte, die sich als eindeutiger Schlüssel eignet.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No suitable key column in view</source>
        <translation>Keine passende Schlüsselspalte im View</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Unknown geometry type</source>
        <translation>Unbekannter Geometrietyp.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Column </source>
        <translation>Spalte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> in </source>
        <translation> in </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> has a geometry type of </source>
        <translation> hat einen Geometrietyp von </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>, which Qgis does not currently support.</source>
        <translation>, den QGIS derzeit nicht unterstützt.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>. The database communication log was:
</source>
        <translation>. Die Datenbanklogdatei sagt folgendes:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Unable to get feature type and srid</source>
        <translation>Kann den Fearture-Typ und die SRID nicht ermitteln.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Note: </source>
        <translation>Bemerkung: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>initially appeared suitable but does not contain unique data, so is not suitable.
</source>
        <translation>anfänglich schien der Layer geeignet, allerdings enthält er keine eindeutigen Daten, insofern nicht geeignet.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>INSERT error</source>
        <translation>INSERT Fehler</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>An error occured during feature insertion</source>
        <translation>Ein Fehler ist während des Einfügens eines Objekts aufgetreten.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>DELETE error</source>
        <translation>DELETE Fehler</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>An error occured during deletion from disk</source>
        <translation>Ein Fehler ist beim Löschen von der Festplatte aufgetreten.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>PostGIS error</source>
        <translation>PostGIS-Fehler</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>When trying: </source>
        <translation>Versuchen:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>An error occured contacting the PostgreSQL database</source>
        <translation type="unfinished">Ein Fehler trat bei der Verbindungsaufnahme zur PostgreSQL-Datenbank auf</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The PostgreSQL database returned: </source>
        <translation type="unfinished">Die PostgreSQL-Datenbank gab zurück: </translation>
    </message>
</context>
<context>
    <name>QgsProjectPropertiesBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Project Properties</source>
        <translation>Projekteigenschaften</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Map Units</source>
        <translation>Karteneinheiten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Meters</source>
        <translation>Meter</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Feet</source>
        <translation>Fuss</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Decimal degrees</source>
        <translation>Dezimal Grad</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Default project title</source>
        <translation>Default Projekttitel</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>General</source>
        <translation>Allgemein</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Automatic</source>
        <translation>Automatisch</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Automatically sets the number of decimal places in the mouse position display</source>
        <translation>Setzt automatisch die Anzahl Dezimalstellen in der Mauspositionsanzeige</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The number of decimal places that are used when displaying the mouse position is automatically set to be enough so that moving the mouse by one pixel gives a change in the position display</source>
        <translation>Die Anzahl Dezimalstellen, die beim Anzeigen der Mausposition benutzt werden, wird automatisch so gesetzt, dass eine Mausbewegung um einen Pixel zu einer Änderung in der Positionsanzeige führt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Manual</source>
        <translation>Hilfe</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Sets the number of decimal places to use for the mouse position display</source>
        <translation>Setzt die Anzahl Dezimalstellen für die Mauspositionsanzeige</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The number of decimal places for the manual option</source>
        <translation>Setzt die Anzahl Dezimalstellen für die manuelle Option</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>decimal places</source>
        <translation>Dezimalstellen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Map Appearance</source>
        <translation>Kartenerscheinung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Selection Color:</source>
        <translation>Selektierungsfarbe:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Project Title</source>
        <translation>Projekttitel</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Projection</source>
        <translation>Projektion</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Enable on the fly projection</source>
        <translation>Projektion zur Laufzeit einschalten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Background Color:</source>
        <translation>Hintergrundfarbe:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Precision</source>
        <translation>Genauigkeit</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Digitizing</source>
        <translation>Digitalisierung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Descriptive project name</source>
        <translation>Beschreibender Projektname</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Enable topological editing</source>
        <translation>Ermögliche topologisches Editieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Snapping options...</source>
        <translation>Snapping-Optionen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Avoid intersections of new polygons</source>
        <translation>Vermeide Überschneidung neuer Polygone</translation>
    </message>
</context>
<context>
    <name>QgsProjectionSelector</name>
    <message>
        <location filename="" line="0"/>
        <source>QGIS SRSID: </source>
        <translation>QGIS SRSID: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>PostGIS SRID: </source>
        <translation>PostGIS SRID:</translation>
    </message>
</context>
<context>
    <name>QgsProjectionSelectorBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Projection Selector</source>
        <translation>Selektierung der Projektion</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Projection</source>
        <translation>Projektion</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Search</source>
        <translation>Suchen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Find</source>
        <translation>Finden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Postgis SRID</source>
        <translation>PostGIS SRID</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>EPSG ID</source>
        <translation>EPSG ID</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>QGIS SRSID</source>
        <translation>QGIS SRSID</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Name</source>
        <translation>Name</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Spatial Reference System</source>
        <translation>Räumliches Referenzsystem</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Id</source>
        <translation>Id</translation>
    </message>
</context>
<context>
    <name>QgsPythonDialog</name>
    <message>
        <location filename="" line="0"/>
        <source>Python console</source>
        <translation type="unfinished">Python-Konsole</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&gt;&gt;&gt;</source>
        <translation>&gt;&gt;&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>To access Quantum GIS environment from this python console use object from global scope which is an instance of QgisInterface class.&lt;br&gt;Usage e.g.: iface.zoomFull()</source>
        <translation>Um die Quantum GIS Umgebung von dieser Python Konsole aus zu erreichen, benutzen Sie Objekte des global scope, die eine Instanz der QgisInterface Klasse sind.&lt;br&gt;Benutzung z.B.: iface.zoomFull()</translation>
    </message>
</context>
<context>
    <name>QgsQuickPrint</name>
    <message>
        <location filename="" line="0"/>
        <source> km</source>
        <translation type="unfinished"> km</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> mm</source>
        <translation type="unfinished"> mm</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> cm</source>
        <translation type="unfinished"> cm</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> m</source>
        <translation type="unfinished"> m</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> miles</source>
        <translation type="unfinished"> Meilen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> mile</source>
        <translation type="unfinished"> Meile</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> inches</source>
        <translation type="unfinished"> Inches</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> foot</source>
        <translation type="unfinished">Fuss</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> feet</source>
        <translation type="unfinished">Fuß</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> degree</source>
        <translation type="unfinished">Grad</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> degrees</source>
        <translation type="unfinished">Grad</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> unknown</source>
        <translation type="unfinished">unbekannt</translation>
    </message>
</context>
<context>
    <name>QgsRasterLayer</name>
    <message>
        <location filename="" line="0"/>
        <source>Not Set</source>
        <translation>Nicht gesetzt.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Driver:</source>
        <translation>Treiber:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Dimensions:</source>
        <translation>Dimensionen:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>X: </source>
        <translation>X:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> Y: </source>
        <translation>Y:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> Bands: </source>
        <translation>Kanäle: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Origin:</source>
        <translation>Ursprung:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Pixel Size:</source>
        <translation>Pixelgröße:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Raster Extent: </source>
        <translation>Rasterausmaß:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Clipped area: </source>
        <translation>Ausschnittsbereich:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Pyramid overviews:</source>
        <translation>Pyramiden Überblicke:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Property</source>
        <translation>Eigenschaft</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Value</source>
        <translation>Wert</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Band</source>
        <translation>Kanal</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Band No</source>
        <translation>Kanal Nr</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No Stats</source>
        <translation>Keine Statistik</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No stats collected yet</source>
        <translation>Noch keine Statistik gesammelt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Min Val</source>
        <translation>Minimalwert</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Max Val</source>
        <translation>Maximalwert</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Range</source>
        <translation>Bereich</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Mean</source>
        <translation>Durchschnitt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Sum of squares</source>
        <translation>Summe der Quadrate</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Standard Deviation</source>
        <translation>Standardverteilung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Sum of all cells</source>
        <translation>Summe aller Zellen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cell Count</source>
        <translation>Zellenanzahl</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Data Type:</source>
        <translation>Datentyp:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GDT_Byte - Eight bit unsigned integer</source>
        <translation>GDT_Byte - Eight bit unsigned integer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GDT_UInt16 - Sixteen bit unsigned integer </source>
        <translation>GDT_UInt16 - Sixteen bit unsigned integer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GDT_Int16 - Sixteen bit signed integer </source>
        <translation>GDT_Int16 - Sixteen bit signed integer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GDT_UInt32 - Thirty two bit unsigned integer </source>
        <translation>GDT_UInt32 - Thirty two bit unsigned integer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GDT_Int32 - Thirty two bit signed integer </source>
        <translation>GDT_Int32 - Thirty two bit signed integer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GDT_Float32 - Thirty two bit floating point </source>
        <translation>GDT_Float32 - Thirty two bit floating point</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GDT_Float64 - Sixty four bit floating point </source>
        <translation>GDT_Float64 - Sixty four bit floating point</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GDT_CInt16 - Complex Int16 </source>
        <translation>GDT_CInt16 - Complex Int16</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GDT_CInt32 - Complex Int32 </source>
        <translation>GDT_CInt32 - Complex Int32</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GDT_CFloat32 - Complex Float32 </source>
        <translation>GDT_CFloat32 - Complex Float32</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GDT_CFloat64 - Complex Float64 </source>
        <translation>GDT_CFloat64 - Complex Float64</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Could not determine raster data type.</source>
        <translation>Konnte Rasterdatentyp nicht erkennen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Average Magphase</source>
        <translation>Durchschnittliche Magphase</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Average</source>
        <translation>Durchschnitt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Layer Spatial Reference System: </source>
        <translation>Referenzsystem des Layers:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>out of extent</source>
        <translation>ausserhalb der Ausdehnung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>null (no data)</source>
        <translation>Null (keine Daten)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Dataset Description</source>
        <translation>Datensatzbeschreibung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No Data Value</source>
        <translation>NODATA Wert</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>and all other files</source>
        <translation>und alle anderen Dateien</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>NoDataValue not set</source>
        <translation>NoDataValue nicht gesetzt</translation>
    </message>
</context>
<context>
    <name>QgsRasterLayerProperties</name>
    <message>
        <location filename="" line="0"/>
        <source>Grayscale</source>
        <translation>Graustufen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Pseudocolor</source>
        <translation>Pseudofarben</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Freak Out</source>
        <translation>Ausgeflippt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Palette</source>
        <translation>Palette</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Columns: </source>
        <translation>Spalten: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Rows: </source>
        <translation>Zeilen: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No-Data Value: </source>
        <translation>NODATA-Wert: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>n/a</source>
        <translation>n/a</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Write access denied</source>
        <translation type="unfinished">Schreibzugriff verboten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Write access denied. Adjust the file permissions and try again.

</source>
        <translation type="unfinished">Schreibzugriff verboten. Dateirechte ändern und erneut versuchen.
</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Building pyramids failed.</source>
        <translation type="unfinished">Erstellung von Pyramiden fehlgeschlagen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The file was not writeable. Some formats can not be written to, only read. You can also try to check the permissions and then try again.</source>
        <translation type="unfinished">Die Datei ist nicht beschreibbar. Einige Formate können nur gelesen werden aber nicht beschrieben. Sie können auch versuchen, die Zugriffsrechte zu überprüfen und es erneut zu probieren.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Building pyramid overviews is not supported on this type of raster.</source>
        <translation type="unfinished">Für diese Art von Raster können keine Pyramiden erstellt werden. </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Custom Colormap</source>
        <translation>Individuelle Farbkarte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No Stretch</source>
        <translation>Kein Strecken</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Stretch To MinMax</source>
        <translation>Strecke auf MinMax</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Stretch And Clip To MinMax</source>
        <translation>Strecken und Zuschneiden auf MinMax</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Clip To MinMax</source>
        <translation>Zuschneiden auf MinMax</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Discrete</source>
        <translation>Diskret</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Linearly</source>
        <translation>Linear</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Equal interval</source>
        <translation>Gleiches Interval</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Quantiles</source>
        <translation type="unfinished">Quantile</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Description</source>
        <translation>Beschreibung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Large resolution raster layers can slow navigation in QGIS.</source>
        <translation>Hochaufgelöste Raster können das Navigieren in QGIS verlangsamen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>By creating lower resolution copies of the data (pyramids) performance can be considerably improved as QGIS selects the most suitable resolution to use depending on the level of zoom.</source>
        <translation>Durch das Erstellen geringer aufgelöster Kopien der Daten (Pyramiden), kann die Darstellung beschleunigt werden, da QGIS die optimale Auflösung entsprechend der gewählten Zoomeinstellung aussucht</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>You must have write access in the directory where the original data is stored to build pyramids.</source>
        <translation>Sie brauchen Schreibrecht in dem Ordner mit den Originaldaten, um Pyramiden zu erstellen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Please note that building pyramids may alter the original data file and once created they cannot be removed!</source>
        <translation>Beachten Sie bitte, das Erstellen von Pyramiden kann die Originaldaten unwiderrufich verändern!</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Please note that building pyramids could corrupt your image - always make a backup of your data first!</source>
        <translation>Beachten Sie, das Erstellen von Pyramiden kann Ihre Daten unlesbar machen - erstellen Sie immer erst ein Backup!</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Red</source>
        <translation>Rot</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Green</source>
        <translation>Grün</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Blue</source>
        <translation>Blau</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Percent Transparent</source>
        <translation>Prozent Transparenz</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Gray</source>
        <translation type="unfinished">Grau</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Indexed Value</source>
        <translation>Indizierter Wert</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>User Defined</source>
        <translation>Benutzerdefiniert</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No Scaling</source>
        <translation>Keine Skalierung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No-Data Value: Not Set</source>
        <translation>No-Data Wert: Nicht gesetzt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Save file</source>
        <translation>Speichere Datei</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Textfile (*.txt)</source>
        <translation>Textdatei (*.txt)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>QGIS Generated Transparent Pixel Value Export File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Open file</source>
        <translation>Öffne Datei</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Import Error</source>
        <translation>Importfehler</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The following lines contained errors

</source>
        <translation>Die folgenden Zeilen enthalten Fehler</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Read access denied</source>
        <translation>Lesezugriff verweigert</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Read access denied. Adjust the file permissions and try again.

</source>
        <translation>Lesezugriff verweigert. Passe Dateirechte an und versuche es erneut.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Color Ramp</source>
        <translation>Farbanstieg</translation>
    </message>
</context>
<context>
    <name>QgsRasterLayerPropertiesBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Raster Layer Properties</source>
        <translation>Rasterlayereigenschaften</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>General</source>
        <translation>Allgemein</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Layer Source:</source>
        <translation>Layerquelle:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Display Name:</source>
        <translation>Anzeigename:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Legend:</source>
        <translation>Legende:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No Data:</source>
        <translation>Keine Daten:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Symbology</source>
        <translation>Bezeichnungen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;p align=&quot;right&quot;&gt;Full&lt;/p&gt;</source>
        <translation>&lt;p align=&quot;right&quot;&gt;Voll&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>None</source>
        <translation>Keine</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Invert Color Map</source>
        <translation>Farben invertieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Gray</source>
        <translation>Grau</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Color Map</source>
        <translation>Farbpalette</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Metadata</source>
        <translation>Metadaten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Pyramids</source>
        <translation>Pyramiden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Resampling Method</source>
        <translation>Umrechnungsmethode</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Average</source>
        <translation>Durchschnitt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Nearest Neighbour</source>
        <translation>Nächster Nachbar</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Build Pyramids</source>
        <translation>Erstelle Pyramiden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Pyramid Resolutions</source>
        <translation>Pyramidenauflösungen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Thumbnail</source>
        <translation>Miniaturbild</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Columns:</source>
        <translation>Spalten:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Rows:</source>
        <translation>Zeilen:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Palette:</source>
        <translation>Palette:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Maximum 1:</source>
        <translation>Maximum 1:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Maximum scale at which this layer will be displayed. </source>
        <translation>Maximum Massstab, bei dem dieser Layer angezeigt wird.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Minimum 1:</source>
        <translation>Minimum 1:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Minimum scale at which this layer will be displayed. </source>
        <translation>Minimum Massstab, bei dem dieser Layer angezeigt wird.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Histogram</source>
        <translation>Histogramm</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Options</source>
        <translation>Optionen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Out Of Range OK?</source>
        <translation>Ausserhalb des Wertebereiches OK?</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Allow Approximation</source>
        <translation>Annäherung erlauben</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Chart Type</source>
        <translation>Diagrammtyp</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Bar Chart</source>
        <translation>Balkendiagramm</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Line Graph</source>
        <translation>Liniengrafik</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Refresh</source>
        <translation>Erneuern</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Spatial Reference System</source>
        <translation>Räumliches Referenzsystem</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Change</source>
        <translation>Wechseln</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>DebugInfo</source>
        <translation>DebugInfo</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Scale Dependent Visibility</source>
        <translation>Skalenabhängige Sichtbarkeit</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Column Count:</source>
        <translation>Spaltenanzahl:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Grayscale Band Scaling</source>
        <translation>Graustufen Kanal Skalierung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Max</source>
        <translation type="unfinished">Max</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Std Deviation</source>
        <translation>Standardabweichung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Custom Min Max Values:</source>
        <translation>Individuelle Min Max Werte:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Min</source>
        <translation type="unfinished">Min</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Contrast Enhancement</source>
        <translation>Kontrastverbesserung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Load Min Max Values From Band(s)</source>
        <translation>Lade Min Max Werte aus Kanälen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>RGB Scaling</source>
        <translation>RGB Skalierung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;b&gt;&lt;font color=&apos;blue&apos;&gt;Max&lt;/font&gt;&lt;/b&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Custom Min Max Values</source>
        <translation>Individuelle Min Max Werte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;b&gt;&lt;font color=&apos;green&apos;&gt;Min&lt;/font&gt;&lt;/b&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;b&gt;&lt;font color=&apos;green&apos;&gt;Max&lt;/font&gt;&lt;/b&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;b&gt;&lt;font color=&apos;red&apos;&gt;Min&lt;/font&gt;&lt;/b&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;b&gt;&lt;font color=&apos;red&apos;&gt;Max&lt;/font&gt;&lt;/b&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;b&gt;&lt;font color=&apos;blue&apos;&gt;Min&lt;/font&gt;&lt;/b&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Grayscale Band Selection</source>
        <translation>Graustufen Kanal Selektion</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>RGB Mode Band Selection</source>
        <translation>RGB Modus Kanal Selektion</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;b&gt;&lt;font color=&apos;blue&apos;&gt;Blue&lt;/font&gt;&lt;/b&gt;</source>
        <translation>&lt;b&gt;&lt;font color=&apos;blue&apos;&gt;Blau&lt;/font&gt;&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;b&gt;&lt;font color=&apos;green&apos;&gt;Green&lt;/font&gt;&lt;/b&gt;</source>
        <translation>&lt;b&gt;&lt;font color=&apos;green&apos;&gt;Grün&lt;/font&gt;&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;b&gt;&lt;font color=&apos;red&apos;&gt;Red&lt;/font&gt;&lt;/b&gt;</source>
        <translation>&lt;b&gt;&lt;font color=&apos;red&apos;&gt;Rot&lt;/font&gt;&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Global Transparency</source>
        <translation>Globale Transparenz</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> 00%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Render as</source>
        <translation>Zeige als</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Single Band Gray</source>
        <translation>Einkanal Grau</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Three Band Color</source>
        <translation>Drei Kanal Farbe</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Transparent Pixels</source>
        <translation>Transparente Pixel</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Transparent Band:</source>
        <translation>Transparenter Kanal:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Custom Transparency List</source>
        <translation>Individuelle Transparenzliste</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Transparency Layer;</source>
        <translation>Transparenz Layer:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add Values Manually</source>
        <translation>Werte manuell hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>...</source>
        <translation type="unfinished">...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add Values From Display</source>
        <translation>Werte vom Display hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Remove Selected Row</source>
        <translation>Lösche ausgewählte Zeile</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Default Values</source>
        <translation>Standardwerte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Import From File</source>
        <translation>Importiere aus Datei</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Export To File</source>
        <translation>Exportieren nach Datei</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No Data Value:</source>
        <translation>No Data Wert:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Reset No Data Value</source>
        <translation>No Data Wert zurücksetzen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Colormap</source>
        <translation>Farbkarte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Number of entries:</source>
        <translation>Anzahl der Einträge:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Delete entry</source>
        <translation>Lösche Eintrag</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Classify</source>
        <translation>Klassifiziere</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>1</source>
        <translation type="unfinished">1</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>2</source>
        <translation type="unfinished">2</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Color interpolation:</source>
        <translation>Farbinterpolation:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Classification mode:</source>
        <translation>Klassifiziermodus:</translation>
    </message>
</context>
<context>
    <name>QgsRunProcess</name>
    <message>
        <location filename="" line="0"/>
        <source>Unable to run command</source>
        <translation>Kommando kann nicht gestartet werden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Starting</source>
        <translation>Starte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Done</source>
        <translation>Fertig</translation>
    </message>
</context>
<context>
    <name>QgsScaleBarPlugin</name>
    <message>
        <location filename="" line="0"/>
        <source> metres/km</source>
        <translation>Meter/Kilometer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> feet</source>
        <translation>Fuß</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> degrees</source>
        <translation>Grad</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> km</source>
        <translation> km</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> mm</source>
        <translation> mm</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> cm</source>
        <translation> cm</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> m</source>
        <translation> m</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> foot</source>
        <translation>Fuss</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> degree</source>
        <translation>Grad</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> unknown</source>
        <translation>unbekannt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Top Left</source>
        <translation>Oben links</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Bottom Left</source>
        <translation>Unten links</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Top Right</source>
        <translation>Oben rechts</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Bottom Right</source>
        <translation>Unten rechts</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Tick Down</source>
        <translation>Strich unten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Tick Up</source>
        <translation>Strich oben</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Bar</source>
        <translation>Balken</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Box</source>
        <translation>Box</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Scale Bar</source>
        <translation>&amp;Maßstab</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Creates a scale bar that is displayed on the map canvas</source>
        <translation>Erzeugt eine Maßstabsleiste, die im Kartenbild angezeigt wird.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Decorations</source>
        <translation>&amp;Dekorationen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> feet/miles</source>
        <translation> Fuß/Meilen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> miles</source>
        <translation> Meilen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> mile</source>
        <translation> Meile</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> inches</source>
        <translation> Inches</translation>
    </message>
</context>
<context>
    <name>QgsScaleBarPluginGuiBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Scale Bar Plugin</source>
        <translation>Maßstabs Plugin</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Top Left</source>
        <translation>Oben links</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Top Right</source>
        <translation>Oben rechts</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Bottom Left</source>
        <translation>Unten links</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Bottom Right</source>
        <translation>Unten rechts</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Size of bar:</source>
        <translation>Größe des Maßstab:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Placement:</source>
        <translation>Platzierung:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Tick Down</source>
        <translation>Strich unten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Tick Up</source>
        <translation>Strich oben</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Box</source>
        <translation>Box</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Bar</source>
        <translation>Balken</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Select the style of the scale bar</source>
        <translation>Stil des Maßstab wählen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Colour of bar:</source>
        <translation>Farbe des Maßstab:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Scale bar style:</source>
        <translation>Maßstabsstil:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Enable scale bar</source>
        <translation>Aktiviere Maßstab</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Automatically snap to round number on resize</source>
        <translation>bei Grässenänderung automatisch auf runden Zahlen einstellen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Click to select the colour</source>
        <translation>Klick, um die Farbe auszuwählen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;This plugin draws a scale bar on the map. Please note the size option below is a &apos;preferred&apos; size and may have to be altered by QGIS depending on the level of zoom.  The size is measured according to the map units specified in the project properties.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Dieses Plugin zeichnet eine Maßstabsleiste auf die Karte. Bitte beachten Sie, dass die Größenoption eine &apos;bevorzugte&apos; Größe ist, die durch QGIS zoomstufenabhängig variiert wird. Die Größe wird in Karteneinheiten aus den  Projektinformationen errechnet.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
</context>
<context>
    <name>QgsSearchQueryBuilder</name>
    <message>
        <location filename="" line="0"/>
        <source>No matching features found.</source>
        <translation>Keine Treffer gefunden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Search results</source>
        <translation>Suchergebnisse:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Search string parsing error</source>
        <translation>Fehler im Suchstring.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No Records</source>
        <translation>Keine Einträge</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The query you specified results in zero records being returned.</source>
        <translation>Die definierte Abfrage gibt keine Treffer zurück.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Search query builder</source>
        <translation>Suche Query Builder</translation>
    </message>
</context>
<context>
    <name>QgsServerSourceSelect</name>
    <message>
        <location filename="" line="0"/>
        <source>Are you sure you want to remove the </source>
        <translation>Sind Sie sicher dass Sie die Verbindung und </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> connection and all associated settings?</source>
        <translation> alle damit verbunden Einstellungen löschen wollen?</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Confirm Delete</source>
        <translation>Löschen Bestätigen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>WMS Provider</source>
        <translation>WMS Anbinder</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Could not open the WMS Provider</source>
        <translation>Kann den WMS Provider nicht öffnen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Select Layer</source>
        <translation>Wähle Layer aus.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>You must select at least one layer first.</source>
        <translation>Es muss mindestens ein Layer ausgewählt werden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Could not understand the response.  The</source>
        <translation>Kann die Antwort nicht verstehen. Der</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>provider said</source>
        <translation>Provider sagte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>WMS proxies</source>
        <translation>WMS-Proxies</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;p&gt;Several WMS servers have been added to the server list. Note that the proxy fields have been left blank and if you access the internet via a web proxy, you will need to individually set the proxy fields with appropriate values.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Einige WMS-Server wurden zur Serverauswahlliste hinzugefügt. Die Proxy-Einstellungen wurden leer gelassen. Falls Sie einen Proxy benutzen, um auf das Internet zuzugreifen, müssen Sie die entsprechenden Werte noch in die Proxy-Felder eintragen.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Coordinate Reference System</source>
        <translation>Koordinatensystem</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>There are no available coordinate reference system for the set of layers you&apos;ve selected.</source>
        <translation>Es existiert kein Koordinatensystem für den ausgewählten Layer.</translation>
    </message>
</context>
<context>
    <name>QgsServerSourceSelectBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Add Layer(s) from a Server</source>
        <translation>Layer von einem Server hinzufügen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>C&amp;lose</source>
        <translation>Schließen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Alt+L</source>
        <translation>Alt+L</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Help</source>
        <translation>Hilfe</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Image encoding</source>
        <translation>Bildkodierung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Layers</source>
        <translation>Layer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>ID</source>
        <translation>ID</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Name</source>
        <translation>Name</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Title</source>
        <translation>Titel</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Abstract</source>
        <translation>Zusammenfassung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Add</source>
        <translation>&amp;Hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Server Connections</source>
        <translation>Serververbindungen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;New</source>
        <translation>&amp;Neu</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Delete</source>
        <translation>Löschen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Edit</source>
        <translation>Bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>C&amp;onnect</source>
        <translation>Verbinden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ready</source>
        <translation>Fertig</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Coordinate Reference System</source>
        <translation>Koordinatensystem</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Change ...</source>
        <translation>Verändere ...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Adds a few example WMS servers</source>
        <translation>Fügt einige Beispiel-WMS-Server hinzu.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add default servers</source>
        <translation>Standard-Server ergänzen</translation>
    </message>
</context>
<context>
    <name>QgsShapeFile</name>
    <message>
        <location filename="" line="0"/>
        <source>The database gave an error while executing this SQL:</source>
        <translation type="unfinished">Datenbankfehler während der Ausführung der SQL-Anweisung: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The error was:</source>
        <translation type="unfinished">Fehler war:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>... (rest of SQL trimmed)</source>
        <comment>




is appended to a truncated SQL statement</comment>
        <translation type="unfinished">... (Rest der Anweisung abgeschnitten)</translation>
    </message>
</context>
<context>
    <name>QgsSingleSymbolDialog</name>
    <message>
        <location filename="" line="0"/>
        <source>Solid Line</source>
        <translation>durchgängige Linie</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Dash Line</source>
        <translation>gestrichelte Linie</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Dot Line</source>
        <translation>gepunktete Linie</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Dash Dot Line</source>
        <translation>gestrichelt-gepunktete Linie</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Dash Dot Dot Line</source>
        <translation>gestrichelt-2mal-gepunktete Linie</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No Pen</source>
        <translation>keine Linie</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Solid Pattern</source>
        <translation>durchgängiges Muster</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Hor Pattern</source>
        <translation>Horiz Muster</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Ver Pattern</source>
        <translation>Vertik Muster</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cross Pattern</source>
        <translation>Kreuzmuster</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>BDiag Pattern</source>
        <translation>BDiag Muster</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>FDiag Pattern</source>
        <translation>FDiag Muster</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Diag Cross Pattern</source>
        <translation>Diag Kreuzmuster</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Dense1 Pattern</source>
        <translation>Dense1 Muster</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Dense2 Pattern</source>
        <translation>Dense2 Muster</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Dense3 Pattern</source>
        <translation>Dense3 Muster</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Dense4 Pattern</source>
        <translation>Dense4 Muster</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Dense5 Pattern</source>
        <translation>Dense5 Muster</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Dense6 Pattern</source>
        <translation>Dense6 Muster</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Dense7 Pattern</source>
        <translation>Dense7 Muster</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No Brush</source>
        <translation>Keine Füllung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Texture Pattern</source>
        <translation>Bildmuster</translation>
    </message>
</context>
<context>
    <name>QgsSingleSymbolDialogBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Single Symbol</source>
        <translation>Einfaches Symbol</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Size</source>
        <translation>Grösse</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Point Symbol</source>
        <translation>Punktsymbol </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Area scale field</source>
        <translation>Flächenmaßstabs Feld</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Rotation field</source>
        <translation>Rotationsfeld</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Style Options</source>
        <translation>Stiloption</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>...</source>
        <translation type="unfinished">...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Outline style</source>
        <translation>Umrandungsstil</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Outline color</source>
        <translation>Umrandungsfarbe
</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Outline width</source>
        <translation>Umrandungsbreite</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Fill color</source>
        <translation>Füllfarbe</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Fill style</source>
        <translation>Füllstil</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Label</source>
        <translation type="unfinished">Beschriftung</translation>
    </message>
</context>
<context>
    <name>QgsSnappingDialog</name>
    <message>
        <location filename="" line="0"/>
        <source>to vertex</source>
        <translation>zum Stützpunkt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>to segment</source>
        <translation>zum Segment</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>to vertex and segment</source>
        <translation>zum Stützpunkt und Segment</translation>
    </message>
</context>
<context>
    <name>QgsSnappingDialogBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Snapping options</source>
        <translation>Snapping Optionen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Layer</source>
        <translation type="unfinished">Layer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Mode</source>
        <translation type="unfinished">Modus</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Tolerance</source>
        <translation>Toleranz</translation>
    </message>
</context>
<context>
    <name>QgsSpit</name>
    <message>
        <location filename="" line="0"/>
        <source>Are you sure you want to remove the [</source>
        <translation>Soll die [</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>] connection and all associated settings?</source>
        <translation>] Verbindung und alle zugeordneten Einstellungen gelöscht werden?</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Confirm Delete</source>
        <translation>Löschen Bestätigen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> - Edit Column Names</source>
        <translation>- Spaltennamen bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The following Shapefile(s) could not be loaded:

</source>
        <translation>Die folgenden Shapedateien konnten nicht geladen werden:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>REASON: File cannot be opened</source>
        <translation>GRUND: Datei konnte nicht geöffnet werden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>REASON: One or both of the Shapefile files (*.dbf, *.shx) missing</source>
        <translation>GRUND: Eine oder beide Shapedateien (*.dbf, *.shx) fehlen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>General Interface Help:</source>
        <translation>Allgemeine Hilfe Schnittstelle:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>PostgreSQL Connections:</source>
        <translation>PostgreSQL Verbindungen:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>[New ...] - create a new connection</source>
        <translation>[Neu...] - Verbindung erstellen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>[Edit ...] - edit the currently selected connection</source>
        <translation>[Bearbeiten ...] - die momentan selektierte Verbindung bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>[Remove] - remove the currently selected connection</source>
        <translation>[Entfernen] - momentan selektierte Verbindung löschen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>-you need to select a connection that works (connects properly) in order to import files</source>
        <translation>- es muss eine Verbindung ausgewählt werden, die funktioniert (richtig verbindet) um Dateien zu importieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>-when changing connections Global Schema also changes accordingly</source>
        <translation>-bei Änderungen an den Verbindungen ändern die globalen Schemas dementsprechend </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Shapefile List:</source>
        <translation>Shapedateienliste:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>[Add ...] - open a File dialog and browse to the desired file(s) to import</source>
        <translation>[Hinzufügen ...] - Dateidialog öffnen und die gewünschten Importdateien auswählen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>[Remove] - remove the currently selected file(s) from the list</source>
        <translation>[Entfernen] - löscht die ausgewählten Dateien von der Liste</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>[Remove All] - remove all the files in the list</source>
        <translation>[Alles entfernen]  - löscht alle Dateien in der Liste</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>[SRID] - Reference ID for the shapefiles to be imported</source>
        <translation>[SRID] - Referenz ID für die zu importierenden Shapedateien</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>[Use Default (SRID)] - set SRID to -1</source>
        <translation>[Standart (SRID) verwenden] - setzt SRID auf -1</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>[Geometry Column Name] - name of the geometry column in the database</source>
        <translation>[Geometriespaltenname] - Name der Geometriespalte in der Datenbank</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>[Use Default (Geometry Column Name)] - set column name to &apos;the_geom&apos;</source>
        <translation>[Standard (Geometriespaltenname)] - setzt Spaltenname auf &apos;the_geom&apos;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>[Glogal Schema] - set the schema for all files to be imported into</source>
        <translation>[Globales Schema] setzt Schema für alle zu importierenden Dateien auf</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>[Import] - import the current shapefiles in the list</source>
        <translation>[Importieren] - Shapedateien in der Liste importieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>[Quit] - quit the program
</source>
        <translation>[Schliessen] - das Programm verlassen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>[Help] - display this help dialog</source>
        <translation>[Hilfe] - zeigt den Hilfedialog an</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Import Shapefiles</source>
        <translation>Shapedateien importieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>You need to specify a Connection first</source>
        <translation>Es muss zuerst eine Verbindung angegeben werden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Connection failed - Check settings and try again</source>
        <translation>Verbindung fehlgeschlagen - Bitte Einstellungen überprüfen und erneut versuchen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>You need to add shapefiles to the list first</source>
        <translation>Es müssen zuerst Shapedateien in die Liste eingefügt werden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Importing files</source>
        <translation>Dateien importieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cancel</source>
        <translation>Abbrechen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Progress</source>
        <translation>Fortschritt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Problem inserting features from file:</source>
        <translation>Problem beim Einfügen von Objekten aus der Datei:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Invalid table name.</source>
        <translation>Ungültiger Tabellenname.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No fields detected.</source>
        <translation>Keine Spalten erkannt.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The following fields are duplicates:</source>
        <translation>Die folgenden Spalten kommen doppelt vor:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Import Shapefiles - Relation Exists</source>
        <translation>Shapedatei importieren - Relation existiert</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The Shapefile:</source>
        <translation>Die Shapedatei:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>will use [</source>
        <translation>wird die Relation [</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>] relation for its data,</source>
        <translation>], die bereits vorhanden ist</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>which already exists and possibly contains data.</source>
        <translation>und evtl. Daten enthält, für ihre Daten benutzen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>To avoid data loss change the &quot;DB Relation Name&quot;</source>
        <translation>Um Datenverlust zu vermeiden sollte in der Dateiliste</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>for this Shapefile in the main dialog file list.</source>
        <translation>der &quot;DB-Relationsname&quot; geändert werden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Do you want to overwrite the [</source>
        <translation>Soll die Relation [</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>] relation?</source>
        <translation>] überschrieben werden?</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Use the table below to edit column names. Make sure that none of the columns are named using a PostgreSQL reserved word</source>
        <translation>In der Tabelle unten können die Spaltennamen bearbeitet werden. Stellen Sie sicher, dass keine Spalte wie ein in PostgreSQL reserviertes Wort benannt ist.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>File Name</source>
        <translation>Dateiname</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Feature Class</source>
        <translation>Objektklasse</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Features</source>
        <translation>Objekte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>DB Relation Name</source>
        <translation>DB-Relationsname</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Schema</source>
        <translation>Schema</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>New Connection</source>
        <translation>Neue Verbindung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add Shapefiles</source>
        <translation>Shapedateien hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Shapefiles (*.shp);;All files (*.*)</source>
        <translation>Shapefiles (*.shp);; Alle Dateien (*.*)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>PostGIS not available</source>
        <translation>PostGIS ist nicht verfügbar</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;p&gt;The chosen database does not have PostGIS installed, but this is required for storage of spatial data.&lt;/p&gt;</source>
        <translation>&lt;p&gt;In der gewählte Datenbank ist PostGIS nicht installiert. PostGIS wird jedoch zum Speichern von räumlichen Daten benötigt.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Checking to see if </source>
        <translation>Schaumermal...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;p&gt;Error while executing the SQL:&lt;/p&gt;&lt;p&gt;</source>
        <translation>&lt;p&gt;Fehler beim Ausführen des SQL:&lt;/p&gt;&lt;p&gt;</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&lt;/p&gt;&lt;p&gt;The database said:</source>
        <translation>&lt;/p&gt;&lt;p&gt;Die Datenbank meldete:</translation>
    </message>
</context>
<context>
    <name>QgsSpitBase</name>
    <message>
        <location filename="" line="0"/>
        <source>SPIT - Shapefile to PostGIS Import Tool</source>
        <translation>SPIT - Shapefile in PostGIS Import Tool</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>PostgreSQL Connections</source>
        <translation>PostgreSQL-Verbindungen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Remove</source>
        <translation>Entfernen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Shapefile List</source>
        <translation>Shapedateiliste</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Geometry Column Name</source>
        <translation>Geometriespaltenname</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>SRID</source>
        <translation>SRID</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Remove All</source>
        <translation>Alles entfernen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Global Schema</source>
        <translation>Globales Schema</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Shapefile to PostGIS Import Tool</source>
        <translation>Shapefile in PostGIS Import Tool</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add</source>
        <translation>Hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add a shapefile to the list of files to be imported</source>
        <translation>Der Liste der zu importierenden Dateien eine Shapedatei hinzufügen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Remove the selected shapefile from the import list</source>
        <translation>Gewähltes Shapefile aus der Importliste entfernen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Remove all the shapefiles from the import list</source>
        <translation>Alle Shapefiles aus der Importliste entfernen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Use Default SRID</source>
        <translation>Verwende Standard-SRID</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Set the SRID to the default value</source>
        <translation>SRID auf den Standardwert setzen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Use Default Geometry Column Name</source>
        <translation> Standard-Geometriespaltenname verwenden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Set the geometry column name to the default value</source>
        <translation>Geometriespaltenname auf den Standardwert setzen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>New</source>
        <translation>Neu</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Create a new PostGIS connection</source>
        <translation>Neue PostGIS Verbindung erstellen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Remove the current PostGIS connection</source>
        <translation>Aktuelle PostGIS Verbindung entfernen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Connect</source>
        <translation>Verbinden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Edit</source>
        <translation>Bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Edit the current PostGIS connection</source>
        <translation>Aktuelle PostGIS-Verbindung bearbeiten</translation>
    </message>
</context>
<context>
    <name>QgsSpitPlugin</name>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Import Shapefiles to PostgreSQL</source>
        <translation>Shapefiles in PostgreSQL &amp;importieren</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Import shapefiles into a PostGIS-enabled PostgreSQL database. The schema and field names can be customized on import</source>
        <translation>Importiert Shapefiles in eine PostgreSQL-Datenbank mit PostGIS-Aufsatz. Schema und die Feldnamen des Imports sind einstellbar.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Spit</source>
        <translation>&amp;Spit</translation>
    </message>
</context>
<context>
    <name>QgsUniqueValueDialogBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Form1</source>
        <translation>Formular1</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Classification Field:</source>
        <translation>Klassifizierungsfeld:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Delete class</source>
        <translation type="unfinished">Klasse löschen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Classify</source>
        <translation type="unfinished">Klassifizieren</translation>
    </message>
</context>
<context>
    <name>QgsVectorLayer</name>
    <message>
        <location filename="" line="0"/>
        <source>Could not commit the added features.</source>
        <translation>Hinzugefügte Objekte konnten nicht übernommen werden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No other types of changes will be committed at this time.</source>
        <translation>Es werden keine anderen Änderungen übernommen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Could not commit the changed attributes.</source>
        <translation>Die geänderten Attribute konnte nicht übernommen werden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>However, the added features were committed OK.</source>
        <translation>Die hinzugefügten Objekte wurden allerdings richtig übernommen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Could not commit the changed geometries.</source>
        <translation>Die geänderten Geometrien konnten nicht übernommen werden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>However, the changed attributes were committed OK.</source>
        <translation>Die geänderten Attribute wurden jedoch richtig übernommen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Could not commit the deleted features.</source>
        <translation>Die gelöschten Objekte konnte nicht übernommen werden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>However, the changed geometries were committed OK.</source>
        <translation>Die geänderten Geometrien wurden jedoch korrekt übernommen.</translation>
    </message>
</context>
<context>
    <name>QgsVectorLayerProperties</name>
    <message>
        <location filename="" line="0"/>
        <source>Transparency: </source>
        <translation>Transparenz: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Single Symbol</source>
        <translation>Einfaches Symbol</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Graduated Symbol</source>
        <translation>Abgestuftes Symbol</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Continuous Color</source>
        <translation>Fortlaufende Farbe</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Unique Value</source>
        <translation>Eindeutiger Wert</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>This button opens the PostgreSQL query builder and allows you to create a subset of features to display on the map canvas rather than displaying all features in the layer</source>
        <translation>Dieser Knopf öffnet den PostgreSQL-Query-Builder und ermöglicht, statt aller Objekte, eine Untermenge der Objekte auf dem Kartenfenster darzustellen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The query used to limit the features in the layer is shown here. This is currently only supported for PostgreSQL layers. To enter or modify the query, click on the Query Builder button</source>
        <translation>Die Abfrage zur Begrenzung der Anzahl der Objekte wird hier angezeigt. Dies wird im Moment nur bei PostgreSQL-Layern unterstützt. Klicken Sie auf auf &apos;Query Builder&apos;, um eine Abfrage einzugeben oder zu ändern</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Spatial Index</source>
        <translation>Räumlicher Index</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Creation of spatial index successfull</source>
        <translation>Erstellung des räumlichen Indexes erfolgreich</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Creation of spatial index failed</source>
        <translation>Erstellung des räumlichen Indexes fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>General:</source>
        <translation>Allgemein:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Storage type of this layer : </source>
        <translation>Datenspeicher dieses Layers: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Source for this layer : </source>
        <translation>Quelle dieses Layers: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Geometry type of the features in this layer : </source>
        <translation>Geometrietyp der Objekte dieses Layers: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The number of features in this layer : </source>
        <translation>Anzahl der Objekte dieses Layers: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Editing capabilities of this layer : </source>
        <translation>Bearbeitungsfähigkeit dieses Layers: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Extents:</source>
        <translation>Ausdehnung:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>In layer spatial reference system units : </source>
        <translation>In Einheiten des Referenzsystems dieses Layers: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>xMin,yMin </source>
        <translation>xMin,yMin </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> : xMax,yMax </source>
        <translation> : xMax,yMax </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>In project spatial reference system units : </source>
        <translation>In Einheiten des Projektreferenzsystems: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Layer Spatial Reference System:</source>
        <translation>Räumliches Referenzsystem des Layers:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Attribute field info:</source>
        <translation>Attribut info:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Field</source>
        <translation>Feld</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Type</source>
        <translation>Typ</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Length</source>
        <translation>Länge</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Precision</source>
        <translation>Genauigkeit</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Layer comment: </source>
        <translation>Layerkommentar: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Comment</source>
        <translation type="unfinished">Kommentar</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Default Style</source>
        <translation>Standardstil</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>QGIS Layer Style File (*.qml)</source>
        <translation>QGIS Layerstil Datei (*.qml)</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>QGIS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Unknown style format: </source>
        <translation>Unbekanntes Stilformat: </translation>
    </message>
</context>
<context>
    <name>QgsVectorLayerPropertiesBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Layer Properties</source>
        <translation>Layereigenschaften</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Legend type:</source>
        <translation>Legendentyp:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Symbology</source>
        <translation>Bezeichnungen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Transparency:</source>
        <translation>Transparenz:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>General</source>
        <translation>Allgemein</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Use scale dependent rendering</source>
        <translation>Massstabsabhängig zeichnen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Maximum 1:</source>
        <translation>Maximum 1:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Minimum 1:</source>
        <translation>Minimum 1:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Minimum scale at which this layer will be displayed. </source>
        <translation>Minimalmassstab, ab dem dieser Layer angezeigt wird.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Maximum scale at which this layer will be displayed. </source>
        <translation>Maximalmassstab, bis zu dem dieser Layer angezeigt wird.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Display name</source>
        <translation>Anzeigename</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Use this control to set which field is placed at the top level of the Identify Results dialog box.</source>
        <translation>Benutze diese Kontrollelemente, um das Attribut festzulegen, das zuoberst im  &apos;Identifizierungsergebnis&apos;-Dialog steht.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Spatial Reference System</source>
        <translation>Räumliches Referenzsystem</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Change</source>
        <translation>Wechseln</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Display field for the Identify Results dialog box</source>
        <translation>Anzeigeattribut für den &apos;Identifizierungsergebnis&apos;-Dialog</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>This sets the display field for the Identify Results dialog box</source>
        <translation>Dies setzt das Anzeigeattribut für den &apos;Identifizierungsergebnis&apos;-Dialog</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Display field</source>
        <translation>Anzeigeattribut</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Subset</source>
        <translation>Subset</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Query Builder</source>
        <translation>Query Builder</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Spatial Index</source>
        <translation>Räumlicher Index</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Create Spatial Index</source>
        <translation>Räumlichen Index erstellen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Create</source>
        <translation>Erstellen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Metadata</source>
        <translation>Metadaten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Labels</source>
        <translation>Beschriftungen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Display labels</source>
        <translation>Zeige Beschriftungen an</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Actions</source>
        <translation>Aktionen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Restore Default Style</source>
        <translation>Standardstil wiederherstellen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Save As Default</source>
        <translation>Als Standard speichern</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Load Style ...</source>
        <translation>Lade Stil ...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Save Style ...</source>
        <translation>Speicher Stil ...</translation>
    </message>
</context>
<context>
    <name>QgsVectorSymbologyWidgetBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Form2</source>
        <translation>Formular2</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Label</source>
        <translation>Beschriftung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Min</source>
        <translation>Min</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Max</source>
        <translation>Max</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Symbol Classes:</source>
        <translation>Symbolklassen:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Count:</source>
        <translation>Anzahl:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Mode:</source>
        <translation>Modus:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Field:</source>
        <translation>Feld:</translation>
    </message>
</context>
<context>
    <name>QgsWFSPlugin</name>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Add WFS layer</source>
        <translation>&amp;WFS-Layer hinzufügen</translation>
    </message>
</context>
<context>
    <name>QgsWFSProvider</name>
    <message>
        <location filename="" line="0"/>
        <source>unknown</source>
        <translation>unbekannt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>received %1 bytes from %2</source>
        <translation>%1 von %2 Bytes empfangen</translation>
    </message>
</context>
<context>
    <name>QgsWFSSourceSelect</name>
    <message>
        <location filename="" line="0"/>
        <source>Are you sure you want to remove the </source>
        <translation>Sind Sie sicher, dass Sie die </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source> connection and all associated settings?</source>
        <translation> Verbindung und alle damit verbundenen Einstellungen löschen wollen?</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Confirm Delete</source>
        <translation>Löschen bestätigen</translation>
    </message>
</context>
<context>
    <name>QgsWFSSourceSelectBase</name>
    <message>
        <location filename="" line="0"/>
        <source>Title</source>
        <translation>Titel</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Name</source>
        <translation>Name</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Abstract</source>
        <translation>Zusammenfassung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Coordinate Reference System</source>
        <translation>Koordinatensystem</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Change ...</source>
        <translation>Ändern ...</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Server Connections</source>
        <translation>Serververbindungen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;New</source>
        <translation>&amp;Neu</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Delete</source>
        <translation>Löschen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Edit</source>
        <translation>Bearbeiten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>C&amp;onnect</source>
        <translation>Verbinden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Add WFS Layer from a Server</source>
        <translation>WFS-Layer von Server hinzufügen</translation>
    </message>
</context>
<context>
    <name>QgsWmsProvider</name>
    <message>
        <location filename="" line="0"/>
        <source>Tried URL: </source>
        <translation>Versuchte URL: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>HTTP Exception</source>
        <translation>HTTP Ausnahme</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>WMS Service Exception</source>
        <translation>WMS-Service-Ausnahme</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>DOM Exception</source>
        <translation>DOM-Ausnahme</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Could not get WMS capabilities: %1 at line %2 column %3</source>
        <translation>Konnte die WMS-Capabilities nicht erfragen: %1 bei Linie %2, Spalte %3</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>This is probably due to an incorrect WMS Server URL.</source>
        <translation>Dies kommt wahrscheinlich durch eine falsche WMS-Server-URL zustande.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Could not get WMS capabilities in the expected format (DTD): no %1 or %2 found</source>
        <translation>Konnte die WMS-Capabilities nicht im erwarteten Format (DTD) erhalten: %1 oder %2 gefunden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Could not get WMS Service Exception at %1: %2 at line %3 column %4</source>
        <translation>Konnte die WMS-Service-Ausnahme bei %1 nicht interpretieren: %2 bei Linie %3, Spalte %4</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Request contains a Format not offered by the server.</source>
        <translation>Die Anfrage enthält ein Format, das nicht vom Server unterstützt wird.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Request contains a CRS not offered by the server for one or more of the Layers in the request.</source>
        <translation>Die Anfrage enthält ein Koordinatensystem (CRS), das für die angeforderten Layer nicht vom Server angeboten wird.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Request contains a SRS not offered by the server for one or more of the Layers in the request.</source>
        <translation>Anfrage enthält ein SRS, das nicht vom Server angeboten wird.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GetMap request is for a Layer not offered by the server, or GetFeatureInfo request is for a Layer not shown on the map.</source>
        <translation>GetMap-Anfrage ist für einen Layer, der nicht vom Server angeboten wird, oder GetFeatureInfo wurde für einen Layer angefordert, der nicht im Kartenfenster angezeigt wird.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Request is for a Layer in a Style not offered by the server.</source>
        <translation>Anfrage ist für einen Layer in einem Style, der nicht vom Server angeboten wird.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GetFeatureInfo request is applied to a Layer which is not declared queryable.</source>
        <translation>GetFeatureInfo wurde auf einen Layer angewendet, der als nicht abfragbar definiert ist.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>GetFeatureInfo request contains invalid X or Y value.</source>
        <translation>Get FeatureInfo Anfrage enthält ungültige X oder Y-Werte.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Request does not include a sample dimension value, and the server did not declare a default value for that dimension.</source>
        <translation>Anfrage enthält keinen beispielhaften Dimensionswert, und der Server selbst definiert auch keinen.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Request contains an invalid sample dimension value.</source>
        <translation>Anfrage enthält einen ungültigen beispielhaften Dimensionswert.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Request is for an optional operation that is not supported by the server.</source>
        <translation>Anfrage ist für eine optionale Operation, die der Server nicht unterstützt.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>(Unknown error code from a post-1.3 WMS server)</source>
        <translation>(Unbekannte Fehlermeldung eines post-1.3 WMS-Servers).</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>The WMS vendor also reported: </source>
        <translation>Der WMS-Betreiber sagt folgendes:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>This is probably due to a bug in the QGIS program.  Please report this error.</source>
        <translation>Dieses Verhalten kommt wahrscheinlich durch einen Bug in QGIS. Bitte melden Sie den Fehler bei den Entwicklern.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Server Properties:</source>
        <translation>Server-Eigenschaften:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Property</source>
        <translation>Eigenschaft</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Value</source>
        <translation>Wert</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>WMS Version</source>
        <translation>WMS Version</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Title</source>
        <translation>Titel</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Abstract</source>
        <translation>Zusammenfassung</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Keywords</source>
        <translation>Schlüsselworte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Online Resource</source>
        <translation>Online Quelle</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Contact Person</source>
        <translation>Kontaktperson</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Fees</source>
        <translation>Kosten</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Access Constraints</source>
        <translation>Zugangsbeschränkungen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Image Formats</source>
        <translation>Bildformate</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Identify Formats</source>
        <translation>Abfrageformat</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Layer Count</source>
        <translation>Anzahl der Layer</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Layer Properties: </source>
        <translation>Layereigenschaften: </translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Selected</source>
        <translation>Ausgewählt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Yes</source>
        <translation>Ja</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>No</source>
        <translation>Nein</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Visibility</source>
        <translation>Sichtbarkeit</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Visible</source>
        <translation>Sichtbar</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Hidden</source>
        <translation>Versteckt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>n/a</source>
        <translation>n/a</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Can Identify</source>
        <translation>Darf abgefragt werden</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Can be Transparent</source>
        <translation>Kann transparent sein</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Can Zoom In</source>
        <translation>Kann reingezoomt werden.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Cascade Count</source>
        <translation>Kaskadiere Anzahl</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Fixed Width</source>
        <translation>Feste Breite</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Fixed Height</source>
        <translation>Feste Höhe</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>WGS 84 Bounding Box</source>
        <translation>WGS 84 Bounding Box</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Available in CRS</source>
        <translation>Verfügbar in CRS</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Available in style</source>
        <translation>Verfügbar im Style</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Name</source>
        <translation>Name</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Value of (optional) UpdateSequence parameter in GetCapabilities request is equal to current value of service metadata update sequence number.</source>
        <translation>Wert in.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Value of (optional) UpdateSequence parameter in GetCapabilities request is greater than current value of service metadata update sequence number.</source>
        <translation>Wert in.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Layer cannot be queried.</source>
        <translation type="unfinished">Layer kann nicht abgefragt werden.</translation>
    </message>
</context>
<context>
    <name>QuickPrintGui</name>
    <message>
        <location filename="" line="0"/>
        <source>Portable Document Format (*.pdf)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>quickprint</source>
        <translation>Schnelldruck</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Unknown format: </source>
        <translation>Unbekanntes Format: </translation>
    </message>
</context>
<context>
    <name>QuickPrintGuiBase</name>
    <message>
        <location filename="" line="0"/>
        <source>QGIS Quick Print Plugin</source>
        <translation>QGIS Schnelldruck Plugin</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Quick Print</source>
        <translation>Schneller Druck</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Map Title e.g. ACME inc.</source>
        <translation>Kartentitel z.B. ACME inc.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Map Name e.g. Water Features</source>
        <translation>Kartenname z.B. Wasserobjekte</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Copyright</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Output</source>
        <translation type="unfinished">Ergebnis</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Use last filename but incremented.</source>
        <translation>Benutze zuletzt verwendeten Dateinamen aber erhöht.</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>last used filename but incremented will be shown here</source>
        <translation>zuletzt verwendeter aber erhöhter Dateiname wrd hier gezeigt</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Prompt for file name</source>
        <translation>Eingabeaufforderung für Dateiname</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Note: If you want more control over the map layout please use the map composer function in QGIS.</source>
        <translation>Bemerkung: Wenn Sie mehr Kontrolle über das Layout haben wollen, benutzen Sie bitte den QGIS Map Composer.</translation>
    </message>
</context>
<context>
    <name>QuickPrintPlugin</name>
    <message>
        <location filename="" line="0"/>
        <source>Quick Print</source>
        <translation>Schneller Druck</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Replace this with a short description of the what the plugin does</source>
        <translation type="unfinished">Diese Notiz mit einer kurzen Beschreibung, was das Plugin macht, ersetzen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;Quick Print</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>RepositoryDetailsDialog</name>
    <message>
        <location filename="" line="0"/>
        <source>Repository details</source>
        <translation>Repository Details</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Name:</source>
        <translation type="unfinished">Name:</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>URL:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>http://</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>[pluginname]GuiBase</name>
    <message>
        <location filename="" line="0"/>
        <source>QGIS Plugin Template</source>
        <translation type="unfinished">QGIS Plugin Vorlage</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>Plugin Template</source>
        <translation type="unfinished">Plugin Vorlage</translation>
    </message>
</context>
<context>
    <name>pluginname</name>
    <message>
        <location filename="" line="0"/>
        <source>Replace this with a short description of the what the plugin does</source>
        <translation>Diese Notiz mit einer kurzen Beschreibung, was das Plugin macht, ersetzen</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>[menuitemname]</source>
        <translation type="unfinished">[menuitemname]</translation>
    </message>
    <message>
        <location filename="" line="0"/>
        <source>&amp;[menuname]</source>
        <translation type="unfinished"></translation>
    </message>
</context>
</TS>
