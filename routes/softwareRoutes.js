var express = require('express');
var softwareRouter = express.Router();



/* ****************************************** GET /Software ****************************************** */
softwareRouter.route('/')
.get(function(req, res) {
  res.render('./Software/Software', {
      title: 'INSTAR Software',
    });
});


/* ****************************  GET InstarVision für    Windows /Windows ************************************* */
softwareRouter.route('/Windows')
.get(function(req, res) {
  res.render('./Software/Windows', {
      title: 'Software für Windows',
      uplink: '/Software/',
    });
});

softwareRouter.route('/Windows/InstarVision')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision', {
      title: 'InstarVision für Windows',
      uplink: '/Software/Windows/',
    });
});

softwareRouter.route('/Windows/InstarVision/Camera_List')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Camera_List', {
      title: 'InstarVision v2 Kamera Liste',
      uplink: '/Software/Windows/InstarVision/',
    });
});

softwareRouter.route('/Windows/InstarVision/Layout')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Layout', {
      title: 'InstarVision v2 Layout',
      uplink: '/Software/Windows/InstarVision/',
    });
});

softwareRouter.route('/Windows/InstarVision/PTZ')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_PTZ', {
      title: 'InstarVision v2 Schwenken, Neigen & Zoomen',
      uplink: '/Software/Windows/InstarVision/',
    });
});

softwareRouter.route('/Windows/InstarVision/Image_Adjust')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Image_Adjust', {
      title: 'InstarVision v2 Bildeinstellungen',
      uplink: '/Software/Windows/InstarVision/',
    });
});

softwareRouter.route('/Windows/InstarVision/Webserver')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Webserver', {
      title: 'InstarVision v2 Webserver',
      uplink: '/Software/Windows/InstarVision/',
    });
});

softwareRouter.route('/Windows/InstarVision/Record')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Record', {
      title: 'InstarVision v2 Aufnahme',
      uplink: '/Software/Windows/InstarVision/',
    });
});

softwareRouter.route('/Windows/InstarVision/Record/General')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Record_General', {
      title: 'InstarVision v2 Allgemeine Aufnahme',
      uplink: '/Software/Windows/InstarVision/Record/',
    });
});

softwareRouter.route('/Windows/InstarVision/Record/Schedule')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Record_Schedule', {
      title: 'InstarVision v2 Aufnahme Zeitplan',
      uplink: '/Software/Windows/InstarVision/Record/',
    });
});

softwareRouter.route('/Windows/InstarVision/Record/Alarm')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Record_Alarm', {
      title: 'InstarVision v2 Alarmaufnahme',
      uplink: '/Software/Windows/InstarVision/Record/',
    });
});

softwareRouter.route('/Windows/InstarVision/Record/Photoseries')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Record_Photoseries', {
      title: 'InstarVision v2 Fotoserie aufnehmen',
      uplink: '/Software/Windows/InstarVision/Record/',
    });
});

softwareRouter.route('/Windows/InstarVision/Record/Email')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Record_Email', {
      title: 'InstarVision v2 Aufnahmen per Email',
      uplink: '/Software/Windows/InstarVision/Record/',
    });
});

softwareRouter.route('/Windows/InstarVision/Record/FTP')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Record_FTP', {
      title: 'InstarVision v2 Aufnahmen auf FTP',
      uplink: '/Software/Windows/InstarVision/Record/',
    });
});

softwareRouter.route('/Windows/InstarVision/System')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_System', {
      title: 'InstarVision v2 System',
      uplink: '/Software/Windows/InstarVision/',
    });
});

softwareRouter.route('/Windows/InstarVision/Users')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Users', {
      title: 'InstarVision v2 Benutzer',
      uplink: '/Software/Windows/InstarVision/',
    });
});

softwareRouter.route('/Windows/InstarVision/Advanced')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Advanced', {
      title: 'InstarVision v2 Erweitert',
      uplink: '/Software/Windows/InstarVision/',
    });
});

softwareRouter.route('/Windows/InstarVision/Advanced/License')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Advanced_License', {
      title: 'InstarVision v2 Erweitert Lizenz',
      uplink: '/Software/Windows/InstarVision/Advanced/',
    });
});

