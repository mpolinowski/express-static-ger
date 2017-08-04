var express = require('express');
var indoorCamsGerRouter = express.Router();



/* ****************************************** GET /Innenkameras ****************************************** */
indoorCamsGerRouter.route('/')
  .get(function(req, res) {
      res.render('./Indoor_Cams/Indoor_Cameras', {
          title: 'INSTAR IP Sicherheitskameras für Innenraumüberwachung',
          model: '8015',
          series: '1080p',
          type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          headline: 'INSTAR Produkte IP Innenkameras Online Handbuch',
          breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products">Produkte</a></li><li><a href="/Innenkameras">Innenkameras</a></li',
          canonical: '/Indoor_Cameras/',
          description: 'IP Überwachungskamera, IP Webcam, PTZ Webcam bietet Infrarot Nachtsicht, WLAN und LAN Anbindung, drahtlose Videoübertragung, einen Netzwerkstream über RTSP und eine kostenlose P2P und DDNS Adresse für den Fernzugriff. Überwachen Sie Ihr Haus, Auto, Haustier, Baby und vieles mehr mit einer der besten Sicherheitskameras auf dem Markt.',
      		pacc: 'expanded',
      		ptab: '',
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
      		dlacc: 'hidden',
      		dltab: 'hidden',
        });
    });

/* ###################################################### IN-8015 HD ###################################################### */

indoorCamsGerRouter.route('/IN-8015_HD/Sicherheit_Hinweise')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-8015 Full HD IP Kamera Sicherheitshinweise',
          model: '8015',
          series: '1080p',
          type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_IN-8015HD_Safety_Warnings.jpg',
          headline: 'INSTAR Produkte IP IN-8015 Full HD Innenkameras',
          breadcrumbs: '<li><a href="/Innenkameras">Innenkameras</a></li><li><a href="/Innenkameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Innenkameras/IN-8015_HD/Handbuch/">Handbuch</a></li><li><a href="/Innenkameras/IN-8015_HD/Sicherheit_Hinweise/">Sicherheit Hinweise</a></li>',
          canonical: '/Indoor_Cameras/IN-8015_HD/Safety_Warnings/',
          description: 'INSTAR IN-8015 Full HD IP Überwachungskamera - Sicherheitshinweise für die Installation und Benutzung Ihrer Sicherheitskamera',
    		  pacc: '',
    		  qiacc: '',
    		  mdacc: '',
    		  iaacc: '',
    		  auacc: '',
    		  fhdacc: '',
    		  hdacc: 'hidden',
        });
    });

indoorCamsGerRouter.route('/IN-8015_HD/Garantie')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-8015 Full HD IP Kamera Garantie & Entsorgung',
          model: '8015',
          series: '1080p',
          type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_IN-8015HD_Warranty.jpg',
          headline: 'INSTAR Produkte IN-8015 Full HD IP Innenkameras Online Handbuch',
          breadcrumbs: '<li><a href="/Innenkameras">Innenkameras</a></li><li><a href="/Innenkameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Innenkameras/IN-8015_HD/Handbuch/">Handbuch</a></li><li><a href="/Innenkameras/IN-8015_HD/Garantie/">Garantie</a></li>',
          canonical: '/Indoor_Cameras/IN-8015_HD/Warranty/',
          description: 'INSTAR IN-8015 Full HD IP Überwachungskamera - Garantieabwicklung, technischer Support, Service Center und Kontaktinformationen',
    		  pacc: '',
    		  qiacc: '',
    		  mdacc: '',
    		  iaacc: '',
    		  auacc: '',
    		  fhdacc: '',
    		  hdacc: 'hidden',
        });
    });

indoorCamsGerRouter.route('/IN-8015_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'INSTAR IN-8015 Full HD Video Streaming',
          model: '8015',
          series: '1080p',
          type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_IN-8015HD_Video_Streaming.jpg',
          headline: 'INSTAR Produkte IN-8015 Full HD IP Innenkameras Online Handbuch',
          breadcrumbs: '<li><a href="/Innenkameras">Innenkameras</a></li><li><a href="/Innenkameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Innenkameras/IN-8015_HD/Handbuch/">Handbuch</a></li><li><a href="/Innenkameras/IN-8015_HD/Video_Streaming/">Video Streaming</a></li>',
          canonical: '/Indoor_Cameras/IN-8015_HD/Video_Streaming/',
          description: 'INSTAR IN-8015 Full HD IP Überwachungskamera - Nutzen Sie den RTSP Stream Ihrer Sicherheitskamera in Drittanbieter Software, wie dem VLC Player',
    		  pacc: '',
    		  qiacc: '',
    		  mdacc: '',
    		  iaacc: '',
    		  auacc: '',
    		  fhdacc: '',
    		  hdacc: 'hidden',
        });
    });

indoorCamsGerRouter.route('/IN-8015_HD/Kamera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'INSTAR IN-8015 Full HD Werksreset',
          model: '8015',
          series: '1080p',
          type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_IN-8015HD_Reset.jpg',
          headline: 'INSTAR Produkte IN-8015 Full HD IP Innenkameras Online Handbuch',
          breadcrumbs: '<li><a href="/Innenkameras">Innenkameras</a></li><li><a href="/Innenkameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Innenkameras/IN-8015_HD/Handbuch/">Handbuch</a></li><li><a href="/Innenkameras/IN-8015_HD/Kamera_Reset/">Kamera Reset</a></li>',
          canonical: '/Indoor_Cameras/IN-8015_HD/Camera_Reset/',
          description: 'INSTAR IN-8015 Full HD IP Überwachungskamera - Stellen Sie die Werkseinstellungen wieder her, wenn Sie den Benutzernamen oder Kennwort vergessen haben.',
    		  pacc: '',
    		  qiacc: '',
    		  mdacc: '',
    		  iaacc: '',
    		  auacc: '',
    		  fhdacc: '',
    		  hdacc: 'hidden',
        });
    });


