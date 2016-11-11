var express = require('express');
var webUI1080pRouter = express.Router();

/* GET WebUI page. */
webUI1080pRouter.route('/Overview')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface', {
            title: 'INSTAR Weboberfläche',
          });
      });

/* ###################################### fullHD Series ###################################### */

/* GET fullHD WebUI page. */
webUI1080pRouter.route('/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series', {
            title: 'INSTAR Weboberfläche fullHD Serie',
			uplink: '/Web_User_Interface/1080p_Series/Overview/',
          });
      });

/* ###################################### fullHD Series System ###################################### */

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System', {
            title: 'System Menü',
			uplink: '/Web_User_Interface/1080p_Series/',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/Date_Time/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Date_Time', {
            title: 'System Menü :: Datum & Uhrzeit',
			uplink: '/Web_User_Interface/1080p_Series/System/',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/Email/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Email', {
            title: 'System Menü :: Email',
			uplink: '/Web_User_Interface/1080p_Series/System/',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/Info/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Info', {
            title: 'System Menü :: Info',
			uplink: '/Web_User_Interface/1080p_Series/System/',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/Language/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Language', {
            title: 'System Menü :: Sprache',
			uplink: '/Web_User_Interface/1080p_Series/System/',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/User/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_User', {
            title: 'System Menü :: Benutzer',
			uplink: '/Web_User_Interface/1080p_Series/System/',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/Log/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Log', {
            title: 'System Menü :: Log',
			uplink: '/Web_User_Interface/1080p_Series/System/',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/Reboot/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Reboot', {
            title: 'System Menü :: Neustart',
			uplink: '/Web_User_Interface/1080p_Series/System/',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/Reset/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Reset', {
            title: 'System Menü :: Reset',
			uplink: '/Web_User_Interface/1080p_Series/System/',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/System/Update/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_System_Update', {
            title: 'System Menü :: Update',
			uplink: '/Web_User_Interface/1080p_Series/System/',
          });
      });

/* ###################################### fullHD Series Network ###################################### */

/* GET HD WebUI page. */
webUI1080pRouter.route('/Network/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network', {
            title: 'Network Menü',
			uplink: '/Web_User_Interface/1080p_Series/',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Network/IP_Configuration/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_IP_Configuration', {
            title: 'Network Menü :: IP Konfiguration',
			uplink: '/Web_User_Interface/1080p_Series/Network/',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Network/WiFi/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_WiFi', {
            title: 'Network Menü :: WiFi',
			uplink: '/Web_User_Interface/1080p_Series/Netzwerk/',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Network/Remote_Access/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_Remote_Access', {
            title: 'Network Menü :: Remote Zugang',
			uplink: '/Web_User_Interface/1080p_Series/Network/',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Network/ONVIF/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_ONVIF', {
            title: 'Network Menü :: ONVIF',
			uplink: '/Web_User_Interface/1080p_Series/Network/',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Network/UPnP/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_UPnP', {
            title: 'Network Menü :: UPnP',
			uplink: '/Web_User_Interface/1080p_Series/Network/',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Network/FTP/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network_FTP', {
            title: 'Network Menü :: FTP',
			uplink: '/Web_User_Interface/1080p_Series/Network/',
          });
      });

/* ###################################### fullHD Series Features ###################################### */

/* GET HD WebUI page. */
webUI1080pRouter.route('/Features/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features', {
            title: 'Features Menü',
			uplink: '/Web_User_Interface/1080p_Series/',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Features/Status_LED/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_Status_LED', {
            title: 'Features Menü :: Status LED',
			uplink: '/Web_User_Interface/1080p_Series/Features/',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Features/IR_LEDs/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_IR_LEDs', {
            title: 'Features Menü :: IR LEDs',
			uplink: '/Web_User_Interface/1080p_Series/Features/',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Features/PTZ/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_PTZ', {
            title: 'Features Menü :: PTZ',
			uplink: '/Web_User_Interface/1080p_Series/Features/',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Features/SD_Card/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_SD_Card', {
            title: 'Features Menü :: SD Karte',
			uplink: '/Web_User_Interface/1080p_Series/Features/',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Features/PTZ_Tour/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Features_PTZ_Tour', {
            title: 'Features Menü :: PTZ Tour',
			uplink: '/Web_User_Interface/1080p_Series/Features/',
          });
      });