softwareRouter.route('/Windows/InstarVision/Advanced/Log')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Advanced_Log', {
      title: 'InstarVision v2 Erweitert Log',
      uplink: '/Software/Windows/InstarVision/Advanced/',
    });
});

softwareRouter.route('/Windows/InstarVision/Advanced/Export')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Advanced_Export', {
      title: 'InstarVision v2 Erweitert Exportieren',
      uplink: '/Software/Windows/InstarVision/Advanced/',
    });
});

softwareRouter.route('/Windows/InstarVision/Advanced/Player')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Advanced_Player', {
      title: 'InstarVision v2 Erweitert Player',
      uplink: '/Software/Windows/InstarVision/Advanced/',
    });
});

softwareRouter.route('/Windows/InstarVision/Advanced/Explorer')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Advanced_Explorer', {
      title: 'InstarVision v2 Erweitert Explorer',
      uplink: '/Software/Windows/InstarVision/Advanced/',
    });
});

softwareRouter.route('/Windows/InstarVision/About')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_About', {
      title: 'InstarVision v2 Über',
      uplink: '/Software/Windows/InstarVision/',
    });
});

softwareRouter.route('/Windows/InstarVision/Windows_Phone')
.get(function(req, res) {
  res.render('./Software/Windows_Phone_InstarVision', {
      title: 'InstarVision für WindowsPhone',
      uplink: '/Software/Windows/InstarVision/',
    });
});

softwareRouter.route('/Windows/InstarVision/Windows_Phone/DDNS')
.get(function(req, res) {
  res.render('./Software/Windows_Phone_InstarVision_DDNS', {
      title: 'InstarVision für Windows Phone - DDNS',
      uplink: '/Software/Windows/InstarVision/Windows_Phone/',
    });
});

softwareRouter.route('/Windows/InstarVision/Windows_Phone/P2P')
.get(function(req, res) {
  res.render('./Software/Windows_Phone_InstarVision_P2P', {
      title: 'InstarVision für Windows Phone - P2P',
      uplink: '/Software/Windows/InstarVision/Windows_Phone/',
    });
});

softwareRouter.route('/Windows/InstarVision/Windows_Phone/Multiview')
.get(function(req, res) {
  res.render('./Software/Windows_Phone_InstarVision_Multiview', {
      title: 'InstarVision für Windows Phone - Multiview',
      uplink: '/Software/Windows/InstarVision/Windows_Phone/',
    });
});

softwareRouter.route('/Windows/InstarVision/Windows_Phone/Recording')
.get(function(req, res) {
  res.render('./Software/Windows_Phone_InstarVision_Recording', {
      title: 'InstarVision für Windows Phone - Recording',
      uplink: '/Software/Windows/InstarVision/Windows_Phone/',
    });
});

softwareRouter.route('/Windows/InstarVision/Windows_Phone/Settings')
.get(function(req, res) {
  res.render('./Software/Windows_Phone_InstarVision_Settings', {
      title: 'InstarVision für Windows Phone - Settings',
      uplink: '/Software/Windows/InstarVision/Windows_Phone/',
    });
});

softwareRouter.route('/Windows/InstarVision/Metro')
.get(function(req, res) {
  res.render('./Software/Windows_Metro_InstarVision', {
      title: 'InstarVision für Windows Metro',
      uplink: '/Software/Windows/InstarVision/',
    });
});

softwareRouter.route('/Windows/InstarVision/Metro/DDNS')
.get(function(req, res) {
  res.render('./Software/Windows_Metro_InstarVision_DDNS', {
      title: 'InstarVision für Windows Metro - DDNS',
      uplink: '/Software/Windows/InstarVision/Metro/',
    });
});

softwareRouter.route('/Windows/InstarVision/Metro/P2P')
.get(function(req, res) {
  res.render('./Software/Windows_Metro_InstarVision_P2P', {
      title: 'InstarVision für Windows Metro - P2P',
      uplink: '/Software/Windows/InstarVision/Metro/',
    });
});

softwareRouter.route('/Windows/InstarVision/Metro/Multiview')
.get(function(req, res) {
  res.render('./Software/Windows_Metro_InstarVision_Multiview', {
      title: 'InstarVision für Windows Metro - Multiview',
      uplink: '/Software/Windows/InstarVision/Metro/',
    });
});