indoorCamsGerRouter.route('/IN-8015_HD')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-8015_Overview', {
      title: 'INSTAR IN-8015 Full HD Produktübersicht',
      model: '8015',
      series: '1080p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-8015HD.jpg',
      headline: 'INSTAR Produkte IN-8015 Full HD IP Innenkameras Online Handbuch',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products">Products</a></li><li><a href="/Innenkameras/">Innenkameras</a></li><li><a href="/Innenkameras/IN-8015_HD/">IN-8015 HD</a></li>',
      canonical: '/Indoor_Cameras/IN-8015_HD/',
      description: 'Die IN-8015 Full HD (1080p, 2 Megapixel Auflösung) IP Überwachungskamera, IP Webcam, PTZ Indoor Webcam bietet Infrarot Nachtsicht, WLAN und LAN Anbindung, integrierten PIR Sensor, drahtlose Videoübertragung, einen Netzwerkstream über RTSP und eine kostenlose P2P und DDNS Adresse für den Fernzugriff. Überwachen Sie Ihr Haus, Auto, Haustier, Baby und vieles mehr mit einer der besten Sicherheitskamera auf dem Markt.',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});

indoorCamsGerRouter.route('/IN-8015_HD/Handbuch')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-8015_Usermanual', {
      title: 'INSTAR IN-8015 Full HD Handbuch',
      model: '8015',
      series: '1080p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-8015HD.jpg',
      headline: 'INSTAR Produkte IN-8015 Full HD IP Innenkameras Online Handbuch',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Innenkameras/">Innenkameras</a></li><li><a href="/Innenkameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Innenkameras/IN-8015_HD/Handbuch/">Handbuch</a></li>',
      canonical: '/Indoor_Cameras/IN-8015_HD/Usermanual/',
      description: 'INSTAR IN-8015 Full HD IP Überwachungskamera - Online Handbuch für die Installation Ihrer INSTAR IP Sicherheitskamera. Netzwerk und WLAN Einbindung, DDNS oder P2P Fernzugriff über das Internet, Alarmbenachrichtigung per Email und Push Dienst und Alarm Videoaufnahmen.',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});

indoorCamsGerRouter.route('/IN-8015_HD/Produkt_Features')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-8015_Product_Features', {
      title: 'INSTAR IN-8015 Full HD Product Features',
      model: '8015',
      series: '1080p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-8015HD_Features.jpg',
      headline: 'INSTAR Produkte IN-8015 Full HD IP Innenkameras Online Handbuch',
      breadcrumbs: '<li><a href="/Innenkameras/">Innenkameras</a></li><li><a href="/Innenkameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Innenkameras/IN-8015_HD/Handbuch/">Handbuch</a></li><li><a href="/Innenkameras/IN-8015_HD/Produkt_Features/">Produkt Features</a></li>',
      canonical: '/Indoor_Cameras/IN-8015_HD/Product_Features/',
      description: 'INSTAR IN-8015 Full HD IP Überwachungskamera - Übersicht über alle Kenndaten und Funktionen Ihrer IP Sicherheitskamera',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});

indoorCamsGerRouter.route('/IN-8015_HD/Point2Point')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-8015_Point2Point', {
      title: 'INSTAR IN-8015 Full HD Point 2 Point',
      model: '8015',
      series: '1080p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-8015HD_Quick_Installation.jpg',
      headline: 'INSTAR Produkte IN-8015 Full HD IP Innenkameras Online Handbuch',
      breadcrumbs: '<li><a href="/Innenkameras/">Innenkameras</a></li><li><a href="/Innenkameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Innenkameras/IN-8015_HD/Handbuch/">Handbuch</a></li><li><a href="/Innenkameras/IN-8015_HD/Point2Point/">Point2Point</a></li>',
      canonical: '/Indoor_Cameras/IN-8015_HD/Point2Point/',
      description: 'INSTAR IN-8015 Full HD IP Überwachungskamera - Greifen Sie über das Internet auf Ihre Kamera zu, mit Hilfe unserer kostenlosen P2P UID - ganz ohne Portweiterleitung, auch über eine LTE Anbindung ohne öffentlicher IPv4 Adresse.',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});

indoorCamsGerRouter.route('/IN-8015_HD/Schnell_Installation')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-8015_Quick_Installation', {
      title: 'INSTAR IN-8015 Full HD Schnell Installation',
      model: '8015',
      series: '1080p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-8015HD_Quick_Installation.jpg',
      headline: 'INSTAR Produkte IN-8015 Full HD IP Innenkameras Online Handbuch',
      breadcrumbs: '<li><a href="/Innenkameras/">Innenkameras</a></li><li><a href="/Innenkameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Innenkameras/IN-8015_HD/Handbuch/">Handbuch</a></li><li><a href="/Innenkameras/IN-8015_HD/Schnell_Installation/">Schnell Installation</a></li>',
      canonical: '/Indoor_Cameras/IN-8015_HD/Quick_Installation/',
      description: 'INSTAR IN-8015 Full HD IP Überwachungskamera - Alle Informationen die Sie nach dem Auspacken Ihrer Sicherheitskamera benötigen, um Ihre Webcam in Ihr Netzwerk (WLAN) einzubinden, den Fernzugriff über P2P oder DDNS einzurichten, die Kamera über die Weboberfläche zu konfigurieren und in unsere kostenlose Handy App für Android, iPhone, iPad, Windows Phone / Metro und Blackberry einzubinden.',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});

indoorCamsGerRouter.route('/IN-8015_HD/Objektivjustage')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-8015_Lense_Adjustment', {
      title: 'INSTAR IN-8015 Full HD Objektivjustage',
      model: '8015',
      series: '1080p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-8015HD_Lense_Adjust.jpg',
      headline: 'INSTAR Produkte IN-8015 Full HD IP Innenkameras Online Handbuch',
      breadcrumbs: '<li><a href="/Innenkameras/">Innenkameras</a></li><li><a href="/Innenkameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Innenkameras/IN-8015_HD/Handbuch/">Handbuch</a></li><li><a href="/Innenkameras/IN-8015_HD/Objektivjustage/">Objektivjustage</a></li>',
      canonical: '/Indoor_Cameras/IN-8015_HD/Lense_Adjustment/',
      description: 'INSTAR IN-8015 Full HD IP Überwachungskamera - wenn sich das Objektiv Ihrer Kamera verstellt hat, können Sie die Tiefenschärfe einfach durch Drehen an der Optik an Ihre Bedürfnisse anpassen.',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});

