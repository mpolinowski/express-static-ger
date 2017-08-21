var express = require('express');
var downloadsGerRouter = express.Router();

downloadsGerRouter.get('/', function(req, res) {
    res.render('./Downloads/Downloads', {
        title: 'INSTAR Wiki Download Bereich',
        ampimg: '/images/Search/P_SearchThumb_Products.jpg',
        headline: 'Download Bereich für INSTAR Produkte',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li>',
        canonical: '/Downloads/',
        description: 'Downloadbereich für INSTAR Produkte. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
    		sacc: 'hidden',
    		dlacc: '',
    		dltab: '',
      });
  });

downloadsGerRouter.get('/Innenkameras/', function(req, res) {
    res.render('./Downloads/Indoor_Cameras', {
        title: 'Download Bereich für INSTAR Innenkameras',
        ampimg: '/images/Search/D_SearchThumb_IndoorCam.jpg',
        headline: 'Download Bereich Innenkameras - Sicherheitskameras - Überwachungskameras - Webcams',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Innenkameras/">Innenkameras</a></li>',
        canonical: '/Downloads/Indoor_Cameras/',
        description: 'Downloadbereich für INSTAR Innenkameras. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
    		sacc: 'hidden',
    		dlacc: '',
    		dltab: '',
      });
  });

downloadsGerRouter.get('/Aussenkameras/', function(req, res) {
    res.render('./Downloads/Outdoor_Cameras', {
        title: 'Download Bereich für INSTAR Aussenkameras - Sicherheitskameras - Überwachungskameras - Webcams',
        ampimg: '/images/Search/D_SearchThumb_OutdoorCam.jpg',
        headline: 'Download Bereich für INSTAR Aussenkameras',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Aussenkameras/">Aussenkameras</a></li>',
        canonical: '/Downloads/Outdoor_Cameras/',
        description: 'Downloadbereich für INSTAR Aussenkameras. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
    		sacc: 'hidden',
    		dlacc: '',
    		dltab: '',
      });
  });

downloadsGerRouter.get('/Utensilien/', function(req, res) {
    res.render('./Downloads/Accessories', {
        title: 'Download Bereich für INSTAR Zubehör',
        ampimg: '/images/Search/D_SearchThumb_Accessories.jpg',
        headline: 'Download Bereich für INSTAR Utensilien',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Utensilien/">Zubehör</a></li>',
        canonical: '/Downloads/Accessories/',
        description: 'Downloadbereich für INSTAR Utensilien. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
    		sacc: 'hidden',
    		dlacc: '',
    		dltab: '',
      });
  });

downloadsGerRouter.get('/Utensilien/IN-90x', function(req, res) {
    res.render('./Downloads/Accessories_IN-90x', {
        title: 'Download Bereich für INSTAR Infrarot Flutlichter mit 850nm oder 940nm (unsichtbare) IR LEDs',
        ampimg: '/images/Search/D_SearchThumb_Accessories.jpg',
        headline: 'Download Bereich für INSTAR IN-90x',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Utensilien/">Zubehör</a></li><li><a href="/Downloadbereich/Utensilien/IN-90x">IN-903 & IN-905</a></li>',
        canonical: '/Downloads/Accessories/IN-90x/',
        description: 'Downloadbereich für INSTAR Infrarot Scheinwerfer. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
    		sacc: 'hidden',
    		dlacc: '',
    		dltab: '',
      });
  });

downloadsGerRouter.get('/Utensilien/IN-DV1215', function(req, res) {
    res.render('./Downloads/Accessories_IN-DV1215', {
        title: 'Download Bereich für INSTAR IN-DV1215 Action Camera',
        ampimg: '/images/Search/D_SearchThumb_Accessories.jpg',
        headline: 'Download Area IN-DV1215 Action Camera',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li><a href="/Downloads/">Downloadbereich</a></li><li><a href="/Downloads/Accessories/">Zubehör</a></li><li><a href="/Downloads/Accessories/IN-DV1215">IN-DV1215</a></li>',
        canonical: '/Downloads/Accessories/IN-DV1215/',
        description: 'Downloadbereich für INSTAR IN-DV1215. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
    		sacc: 'hidden',
    		dlacc: '',
    		dltab: '',
      });
  });

