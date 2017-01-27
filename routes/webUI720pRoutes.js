var express = require('express');
var webUIRouter = express.Router();

/* GET WebUI page. */
webUIRouter.route('/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series', {
            title: 'INSTAR Weboberfläche',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li>',
          });
      });


/* ###################################### HD Series Software ###################################### */

/* GET HD WebUI page. */
webUIRouter.route('/Software/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Software', {
            title: 'Software Menü',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series',
            breadcrumbs: '<li><a href="/Software/">Software</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Software/">Software</a></li>',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/Software/Language/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Software_Language', {
            title: 'Software Menü :: Sprache',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series/Software',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Software/">Software</a></li><li><a href="/Web_User_Interface/720p_Series/Software/Language/">Language</a></li>',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/Software/Backup/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Software_Backup', {
            title: 'Software Menü :: Backup',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series/Software',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Software/">Software</a></li><li><a href="/Web_User_Interface/720p_Series/Software/Backup/">Backup</a></li>',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/Software/Update/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Software_Update', {
            title: 'Software Menü :: Update',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series/Software',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Software/">Software</a></li><li><a href="/Web_User_Interface/720p_Series/Software/Update/">Update</a></li>',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/Software/Reboot_Reset/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Software_Reboot_Reset', {
            title: 'Software Menü :: Neustart & Reset',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series/Software',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Software/">Software</a></li><li><a href="/Web_User_Interface/720p_Series/Software/Reboot_Reset/">Reboot & Reset</a></li>',
          });
      });

/* ###################################### HD Series Network ###################################### */

/* GET HD WebUI page. */
webUIRouter.route('/Network/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network', {
            title: 'Netzwerk Menü',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series',
            breadcrumbs: '<li><a href="/Software/">Software</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Network/">Network</a></li>',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/Network/IP_Configuration/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network_IP_Configuration', {
            title: 'Netzwerk Menü :: IP Konfiguration',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series/Network',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Network/">Network</a></li><li><a href="/Web_User_Interface/720p_Series/Network/IP_Configuration/">IP Configuration</a></li>',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/Network/WiFi/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network_WiFi', {
            title: 'Netzwerk Menü :: WiFi',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series/Network',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Network/">Network</a></li><li><a href="/Web_User_Interface/720p_Series/Network/WiFi/">WiFi</a></li>',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/Network/DDNS/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network_DDNS', {
            title: 'Netzwerk Menü :: DDNS',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series/Network',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Network/">Network</a></li><li><a href="/Web_User_Interface/720p_Series/Network/DDNS/">DDNS</a></li>',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/Network/P2P/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network_P2P', {
            title: 'Netzwerk Menü :: P2P',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series/Network',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Network/">Network</a></li><li><a href="/Web_User_Interface/720p_Series/Network/P2P/">P2P</a></li>',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/Network/UPnP/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network_UPnP', {
            title: 'Netzwerk Menü :: UPnP',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series/Network',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Network/">Network</a></li><li><a href="/Web_User_Interface/720p_Series/Network/UPnP/">UPnP</a></li>',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/Network/Push_Service/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network_Push_Service', {
            title: 'Netzwerk Menü :: Push Service',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series/Network',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Network/">Network</a></li><li><a href="/Web_User_Interface/720p_Series/Network/Push_Service/">Push Service</a></li>',
          });
      });

/* ###################################### HD Series System ###################################### */

/* GET HD WebUI page. */
webUIRouter.route('/System/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System', {
            title: 'System Menü',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series',
            breadcrumbs: '<li><a href="/Software/">Software</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/System/">System</a></li>',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/System/Info/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_Info', {
            title: 'System Menü :: Info',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series/System',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/System/">System</a></li><li><a href="/Web_User_Interface/720p_Series/System/Info/">Info</a></li>',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/System/Date_Time/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_Date_Time', {
            title: 'System Menü :: Datum & Uhrzeit',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series/System',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/System/">System</a></li><li><a href="/Web_User_Interface/720p_Series/System/Date_Time/">Date & Time</a></li>',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/System/User/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_User', {
            title: 'System Menü :: Benutzer',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series/System',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/System/">System</a></li><li><a href="/Web_User_Interface/720p_Series/System/User/">User</a></li>',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/System/Status_LED/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_Status_LED', {
            title: 'System Menü :: Status LED',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series/System',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/System/">System</a></li><li><a href="/Web_User_Interface/720p_Series/System/Status_LED/">Status LED</a></li>',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/System/IR_LED/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_IR_LED', {
            title: 'System Menü :: IR LED',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series/System',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/System/">System</a></li><li><a href="/Web_User_Interface/720p_Series/System/IR_LED/">IR LEDs</a></li>',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/System/ONVIF/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_ONVIF', {
            title: 'System Menü :: ONVIF',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series/System',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/System/">System</a></li><li><a href="/Web_User_Interface/720p_Series/System/ONVIF/">ONVIF</a></li>',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/System/PTZ/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_PTZ', {
            title: 'System Menü :: PTZ',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series/System',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/System/">System</a></li><li><a href="/Web_User_Interface/720p_Series/System/PTZ/">PTZ</a></li>',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/System/PTZ_Tour/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_PTZ_Tour', {
            title: 'System Menü :: PTZ Tour',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series/System',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/System/">System</a></li><li><a href="/Web_User_Interface/720p_Series/System/PTZ_Tour/">PTZ Tour</a></li>',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/System/System_Log/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_System_Log', {
            title: 'System Menü :: System Log',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series/System',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/System/">System</a></li><li><a href="/Web_User_Interface/720p_Series/System/System_Log/">System Log</a></li>',
          });
      });

