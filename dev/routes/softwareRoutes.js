var express = require('express');
var softwareRouter = express.Router();



/* ****************************************** GET /Software ****************************************** */
softwareRouter.route('/')
.get(function(req, res) {
  res.render('./Software/Software', {
      title: 'IP Überwachungssoftware für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'Eine Übersicht über kompatible Video Überwachungssoftware für Ihre INSTAR Sicherheitskamera',
      canonical: '/Software/',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li>',
      description: 'Eine Übersicht über kompatible Video Überwachungssoftware für Ihre INSTAR Sicherheitskamera',
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
  		hdacc: 'hidden',
  		hdtab: 'hidden',
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: '',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

/* ****************************  GET InstarVision for Windows /Windows ************************************* */
softwareRouter.route('/Windows')
.get(function(req, res) {
  res.render('./Software/Windows', {
      title: 'Windows Video Überwachungssoftware für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'Eine Übersicht über kompatible Windows Video Überwachungssoftware für Ihre INSTAR Sicherheitskamera',
      canonical: '/Software/Windows/',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Windows/">Windows</a></li>',
      description: 'Eine Übersicht über kompatible Windows Video Überwachungssoftware für Ihre INSTAR Sicherheitskamera',
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
  		hdacc: 'hidden',
  		hdtab: 'hidden',
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: '',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

softwareRouter.route('/Windows/InstarVision')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision', {
      title: 'InstarVision für Windows',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Windows.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Windows/">Windows</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/">InstarVision</a></li>',
      canonical: '/Software/Windows/InstarVision/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    });
});

softwareRouter.route('/Windows/InstarVision/Camera_List')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Camera_List', {
      title: 'InstarVision v2 Kamera Liste',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Windows.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Windows/">Windows</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Camera_List/">Camera List</a></li>',
      canonical: '/Software/Windows/InstarVision/Camera_List/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    });
});

softwareRouter.route('/Windows/InstarVision/Layout')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Layout', {
      title: 'InstarVision v2 Layout',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Windows.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Windows/">Windows</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Layout/">Layout</a></li>',
      canonical: '/Software/Windows/InstarVision/Layout/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    });
});

softwareRouter.route('/Windows/InstarVision/PTZ')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_PTZ', {
      title: 'InstarVision v2 Pan, Tilt & Zoom',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Windows.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Windows/">Windows</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Camera_List/">Pan, Tilt & Zoom</a></li>',
      canonical: '/Software/Windows/InstarVision/PTZ/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    });
});

softwareRouter.route('/Windows/InstarVision/Image_Adjust')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Image_Adjust', {
      title: 'InstarVision v2 Bild Einstellungen',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Windows.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Windows/">Windows</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Image_Adjust/">Bildeinstellungen</a></li>',
      canonical: '/Software/Windows/InstarVision/Image_Adjust/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    });
});

softwareRouter.route('/Windows/InstarVision/Webserver')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Webserver', {
      title: 'InstarVision v2 Webserver',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Windows.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Windows/">Windows</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Webserver/">Webserver</a></li>',
      canonical: '/Software/Windows/InstarVision/Webserver/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    });
});

softwareRouter.route('/Windows/InstarVision/Record')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Record', {
      title: 'InstarVision v2 Aufnahme',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Windows.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Windows/">Windows</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Record/">Recording</a></li>',
      canonical: '/Software/Windows/InstarVision/Record/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    });
});

softwareRouter.route('/Windows/InstarVision/Record/General')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Record_General', {
      title: 'InstarVision v2 Record Allgemein',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Windows.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Windows/">Windows</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Record/">Recording</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Record/General/">General</a></li>',
      canonical: '/Software/Windows/InstarVision/Record/General/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    });
});

softwareRouter.route('/Windows/InstarVision/Record/Schedule')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Record_Schedule', {
      title: 'InstarVision v2 Record Zeitplan',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Windows.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Windows/">Windows</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Record/">Recording</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Record/Schedule/">Schedule</a></li>',
      canonical: '/Software/Windows/InstarVision/Record/Schedule/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    });
});

softwareRouter.route('/Windows/InstarVision/Record/Alarm')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Record_Alarm', {
      title: 'InstarVision v2 Record Alarm',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Windows.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Windows/">Windows</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Record/">Recording</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Record/Alarm/">Alarm</a></li>',
      canonical: '/Software/Windows/InstarVision/Record/Alarm/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    });
});

softwareRouter.route('/Windows/InstarVision/Record/Photoseries')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Record_Photoseries', {
      title: 'InstarVision v2 Record Fotoserie',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Windows.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Windows/">Windows</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Record/">Recording</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Record/Photoseries/">Photoseries</a></li>',
      canonical: '/Software/Windows/InstarVision/Record/Photoseries/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    });
});

softwareRouter.route('/Windows/InstarVision/Record/Email')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Record_Email', {
      title: 'InstarVision v2 Record Email',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Windows.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Windows/">Windows</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Record/">Recording</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Record/Email/">Email</a></li>',
      canonical: '/Software/Windows/InstarVision/Record/Email/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    });
});

softwareRouter.route('/Windows/InstarVision/Record/FTP')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Record_FTP', {
      title: 'InstarVision v2 Record FTP',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Windows.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Windows/">Windows</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Record/">Recording</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Record/FTP/">FTP</a></li>',
      canonical: '/Software/Windows/InstarVision/Record/FTP/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    });
});

softwareRouter.route('/Windows/InstarVision/System')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_System', {
      title: 'InstarVision v2 System',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Windows.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Windows/">Windows</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/System/">System</a></li>',
      canonical: '/Software/Windows/InstarVision/System/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    });
});

softwareRouter.route('/Windows/InstarVision/Users')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Users', {
      title: 'InstarVision v2 Benutzer',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Windows.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Windows/">Windows</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Users/">User</a></li>',
      canonical: '/Software/Windows/InstarVision/Users/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    });
});

softwareRouter.route('/Windows/InstarVision/Advanced')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Advanced', {
      title: 'InstarVision v2 Erweitert',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Windows.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Windows/">Windows</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Advanced/">Advanced</a></li>',
      canonical: '/Software/Windows/InstarVision/Advanced/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    });
});