indoorCamsGerRouter.route('/IN-8015_HD/Technische_Spezifikationen')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-8015_Tech_Specs', {
      title: 'INSTAR IN-8015 Full HD Technical Specifications',
      model: '8015',
      series: '1080p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-8015HD_Technical_Specifications.jpg',
      headline: 'INSTAR Produkte IN-8015 Full HD IP Innenkameras Online Handbuch',
      breadcrumbs: '<li><a href="/Innenkameras/">Innenkameras</a></li><li><a href="/Innenkameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Innenkameras/IN-8015_HD/Technische_Spezifikationen/">Technische Spezifikationen</a></li>',
      canonical: '/Indoor_Cameras/IN-8015_HD/Technical_Specifications/',
      description: 'INSTAR IN-8015 Full HD IP Überwachungskamera - Eine Übersicht aller Leistungsdaten Ihrer Sicherheitskamera.',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});


/* ###################################################### IN-6014 HD ###################################################### */


indoorCamsGerRouter.route('/IN-6014_HD/Sicherheit_Hinweise')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'INSTAR IN-6014 HD Sicherheit Hinweise',
          model: '6014',
          series: '720p',
    		  type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_IN-6014HD_Safety.jpg',
          headline: 'INSTAR Produkte IN-6014 HD IP Innenkameras Online Handbuch',
          breadcrumbs: '<li><a href="/Innenkameras">Innenkameras</a></li><li><a href="/Innenkameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Innenkameras/IN-6014_HD/Handbuch/">Handbuch</a></li><li><a href="/Innenkameras/IN-6014_HD/Sicherheit_Hinweise/">Sicherheit Hinweise</a></li>',
          canonical: '/Indoor_Cameras/IN-6014_HD/Safety_Warnings/',
          description: 'INSTAR IN-6014 HD IP Überwachungskamera - Sicherheitshinweise für die Installation und Benutzung Ihrer Sicherheitskamera.',
    		  pacc: '',
    		  qiacc: '',
    		  mdacc: '',
    		  iaacc: '',
    		  auacc: '',
    		  fhdacc: 'hidden',
    		  hdacc: '',
        });
    });

indoorCamsGerRouter.route('/IN-6014_HD/Garantie')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'INSTAR IN-6014 HD Garantie & Entsorgung',
          model: '6014',
          series: '720p',
		      type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_IN-6014HD_Warranty.jpg',
          headline: 'INSTAR Produkte IN-6014 HD IP Innenkameras Online Handbuch',
          breadcrumbs: '<li><a href="/Innenkameras">Innenkameras</a></li><li><a href="/Innenkameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Innenkameras/IN-6014_HD/Handbuch/">Handbuch</a></li><li><a href="/Innenkameras/IN-6014_HD/Garantie/">Garantie</a></li>',
          canonical: '/Indoor_Cameras/IN-6014_HD/Warranty/',
          description: 'INSTAR IN-6014 HD IP Überwachungskamera - Garantieabwicklung, technischer Support, Service Center und Kontaktinformationen.',
    		  pacc: '',
    		  qiacc: '',
    		  mdacc: '',
    		  iaacc: '',
    		  auacc: '',
    		  fhdacc: 'hidden',
    		  hdacc: '',
        });
    });

indoorCamsGerRouter.route('/IN-6014_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'INSTAR IN-6014 HD Video Streaming',
          model: '6014',
          series: '720p',
		      type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_IN-6014HD_Video_Streaming.jpg',
          headline: 'INSTAR Produkte IN-6014 HD IP Innenkameras Online Handbuch',
          breadcrumbs: '<li><a href="/Innenkameras">Innenkameras</a></li><li><a href="/Innenkameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Innenkameras/IN-6014_HD/Handbuch/">Handbuch</a></li><li><a href="/Innenkameras/IN-6014_HD/Video_Streaming/">Video Streaming</a></li>',
          canonical: '/Indoor_Cameras/IN-6014_HD/Video_Streaming/',
          description: 'INSTAR IN-6014 HD IP Überwachungskamera - Nutzen Sie den RTSP Stream Ihrer Sicherheitskamera in Drittanbieter Software, wie dem VLC Player.',
    		  pacc: '',
    		  qiacc: '',
    		  mdacc: '',
    		  iaacc: '',
    		  auacc: '',
    		  fhdacc: 'hidden',
    		  hdacc: '',
        });
    });

indoorCamsGerRouter.route('/IN-6014_HD/Kamera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'INSTAR IN-6014 HD Hardware Reset',
          model: '6014',
          series: '720p',
		      type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_IN-6014HD_Reset.jpg',
          headline: 'INSTAR Produkte IN-6014 HD IP Innenkameras Online Handbuch',
          breadcrumbs: '<li><a href="/Innenkameras">Innenkameras</a></li><li><a href="/Innenkameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Innenkameras/IN-6014_HD/Handbuch/">Handbuch</a></li><li><a href="/Innenkameras/IN-6014_HD/Kamera_Reset/">Kamera Reset</a></li>',
          canonical: '/Indoor_Cameras/IN-6014_HD/Camera_Reset/',
          description: 'INSTAR IN-6014 HD IP Überwachungskamera - Stellen Sie die Werkseinstellungen wieder her, wenn Sie den Benutzernamen oder Kennwort vergessen haben.',
    		  pacc: '',
    		  qiacc: '',
    		  mdacc: '',
    		  iaacc: '',
    		  auacc: '',
    		  fhdacc: 'hidden',
    		  hdacc: '',
        });
    });

