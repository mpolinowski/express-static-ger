var express = require('express');
var internetAccessGerRouter = express.Router();

/* GET Internet_Access page. */
internetAccessGerRouter.get('/', function(req, res) {
    res.render('./Internet_Access/Internet_Access', {
        title: 'Fernzugriff auf Ihre INSTAR IP Kamera',
        ampimg: '/images/Search/IA_SearchThumb_AccessOverTheInternet.jpg',
        headline: 'Nutzen Sie die P2P UID oder DDNS Adresse um über das Internet auf Ihre Kamera zuzugreifen.',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li>',
        canonical: '/Internet_Access/',
        description: 'Ihre INSTAR IP Kamera bietet Ihnen zwei Wege um diese von außerhalb Ihres lokalen Netzwerkes zu erreichen - die Point2Point Verbindung oder den Zugriff über die DDNS Internet Addresse. Lernen Sie in diesem Kapitel, wie Sie Ihre Kamera konfigurieren müssen, um den Internetzugriff einzurichten.',
    		pacc: '',
    		ptab: 'hidden',
    		qiacc: '',
    		qitab: 'hidden',
    		mdacc: '',
    		mdtab: 'hidden',
    		iaacc: 'expanded',
    		iatab: '',
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

internetAccessGerRouter.get('/Point_to_Point/', function(req, res) {
    res.render('./Internet_Access/Point_to_Point', {
        title: 'Kostenloser P2P Dienst für den Fernzugriff auf Ihre Kamera',
        ampimg: '/images/Search/IA_SearchThumb_P2P.jpg',
        headline: 'Der einfach Weg mit unserer Smartphone App InstarVision von unterwegs auf Ihre Kamera zuzugreifen.',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li><li><a href="/Fernzugriff/Point_to_Point/">P2P Dienst</a></li>',
        canonical: '/Internet_Access/Point_to_Point/',
        description: 'Wenn Sie mit dem Smartphone auf Ihre Kamera zugreifen möchten, ist Point2Point (P2P) die unkomplizierteste Verbindungsart. Dieser Zugriff funktioniert auch dann, wenn Sie keine öffentliche IPv4 Adresse an Ihrem Internet Anschluss haben - z.B. bei Kabelanschlüsse, LTE und DS-Lite Verträge.',
    		pacc: '',
    		ptab: 'hidden',
    		qiacc: '',
    		qitab: 'hidden',
    		mdacc: '',
    		mdtab: 'hidden',
    		iaacc: 'expanded',
    		iatab: '',
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

internetAccessGerRouter.get('/Der_DDNS_Dienst/', function(req, res) {
    res.render('./Internet_Access/The_DDNS_Service', {
        title: 'Kostenloser DDNS Dienst für den Fernzugriff auf Ihre Kamera',
        ampimg: '/images/Search/IA_SearchThumb_DDNSService.jpg',
        headline: 'Der etwas umständlichere Weg von unterwegs auf Ihre Sicherheitskamera zuzugreifen - der Ihnen aber einige Vorteile bringt.',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li><li><a href="/Fernzugriff/Der_DDNS_Dienst/">DDNS Service</a></li>',
        canonical: '/Internet_Access/The_DDNS_Service/',
        description: 'Der DDNS Fernzugriff benötigt eine öffentliche IPv4 Adresse an Ihrem Internet Anschluss und eine sog. Portweiterleitung in Ihrem Router. Im Gegensatz zum P2P Zugriff erhalten Sie hier dafür einen Vollzugriff auf die Weboberfläche Ihrer Kamera - Sie können von überall mit einem Webbrowser auf die Kamera Zugreifen und Einstellungen vornehmen. Darüber hinaus erfolgt der Verbindungsaufbau mit unserer Handy App InstarVision in der Regel spürbar schneller über DDNS.',
    		pacc: '',
    		ptab: 'hidden',
    		qiacc: '',
    		qitab: 'hidden',
    		mdacc: '',
    		mdtab: 'hidden',
    		iaacc: 'expanded',
    		iatab: '',
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

internetAccessGerRouter.get('/Der_DDNS_Dienst/Testen_der_DDNS_Adresse/', function(req, res) {
    res.render('./Internet_Access/Test_DDNS_Address', {
        title: 'INSTAR DDNS Test',
        ampimg: '/images/Search/IA_SearchThumb_DDNSService.jpg',
        headline: 'Überprüfen Sie ob Ihre kostenlose INSTAR DDNS Adresse aktiv ist',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Fernzugriff</a></li><li><a href="/Internet_Access/The_DDNS_Service/">DDNS Service</a></li><li><a href="/Internet_Access/The_DDNS_Service/Test_DDNS_Address/">DDNS Test</a></li>',
        canonical: '/Internet_Access/Der_DDNS_Dienst/Test_DDNS_Address/',
        description: 'Damit der DDNS Zugriff funktioniert, muss Ihre INSTAR IP Kamera regelmäßig die WAN IP Adresse Ihres Internetanschlusses hinter Ihrer persönlichen DDNS Adresse hinterlegen. Lernen Sie hier, wie Sie testen können, ob dies bereits geschehen ist.',
    		pacc: '',
    		ptab: 'hidden',
    		qiacc: '',
    		qitab: 'hidden',
    		mdacc: '',
    		mdtab: 'hidden',
    		iaacc: 'expanded',
    		iatab: '',
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

internetAccessGerRouter.get('/Port_Weiterleitung/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding', {
        title: 'Port Weiterleitung in Ihrem Router',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding.jpg',
        headline: 'Port Weiterleitung für den DDNS Fernugriff auf Ihre INSTAR Überwachungskamera',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/">Port Weiterleitung</a></li>',
        canonical: '/Internet_Access/Port_Forwarding/',
        description: 'Manchmal Virtueller Server, Portweiterleitung, Portöffnung oder Port Forwarding gennant - dies ist die Router-Konfiguration, die Sie vornehmen müssen, um Ihre INSTAR Webcam über Ihre DDNS Adresse über das Internet erreichen zu können.',
    		pacc: '',
    		ptab: 'hidden',
    		qiacc: '',
    		qitab: 'hidden',
    		mdacc: '',
    		mdtab: 'hidden',
    		iaacc: 'expanded',
    		iatab: '',
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

internetAccessGerRouter.get('/Port_Weiterleitung/Router_Zugriff/', function(req, res) {
    res.render('./Internet_Access/Access_Router', {
        title: 'Router Zugriff für den Fernzugriff',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding.jpg',
        headline: 'Erreichen der Weboberfläche Ihres Routers Konfiguration der Portweiterleitung für den Fernzugriff auf Ihre INSTAR IP Kamera.',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/">Port Weiterleitung</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/Router_Zugriff">Router Zugriff</a></li>',
        canonical: '/Internet_Access/Port_Forwarding/Router_Access/',
        description: 'Sie wissen nicht wie Sie auf Ihren Router zugreifen können, um diesen zu konfigurieren? Lernen Sie hier wie Sie die IP Adresse des Router herrausfinden und die Weboberfläche in Ihrem Webbrowser öffnen.',
    		pacc: '',
    		ptab: 'hidden',
    		qiacc: '',
    		qitab: 'hidden',
    		mdacc: '',
    		mdtab: 'hidden',
    		iaacc: 'expanded',
    		iatab: '',
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

internetAccessGerRouter.get('/Port_Weiterleitung/AVM_Fritzbox/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_AVM_Fritzbox', {
        title: 'Port Weiterleitung AVM Fritzbox',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding_Fritzbox.jpg',
        headline: 'Port Weiterleitung AVM Fritzbox für den Fernzugriff auf Ihre INSTAR Webcam',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/">Port Weiterleitung</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/AVM_Fritzbox/">AVM Fritzbox</a></li>',
        canonical: '/Internet_Access/Port_Forwarding/AVM_Fritzbox/',
        description: 'Ihr Router sperrt alle Zugriffe aus dem Internet auf Ihr lokales Netzwerk ab. Um den Fernzugriff auf Ihre Überwachungskamera aus dem Internet zu ermöglichen, müssen Sie einen Port auf diese durch die NAT Firewall durchleiten. Lesen Sie hier, wie Sie diese Weiterleitung bei der AVM Fritzbox durchführen.',
    		pacc: '',
    		ptab: 'hidden',
    		qiacc: '',
    		qitab: 'hidden',
    		mdacc: '',
    		mdtab: 'hidden',
    		iaacc: 'expanded',
    		iatab: '',
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

internetAccessGerRouter.get('/Port_Weiterleitung/Telekom_Speedport/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_Telekom_Speedport', {
        title: 'Port Weiterleitung Telekom Speedport',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding_Speedport.jpg',
        headline: 'Port Weiterleitung Telekom Speedport für den Fernzugriff auf Ihre INSTAR Webcam',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/">Port Weiterleitung</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/Telekom_Speedport/">Telekom Speedport</a></li>',
        canonical: '/Internet_Access/Port_Forwarding/Telekom_Speedport/',
        description: 'Ihr Router sperrt alle Zugriffe aus dem Internet auf Ihr lokales Netzwerk ab. Um den Fernzugriff auf Ihre Überwachungskamera aus dem Internet zu ermöglichen, müssen Sie einen Port auf diese durch die NAT Firewall durchleiten. Lesen Sie hier, wie Sie diese Weiterleitung beim Telekom Speedport durchführen.',
    		pacc: '',
    		ptab: 'hidden',
    		qiacc: '',
    		qitab: 'hidden',
    		mdacc: '',
    		mdtab: 'hidden',
    		iaacc: 'expanded',
    		iatab: '',
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

internetAccessGerRouter.get('/Port_Weiterleitung/D-Link/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_D-Link', {
        title: 'Port Weiterleitung D-Link',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding_DLink.jpg',
        headline: 'Port Weiterleitung D-Link für den Fernzugriff auf Ihre INSTAR Webcam',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/">Port Weiterleitung</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/D-Link/">D-Link</a></li>',
        canonical: '/Internet_Access/Port_Forwarding/D-Link/',
        description: 'Ihr Router sperrt alle Zugriffe aus dem Internet auf Ihr lokales Netzwerk ab. Um den Fernzugriff auf Ihre Überwachungskamera aus dem Internet zu ermöglichen, müssen Sie einen Port auf diese durch die NAT Firewall durchleiten. Lesen Sie hier, wie Sie diese Weiterleitung bei Ihrem D-Link Router durchführen.',
    		pacc: '',
    		ptab: 'hidden',
    		qiacc: '',
    		qitab: 'hidden',
    		mdacc: '',
    		mdtab: 'hidden',
    		iaacc: 'expanded',
    		iatab: '',
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

internetAccessGerRouter.get('/Port_Weiterleitung/TP-Link/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_TP-Link', {
        title: 'Port Weiterleitung TP-Link',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding_TPLink.jpg',
        headline: 'Port Weiterleitung TP-Link für den Fernzugriff auf Ihre INSTAR Webcam',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/">Port Weiterleitung</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/TP-Link/">TP-Link</a></li>',
        canonical: '/Internet_Access/Port_Forwarding/TP-Link/',
        description: 'Ihr Router sperrt alle Zugriffe aus dem Internet auf Ihr lokales Netzwerk ab. Um den Fernzugriff auf Ihre Überwachungskamera aus dem Internet zu ermöglichen, müssen Sie einen Port auf diese durch die NAT Firewall durchleiten. Lesen Sie hier, wie Sie diese Weiterleitung bei Ihrem TP-Link Router durchführen.',
    		pacc: '',
    		ptab: 'hidden',
    		qiacc: '',
    		qitab: 'hidden',
    		mdacc: '',
    		mdtab: 'hidden',
    		iaacc: 'expanded',
    		iatab: '',
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

internetAccessGerRouter.get('/Port_Weiterleitung/Netgear/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_Netgear', {
        title: 'Port Weiterleitung Netgear',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding_Netgear.jpg',
        headline: 'Port Weiterleitung Netgear für den Fernzugriff auf Ihre INSTAR Webcam',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/">Port Weiterleitung</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/Netgear/">Netgear</a></li>',
        canonical: '/Internet_Access/Port_Forwarding/Netgear/',
        description: 'Ihr Router sperrt alle Zugriffe aus dem Internet auf Ihr lokales Netzwerk ab. Um den Fernzugriff auf Ihre Überwachungskamera aus dem Internet zu ermöglichen, müssen Sie einen Port auf diese durch die NAT Firewall durchleiten. Lesen Sie hier, wie Sie diese Weiterleitung bei Ihrem Netgear Router durchführen.',
    		pacc: '',
    		ptab: 'hidden',
    		qiacc: '',
    		qitab: 'hidden',
    		mdacc: '',
    		mdtab: 'hidden',
    		iaacc: 'expanded',
    		iatab: '',
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

internetAccessGerRouter.get('/Port_Weiterleitung/Vodafone_Easybox/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_Vodafone_Easybox', {
        title: 'Port Weiterleitung Vodafone Easybox',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding_Easybox.jpg',
        headline: 'Port Weiterleitung Vodafone Easybox für den Fernzugriff auf Ihre INSTAR Webcam',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/">Port Weiterleitung</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/Vodafone_Easybox/">Vodafone Easybox</a></li>',
        canonical: '/Internet_Access/Port_Forwarding/Vodafone_Easybox/',
        description: 'Ihr Router sperrt alle Zugriffe aus dem Internet auf Ihr lokales Netzwerk ab. Um den Fernzugriff auf Ihre Überwachungskamera aus dem Internet zu ermöglichen, müssen Sie einen Port auf diese durch die NAT Firewall durchleiten. Lesen Sie hier, wie Sie diese Weiterleitung bei der Vodafone Easybox durchführen.',
    		pacc: '',
    		ptab: 'hidden',
    		qiacc: '',
    		qitab: 'hidden',
    		mdacc: '',
    		mdtab: 'hidden',
    		iaacc: 'expanded',
    		iatab: '',
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

internetAccessGerRouter.get('/Port_Weiterleitung/Pirelli/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_Pirelli', {
        title: 'Port Weiterleitung Pirelli',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding_Pirelli.jpg',
        headline: 'Port Weiterleitung Pirelli für den Fernzugriff auf Ihre INSTAR Webcam',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/">Port Weiterleitung</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/Pirelli/">Pirelli</a></li>',
        canonical: '/Internet_Access/Port_Forwarding/Pirelli/',
        description: 'Ihr Router sperrt alle Zugriffe aus dem Internet auf Ihr lokales Netzwerk ab. Um den Fernzugriff auf Ihre Überwachungskamera aus dem Internet zu ermöglichen, müssen Sie einen Port auf diese durch die NAT Firewall durchleiten. Lesen Sie hier, wie Sie diese Weiterleitung bei Ihrem Pirelli Router durchführen.',
    		pacc: '',
    		ptab: 'hidden',
    		qiacc: '',
    		qitab: 'hidden',
    		mdacc: '',
    		mdtab: 'hidden',
    		iaacc: 'expanded',
    		iatab: '',
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

internetAccessGerRouter.get('/Port_Weiterleitung/Asus/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_Asus', {
        title: 'Port Weiterleitung Asus',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding_Asus.jpg',
        headline: 'Port Weiterleitung Pirelli für den Fernzugriff auf Ihre INSTAR Webcam',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/">Port Weiterleitung</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/Asus/">Asus</a></li>',
        canonical: '/Internet_Access/Port_Forwarding/Asus/',
        description: 'Ihr Router sperrt alle Zugriffe aus dem Internet auf Ihr lokales Netzwerk ab. Um den Fernzugriff auf Ihre Überwachungskamera aus dem Internet zu ermöglichen, müssen Sie einen Port auf diese durch die NAT Firewall durchleiten. Lesen Sie hier, wie Sie diese Weiterleitung bei Ihrem Pirelli Router durchführen.',
    		pacc: '',
    		ptab: 'hidden',
    		qiacc: '',
    		qitab: 'hidden',
    		mdacc: '',
    		mdtab: 'hidden',
    		iaacc: 'expanded',
    		iatab: '',
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

internetAccessGerRouter.get('/Port_Weiterleitung/Digitalisierungsbox/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_Digitalisierungsbox', {
        title: 'Port Weiterleitung Digitalisierungsbox',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding_Digitalisierungsbox.jpg',
        headline: 'Port Weiterleitung Digitalisierungsbox für den Fernzugriff auf Ihre INSTAR Webcam',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/">Port Weiterleitung</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/Digitalisierungsbox/">Digitalisierungsbox</a></li>',
        canonical: '/Internet_Access/Port_Forwarding/Digitalisierungsbox/',
        description: 'Ihr Router sperrt alle Zugriffe aus dem Internet auf Ihr lokales Netzwerk ab. Um den Fernzugriff auf Ihre Überwachungskamera aus dem Internet zu ermöglichen, müssen Sie einen Port auf diese durch die NAT Firewall durchleiten. Lesen Sie hier, wie Sie diese Weiterleitung bei Ihrem Pirelli Router durchführen.',
    		pacc: '',
    		ptab: 'hidden',
    		qiacc: '',
    		qitab: 'hidden',
    		mdacc: '',
    		mdtab: 'hidden',
    		iaacc: 'expanded',
    		iatab: '',
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

internetAccessGerRouter.get('/Port_Weiterleitung/Linksys/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_Linksys', {
        title: 'Port Weiterleitung Linksys',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding_Linksys.jpg',
        headline: 'Port Weiterleitung Linksys für den Fernzugriff auf Ihre INSTAR Webcam',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/">Port Weiterleitung</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/Linksys/">Linksys</a></li>',
        canonical: '/Internet_Access/Port_Forwarding/Linksys/',
        description: 'Ihr Router sperrt alle Zugriffe aus dem Internet auf Ihr lokales Netzwerk ab. Um den Fernzugriff auf Ihre Überwachungskamera aus dem Internet zu ermöglichen, müssen Sie einen Port auf diese durch die NAT Firewall durchleiten. Lesen Sie hier, wie Sie diese Weiterleitung bei Ihrem Pirelli Router durchführen.',
    		pacc: '',
    		ptab: 'hidden',
    		qiacc: '',
    		qitab: 'hidden',
    		mdacc: '',
    		mdtab: 'hidden',
    		iaacc: 'expanded',
    		iatab: '',
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

internetAccessGerRouter.get('/Port_Weiterleitung/Unitymedia_Connectbox/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_Unitymedia_Connectbox.ejs', {
        title: 'Port Weiterleitung Unitymedia Connectbox',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding_Linksys.jpg',
        headline: 'Port Weiterleitung Unitymedia Connectbox für den Fernzugriff auf Ihre INSTAR Webcam',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/">Port Weiterleitung</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/Unitymedia_Connectbox/">Unitymedia Connectbox</a></li>',
        canonical: '/Internet_Access/Port_Forwarding/Linksys/',
        description: 'Ihr Router sperrt alle Zugriffe aus dem Internet auf Ihr lokales Netzwerk ab. Um den Fernzugriff auf Ihre Überwachungskamera aus dem Internet zu ermöglichen, müssen Sie einen Port auf diese durch die NAT Firewall durchleiten. Lesen Sie hier, wie Sie diese Weiterleitung bei Ihrem Unitymedia Connectbox Router durchführen.',
    		pacc: '',
    		ptab: 'hidden',
    		qiacc: '',
    		qitab: 'hidden',
    		mdacc: '',
    		mdtab: 'hidden',
    		iaacc: 'expanded',
    		iatab: '',
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

internetAccessGerRouter.get('/Port_Weiterleitung/Zyxel_Speedlink/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_Zyxel_Speedlink.ejs', {
        title: 'Port Weiterleitung Zyxel Speedlink',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding_Linksys.jpg',
        headline: 'Port Weiterleitung Zyxel Speedlink für den Fernzugriff auf Ihre INSTAR Webcam',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/">Port Weiterleitung</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/Zyxel_Speedlink/">Zyxel Speedlink</a></li>',
        canonical: '/Internet_Access/Port_Forwarding/Zyxel_Speedlink/',
        description: 'Ihr Router sperrt alle Zugriffe aus dem Internet auf Ihr lokales Netzwerk ab. Um den Fernzugriff auf Ihre Überwachungskamera aus dem Internet zu ermöglichen, müssen Sie einen Port auf diese durch die NAT Firewall durchleiten. Lesen Sie hier, wie Sie diese Weiterleitung bei Ihrem Zyxel Speedlink Router durchführen.',
    		pacc: '',
    		ptab: 'hidden',
    		qiacc: '',
    		qitab: 'hidden',
    		mdacc: '',
    		mdtab: 'hidden',
    		iaacc: 'expanded',
    		iatab: '',
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

internetAccessGerRouter.get('/Mobil_Zugriff/', function(req, res) {
    res.render('./Internet_Access/Mobile_Access', {
        title: 'Fernzugriff auf Ihre Kamera mit Ihrem Mobil-Gerät',
        ampimg: '/images/Search/IA_SearchThumb_Mobile.jpg',
        headline: 'Kontrollieren Sie Ihre Kamera von Ihrem Handy',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li><li><a href="/Fernzugriff/Mobil_Zugriff/">Mobil Zugriff</a></li>',
        canonical: '/Internet_Access/Mobile_Access/',
        description: 'Nachdem Sie Ihren Router und Ihre INSTAR Sicherheitskamera konfiguriert haben, bleibt jetzt nur noch das Einrichten der Kamera in unserer Handy App InstarVision, um den Zugriff von unterwegs zu ermöglichen.',
    		pacc: '',
    		ptab: 'hidden',
    		qiacc: '',
    		qitab: 'hidden',
    		mdacc: '',
    		mdtab: 'hidden',
    		iaacc: 'expanded',
    		iatab: '',
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

internetAccessGerRouter.get('/DDNS_Anbieter/', function(req, res) {
    res.render('./Internet_Access/DDNS_Provider', {
        title: 'Drittanbieter DDNS Anbieter',
        ampimg: '/images/Search/IA_SearchThumb_ThirdPartyDDNS.jpg',
        headline: 'Drittanbieter DDNS Anbieter für den Fernzugriff auf Ihre INSTAR Überwachungskamera',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li><li><a href="/Fernzugriff/DDNS_Anbieter/">DDNS Anbieter</a></li>',
        canonical: '/Internet_Access/DDNS_Provider/',
        description: 'Jede INSTAR IP Kamera kommt mit einer kostenlosen DDNS Adresse, die Ihnen den Zugriff über das Internet ermöglicht. Sie können aber natürlich auch eine Internet Adresse eines Drittanbieter nutzen.',
    		pacc: '',
    		ptab: 'hidden',
    		qiacc: '',
    		qitab: 'hidden',
    		mdacc: '',
    		mdtab: 'hidden',
    		iaacc: 'expanded',
    		iatab: '',
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

internetAccessGerRouter.get('/DDNS_Anbieter/NoIP/', function(req, res) {
    res.render('./Internet_Access/DDNS_Provider_NoIP', {
        title: 'NoIP DDNS Anbieter',
        ampimg: '/images/Search/IA_SearchThumb_ThirdPartyDDNS_noIP.jpg',
        headline: 'Drittanbieter DDNS Anbieter für den Fernzugriff auf Ihre INSTAR Überwachungskamera',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li><li><a href="/Fernzugriff/DDNS_Anbieter/">DDNS Anbieter</a></li><li><a href="/Fernzugriff/DDNS_Anbieter/NoIP/">NoIP</a></li>',
        canonical: '/Internet_Access/DDNS_Provider/NoIP/',
        description: 'Jede INSTAR IP Kamera kommt mit einer kostenlosen DDNS Adresse, die Ihnen den Zugriff über das Internet ermöglicht. Sie können aber natürlich auch eine Internet Adresse eines Drittanbieter nutzen - wie z.B. NoIP.',
    		pacc: '',
    		ptab: 'hidden',
    		qiacc: '',
    		qitab: 'hidden',
    		mdacc: '',
    		mdtab: 'hidden',
    		iaacc: 'expanded',
    		iatab: '',
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

internetAccessGerRouter.get('/DDNS_Anbieter/Selfhost/', function(req, res) {
    res.render('./Internet_Access/DDNS_Provider_Selfhost', {
        title: 'Selfhost DDNS Anbieter',
        ampimg: '/images/Search/IA_SearchThumb_ThirdPartyDDNS_selfhost.jpg',
        headline: 'Drittanbieter DDNS Anbieter für den Fernzugriff auf Ihre INSTAR Überwachungskamera',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li><li><a href="/Fernzugriff/DDNS_Anbieter/">DDNS Anbieter</a></li><li><a href="/Fernzugriff/DDNS_Anbieter/Selfhost/">Selfhost</a></li>',
        canonical: '/Internet_Access/DDNS_Provider/Selfhost/',
        description: 'Jede INSTAR IP Kamera kommt mit einer kostenlosen DDNS Adresse, die Ihnen den Zugriff über das Internet ermöglicht. Sie können aber natürlich auch eine Internet Adresse eines Drittanbieter nutzen - wie z.B. Selfhost.',
    		pacc: '',
    		ptab: 'hidden',
    		qiacc: '',
    		qitab: 'hidden',
    		mdacc: '',
    		mdtab: 'hidden',
    		iaacc: 'expanded',
    		iatab: '',
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

internetAccessGerRouter.get('/DDNS_Anbieter/DDNSS/', function(req, res) {
    res.render('./Internet_Access/DDNS_Provider_DDNSS', {
        title: 'DDNSS DDNS Anbieter',
        ampimg: '/images/Search/IA_SearchThumb_ThirdPartyDDNS_ddnss.jpg',
        headline: 'Drittanbieter DDNS Anbieter für den Fernzugriff auf Ihre INSTAR Überwachungskamera',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li><li><a href="/Fernzugriff/DDNS_Anbieter/">DDNS Anbieter</a></li><li><a href="/Fernzugriff/DDNS_Anbieter/DDNSS/">DDNSS</a></li>',
        canonical: '/Internet_Access/DDNS_Provider/DDNSS/',
        description: 'Jede INSTAR IP Kamera kommt mit einer kostenlosen DDNS Adresse, die Ihnen den Zugriff über das Internet ermöglicht. Sie können aber natürlich auch eine Internet Adresse eines Drittanbieter nutzen - wie z.B. DDNSS.',
    		pacc: '',
    		ptab: 'hidden',
    		qiacc: '',
    		qitab: 'hidden',
    		mdacc: '',
    		mdtab: 'hidden',
    		iaacc: 'expanded',
    		iatab: '',
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

module.exports = internetAccessGerRouter;