/* ###################################### HD Series Multimedia ###################################### */

/* GET HD WebUI page. */
webUIRouter.route('/Multimedia/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Multimedia', {
            title: 'Multimedia Menü',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series',
            breadcrumbs: '<li><a href="/Software/">Software</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Multimedia/">Multimedia</a></li>',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/Multimedia/Audio/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Multimedia_Audio', {
            title: 'Multimedia Menü :: Audio',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series/Multimedia',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/720p_Series/Multimedia/Audio/">Audio</a></li>',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/Multimedia/Video/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Multimedia_Video', {
            title: 'Multimedia Menü :: Video',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series/Multimedia',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/720p_Series/Multimedia/Video/">Video</a></li>',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/Multimedia/Image/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Multimedia_Image', {
            title: 'Multimedia Menü :: Bild',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series/Multimedia',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Multimedia/">Multimedia</a></li><li><a href="/Web_User_Interface/720p_Series/Multimedia/Image/">Image</a></li>',
          });
      });

/* ###################################### HD Series Alarm ###################################### */

/* GET HD WebUI page. */
webUIRouter.route('/Alarm/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm', {
            title: 'Alarm Menü',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series',
            breadcrumbs: '<li><a href="/Software/">Software</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/">Alarm</a></li>',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/Alarm/Areas/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_Areas', {
            title: 'Alarm Menü :: Bereiche',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series/Alarm',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/Areas/">Areas</a></li>',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/Alarm/Privacy_Mask/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_Privacy_Mask', {
            title: 'Alarm Menü :: Privatsphäre',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series/Alarm',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/Privacy_Mask/">Privacy Mask</a></li>',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/Alarm/Actions/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_Actions', {
            title: 'Alarm Menü :: Aktionen',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series/Alarm',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/Actions/">Actions</a></li>',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/Alarm/Schedule/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_Schedule', {
            title: 'Alarm Menü :: Zeitplan',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series/Alarm',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/Schedule/">Schedule</a></li>',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/Alarm/SMTP_Server/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_SMTP_Server', {
            title: 'Alarm Menü :: SMTP Server',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series/Alarm',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/SMTP_Server/">SMTP Server</a></li>',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/Alarm/Email/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_Email', {
            title: 'Alarm Menü :: Email',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series/Alarm',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/Email/">Email</a></li>',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/Alarm/FTP/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_FTP', {
            title: 'Alarm Menü :: FTP',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series/Alarm',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/FTP/">FTP</a></li>',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/Alarm/Audio_Alarm/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_Audio_Alarm', {
            title: 'Alarm Menü :: Audio Alarm',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series/Alarm',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/Audio_Alarm/">Audio Alarm</a></li>',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/Alarm/SD_Card/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_SD_Card', {
            title: 'Alarm Menü :: SD Karte',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series/Alarm',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/">Alarm</a></li><li><a href="/Web_User_Interface/720p_Series/Alarm/SD_Card/">SD Card</a></li>',
          });
      });

/* ###################################### HD Series Recording ###################################### */

/* GET HD WebUI page. */
webUIRouter.route('/Recording/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Recording', {
            title: 'Aufnahme Menü',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series',
            breadcrumbs: '<li><a href="/Software/">Software</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Recording/">Recording</a></li>',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/Recording/Schedule/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Recording_Schedule', {
            title: 'Aufnahme Menü :: Zeitplan',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series/Recording',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Recording/">Recording</a></li><li><a href="/Web_User_Interface/720p_Series/Recording/Schedule/">Schedule</a></li>',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/Recording/Video/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Recording_Video', {
            title: 'Aufnahme Menü :: Video',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series/Recording',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Recording/">Recording</a></li><li><a href="/Web_User_Interface/720p_Series/Recording/Video/">Video</a></li>',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/Recording/Photoseries/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Recording_Photoseries', {
            title: 'Aufnahme Menü :: Fotoserie',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series/Recording',
            breadcrumbs: '<li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Recording/">Recording</a></li><li><a href="/Web_User_Interface/720p_Series/Recording/Photoseries/">Photoseries</a></li>',
          });
      });

/* ###################################### HD Series Menu Bar ###################################### */

/* GET HD WebUI page. */
webUIRouter.route('/Menu_Bar/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Menu_Bar', {
            title: 'Menüleiste',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series',
            breadcrumbs: '<li><a href="/Software/">Software</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Menu_Bar/">Menu Bar</a></li>',
          });
      });

/* ###################################### HD Series Video Menu Bar ###################################### */

/* GET HD WebUI page. */
webUIRouter.route('/Video_Menu_Bar/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Video_Menu_Bar', {
            title: 'Video Menüleiste',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series',
            breadcrumbs: '<li><a href="/Software/">Software</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/Video_Menu_Bar/">Video Menubar</a></li>',
          });
      });

/* ###################################### HD Series PTZ ###################################### */

/* GET HD WebUI page. */
webUIRouter.route('/PTZ_Control/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_PTZ_Control', {
            title: 'PTZ Control',
            ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
            uplink: '/Web_User_Interface/720p/720p_Series',
            breadcrumbs: '<li><a href="/Software/">Software</a></li><li><a href="/Web_User_Interface/1080p_Series/Overview/">Weboberfläche</a></li><li><a href="/Web_User_Interface/720p_Series/">720p Serie</a></li><li><a href="/Web_User_Interface/720p_Series/PTZ_Control/">PTZ Control</a></li>',
          });
      });

module.exports = webUIRouter;