softwareRouter.route('/Windows/InstarVision/Metro/Recording')
.get(function(req, res) {
  res.render('./Software/Windows_Metro_InstarVision_Recording', {
      title: 'InstarVision für Windows Metro - Recording',
      uplink: '/Software/Windows/InstarVision/Metro/',
    });
});

softwareRouter.route('/Windows/InstarVision/Metro/Settings')
.get(function(req, res) {
  res.render('./Software/Windows_Metro_InstarVision_Settings', {
      title: 'InstarVision für Windows Metro - Settings',
      uplink: '/Software/Windows/InstarVision/Metro/',
    });
});

softwareRouter.route('/Windows/iSpy')
.get(function(req, res) {
  res.render('./Software/Windows_iSpy', {
      title: 'iSpy Connect',
      uplink: '/Software/Windows/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/">Software</a></li><li><a href="/Windows/">Windows</a></li><li><a href="/Windows/iSpy/">iSpy</a></li>',
    });
});

softwareRouter.route('/Windows/Sighthound')
.get(function(req, res) {
  res.render('./Software/Windows_Sighthound', {
      title: 'Sighthound',
      uplink: '/Software/Windows/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/">Software</a></li><li><a href="/Windows/">Windows</a></li><li><a href="/Windows/Sighthound/">Sighthound</a></li>',
    });
});

softwareRouter.route('/Windows/P2P_Client')
.get(function(req, res) {
  res.render('./Software/Windows_P2P_Client', {
      title: 'P2P Client',
      uplink: '/Software/Windows/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/">Software</a></li><li><a href="/Windows/">Windows</a></li><li><a href="/Windows/P2P_Client/">P2P Client</a></li>',
    });
});

softwareRouter.route('/Windows/go1984')
.get(function(req, res) {
  res.render('./Software/Windows_go1984', {
      title: 'Logiware go1984',
      uplink: '/Software/Windows/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/">Software</a></li><li><a href="/Windows/">Windows</a></li><li><a href="/Windows/go1984/">go1984</a></li>',
    });
});

softwareRouter.route('/Windows/VLC_Player')
.get(function(req, res) {
  res.render('./Software/Windows_VLC', {
      title: 'VLC Player',
      uplink: '/Software/Windows/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/">Software</a></li><li><a href="/Windows/">Windows</a></li><li><a href="/Windows/VLC_Player/">VLC Player</a></li>',
    });
});

softwareRouter.route('/Windows/CCTV_Chrome_Plugin')
.get(function(req, res) {
  res.render('./Software/Windows_CCTV_Plugin', {
      title: 'CCTV Plugin',
      uplink: '/Software/Windows/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/">Software</a></li><li><a href="/Windows/">Windows</a></li><li><a href="/Windows/CCTV_Chrome_Plugin/">CCTV Plugin</a></li>',
    });
});

softwareRouter.route('/Windows/Blue_Iris')
.get(function(req, res) {
  res.render('./Software/Windows_Blue_Iris', {
      title: 'Blue Iris',
      uplink: '/Software/Windows/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/">Software</a></li><li><a href="/Windows/">Windows</a></li><li><a href="/Windows/Blue_Iris/">Blue Iris</a></li>',
    });
});

softwareRouter.route('/Windows/YAW_Cam')
.get(function(req, res) {
  res.render('./Software/Windows_YAW_Cam', {
      title: 'YAW Cam',
      uplink: '/Software/Windows/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/">Software</a></li><li><a href="/Windows/">Windows</a></li><li><a href="/Windows/YAW_Cam/">YAW Cam</a></li>',
    });
});

softwareRouter.route('/Windows/Zone_Trigger')
.get(function(req, res) {
  res.render('./Software/Windows_Zone_Trigger', {
      title: 'Zone Trigger',
      uplink: '/Software/Windows/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/">Software</a></li><li><a href="/Windows/">Windows</a></li><li><a href="/Windows/Zone_Trigger/">Zone Trigger</a></li>',
    });
});