downloadsGerRouter.get('/Utensilien/IN-Mikro_380', function(req, res) {
    res.render('./Downloads/Accessories_IN-Mikro380', {
        title: 'Download Bereich für INSTAR IN-Mikro 380 Mikrofon für Sicherheitskameras',
        ampimg: '/images/Search/D_SearchThumb_Accessories.jpg',
        headline: 'Download Bereich für INSTAR IN-Mikro 380',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Utensilien/">Zubehör</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Utensilien/IN-Mikro_380">IN-Mikro 380</a></li>',
        canonical: '/Downloads/Accessories/IN-Mikro_380/',
        description: 'Downloadbereich für INSTAR IN-Mikro 380. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
    		sacc: 'hidden',
    		dlacc: '',
    		dltab: '',
      });
  });

downloadsGerRouter.get('/Utensilien/IN-Motion_300', function(req, res) {
    res.render('./Downloads/Accessories_IN-Motion300', {
        title: 'Download Bereich für INSTAR IN-Motion 300 Passiv-Infrarot Bewegungsmelder',
        ampimg: '/images/Search/D_SearchThumb_Accessories.jpg',
        headline: 'Download Bereich für INSTAR IN-Motion 300',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Utensilien/">Zubehör</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Utensilien/IN-Motion_300">IN-Motion 300</a></li>',
        canonical: '/Downloads/Accessories/IN-Motion_300/',
        description: 'Downloadbereich für INSTAR IN-Motion 300. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
    		sacc: 'hidden',
    		dlacc: '',
    		dltab: '',
      });
  });

downloadsGerRouter.get('/Utensilien/IN-Motion_500', function(req, res) {
    res.render('./Downloads/Accessories_IN-Motion500', {
        title: 'Download Bereich für INSTAR IN-Motion 500 Passiv-Infrarot und Mikrowellen Bewegungsmelder',
        ampimg: '/images/Search/D_SearchThumb_Accessories.jpg',
        headline: 'Download Bereich für INSTAR IN-Motion 500',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Utensilien/">Zubehör</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Utensilien/IN-Motion_500">IN-Motion 500</a></li>',
        canonical: '/Downloads/Accessories/IN-Motion_500/',
        description: 'Downloadbereich für INSTAR IN-Motion 500. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
    		sacc: 'hidden',
    		dlacc: '',
    		dltab: '',
      });
  });


downloadsGerRouter.get('/Netzwerk_Utensilien/', function(req, res) {
    res.render('./Downloads/Network_Accessories', {
        title: 'Download Bereich für INSTAR Netzwerk Zubehör',
        ampimg: '/images/Search/D_SearchThumb_NetworkAccessories.jpg',
        headline: 'Download Bereich für INSTAR Netzwerk Zubehör',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Netzwerk_Utensilien/">Netzwerk Zubehör</a></li>',
        canonical: '/Downloads/Network_Accessories/',
        description: 'Downloadbereich für INSTAR Netzwerk Zubehör. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
    		sacc: 'hidden',
    		dlacc: '',
    		dltab: '',
      });
  });

downloadsGerRouter.get('/Netzwerk_Utensilien/IN-LAN_500', function(req, res) {
    res.render('./Downloads/Network_Accessories_IN-LAN500', {
        title: 'Download Bereich für INSTAR IN-LAN 500 Powerline Adapter',
        ampimg: '/images/Search/D_SearchThumb_NetworkAccessories.jpg',
        headline: 'Download Bereich für INSTAR IN-LAN 500',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Netzwerk_Utensilien/"> Network Zubehör</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Netzwerk_Utensilien/IN-LAN_500">IN-LAN 500</a></li>',
        canonical: '/Downloads/Network_Accessories/IN-LAN_500/',
        description: 'Downloadbereich für INSTAR IN-LAN 500. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
    		sacc: 'hidden',
    		dlacc: '',
    		dltab: '',
      });
  });

downloadsGerRouter.get('/Netzwerk_Utensilien/IN-PoE_1000', function(req, res) {
    res.render('./Downloads/Network_Accessories_IN-PoE1000', {
        title: 'Download Bereich für INSTAR IN-PoE 1000 Power over Ethernet Injektor',
        ampimg: '/images/Search/D_SearchThumb_NetworkAccessories.jpg',
        headline: 'Download Bereich für INSTAR IN-PoE 1000',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Netzwerk_Utensilien/">Network Zubehör</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Netzwerk_Utensilien/IN-PoE1000">IN-PoE 1000</a></li>',
        canonical: '/Downloads/Network_Accessories/IN-PoE_1000/',
        description: 'Downloadbereich für INSTAR IN-PoE 1000. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
    		sacc: 'hidden',
    		dlacc: '',
    		dltab: '',
      });
  });