softwareRouter.route('/Windows/InstarVision/Advanced/License')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Advanced_License', {
      title: 'InstarVision v2 Advanced Lizenz',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Windows.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Windows/">Windows</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Advanced/">Advanced</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Advanced/License/">License</a></li>',
      canonical: '/Software/Windows/InstarVision/Advanced/License/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    });
});

softwareRouter.route('/Windows/InstarVision/Advanced/Log')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Advanced_Log', {
      title: 'InstarVision v2 Advanced Logbuch',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Windows.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Windows/">Windows</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Advanced/">Advanced</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Advanced/Log/">Log</a></li>',
      canonical: '/Software/Windows/InstarVision/Advanced/Log/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    });
});

softwareRouter.route('/Windows/InstarVision/Advanced/Export')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Advanced_Export', {
      title: 'InstarVision v2 Advanced Export',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Windows.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Windows/">Windows</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Advanced/">Advanced</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Advanced/Export/">Export</a></li>',
      canonical: '/Software/Windows/InstarVision/Advanced/Export/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    });
});

softwareRouter.route('/Windows/InstarVision/Advanced/Player')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Advanced_Player', {
      title: 'InstarVision v2 Advanced Player',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Windows.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Windows/">Windows</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Advanced/">Advanced</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Advanced/Player/">Player</a></li>',
      canonical: '/Software/Windows/InstarVision/Advanced/Player/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    });
});

softwareRouter.route('/Windows/InstarVision/Advanced/Explorer')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_Advanced_Explorer', {
      title: 'InstarVision v2 Advanced Explorer',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Windows.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Windows/">Windows</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Advanced/">Advanced</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Advanced/Explorer/">Explorer</a></li>',
      canonical: '/Software/Windows/InstarVision/Advanced/Explorer/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    });
});

