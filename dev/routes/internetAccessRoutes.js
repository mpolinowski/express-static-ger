var express = require('express');
var internetAccessRouter = express.Router();

internetAccessRouter.route('/')
  .get(function(req, res) {
    res.status(301).redirect('/Fernzugriff/');
});

internetAccessRouter.route('/Point_to_Point/')
  .get(function(req, res) {
    res.status(301).redirect('/Fernzugriff/Point_to_Point/');
});

internetAccessRouter.route('/The_DDNS_Service/')
  .get(function(req, res) {
    res.status(301).redirect('/Fernzugriff/Der_DDNS_Dienst/');
});

internetAccessRouter.route('/Port_Forwarding/')
  .get(function(req, res) {
    res.status(301).redirect('/Fernzugriff/Port_Weiterleitung/');
});

internetAccessRouter.route('/Port_Forwarding/AVM_Fritzbox/')
  .get(function(req, res) {
    res.status(301).redirect('/Fernzugriff/Port_Weiterleitung/AVM_Fritzbox/');
});

internetAccessRouter.route('/Port_Forwarding/Telekom_Speedport/')
  .get(function(req, res) {
    res.status(301).redirect('/Fernzugriff/Port_Weiterleitung/Telekom_Speedport/');
});

internetAccessRouter.route('/Port_Forwarding/D-Link/')
  .get(function(req, res) {
    res.status(301).redirect('/Fernzugriff/Port_Weiterleitung/D-Link/');
});

internetAccessRouter.route('/Port_Forwarding/TP-Link/')
  .get(function(req, res) {
    res.status(301).redirect('/Fernzugriff/Port_Weiterleitung/TP-Link/');
});

internetAccessRouter.route('/Port_Forwarding/Netgear/')
  .get(function(req, res) {
    res.status(301).redirect('/Fernzugriff/Port_Weiterleitung/Netgear/');
});

internetAccessRouter.route('/Port_Forwarding/Vodafone_Easybox/')
  .get(function(req, res) {
    res.status(301).redirect('/Fernzugriff/Port_Weiterleitung/Vodafone_Easybox/');
});

internetAccessRouter.route('/Port_Forwarding/Pirelli/')
  .get(function(req, res) {
    res.status(301).redirect('/Fernzugriff/Port_Weiterleitung/Pirelli/');
});

internetAccessRouter.route('/DDNS_Provider/')
  .get(function(req, res) {
    res.status(301).redirect('/Fernzugriff/DDNS_Anbieter/');
});

internetAccessRouter.route('/DDNS_Provider/NoIP/')
  .get(function(req, res) {
    res.status(301).redirect('/Fernzugriff/DDNS_Anbieter/NoIP/');
});

internetAccessRouter.route('/DDNS_Provider/Selfhost/')
  .get(function(req, res) {
    res.status(301).redirect('/Fernzugriff/DDNS_Anbieter/Selfhost/');
});

internetAccessRouter.route('/DDNS_Provider/DDNSS/')
  .get(function(req, res) {
    res.status(301).redirect('/Fernzugriff/DDNS_Anbieter/DDNSS/');
});

module.exports = internetAccessRouter;