indoorCamsGerRouter.route('/IN-6014_HD')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6014_Overview', {
      title: 'INSTAR IN-6014 HD Zusammenfassung',
      model: '6014',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6014HD.jpg',
      headline: 'INSTAR Produkte IN-6014 HD IP Innenkameras Online Handbuch',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products">Products</a></li><li><a href="/Innenkameras/">Innenkameras</a></li><li><a href="/Innenkameras/IN-6014_HD/">IN-6014 HD</a></li>',
      canonical: '/Indoor_Cameras/IN-6014_HD/',
      description: 'Die IN-6014 HD (720p, 1 Megapixel Auflösung) IP Überwachungskamera, IP Webcam, PTZ Indoor Webcam bietet Infrarot Nachtsicht, WLAN und LAN Anbindung, drahtlose Videoübertragung, integrierten PIR Sensor, einen Netzwerkstream über RTSP und eine kostenlose P2P und DDNS Adresse für den Fernzugriff. Überwachen Sie Ihr Haus, Auto, Haustier, Baby und vieles mehr mit einer der besten Sicherheitskamera auf dem Markt.',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsGerRouter.route('/IN-6014_HD/Handbuch')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6014_Usermanual', {
      title: 'INSTAR IN-6014 HD Handbuch',
      model: '6014',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6014HD.jpg',
      headline: 'INSTAR Produkte IN-6014 HD IP Innenkameras Online Handbuch',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Innenkameras/">Innenkameras</a></li><li><a href="/Innenkameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Innenkameras/IN-6014_HD/Handbuch/">Handbuch</a></li>',
      canonical: '/Indoor_Cameras/IN-6014_HD/Usermanual/',
      description: 'INSTAR IN-6014 HD IP Überwachungskamera - Online Handbuch für die Installation Ihrer INSTAR IP Sicherheitskamera. Netzwerk und WLAN Einbindung, DDNS oder P2P Fernzugriff über das Internet, Alarmbenachrichtigung per Email und Push Dienst und Alarm Videoaufnahmen.',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsGerRouter.route('/IN-6014_HD/Produkt_Features')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6014_Product_Features', {
      title: 'INSTAR IN-6014 HD Product Features',
      model: '6014',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6014HD_Features.jpg',
      headline: 'INSTAR Produkte IN-6014 HD IP Innenkameras Online Handbuch',
      breadcrumbs: '<li><a href="/Innenkameras/">Innenkameras</a></li><li><a href="/Innenkameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Innenkameras/IN-6014_HD/Handbuch/">Handbuch</a></li><li><a href="/Innenkameras/IN-6014_HD/Produkt_Features/">Produkt Features</a></li>',
      canonical: '/Indoor_Cameras/IN-6014_HD/Product_Features/',
      description: 'INSTAR IN-6014 HD IP Überwachungskamera - Übersicht über alle Kenndaten und Funktionen Ihrer IP Sicherheitskamera',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsGerRouter.route('/IN-6014_HD/Point2Point')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6014_Point2Point', {
      title: 'INSTAR IN-6014 HD Point 2 Point',
      model: '6014',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6014HD_Quick_Installation.jpg',
      headline: 'INSTAR Produkte IN-6014 HD IP Innenkameras Online Handbuch',
      breadcrumbs: '<li><a href="/Innenkameras/">Innenkameras</a></li><li><a href="/Innenkameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Innenkameras/IN-6014_HD/Handbuch/">Handbuch</a></li><li><a href="/Innenkameras/IN-6014_HD/Point2Point/">Point2Point</a></li>',
      canonical: '/Indoor_Cameras/IN-6014_HD/Point2Point/',
      description: 'INSTAR IN-6014 HD IP Überwachungskamera - Greifen Sie über das Internet auf Ihre Kamera zu, mit Hilfe unserer kostenlosen P2P UID - ganz ohne Portweiterleitung, auch über eine LTE Anbindung ohne öffentlicher IPv4 Adresse.',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsGerRouter.route('/IN-6014_HD/Schnell_Installation')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6014_Quick_Installation', {
      title: 'INSTAR IN-6014 HD Schnell Installation',
      model: '6014',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6014HD_Quick_Installation.jpg',
      headline: 'INSTAR Produkte IN-6014 HD IP Innenkameras Online Handbuch',
      breadcrumbs: '<li><a href="/Innenkameras/">Innenkameras</a></li><li><a href="/Innenkameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Innenkameras/IN-6014_HD/Handbuch/">Handbuch</a></li><li><a href="/Innenkameras/IN-6014_HD/Schnell_Installation/">Schnell Installation</a></li>',
      canonical: '/Indoor_Cameras/IN-6014_HD/Quick_Installation/',
      description: 'INSTAR IN-6014 HD IP Überwachungskamera - Alle Informationen die Sie nach dem Auspacken Ihrer Sicherheitskamera benötigen, um Ihre Webcam in Ihr Netzwerk (WLAN) einzubinden, den Fernzugriff über P2P oder DDNS einzurichten, die Kamera über die Weboberfläche zu konfigurieren und in unsere kostenlose Handy App für Android, iPhone, iPad, Windows Phone / Metro und Blackberry einzubinden.',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsGerRouter.route('/IN-6014_HD/Objektivjustage')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6014_Lense_Adjustment', {
      title: 'INSTAR IN-6014 HD Lense Adjustment',
      model: '6014',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6014HD_Lense_Adjust.jpg',
      headline: 'INSTAR Produkte IN-6014 HD IP Innenkameras Online Handbuch',
      breadcrumbs: '<li><a href="/Innenkameras/">Innenkameras</a></li><li><a href="/Innenkameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Innenkameras/IN-6014_HD/Handbuch/">Handbuch</a></li><li><a href="/Innenkameras/IN-6014_HD/Objektivjustage/">Objektivjustage</a></li>',
      canonical: '/Indoor_Cameras/IN-6014_HD/Lense_Adjustment/',
      description: 'INSTAR IN-6014 HD IP Überwachungskamera - wenn sich das Objektiv Ihrer Kamera verstellt hat, können Sie die Tiefenschärfe einfach durch Drehen an der Optik an Ihre Bedürfnisse anpassen.',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsGerRouter.route('/IN-6014_HD/Technische_Spezifikationen')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6014_Tech_Specs', {
      title: 'INSTAR IN-6014 HD Technical Specifications',
      model: '6014',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6014HD_Technical_Specifications.jpg',
      headline: 'INSTAR Produkte IN-6014 HD IP Innenkameras Online Handbuch',
      breadcrumbs: '<li><a href="/Products">Products</a></li><li><a href="/Innenkameras/">Innenkameras</a></li><li><a href="/Innenkameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Innenkameras/IN-6014_HD/Technische_Spezifikationen/">Technische Spezifikationen</a></li>',
      canonical: '/Indoor_Cameras/IN-6014_HD/Technical_Specifications/',
      description: 'INSTAR IN-6014 HD IP Überwachungskamera - Eine Übersicht aller Leistungsdaten Ihrer Sicherheitskamera.',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});


/* ###################################################### IN-6012 HD ###################################################### */