downloadsGerRouter.get('/Netzwerk_Utensilien/IN-Route_P52', function(req, res) {
    res.render('./Downloads/Network_Accessories_IN-Route_P52', {
        title: 'Download Bereich für INSTAR IN-Route P52 Mobile Router and Powerbank',
        ampimg: '/images/Search/D_SearchThumb_NetworkAccessories.jpg',
        headline: 'Download Bereich für INSTAR IN-Route P52',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Netzwerk_Utensilien/">Network Zubehör</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Netzwerk_Utensilien/IN-Route_P52">IN-Route P52</a></li>',
        canonical: '/Downloads/Network_Accessories/IN-Route_P52/',
        description: 'Downloadbereich für INSTAR IN-Route P52. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
    		sacc: 'hidden',
    		dlacc: '',
    		dltab: '',
      });
  });

/* ###################################################### Mobile Apps ###################################################### */

downloadsGerRouter.get('/Mobile_Apps/', function(req, res) {
    res.render('./Downloads/Mobile_Apps', {
        title: 'Download Bereich INSTAR Handy Apps',
        ampimg: '/images/Search/D_SearchThumb_Mobile.jpg',
        headline: 'Download Bereich für INSTAR Produkte',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Mobile_Apps/">Mobile Apps</a></li>',
        canonical: '/Downloads/Mobile_Apps/',
        description: 'Downloadbereich für INSTAR Produkte. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
    		sacc: 'hidden',
    		dlacc: '',
    		dltab: '',
      });
  });

downloadsGerRouter.get('/Mobile_Apps/Android_BlackBerry/', function(req, res) {
    res.render('./Downloads/Mobile_Apps_Android_BlackBerry', {
        title: 'Download Bereich für INSTAR InstarVision Android & BlackBerry',
        ampimg: '/images/Search/D_SearchThumb_Mobile.jpg',
        headline: 'Download Bereich für INSTAR Android & BlackBerry',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Mobile_Apps/">Mobile Apps</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Mobile_Apps/Android_BlackBerry">Android Blackberry</a></li>',
        canonical: '/Downloads/Mobile_Apps/Android_BlackBerry/',
        description: 'Downloadbereich für INSTAR Android & BlackBerry. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
    		sacc: 'hidden',
    		dlacc: '',
    		dltab: '',
      });
  });

downloadsGerRouter.get('/Mobile_Apps/iOS/', function(req, res) {
    res.render('./Downloads/Mobile_Apps_iOS', {
        title: 'Download Bereich für INSTAR InstarVision iOS',
        ampimg: '/images/Search/D_SearchThumb_Mobile.jpg',
        headline: 'Download Bereich für INSTAR iOS Apps',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Mobile_Apps/">Mobile Apps</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Mobile_Apps/iOS">iOS</a></li>',
        canonical: '/Downloads/Mobile_Apps/iOS/',
        description: 'Downloadbereich für INSTAR iOS Apps. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
    		sacc: 'hidden',
    		dlacc: '',
    		dltab: '',
      });
  });

downloadsGerRouter.get('/Mobile_Apps/Windows_Phone/', function(req, res) {
    res.render('./Downloads/Desktop_Software_InstarVision_Metro', {
        title: 'Download Bereich für INSTAR InstarVision Windows Phone',
        ampimg: '/images/Search/D_SearchThumb_Mobile.jpg',
        headline: 'Download Bereich für INSTAR Windows Phone Apps',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Mobile_Apps/">Mobile Apps</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Mobile_Apps/Windows_Phone/">Windows Phone</a></li>',
        canonical: '/Downloads/Mobile_Apps/Windows_Phone/',
        description: 'Downloadbereich für INSTAR Windows Phone Apps. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
    		sacc: 'hidden',
    		dlacc: '',
    		dltab: '',
      });
  });

/* ###################################################### Desktop Software###################################################### */

