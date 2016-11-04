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
      });
  });

internetAccessRouter.get('/The_DDNS_Service/', function(req, res) {
    res.render('./Internet_Access/The_DDNS_Service', {
        title: 'Der DDNS Service',
        uplink: '/Internet_Access',
      });
  });

internetAccessRouter.get('/Port_Forwarding/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding', {
        title: 'Portweiterleitung',
        uplink: '/Internet_Access',
      });
  });

internetAccessRouter.get('/Port_Forwarding/AVM_Fritzbox/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_AVM_Fritzbox', {
        title: 'Portweiterleitung AVM Fritzbox',
        uplink: '/Internet_Access/Port_Forwarding',
      });
  });

internetAccessRouter.get('/Port_Forwarding/Telekom_Speedport/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_Telekom_Speedport', {
        title: 'Portweiterleitung Telekom Speedport',
        uplink: '/Internet_Access/Port_Forwarding',
      });
  });

internetAccessRouter.get('/Port_Forwarding/D-Link/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_D-Link', {
        title: 'Portweiterleitung D-Link',
        uplink: '/Internet_Access/Port_Forwarding',
      });
  });

internetAccessRouter.get('/Port_Forwarding/TP-Link/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_TP-Link', {
        title: 'Portweiterleitung TP-Link',
        uplink: '/Internet_Access/Port_Forwarding',
      });
  });

internetAccessRouter.get('/Port_Forwarding/Netgear/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_Netgear', {
        title: 'Portweiterleitung Netgear',
        uplink: '/Internet_Access/Port_Forwarding',
      });
  });

internetAccessRouter.get('/Port_Forwarding/Vodafone_Easybox/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_Vodafone_Easybox', {
        title: 'Portweiterleitung Vodafone Easybox',
        uplink: '/Internet_Access/Port_Forwarding',
      });
  });

internetAccessRouter.get('/Port_Forwarding/Pirelli/', function(req, res) {
    res.render('./Internet_Access/Port_Forwarding_Pirelli', {
        title: 'Portweiterleitung Pirelli',
        uplink: '/Internet_Access/Port_Forwarding',
      });
  });

internetAccessRouter.get('/DDNS_Provider/', function(req, res) {
    res.render('./Internet_Access/DDNS_Provider', {
        title: 'Drittanbieter DDNS-Dienste',
        uplink: '/Internet_Access',
      });
  });

internetAccessRouter.get('/DDNS_Provider/NoIP/', function(req, res) {
    res.render('./Internet_Access/DDNS_Provider_NoIP', {
        title: 'NoIP DDNS-Dienste',
        uplink: '/Internet_Access/DDNS_Provider',
      });
  });

internetAccessRouter.get('/DDNS_Provider/Selfhost/', function(req, res) {
    res.render('./Internet_Access/DDNS_Provider_Selfhost', {
        title: 'Selfhost DDNS-Dienste',
        uplink: '/Internet_Access/DDNS_Provider',
      });
  });

internetAccessRouter.get('/DDNS_Provider/DDNSS/', function(req, res) {
    res.render('./Internet_Access/DDNS_Provider_DDNSS', {
        title: 'DDNSS DDNS-Dienste',
        uplink: '/Internet_Access/DDNS_Provider',
      });
  });

module.exports = internetAccessRouter;