indoorCamsGerRouter.route('/IN-6012_HD/Sicherheit_Hinweise')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'INSTAR IN-6012 HD Sicherheit Hinweise',
          model: '6012',
          series: '720p',
		      type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_IN-6012HD_Safety_Warnings.jpg',
          headline: 'INSTAR Produkte IN-6012 HD IP Innenkameras Online Handbuch',
          breadcrumbs: '<li><a href="/Innenkameras">Innenkameras</a></li><li><a href="/Innenkameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Innenkameras/IN-6012_HD/Handbuch/">Handbuch</a></li><li><a href="/Innenkameras/IN-6012_HD/Sicherheit_Hinweise/">Sicherheit Hinweise</a></li>',
          canonical: '/Indoor_Cameras/IN-6012_HD/Safety_Warnings/',
          description: 'INSTAR IN-6012 HD IP Überwachungskamera - Sicherheitshinweise für die Installation und Benutzung Ihrer Sicherheitskamera.',
    		  pacc: '',
    		  qiacc: '',
    		  mdacc: '',
    		  iaacc: '',
    		  auacc: '',
    		  fhdacc: 'hidden',
    		  hdacc: '',
        });
    });

indoorCamsGerRouter.route('/IN-6012_HD/Garantie')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'INSTAR IN-6012 HD Garantie & Entsorgung',
          model: '6012',
          series: '720p',
		      type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_IN-6012HD_Warranty.jpg',
          headline: 'INSTAR Produkte IN-6012 HD IP Innenkameras Online Handbuch',
          breadcrumbs: '<li><a href="/Innenkameras">Innenkameras</a></li><li><a href="/Innenkameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Innenkameras/IN-6012_HD/Handbuch/">Handbuch</a></li><li><a href="/Innenkameras/IN-6012_HD/Garantie/">Garantie</a></li>',
          canonical: '/Indoor_Cameras/IN-6012_HD/Warranty/',
          description: 'INSTAR IN-6012 HD IP Überwachungskamera - Garantieabwicklung, technischer Support, Service Center und Kontaktinformationen.',
    		  pacc: '',
    		  qiacc: '',
    		  mdacc: '',
    		  iaacc: '',
    		  auacc: '',
    		  fhdacc: 'hidden',
    		  hdacc: '',
        });
    });

indoorCamsGerRouter.route('/IN-6012_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'INSTAR IN-6012 HD Video Streaming',
          model: '6012',
          series: '720p',
		      type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_IN-6012HD_Video_Streaming.jpg',
          headline: 'INSTAR Produkte IN-6012 HD IP Innenkameras Online Handbuch',
          breadcrumbs: '<li><a href="/Innenkameras">Innenkameras</a></li><li><a href="/Innenkameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Innenkameras/IN-6012_HD/Handbuch/">Handbuch</a></li><li><a href="/Innenkameras/IN-6012_HD/Video_Streaming/">Video Streaming</a></li>',
          canonical: '/Indoor_Cameras/IN-6012_HD/Video_Streaming/',
          description: 'INSTAR IN-6012 HD IP Überwachungskamera - Nutzen Sie den RTSP Stream Ihrer Sicherheitskamera in Drittanbieter Software, wie dem VLC Player.',
    		  pacc: '',
    		  qiacc: '',
    		  mdacc: '',
    		  iaacc: '',
    		  auacc: '',
    		  fhdacc: 'hidden',
    		  hdacc: '',
        });
    });

indoorCamsGerRouter.route('/IN-6012_HD/Kamera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'INSTAR IN-6012 HD Hardware Reset',
          model: '6012',
          series: '720p',
		      type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_IN-6012HD_Reset.jpg',
          headline: 'INSTAR Produkte IN-6012 HD IP Innenkameras Online Handbuch',
          breadcrumbs: '<li><a href="/Innenkameras">Innenkameras</a></li><li><a href="/Innenkameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Innenkameras/IN-6012_HD/Handbuch/">Handbuch</a></li><li><a href="/Innenkameras/IN-6012_HD/Kamera_Reset/">Kamera Reset</a></li>',
          canonical: '/Indoor_Cameras/IN-6012_HD/Camera_Reset/',
          description: 'INSTAR IN-6012 HD IP Überwachungskamera - Stellen Sie die Werkseinstellungen wieder her, wenn Sie den Benutzernamen oder Kennwort vergessen haben.',
    		  pacc: '',
    		  qiacc: '',
    		  mdacc: '',
    		  iaacc: '',
    		  auacc: '',
    		  fhdacc: 'hidden',
    		  hdacc: '',
        });
    });


