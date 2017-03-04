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
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Motion_Detection/">Bewegungserkennung</a></li>',
      });
  });

motionDetectionRouter.get('/Setup/', function(req, res) {
    res.render('./Motion_Detection/Motion_Detection_Setup', {
        title: 'Bewegungserkennung Setup',
        uplink: '/Motion_Detection',
        ampimg: '/images/Search/MD_SearchThumb_MDSetup.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Bewegungserkennung</a></li><li><a href="/Motion_Detection/Setup/">Einrichtung</a></li>',
      });
  });

motionDetectionRouter.get('/Setup/720p_Series/', function(req, res) {
    res.render('./Motion_Detection/Motion_Detection_Setup_720p', {
        title: 'Bewegungserkennung Setup',
        uplink: '/Motion_Detection',
        ampimg: '/images/Search/MD_SearchThumb_MDSetup.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Bewegungserkennung</a></li><li><a href="/Motion_Detection/Setup/">Einrichtung</a></li><li><a href="/Motion_Detection/Setup/720p_Series/">720p Serie</a></li>',
      });
  });

motionDetectionRouter.get('/Setup/VGA_Series/', function(req, res) {
    res.render('./Motion_Detection/Motion_Detection_Setup_VGA', {
        title: 'Bewegungserkennung Setup',
        uplink: '/Motion_Detection',
        ampimg: '/images/Search/MD_SearchThumb_MDSetup.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Bewegungserkennung</a></li><li><a href="/Motion_Detection/Setup/">Einrichtung</a></li><li><a href="/Motion_Detection/Setup/VGA_Series/">VGA Serie</a></li>',
      });
  });

motionDetectionRouter.get('/Alarm_Notification/', function(req, res) {
    res.render('./Motion_Detection/Alarm_Notification', {
        title: 'Alarm Benachrichtigung',
        uplink: '/Motion_Detection',
        ampimg: '/images/Search/MD_SearchThumb_AlarmNotification.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Bewegungserkennung</a></li><li><a href="/Motion_Detection/Alarm_Notification/">Alarm Benachrichtigung</a></li>',
      });
  });

motionDetectionRouter.get('/Alarm_Notification/720p_Series/', function(req, res) {
    res.render('./Motion_Detection/Alarm_Notification_720p', {
        title: 'Alarm Benachrichtigung',
        uplink: '/Motion_Detection',
        ampimg: '/images/Search/MD_SearchThumb_AlarmNotification.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Bewegungserkennung</a></li><li><a href="/Motion_Detection/Alarm_Notification/">Benachrichtigung</a></li><li><a href="/Motion_Detection/Alarm_Notification/720p_Series/">720p Serie</a></li>',
      });
  });

motionDetectionRouter.get('/Alarm_Notification/VGA_Series/', function(req, res) {
    res.render('./Motion_Detection/Alarm_Notification_VGA', {
        title: 'Alarm Benachrichtigung',
        uplink: '/Motion_Detection',
        ampimg: '/images/Search/MD_SearchThumb_AlarmNotification.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Bewegungserkennung</a></li><li><a href="/Motion_Detection/Alarm_Notification/">Benachrichtigung</a></li><li><a href="/Motion_Detection/Alarm_Notification/VGA_Series/">VGA Serie</a></li>',
      });
  });

motionDetectionRouter.get('/Alarm_Notification/Troubleshooting/', function(req, res) {
    res.render('./Motion_Detection/Alarm_Notification_Troubles', {
        title: 'Alarm Benachrichtigung',
        uplink: '/Motion_Detection',
        ampimg: '/images/Search/MD_SearchThumb_AlarmNotification.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Erkennung</a></li><li><a href="/Motion_Detection/Alarm_Notification/">Benachrichtigung</a></li><li><a href="/Motion_Detection/Alarm_Notification/Troubleshooting/">Troubles</a></li>',
      });
  });

motionDetectionRouter.get('/Alarm_Notification/SMTP_Servers', function(req, res) {
    res.render('./Motion_Detection/Alarm_Notification_SMTP_Servers', {
        title: 'SMTP Server',
        uplink: '/Motion_Detection',
        ampimg: '/images/Search/MD_SearchThumb_AlarmNotification.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Bewegungserkennung</a></li><li><a href="/Motion_Detection/Alarm_Notification/">Alarm Notification</a></li><li><a href="/Motion_Detection/Alarm_Notification/SMTP_Servers/">SMTP Server</a></li>',
      });
  });