softwareRouter.route('/Windows/Webcam_XP')
.get(function(req, res) {
  res.render('./Software/Windows_Webcam_XP', {
      title: 'WebcamXP',
      uplink: '/Software/Windows/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/">Software</a></li><li><a href="/Windows/">Windows</a></li><li><a href="/Windows/Webcam_XP/">Webcam XP</a></li>',
    });
});

softwareRouter.route('/Windows/Webcam_Motion_Detector')
.get(function(req, res) {
  res.render('./Software/Windows_Webcam_Motion_Detector', {
      title: 'Webcam Motion Detector',
      uplink: '/Software/Windows/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/">Software</a></li><li><a href="/Windows/">Windows</a></li><li><a href="/Windows/Webcam_Motion_Detector/">Webcam Motion Detector</a></li>',
    });
});

softwareRouter.route('/Windows/Zebra_Surveillance')
.get(function(req, res) {
  res.render('./Software/Windows_Zebra_Surveillance', {
      title: 'Zebra Surveillance',
      uplink: '/Software/Windows/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/">Software</a></li><li><a href="/Windows/">Windows</a></li><li><a href="/Windows/Zebra_Surveillance/">Zebra Surveillance</a></li>',
    });
});

/* *************************  GET InstarVision für    macOS /macOS *********************************** */
softwareRouter.route('/macOS')
.get(function(req, res) {
  res.render('./Software/MacOS', {
      title: 'Software für macOS',
      uplink: '/Software/',
    });
});

softwareRouter.route('/macOS/Sighthound')
.get(function(req, res) {
  res.render('./Software/Windows_Sighthound', {
      title: 'Sighthound',
      uplink: 'Software/macOS/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/">Software</a></li><li><a href="/macOS/">macOS</a></li><li><a href="/macOS/Sighthound/">Sighthound</a></li>',
    });
});

softwareRouter.route('/macOS/EvoCam')
.get(function(req, res) {
  res.render('./Software/macOS_EvoCam', {
      title: 'EvoCam',
      uplink: 'Software/macOS/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/">Software</a></li><li><a href="/macOS/">macOS</a></li><li><a href="/macOS/EvoCam/">EvoCam</a></li>',
    });
});

softwareRouter.route('/macOS/VLC_Player')
.get(function(req, res) {
  res.render('./Software/Windows_VLC', {
      title: 'VLC Player',
      uplink: 'Software/macOS/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/">Software</a></li><li><a href="/macOS/">macOS</a></li><li><a href="/macOS/VLC_Player/">VLC Player</a></li>',
    });
});

softwareRouter.route('/macOS/SecuritySpy')
.get(function(req, res) {
  res.render('./Software/macOS_SecuritySpy', {
      title: 'SecuritySpy',
      uplink: 'Software/macOS/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/">Software</a></li><li><a href="/macOS/">macOS</a></li><li><a href="/macOS/SecuritySpy/">SecuritySpy</a></li>',
    });
});

/* ************************************ GET InstarVision für    Android /Android ************************ */
softwareRouter.route('/Android')
.get(function(req, res) {
  res.render('./Software/Android', {
      title: 'Software für Android',
      uplink: '/Software/',
    });
});

softwareRouter.route('/Android/InstarVision')
.get(function(req, res) {
  res.render('./Software/Android_InstarVision', {
      title: 'InstarVision für Android',
      uplink: '/Software/Android/',
    });
});

softwareRouter.route('/Android/InstarVision/DDNS')
.get(function(req, res) {
  res.render('./Software/Android_InstarVision_DDNS', {
      title: 'InstarVision für Android - DDNS',
      uplink: '/Software/Android/InstarVision/',
    });
});

softwareRouter.route('/Android/InstarVision/P2P')
.get(function(req, res) {
  res.render('./Software/Android_InstarVision_P2P', {
      title: 'InstarVision für Android - P2P',
      uplink: '/Software/Android/InstarVision/',
    });
});

softwareRouter.route('/Android/InstarVision/Multiview')
.get(function(req, res) {
  res.render('./Software/Android_InstarVision_Multiview', {
      title: 'InstarVision für Android - Multiview',
      uplink: '/Software/Android/InstarVision/',
    });
});