indoorCamsGerRouter.route('/IN-6012_HD')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6012_Overview', {
      title: 'INSTAR IN-6012 HD Zusammenfassung',
      model: '6012',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6012HD.jpg',
      headline: 'INSTAR Produkte IN-6012 HD IP Innenkameras Online Handbuch',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products">Products</a></li><li><a href="/Innenkameras/">Innenkameras</a></li><li><a href="/Innenkameras/IN-6012_HD/">IN-6012 HD</a></li>',
      canonical: '/Indoor_Cameras/IN-6012_HD/',
      description: 'Die IN-6012 HD (720p, 1 Megapixel Auflösung) IP Überwachungskamera, IP Webcam, PTZ Indoor Webcam bietet Infrarot Nachtsicht, WLAN und LAN Anbindung, drahtlose Videoübertragung, einen Netzwerkstream über RTSP und eine kostenlose P2P und DDNS Adresse für den Fernzugriff. Überwachen Sie Ihr Haus, Auto, Haustier, Baby und vieles mehr mit einer der besten Sicherheitskamera auf dem Markt.',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsGerRouter.route('/IN-6012_HD/Handbuch')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6012_Usermanual', {
      title: 'INSTAR IN-6012 HD Handbuch',
      model: '6012',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6012HD.jpg',
      headline: 'INSTAR Produkte IN-6012 HD IP Innenkameras Online Handbuch',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Innenkameras/">Innenkameras</a></li><li><a href="/Innenkameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Innenkameras/IN-6012_HD/Handbuch/">Handbuch</a></li>',
      canonical: '/Indoor_Cameras/IN-6012_HD/Usermanual/',
      description: 'INSTAR IN-6012 HD IP Überwachungskamera - Online Handbuch für die Installation Ihrer INSTAR IP Sicherheitskamera. Netzwerk und WLAN Einbindung, DDNS oder P2P Fernzugriff über das Internet, Alarmbenachrichtigung per Email und Push Dienst und Alarm Videoaufnahmen.',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsGerRouter.route('/IN-6012_HD/Produkt_Features')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6012_Product_Features', {
      title: 'INSTAR IN-6012 HD Product Features',
      model: '6012',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6012HD_Features.jpg',
      headline: 'INSTAR Produkte IN-6012 HD IP Innenkameras Online Handbuch',
      breadcrumbs: '<li><a href="/Innenkameras/">Innenkameras</a></li><li><a href="/Innenkameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Innenkameras/IN-6012_HD/Handbuch/">Handbuch</a></li><li><a href="/Innenkameras/IN-6012_HD/Produkt_Features/">Produkt Features</a></li>',
      canonical: '/Indoor_Cameras/IN-6012_HD/Product_Features/',
      description: 'INSTAR IN-6012 HD IP Überwachungskamera - Übersicht über alle Kenndaten und Funktionen Ihrer IP Sicherheitskamera',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsGerRouter.route('/IN-6012_HD/Point2Point')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6012_Point2Point', {
      title: 'INSTAR IN-6012 HD Point 2 Point',
      model: '6012',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6012HD_Quick_Installation.jpg',
      headline: 'INSTAR Produkte IN-6012 HD IP Innenkameras Online Handbuch',
      breadcrumbs: '<li><a href="/Innenkameras/">Innenkameras</a></li><li><a href="/Innenkameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Innenkameras/IN-6012_HD/Handbuch/">Handbuch</a></li><li><a href="/Innenkameras/IN-6012_HD/Point2Point/">Point2Point</a></li>',
      canonical: '/Indoor_Cameras/IN-6012_HD/Point2Point/',
      description: 'INSTAR IN-6012 HD IP Überwachungskamera - Greifen Sie über das Internet auf Ihre Kamera zu, mit Hilfe unserer kostenlosen P2P UID - ganz ohne Portweiterleitung, auch über eine LTE Anbindung ohne öffentlicher IPv4 Adresse.',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsGerRouter.route('/IN-6012_HD/Schnell_Installation')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6012_Quick_Installation', {
      title: 'INSTAR IN-6012 HD Schnell Installation',
      model: '6012',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6012HD_Quick_Installation.jpg',
      headline: 'INSTAR Produkte IN-6012 HD IP Innenkameras Online Handbuch',
      breadcrumbs: '<li><a href="/Innenkameras/">Innenkameras</a></li><li><a href="/Innenkameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Innenkameras/IN-6012_HD/Handbuch/">Handbuch</a></li><li><a href="/Innenkameras/IN-6012_HD/Schnell_Installation/">Schnell Installation</a></li>',
      canonical: '/Indoor_Cameras/IN-6012_HD/Quick_Installation/',
      description: 'INSTAR IN-6012 HD IP Überwachungskamera - Alle Informationen die Sie nach dem Auspacken Ihrer Sicherheitskamera benötigen, um Ihre Webcam in Ihr Netzwerk (WLAN) einzubinden, den Fernzugriff über P2P oder DDNS einzurichten, die Kamera über die Weboberfläche zu konfigurieren und in unsere kostenlose Handy App für Android, iPhone, iPad, Windows Phone / Metro und Blackberry einzubinden.',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsGerRouter.route('/IN-6012_HD/Objektivjustage')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6012_Lense_Adjustment', {
      title: 'INSTAR IN-6012 HD Lense Adjustment',
      model: '6012',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6012HD_Lense_Adjust.jpg',
      headline: 'INSTAR Produkte IN-6012 HD IP Innenkameras Online Handbuch',
      breadcrumbs: '<li><a href="/Innenkameras/">Innenkameras</a></li><li><a href="/Innenkameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Innenkameras/IN-6012_HD/Handbuch/">Handbuch</a></li><li><a href="/Innenkameras/IN-6012_HD/Schnell_Installation/">Schnell Installation</a></li>',
      canonical: '/Indoor_Cameras/IN-6012_HD/Lense_Adjustment/',
      description: 'INSTAR IN-6012 HD IP Überwachungskamera - wenn sich das Objektiv Ihrer Kamera verstellt hat, können Sie die Tiefenschärfe einfach durch Drehen an der Optik an Ihre Bedürfnisse anpassen.',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsGerRouter.route('/IN-6012_HD/Technische_Spezifikationen')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6012_Tech_Specs', {
      title: 'INSTAR IN-6012 HD Technical Specifications',
      model: '6012',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6012HD_Technical_Specifications.jpg',
      headline: 'INSTAR Produkte IN-6012 HD IP Innenkameras Online Handbuch',
      breadcrumbs: '<li><a href="/Products">Products</a></li><li><a href="/Innenkameras/">Innenkameras</a></li><li><a href="/Innenkameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Innenkameras/IN-6012_HD/Technische_Spezifikationen/">Technische Spezifikationen</a></li>',
      canonical: '/Indoor_Cameras/IN-6012_HD/Technical_Specifications/',
      description: 'INSTAR IN-6012 HD IP Überwachungskamera - Eine Übersicht aller Leistungsdaten Ihrer Sicherheitskamera.',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});


/* ###################################################### IN-6001 HD ###################################################### */


indoorCamsGerRouter.route('/IN-6001_HD/Sicherheit_Hinweise')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'INSTAR IN-6001 HD Sicherheit Hinweise',
          model: '6001',
          series: '720p',
		      type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_IN-6001HD_Safety.jpg',
          headline: 'INSTAR Produkte IN-6001 HD IP Innenkameras Online Handbuch',
          breadcrumbs: '<li><a href="/Innenkameras">Innenkameras</a></li><li><a href="/Innenkameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Innenkameras/IN-6001_HD/Handbuch/">Handbuch</a></li><li><a href="/Innenkameras/IN-6001_HD/Sicherheit_Hinweise/">Sicherheit Hinweise</a></li>',
          canonical: '/Indoor_Cameras/IN-6001_HD/Safety_Warnings/',
          description: 'INSTAR IN-6001 HD IP Überwachungskamera - Sicherheitshinweise für die Installation und Benutzung Ihrer Sicherheitskamera.',
    		  pacc: '',
    		  qiacc: '',
    		  mdacc: '',
    		  iaacc: '',
    		  auacc: '',
    		  fhdacc: 'hidden',
    		  hdacc: '',
        });
    });