downloadsGerRouter.get('/Desktop_Software/', function(req, res) {
    res.render('./Downloads/Desktop_Software', {
        title: 'Download Bereich für INSTAR Desktop Software',
        ampimg: '/images/Search/D_SearchThumb_Software.jpg',
        headline: 'Download Bereich für INSTAR Desktop Software',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Desktop_Software/">Desktop Software</a></li>',
        canonical: '/Downloads/Desktop_Software/',
        description: 'Downloadbereich für INSTAR Desktop Software. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
    		sacc: 'hidden',
    		dlacc: '',
    		dltab: '',
      });
  });

downloadsGerRouter.get('/Desktop_Software/InstarVision', function(req, res) {
    res.render('./Downloads/Desktop_Software_InstarVision', {
        title: 'Download Bereich für INSTAR InstarVision für Windows',
        ampimg: '/images/Search/D_SearchThumb_Software.jpg',
        headline: 'Download Bereich für INSTAR InstarVision',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Desktop_Software/">Desktop Software</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Desktop_Software/InstarVision">InstarVision</a></li>',
        canonical: '/Downloads/Desktop_Software/InstarVision/',
        description: 'Downloadbereich für INSTAR InstarVision. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
    		sacc: 'hidden',
    		dlacc: '',
    		dltab: '',
      });
  });

downloadsGerRouter.get('/Desktop_Software/InstarVision_Metro/', function(req, res) {
    res.render('./Downloads/Desktop_Software_InstarVision_Metro', {
        title: 'Download Bereich für INSTAR InstarVision für Windows Metro',
        ampimg: '/images/Search/D_SearchThumb_Software.jpg',
        headline: 'Download Bereich für INSTAR Windows Metro',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Desktop_Software/">Desktop Software</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Desktop_Software/InstarVision_Metro">InstarVision Metro</a></li>',
        canonical: '/Downloads/Desktop_Software/InstarVision_Metro/',
        description: 'Downloadbereich für INSTAR Windows Metro für Windows 10 und Windows 8.1. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
    		sacc: 'hidden',
    		dlacc: '',
    		dltab: '',
      });
  });

downloadsGerRouter.get('/Desktop_Software/Instar_Kamera_Tool', function(req, res) {
    res.render('./Downloads/Desktop_Software_InstarCameraTool', {
        title: 'Download Bereich für INSTAR Kamera Tool',
        ampimg: '/images/Search/D_SearchThumb_Software.jpg',
        headline: 'Download Bereich für INSTAR Kamera Tool',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Desktop_Software/">Desktop Software</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Desktop_Software/Instar_Kamera_Tool">Kamera Tool</a></li>',
        canonical: '/Downloads/Desktop_Software/Instar_Camera_Tool/',
        description: 'Downloadbereich für INSTAR Kamera Tool. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
    		sacc: 'hidden',
    		dlacc: '',
    		dltab: '',
      });
  });

/* ###################################################### Innenkameras ###################################################### */

downloadsGerRouter.route('/Innenkameras/IN-8015_HD/')
.get(function(req, res) {
  res.render('./Downloads/Indoor_Cameras_8015', {
      title: 'Download Bereich für INSTAR IN-8015 Full HD Innenkamera',
      ampimg: '/images/Search/D_SearchThumb_8015.jpg',
      headline: 'INSTAR Innenkameras IN-8015 Full HD',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Innenkameras">Innenkameras</a></li><li><a href="/Downloadbereich/Innenkameras/IN-8015_HD">IN-8015 HD</a></li>',
      canonical: '/Downloads/Indoor_Cameras/IN-8015_HD/',
      description: 'Downloadbereich für INSTAR IN-8015 Full HD. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
  		sacc: 'hidden',
  		dlacc: '',
  		dltab: '',
    });
});

downloadsGerRouter.route('/Innenkameras/IN-6014_HD/')
.get(function(req, res) {
  res.render('./Downloads/Indoor_Cameras_6014', {
      title: 'Download Bereich für INSTAR IN-6014 HD Innenkamera',
      ampimg: '/images/Search/D_SearchThumb_6014.jpg',
      headline: 'INSTAR Innenkameras IN-6014 HD',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Innenkameras">Innenkameras</a></li><li><a href="/Downloadbereich/Innenkameras/IN-6014_HD">IN-6014 HD</a></li>',
      canonical: '/Downloads/Indoor_Cameras/IN-6014_HD/',
      description: 'Downloadbereich für INSTAR IN-6014 HD. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
  		sacc: 'hidden',
  		dlacc: '',
  		dltab: '',
    });
});