softwareRouter.route('/Android/InstarVision/Recording')
.get(function(req, res) {
  res.render('./Software/Android_InstarVision_Recording', {
      title: 'InstarVision für Android - Recording',
      uplink: '/Software/Android/InstarVision/',
    });
});

softwareRouter.route('/Android/InstarVision/Settings')
.get(function(req, res) {
  res.render('./Software/Android_InstarVision_Settings', {
      title: 'InstarVision für Android - Settings',
      uplink: '/Software/Android/InstarVision/',
    });
});

softwareRouter.route('/Android/TinyCam_Monitor')
.get(function(req, res) {
  res.render('./Software/Android_TinyCam', {
      title: 'TinyCam Monitor',
      uplink: '/Software/Android/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/">Software</a></li><li><a href="/Android/">Android</a></li><li><a href="/Android/TinyCam_Monitor/">TinyCam Monitor</a></li>',
    });
});

softwareRouter.route('/Android/IP_Cam_Viewer')
.get(function(req, res) {
  res.render('./Software/Android_IP_CamViewer', {
      title: 'IP Cam Viewer',
      uplink: '/Software/Android/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/">Software</a></li><li><a href="/Android/">Android</a></li><li><a href="/Android/IP_Cam_Viewer/">IP Cam Viewer</a></li>',
    });
});

/* *********************************** GET InstarVision für    iOS /iOS ******************************* */
softwareRouter.route('/iOS')
.get(function(req, res) {
  res.render('./Software/iOS', {
      title: 'Software für iOS',
      uplink: '/Software/',
    });
});

softwareRouter.route('/iOS/InstarVision/iPhone')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPhone', {
      title: 'InstarVision für iPhone',
      uplink: '/Software/iOS/InstarVision/',
    });
});

softwareRouter.route('/iOS/InstarVision/iPhone/DDNS')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPhone_DDNS', {
      title: 'InstarVision für iOS - DDNS',
      uplink: '/Software/iOS/InstarVision/iPhone/',
    });
});

softwareRouter.route('/iOS/InstarVision/iPhone/P2P')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPhone_P2P', {
      title: 'InstarVision für iOS - P2P',
      uplink: '/Software/iOS/InstarVision/iPhone/',
    });
});

softwareRouter.route('/iOS/InstarVision/iPhone/Multiview')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPhone_Multiview', {
      title: 'InstarVision für iOS - Multiview',
      uplink: '/Software/iOS/InstarVision/iPhone/',
    });
});

softwareRouter.route('/iOS/InstarVision/iPhone/Recording')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPhone_Recording', {
      title: 'InstarVision für iOS - Recording',
      uplink: '/Software/iOS/InstarVision/iPhone/',
    });
});

softwareRouter.route('/iOS/InstarVision/iPhone/Settings')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPhone_Settings', {
      title: 'InstarVision füriOS - Settings',
      uplink: '/Software/iOS/InstarVision/iPhone/',
    });
});

softwareRouter.route('/iOS/InstarVision/iPad')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPad', {
      title: 'InstarVision für iPad',
      uplink: '/Software/iOS/InstarVision/',
    });
});

softwareRouter.route('/iOS/InstarVision/iPad/DDNS')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPad_DDNS', {
      title: 'InstarVision für iOS - DDNS',
      uplink: '/Software/iOS/InstarVision/iPad/',
    });
});

softwareRouter.route('/iOS/InstarVision/iPad/P2P')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPad_P2P', {
      title: 'InstarVision für iOS - P2P',
      uplink: '/Software/iOS/InstarVision/iPad/',
    });
});

softwareRouter.route('/iOS/InstarVision/iPad/Multiview')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPad_Multiview', {
      title: 'InstarVision für iOS - Multiview',
      uplink: '/Software/iOS/InstarVision/iPad/',
    });
});

softwareRouter.route('/iOS/InstarVision/iPad/Recording')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPad_Recording', {
      title: 'InstarVision für iOS - Recording',
      uplink: '/Software/iOS/InstarVision/iPad/',
    });
});

softwareRouter.route('/iOS/InstarVision/iPad/Settings')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPad_Settings', {
      title: 'InstarVision für iOS - Settings',
      uplink: '/Software/iOS/InstarVision/iPad/',
    });
});