motionDetectionRouter.get('/Cloud/', function(req, res) {
    res.render('./Motion_Detection/Cloud', {
        title: 'INSTAR Cloud',
        uplink: '/Motion_Detection',
        ampimg: '/images/Search/MD_SearchThumb_Cloud.jpg',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Motion_Detection/">Bewegungserkennung</a></li><li class="breadcrumb-item"><a href="/Motion_Detection/INSTAR_Cloud/">INSTAR Cloud</a></li>',
      });
  });

motionDetectionRouter.get('/Cloud/Create_User_Account', function(req, res) {
    res.render('./Motion_Detection/Cloud_Create_User_Account', {
        title: 'INSTAR Cloud - Neues Benutzerkonto erstellen',
        uplink: '/Motion_Detection/Cloud',
        ampimg: '/images/Search/MD_SearchThumb_Cloud.jpg',
        breadcrumbs: '<li><a href="/Motion_Detection/">Bewegungserkennung</a></li><li><a href="/Motion_Detection/INSTAR_Cloud/">INSTAR Cloud</a></li><li><a href="/Motion_Detection/INSTAR_Cloud/Create_User_Account/">Neuen Benutzer erstellen</a></li>',
      });
  });

  motionDetectionRouter.get('/Cloud/Get_More_Cloudstorage', function(req, res) {
    res.render('./Motion_Detection/Cloud_Get_More_Cloudstorage', {
        title: 'INSTAR Cloud - Mehr Speicherplatz buchen',
        uplink: '/Motion_Detection/Cloud',
        ampimg: '/images/Search/MD_SearchThumb_Cloud.jpg',
        breadcrumbs: '<li><a href="/Motion_Detection/">Bewegungserkennung</a></li><li><a href="/Motion_Detection/INSTAR_Cloud/">INSTAR Cloud</a></li><li><a href="/Motion_Detection/INSTAR_Cloud/Storage/">Speicherplatz</a></li>',
      });
  });

  motionDetectionRouter.get('/Cloud/User', function(req, res) {
    res.render('./Motion_Detection/Cloud_User', {
        title: 'INSTAR Cloud - Benutzer',
        uplink: '/Motion_Detection/Cloud',
        ampimg: '/images/Search/MD_SearchThumb_Cloud.jpg',
        breadcrumbs: '<li><a href="/Motion_Detection/">Bewegungserkennung</a></li><li><a href="/Motion_Detection/INSTAR_Cloud/">INSTAR Cloud</a></li><li><a href="/Motion_Detection/INSTAR_Cloud/User/">Benutzer</a></li>',
      });
  });

  motionDetectionRouter.get('/Cloud/Administration', function(req, res) {
    res.render('./Motion_Detection/Cloud_Administration', {
        title: 'INSTAR Cloud - Verwaltung Ihrer Cloud',
        uplink: '/Motion_Detection/Cloud',
        ampimg: '/images/Search/MD_SearchThumb_Cloud.jpg',
        breadcrumbs: '<li><a href="/Motion_Detection/">Bewegungserkennung</a></li><li><a href="/Motion_Detection/INSTAR_Cloud/">INSTAR Cloud</a></li><li><a href="/Motion_Detection/INSTAR_Cloud/Administration/">Administration</a></li>',
      });
  });

  motionDetectionRouter.get('/Cloud/Alarm', function(req, res) {
    res.render('./Motion_Detection/Cloud_Alarm', {
        title: 'INSTAR Cloud - Alarm Benachrichtigungen',
        uplink: '/Motion_Detection/Cloud',
        ampimg: '/images/Search/MD_SearchThumb_Cloud.jpg',
        breadcrumbs: '<li><a href="/Motion_Detection/">Bewegungserkennung</a></li><li><a href="/Motion_Detection/INSTAR_Cloud/">INSTAR Cloud</a></li><li><a href="/Motion_Detection/INSTAR_Cloud/Alarm_Recordings/">Alarm Aufnahmen</a></li>',
      });
  });

  motionDetectionRouter.get('/Cloud/Sets', function(req, res) {
    res.render('./Motion_Detection/Cloud_Sets', {
        title: 'INSTAR Cloud - Einstellungen',
        uplink: '/Motion_Detection/Cloud',
        ampimg: '/images/Search/MD_SearchThumb_Cloud.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Bewegungserkennung</a></li><li><a href="/Motion_Detection/INSTAR_Cloud/">INSTAR Cloud</a></li><li><a href="/Motion_Detection/INSTAR_Cloud/Camera_Sets/">Kamera Sets</a></li>',
      });
  });

