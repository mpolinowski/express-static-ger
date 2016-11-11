var express = require('express');
var webUIRouter = express.Router();

/* GET WebUI page. */
webUIRouter.route('/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface', {
            title: 'INSTAR Weboberfläche',
          });
      });

/* ###################################### HD Series ###################################### */

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface', {
            title: 'INSTAR Weboberfläche HD Serie',
            uplink: '/Web_User_Interface',
          });
      });

/* ###################################### HD Series Software ###################################### */

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/Software/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Software', {
            title: 'Software Menü',
            uplink: '/Web_User_Interface/720p/720p_Series',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/Software/Language/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Software_Language', {
            title: 'Software Menü :: Sprache',
            uplink: '/Web_User_Interface/720p/720p_Series/Software',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/Software/Backup/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Software_Backup', {
            title: 'Software Menü :: Backup',
            uplink: '/Web_User_Interface/720p/720p_Series/Software',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/Software/Update/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Software_Update', {
            title: 'Software Menü :: Update',
            uplink: '/Web_User_Interface/720p/720p_Series/Software',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/Software/Reboot_Reset/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Software_Reboot_Reset', {
            title: 'Software Menü :: Neustart & Reset',
            uplink: '/Web_User_Interface/720p/720p_Series/Software',
          });
      });

/* ###################################### HD Series Network ###################################### */

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/Network/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network', {
            title: 'Netzwerk Menü',
            uplink: '/Web_User_Interface/720p/720p_Series',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/Network/IP_Configuration/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network_IP_Configuration', {
            title: 'Netzwerk Menü :: IP Konfiguration',
            uplink: '/Web_User_Interface/720p/720p_Series/Network',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/Network/WiFi/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network_WiFi', {
            title: 'Netzwerk Menü :: WiFi',
            uplink: '/Web_User_Interface/720p/720p_Series/Network',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/Network/DDNS/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network_DDNS', {
            title: 'Netzwerk Menü :: DDNS',
            uplink: '/Web_User_Interface/720p/720p_Series/Network',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/Network/P2P/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network_P2P', {
            title: 'Netzwerk Menü :: P2P',
            uplink: '/Web_User_Interface/720p/720p_Series/Network',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/Network/UPnP/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network_UPnP', {
            title: 'Netzwerk Menü :: UPnP',
            uplink: '/Web_User_Interface/720p/720p_Series/Network',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/Network/Push_Service/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Network_Push_Service', {
            title: 'Netzwerk Menü :: Push Service',
            uplink: '/Web_User_Interface/720p/720p_Series/Network',
          });
      });

/* ###################################### HD Series System ###################################### */

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/System/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System', {
            title: 'System Menü',
            uplink: '/Web_User_Interface/720p/720p_Series',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/System/Info/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_Info', {
            title: 'System Menü :: Info',
            uplink: '/Web_User_Interface/720p/720p_Series/System',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/System/Date_Time/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_Date_Time', {
            title: 'System Menü :: Datum & Uhrzeit',
            uplink: '/Web_User_Interface/720p/720p_Series/System',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/System/User/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_User', {
            title: 'System Menü :: Benutzer',
            uplink: '/Web_User_Interface/720p/720p_Series/System',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/System/Status_LED/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_Status_LED', {
            title: 'System Menü :: Status LED',
            uplink: '/Web_User_Interface/720p/720p_Series/System',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/System/IR_LED/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_IR_LED', {
            title: 'System Menü :: IR LED',
            uplink: '/Web_User_Interface/720p/720p_Series/System',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/System/ONVIF/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_ONVIF', {
            title: 'System Menü :: ONVIF',
            uplink: '/Web_User_Interface/720p/720p_Series/System',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/System/PTZ/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_PTZ', {
            title: 'System Menü :: PTZ',
            uplink: '/Web_User_Interface/720p/720p_Series/System',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/System/PTZ_Tour/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_PTZ_Tour', {
            title: 'System Menü :: PTZ Tour',
            uplink: '/Web_User_Interface/720p/720p_Series/System',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/System/System_Log/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_System_System_Log', {
            title: 'System Menü :: System Log',
            uplink: '/Web_User_Interface/720p/720p_Series/System',
          });
      });