softwareRouter.route('/iOS/InstarVision')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision', {
      title: 'InstarVision für iOS',
      uplink: '/Software/iOS/',
    });
});

softwareRouter.route('/iOS/LiveCams')
.get(function(req, res) {
  res.render('./Software/iOS_LiveCams', {
      title: 'LiveCams',
      uplink: '/Software/iOS/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/">Software</a></li><li><a href="/iOS/">iOS</a></li><li><a href="/iOS/LiveCams/">LiveCams</a></li>',
    });
});

softwareRouter.route('/iOS/IP_Vision_Pro')
.get(function(req, res) {
  res.render('./Software/iOS_IP_Vision_Pro', {
      title: 'IP Vision Pro',
      uplink: '/Software/iOS/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/">Software</a></li><li><a href="/iOS/">iOS</a></li><li><a href="/iOS/IP_Vision_Pro/">IP Vision Pro</a></li>',
    });
});

softwareRouter.route('/iOS/ICCAM')
.get(function(req, res) {
  res.render('./Software/iOS_ICCAM', {
      title: 'ICCAM',
      uplink: '/Software/iOS/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/">Software</a></li><li><a href="/iOS/">iOS</a></li><li><a href="/iOS/ICCAM/">ICCAM</a></li>',
    });
});

softwareRouter.route('/iOS/IP_Cam_Viewer')
.get(function(req, res) {
  res.render('./Software/Android_IP_CamViewer', {
      title: 'IP Cam Viewer',
      uplink: '/Software/iOS/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/">Software</a></li><li><a href="/iOS/">iOS</a></li><li><a href="/iOS/IP_Cam_Viewer/">IP Cam Viewer</a></li>',
    });
});

softwareRouter.route('/iOS/P2P_Cam_Live')
.get(function(req, res) {
  res.render('./Software/iOS_P2P_Cam_Live', {
      title: 'P2P Cam Live',
      uplink: '/Software/iOS/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/">Software</a></li><li><a href="/iOS/">iOS</a></li><li><a href="/iOS/P2P_Cam_Live/">P2P Cam Live</a></li>',
    });
});

/* ************************************ GET InstarVision für    Windows Phone /Other_Platforms *************** */
softwareRouter.route('/Other_Platforms')
.get(function(req, res) {
  res.render('./Software/Other_Platforms', {
      title: 'Other Platforms',
      uplink: '/Software/',
    });
});

softwareRouter.route('/Other_Platforms/InstarVision_Blackberry')
.get(function(req, res) {
  res.render('./Software/Android_InstarVision_Blackberry', {
      title: 'InstarVision Blackberry',
      uplink: '/Software/Other_Platforms/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/">Software</a></li><li><a href="/Other_Platforms/">Other</a></li><li><a href="/Other_Platforms/InstarVision_Blackberry/">InstarVisione</a></li>',
    });
});

softwareRouter.route('/Other_Platforms/QNAP')
.get(function(req, res) {
  res.render('./Software/Other_Platforms_QNAP', {
      title: 'QNAP',
      uplink: '/Software/Other_Platforms/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/">Software</a></li><li><a href="/Other_Platforms/">Other</a></li><li><a href="/Other_Platforms/QNAP/">QNAP</a></li>',
    });
});

softwareRouter.route('/Other_Platforms/Synology')
.get(function(req, res) {
  res.render('./Software/Other_Platforms_Synology', {
      title: 'Synology',
      uplink: '/Software/Other_Platforms/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/">Software</a></li><li><a href="/Other_Platforms/">Other</a></li><li><a href="/Other_Platforms/Synology/">Synology</a></li>',
    });
});

softwareRouter.route('/Other_Platforms/AVM_Fritzphone')
.get(function(req, res) {
  res.render('./Software/Other_Platforms_AVM_Fritzphone', {
      title: 'AVM Fritzphone',
      uplink: '/Software/Other_Platforms/',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/">Software</a></li><li><a href="/Other_Platforms/">Other</a></li><li><a href="/Other_Platforms/AVM_Fritzphone/">AVM Fritzphone</a></li>',
    });
});



module.exports = softwareRouter;
