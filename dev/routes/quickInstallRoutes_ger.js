var express = require('express');
var quickInstallGerRouter = express.Router();

/* GET quickInstall page. */
quickInstallGerRouter.route('/')
    .get(function(req, res) {
    res.render('./Quick_Installation/Quick_Installation', {
        title: 'Schnell Installation',
        ampimg: '/images/Search/QI_SearchThumb_QuickInstallation.jpg',
        headline: 'Schnell Installation',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Schnell_Installation/">Schnell Installation</a></li>',
        canonical: '/Quick_Installation/',
        pacc: '',
        ptab: 'hidden',
        qiacc: 'expanded',
        qitab: '',
        mdacc: '',
        mdtab: 'hidden',
        iaacc: '',
        iatab: 'hidden',
        auacc: '',
        autab: 'hidden',
        hdacc: 'hidden',
        hdtab: 'hidden',
        fhdacc: 'hidden',
        fhdtab: 'hidden',
        sacc: 'hidden',
        dlacc: 'hidden',
        dltab: 'hidden',
      });
  });

/* GET How Does An IP Camera Work? /How_Does_An_IP_Camera_Work */
quickInstallGerRouter.route('/Wie_Funktioniert_eine_IP_Camera')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_Does_An_IP_Camera_Work', {
            title: 'Wie funktioniert eine IP Camera?',
            ampimg: '/images/Search/QI_SearchThumb_HowDoesAnIPCameraWork.jpg',
            headline: 'Wie funktioniert eine IP Camera?',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Wie_Funktioniert_eine_IP_Camera/">Wie funktioniert eine IP Camera?</a></li>',
            canonical: '/Quick_Installation/How_Does_An_IP_Camera_Work/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET First Steps to get your IP camera working /First_Steps */
