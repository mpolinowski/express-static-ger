var express = require('express');
var motionDetectionRouter = express.Router();
var appdata = require('../views/_partials/data/motionDetection.json');

/* GET Internet_Access page. */
motionDetectionRouter.get('/', function(req, res) {

    var mdPicture = []; /* Get all Pictures from gallery.json for the gallery */
    var mdPictureAlt = [];
    var mdHref = [];
    appdata.articles.forEach(function(item) {
        mdPicture = mdPicture.concat(item.mdPic);
        mdPictureAlt = mdPictureAlt.concat(item.mdPicAlt);
        mdHref = mdHref.concat(item.mdUrl);
      });

    res.render('./Motion_Detection/Motion_Detection', {
        title: 'Bewegungserkennung',
        mdPic: mdPicture,
        mdPicAlt: mdPictureAlt,
        mdUrl: mdHref,
      });
  });

motionDetectionRouter.get('/Setup/', function(req, res) {
    res.render('./Motion_Detection/Motion_Detection_Setup', {
        title: 'Bewegungserkennung Setup',
        uplink: '/Motion_Detection',
      });
  });

motionDetectionRouter.get('/Alarm_Notification/', function(req, res) {
    res.render('./Motion_Detection/Alarm_Notification', {
        title: 'Alarm Benachrichtigung',
        uplink: '/Motion_Detection',
      });
  });

motionDetectionRouter.get('/Alarm_Notification/SMTP_Servers', function(req, res) {
    res.render('./Motion_Detection/Alarm_Notification_SMTP_Servers', {
        title: 'SMTP Server',
        uplink: '/Motion_Detection',
      });
  });

motionDetectionRouter.get('/Cloud/', function(req, res) {
    res.render('./Motion_Detection/Cloud', {
        title: 'INSTAR Cloud',
        uplink: '/Motion_Detection',
      });
  });

motionDetectionRouter.get('/Cloud/Create_User_Account', function(req, res) {
    res.render('./Motion_Detection/Cloud/Create_User_Account', {
        title: 'INSTAR Cloud - Neues Benutzerkonto erstellen',
        uplink: '/Motion_Detection/Cloud',
      });
  });

  motionDetectionRouter.get('/Cloud/Get_More_Cloudstorage', function(req, res) {
    res.render('./Motion_Detection/Cloud/Get_More_Cloudstorage', {
        title: 'INSTAR Cloud - Mehr Speicherplatz buchen',
        uplink: '/Motion_Detection/Cloud',
      });
  });

  motionDetectionRouter.get('/Cloud/User', function(req, res) {
    res.render('./Motion_Detection/Cloud/User', {
        title: 'INSTAR Cloud - Benutzer',
        uplink: '/Motion_Detection/Cloud',
      });
  });

  motionDetectionRouter.get('/Cloud/Administration', function(req, res) {
    res.render('./Motion_Detection/Cloud/Administration', {
        title: 'INSTAR Cloud - Verwaltung Ihrer Cloud',
        uplink: '/Motion_Detection/Cloud',
      });
  });

  motionDetectionRouter.get('/Cloud/Alarm', function(req, res) {
    res.render('./Motion_Detection/Cloud/Alarm', {
        title: 'INSTAR Cloud - Alarm Benachrichtigungen',
        uplink: '/Motion_Detection/Cloud',
      });
  });

  motionDetectionRouter.get('/Cloud/Settings', function(req, res) {
    res.render('./Motion_Detection/Cloud/Settings', {
        title: 'INSTAR Cloud - Einstellungen',
        uplink: '/Motion_Detection/Cloud',
      });
  });

motionDetectionRouter.get('/Alarm_Recording/', function(req, res) {
    res.render('./Motion_Detection/Alarm_Recording', {
        title: 'Alarm Aufnahme',
        uplink: '/Motion_Detection',
      });
  });

motionDetectionRouter.get('/SD_Card_Access/', function(req, res) {
    res.render('./Motion_Detection/SD_Card_Access', {
        title: 'SD Karten Zugriff',
        uplink: '/Motion_Detection',
      });
  });

motionDetectionRouter.get('/SD_Card_Access/Bitkinex/', function(req, res) {
    res.render('./Motion_Detection/SD_Card_Access_Bitkinex', {
        title: 'SD Karten Zugriff - Bitkinex',
        uplink: '/Motion_Detection/SD_Card_Access',
      });
  });

motionDetectionRouter.get('/SD_Card_Access/CuteFTP', function(req, res) {
    res.render('./Motion_Detection/SD_Card_Access_CuteFTP', {
        title: 'SD Karten Zugriff - CuteFTP',
        uplink: '/Motion_Detection/SD_Card_Access',
      });
  });