downloadsGerRouter.route('/Innenkameras/IN-6012_HD/')
.get(function(req, res) {
  res.render('./Downloads/Indoor_Cameras_6012', {
      title: 'Download Bereich für INSTAR IN-6012 HD Innenkamera',
      ampimg: '/images/Search/D_SearchThumb_6012.jpg',
      headline: 'INSTAR Innenkameras IN-6012 HD',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Innenkameras">Innenkameras</a></li><li><a href="/Downloadbereich/Innenkameras/IN-6012_HD">IN-6012 HD</a></li>',
      canonical: '/Downloads/Indoor_Cameras/IN-6012_HD/',
      description: 'Downloadbereich für INSTAR IN-6012 HD. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
  		sacc: 'hidden',
  		dlacc: '',
  		dltab: '',
    });
});

downloadsGerRouter.route('/Innenkameras/IN-6001_HD/')
.get(function(req, res) {
  res.render('./Downloads/Indoor_Cameras_6001', {
      title: 'Download Bereich für INSTAR IN-6001 HD Innenkamera',
      ampimg: '/images/Search/D_SearchThumb_6001.jpg',
      headline: 'INSTAR Innenkameras IN-6001 HD',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Innenkameras">Innenkameras</a></li><li><a href="/Downloadbereich/Innenkameras/IN-6001_HD">IN-6001 HD</a></li>',
      canonical: '/Downloads/Indoor_Cameras/IN-6001_HD/',
      description: 'Downloadbereich für INSTAR IN-6001 HD. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
  		sacc: 'hidden',
  		dlacc: '',
  		dltab: '',
    });
});

downloadsGerRouter.route('/Innenkameras/IN-3011/')
.get(function(req, res) {
  res.render('./Downloads/Indoor_Cameras_3011', {
      title: 'Download Bereich für INSTAR IN-3011 Innenkamera',
      ampimg: '/images/Search/D_SearchThumb_3011.jpg',
      headline: 'INSTAR Innenkameras IN-3011',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Innenkameras">Innenkameras</a></li><li><a href="/Downloadbereich/Innenkameras/IN-3011">IN-3011</a></li>',
      canonical: '/Downloads/Indoor_Cameras/IN-3011/',
      description: 'Downloadbereich für INSTAR IN-3011. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
  		sacc: 'hidden',
  		dlacc: '',
  		dltab: '',
    });
});

downloadsGerRouter.route('/Innenkameras/IN-3010/')
.get(function(req, res) {
  res.render('./Downloads/Indoor_Cameras_3010', {
      title: 'Download Bereich für INSTAR IN-3010 Innenkamera',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Innenkameras IN-3010',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Innenkameras">Innenkameras</a></li><li><a href="/Downloadbereich/Innenkameras/IN-3010">IN-3010</a></li>',
      canonical: '/Downloads/Indoor_Cameras/IN-3010/',
      description: 'Downloadbereich für INSTAR IN-3010. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
  		sacc: 'hidden',
  		dlacc: '',
  		dltab: '',
    });
});

downloadsGerRouter.route('/Innenkameras/IN-3003/')
.get(function(req, res) {
  res.render('./Downloads/Indoor_Cameras_3003', {
      title: 'Download Bereich für INSTAR IN-3003 Innenkamera',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Innenkameras IN-3003',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Innenkameras">Innenkameras</a></li><li><a href="/Downloadbereich/Innenkameras/IN-3003">IN-3003</a></li>',
      canonical: '/Downloads/Indoor_Cameras/IN-3003/',
      description: 'Downloadbereich für INSTAR IN-3003. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
  		sacc: 'hidden',
  		dlacc: '',
  		dltab: '',
    });
});

downloadsGerRouter.route('/Innenkameras/IN-3001/')
.get(function(req, res) {
  res.render('./Downloads/Indoor_Cameras_3001', {
      title: 'Download Bereich für INSTAR IN-3001 Innenkamera',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Innenkameras IN-3001',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Innenkameras">Innenkameras</a></li><li><a href="/Downloadbereich/Innenkameras/IN-3001">IN-3001</a></li>',
      canonical: '/Downloads/Indoor_Cameras/IN-3001/',
      description: 'Downloadbereich für INSTAR IN-3001. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
  		sacc: 'hidden',
  		dlacc: '',
  		dltab: '',
    });
});