quickInstallGerRouter.route('/Erste_Schritte')
    .get(function(req, res) {
        res.render('./Quick_Installation/First_Steps', {
            title: 'Erste Schritte der IP Kamera Installation',
            ampimg: '/images/Search/QI_SearchThumb_FirstStepsWithYourIPCamera.jpg',
            headline: 'Erste Schritte der IP Kamera Installation',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Erste_Schritte/">Erste Schritte</a></li>',
            canonical: '/Quick_Installation/First_Steps/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET After unpacking your INSTAR IP Camera /After_Unpacking */
quickInstallGerRouter.route('/Nach_dem_Auspacken')
    .get(function(req, res) {
        res.render('./Quick_Installation/After_Unpacking', {
            title: 'Nach dem Auspacken Ihrer INSTAR IP Kamera',
            ampimg: '/images/Search/QI_SearchThumb_AfterUnpackingYourIPCamera.jpg',
            headline: 'After unpacking your INSTAR IP Camera',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Nach_dem_Auspacken/">Nach dem Auspacken</a></li>',
            canonical: '/Quick_Installation/After_Unpacking/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Direct connection with a PC or Notebook /Direct_LAN_Connection */
quickInstallGerRouter.route('/Power_over_Ethernet')
    .get(function(req, res) {
        res.render('./Quick_Installation/Power_over_Ethernet', {
            title: 'Power over Ethernet',
            ampimg: '/images/Search/QI_SearchThumb_PowerOverEthernet.jpg.png',
            headline: 'Stromversorgung über das Ethernet Cable',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Power_over_Ethernet/">Power over Ethernet</a></li>',
            canonical: '/Quick_Installation/Power_over_Ethernet/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Direct connection with a PC or Notebook /Direct_LAN_Connection */
quickInstallGerRouter.route('/Powerline')
    .get(function(req, res) {
        res.render('./Quick_Installation/Powerline', {
            title: 'Powerline',
            ampimg: '/images/Search/QI_SearchThumb_PowerOverEthernet.jpg.png',
            headline: 'IN-LAN - Netzwerk über das Stromnetz',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Schnell Installation</a></li><li><a href="/Quick_Installation/Powerline/">Powerline</a></li>',
            canonical: '/Quick_Installation/Powerline/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Direct connection with a PC or Notebook /Direct_LAN_Connection */
quickInstallGerRouter.route('/Direkte_LAN_Verbindung')
    .get(function(req, res) {
        res.render('./Quick_Installation/Direct_LAN_Connection', {
            title: 'Direkte LAN Verbindung mit Ihrem Laptop',
            ampimg: '/images/Search/QI_SearchThumb_DirectConnectionWithYourPC.jpg',
            headline: 'Direkte LAN Verbindung mit Ihrem Laptop',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Direkte_LAN_Verbindung/">Direkte LAN Verbindung</a></li>',
            canonical: '/Quick_Installation/Direct_LAN_Connection/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Find your IP Camera with an IP Scanner /Alternative_IP_Scanner */
quickInstallGerRouter.route('/Alternative_IP_Scanner')
    .get(function(req, res) {
        res.render('./Quick_Installation/Alternative_IP_Scanner', {
            title: 'Wenn das INSTAR Kamera Tool Ihre Kamera nicht findet',
            ampimg: '/images/Search/QI_SearchThumb_AlternativeIPScanner_eng.jpg',
            headline: 'Wenn das INSTAR Kamera Tool Ihre Kamera nicht findet',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Alternative_IP_Scanner/">Alternative IP Scanner</a></li>',
            canonical: '/Quick_Installation/Alternative_IP_Scanner/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Angry IP Scanner /Angry_IP_Scanner */
quickInstallGerRouter.route('/Alternative_IP_Scanner/Angry_IP_Scanner')
    .get(function(req, res) {
        res.render('./Quick_Installation/Angry_IP_Scanner', {
            title: 'Angry IP Scanner',
            ampimg: '/images/Search/QI_SearchThumb_AlternativeIPScanner_Angry_eng.jpg',
            headline: 'Angry IP Scanner',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Alternative_IP_Scanner/">Alternative IP Scanner</a></li><li><a href="/Schnell_Installation/Alternative_IP_Scanner/Angry_IP_Scanner/">Angry IP Scanner</a></li>',
            canonical: '/Quick_Installation/Alternative_IP_Scanner/Angry_IP_Scanner/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Fing CLI /Fing_CLI */
quickInstallGerRouter.route('/Alternative_IP_Scanner/Fing_CLI')
    .get(function(req, res) {
        res.render('./Quick_Installation/Fing_CLI', {
            title: 'Fing IP Scanner - Command Line Interface',
            ampimg: '/images/Search/QI_SearchThumb_AlternativeIPScanner_FingCLI_eng.jpg',
            headline: 'Fing CLI',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Alternative_IP_Scanner/">Alternative IP Scanner</a></li><li><a href="/Schnell_Installation/Alternative_IP_Scanner/Fing_CLI/">Fing CLI</a></li>',
            canonical: '/Quick_Installation/Alternative_IP_Scanner/Fing_CLI/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Fing Mobile /Fing_Mobile */
quickInstallGerRouter.route('/Alternative_IP_Scanner/Fing_Mobile')
    .get(function(req, res) {
        res.render('./Quick_Installation/Fing_Mobile', {
            title: 'Fing IP Scanner - Mobile App',
            ampimg: '/images/Search/QI_SearchThumb_AlternativeIPScanner_FingMobile_eng.jpg',
            headline: 'Fing Mobile',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Alternative_IP_Scanner/">Alternative IP Scanner</a></li><li><a href="/Schnell_Installation/Alternative_IP_Scanner/Fing_Mobile/">Fing Mobile</a></li>',
            canonical: '/Quick_Installation/Alternative_IP_Scanner/Fing_Mobile/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Language Selection /Language_Selection */
quickInstallGerRouter.route('/Sprachauswahl')
    .get(function(req, res) {
        res.render('./Quick_Installation/Language_Selection', {
            title: 'Sprachauswahl',
            ampimg: '/images/Search/QI_SearchThumb_LanguageSettings.jpg',
            headline: 'Sprachauswahl',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Sprachauswahl/">Sprachauswahl</a></li>',
            canonical: '/Quick_Installation/Language_Selection/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallGerRouter.route('/Live_Video')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video', {
            title: 'Live Video',
            ampimg: '/images/Search/QI_SearchThumb_LiveVideo.jpg',
            headline: 'Live Video',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Live_Video/">Live Video</a></li>',
            canonical: '/Quick_Installation/Live_Video/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallGerRouter.route('/Live_Video/ActiveX')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_ActiveX', {
            title: 'Live Video ActiveX',
            ampimg: '/images/Search/QI_SearchThumb_LiveVideo_ActiveX.jpg',
            headline: 'Live Video ActiveX',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Live_Video/">Live Video</a></li><li><a href="/Schnell_Installation/Live_Video/ActiveX/">ActiveX</a></li>',
            canonical: '/Quick_Installation/Live_Video/ActiveX/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallGerRouter.route('/Live_Video/QuickTime')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_QuickTime', {
            title: 'Live Video QuickTime',
            ampimg: '/images/Search/QI_SearchThumb_LiveVideo_QuickTime.jpg',
            headline: 'Live Video Quicktime',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Live_Video/">Live Video</a></li><li><a href="/Schnell_Installation/Live_Video/QuickTime/">QuickTime</a></li>',
            canonical: '/Quick_Installation/Live_Video/QuickTime/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallGerRouter.route('/Live_Video/MJPEG')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_MJPEG', {
            title: 'Live Video MJPEG',
            ampimg: '/images/Search/QI_SearchThumb_LiveVideo_MJPEG.jpg',
            headline: 'Live Video MJPEG',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Live_Video/">Live Video</a></li><li><a href="/Schnell_Installation/Live_Video/MJPEG/">MJPEG</a></li>',
            canonical: '/Quick_Installation/Live_Video/MJPEG/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallGerRouter.route('/Live_Video/Problembehebung/Avast')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_Avast', {
            title: 'Live Video Avast',
            ampimg: '/images/Search/QI_SearchThumb_LiveVideo_Avast.jpg',
            headline: 'Live Video Troubleshooting Avast',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Live_Video/">Live Video</a></li><li><a href="/Schnell_Installation/Live_Video/Problembehebung/Avast/">AVAST</a></li>',
            canonical: '/Quick_Installation/Live_Video/Troubleshooting/Avast/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallGerRouter.route('/Live_Video/Problembehebung/Kaspersky_2013')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_Kaspersky_2013', {
            title: 'Live Video Kaspersky 2013',
            ampimg: '/images/Search/QI_SearchThumb_LiveVideo_Kaspersky13.jpg',
            headline: 'Live Video Troubleshooting Kaspersky 2013',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Live_Video/">Live Video</a></li><li><a href="/Schnell_Installation/Live_Video/Problembehebung/Kaspersky_2013/">Kaspersky 2013</a></li>',
            canonical: '/Quick_Installation/Live_Video/Troubleshooting/Kaspersky_2013/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallGerRouter.route('/Live_Video/Problembehebung/Kaspersky_2014')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_Kaspersky_2014', {
            title: 'Live Video Kaspersky 2014',
            ampimg: '/images/Search/QI_SearchThumb_LiveVideo_Kaspersky14.jpg',
            headline: 'Live Video TroubleshootingKaspersky 2014',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Live_Video/">Live Video</a></li><li><a href="/Schnell_Installation/Live_Video/Problembehebung/Kaspersky_2014/">Kaspersky 2014</a></li>',
            canonical: '/Quick_Installation/Live_Video/Troubleshooting/Kaspersky_2014/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallGerRouter.route('/Live_Video/Problembehebung/Kaspersky_2017')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_Kaspersky_2017', {
            title: 'Live Video Kaspersky 2017',
            ampimg: '/images/Search/QI_SearchThumb_LiveVideo_Kaspersky17.jpg',
            headline: 'Live Video Troubleshooting Kaspersky 2017',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Live_Video/">Live Video</a></li><li><a href="/Schnell_Installation/Live_Video/Problembehebung/Kaspersky_2017/">Kaspersky 2017</a></li>',
            canonical: '/Quick_Installation/Live_Video/Troubleshooting/Kaspersky_2017/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallGerRouter.route('/Live_Video/Problembehebung/AVG')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_AVG', {
            title: 'Live Video AVG',
            ampimg: '/images/Search/QI_SearchThumb_LiveVideo_AVG.jpg',
            headline: 'Live Video Troubleshooting AVG',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Live_Video/">Live Video</a></li><li><a href="/Schnell_Installation/Live_Video/Problembehebung/AVG/">AVG</a></li>',
            canonical: '/Quick_Installation/Live_Video/Troubleshooting/AVG/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallGerRouter.route('/Live_Video/Problembehebung/GDATA')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_GDATA', {
            title: 'Live Video GDATA',
            ampimg: '/images/Search/QI_SearchThumb_LiveVideo_GDATA.jpg',
            headline: 'Live Video Troubleshooting GDATA',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Live_Video/">Live Video</a></li><li><a href="/Schnell_Installation/Live_Video/Problembehebung/GDATA/">GDATA</a></li>',
            canonical: '/Quick_Installation/Live_Video/Troubleshooting/GDATA/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallGerRouter.route('/Live_Video/Problembehebung/AVIRA')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_AVIRA', {
            title: 'Live Video AVIRA',
            ampimg: '/images/Search/QI_SearchThumb_LiveVideo_Avira.jpg',
            headline: 'Live Video Troubleshooting AVIRA',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Live_Video/">Live Video</a></li><li><a href="/Schnell_Installation/Live_Video/Problembehebung/Avira/">Avira</a></li>',
            canonical: '/Quick_Installation/Live_Video/Troubleshooting/AVIRA/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Live Video Selection /Live_Video */
quickInstallGerRouter.route('/Live_Video/Problembehebung/F-Secure')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_F-Secure', {
            title: 'Live Video F-Secure',
            ampimg: '/images/Search/QI_SearchThumb_LiveVideo_F-Secure.jpg',
            headline: 'Live Video Troubleshooting F-Secure',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Live_Video/">Live Video</a></li><li><a href="/Schnell_Installation/Live_Video/Problembehebung/F-Secure/">F-Secure</a></li>',
            canonical: '/Quick_Installation/Live_Video/Troubleshooting/F-Secure/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET Creating user accounts on your camera /Creating_User_Accounts */
quickInstallGerRouter.route('/Benutzerverwaltung')
    .get(function(req, res) {
        res.render('./Quick_Installation/Creating_User_Accounts', {
            title: 'Sichern Sie den Zugriff auf Ihre Kamera',
            ampimg: '/images/Search/QI_SearchThumb_CreatingUserAccounts.jpg',
            headline: 'Sichern Sie den Zugriff auf Ihre Kamera',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Benutzerverwaltung/">Benutzerverwaltung</a></li>',
            canonical: '/Quick_Installation/Creating_User_Accounts/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET WebUI and Firmware Upgrade /WebUI_And_Firmware_Upgrade */
quickInstallGerRouter.route('/WebUI_und_Firmware_Upgrade')
    .get(function(req, res) {
        res.render('./Quick_Installation/WebUI_And_Firmware_Upgrade', {
            title: 'Weboberfläche und Firmware Upgrade',
            ampimg: '/images/Search/QI_SearchThumb_WebUIFirmwareUpgrade_1080p.jpg',
            headline: 'Weboberfläche und Firmware Upgrade',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/WebUI_und_Firmware_Upgrade/">Software Upgrade</a></li>',
            canonical: '/Quick_Installation/WebUI_And_Firmware_Upgrade/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET /WebUI_And_Firmware_Upgrade_HD */
quickInstallGerRouter.route('/WebUI_und_Firmware_Upgrade/720p_Kameras')
    .get(function(req, res) {
        res.render('./Quick_Installation/WebUI_And_Firmware_Upgrade_HD', {
            title: 'Weboberfläche und Firmware Upgrade für HD Cameras',
            ampimg: '/images/Search/QI_SearchThumb_WebUIFirmwareUpgrade_720p.jpg',
            headline: 'Weboberfläche und Firmware Upgrade für HD Cameras',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/WebUI_und_Firmware_Upgrade/">Software Upgrade</a></li><li><a href="/Schnell_Installation/WebUI_und_Firmware_Upgrade/720p_Kameras/">720p Kameras</a></li>',
            canonical: '/Quick_Installation/WebUI_And_Firmware_Upgrade/720p_Cameras/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET /WebUI_And_Firmware_Upgrade_VGA */
quickInstallGerRouter.route('/WebUI_und_Firmware_Upgrade/VGA_Kameras')
    .get(function(req, res) {
        res.render('./Quick_Installation/WebUI_And_Firmware_Upgrade_VGA', {
            title: 'Weboberfläche und Firmware Upgrade für VGA Kameras',
            ampimg: '/images/Search/QI_SearchThumb_WebUIFirmwareUpgrade_VGA.jpg',
            headline: 'Weboberfläche und Firmware Upgrade für VGA Kameras',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/WebUI_und_Firmware_Upgrade/">Software Upgrade</a></li><li><a href="/Schnell_Installation/WebUI_und_Firmware_Upgrade/VGA_Kameras/">VGA Kameras</a></li>',
            canonical: '/Quick_Installation/WebUI_And_Firmware_Upgrade/VGA_Cameras/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET /How_To_Clear_Your_Browsing_History */
quickInstallGerRouter.route('/Leeren_des_Browserverlaufs')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History', {
            title: 'Wie leert man den Browserverlauf?',
            ampimg: '/images/Search/QI_SearchThumb_ClearBrowsingHistory.jpg',
            headline: 'Wie leert man den Browserverlauf?',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Leeren_des_Browserverlaufs/">Wie leert man den Browserverlauf?</a></li>',
            canonical: '/Quick_Installation/How_To_Clear_Your_Browsing_History/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET /Internet_Explorer */
quickInstallGerRouter.route('/Leeren_des_Browserverlaufs/Internet_Explorer')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History_Internet_Explorer', {
            title: 'Wie leert man den Browserverlauf Internet Explorer',
            ampimg: '/images/Search/QI_SearchThumb_ClearBrowsingHistory_IE.jpg',
            headline: 'Wie leert man den Browserverlauf Internet Explorer',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Leeren_des_Browserverlaufs/">Browserverlauf</a></li><li><a href="/Schnell_Installation/Leeren_des_Browserverlaufs/Internet_Explorer/">Internet Explorer</a></li>',
            canonical: '/Quick_Installation/How_To_Clear_Your_Browsing_History/Internet_Explorer/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET /Mozilla_Firefox */
quickInstallGerRouter.route('/Leeren_des_Browserverlaufs/Mozilla_Firefox')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History_Mozilla_Firefox', {
            title: 'Wie leert man den Browserverlauf Mozilla Firefox',
            ampimg: '/images/Search/QI_SearchThumb_ClearBrowsingHistory_Firefox.jpg',
            headline: 'Wie leert man den Browserverlauf Mozilla Firefox',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Leeren_des_Browserverlaufs/">Browserverlauf</a></li><li><a href="/Schnell_Installation/Leeren_des_Browserverlaufs/Mozilla_Firefox/">Mozilla Firefox</a></li>',
            canonical: '/Quick_Installation/How_To_Clear_Your_Browsing_History/Mozilla_Firefox/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET /Google_Chromium */
quickInstallGerRouter.route('/Leeren_des_Browserverlaufs/Google_Chromium')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History_Google_Chromium', {
            title: 'Wie leert man den Browserverlauf Google Chromium',
            ampimg: '/images/Search/QI_SearchThumb_ClearBrowsingHistory_Chrome.jpg',
            headline: 'Wie leert man den Browserverlauf Google Chromium',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Leeren_des_Browserverlaufs/">Browserverlauf</a></li><li><a href="/Schnell_Installation/Leeren_des_Browserverlaufs/Google_Chromium/">Google Chromium</a></li>',
            canonical: '/Quick_Installation/How_To_Clear_Your_Browsing_History/Google_Chromium/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET /Opera */
quickInstallGerRouter.route('/Leeren_des_Browserverlaufs/Opera')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History_Opera', {
            title: 'Wie leert man den Browserverlauf Opera',
            ampimg: '/images/Search/QI_SearchThumb_ClearBrowsingHistory_Opera.jpg',
            headline: 'Wie leert man den Browserverlauf Opera',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Leeren_des_Browserverlaufs/">Browserverlauf</a></li><li><a href="/Schnell_Installation/Leeren_des_Browserverlaufs/Opera/">Opera</a></li>',
            canonical: '/Quick_Installation/How_To_Clear_Your_Browsing_History/Opera/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET /Microsoft_Edge */
quickInstallGerRouter.route('/Leeren_des_Browserverlaufs/Microsoft_Edge')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History_Microsoft_Edge', {
            title: 'Wie leert man den Browserverlauf Microsoft Edge',
            ampimg: '/images/Search/QI_SearchThumb_ClearBrowsingHistory_Edge.jpg',
            headline: 'Wie leert man den Browserverlauf Microsoft Edge',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Leeren_des_Browserverlaufs/">Browserverlauf</a></li><li><a href="/Schnell_Installation/Leeren_des_Browserverlaufs/Microsoft_Edge/">Microsoft Edge</a></li>',
            canonical: '/Quick_Installation/How_To_Clear_Your_Browsing_History/Microsoft_Edge/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET /Vivaldi */
quickInstallGerRouter.route('/Leeren_des_Browserverlaufs/Vivaldi')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History_Vivaldi', {
            title: 'Wie leert man den Browserverlauf Vivaldi',
            ampimg: '/images/Search/QI_SearchThumb_ClearBrowsingHistory_Vivaldi.jpg',
            headline: 'Wie leert man den Browserverlauf Vivaldi',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Leeren_des_Browserverlaufs/">Browserverlauf</a></li><li><a href="/Schnell_Installation/Leeren_des_Browserverlaufs/Vivaldi/">Vivaldi</a></li>',
            canonical: '/Quick_Installation/How_To_Clear_Your_Browsing_History/Vivaldi/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET How to set up a Wireless Connection /Set_Up_A_Wireless_Connection */
quickInstallGerRouter.route('/Herstellen_der_WLAN_Verbindung')
    .get(function(req, res) {
        res.render('./Quick_Installation/Set_Up_A_Wireless_Connection', {
            title: 'Herstellen der WLAN Verbindung',
            ampimg: '/images/Search/QI_SearchThumb_WLAN.jpg',
            headline: 'Herstellen der WLAN Verbindung zu Ihrer INSTAR IP Kamera',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Herstellen_der_WLAN_Verbindung/">Herstellen der WLAN Verbindung</a></li>',
            canonical: '/Quick_Installation/Set_Up_A_Wireless_Connection/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

/* GET /ONVIF */
quickInstallGerRouter.route('/ONVIF')
    .get(function(req, res) {
        res.render('./Quick_Installation/ONVIF', {
            title: 'ONVIF',
            ampimg: '/images/Search/QI_SearchThumb_ONVIF.jpg',
            headline: 'ONVIF',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/ONVIF/">ONVIF</a></li>',
            canonical: '/Quick_Installation/ONVIF/',
			pacc: '',
			ptab: 'hidden',
			qiacc: 'expanded',
			qitab: '',
			mdacc: '',
			mdtab: 'hidden',
			iaacc: '',
			iatab: 'hidden',
			auacc: '',
			autab: 'hidden',
			hdacc: 'hidden',
			hdtab: 'hidden',
			fhdacc: 'hidden',
			fhdtab: 'hidden',
			sacc: 'hidden',
			dlacc: 'hidden',
			dltab: 'hidden',
          });
      });

module.exports = quickInstallGerRouter;
