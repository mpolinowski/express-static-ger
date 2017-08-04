var express = require('express');
var webUI720pGerRouter = express.Router();

/* ###################################### HD Series ###################################### */

/* GET HD WebUI page. */
webUI720pGerRouter.route('/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series', {
            title: 'INSTAR Web User Interface HD Series',
            ampimg: '/images/Search/QI_SearchThumb_WebUI_720p.jpg',
            headline: 'INSTAR Weboberfläche - kontrollieren Sie Ihre IP Kamera über Ihren Webbrowser',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li>',
            canonical: '/Web_User_Interface/720p_Series/',
            description: 'Nutzen Sie unser INSTAR Kamera Tool um die IP Ihrer IP HD Webcam zu ermitteln und rufen Sie diese Adresse in Ihrem Webbrowser auf um die Weboberfläche (WebUI) zu erreichen. Die WebUI ermöglicht es Ihnen alle Funktionen Ihrer 720p Sicherheitskamera zu konfigurieren.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* ###################################### HD Series Software ###################################### */

/* GET HD WebUI page. */
webUI720pGerRouter.route('/Software/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Software', {
            title: 'Software Menü',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_Software_Language.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: Software',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Software/">Software</a></li>',
            canonical: '/Web_User_Interface/720p_Series/Software/',
            description: '720p Weboberfläche - Ändern der Sprache, Neustarten, Zurücksetzen oder Laden Sie eine neue Web-UI Version oder Firmware auf Ihre Kamera.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/Software/Sprache/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Software_Language', {
            title: 'Software Menü :: Sprache',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_Software_Language.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: Software :: Language',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Software/">Software</a></li><li><a href="/Web_User_Interface/720p_Series/Software/Language/">Sprache</a></li>',
            canonical: '/Web_User_Interface/720p_Series/Software/Language/',
            description: '720p Weboberfläche - Ändern Sie Sprache der Weboberfläche zu Deutsch, Englisch, Französisch oder Chinesisch. Die Oberfläche wird automatisch in der Standard Sprache Ihres Betriebssystems geladen. Sollte diese Erkennung fehlschlagen, oder Sie eine andere Sprache für die WebUI wünschen, legen Sie dies bitte hier fest. Die Auswahl wird lokal auf Ihrem Rechner und nicht global auf der Kamera gespeichert.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/Software/Sicherung/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Software_Backup', {
            title: 'Software Menü :: Backup',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_Software_Backup.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: Software :: Backup',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Software/">Software</a></li><li><a href="/Web_User_Interface/720p_Series/Software/Backup/">Sicherung</a></li>',
            canonical: '/Web_User_Interface/720p_Series/Software/Backup/',
            description: '720p Weboberfläche - Sichern Sie hier die Konfiguration Ihrer Kamera, nachdem Sie alles eingestellt haben. Laden Sie die Sicherungsdatei herunter und benennen Sie sie so, dass Sie sie für eine spätere Wiederherstellung wiederfinden. Beachten Sie bitte, dass Firmware Updates manchmal Variablen und Funktionen hinzufügen und Ihre alten Backups damit unbrauchbar machen. Erstellen Sie daher nach jedem Update ein neues Backup.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/Software/Update/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Software_Update', {
            title: 'Software Menü :: Update',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_Software_Update.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: Software :: Update',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Software/">Software</a></li><li><a href="/Web_User_Interface/720p_Series/Software/Update/">Update</a></li>',
            canonical: '/Web_User_Interface/720p_Series/Software/Update/',
            description: '720p Weboberfläche - Die INSTAR Software Abteilung arbeitet konstant daran die Erfahrung mit unseren Produkten zu verbessern. Überprüfen Sie hier ob die Software Ihrer Kamera noch aktuell ist. Alternativ können Sie auch unseren DOWNLOAD BEREICH besuchen, um die neueste Software und deren Changelog zu finden.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/Software/Neustart_Werkseinstellungen/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Software_Reboot_Reset', {
            title: 'Software Menü :: Neustart & Reset',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_Software_Reboot_Reset.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: Software :: Reset',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Software/">Software</a></li><li><a href="/Web_User_Interface/720p_Series/Software/Reboot_Reset/">Neustart & Reset</a></li>',
            canonical: '/Web_User_Interface/720p_Series/Software/Reboot_Reset/',
            description: '720p Weboberfläche - Hier können Sie die Kamera neustarten oder in den Werkszustand zurückversetzen. Es wird empfohlen die Kamera nicht einfach abzustecken oder über den Hardware Reset zurückzusetzen, da dies das Betriebssystem (aber auch die SD Karte) schädigen kann. Nutzen Sie den Hardware Reset nur dann, wenn Sie den Zugriff auf die Weboberfläche der Kamera verloren haben.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* ###################################### HD Series Network ###################################### */

/* GET HD WebUI page. */
webUI720pGerRouter.route('/Netzwerk/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network', {
            title: 'Netzwerk Menü',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_Network_IP_Configuration.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: Netzwerk',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Network/">Netzwerk</a></li>',
            canonical: '/Web_User_Interface/720p_Series/Network/',
            description: '720p Weboberfläche - Ändern Sie die IP Konfigurationen oder WLAN Einstellungen, oder verbinden Sie Ihr Smartphone durch Scannen des DDNS, P2P oder Push Service QR Codes mit unserer Smartphone App.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/Netzwerk/IP_Konfiguration/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network_IP_Configuration', {
            title: 'Netzwerk Menü :: IP Konfiguration',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_Network_IP_Configuration.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: Netzwerk :: IP Konfiguration',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Network/">Netzwerk</a></li><li><a href="/Web_User_Interface/720p_Series/Network/IP_Configuration/">IP Konfiguration</a></li>',
            canonical: '/Web_User_Interface/720p_Series/Network/IP_Configuration/',
            description: '720p Weboberfläche - Ändern Sie die IP Adresse, das Gateway und den DNS Server Ihrer Kamera - all diese Einstellungen werden in der Regel vom Installation Wizard gesetzt und müssen nicht mehr angepasst werden. Sie werden jedoch ggf. den HTTP Port der Kamera anpassen müssen, um diese über das Internet zu erreichen. Der hier aufgeführte RTSP Port ist der RTSP Streaming Port der Kamera.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/Netzwerk/WLAN/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network_WiFi', {
            title: 'Netzwerk Menü :: WLAN',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_Network_WLAN.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: Netzwerk :: WLAN',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Network/">Netzwerk</a></li><li><a href="/Web_User_Interface/720p_Series/Network/WiFi/">WLAN</a></li>',
            canonical: '/Web_User_Interface/720p_Series/Network/WiFi/',
            description: '720p Weboberfläche - Die WLAN Verbindung kann sehr einfach per WPS eingerichtet werden oder über den Erstinstallation Assistenten. Für die manuelle Einrichtung steht Ihnen hier ein WLAN Scanner zur Verfügung. Der Scanner gibt Ihnen auch eine Übersicht über die Empfangsstärke des Signals und ermöglicht es Ihnen so einen optimalen Platz für Ihre Kamera zu finden.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/Netzwerk/DDNS/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network_DDNS', {
            title: 'Netzwerk Menü :: DDNS',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_Network_DDNS.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: Netzwerk :: DDNS',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Network/">Netzwerk</a></li><li><a href="/Web_User_Interface/720p_Series/Network/DDNS/">DDNS</a></li>',
            canonical: '/Web_User_Interface/720p_Series/Network/DDNS/',
            description: '720p Weboberfläche - Sie haben 2 Möglichkeiten auf die Kamera über das Internet zuzugreifen - der einfach Weg nennt sich P2P. Der einzige Weg, der Ihnen einen Vollzugriff auf die Kamera gibt, nennt sich DDNS. Die DDNS oder Internet Adresse erlaubt Ihnen den Zugriff auf die WebUI der Kamera von unterwegs.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/Netzwerk/P2P/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network_P2P', {
            title: 'Netzwerk Menü :: P2P',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_Network_P2P.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: Netzwerk :: P2P',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Network/">Netzwerk</a></li><li><a href="/Web_User_Interface/720p_Series/Network/P2P/">P2P</a></li>',
            canonical: '/Web_User_Interface/720p_Series/Network/P2P/',
            description: '720p Weboberfläche - Der P2P Zugriff erlaubt Ihnen den Zugriff auf den Livestream der Kamera über unsere iOS oder Android App. Scannen Sie einfach den P2P QR Code ein und fertig! Der QR Code auf der Kamera funktioniert nur solange, wie Sie das Standard Login auf der Kamera haben (ändern Sie dieses bitte sofort). Der QR Code hier wird dynamisch generiert und beinhaltet immer alle aktuellen Daten der Kamera.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/Netzwerk/UPnP/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network_UPnP', {
            title: 'Netzwerk Menü :: UPnP',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_Network_UPnP.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: Netzwerk :: UPnP',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Network/">Netzwerk</a></li><li><a href="/Web_User_Interface/720p_Series/Network/UPnP/">UPnP</a></li>',
            canonical: '/Web_User_Interface/720p_Series/Network/UPnP/',
            description: '720p Weboberfläche - Der UPnP Standard sollte unser Leben einfacher machen. Jeder Port der öffentlich verfügbar sein muss für den externen Zugriff, sollte automatisch durchgeleitet werden. Das würde den DDNS Zugriff sehr vereinfachen...doch funktioniert dieser Standard häufig nicht und wird von System Administratoren oft - aus gutem Grund - als gefährlich eingestuft. Wir empfehlen daher die manuelle Portweiterleitung für den DDNS Zugriff zu nutzen.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/Netzwerk/Push_Dienst/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network_Push_Service', {
            title: 'Netzwerk Menü :: Push Service',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_Network_Push.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: Netzwerk :: Push Dienst',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Network/">Netzwerk</a></li><li><a href="/Web_User_Interface/720p_Series/Network/Push_Service/">Push Dienst</a></li>',
            canonical: '/Web_User_Interface/720p_Series/Network/Push_Service/',
            description: '720p Weboberfläche - Ihre Kamera kann Sie per Email benachrichtigen, wenn ein Alarm ausgelöst wurde. Eine Push Benachrichtigung hat die gleiche Funktion, ist aber um einiges schneller! Aktivieren Sie den Push Dienst in unserer Smartphone App InstarVision für iOS und Android Geräte.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* ###################################### HD Series System ###################################### */

/* GET HD WebUI page. */
webUI720pGerRouter.route('/System/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System', {
            title: 'System Menü',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_System_Info.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: System',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/System/">System</a></li>',
            canonical: '/Web_User_Interface/720p_Series/System/',
            description: '720p Weboberfläche - Ändern Sie die Systemeinstellungen der Kamera oder stellen Sie Status & IR LEDs und das Schwenk- und Neigungsverhalten Ihrer Kamera ein.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/System/Info/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_Info', {
            title: 'System Menü :: Info',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_System_Info.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: System :: Info',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/System/">System</a></li><li><a href="/Web_User_Interface/720p_Series/System/Info/">Info</a></li>',
            canonical: '/Web_User_Interface/720p_Series/System/Info/',
            description: '720p Weboberfläche - Das Info Menü stellt eine Übersicht über wichtige System Variablen dar und soll Ihnen beim Lösen von Problemen mit der Kamera helfen. Der Zugriff über Ihre DDNS Adresse funktioniert nicht? Überprüfen Sie hier den DDNS Status (dieser muss erfolgreich sein) und der UPnP Status (sollte in den meisten Fällen deaktiviert sein). Um die DDNS Adresse als Fehlerquelle auszuschließen, können Sie auch über ihre WAN IP (anstelle der DDNS Adresse) auf die Kamera zugreifen - sollte es danach immer noch nicht gehen, ist vermutlich die Port Weiterleitung der Schuldige.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/System/Datum_Uhrzeit/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_Date_Time', {
            title: 'System Menü :: Date & Time',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_System_Date_Time.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: System :: Datum & Uhrzeit',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/System/">System</a></li><li><a href="/Web_User_Interface/720p_Series/System/Date_Time/">Datum & Uhrzeit</a></li>',
            canonical: '/Web_User_Interface/720p_Series/System/Date_Time/',
            description: '720p Weboberfläche - Ihre Kamera wird automatisch versuchen einen sogenannten NTP Server zu kontaktieren um die interne Zeit einzustellen. Es wird empfohlen diesen Dienst aktiviert zu lassen. Wenn Ihre Kamera jedoch nicht mit dem Internet verbunden ist, können Sie die Zeit aber auch mit Ihrem Computer synchronisieren, wenn Sie auf die Kamera zugreifen. Beachten Sie bitte, dass Sie dies regelmäßig durchführen müssen, um die Zeit auf der Kamera zu halten.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/System/Benutzer/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_User', {
            title: 'System Menü :: User',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_System_User.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: System :: Benutzer',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/System/">System</a></li><li><a href="/Web_User_Interface/720p_Series/System/User/">Benutzer</a></li>',
            canonical: '/Web_User_Interface/720p_Series/System/User/',
            description: '720p Weboberfläche - Ihre Kamera über 3 Benutzerebenen mit zunehmenden Beschränkungen beim Kamerazugriff. Der Administrator (admin), der Benutzer (user) und der Gast (guest) und einem Kennwort für alle Zugänge - instar. Bitte ändern Sie dieses bevor Sie Ihre Kamera online verfügbar machen. Vergessen Sie bitte nicht, dass dieses Kennwort für alle drei Zugänge geändert werden sollte. Um dennoch ohne eine Kennwortabfrage auf den RTSP Stream zuzugreifen, können Sie die Authentifizierung nur für diesen Stream deaktivieren.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/System/Status_LED/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_Status_LED', {
            title: 'System Menü :: Status LED',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_System_Status_LED.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: System :: Status LED',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/System/">System</a></li><li><a href="/Web_User_Interface/720p_Series/System/Status_LED/">Status LED</a></li>',
            canonical: '/Web_User_Interface/720p_Series/System/Status_LED/',
            description: '720p Weboberfläche - Hat Ihr Kameramodell eine Status-LED die durchgehend blinkend die Netzwerkverbindung signalisiert? Dies ist sehr sinnvoll während der Einrichtung. Kann aber sehr schnell störend werden - besonders wenn es dunkel wird. Wenn Sie die LED nicht benötigen um Ihre Netzwerkverbindung zu troubelshooten oder um Personen darauf aufmerksam zu machen, dass sie aufgenommen werden, können Sie die LED hier einfach deaktivieren.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/System/IR_LEDs/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_IR_LED', {
            title: 'System Menü :: IR LED',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_System_IR_LEDs.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: System :: IR LEDs',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/System/">System</a></li><li><a href="/Web_User_Interface/720p_Series/System/IR_LED/">IR LED</a></li>',
            canonical: '/Web_User_Interface/720p_Series/System/IR_LED/',
            description: '720p Weboberfläche - Die IR LEDs Ihrer Kamera werden automatisch durch einen internen Helligkeitssensor bei Dunkelheit aktiviert und wieder deaktiviert, sobald es wieder hell wird. Wenn Sie die Kamera hinter einer reflektierenden Scheibe verwenden möchten, oder z.B. die Kamera als Wetter-Cam in den Himmel richten und somit keine Nachtausleuchtung benötigen, können Sie die LEDs hier einfach deaktivieren. Beachten Sie bitte, dass der IRcut Filter damit permanent vor dem Objektiv steht und Sie somit auch keine externen IR Scheinwerfer einsetzen können. Eine Ausnahme - mit einem kleinen Trick - ist das Kameramodell IN-5907HD.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/System/ONVIF/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_ONVIF', {
            title: 'System Menü :: ONVIF',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_System_ONVIF.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: System :: ONVIF',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/System/">System</a></li><li><a href="/Web_User_Interface/720p_Series/System/ONVIF/">ONVIF</a></li>',
            canonical: '/Web_User_Interface/720p_Series/System/ONVIF/',
            description: '720p Weboberfläche - Die Industrie für IP Überwachungslösungen hat ein Standard Protokoll mit dem Namen ONVIF definiert, das es IP Überwachungskameras erlaubt mit Netzwerk Aufnahmegeräten (NVR) zu kommunizieren. Den dafür benötigten Service können Sie hier aktivieren oder deaktivieren, als auch den Netzwerk-Port für die Kommunikation festlegen.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/System/PTZ/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_PTZ', {
            title: 'System Menü :: PTZ',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_System_PTZ.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: System :: PTZ',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/System/">System</a></li><li><a href="/Web_User_Interface/720p_Series/System/PTZ/">PTZ</a></li>',
            canonical: '/Web_User_Interface/720p_Series/System/PTZ/',
            description: '720p Weboberfläche - Wenn Ihre Kamera dreh- und schwenkbar ist, können Sie hier die Kalibrierungsfahrt beim Kamerastart deaktivieren (deaktiviert auch gleich die speicherbaren Positionen!). Lassen Sie Ihre Kamera nach dem Neustart eine bestimmte Position anfahren. Oder beschränken Sie die Bewegung des Kamerakopfes in einer der vier Richtungen um die Privatsphäre Ihres Nachbarn zu achten.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/System/PTZ_Tour/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_PTZ_Tour', {
            title: 'System Menü :: PTZ Tour',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_System_PTZ_Tour.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: System :: PTZ Tour',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/System/">System</a></li><li><a href="/Web_User_Interface/720p_Series/System/PTZ_Tour/">PTZ Tour</a></li>',
            canonical: '/Web_User_Interface/720p_Series/System/PTZ_Tour/',
            description: '720p Weboberfläche - Programmieren Sie ein Kamera PTZ Tour um die Kamera automatisch zwischen verschiedenen gespeicherten Positionen wechseln zu lassen. Beachten Sie bitte, dass die Kamera nicht für ein dauerhaftes Schwenken ausgelegt ist. Sie können daher maximal 50 Durchläufe aktivieren. Durch die einstellbaren Verweildauern (bis 43200s = 12h) an den Positionen der Tour, können Sie aber z.B. die Tour nutzen um eine Tag und Nacht Position für die Kamera festzulegen.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/System/System_Logbuch/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_System_Log', {
            title: 'System Menü :: System Log',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_System_Log.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: System :: System Log',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/System/">System</a></li><li><a href="/Web_User_Interface/720p_Series/System/System_Log/">System Log</a></li>',
            canonical: '/Web_User_Interface/720p_Series/System/System_Log/',
            description: '720p Weboberfläche - Nutzen Sie das Log um Fehlerquellen auf die Schliche zu kommen. Sie erhalten keine Alarm Emails mehr, die SMTP Server Daten scheinen aber noch zu funktionieren? Schauen Sie im Log nach, ob überhaupt noch Alarme ausgelöst werden. Sie erhalten kontinuierlich Alarmbenachrichtigungen, obwohl Sie testweise schon einmal die Bewegungserkennung ganz deaktiviert haben? Überprüfen Sie im Log was den Alarm auslöst. Ist eventuell der Audio Alarm aktiv? Oder kommt der Trigger vom Alarmeingang der Kamera?',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* ###################################### HD Series Multimedia ###################################### */

/* GET HD WebUI page. */
webUI720pGerRouter.route('/Multimedia/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Multimedia', {
            title: 'Multimedia Menü',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_Multimedia_Video.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: Multimedia',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Multimedia/">Multimedia</a></li>',
            canonical: '/Web_User_Interface/720p_Series/Multimedia/',
            description: '720p Weboberfläche - Stellen Sie die Video Qualität und Audiolautstärke Ihrer Kamera ein. Die Bildeinstellungen erlauben Veränderungen in Kontrast, Sättigung und Helligkeit Ihrer Kamera.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/Multimedia/Audio/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Multimedia_Audio', {
            title: 'Multimedia Menü :: Audio',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_Multimedia_Audio.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: Multimedia :: Audio',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/720p_Series/Multimedia/Audio/">Audio</a></li>',
            canonical: '/Web_User_Interface/720p_Series/Multimedia/Audio/',
            description: '720p Weboberfläche - Hier können Sie die Verstärkung des Audiosignals für den Audioeingang und Audioausgang festlegen. Dies betrifft entweder extern angeschlossene Mikrofone und Lautsprecher an der Kamera, oder, wenn Ihr Kameramodell über ein Mikrofon und Lautsprecher verfügt, die interne Hardware. Alternativ können Sie den Audiostream auch komplett deaktivieren. Der Alarmton ist eine Audiodatei, die abgespielt wird sobald eine Alarm ausgelöst wird. Dies ist nicht zu verwechseln mit dem Audio Alarm, der das Mikrofon der Kamera nutzt um einen Alarm auszulösen, sobald etwas lautes in der Nähe der Kamera geschieht. Beachten Sie bitte, dass die hier eingestellte Lautstärke für den Audioeingang (durch das Mikrofon an der Kamera) mit in die Empfindlichkeit des Audio Alarms einfließt - der Audioalarm ist umso empfindlicher, desto höher seine Empfindlichkeit im Audio Alarm Overlay eingestellt wird UND desto höher die Verstärkung des Audioeingangs hier gesetzt wird.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/Multimedia/Video/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Multimedia_Video', {
            title: 'Multimedia Menü :: Video',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_Multimedia_Video.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: Multimedia :: Video',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/720p_Series/Multimedia/Video/">Video</a></li>',
            canonical: '/Web_User_Interface/720p_Series/Multimedia/Video/',
            description: '720p Weboberfläche - Die Video Einstellungen erlauben Ihnen die Qualität der 3 h.264 Videostreams und des MJPG Streams der Kamera einzuregeln. Beachten Sie bitte, dass hohe Qualitätseinstellungen auch zu hohen Bandbreitenanforderungen führen und die Grafikkarte des Zugreifenden Rechners belasten. Die Einstellungen, die Sie hier wählen, sollten immer ein Kompromiss sein aus Bildqualität und der Anforderung, dass Sie zur jeder Zeit einen flüssigen Videostream erhalten möchten, wenn Sie auf die Kamera zugreifen. Sie haben hier noch die Möglichkeit das benutzte Video Plugin für die Videowiedergabe festzulegen und den MJPEG Stream zwischen einen vollwertigen MJPEG Stream und einem pseudo MJEPG Stream umzuschalten.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/Multimedia/Bildeinstellungen/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Multimedia_Image', {
            title: 'Multimedia Menü :: Image',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_Multimedia_Image.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: Multimedia :: Bildeinstellungen',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/720p_Series/Multimedia/Image/">Bildeinstellungen</a></li>',
            canonical: '/Web_User_Interface/720p_Series/Multimedia/Image/',
            description: '720p Weboberfläche - Hier können Sie die Bildparameter, wie Helligkeit, Sättigung, Kontrast, Belichtung (Shutter) und Schärfe, einstellen. Die Funktion zum Drehen&Spiegeln erlaubt es Ihnen ein aufrechtes Bild zu erhalten, wenn Sie die Kamera über Kopf montieren. Der Kameraname und Zeitstempel, der Ihnen im Livevideo angezeigt wird, kann hier ebenfalls angepasst werden. Beachten Sie bitte, das ein Ändern des Kameranamen einen Neustart der Kamera benötigt.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* ###################################### HD Series Alarm ###################################### */

/* GET HD WebUI page. */
webUI720pGerRouter.route('/Alarm/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm', {
            title: 'Alarm Menü',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_Alarm_Actions.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: Alarm',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/">Alarm</a></li>',
            canonical: '/Web_User_Interface/720p_Series/Alarm/',
            description: '720p Weboberfläche - Aktivieren Sie die Bewegungs- und Audioerkennung im Alarmfall - wie Video Aufnahmen, E-Mail Benachrichtigungen oder FTP Upload.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/Alarm/Bereiche/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_Areas', {
            title: 'Alarm Menü :: Bereiche',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_Alarm_Areas.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: Alarm :: Bereiche',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/Areas/">Bereiche</a></li>',
            canonical: '/Web_User_Interface/720p_Series/Alarm/Areas/',
            description: '720p Weboberfläche - Die Alarmbereiche bestimmen die Bildbereiche, die für die interne, softwarebasierte Bewegungserkennung der Kamera herangezogen wird. Sie können bis zu vier Alarmbereiche einzeichnen - aktivieren Sie einfach einen der 4 Bereiche und zeichnen sie diesen in den gewünschten Bildausschnitt ein, indem Sie die linke Maustaste gedrückt halten und die Maus bewegen. Der Schwellenwert für ein Alarmereignis kann über die Empfindlichkeit festgelegt werden - von sehr unempfindlich (Wert = 0) bis sehr empfindl ich (Wert = 100). Die Empfindlichkeit wird darüber hinaus von der Größe des Bereiches bestimmt. Je kleiner der Bereich, desto mehr Fläche nimmt eine Änderung im Bild prozentual ein. Wenn Sie eine hohe Empfindlichkeit brauchen, setzten Sie viele kleine Alarmbereiche. Wenn Sie zu viele Fehlalarme erhalten, ist es besser einen großen Bereich aufzuziehen.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/Alarm/Privat_Maske/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_Privacy_Mask', {
            title: 'Alarm Menü :: Privacy Mask',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_Multimedia_Privat.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: Alarm :: Privatsphäre',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/Privacy_Mask/">Privatsphäre</a></li>',
            canonical: '/Web_User_Interface/720p_Series/Alarm/Privacy_Mask/',
            description: '720p Weboberfläche - Die Privatsphäre Maske erlaubt es Ihnen Bereiche, die Sie nicht überwachen dürfen im Video auszuschwärzen. Wenn Sie z.B. Ihren Hauseingang überwachen und einen Teil der öffentlichen Straße im Bild haben, können Sie diesen Bereich aus dem Videobild entfernen. Beachten Sie bitte, dass die Privatsphären Maske nicht von der Funktion zum Drehen und Spiegeln des Videobildes erfasst wird. Wenn Sie Ihre Kamera über Kopf montiert haben, müssen Sie zuerst das Bild wieder richtig herum drehen und spiegeln, die Masken einzeichnen und das Bild danach wieder aufrichten. Sie können bis zu 4 Masken einzeichnen - aktivieren Sie einfach eine der 4 Masken und zeichnen sie diese in den gewünschten Bildausschnitt ein, indem Sie die linke Maustaste gedrückt halten und die Maus bewegen.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/Alarm/Aktionen/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_Actions', {
            title: 'Alarm Menü :: Actions',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_Alarm_Actions.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: Alarm :: Aktionen',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/Actions/">Aktionen</a></li>',
            canonical: '/Web_User_Interface/720p_Series/Alarm/Actions/',
            description: '720p Weboberfläche - Bestimmen Sie hier welche Aktionen die Kamera ausführen soll, wenn ein Alarmereignis ausgelöst wurde. Alarme können ausgelöst werden durch die interne Bewegungserkennung der Kamera, durch den Audio Alarm oder durch einen externen Sensor. Sie können Ihre Kamera anweisen Ihnen eine Email (mit Schnappschüssen) zu senden oder Bilder auf der internen SD Karte abzulegen, bzw. auf den FTP Server hochzuladen. Stellen Sie bitte sicher, dass Sie einen SMTP Server hinterlegt haben, bevor Sie den Email Versand aktivieren. Auch für den FTP Versand muss zuerst ein FTP Server hinterlegt sein. Sollte die Option zum Speichern auf der internen SD Karte nicht auswählbar sein, müsste die interne SD Karte überprüft werden.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/Alarm/Zeitplan/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_Schedule', {
            title: 'Alarm Menü :: Schedule',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_Alarm_Schedule.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: Alarm :: Zeitplan',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/Schedule/">Zeitplan</a></li>',
            canonical: '/Web_User_Interface/720p_Series/Alarm/Schedule/',
            description: '720p Weboberfläche - Hier können Sie die Zeitfenster festlegen in dem die Bewegungserkennung der Kamera für aktivierte Alarmbereiche aktiv sein soll. Beachten Sie bitte, dass dieser Zeitplan auch für die Alarmauslösung durch den Audio Alarm oder durch einen externen Sensor regelt. Jedes blaue Quadrat entspricht dabei 30 Minuten, in denen der Alarm scharfgestellt ist. Stellen Sie bitte sicher, dass in der Kamera die richtige Zeitzone und der Wert für die Sommerzeit gesetzt wurde bevor Sie den Zeitplan aktivieren.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/Alarm/SMTP_Server/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_SMTP_Server', {
            title: 'Alarm Menü :: SMTP Server',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_Alarm_SMTP_Server.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: Alarm :: SMTP Server',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/SMTP_Server/">SMTP Server</a></li>',
            canonical: '/Web_User_Interface/720p_Series/Alarm/SMTP_Server/',
            description: '720p Weboberfläche - Um den Email Versand nutzen zu können, müssen Sie in der Kamera die Zugangsdaten zum Emailausgangsserver Ihres Anbieters hinterlegen. Sollten Sie diese nicht zur Hand haben, können Sie einfach die INSTAR Vorauswahl nutzen. Wählen Sie dafür einfach den INSTAR SMTP Server aus der Vorauswahl und bestätigen Sie die Eingabe. Ihre persönliche Empfänger Adresse können Sie dann im Email Menü hinterlegen. Mit dieser Einrichtung wird die Kamera Benachrichtigungs-Emails - TLS Verschlüsselt - über den, in Deutschland stehenden, INSTAR Server an Ihre persönliche Email Adresse senden. INSTAR führt dabei keine Datenspeicherung durch, sondern leitet die Emails einfach weiter.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/Alarm/Email/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_Email', {
            title: 'Alarm Menü :: Email',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_Alarm_Email.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: Alarm :: Email',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/Email/">Email</a></li>',
            canonical: '/Web_User_Interface/720p_Series/Alarm/Email/',
            description: '720p Weboberfläche - Im Email Menü können Sie die Absender und Ihre Empfänger Adresse für die Email Benachrichtigung hinterlegen. Der Absender muss entsprechend des gewählten SMTP Accounts gesetzt werden. Beachten Sie bitte, dass einige Email Anbieter es nicht erlauben, wenn Absender und Empfänger Email gleich gewählt werden! Als Empfänger können Sie mehrere Email Adressen, getrennt durch ein Semikolon gesetzt werden. Es ist empfohlen auch einen Betreff und Email Text (max 64 Zeichen) einzutragen, da leere Emails ggf. an Spam-Wächtern hängen bleiben.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/Alarm/FTP/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_FTP', {
            title: 'Alarm Menü :: FTP',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_Alarm_FTP.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: Alarm :: FTP',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/FTP/">FTP</a></li>',
            canonical: '/Web_User_Interface/720p_Series/Alarm/FTP/',
            description: '720p Weboberfläche - Um den FTP Upload zu nutzen, müssen Sie zuerst einen FTP Server und Ihre Login Daten hinterlegen. Sie können z.B. Ihren Router als Empfänger des FTP Uploads einrichten - in diesem Fall können Sie einfach die Router IP Adresse (z.B. 192.168.178.1) als FTP Server Adresse eintragen. Der Standard FTP Port ist 21 und der Standard Modus ist passiv (PASV). Beachten Sie bitte, dass es manche FTP Server (z.B. Telekom Speedport) es nicht erlauben, für jeden Tag einen neunen Ordner anzulegen.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/Alarm/Audio_Alarm/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_Audio_Alarm', {
            title: 'Alarm Menü :: Audio Alarm',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_Alarm_Audio_Alarm.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: Alarm :: Audio Alarm',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/Audio_Alarm/">Audio Alarm</a></li>',
            canonical: '/Web_User_Interface/720p_Series/Alarm/Audio_Alarm/',
            description: '720p Weboberfläche - Der Audio Alarm nutzt das Mikrofon der Kamera um bei einem lauten Geräusch einen Alarm auslösen zu können. Diese Alarmereignisse werden genauso behandelt, wie die Ereignisse der Bewegungserkennung und führen zu der Auslösung der von Ihnen festgelegten Alarm Aktionen. Beachten Sie bitte, dass die Empfindlichkeit dieser Detektion sowohl von der hier eingestellten Empfindlichkeit, als auch der eingestellten Lautstärke des Audio-Eingangs in der Multimedia Sektion der Weboberfläche.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/Alarm/Alarmserver/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_Alarmserver', {
            title: 'Alarm Menü :: Alarmserver',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_Alarm_Alarmserver.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: Alarm :: Alarmserver',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/Alarmserver/">Alarmserver</a></li>',
            canonical: '/Web_User_Interface/720p_Series/Alarm/Alarmserver/',
            description: '720p Weboberfläche - Senden Sie, im Falle eines Alarms, einen HTTP GET Befehl an einen Alarmserver (Hausautomatisierung, Raspberry Pi, usw.) um dort eine Funktion zu starten.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/Alarm/SD_Karte/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_SD_Card', {
            title: 'Alarm Menü :: SD Card',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_Alarm_SD_Card.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: Alarm :: SD Karte',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/SD_Card/">SD Karte</a></li>',
            canonical: '/Web_User_Interface/720p_Series/Alarm/SD_Card/',
            description: '720p Weboberfläche - Wählen Sie ob Sie die SD Karte auswerfen oder Formatieren möchten und bestätigen Sie die Eingabe. Es ist immer empfohlen die SD Karte zuerst auszuwerfen, bevor Sie sie aus der Kamera entfernen. Gerade wenn die Kamera eine Aufnahme durchführt während die Stromversorgung gekappt wird, kann es zu Fehlern im Dateisystem kommen. Sollte die SD Karte beschädigt werden, wird das Betriebsysstem versuchen die SD Karte zu reparieren und es kann einige Minuten dauern, bis die SD Karte wieder verfügbar ist. Sollte die SD Karte auch nach einiger Zeit noch nicht erreichbar sein, können Sie probieren die Karte zu formatieren. Sollte die Karte ausgeworfen werden, wird das Betriebssystem versuchen Sie nach einiger Zeit wieder automatisch zu mounten.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* ###################################### HD Series Recording ###################################### */

/* GET HD WebUI page. */
webUI720pGerRouter.route('/Videoaufnahme/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Recording', {
            title: 'Recording Menü',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_Recording_Video.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: Videoaufnahme',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Recording/">Videoaufnahme</a></li>',
            canonical: '/Web_User_Interface/720p_Series/Recording/',
            description: '720p Weboberfläche - Alle HD Kameras sind mit einem erweiterbaren SD-Karten Slot (bis zu 32 GB) ausgerüstet, welcher zur Speicherung von Bildern und Videos genutzt werden kann.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/Videoaufnahme/Zeitplan/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Recording_Schedule', {
            title: 'Recording Menü :: Schedule',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_Recording_Schedule.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: Aufnahmen :: Zeitplan',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Recording/">Aufnahmen</a></li><li><a href="/Web_User_Interface/720p_Series/Recording/Schedule/">Zeitplan</a></li>',
            canonical: '/Web_User_Interface/720p_Series/Recording/Schedule/',
            description: '720p Weboberfläche - Dies ist der Zeitplan für die Aufnahme und Fotoserie - wählen Sie aus, welchen Dienst Sie verwenden möchten und zeichnen Sie die Zeitfenster ein, in denen die Kamera ein Video bzw. eine Fotoserie aufzeichnen soll. Jedes blaue Quadrat entspricht dabei 30 Minuten, in denen der Aufnahmeplan aktiv ist. Stellen Sie bitte sicher, dass in der Kamera die richtige Zeitzone und der Wert für die Sommerzeit gesetzt wurde bevor Sie den Zeitplan aktivieren.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/Videoaufnahme/Video/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Recording_Video', {
            title: 'Recording Menü :: Video',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_Recording_Video.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: Aufnahmen :: Video',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Recording/">Aufnahmen</a></li><li><a href="/Web_User_Interface/720p_Series/Recording/Video/">Video</a></li>',
            canonical: '/Web_User_Interface/720p_Series/Recording/Video/',
            description: '720p Weboberfläche - Aktivieren Sie hier die geplante Videoaufnahme. Der oben definierte Zeitplan bestimmt dabei zu welchen Zeiten die Kamera Aufnahmen durchführt. Legen Sie hier die Auflösung, Länge pro Datei und die maximale Länge einer manuellen Aufnahme fest.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* GET HD WebUI page. */
webUI720pGerRouter.route('/Videoaufnahme/Fotoserie/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Recording_Photoseries', {
            title: 'Recording Menü :: Photoseries',
            ampimg: '/images/Search/WebUI_720p_SearchThumb_Recording_Photoseries.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: Aufnahmen :: Fotoserie',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Recording/">Aufnahmen</a></li><li><a href="/Web_User_Interface/720p_Series/Recording/Photoseries/">Fotoserie</a></li>',
            canonical: '/Web_User_Interface/720p_Series/Recording/Photoseries/',
            description: '720p Weboberfläche - Nehmen Sie Schnappschüsse im Zeitintervall auf und setzen Sie die Bilder über einen Drittanbietersoftware zu einem Zeitraffervideo zusammen. Alternativ kann die Funktion auch Einzelbilder mit einem festgelegten Bildnamen auf einen FTP Server hochladen. Dies bietet Ihnen eine einfache Möglichkeit ein quasi-Livebild der Kamera auf Ihrer Webseite einzubinden.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* ###################################### HD Series Menu Bar ###################################### */

/* GET HD WebUI page. */
webUI720pGerRouter.route('/Menu_Bar/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Menu_Bar', {
            title: 'Menu Bar',
            ampimg: '/images/Search/QI_SearchThumb_WebUI_720p.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: Menüleiste',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Menu_Bar/">Menüleiste</a></li>',
            canonical: '/Web_User_Interface/720p_Series/Menu_Bar/',
            description: '720p Weboberfläche - Die Menüleiste befindet sich über dem Live-Video und erlaubt es Ihnen per Schnellzugriff, Snapshots zu erstellen, eine Aufnahme zu starten, die Bewegungserkennung zu aktivieren oder auf Ihre SD-Karte zuzugreifen.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* ###################################### HD Series Video Menu Bar ###################################### */

/* GET HD WebUI page. */
webUI720pGerRouter.route('/Video_Menu_Bar/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Video_Menu_Bar', {
            title: 'Video Menu Bar',
            ampimg: '/images/Search/QI_SearchThumb_WebUI_720p.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: Video Menüleiste',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Video_Menu_Bar/">Video Menüleiste</a></li>',
            canonical: '/Web_User_Interface/720p_Series/Video_Menu_Bar/',
            description: '720p Weboberfläche - Die Video Menüleiste ist Bestandteil des ActiveX Video Plugins. Um das Plugin zu benutzen, müssen Sie es im Video Menü aktivieren.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

/* ###################################### HD Series PTZ ###################################### */

/* GET HD WebUI page. */
webUI720pGerRouter.route('/PTZ_Kontrolle/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_PTZ_Control', {
            title: 'PTZ Control',
            ampimg: '/images/Search/QI_SearchThumb_WebUI_720p.jpg',
            headline: 'INSTAR Weboberfläche HD Serie :: PTZ Kontrolle',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/PTZ_Control/">PTZ Kontrolle</a></li>',
            canonical: '/Web_User_Interface/720p_Series/PTZ_Control/',
            description: '720p Weboberfläche - Jede schwenkbare, neigbare oder im Brennpunkt variable Kamera kann direkt von der Weboberfläche aus gesteuert werden.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: '',
      			qitab: 'hidden',
      			mdacc: '',
      			mdtab: 'hidden',
      			iaacc: '',
      			iatab: 'hidden',
      			auacc: '',
      			autab: 'hidden',
      			hdacc: '',
      			hdtab: '',
      			fhdacc: 'hidden',
      			fhdtab: 'hidden',
      			sacc: 'hidden',
      			dlacc: 'hidden',
      			dltab: 'hidden',
          });
      });

module.exports = webUI720pGerRouter;