motionDetectionRouter.get('/Alarm_Recording/', function(req, res) {
    res.render('./Motion_Detection/Alarm_Recording', {
        title: 'Alarm Aufnahme',
        uplink: '/Motion_Detection',
        ampimg: '/images/Search/MD_SearchThumb_AlarmRecording.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Bewegungserkennung</a></li><li><a href="/Motion_Detection/Alarm_Recording/">Alarm Aufnahme</a></li>',
      });
  });

motionDetectionRouter.get('/SD_Card_Access/', function(req, res) {
    res.render('./Motion_Detection/SD_Card_Access', {
        title: 'SD Karten Zugriff',
        uplink: '/Motion_Detection',
        ampimg: '/images/Search/MD_SearchThumb_SDCardAccess.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Bewegungserkennung</a></li><li><a href="/Motion_Detection/SD_Card_Access/">Zugriff auf SD-Karte</a></li>',
      });
  });

motionDetectionRouter.get('/SD_Card_Access/Bitkinex/', function(req, res) {
    res.render('./Motion_Detection/SD_Card_Access_Bitkinex', {
        title: 'SD Karten Zugriff - Bitkinex',
        uplink: '/Motion_Detection/SD_Card_Access',
        ampimg: '/images/Search/MD_SearchThumb_SDCardAccess.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Bewegungserkennung</a></li><li><a href="/Motion_Detection/SD_Card_Access/">SD Karten Zugriff</a></li><li><a href="/Motion_Detection/SD_Card_Access/Bitkinex/">Bitkinex</a></li>',
      });
  });

motionDetectionRouter.get('/SD_Card_Access/CuteFTP', function(req, res) {
    res.render('./Motion_Detection/SD_Card_Access_CuteFTP', {
        title: 'SD Karten Zugriff - CuteFTP',
        uplink: '/Motion_Detection/SD_Card_Access',
        ampimg: '/images/Search/MD_SearchThumb_SDCardAccess.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Bewegungserkennung</a></li><li><a href="/Motion_Detection/SD_Card_Access/">SD Karten Zugriff</a></li><li><a href="/Motion_Detection/SD_Card_Access/CuteFTP/">CuteFTP</a></li>',
      });
  });

motionDetectionRouter.get('/SD_Card_Access/DownThemAll', function(req, res) {
    res.render('./Motion_Detection/SD_Card_Access_DownThemAll', {
        title: 'SD Karten Zugriff - DownThemAll',
        uplink: '/Motion_Detection/SD_Card_Access',
        ampimg: '/images/Search/MD_SearchThumb_SDCardAccess.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Bewegungserkennung</a></li><li><a href="/Motion_Detection/SD_Card_Access/">SD Karte</a></li><li><a href="/Motion_Detection/SD_Card_Access/DownThemAll/">DownThemAll</a></li>',
      });
  });

motionDetectionRouter.get('/SD_Card_Access/Interachy', function(req, res) {
    res.render('./Motion_Detection/SD_Card_Access_Interarchy', {
        title: 'SD Karten Zugriff - Interachy',
        uplink: '/Motion_Detection/SD_Card_Access',
        ampimg: '/images/Search/MD_SearchThumb_SDCardAccess.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Bewegungserkennung</a></li><li><a href="/Motion_Detection/SD_Card_Access/">SD Karten Zugriff</a></li><li><a href="/Motion_Detection/SD_Card_Access/Interachy/">Interachy</a></li>',
      });
  });

motionDetectionRouter.get('/SD_Card_Access/DeepVacuum', function(req, res) {
    res.render('./Motion_Detection/SD_Card_Access_DeepVacuum', {
        title: 'SD Karten Zugriff - DeepVacuum',
        uplink: '/Motion_Detection/SD_Card_Access',
        ampimg: '/images/Search/MD_SearchThumb_SDCardAccess.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Bewegungserkennung</a></li><li><a href="/Motion_Detection/SD_Card_Access/">SD Karten Zugriff</a></li><li><a href="/Motion_Detection/SD_Card_Access/DeepVacuum/">DeepVacuum</a></li>',
      });
  });