/* ###################################### fullHD Series Multimedia ###################################### */

/* GET HD WebUI page. */
webUI1080pRouter.route('/Multimedia/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia', {
            title: 'Multimedia Menü',
			uplink: '/Web_User_Interface/1080p_Series/',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Multimedia/Audio/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Audio', {
            title: 'Multimedia Menü :: Audio',
			uplink: '/Web_User_Interface/1080p_Series/Multimedia/',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Multimedia/Video/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Video', {
            title: 'Multimedia Menü :: Video',
			uplink: '/Web_User_Interface/1080p_Series/Multimedia/',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Multimedia/Image/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Image', {
            title: 'Multimedia Menü :: Bild',
			uplink: '/Web_User_Interface/1080p_Series/Multimedia/',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Multimedia/Privacy_Mask/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Multimedia_Privacy_Mask', {
            title: 'Multimedia Menü :: Privatsphäre',
			uplink: '/Web_User_Interface/1080p_Series/Multimedia/',
          });
      });

/* ###################################### fullHD Series Alarm ###################################### */

/* GET HD WebUI page. */
webUI1080pRouter.route('/Alarm/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm', {
            title: 'Alarm Menü',
			uplink: '/Web_User_Interface/1080p_Series/Alarm/',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Alarm/Areas/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Areas', {
            title: 'Alarm Menü :: Bereiche',
			uplink: '/Web_User_Interface/1080p_Series/Alarm/',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Alarm/Actions/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Actions', {
            title: 'Alarm Menü :: Aktionen',
			uplink: '/Web_User_Interface/1080p_Series/Alarm/',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Alarm/Schedule/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Schedule', {
            title: 'Alarm Menü :: Zeitplan',
			uplink: '/Web_User_Interface/1080p_Series/Alarm/',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Alarm/Alarm_Server/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Alarm_Server', {
            title: 'Alarm Menü :: Alarm Server',
			uplink: '/Web_User_Interface/1080p_Series/Alarm/',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Alarm/Email/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Email', {
            title: 'Alarm Menü :: Email',
			uplink: '/Web_User_Interface/1080p_Series/Alarm/',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Alarm/Push_Service/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Alarm_Push_Service', {
            title: 'Alarm Menü :: Push Service',
			uplink: '/Web_User_Interface/1080p_Series/Alarm/',
          });
      });

/* ###################################### fullHD Series Recording ###################################### */

/* GET HD WebUI page. */
webUI1080pRouter.route('/Recording/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Recording', {
            title: 'Recording Menü',
			uplink: '/Web_User_Interface/1080p_Series/',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Recording/Video/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Recording_Video', {
            title: 'Recording Menü :: Video',
			uplink: '/Web_User_Interface/1080p_Series/Recording/',
          });
      });

/* GET HD WebUI page. */
webUI1080pRouter.route('/Recording/Photoseries/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Recording_Photoseries', {
            title: 'Recording Menü :: Fotoserie',
			uplink: '/Web_User_Interface/1080p_Series/Recording/',
          });
      });

/* ###################################### fullHD Series LiveVideo ###################################### */

/* GET HD WebUI page. */
webUI1080pRouter.route('/Live_Video/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Live_Video', {
            title: 'Live Video',
			uplink: '/Web_User_Interface/1080p_Series/',
          });
      });

/* ###################################### fullHD Series Cloud ###################################### */

/* GET HD WebUI page. */
webUI1080pRouter.route('/Cloud/')
    .get(function(req, res) {
        res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Cloud', {
            title: 'INSTAR Cloud',
			uplink: '/Web_User_Interface/1080p_Series/',
          });
      });


module.exports = webUI1080pRouter;
