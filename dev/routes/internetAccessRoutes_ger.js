var express = require('express');
var internetAccessGerRouter = express.Router();

/* GET Internet_Access page. */
internetAccessGerRouter.get('/', function(req, res) {
    res.render('./Internet_Access/Internet_Access', {
        title: 'Fernzugriff',
        ampimg: '/images/Search/AU_SearchThumb_WebsiteIntegration.jpg',
        headline: 'Fernzugriff auf Ihre IP Kamera',
        canonical: '/Internet_Access/',
      });
  });

internetAccessGerRouter.get('/Der_DDNS_Dienst/', function(req, res) {
    res.render('./Internet_Access/The_DDNS_Service', {
        title: 'DDNS Service',
        ampimg: '/images/Search/IA_SearchThumb_DDNSService.jpg',
        headline: 'Der DDNS Dienst',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li><li><a href="/Fernzugriff/Der_DDNS_Dienst/">DDNS Service</a></li>',
        canonical: '/Internet_Access/The_DDNS_Service/',
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
        title: 'Port Weiterleitung',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding.jpg',
        headline: 'Port Weiterleitung',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/">Port Weiterleitung</a></li>',
        canonical: '/Internet_Access/Port_Forwarding/',
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
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding.jpg',
        headline: 'Port Weiterleitung AVM Fritzbox',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/">Port Weiterleitung</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/AVM_Fritzbox/">AVM Fritzbox</a></li>',
        canonical: '/Internet_Access/Port_Forwarding/AVM_Fritzbox/',
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
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding.jpg',
        headline: 'Port Weiterleitung Telekom Speedport',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/">Port Weiterleitung</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/Telekom_Speedport/">Telekom Speedport</a></li>',
        canonical: '/Internet_Access/Port_Forwarding/Telekom_Speedport/',
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
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding.jpg',
        headline: 'Port Weiterleitung D-Link',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/">Port Weiterleitung</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/D-Link/">D-Link</a></li>',
        canonical: '/Internet_Access/Port_Forwarding/D-Link/',
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
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding.jpg',
        headline: 'Port Weiterleitung TP-Link',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/">Port Weiterleitung</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/TP-Link/">TP-Link</a></li>',
        canonical: '/Internet_Access/Port_Forwarding/TP-Link/',
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
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding.jpg',
        headline: 'Port Weiterleitung Netgear',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/">Port Weiterleitung</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/Netgear/">Netgear</a></li>',
        canonical: '/Internet_Access/Port_Forwarding/Netgear/',
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
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding.jpg',
        headline: 'Port Weiterleitung Vodafone Easybox',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/">Port Weiterleitung</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/Vodafone_Easybox/">Vodafone Easybox</a></li>',
        canonical: '/Internet_Access/Port_Forwarding/Vodafone_Easybox/',
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
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding.jpg',
        headline: 'Port Weiterleitung Pirelli',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/">Port Weiterleitung</a></li><li><a href="/Fernzugriff/Port_Weiterleitung/Pirelli/">Pirelli</a></li>',
        canonical: '/Internet_Access/Port_Forwarding/Pirelli/',
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
        ampimg: '/images/Search/IA_SearchThumb_DDNSService.jpg',
        headline: 'Drittanbieter DDNS Anbieter',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li><li><a href="/Fernzugriff/DDNS_Anbieter/">DDNS Anbieter</a></li>',
        canonical: '/Internet_Access/DDNS_Provider/',
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
        ampimg: '/images/Search/IA_SearchThumb_DDNSService.jpg',
        headline: 'Drittanbieter DDNS Anbieter',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li><li><a href="/Fernzugriff/DDNS_Anbieter/">DDNS Anbieter</a></li><li><a href="/Fernzugriff/DDNS_Anbieter/NoIP/">NoIP</a></li>',
        canonical: '/Internet_Access/DDNS_Provider/NoIP/',
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
        ampimg: '/images/Search/IA_SearchThumb_DDNSService.jpg',
        headline: 'Drittanbieter DDNS Anbieter',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li><li><a href="/Fernzugriff/DDNS_Anbieter/">DDNS Anbieter</a></li><li><a href="/Fernzugriff/DDNS_Anbieter/Selfhost/">Selfhost</a></li>',
        canonical: '/Internet_Access/DDNS_Provider/Selfhost/',
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
        ampimg: '/images/Search/IA_SearchThumb_DDNSService.jpg',
        headline: 'Drittanbieter DDNS Anbieter',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Fernzugriff/">Fernzugriff</a></li><li><a href="/Fernzugriff/DDNS_Anbieter/">DDNS Anbieter</a></li><li><a href="/Fernzugriff/DDNS_Anbieter/DDNSS/">DDNSS</a></li>',
        canonical: '/Internet_Access/DDNS_Provider/DDNSS/',
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