motionDetectionRouter.get('/SD_Card_Access/SiteSucker', function(req, res) {
    res.render('./Motion_Detection/SD_Card_Access_SiteSucker', {
        title: 'SD Karten Zugriff - SiteSucker',
        uplink: '/Motion_Detection/SD_Card_Access',
        ampimg: '/images/Search/MD_SearchThumb_SDCardAccess.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Bewegungserkennung</a></li><li><a href="/Motion_Detection/SD_Card_Access/">SD Karten Zugriff</a></li><li><a href="/Motion_Detection/SD_Card_Access/SiteSucker/">SiteSucker</a></li>',
      });
  });

motionDetectionRouter.get('/SD_Card_Access/SimpleWget', function(req, res) {
    res.render('./Motion_Detection/SD_Card_Access_SimpleWget', {
        title: 'SD Karten Zugriff - SimpleWget',
        uplink: '/Motion_Detection/SD_Card_Access',
        ampimg: '/images/Search/MD_SearchThumb_SDCardAccess.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Bewegungserkennung</a></li><li><a href="/Motion_Detection/SD_Card_Access/">SD Karten Zugriff</a></li><li><a href="/Motion_Detection/SD_Card_Access/SimpleWget/">SimpleWget</a></li>',
      });
  });

motionDetectionRouter.get('/Alarm_FTP_Upload/', function(req, res) {
    res.render('./Motion_Detection/Alarm_FTP_Upload', {
        title: 'Alarm FTP Upload',
        uplink: '/Motion_Detection',
        ampimg: '/images/Search/MD_SearchThumb_FTPSettingsAlarmUpload.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Bewegungserkennung</a></li><li><a href="/Motion_Detection/Alarm_FTP_Upload/">Alarm FTP Upload</a></li>',
      });
  });

motionDetectionRouter.get('/Alarm_FTP_Upload/720p_Series/', function(req, res) {
    res.render('./Motion_Detection/Alarm_FTP_Upload_720p', {
        title: 'Alarm FTP Upload',
        uplink: '/Motion_Detection',
        ampimg: '/images/Search/MD_SearchThumb_FTPSettingsAlarmUpload.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Bewegungserkennung</a></li><li><a href="/Motion_Detection/Alarm_FTP_Upload/">Alarm FTP Upload</a></li><li><a href="/Motion_Detection/Alarm_FTP_Upload/720p_Series/">720p Serie</a></li>',
      });
  });

motionDetectionRouter.get('/Alarm_FTP_Upload/VGA_Series/', function(req, res) {
    res.render('./Motion_Detection/Alarm_FTP_Upload_VGA', {
        title: 'Alarm FTP Upload',
        uplink: '/Motion_Detection',
        ampimg: '/images/Search/MD_SearchThumb_FTPSettingsAlarmUpload.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Bewegungserkennung</a></li><li><a href="/Motion_Detection/Alarm_FTP_Upload/">Alarm FTP Upload</a></li><li><a href="/Motion_Detection/Alarm_FTP_Upload/VGA_Series/">VGA Serie</a></li>',
      });
  });

motionDetectionRouter.get('/Router_as_a_FTP_Server/', function(req, res) {
    res.render('./Motion_Detection/Router_as_a_FTP_Server', {
        title: 'Router oder NAS als FTP Server',
        uplink: '/Motion_Detection',
        ampimg: '/images/Search/MD_SearchThumb_RouterAsFTPServer.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Bewegungserkennung</a></li><li><a href="/Motion_Detection/Router_as_a_FTP_Server/">Router als FTP Server</a></li>',
      });
  });

motionDetectionRouter.get('/Router_as_a_FTP_Server/AVM_Fritzbox_as_FTP_Server', function(req, res) {
    res.render('./Motion_Detection/AVM_Fritzbox_as_FTP_Server', {
        title: 'AVM Fritzbox asl FTP Server',
        uplink: '/Motion_Detection/Router_as_a_FTP_Server',
        ampimg: '/images/Search/MD_SearchThumb_RouterAsFTPServer.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Bewegungserkennung</a></li><li><a href="/Motion_Detection/Router_as_a_FTP_Server/">FTP Server</a></li><li><a href="/Motion_Detection/Router_as_a_FTP_Server/AVM_Fritzbox_as_FTP_Server/">AVM Fritzbox</a></li>',
      });
  });

