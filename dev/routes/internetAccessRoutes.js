var express = require('express');
var internetAccessRouter = express.Router();
var appdata = require('../views/_partials/data/internetAccess.json');

/* GET Internet_Access page. */
internetAccessRouter.get('/', function(req, res) {

    var iaPicture = []; /* Get all Pictures from gallery.json for the gallery */
    var iaPictureAlt = [];
    var iaHref = [];
    appdata.articles.forEach(function(item) {
        iaPicture = iaPicture.concat(item.iaPic);
        iaPictureAlt = iaPictureAlt.concat(item.iaPicAlt);
        iaHref = iaHref.concat(item.iaUrl);
      });

    res.render('./Internet_Access/Internet_Access', {
        title: 'Internet Zugriff',
        iaPic: iaPicture,
        iaPicAlt: iaPictureAlt,
        iaUrl: iaHref,
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Internet_Access/">Zugriff über das Internet</a></li>',
      });
  });

internetAccessRouter.get('/The_DDNS_Service/', function(req, res) {
    res.render('./Internet_Access/The_DDNS_Service', {
        title: 'Der DDNS Service',
        uplink: '/Internet_Access',
        ampimg: '/images/Search/IA_SearchThumb_DDNSService.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Zugriff</a></li><li><a href="/Internet_Access/The_DDNS_Service/">Der DDNS Dienst</a></li>',
      });
  });

internetAccessRouter.get('/Port_Forwarding/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding', {
        title: 'Portweiterleitung',
        uplink: '/Internet_Access',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Zugriff</a></li><li><a href="/Internet_Access/Port_Forwarding/">Port Weiterleitung</a></li>',
      });
  });

internetAccessRouter.get('/Port_Forwarding/AVM_Fritzbox/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_AVM_Fritzbox', {
        title: 'Portweiterleitung AVM Fritzbox',
        uplink: '/Internet_Access/Port_Forwarding',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Zugriff</a></li><li><a href="/Internet_Access/Port_Forwarding/">Port Weiterleitung</a></li><li><a href="/Internet_Access/Port_Forwarding/AVM_Fritzbox/">AVM Fritzbox</a></li>',
      });
  });

internetAccessRouter.get('/Port_Forwarding/Telekom_Speedport/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_Telekom_Speedport', {
        title: 'Portweiterleitung Telekom Speedport',
        uplink: '/Internet_Access/Port_Forwarding',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Zugriff</a></li><li><a href="/Internet_Access/Port_Forwarding/">Port Weiterleitung</a></li><li><a href="/Internet_Access/Port_Forwarding/Telekom_Speedport/">Telekom Speedport</a></li>',
      });
  });

internetAccessRouter.get('/Port_Forwarding/D-Link/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_D-Link', {
        title: 'Portweiterleitung D-Link',
        uplink: '/Internet_Access/Port_Forwarding',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Zugriff</a></li><li><a href="/Internet_Access/Port_Forwarding/">Port Weiterleitung</a></li><li><a href="/Internet_Access/Port_Forwarding/D-Link/">D-Link</a></li>',
      });
  });

internetAccessRouter.get('/Port_Forwarding/TP-Link/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_TP-Link', {
        title: 'Portweiterleitung TP-Link',
        uplink: '/Internet_Access/Port_Forwarding',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Zugriff</a></li><li><a href="/Internet_Access/Port_Forwarding/">Port Weiterleitung</a></li><li><a href="/Internet_Access/Port_Forwarding/TP-Link/">TP-Link</a></li>',
      });
  });

internetAccessRouter.get('/Port_Forwarding/Netgear/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_Netgear', {
        title: 'Portweiterleitung Netgear',
        uplink: '/Internet_Access/Port_Forwarding',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Zugriff</a></li><li><a href="/Internet_Access/Port_Forwarding/">Port Weiterleitung</a></li><li><a href="/Internet_Access/Port_Forwarding/Netgear/">Netgear</a></li>',
      });
  });

internetAccessRouter.get('/Port_Forwarding/Vodafone_Easybox/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_Vodafone_Easybox', {
        title: 'Portweiterleitung Vodafone Easybox',
        uplink: '/Internet_Access/Port_Forwarding',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Zugriff</a></li><li><a href="/Internet_Access/Port_Forwarding/">Port Weiterleitung</a></li><li><a href="/Internet_Access/Port_Forwarding/Vodafone_Easybox/">Vodafone Easybox</a></li>',
      });
  });

internetAccessRouter.get('/Port_Forwarding/Pirelli/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_Pirelli', {
        title: 'Portweiterleitung Pirelli',
        uplink: '/Internet_Access/Port_Forwarding',
        ampimg: '/images/Search/IA_SearchThumb_Portforwarding.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Zugriff</a></li><li><a href="/Internet_Access/Port_Forwarding/">Port Weiterleitung</a></li><li><a href="/Internet_Access/Port_Forwarding/Pirelli/">Pirelli</a></li>',
      });
  });

internetAccessRouter.get('/DDNS_Provider/', function(req, res) {
    res.render('./Internet_Access/DDNS_Provider', {
        title: 'Drittanbieter DDNS-Dienste',
        uplink: '/Internet_Access',
        ampimg: '/images/Search/IA_SearchThumb_DDNSService.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Zugriff</a></li><li><a href="/Internet_Access/DDNS_Provider/">DDNS Anbieter</a></li><li><a href="/Internet_Access/DDNS_Provider/NoIP/">NoIP</a></li>',
      });
  });

internetAccessRouter.get('/DDNS_Provider/NoIP/', function(req, res) {
    res.render('./Internet_Access/DDNS_Provider_NoIP', {
        title: 'NoIP DDNS-Dienste',
        uplink: '/Internet_Access/DDNS_Provider',
        ampimg: '/images/Search/IA_SearchThumb_DDNSService.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Zugriff</a></li><li><a href="/Internet_Access/DDNS_Provider/">DDNS Anbieter</a></li><li><a href="/Internet_Access/DDNS_Provider/Selfhost/">NoIP</a></li>',
      });
  });

internetAccessRouter.get('/DDNS_Provider/Selfhost/', function(req, res) {
    res.render('./Internet_Access/DDNS_Provider_Selfhost', {
        title: 'Selfhost DDNS-Dienste',
        uplink: '/Internet_Access/DDNS_Provider',
        ampimg: '/images/Search/IA_SearchThumb_DDNSService.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Zugriff</a></li><li><a href="/Internet_Access/DDNS_Provider/">DDNS Anbieter</a></li><li><a href="/Internet_Access/DDNS_Provider/Selfhost/">Selfhost</a></li>',
      });
  });

internetAccessRouter.get('/DDNS_Provider/DDNSS/', function(req, res) {
    res.render('./Internet_Access/DDNS_Provider_DDNSS', {
        title: 'DDNSS DDNS-Dienste',
        uplink: '/Internet_Access/DDNS_Provider',
        ampimg: '/images/Search/IA_SearchThumb_DDNSService.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Internet_Access/">Internet Zugriff</a></li><li><a href="/Internet_Access/DDNS_Provider/">DDNS Anbieter</a></li><li><a href="/Internet_Access/DDNS_Provider/DDNSS/">DDNSS</a></li>',
      });
  });

module.exports = internetAccessRouter;
