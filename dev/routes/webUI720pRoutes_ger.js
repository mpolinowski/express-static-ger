var express = require('express');
var webUI720pGerRouter = express.Router();

/* ###################################### HD Series ###################################### */

/* GET HD WebUI page. */
webUI720pGerRouter.route('/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series', {
            title: 'INSTAR Web User Interface HD Series',
            ampimg: '/images/Search/QI_SearchThumb_WebUI_720p.jpg',
            headline: 'INSTAR Web User Interface HD Series',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li>',
            canonical: '/Web_User_Interface/720p_Series/',
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
            description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
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