/* ###################################### HD Series Multimedia ###################################### */

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/Multimedia/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Multimedia', {
            title: 'Multimedia Menü',
            uplink: '/Web_User_Interface/720p/720p_Series',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/Multimedia/Audio/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Multimedia_Audio', {
            title: 'Multimedia Menü :: Audio',
            uplink: '/Web_User_Interface/720p/720p_Series/Multimedia',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/Multimedia/Video/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Multimedia_Video', {
            title: 'Multimedia Menü :: Video',
            uplink: '/Web_User_Interface/720p/720p_Series/Multimedia',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/Multimedia/Image/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Multimedia_Image', {
            title: 'Multimedia Menü :: Bild',
            uplink: '/Web_User_Interface/720p/720p_Series/Multimedia',
          });
      });

/* ###################################### HD Series Alarm ###################################### */

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/Alarm/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm', {
            title: 'Alarm Menü',
            uplink: '/Web_User_Interface/720p/720p_Series',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/Alarm/Areas/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_Areas', {
            title: 'Alarm Menü :: Bereiche',
            uplink: '/Web_User_Interface/720p/720p_Series/Alarm',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/Alarm/Privacy_Mask/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_Privacy_Mask', {
            title: 'Alarm Menü :: Privatsphäre',
            uplink: '/Web_User_Interface/720p/720p_Series/Alarm',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/Alarm/Actions/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_Actions', {
            title: 'Alarm Menü :: Aktionen',
            uplink: '/Web_User_Interface/720p/720p_Series/Alarm',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/Alarm/Schedule/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_Schedule', {
            title: 'Alarm Menü :: Zeitplan',
            uplink: '/Web_User_Interface/720p/720p_Series/Alarm',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/Alarm/SMTP_Server/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_SMTP_Server', {
            title: 'Alarm Menü :: SMTP Server',
            uplink: '/Web_User_Interface/720p/720p_Series/Alarm',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/Alarm/Email/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_Email', {
            title: 'Alarm Menü :: Email',
            uplink: '/Web_User_Interface/720p/720p_Series/Alarm',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/Alarm/FTP/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_FTP', {
            title: 'Alarm Menü :: FTP',
            uplink: '/Web_User_Interface/720p/720p_Series/Alarm',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/Alarm/Audio_Alarm/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_Audio_Alarm', {
            title: 'Alarm Menü :: Audio Alarm',
            uplink: '/Web_User_Interface/720p/720p_Series/Alarm',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/Alarm/SD_Card/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Alarm_SD_Card', {
            title: 'Alarm Menü :: SD Karte',
            uplink: '/Web_User_Interface/720p/720p_Series/Alarm',
          });
      });

/* ###################################### HD Series Recording ###################################### */

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/Recording/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Recording', {
            title: 'Aufnahme Menü',
            uplink: '/Web_User_Interface/720p/720p_Series',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/Recording/Schedule/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Recording_Schedule', {
            title: 'Aufnahme Menü :: Zeitplan',
            uplink: '/Web_User_Interface/720p/720p_Series/Recording',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/Recording/Video/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Recording_Video', {
            title: 'Aufnahme Menü :: Video',
            uplink: '/Web_User_Interface/720p/720p_Series/Recording',
          });
      });

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/Recording/Photoseries/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Recording_Photoseries', {
            title: 'Aufnahme Menü :: Fotoserie',
            uplink: '/Web_User_Interface/720p/720p_Series/Recording',
          });
      });

/* ###################################### HD Series Menu Bar ###################################### */

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/Menu_Bar/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Menu_Bar', {
            title: 'Menüleiste',
            uplink: '/Web_User_Interface/720p/720p_Series',
          });
      });

/* ###################################### HD Series Video Menu Bar ###################################### */

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/Video_Menu_Bar/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_Video_Menu_Bar', {
            title: 'Video Menüleiste',
            uplink: '/Web_User_Interface/720p/720p_Series',
          });
      });

/* ###################################### HD Series PTZ ###################################### */

/* GET HD WebUI page. */
webUIRouter.route('/720p_Series/PTZ_Control/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/720p/WebUserInterface_HD-Series_PTZ_Control', {
            title: 'PTZ Control',
            uplink: '/Web_User_Interface/720p/720p_Series',
          });
      });

/* ###################################### fullHD Series ###################################### */

/* GET fullHD WebUI page. */
webUIRouter.route('/1080p_Series/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface', {
            title: 'INSTAR Weboberfläche fullHD Serie',
            uplink: '/Web_User_Interface',
          });
      });

module.exports = webUIRouter;