motionDetectionRouter.get('/Router_as_a_FTP_Server/Telekom_Speedport_as_FTP_Server', function(req, res) {
    res.render('./Motion_Detection/Telekom_Speedport_as_FTP_Server', {
        title: 'Telekom Speedport als FTP Server',
        uplink: '/Motion_Detection/Router_as_a_FTP_Server',
        ampimg: '/images/Search/MD_SearchThumb_RouterAsFTPServer.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Bewegungserkennung</a></li><li><a href="/Motion_Detection/Router_as_a_FTP_Server/">FTP Server</a></li><li><a href="/Motion_Detection/Router_as_a_FTP_Server/Telekom_Speedport_as_FTP_Server/">Speedport</a></li>',
      });
  });

motionDetectionRouter.get('/Router_as_a_FTP_Server/QNAP_as_FTP_Server', function(req, res) {
    res.render('./Motion_Detection/QNAP_as_FTP_Server', {
        title: 'QNAP als FTP Server',
        uplink: '/Motion_Detection/Router_as_a_FTP_Server',
        ampimg: '/images/Search/MD_SearchThumb_RouterAsFTPServer.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Bewegungserkennung</a></li><li><a href="/Motion_Detection/Router_as_a_FTP_Server/">FTP Server</a></li><li><a href="/Motion_Detection/Router_as_a_FTP_Server/QNAP_as_FTP_Server/">QNAP</a></li>',
      });
  });

motionDetectionRouter.get('/Router_as_a_FTP_Server/Synology_as_FTP_Server', function(req, res) {
    res.render('./Motion_Detection/Synology_as_FTP_Server', {
        title: 'Synology als FTP Server',
        uplink: '/Motion_Detection/Router_as_a_FTP_Server',
        ampimg: '/images/Search/MD_SearchThumb_RouterAsFTPServer.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Bewegungserkennung</a></li><li><a href="/Motion_Detection/Router_as_a_FTP_Server/">FTP Server</a></li><li><a href="/Motion_Detection/Router_as_a_FTP_Server/Synology_as_FTP_Server/">Synology</a></li>',
      });
  });

motionDetectionRouter.get('/Router_as_a_FTP_Server/WD_MyCloud_as_FTP_Server', function(req, res) {
    res.render('./Motion_Detection/WD_MyCloud_as_FTP_Server', {
        title: 'WD MyCloud als FTP Server',
        uplink: '/Motion_Detection/Router_as_a_FTP_Server',
        ampimg: '/images/Search/MD_SearchThumb_RouterAsFTPServer.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Bewegungserkennung</a></li><li><a href="/Motion_Detection/Router_as_a_FTP_Server/">FTP Server</a></li><li><a href="/Motion_Detection/Router_as_a_FTP_Server/WD_MyCloud_as_FTP_Server/">WD MyCloud</a></li>',
      });
  });

motionDetectionRouter.get('/FTP_Server_Setup/', function(req, res) {
    res.render('./Motion_Detection/FTP_Server_Setup', {
        title: 'FTP Server Setup',
        uplink: '/Motion_Detection',
        ampimg: '/images/Search/MD_SearchThumb_FTPServerSetup.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Bewegungserkennung</a></li><li><a href="/Motion_Detection/FTP_Server_Setup/">FTP Server Setup</a></li>',
      });
  });

motionDetectionRouter.get('/FTP_Server_Setup/Install_FileZilla_Server/', function(req, res) {
    res.render('./Motion_Detection/Install_FileZilla_Server', {
        title: 'FTP Server Setup',
        uplink: '/Motion_Detection/FTP_Server_Setup',
        ampimg: '/images/Search/MD_SearchThumb_FTPServerSetup.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Bewegungserkennung</a></li><li><a href="/Motion_Detection/FTP_Server_Setup/">FTP Server Setup</a></li><li><a href="/Motion_Detection/FTP_Server_Setup/Install_FileZilla_Server/">Filezilla Installation</a></li>',
      });
  });

motionDetectionRouter.get('/Alarm_Server/', function(req, res) {
    res.render('./Motion_Detection/Alarm_Server', {
        title: 'Alarm Server',
        uplink: '/Motion_Detection',
        ampimg: '/images/Search/MD_SearchThumb_AlarmServer.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Motion_Detection/">Bewegungserkennung</a></li><li><a href="/Motion_Detection/Alarm_Server/">Alarm Server</a></li>',
      });
  });

module.exports = motionDetectionRouter;
