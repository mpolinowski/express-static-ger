var express = require('express');
var downloadsGerRouter = express.Router();

downloadsGerRouter.get('/', function(req, res) {
    res.render('./Downloads/Downloads', {
        title: 'Download Bereich',
        ampimg: '/images/Search/P_SearchThumb_Products.jpg',
        headline: 'Download Bereich',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li>',
        canonical: '/Downloads/',
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
        title: 'Download Bereich Innenkameras',
        ampimg: '/images/Search/D_SearchThumb_IndoorCam.jpg',
        headline: 'Download Bereich',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Innenkameras/">Innenkameras</a></li>',
        canonical: '/Downloads/Indoor_Cameras/',
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
        title: 'Download Bereich Aussenkameras',
        ampimg: '/images/Search/D_SearchThumb_OutdoorCam.jpg',
        headline: 'Download Bereich',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Aussenkameras/">Aussenkameras</a></li>',
        canonical: '/Downloads/Outdoor_Cameras/',
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

downloadsGerRouter.get('/Zubeh%F6r/', function(req, res) {
    res.render('./Downloads/Accessories', {
        title: 'Download Bereich Zubehör',
        ampimg: '/images/Search/D_SearchThumb_Accessories.jpg',
        headline: 'Download Bereich',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Zubeh%F6r/">Zubehör</a></li>',
        canonical: '/Downloads/Accessories/',
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

downloadsGerRouter.get('/Zubeh%F6r/IN-90x', function(req, res) {
    res.render('./Downloads/Accessories_IN-90x', {
        title: 'Download Bereich Infrared Spotlight',
        ampimg: '/images/Search/D_SearchThumb_Accessories.jpg',
        headline: 'Download Bereich',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Zubeh%F6r/">Zubehör</a></li><li><a href="/Downloadbereich/Zubeh%F6r/IN-90x">IN-903 & IN-905</a></li>',
        canonical: '/Downloads/Accessories/IN-90x/',
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

downloadsGerRouter.get('/Zubeh%F6r/IN-DV1215', function(req, res) {
    res.render('./Downloads/Accessories_IN-DV1215', {
        title: 'Download Area IN-DV1215 Action Camera',
        ampimg: '/images/Search/D_SearchThumb_Accessories.jpg',
        headline: 'Download Area IN-DV1215 Action Camera',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li><a href="/Downloads/">Downloadbereich</a></li><li><a href="/Downloads/Accessories/">Zubehör</a></li><li><a href="/Downloads/Accessories/IN-DV1215">IN-DV1215</a></li>',
        canonical: '/Downloads/Accessories/IN-DV1215/',
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

downloadsGerRouter.get('/Zubeh%F6r/IN-Mikro_380', function(req, res) {
    res.render('./Downloads/Accessories_IN-Mikro380', {
        title: 'Download Bereich IN-Mikro 380',
        ampimg: '/images/Search/D_SearchThumb_Accessories.jpg',
        headline: 'Download Bereich',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Zubeh%F6r/">Zubehör</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Zubeh%F6r/IN-Mikro_380">IN-Mikro 380</a></li>',
        canonical: '/Downloads/Accessories/IN-Mikro_380/',
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

downloadsGerRouter.get('/Zubeh%F6r/IN-Motion_300', function(req, res) {
    res.render('./Downloads/Accessories_IN-Motion300', {
        title: 'Download Bereich IN-Motion 300',
        ampimg: '/images/Search/D_SearchThumb_Accessories.jpg',
        headline: 'Download Bereich',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Zubeh%F6r/">Zubehör</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Zubeh%F6r/IN-Motion_300">IN-Motion 300</a></li>',
        canonical: '/Downloads/Accessories/IN-Motion_300/',
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

downloadsGerRouter.get('/Zubeh%F6r/IN-Motion_500', function(req, res) {
    res.render('./Downloads/Accessories_IN-Motion500', {
        title: 'Download Bereich IN-Motion 500',
        ampimg: '/images/Search/D_SearchThumb_Accessories.jpg',
        headline: 'Download Bereich',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Zubeh%F6r/">Zubehör</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Zubeh%F6r/IN-Motion_500">IN-Motion 500</a></li>',
        canonical: '/Downloads/Accessories/IN-Motion_500/',
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


downloadsGerRouter.get('/Netzwerk_Zubeh%F6r/', function(req, res) {
    res.render('./Downloads/Network_Accessories', {
        title: 'Download Bereich Network Accessories',
        ampimg: '/images/Search/D_SearchThumb_NetworkAccessories.jpg',
        headline: 'Download Bereich',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Netzwerk_Zubeh%F6r/">Netzwerk Zubehör</a></li>',
        canonical: '/Downloads/Network_Accessories/',
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

downloadsGerRouter.get('/Netzwerk_Zubeh%F6r/IN-LAN500', function(req, res) {
    res.render('./Downloads/Network_Accessories_IN-LAN500', {
        title: 'Download Bereich IN-LAN 500',
        ampimg: '/images/Search/D_SearchThumb_NetworkAccessories.jpg',
        headline: 'Download Bereich',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Netzwerk_Zubeh%F6r/"> Network Zubehör</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Netzwerk_Zubeh%F6r/IN-LAN500">IN-LAN 500</a></li>',
        canonical: '/Downloads/Network_Accessories/IN-LAN500/',
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

downloadsGerRouter.get('/Netzwerk_Zubeh%F6r/IN-PoE_1000', function(req, res) {
    res.render('./Downloads/Network_Accessories_IN-PoE1000', {
        title: 'Download Bereich IN-PoE1000',
        ampimg: '/images/Search/D_SearchThumb_NetworkAccessories.jpg',
        headline: 'Download Bereich',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Netzwerk_Zubeh%F6r/">Network Zubehör</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Netzwerk_Zubeh%F6r/IN-PoE1000">IN-PoE 1000</a></li>',
        canonical: '/Downloads/Network_Accessories/IN-PoE_1000/',
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
        title: 'Download Bereich unserer Mobilen Apps',
        ampimg: '/images/Search/D_SearchThumb_Mobile.jpg',
        headline: 'Download Bereich',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Mobile_Apps/">Mobile Apps</a></li>',
        canonical: '/Downloads/Mobile_Apps/',
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
        title: 'InstarVision Android & BlackBerry',
        ampimg: '/images/Search/D_SearchThumb_Mobile.jpg',
        headline: 'Download Bereich',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Mobile_Apps/">Mobile Apps</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Mobile_Apps/Android_BlackBerry">Android Blackberry</a></li>',
        canonical: '/Downloads/Mobile_Apps/Android_BlackBerry/',
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
        title: 'InstarVision iOS',
        ampimg: '/images/Search/D_SearchThumb_Mobile.jpg',
        headline: 'Download Bereich',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Mobile_Apps/">Mobile Apps</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Mobile_Apps/iOS">iOS</a></li>',
        canonical: '/Downloads/Mobile_Apps/iOS/',
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
        title: 'InstarVision Windows Phone',
        ampimg: '/images/Search/D_SearchThumb_Mobile.jpg',
        headline: 'Download Bereich',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Mobile_Apps/">Mobile Apps</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Mobile_Apps/Windows_Phone/">Windows Phone</a></li>',
        canonical: '/Downloads/Mobile_Apps/Windows_Phone/',
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
        title: 'Download Bereich Desktop Software',
        ampimg: '/images/Search/D_SearchThumb_Software.jpg',
        headline: 'Download Bereich',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Desktop_Software/">Desktop Software</a></li>',
        canonical: '/Downloads/Desktop_Software/',
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
        title: 'Download Bereich InstarVision Desktop Software',
        ampimg: '/images/Search/D_SearchThumb_Software.jpg',
        headline: 'Download Bereich',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Desktop_Software/">Desktop Software</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Desktop_Software/InstarVision">InstarVision</a></li>',
        canonical: '/Downloads/Desktop_Software/InstarVision/',
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
        title: 'Download Bereich InstarVision Desktop Software',
        ampimg: '/images/Search/D_SearchThumb_Software.jpg',
        headline: 'Download Bereich',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Desktop_Software/">Desktop Software</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Desktop_Software/InstarVision_Metro">InstarVision Metro</a></li>',
        canonical: '/Downloads/Desktop_Software/InstarVision_Metro/',
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
        title: 'Download Bereich INSTAR Kamera Tool',
        ampimg: '/images/Search/D_SearchThumb_Software.jpg',
        headline: 'Download Bereich',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/">Downloadbereich</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Desktop_Software/">Desktop Software</a></li><li class="breadcrumb-item"><a href="/Downloadbereich/Desktop_Software/Instar_Kamera_Tool">Kamera Tool</a></li>',
        canonical: '/Downloads/Desktop_Software/Instar_Camera_Tool/',
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
      title: 'IN-8015 HD Downloads',
      ampimg: '/images/Search/D_SearchThumb_8015.jpg',
      headline: 'INSTAR Products IN-8015 HD',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Innenkameras">Innenkameras</a></li><li><a href="/Downloadbereich/Innenkameras/IN-8015_HD">IN-8015 HD</a></li>',
      canonical: '/Downloads/Indoor_Cameras/IN-8015_HD/',
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
      title: 'IN-6014 HD Downloads',
      ampimg: '/images/Search/D_SearchThumb_6014.jpg',
      headline: 'INSTAR Produkte IN-6014 HD',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Innenkameras">Innenkameras</a></li><li><a href="/Downloadbereich/Innenkameras/IN-6014_HD">IN-6014 HD</a></li>',
      canonical: '/Downloads/Indoor_Cameras/IN-6014_HD/',
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
      title: 'IN-6012 HD Downloads',
      ampimg: '/images/Search/D_SearchThumb_6012.jpg',
      headline: 'INSTAR Produkte IN-6012 HD',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Innenkameras">Innenkameras</a></li><li><a href="/Downloadbereich/Innenkameras/IN-6012_HD">IN-6012 HD</a></li>',
      canonical: '/Downloads/Indoor_Cameras/IN-6012_HD/',
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
      title: 'IN-6001 HD Downloads',
      ampimg: '/images/Search/D_SearchThumb_6001.jpg',
      headline: 'INSTAR Produkte IN-6001 HD',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Innenkameras">Innenkameras</a></li><li><a href="/Downloadbereich/Innenkameras/IN-6001_HD">IN-6001 HD</a></li>',
      canonical: '/Downloads/Indoor_Cameras/IN-6001_HD/',
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
      title: 'IN-3011 Downloads',
      ampimg: '/images/Search/D_SearchThumb_3011.jpg',
      headline: 'INSTAR Produkte IN-3011',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Innenkameras">Innenkameras</a></li><li><a href="/Downloadbereich/Innenkameras/IN-3011">IN-3011</a></li>',
      canonical: '/Downloads/Indoor_Cameras/IN-3011/',
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
      title: 'IN-3010 Downloads',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Produkte IN-3010',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Innenkameras">Innenkameras</a></li><li><a href="/Downloadbereich/Innenkameras/IN-3010">IN-3010</a></li>',
      canonical: '/Downloads/Indoor_Cameras/IN-3010/',
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
      title: 'IN-3003 Downloads',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Produkte IN-3003',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Innenkameras">Innenkameras</a></li><li><a href="/Downloadbereich/Innenkameras/IN-3003">IN-3003</a></li>',
      canonical: '/Downloads/Indoor_Cameras/IN-3003/',
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
      title: 'IN-3001 Downloads',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      headline: 'INSTAR Produkte IN-3001',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Innenkameras">Innenkameras</a></li><li><a href="/Downloadbereich/Innenkameras/IN-3001">IN-3001</a></li>',
      canonical: '/Downloads/Indoor_Cameras/IN-3001/',
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
      title: 'IN-9008 HD Downloads',
      ampimg: '/images/Search/D_SearchThumb_9008.jpg',
      headline: 'INSTAR Products IN-9008 HD',
      breadcrumbs: '<li><a href="/Products/">Produkte</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/Outdoor_Cameras">Aussenkameras</a></li><li><a href="/Downloads/Outdoor_Cameras/IN-9008_HD/">IN-9008 HD</a></li>',
      canonical: '/Downloads/Outdoor_Cameras/IN-9008_HD/',
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
      title: 'IN-7011 HD Downloads',
      ampimg: '/images/Search/D_SearchThumb_7011.jpg',
      headline: 'INSTAR Produkte IN-7011 HD',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Aussenkameras">Aussenkameras</a></li><li><a href="/Downloadbereich/Aussenkameras/IN-7011_HD/">IN-7011 HD</a></li>',
      canonical: '/Downloads/Outdoor_Cameras/IN-7011_HD/',
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
      title: 'IN-5907 HD Downloads',
      ampimg: '/images/Search/D_SearchThumb_5907.jpg',
      headline: 'INSTAR Produkte IN-5907 HD',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Aussenkameras">Aussenkameras</a></li><li><a href="/Downloadbereich/Aussenkameras/IN-5907_HD/">IN-5907 HD</a></li>',
      canonical: '/Downloads/Outdoor_Cameras/IN-5907_HD/',
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
      title: 'IN-5905 HD Downloads',
      ampimg: '/images/Search/D_SearchThumb_5905.jpg',
      headline: 'INSTAR Produkte IN-5905 HD',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Aussenkameras">Aussenkameras</a></li><li><a href="/Downloadbereich/Aussenkameras/IN-5905_HD/">IN-5905 HD</a></li>',
      canonical: '/Downloads/Outdoor_Cameras/IN-5905_HD/',
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
      title: 'IN-4011 Downloads',
      ampimg: '/images/Search/D_SearchThumb_4011.jpg',
      headline: 'INSTAR Produkte IN-4011',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Aussenkameras">Aussenkameras</a></li><li><a href="/Downloadbereich/Aussenkameras/IN-4011/">IN-4011</a></li>',
      canonical: '/Downloads/Outdoor_Cameras/IN-4011/',
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
      title: 'IN-4010 V2 Downloads',
      ampimg: '/images/Search/D_SearchThumb_4010.jpg',
      headline: 'INSTAR Produkte IN-4010 V2',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Aussenkameras">Aussenkameras</a></li><li><a href="/Downloadbereich/Aussenkameras/IN-4010_V2/">IN-4010 V2</a></li>',
      canonical: '/Downloads/Outdoor_Cameras/IN-4010_V2/',
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
      title: 'IN-4009 Downloads',
      ampimg: '/images/Search/D_SearchThumb_4010.jpg',
      headline: 'INSTAR Produkte IN-4009',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Aussenkameras">Aussenkameras</a></li><li><a href="/Downloadbereich/Aussenkameras/IN-4009/">IN-4009</a></li>',
      canonical: '/Downloads/Outdoor_Cameras/IN-4009/',
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
      title: 'IN-2908 Downloads',
      ampimg: '/images/Search/D_SearchThumb_2908.jpg',
      headline: 'INSTAR Produkte IN-2908',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Aussenkameras">Aussenkameras</a></li><li><a href="/Downloadbereich/Aussenkameras/IN-2908/">IN-2908</a></li>',
      canonical: '/Downloads/Outdoor_Cameras/IN-2908/',
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
      title: 'IN-2905 V2 Downloads',
      ampimg: '/images/Search/D_SearchThumb_2905.jpg',
      headline: 'INSTAR Produkte IN-2905 V2',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Aussenkameras">Aussenkameras</a></li><li><a href="/Downloadbereich/Aussenkameras/IN-2905_V2/">IN-2905 V2</a></li>',
      canonical: '/Downloads/Outdoor_Cameras/IN-2905_V2/',
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
      title: 'IN-2904 Downloads',
      ampimg: '/images/Search/P_SearchThumb_OutdoorCams.jpg',
      headline: 'INSTAR Produkte IN-2904',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Downloadbereich/">Downloadbereich</a></li><li><a href="/Downloadbereich/Aussenkameras">Aussenkameras</a></li><li><a href="/Downloadbereich/Aussenkameras/IN-2904/">IN-2904</a></li>',
      canonical: '/Downloads/Outdoor_Cameras/IN-2904/',
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