motionDetectionRouter.get('/SD_Card_Access/DownThemAll', function(req, res) {
    res.render('./Motion_Detection/SD_Card_Access_DownThemAll', {
        title: 'SD Karten Zugriff - DownThemAll',
        uplink: '/Motion_Detection/SD_Card_Access',
      });
  });

motionDetectionRouter.get('/SD_Card_Access/Interachy', function(req, res) {
    res.render('./Motion_Detection/SD_Card_Access_Interarchy', {
        title: 'SD Karten Zugriff - Interachy',
        uplink: '/Motion_Detection/SD_Card_Access',
      });
  });

motionDetectionRouter.get('/SD_Card_Access/DeepVacuum', function(req, res) {
    res.render('./Motion_Detection/SD_Card_Access_DeepVacuum', {
        title: 'SD Karten Zugriff - DeepVacuum',
        uplink: '/Motion_Detection/SD_Card_Access',
      });
  });

motionDetectionRouter.get('/SD_Card_Access/SiteSucker', function(req, res) {
    res.render('./Motion_Detection/SD_Card_Access_SiteSucker', {
        title: 'SD Karten Zugriff - SiteSucker',
        uplink: '/Motion_Detection/SD_Card_Access',
      });
  });

motionDetectionRouter.get('/SD_Card_Access/SimpleWget', function(req, res) {
    res.render('./Motion_Detection/SD_Card_Access_SimpleWget', {
        title: 'SD Karten Zugriff - SimpleWget',
        uplink: '/Motion_Detection/SD_Card_Access',
      });
  });

motionDetectionRouter.get('/Alarm_FTP_Upload/', function(req, res) {
    res.render('./Motion_Detection/Alarm_FTP_Upload', {
        title: 'Alarm FTP Upload',
        uplink: '/Motion_Detection',
      });
  });

motionDetectionRouter.get('/Router_as_a_FTP_Server/', function(req, res) {
    res.render('./Motion_Detection/Router_as_a_FTP_Server', {
        title: 'Router oder NAS als FTP Server',
        uplink: '/Motion_Detection',
      });
  });

motionDetectionRouter.get('/Router_as_a_FTP_Server/AVM_Fritzbox_as_FTP_Server', function(req, res) {
    res.render('./Motion_Detection/AVM_Fritzbox_as_FTP_Server', {
        title: 'AVM Fritzbox asl FTP Server',
        uplink: '/Motion_Detection/Router_as_a_FTP_Server',
      });
  });

motionDetectionRouter.get('/Router_as_a_FTP_Server/Telekom_Speedport_as_FTP_Server', function(req, res) {
    res.render('./Motion_Detection/Telekom_Speedport_as_FTP_Server', {
        title: 'Telekom Speedport als FTP Server',
        uplink: '/Motion_Detection/Router_as_a_FTP_Server',
      });
  });

motionDetectionRouter.get('/Router_as_a_FTP_Server/QNAP_as_FTP_Server', function(req, res) {
    res.render('./Motion_Detection/QNAP_as_FTP_Server', {
        title: 'QNAP als FTP Server',
        uplink: '/Motion_Detection/Router_as_a_FTP_Server',
      });
  });

motionDetectionRouter.get('/Router_as_a_FTP_Server/Synology_as_FTP_Server', function(req, res) {
    res.render('./Motion_Detection/Synology_as_FTP_Server', {
        title: 'Synology als FTP Server',
        uplink: '/Motion_Detection/Router_as_a_FTP_Server',
      });
  });

motionDetectionRouter.get('/Router_as_a_FTP_Server/WD_MyCloud_as_FTP_Server', function(req, res) {
    res.render('./Motion_Detection/WD_MyCloud_as_FTP_Server', {
        title: 'WD MyCloud als FTP Server',
        uplink: '/Motion_Detection/Router_as_a_FTP_Server',
      });
  });

motionDetectionRouter.get('/FTP_Server_Setup/', function(req, res) {
    res.render('./Motion_Detection/FTP_Server_Setup', {
        title: 'FTP Server Setup',
        uplink: '/Motion_Detection',
      });
  });

motionDetectionRouter.get('/FTP_Server_Setup/Install_FileZilla_Server/', function(req, res) {
    res.render('./Motion_Detection/Install_FileZilla_Server', {
        title: 'FTP Server Setup',
        uplink: '/Motion_Detection/FTP_Server_Setup',
      });
  });

motionDetectionRouter.get('/Alarm_Server/', function(req, res) {
    res.render('./Motion_Detection/Alarm_Server', {
        title: 'Alarm Server',
        uplink: '/Motion_Detection',
      });
  });

module.exports = motionDetectionRouter;