indoorCamsGerRouter.route('/IN-6001_HD/Garantie')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'INSTAR IN-6001 HD Garantie & Entsorgung',
          model: '6001',
          series: '720p',
		      type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_IN-6001HD_Warranty.jpg',
          headline: 'INSTAR Produkte IN-6001 HD IP Innenkameras Online Handbuch',
          breadcrumbs: '<li><a href="/Innenkameras">Innenkameras</a></li><li><a href="/Innenkameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Innenkameras/IN-6001_HD/Handbuch/">Handbuch</a></li><li><a href="/Innenkameras/IN-6001_HD/Garantie/">Garantie</a></li>',
          canonical: '/Indoor_Cameras/IN-6001_HD/Warranty/',
          description: 'INSTAR IN-6001 HD IP Überwachungskamera - Garantieabwicklung, technischer Support, Service Center und Kontaktinformationen.',
    		  pacc: '',
    		  qiacc: '',
    		  mdacc: '',
    		  iaacc: '',
    		  auacc: '',
    		  fhdacc: 'hidden',
    		  hdacc: '',
        });
    });

indoorCamsGerRouter.route('/IN-6001_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'INSTAR IN-6001 HD Video Streaming',
          model: '6001',
          series: '720p',
		      type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_IN-6001HD_Video_Streaming.jpg',
          headline: 'INSTAR Produkte IN-6001 HD IP Innenkameras Online Handbuch',
          breadcrumbs: '<li><a href="/Innenkameras">Innenkameras</a></li><li><a href="/Innenkameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Innenkameras/IN-6001_HD/Handbuch/">Handbuch</a></li><li><a href="/Innenkameras/IN-6001_HD/Video_Streaming/">Video Streaming</a></li>',
          canonical: '/Indoor_Cameras/IN-6001_HD/Video_Streaming/',
          description: 'INSTAR IN-6001 HD IP Überwachungskamera - Nutzen Sie den RTSP Stream Ihrer Sicherheitskamera in Drittanbieter Software, wie dem VLC Player.',
    		  pacc: '',
    		  qiacc: '',
    		  mdacc: '',
    		  iaacc: '',
    		  auacc: '',
    		  fhdacc: 'hidden',
    		  hdacc: '',
        });
    });

indoorCamsGerRouter.route('/IN-6001_HD/Kamera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'INSTAR IN-6001 HD Hardware Reset',
          model: '6001',
          series: '720p',
		      type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_IN-6001HD_Reset.jpg',
          headline: 'INSTAR Produkte IN-6001 HD IP Innenkameras Online Handbuch',
          breadcrumbs: '<li><a href="/Innenkameras">Innenkameras</a></li><li><a href="/Innenkameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Innenkameras/IN-6001_HD/Handbuch/">Handbuch</a></li><li><a href="/Innenkameras/IN-6001_HD/Kamera_Reset/">Kamera Reset</a></li>',
          canonical: '/Indoor_Cameras/IN-6001_HD/Camera_Reset/',
          description: 'INSTAR IN-6001 HD IP Überwachungskamera - Stellen Sie die Werkseinstellungen wieder her, wenn Sie den Benutzernamen oder Kennwort vergessen haben.',
    		  pacc: '',
    		  qiacc: '',
    		  mdacc: '',
    		  iaacc: '',
    		  auacc: '',
    		  fhdacc: 'hidden',
    		  hdacc: '',
        });
    });