/* ###################################################### Außenkameras ###################################################### */

downloadsGerRouter.route('/Aussenkameras/IN-9008_HD/')
.get(function(req, res) {
  res.render('./Downloads/Outdoor_Cameras_9008', {
      title: 'Download Bereich für INSTAR IN-9008 Full HD Aussenkamera',
      ampimg: '/images/Search/D_SearchThumb_9008.jpg',
      headline: 'INSTAR Aussenkamera IN-9008 Full HD',
      breadcrumbs: '<li><a href="/Products/">Produkte</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Outdoor_Cameras">Aussenkameras</a></li><li><a href="/Downloads/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li>',
      canonical: '/Downloads/Outdoor_Cameras/IN-9008_HD/',
      description: 'Downloadbereich für INSTAR IN-9008 Full HD. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
  		sacc: 'hidden',
  		dlacc: '',
  		dltab: '',
    });
});

downloadsGerRouter.route('/Aussenkameras/IN-7011_HD/')
.get(function(req, res) {
  res.render('./Downloads/Outdoor_Cameras_7011', {
      title: 'Download Bereich für INSTAR IN-7011 HD Aussenkamera',
      ampimg: '/images/Search/D_SearchThumb_7011.jpg',
      headline: 'INSTAR Aussenkamera IN-7011 HD',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Aussenkameras">Aussenkameras</a></li><li><a href="/Downloadbereich/Aussenkameras/IN-7011_HD/">IN-7011 HD</a></li>',
      canonical: '/Downloads/Outdoor_Cameras/IN-7011_HD/',
      description: 'Downloadbereich für INSTAR IN-7011 HD. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
  		sacc: 'hidden',
  		dlacc: '',
  		dltab: '',
    });
});

downloadsGerRouter.route('/Aussenkameras/IN-5907_HD/')
.get(function(req, res) {
  res.render('./Downloads/Outdoor_Cameras_5907', {
      title: 'Download Bereich für INSTAR IN-5907 HD Aussenkamera',
      ampimg: '/images/Search/D_SearchThumb_5907.jpg',
      headline: 'INSTAR Aussenkamera IN-5907 HD',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Aussenkameras">Aussenkameras</a></li><li><a href="/Downloadbereich/Aussenkameras/IN-5907_HD/">IN-5907 HD</a></li>',
      canonical: '/Downloads/Outdoor_Cameras/IN-5907_HD/',
      description: 'Downloadbereich für INSTAR IN-5907 HD. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
  		sacc: 'hidden',
  		dlacc: '',
  		dltab: '',
    });
});

downloadsGerRouter.route('/Aussenkameras/IN-5905_HD/')
.get(function(req, res) {
  res.render('./Downloads/Outdoor_Cameras_5905', {
      title: 'Download Bereich für INSTAR IN-5905 HD Aussenkamera',
      ampimg: '/images/Search/D_SearchThumb_5905.jpg',
      headline: 'INSTAR Aussenkamera IN-5905 HD',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Aussenkameras">Aussenkameras</a></li><li><a href="/Downloadbereich/Aussenkameras/IN-5905_HD/">IN-5905 HD</a></li>',
      canonical: '/Downloads/Outdoor_Cameras/IN-5905_HD/',
      description: 'Downloadbereich für INSTAR IN-5905 HD. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
  		sacc: 'hidden',
  		dlacc: '',
  		dltab: '',
    });
});


downloadsGerRouter.route('/Aussenkameras/IN-4011/')
.get(function(req, res) {
  res.render('./Downloads/Outdoor_Cameras_4011', {
      title: 'Download Bereich für INSTAR IN-4011 Aussenkamera',
      ampimg: '/images/Search/D_SearchThumb_4011.jpg',
      headline: 'INSTAR Aussenkamera IN-4011',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Aussenkameras">Aussenkameras</a></li><li><a href="/Downloadbereich/Aussenkameras/IN-4011/">IN-4011</a></li>',
      canonical: '/Downloads/Outdoor_Cameras/IN-4011/',
      description: 'Downloadbereich für INSTAR IN-4011. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
  		sacc: 'hidden',
  		dlacc: '',
  		dltab: '',
    });
});