softwareRouter.route('/Windows/InstarVision/About')
.get(function(req, res) {
  res.render('./Software/Windows_InstarVision_About', {
      title: 'InstarVision v2 Über',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Windows.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Windows/">Windows</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/About/">About</a></li>',
      canonical: '/Software/Windows/InstarVision/About/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    });
});

softwareRouter.route('/Windows/InstarVision/Windows_Phone')
.get(function(req, res) {
  res.render('./Software/Windows_Phone_InstarVision', {
      title: 'InstarVision für Windows Phone',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_WP.jpg',
      headline: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Windows/">Windows</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Windows_Phone/">Windows Phone App</a></li>',
      canonical: '/Software/Windows/InstarVision/Windows_Phone/',
      description: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
    });
});

softwareRouter.route('/Windows/InstarVision/Windows_Phone/DDNS')
.get(function(req, res) {
  res.render('./Software/Windows_Phone_InstarVision_DDNS', {
      title: 'InstarVision für Windows Phone - DDNS Fernzugriff auf Ihre INSTAR IP Kamera',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_WP.jpg',
      headline: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Windows/">Windows</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Windows_Phone/">Windows Phone App</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Windows_Phone/DDNS/">DDNS</a></li>',
      canonical: '/Software/Windows/InstarVision/Windows_Phone/DDNS/',
      description: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
    });
});

softwareRouter.route('/Windows/InstarVision/Windows_Phone/P2P')
.get(function(req, res) {
  res.render('./Software/Windows_Phone_InstarVision_P2P', {
      title: 'InstarVision für Windows Phone - P2P Fernzugriff auf Ihre INSTAR IP Kamera',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_WP.jpg',
      headline: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Windows/">Windows</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Windows_Phone/">Windows Phone App</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Windows_Phone/P2P/">P2P</a></li>',
      canonical: '/Software/Windows/InstarVision/Windows_Phone/P2P/',
      description: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
    });
});

softwareRouter.route('/Windows/InstarVision/Windows_Phone/Multiview')
.get(function(req, res) {
  res.render('./Software/Windows_Phone_InstarVision_Multiview', {
      title: 'InstarVision für Windows Phone - Multiansicht all Ihrer Netzwerkkameras',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_WP.jpg',
      headline: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Windows/">Windows</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Windows_Phone/">Windows Phone App</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Windows_Phone/Multiview/">Multiview</a></li>',
      canonical: '/Software/Windows/InstarVision/Windows_Phone/Multiview/',
      description: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
    });
});

softwareRouter.route('/Windows/InstarVision/Windows_Phone/Recording')
.get(function(req, res) {
  res.render('./Software/Windows_Phone_InstarVision_Recording', {
      title: 'InstarVision für Windows Phone - Video Aufnahmen Ihrer INSTAR IP Kamera verwalten',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_WP.jpg',
      headline: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Windows/">Windows</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Windows_Phone/">Windows Phone App</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Windows_Phone/Recording/">Recording</a></li>',
      canonical: '/Software/Windows/InstarVision/Windows_Phone/Recording/',
      description: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
    });
});

softwareRouter.route('/Windows/InstarVision/Windows_Phone/Settings')
.get(function(req, res) {
  res.render('./Software/Windows_Phone_InstarVision_Settings', {
      title: 'InstarVision für Windows Phone - Allgemeine App Einstellungen',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_WP.jpg',
      headline: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Windows/">Windows</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Windows_Phone/">Windows Phone App</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Windows_Phone/Settings/">Settings</a></li>',
      canonical: '/Software/Windows/InstarVision/Windows_Phone/Settings/',
      description: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
    });
});

softwareRouter.route('/Windows/InstarVision/Metro')
.get(function(req, res) {
  res.render('./Software/Windows_Metro_InstarVision', {
      title: 'InstarVision für Windows Metro',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Metro.jpg',
      headline: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Windows/">Windows</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Metro/">Metro App</a></li>',
      canonical: '/Software/Windows/InstarVision/Metro/',
      description: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
    });
});

softwareRouter.route('/Windows/InstarVision/Metro/DDNS')
.get(function(req, res) {
  res.render('./Software/Windows_Metro_InstarVision_DDNS', {
      title: 'InstarVision für Windows Metro - DDNS Fernzugriff auf Ihre INSTAR IP Kamera',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Metro.jpg',
      headline: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Windows/">Windows</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Metro/">Metro App</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Metro/DDNS/">DDNS</a></li>',
      canonical: '/Software/Windows/InstarVision/Metro/DDNS/',
      description: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
    });
});

softwareRouter.route('/Windows/InstarVision/Metro/P2P')
.get(function(req, res) {
  res.render('./Software/Windows_Metro_InstarVision_P2P', {
      title: 'InstarVision für Windows Metro - P2P Fernzugriff auf Ihre INSTAR IP Kamera',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Metro.jpg',
      headline: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Windows/">Windows</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Metro/">Metro App</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Metro/P2P/">P2P</a></li>',
      canonical: '/Software/Windows/InstarVision/Metro/P2P/',
      description: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
    });
});

softwareRouter.route('/Windows/InstarVision/Metro/Multiview')
.get(function(req, res) {
  res.render('./Software/Windows_Metro_InstarVision_Multiview', {
      title: 'InstarVision für Windows Metro - Multiansicht all Ihrer Netzwerkkameras',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Metro.jpg',
      headline: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Windows/">Windows</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Metro/">Metro App</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Metro/Multiview/">Multiview</a></li>',
      canonical: '/Software/Windows/InstarVision/Metro/Multiview/',
      description: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
    });
});

softwareRouter.route('/Windows/InstarVision/Metro/Recording')
.get(function(req, res) {
  res.render('./Software/Windows_Metro_InstarVision_Recording', {
      title: 'InstarVision für Windows Metro - Video Aufnahmen Ihrer INSTAR IP Kamera verwalten',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Metro.jpg',
      headline: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Windows/">Windows</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Metro/">Metro App</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Metro/Recording/">Recording</a></li>',
      canonical: '/Software/Windows/InstarVision/Metro/Recording/',
      description: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
    });
});

softwareRouter.route('/Windows/InstarVision/Metro/Settings')
.get(function(req, res) {
  res.render('./Software/Windows_Metro_InstarVision_Settings', {
      title: 'InstarVision für Windows Metro - Allgemeine App Einstellungen',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Metro.jpg',
      headline: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Windows/">Windows</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Metro/">Metro App</a></li><li class="breadcrumb-item"><a href="/Software/Windows/InstarVision/Metro/Settings/">Settings</a></li>',
      canonical: '/Software/Windows/InstarVision/Metro/Settings/',
      description: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
    });
});

softwareRouter.route('/Windows/iSpy')
.get(function(req, res) {
  res.render('./Software/Windows_iSpy', {
      title: 'iSpy Connect Video Überwachungssoftware für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_iSpy_Connect.jpg',
      headline: 'Windows Drittanbieter Software für Ihren Computer oder Ihr Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Windows/">Windows</a></li><li><a href="/Software/Windows/iSpy/">iSpy</a></li>',
      canonical: '/Software/Windows/iSpy/',
      description: 'Windows Drittanbieter Software für Ihren Computer oder Ihr Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
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
  		hdacc: 'hidden',
  		hdtab: 'hidden',
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: '',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

softwareRouter.route('/Windows/Sighthound')
.get(function(req, res) {
  res.render('./Software/Windows_Sighthound', {
      title: 'Sighthound Video Überwachungssoftware für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_Sighthound.jpg',
      headline: 'Windows Drittanbieter Software für Ihren Computer oder Ihr Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Windows/">Windows</a></li><li><a href="/Software/Windows/Sighthound/">Sighthound</a></li>',
      canonical: '/Software/Windows/Sighthound/',
      description: 'Windows Drittanbieter Software für Ihren Computer oder Ihr Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
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
  		hdacc: 'hidden',
  		hdtab: 'hidden',
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: '',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

softwareRouter.route('/Windows/P2P_Client')
.get(function(req, res) {
  res.render('./Software/Windows_P2P_Client', {
      title: 'P2P Client Video Überwachungssoftware für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_P2P_Client.jpg',
      headline: 'Windows Drittanbieter Software für Ihren Computer oder Ihr Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Windows/">Windows</a></li><li><a href="/Software/Windows/P2P_Client/">P2P Client</a></li>',
      canonical: '/Software/Windows/P2P_Client/',
      description: 'Windows Drittanbieter Software für Ihren Computer oder Ihr Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
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
  		hdacc: 'hidden',
  		hdtab: 'hidden',
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: '',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

softwareRouter.route('/Windows/go1984')
.get(function(req, res) {
  res.render('./Software/Windows_go1984', {
      title: 'Logiware go1984 Video Überwachungssoftware für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_go1984.jpg',
      headline: 'Windows Drittanbieter Software für Ihren Computer oder Ihr Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Windows/">Windows</a></li><li><a href="/Software/Windows/go1984/">go1984</a></li>',
      canonical: '/Software/Windows/go1984/',
      description: 'Windows Drittanbieter Software für Ihren Computer oder Ihr Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
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
  		hdacc: 'hidden',
  		hdtab: 'hidden',
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: '',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

softwareRouter.route('/Windows/VLC_Player')
.get(function(req, res) {
  res.render('./Software/Windows_VLC', {
      title: 'VLC Player Video Überwachungssoftware für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_VLC.jpg',
      headline: 'Windows Drittanbieter Software für Ihren Computer oder Ihr Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Windows/">Windows</a></li><li><a href="/Software/Windows/VLC_Player/">VLC Player</a></li>',
      canonical: '/Software/Windows/VLC_Player/',
      description: 'Windows Drittanbieter Software für Ihren Computer oder Ihr Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
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
  		hdacc: 'hidden',
  		hdtab: 'hidden',
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: '',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

softwareRouter.route('/Windows/CCTV_Chrome_Plugin')
.get(function(req, res) {
  res.render('./Software/Windows_CCTV_Plugin', {
      title: 'CCTV Plugin Video Überwachungssoftware für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_CCTV.jpg',
      headline: 'Windows Drittanbieter Software für Ihren Computer oder Ihr Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Windows/">Windows</a></li><li><a href="/Software/Windows/CCTV_Chrome_Plugin/">CCTV Plugin</a></li>',
      canonical: '/Software/Windows/CCTV_Chrome_Plugin/',
      description: 'Windows Drittanbieter Software für Ihren Computer oder Ihr Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
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
  		hdacc: 'hidden',
  		hdtab: 'hidden',
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: '',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

softwareRouter.route('/Windows/Blue_Iris')
.get(function(req, res) {
  res.render('./Software/Windows_Blue_Iris', {
      title: 'Blue Iris Video Überwachungssoftware für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_Blue_Iris.jpg',
      headline: 'Windows Drittanbieter Software für Ihren Computer oder Ihr Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Windows/">Windows</a></li><li><a href="/Software/Windows/Blue_Iris/">Blue Iris</a></li>',
      canonical: '/Software/Windows/Blue_Iris/',
      description: 'Windows Drittanbieter Software für Ihren Computer oder Ihr Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
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
  		hdacc: 'hidden',
  		hdtab: 'hidden',
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: '',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

softwareRouter.route('/Windows/YAW_Cam')
.get(function(req, res) {
  res.render('./Software/Windows_YAW_Cam', {
      title: 'YAW Cam Video Überwachungssoftware für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_YAW_Cam.jpg',
      headline: 'Windows Drittanbieter Software für Ihren Computer oder Ihr Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Windows/">Windows</a></li><li><a href="/Software/Windows/YAW_Cam/">YAW Cam</a></li>',
      canonical: '/Software/Windows/YAW_Cam/',
      description: 'Windows Drittanbieter Software für Ihren Computer oder Ihr Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
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
  		hdacc: 'hidden',
  		hdtab: 'hidden',
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: '',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

softwareRouter.route('/Windows/Zone_Trigger')
.get(function(req, res) {
  res.render('./Software/Windows_Zone_Trigger', {
      title: 'Zone Trigger Video Überwachungssoftware für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_Zone_Trigger.jpg',
      headline: 'Windows Drittanbieter Software für Ihren Computer oder Ihr Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Windows/">Windows</a></li><li><a href="/Software/Windows/Zone_Trigger/">Zone Trigger</a></li>',
      canonical: '/Software/Windows/Zone_Trigger/',
      description: 'Windows Drittanbieter Software für Ihren Computer oder Ihr Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
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
  		hdacc: 'hidden',
  		hdtab: 'hidden',
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: '',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

softwareRouter.route('/Windows/Webcam_XP')
.get(function(req, res) {
  res.render('./Software/Windows_Webcam_XP', {
      title: 'WebcamXP Video Überwachungssoftware für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_WebcamXP.jpg',
      headline: 'Windows Drittanbieter Software für Ihren Computer oder Ihr Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Windows/">Windows</a></li><li><a href="/Software/Windows/Webcam_XP/">Webcam XP</a></li>',
      canonical: '/Software/Windows/Webcam_XP/',
      description: 'Windows Drittanbieter Software für Ihren Computer oder Ihr Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
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
  		hdacc: 'hidden',
  		hdtab: 'hidden',
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: '',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

softwareRouter.route('/Windows/Webcam_Motion_Detector')
.get(function(req, res) {
  res.render('./Software/Windows_Webcam_Motion_Detector', {
      title: 'Webcam Motion Detector Video Überwachungssoftware für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_Webcam_MD.jpg',
      headline: 'Windows Drittanbieter Software für Ihren Computer oder Ihr Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Windows/">Windows</a></li><li><a href="/Software/Windows/Webcam_Motion_Detector/">Webcam Motion Detector</a></li>',
      canonical: '/Software/Windows/Webcam_Motion_Detector/',
      description: 'Windows Drittanbieter Software für Ihren Computer oder Ihr Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
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
  		hdacc: 'hidden',
  		hdtab: 'hidden',
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: '',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

softwareRouter.route('/Windows/Zebra_Surveillance')
.get(function(req, res) {
  res.render('./Software/Windows_Zebra_Surveillance', {
      title: 'Zebra Surveillance Video Überwachungssoftware für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_Zebra_Surveillance.jpg',
      headline: 'Windows Drittanbieter Software für Ihren Computer oder Ihr Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Windows/">Windows</a></li><li><a href="/Software/Windows/Zebra_Surveillance/">Zebra Surveillance</a></li>',
      canonical: '/Software/Windows/Zebra_Surveillance/',
      description: 'Windows Drittanbieter Software für Ihren Computer oder Ihr Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
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
  		hdacc: 'hidden',
  		hdtab: 'hidden',
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: '',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

/* *************************  GET InstarVision for macOS /macOS *********************************** */
softwareRouter.route('/macOS')
.get(function(req, res) {
  res.render('./Software/macOS', {
      title: 'macOS Video Überwachungssoftware für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'Eine Übersicht über kompatible macOS Video Überwachungssoftware für Ihre INSTAR Sicherheitskamera',
      canonical: '/Software/macOS/',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/macOS/">macOS</a></li>',
      description: 'Eine Übersicht über kompatible macOS Video Überwachungssoftware für Ihre INSTAR Sicherheitskamera',
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
  		hdacc: 'hidden',
  		hdtab: 'hidden',
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: '',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

softwareRouter.route('/macOS/Sighthound')
.get(function(req, res) {
  res.render('./Software/Windows_Sighthound', {
      title: 'Sighthound Video Überwachungssoftware für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_Sighthound.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/macOS/">macOS</a></li><li><a href="/Software/macOS/Sighthound/">Sighthound</a></li>',
      canonical: '/Software/macOS/Sighthound/',
      description: 'macOSX Drittanbieter Software für Ihren Apple Computer zur Kontrolle Ihrer INSTAR IP Kamera',
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
  		hdacc: 'hidden',
  		hdtab: 'hidden',
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: '',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

softwareRouter.route('/macOS/EvoCam')
.get(function(req, res) {
  res.render('./Software/macOS_EvoCam', {
      title: 'EvoCam Video Überwachungssoftware für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_Evocam.jpg',
      headline: 'macOSX Drittanbieter Software für Ihren Apple Computer zur Kontrolle Ihrer INSTAR IP Kamera',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/macOS/">macOS</a></li><li><a href="/Software/macOS/EvoCam/">EvoCam</a></li>',
      canonical: '/Software/macOS/EvoCam/',
      description: 'macOSX Drittanbieter Software für Ihren Apple Computer zur Kontrolle Ihrer INSTAR IP Kamera',
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
  		hdacc: 'hidden',
  		hdtab: 'hidden',
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: '',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

softwareRouter.route('/macOS/VLC_Player')
.get(function(req, res) {
  res.render('./Software/Windows_VLC', {
      title: 'VLC Player Video Überwachungssoftware für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_VLC.jpg',
      headline: 'macOSX Drittanbieter Software für Ihren Apple Computer zur Kontrolle Ihrer INSTAR IP Kamera',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/macOS/">macOS</a></li><li><a href="/Software/macOS/VLC_Player/">VLC Player</a></li>',
      canonical: '/Software/macOS/VLC_Player/',
      description: 'macOSX Drittanbieter Software für Ihren Apple Computer zur Kontrolle Ihrer INSTAR IP Kamera',
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
  		hdacc: 'hidden',
  		hdtab: 'hidden',
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: '',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

softwareRouter.route('/macOS/SecuritySpy')
.get(function(req, res) {
  res.render('./Software/macOS_SecuritySpy', {
      title: 'SecuritySpy Video Überwachungssoftware für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_SecuritySpy.jpg',
      headline: 'macOSX Drittanbieter Software für Ihren Apple Computer zur Kontrolle Ihrer INSTAR IP Kamera',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/macOS/">macOS</a></li><li><a href="/Software/macOS/SecuritySpy/">SecuritySpy</a></li>',
      canonical: '/Software/macOS/SecuritySpy/',
      description: 'macOSX Drittanbieter Software für Ihren Apple Computer zur Kontrolle Ihrer INSTAR IP Kamera',
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
  		hdacc: 'hidden',
  		hdtab: 'hidden',
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: '',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

/* ************************************ GET InstarVision for Android /Android ************************ */
softwareRouter.route('/Android')
.get(function(req, res) {
  res.render('./Software/Android', {
      title: 'Android Video Überwachungssoftware für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'Eine Übersicht über kompatible Android Video Überwachungssoftware für Ihre INSTAR Sicherheitskamera',
      canonical: '/Software/Android/',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Android/">Android</a></li>',
      description: 'Eine Übersicht über kompatible Android Video Überwachungssoftware für Ihre INSTAR Sicherheitskamera',
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
  		hdacc: 'hidden',
  		hdtab: 'hidden',
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: '',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

softwareRouter.route('/Android/InstarVision')
.get(function(req, res) {
  res.render('./Software/Android_InstarVision', {
      title: 'InstarVision für Android',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Android.jpg',
      headline: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Android/">Android</a></li><li class="breadcrumb-item"><a href="/Software/Android/InstarVision/">InstarVision</a></li>',
      canonical: '/Software/Android/InstarVision/',
      description: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
    });
});

softwareRouter.route('/Android/InstarVision/DDNS')
.get(function(req, res) {
  res.render('./Software/Android_InstarVision_DDNS', {
      title: 'InstarVision für Android - DDNS Fernzugriff auf Ihre INSTAR IP Kamera',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Android.jpg',
      headline: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Android/">Android</a></li><li class="breadcrumb-item"><a href="/Software/Android/InstarVision/">InstarVision</a></li>',
      canonical: '/Software/Android/InstarVision/DDNS/',
      description: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
    });
});

softwareRouter.route('/Android/InstarVision/P2P')
.get(function(req, res) {
  res.render('./Software/Android_InstarVision_P2P', {
      title: 'InstarVision für Android - P2P Fernzugriff auf Ihre INSTAR IP Kamera',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Android.jpg',
      headline: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Android/">Android</a></li><li class="breadcrumb-item"><a href="/Software/Android/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/Android/InstarVision/P2P/">P2P</a></li>',
      canonical: '/Software/Android/InstarVision/P2P/',
      description: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
    });
});

softwareRouter.route('/Android/InstarVision/Multiview')
.get(function(req, res) {
  res.render('./Software/Android_InstarVision_Multiview', {
      title: 'InstarVision für Android - Multiansicht all Ihrer Netzwerkkameras',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Android.jpg',
      headline: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Android/">Android</a></li><li class="breadcrumb-item"><a href="/Software/Android/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/Android/InstarVision/Multiview/">Multiview</a></li>',
      canonical: '/Software/Android/InstarVision/Multiview/',
      description: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
    });
});

softwareRouter.route('/Android/InstarVision/Recording')
.get(function(req, res) {
  res.render('./Software/Android_InstarVision_Recording', {
      title: 'InstarVision für Android - Video Aufnahmen Ihrer INSTAR IP Kamera verwalten',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Android.jpg',
      headline: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Android/">Android</a></li><li class="breadcrumb-item"><a href="/Software/Android/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/Android/InstarVision/Recording/">Recording</a></li>',
      canonical: '/Software/Android/InstarVision/Recording/',
      description: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
    });
});

softwareRouter.route('/Android/InstarVision/Settings')
.get(function(req, res) {
  res.render('./Software/Android_InstarVision_Settings', {
      title: 'InstarVision für Android - Allgemeine App Einstellungen',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Android.jpg',
      headline: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Android/">Android</a></li><li class="breadcrumb-item"><a href="/Software/Android/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/Android/InstarVision/Settings/">Settings</a></li>',
      canonical: '/Software/Android/InstarVision/Settings/',
      description: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
    });
});

softwareRouter.route('/Android/TinyCam_Monitor')
.get(function(req, res) {
  res.render('./Software/Android_TinyCam', {
      title: 'TinyCam Monitor Video Überwachungssoftware für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_TinyCam.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Android/">Android</a></li><li><a href="/Software/Android/TinyCam_Monitor/">TinyCam Monitor</a></li>',
      canonical: '/Software/Android/TinyCam_Monitor/',
      description: 'Android Drittanbieter Software für Ihr Handy oder Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
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
		hdacc: 'hidden',
		hdtab: 'hidden',
		fhdacc: 'hidden',
		fhdtab: 'hidden',
		sacc: '',
		dlacc: 'hidden',
		dltab: 'hidden',
    });
});

softwareRouter.route('/Android/IP_Cam_Viewer')
.get(function(req, res) {
  res.render('./Software/Android_IP_CamViewer', {
      title: 'IP Cam Viewer Video Überwachungssoftware für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_IP_Cam_Viewer.jpg',
      headline: 'INSTAR Products',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Android/">Android</a></li><li><a href="/Software/Android/IP_Cam_Viewer/">IP Cam Viewer</a></li>',
      canonical: '/Software/Android/IP_Cam_Viewer/',
      description: 'Android Drittanbieter Software für Ihr Handy oder Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
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
		hdacc: 'hidden',
		hdtab: 'hidden',
		fhdacc: 'hidden',
		fhdtab: 'hidden',
		sacc: '',
		dlacc: 'hidden',
		dltab: 'hidden',
    });
});

/* *********************************** GET InstarVision for iOS /iOS ******************************* */
softwareRouter.route('/iOS')
.get(function(req, res) {
  res.render('./Software/iOS', {
      title: 'iOS Video Überwachungssoftware für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'Eine Übersicht über kompatible iPhone und iPad Video Überwachungssoftware für Ihre INSTAR Sicherheitskamera',
      canonical: '/Software/iOS/',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/iOS/">iOS</a></li>',
      description: 'Eine Übersicht über kompatible iPhone und iPad Video Überwachungssoftware für Ihre INSTAR Sicherheitskamera',
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
  		hdacc: 'hidden',
  		hdtab: 'hidden',
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: '',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

softwareRouter.route('/iOS/InstarVision/iPhone')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPhone', {
      title: 'InstarVision für iPhone',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_iOS.jpg',
      headline: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/iOS/">iOS</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/iPhone/">iPhone</a></li>',
      canonical: '/Software/iOS/InstarVision/iPhone/',
      description: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
    });
});

softwareRouter.route('/iOS/InstarVision/iPhone/DDNS')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPhone_DDNS', {
      title: 'InstarVision für iOS - DDNS Fernzugriff auf Ihre INSTAR IP Kamera',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_iOS.jpg',
      headline: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/iOS/">iOS</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/iPhone/">iPhone</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/iPhone/DDNS/">DDNS</a></li>',
      canonical: '/Software/iOS/InstarVision/iPhone/DDNS/',
      description: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
    });
});

softwareRouter.route('/iOS/InstarVision/iPhone/P2P')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPhone_P2P', {
      title: 'InstarVision für iOS - P2P Fernzugriff auf Ihre INSTAR IP Kamera',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_iOS.jpg',
      headline: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/iOS/">iOS</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/iPhone/">iPhone</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/iPhone/P2P/">P2P</a></li>',
      canonical: '/Software/iOS/InstarVision/iPhone/P2P/',
      description: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
    });
});

softwareRouter.route('/iOS/InstarVision/iPhone/Multiview')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPhone_Multiview', {
      title: 'InstarVision für iOS - Multiansicht all Ihrer Netzwerkkameras',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_iOS.jpg',
      headline: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/iOS/">iOS</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/iPhone/">iPhone</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/iPhone/Multimedia/">Multimedia</a></li>',
      canonical: '/Software/iOS/InstarVision/iPhone/Multiview/',
      description: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
    });
});

softwareRouter.route('/iOS/InstarVision/iPhone/Recording')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPhone_Recording', {
      title: 'InstarVision für iOS - Video Aufnahmen Ihrer INSTAR IP Kamera verwalten',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_iOS.jpg',
      headline: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/iOS/">iOS</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/iPhone/">iPhone</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/iPhone/Recording/">Recording</a></li>',
      canonical: '/Software/iOS/InstarVision/iPhone/Recording/',
      description: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
    });
});

softwareRouter.route('/iOS/InstarVision/iPhone/Settings')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPhone_Settings', {
      title: 'InstarVision für iOS - Allgemeine App Einstellungen',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_iOS.jpg',
      headline: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/iOS/">iOS</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/iPhone/">iPhone</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/iPhone/Settings/">Settings</a></li>',
      canonical: '/Software/iOS/InstarVision/iPhone/Settings/',
      description: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
    });
});

softwareRouter.route('/iOS/InstarVision/iPad')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPad', {
      title: 'InstarVision für iPad',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_iOS.jpg',
      headline: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/iOS/">iOS</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/iPad/">iPad</a></li>',
      canonical: '/Software/iOS/InstarVision/iPad/',
      description: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
    });
});

softwareRouter.route('/iOS/InstarVision/iPad/DDNS')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPad_DDNS', {
      title: 'InstarVision für iOS - DDNS Fernzugriff auf Ihre INSTAR IP Kamera',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_iOS.jpg',
      headline: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/iOS/">iOS</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/iPad/">iPad</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/iPad/DDNS/">DDNS</a></li>',
      canonical: '/Software/iOS/InstarVision/iPad/DDNS/',
      description: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
    });
});

softwareRouter.route('/iOS/InstarVision/iPad/P2P')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPad_P2P', {
      title: 'InstarVision für iOS - P2P Fernzugriff auf Ihre INSTAR IP Kamera',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_iOS.jpg',
      headline: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/iOS/">iOS</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/iPad/">iPad</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/iPad/P2P/">P2P</a></li>',
      canonical: '/Software/iOS/InstarVision/iPad/P2P/',
      description: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
    });
});

softwareRouter.route('/iOS/InstarVision/iPad/Multiview')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPad_Multiview', {
      title: 'InstarVision für iOS - Multiansicht all Ihrer Netzwerkkameras',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_iOS.jpg',
      headline: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/iOS/">iOS</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/iPad/">iPad</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/iPad/Multiview/">Multiview</a></li>',
      canonical: '/Software/iOS/InstarVision/iPad/Multiview/',
      description: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
    });
});

softwareRouter.route('/iOS/InstarVision/iPad/Recording')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPad_Recording', {
      title: 'InstarVision für iOS - Video Aufnahmen Ihrer INSTAR IP Kamera verwalten',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_iOS.jpg',
      headline: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/iOS/">iOS</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/iPad/">iPad</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/iPad/Recording/">Recording</a></li>',
      canonical: '/Software/iOS/InstarVision/iPad/Recording/',
      description: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
    });
});

softwareRouter.route('/iOS/InstarVision/iPad/Settings')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision_iPad_Settings', {
      title: 'InstarVision für iOS - Allgemeine App Einstellungen',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_iOS.jpg',
      headline: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/iOS/">iOS</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/">InstarVision</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/iPad/">iPad</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/iPad/Settings/">Settings</a></li>',
      canonical: '/Software/iOS/InstarVision/iPad/Settings/',
      description: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
    });
});

softwareRouter.route('/iOS/InstarVision')
.get(function(req, res) {
  res.render('./Software/iOS_InstarVision', {
      title: 'InstarVision für iOS',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_iOS.jpg',
      headline: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/iOS/">iOS</a></li><li class="breadcrumb-item"><a href="/Software/iOS/InstarVision/">InstarVision</a></li>',
      canonical: '/Software/iOS/InstarVision/',
      description: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
    });
});

softwareRouter.route('/iOS/LiveCams')
.get(function(req, res) {
  res.render('./Software/iOS_LiveCams', {
      title: 'LiveCams Video Überwachungssoftware für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_LiveCams.jpg',
      headline: 'iOS Drittanbieter Software für Ihr Handy oder Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/iOS/">iOS</a></li><li><a href="/Software/iOS/LiveCams/">LiveCams</a></li>',
      canonical: '/Software/iOS/LiveCams/',
      description: 'iOS Drittanbieter Software für Ihr Handy oder Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
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
  		hdacc: 'hidden',
  		hdtab: 'hidden',
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: '',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

softwareRouter.route('/iOS/IP_Vision_Pro')
.get(function(req, res) {
  res.render('./Software/iOS_IP_Vision_Pro', {
      title: 'IP VIsion Pro Video Überwachungssoftware für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_IP_VisionPro.jpg',
      headline: 'iOS Drittanbieter Software für Ihr Handy oder Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/iOS/">iOS</a></li><li><a href="/Software/iOS/IP_Vision_Pro/">IP Vision Pro</a></li>',
      canonical: '/Software/iOS/IP_Vision_Pro/',
      description: 'iOS Drittanbieter Software für Ihr Handy oder Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
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
  		hdacc: 'hidden',
  		hdtab: 'hidden',
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: '',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

softwareRouter.route('/iOS/ICCAM')
.get(function(req, res) {
  res.render('./Software/iOS_ICCAM', {
      title: 'ICCAM Video Überwachungssoftware für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_ICCAM.jpg',
      headline: 'iOS Drittanbieter Software für Ihr Handy oder Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/iOS/">iOS</a></li><li><a href="/Software/iOS/ICCAM/">ICCAM</a></li>',
      canonical: '/Software/iOS/ICCAM/',
      description: 'iOS Drittanbieter Software für Ihr Handy oder Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
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
  		hdacc: 'hidden',
  		hdtab: 'hidden',
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: '',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

softwareRouter.route('/iOS/IP_Cam_Viewer')
.get(function(req, res) {
  res.render('./Software/Android_IP_CamViewer', {
      title: 'IP Cam Viewer Video Überwachungssoftware für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_IP_Cam_Viewer.jpg',
      headline: 'iOS Drittanbieter Software für Ihr Handy oder Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/iOS/">iOS</a></li><li><a href="/Software/iOS/IP_Cam_Viewer/">IP Cam Viewer</a></li>',
      canonical: '/Software/iOS/IP_Cam_Viewer/',
      description: 'iOS Drittanbieter Software für Ihr Handy oder Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
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
  		hdacc: 'hidden',
  		hdtab: 'hidden',
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: '',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

softwareRouter.route('/iOS/P2P_Cam_Live')
.get(function(req, res) {
  res.render('./Software/iOS_P2P_Cam_Live', {
      title: 'P2P Cam Live Video Überwachungssoftware für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_P2P_CamLive.jpg',
      headline: 'iOS Drittanbieter Software für Ihr Handy oder Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/iOS/">iOS</a></li><li><a href="/Software/iOS/P2P_Cam_Live/">P2P Cam Live</a></li>',
      canonical: '/Software/iOS/P2P_Cam_Live/',
      description: 'iOS Drittanbieter Software für Ihr Handy oder Tablet zur Kontrolle Ihrer INSTAR IP Kamera',
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
  		hdacc: 'hidden',
  		hdtab: 'hidden',
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: '',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

/* ************************************ GET /Other_Platforms *************** */
softwareRouter.route('/Other_Platforms')
.get(function(req, res) {
  res.render('./Software/Other_Platforms', {
      title: 'Andere Plattformen Video Überwachungssoftware für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'Eine Übersicht über kompatible Video Überwachungssoftware auf anderen Platformen für Ihre INSTAR Sicherheitskamera',
      canonical: '/Software/Other_Platforms/',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Other_Platforms/">Other Platforms</a></li>',
      description: 'Eine Übersicht über kompatible Video Überwachungssoftware auf anderen Platformen für Ihre INSTAR Sicherheitskamera',
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
  		hdacc: 'hidden',
  		hdtab: 'hidden',
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: '',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

softwareRouter.route('/Other_Platforms/InstarVision_Blackberry')
.get(function(req, res) {
  res.render('./Software/Android_InstarVision_Blackberry', {
      title: 'InstarVision Handy App für Blackberry - der mobile Begleiter für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_InstarVision_Android.jpg',
      headline: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Products</a></li><li class="breadcrumb-item"><a href="/Software/">Software</a></li><li class="breadcrumb-item"><a href="/Software/Other_Platforms/">Andere Platform</a></li><li class="breadcrumb-item"><a href="/Software/Other_Platforms/InstarVision_Blackberry/">InstarVision for Blackberry</a></li>',
      canonical: '/Software/Other_Platforms/InstarVision_Blackberry/',
      description: 'Die kostenlose InstarVision App gibt Ihnen die volle Kontrolle über Ihre INSTAR IP Kamera - von zuhause oder von unterwegs. Betrachten Sie den Live Videostream Ihrer Sicherheitskamera, nehmen Sie Videos auf und schalten Sie die Bewegungserkennung scharf, nachdem Sie den Überwachungsbereich verlassen haben.',
    });
});

softwareRouter.route('/Other_Platforms/QNAP')
.get(function(req, res) {
  res.render('./Software/Other_Platforms_QNAP', {
      title: 'QNAP Video Überwachungssoftware für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_QNAP.jpg',
      headline: 'QNAP bietet eine Reihe von NAS Überwachunstationen an, in die Sie Ihre INSTAR Netzwerkkamera einbinden können.',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Other_Platforms/">Andere Plattformen</a></li><li><a href="/Software/Other_Platforms/QNAP/">QNAP</a></li>',
      canonical: '/Software/Other_Platforms/QNAP/',
      description: 'QNAP bietet eine Reihe von NAS Überwachunstationen an, in die Sie Ihre INSTAR Netzwerkkamera einbinden können. Die vorinstallierte Surveillance Station übernimmt dann die dauerhafte Videoaufnahme, die Bewegungserkennung und Alarmaufnahmen und die Alarmbenachrichtung und Videoverwaltung.',
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
  		hdacc: 'hidden',
  		hdtab: 'hidden',
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: '',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

softwareRouter.route('/Other_Platforms/Synology')
.get(function(req, res) {
  res.render('./Software/Other_Platforms_Synology', {
      title: 'Synology Video Überwachungssoftware für Ihre INSTAR Netzwerkkamera',
      ampimg: '/images/Search/P_SearchThumb_Synology.jpg',
      headline: 'Synology bietet eine Reihe von NAS Überwachunstationen an, in die Sie Ihre INSTAR Netzwerkkamera einbinden können.',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Other_Platforms/">Andere Plattformen</a></li><li><a href="/Software/Other_Platforms/Synology/">Synology</a></li>',
      canonical: '/Software/Other_Platforms/Synology/',
      description: 'Synology bietet eine Reihe von NAS Überwachunstationen an, in die Sie Ihre INSTAR Netzwerkkamera einbinden können. Die vorinstallierte Surveillance Station übernimmt dann die dauerhafte Videoaufnahme, die Bewegungserkennung und Alarmaufnahmen und die Alarmbenachrichtung und Videoverwaltung.',
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
  		hdacc: 'hidden',
  		hdtab: 'hidden',
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: '',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

softwareRouter.route('/Other_Platforms/AVM_Fritzphone')
.get(function(req, res) {
  res.render('./Software/Other_Platforms_AVM_Fritzphone', {
      title: 'AVM Fritz!fon mit Ihrer INSTAR IP Kamera',
      ampimg: '/images/Search/P_SearchThumb_AVM.jpg',
      headline: 'Binden Sie das Live-Bild Ihrer INSTAR Netzwerkkamera in das AVM Fritzfon ein.',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Other_Platforms/">Andere Plattformen</a></li><li><a href="/Software/Other_Platforms/AVM_Fritzphone/">AVM Fritzphone</a></li>',
      canonical: '/Software/Other_Platforms/AVM_Fritzphone/',
      description: 'Binden Sie das Live-Bild Ihrer INSTAR Netzwerkkamera in das AVM Fritzfon ein.',
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
  		hdacc: 'hidden',
  		hdtab: 'hidden',
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: '',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

softwareRouter.route('/Other_Platforms/Domovea')
.get(function(req, res) {
  res.render('./Software/Other_Platforms_Domovea', {
      title: 'Domovea Hausautomatisierung mit Ihrer INSTAR IP Kamera',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'Alle notwendigen Konfigurationen und die passenden INSTAR Excam Dateien für die Einbindung Ihrer INSTAR Netzwerkkamera in die Domovea Hausautomatisierung',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Other_Platforms/">Andere Plattformen</a></li><li><a href="/Software/Other_Platforms/Domovea/">Domovea</a></li>',
      canonical: '/Software/Other_Platforms/Domovea/',
      description: 'Alle notwendigen Konfigurationen und die passenden INSTAR Excam Dateien für die Einbindung Ihrer INSTAR Netzwerkkamera in die Domovea Hausautomatisierung',
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
  		hdacc: 'hidden',
  		hdtab: 'hidden',
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: '',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

softwareRouter.route('/Mobile_Access_Over_HTTPS')
.get(function(req, res) {
  res.render('./Software/Mobile_Access_Over_HTTPS', {
      title: 'Mobiler Zugriff mit HTTPS',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'Wenn Sie über HTTPS auf Ihre INSTAR Full HD Netzwerkkamera zugreifen sollten Sie den Videostream über RTSP in die InstarVision Handy App einbinden',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Mobile_Access_Over_HTTPS/">HTTPS</a></li>',
      canonical: '/Software/Mobile_Access_Over_HTTPS/',
      description: 'Wenn Sie über HTTPS auf Ihre INSTAR Full HD Netzwerkkamera zugreifen sollten Sie den Videostream über RTSP in die InstarVision Handy App einbinden',
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
  		hdacc: 'hidden',
  		hdtab: 'hidden',
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: '',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

softwareRouter.route('/Mobile_Apps_HTTPS_and_RTSP')
.get(function(req, res) {
  res.render('./Software/Mobile_Apps_HTTPS_and_RTSP', {
      title: 'Mobiler Zugriff mit HTTPS und RTSP - InstarVision und IPCamViewer',
      ampimg: '/images/Search/P_SearchThumb_Products.jpg',
      headline: 'Wenn Sie über HTTPS auf Ihre INSTAR Full HD Netzwerkkamera zugreifen sollten Sie den Videostream über RTSP in die InstarVision Handy App einbinden',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Software/">Software</a></li><li><a href="/Software/Mobile_Access_Over_HTTPS/">HTTPS</a></li>',
      canonical: '/Software/Mobile_Access_Over_HTTPS/',
      description: 'Wenn Sie über HTTPS auf Ihre INSTAR Full HD Netzwerkkamera zugreifen sollten Sie den Videostream über RTSP in die InstarVision Handy App einbinden',
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
  		hdacc: 'hidden',
  		hdtab: 'hidden',
  		fhdacc: 'hidden',
  		fhdtab: 'hidden',
  		sacc: '',
  		dlacc: 'hidden',
  		dltab: 'hidden',
    });
});

module.exports = softwareRouter;
