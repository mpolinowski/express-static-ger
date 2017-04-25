var express = require('express');
var advancedUserRouter = express.Router();

advancedUserRouter.route('/')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/');
});

advancedUserRouter.route('/Website_Integration/')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/Webseiten_Einbindung/');
});

advancedUserRouter.route('/Website_Integration/Cambozola/')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/Webseiten_Einbindung/Cambozola/');
});

advancedUserRouter.route('/Website_Integration/Open_IP_Camera_Manager/')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/Webseiten_Einbindung/Open_IP_Camera_Manager/');
});

advancedUserRouter.route('/Website_Integration/HD_Camera_Integration/')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/Webseiten_Einbindung/HD_Kamera_Einbindung/');
});

advancedUserRouter.route('/CGI_Commands/')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/CGI_Befehle/');
});

advancedUserRouter.route('/CGI_Commands/VGA_Series_CGI_List/')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/CGI_Befehle/VGA_Serie_CGI_Befehle/');
});

advancedUserRouter.route('/Restore_WebUI/')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/WebUI_Wiederherstellen/');
});

advancedUserRouter.route('/Restore_Firmware/')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/Firmware_Wiederherstellen/');
});

advancedUserRouter.route('/CCTV_vs_IP/')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/CCTV_vs_IP/');
});

advancedUserRouter.route('/VPN_AVM_Fritzbox/')
  .get(function(req, res) {
    res.status(301).redirect('/Erweitert/VPN_AVM_Fritzbox/');
});

module.exports = advancedUserRouter;