downloadsGerRouter.route('/Aussenkameras/IN-4010_V2/')
.get(function(req, res) {
  res.render('./Downloads/Outdoor_Cameras_4010', {
      title: 'Download Bereich für INSTAR IN-4010 V2 Aussenkamera',
      ampimg: '/images/Search/D_SearchThumb_4010.jpg',
      headline: 'INSTAR Aussenkamera IN-4010 V2',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Aussenkameras">Aussenkameras</a></li><li><a href="/Downloadbereich/Aussenkameras/IN-4010_V2/">IN-4010 V2</a></li>',
      canonical: '/Downloads/Outdoor_Cameras/IN-4010_V2/',
      description: 'Downloadbereich für INSTAR IN-4010 V2. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
  		sacc: 'hidden',
  		dlacc: '',
  		dltab: '',
    });
});

downloadsGerRouter.route('/Aussenkameras/IN-4009/')
.get(function(req, res) {
  res.render('./Downloads/Outdoor_Cameras_4009', {
      title: 'Download Bereich für INSTAR IN-4009 Aussenkamera',
      ampimg: '/images/Search/D_SearchThumb_4010.jpg',
      headline: 'INSTAR Aussenkamera IN-4009',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Aussenkameras">Aussenkameras</a></li><li><a href="/Downloadbereich/Aussenkameras/IN-4009/">IN-4009</a></li>',
      canonical: '/Downloads/Outdoor_Cameras/IN-4009/',
      description: 'Downloadbereich für INSTAR IN-4009. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
  		sacc: 'hidden',
  		dlacc: '',
  		dltab: '',
    });
});

downloadsGerRouter.route('/Aussenkameras/IN-2908/')
.get(function(req, res) {
  res.render('./Downloads/Outdoor_Cameras_2908', {
      title: 'Download Bereich für INSTAR IN-2908 Aussenkamera',
      ampimg: '/images/Search/D_SearchThumb_2908.jpg',
      headline: 'INSTAR Aussenkamera IN-2908',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Aussenkameras">Aussenkameras</a></li><li><a href="/Downloadbereich/Aussenkameras/IN-2908/">IN-2908</a></li>',
      canonical: '/Downloads/Outdoor_Cameras/IN-2908/',
      description: 'Downloadbereich für INSTAR IN-2908. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
  		sacc: 'hidden',
  		dlacc: '',
  		dltab: '',
    });
});

downloadsGerRouter.route('/Aussenkameras/IN-2905_V2/')
.get(function(req, res) {
  res.render('./Downloads/Outdoor_Cameras_2905', {
      title: 'Download Bereich für INSTAR IN-2905 V2 Aussenkamera',
      ampimg: '/images/Search/D_SearchThumb_2905.jpg',
      headline: 'INSTAR Aussenkamera IN-2905 V2',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Aussenkameras">Aussenkameras</a></li><li><a href="/Downloadbereich/Aussenkameras/IN-2905_V2/">IN-2905 V2</a></li>',
      canonical: '/Downloads/Outdoor_Cameras/IN-2905_V2/',
      description: 'Downloadbereich für INSTAR IN-2905 V2. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
  		sacc: 'hidden',
  		dlacc: '',
  		dltab: '',
    });
});

downloadsGerRouter.route('/Aussenkameras/IN-2904/')
.get(function(req, res) {
  res.render('./Downloads/Outdoor_Cameras_2904', {
      title: 'Download Bereich für INSTAR IN-2904 Aussenkamera',
      ampimg: '/images/Search/P_SearchThumb_OutdoorCams.jpg',
      headline: 'INSTAR Aussenkamera IN-2904',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Aussenkameras">Aussenkameras</a></li><li><a href="/Downloadbereich/Aussenkameras/IN-2904/">IN-2904</a></li>',
      canonical: '/Downloads/Outdoor_Cameras/IN-2904/',
      description: 'Downloadbereich für INSTAR IN-2904. Firmware und Weboberflächen Software-Updates, Schnellinstallationsanleitungen und Handbücher (PDF), Handy Apps (APK), Installation Software Downloads.',
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
  		sacc: 'hidden',
  		dlacc: '',
  		dltab: '',
    });
});


module.exports = downloadsGerRouter;