indoorCamsGerRouter.route('/IN-6001_HD')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6001_Overview', {
      title: 'INSTAR IN-6001 HD Zusammenfassung',
      model: '6001',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6001HD.jpg',
      headline: 'INSTAR Produkte IN-6001 HD IP Innenkameras Online Handbuch',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products">Products</a></li><li><a href="/Innenkameras/">Innenkameras</a></li><li><a href="/Innenkameras/IN-6001_HD/">IN-6001 HD</a></li>',
      canonical: '/Indoor_Cameras/IN-6001_HD/',
      description: 'Die IN-6001 Full HD (720p, 1 Megapixel Auflösung) IP Überwachungskamera, IP Webcam, Indoor Webcam bietet Infrarot Nachtsicht, WLAN und LAN Anbindung, drahtlose Videoübertragung, einen Netzwerkstream über RTSP und eine kostenlose P2P und DDNS Adresse für den Fernzugriff. Überwachen Sie Ihr Haus, Auto, Haustier, Baby und vieles mehr mit einer der besten Sicherheitskamera auf dem Markt.',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsGerRouter.route('/IN-6001_HD/Handbuch')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6001_Usermanual', {
      title: 'INSTAR IN-6001 HD Handbuch',
      model: '6001',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6001HD.jpg',
      headline: 'INSTAR Produkte IN-6001 HD IP Innenkameras Online Handbuch',
      breadcrumbs: '<li><a href="/Products/">Products</a></li><li><a href="/Innenkameras/">Innenkameras</a></li><li><a href="/Innenkameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Innenkameras/IN-6001_HD/Handbuch/">Handbuch</a></li>',
      canonical: '/Indoor_Cameras/IN-6001_HD/Usermanual/',
      description: 'INSTAR IN-6001 HD IP Überwachungskamera - Online Handbuch für die Installation Ihrer INSTAR IP Sicherheitskamera. Netzwerk und WLAN Einbindung, DDNS oder P2P Fernzugriff über das Internet, Alarmbenachrichtigung per Email und Push Dienst und Alarm Videoaufnahmen.',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsGerRouter.route('/IN-6001_HD/Produkt_Features')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6001_Product_Features', {
      title: 'INSTAR IN-6001 HD Product Features',
      model: '6001',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6001HD_Features.jpg',
      headline: 'INSTAR Produkte IN-6001 HD IP Innenkameras Online Handbuch',
      breadcrumbs: '<li><a href="/Innenkameras/">Innenkameras</a></li><li><a href="/Innenkameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Innenkameras/IN-6001_HD/Handbuch/">Handbuch</a></li><li><a href="/Innenkameras/IN-6001_HD/Produkt_Features/">Produkt Features</a></li>',
      canonical: '/Indoor_Cameras/IN-6001_HD/Product_Features/',
      description: 'INSTAR IN-6001 HD IP Überwachungskamera - Übersicht über alle Kenndaten und Funktionen Ihrer IP Sicherheitskamera',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsGerRouter.route('/IN-6001_HD/Point2Point')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6001_Point2Point', {
      title: 'INSTAR IN-6001 HD Point 2 Point',
      model: '6001',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6001HD_Quick_Installation.jpg',
      headline: 'INSTAR Produkte IN-6001 HD IP Innenkameras Online Handbuch',
      breadcrumbs: '<li><a href="/Innenkameras/">Innenkameras</a></li><li><a href="/Innenkameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Innenkameras/IN-6001_HD/Handbuch/">Handbuch</a></li><li><a href="/Innenkameras/IN-6001_HD/Point2Point/">Point2Point</a></li>',
      canonical: '/Indoor_Cameras/IN-6001_HD/Point2Point/',
      description: 'INSTAR IN-6001 HD IP Überwachungskamera - Greifen Sie über das Internet auf Ihre Kamera zu, mit Hilfe unserer kostenlosen P2P UID - ganz ohne Portweiterleitung, auch über eine LTE Anbindung ohne öffentlicher IPv4 Adresse.',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsGerRouter.route('/IN-6001_HD/Schnell_Installation')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6001_Quick_Installation', {
      title: 'INSTAR IN-6001 HD Schnell Installation',
      model: '6001',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6001HD_Quick_Installation.jpg',
      headline: 'INSTAR Produkte IN-6001 HD IP Innenkameras Online Handbuch',
      breadcrumbs: '<li><a href="/Innenkameras/">Innenkameras</a></li><li><a href="/Innenkameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Innenkameras/IN-6001_HD/Handbuch/">Handbuch</a></li><li><a href="/Innenkameras/IN-6001_HD/Schnell_Installation/">Schnell Installation</a></li>',
      canonical: '/Indoor_Cameras/IN-6001_HD/Quick_Installation/',
      description: 'INSTAR IN-6001 HD IP Überwachungskamera - Alle Informationen die Sie nach dem Auspacken Ihrer Sicherheitskamera benötigen, um Ihre Webcam in Ihr Netzwerk (WLAN) einzubinden, den Fernzugriff über P2P oder DDNS einzurichten, die Kamera über die Weboberfläche zu konfigurieren und in unsere kostenlose Handy App für Android, iPhone, iPad, Windows Phone / Metro und Blackberry einzubinden.',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsGerRouter.route('/IN-6001_HD/Objektivjustage')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6001_Lense_Adjustment', {
      title: 'INSTAR IN-6001 HD Lense Adjustment',
      model: '6001',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6001HD_Lense_Adjust.jpg',
      headline: 'INSTAR Produkte IN-6001 HD IP Innenkameras Online Handbuch',
      breadcrumbs: '<li><a href="/Innenkameras/">Innenkameras</a></li><li><a href="/Innenkameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Innenkameras/IN-6001_HD/Handbuch/">Handbuch</a></li><li><a href="/Innenkameras/IN-6001_HD/Schnell_Installation/">Schnell Installation</a></li>',
      canonical: '/Indoor_Cameras/IN-6001_HD/Lense_Adjustment/',
      description: 'INSTAR IN-6001 HD IP Überwachungskamera - wenn sich das Objektiv Ihrer Kamera verstellt hat, können Sie die Tiefenschärfe einfach durch Drehen an der Optik an Ihre Bedürfnisse anpassen.',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsGerRouter.route('/IN-6001_HD/Technische_Spezifikationen')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6001_Tech_Specs', {
      title: 'INSTAR IN-6001 HD Technical Specifications',
      model: '6001',
      series: '720p',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-6001HD_Technical_Specifications.jpg',
      headline: 'INSTAR Produkte IN-6001 HD IP Innenkameras Online Handbuch',
      breadcrumbs: '<li><a href="/Products">Products</a></li><li><a href="/Innenkameras/">Innenkameras</a></li><li><a href="/Innenkameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Innenkameras/IN-6001_HD/Technische_Spezifikationen/">Technische Spezifikationen</a></li>',
      canonical: '/Indoor_Cameras/IN-6001_HD/Technical_Specifications/',
      description: 'INSTAR IN-6001 HD IP Überwachungskamera - Eine Übersicht aller Leistungsdaten Ihrer Sicherheitskamera.',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});


/* ###################################################### VGA ###################################################### */


indoorCamsGerRouter.route('/IN-3011')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-3011_Overview', {
      title: 'INSTAR IN-3011 Zusammenfassung',
      model: '3011',
      series: 'VGA',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-3011.jpg',
      headline: 'INSTAR Produkte IN-3011 VGA IP Innenkameras Online Handbuch',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products">Products</a></li><li class="breadcrumb-item"><a href="/Innenkameras/">Innenkameras</a></li><li class="breadcrumb-item active"><a href="/Innenkameras/IN-3011/">IN-3011</a></li>',
      canonical: '/Indoor_Cameras/IN-3011/',
      description: 'Die IN-3011 VGA (640x480 Auflösung) IP Überwachungskamera, IP Webcam, PTZ Indoor Webcam bietet Infrarot Nachtsicht, WLAN und LAN Anbindung, drahtlose Videoübertragung, einen Netzwerkstream über RTSP und eine kostenlose DDNS Adresse für den Fernzugriff. Überwachen Sie Ihr Haus, Auto, Haustier, Baby und vieles mehr mit einer der besten Sicherheitskamera auf dem Markt.',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

indoorCamsGerRouter.route('/IN-3011/Technische_Spezifikationen')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-3011_Tech_Specs', {
      title: 'INSTAR IN-3011 Technical Specifications',
      model: '3011',
      series: 'VGA',
      type: 'Indoor',
      ampimg: '/images/Search/P_SearchThumb_IN-3011_Technical_Specifications.jpg',
      headline: 'INSTAR Produkte IN-3011 VGA IP Innenkameras Online Handbuch',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products">Products</a></li><li class="breadcrumb-item"><a href="/Innenkameras/">Innenkameras</a></li><li class="breadcrumb-item"><a href="/Innenkameras/IN-3011/">IN-3011</a></li><li class="breadcrumb-item active"><a href="/Innenkameras/IN-3011/Technische_Spezifikationen/">Technische Spezifikationen</a></li>',
      canonical: '/Indoor_Cameras/IN-3011/Technical_Specifications/',
      description: 'INSTAR IN-3011 VGA IP Überwachungskamera - Eine Übersicht aller Leistungsdaten Ihrer Sicherheitskamera.',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});


module.exports = indoorCamsGerRouter;
