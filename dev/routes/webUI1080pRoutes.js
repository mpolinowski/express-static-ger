var express = require('express');
var webUI1080pRouter = express.Router();

webUI1080pRouter.route('/Overview/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Auswahl/');
});

/* ###################################### fullHD Series ###################################### */

webUI1080pRouter.route('/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/');
});

/* ###################################### fullHD Series System ###################################### */

webUI1080pRouter.route('/System/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/System/');
});

webUI1080pRouter.route('/System/Date_Time/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/System/Datum_Uhrzeit/');
});

webUI1080pRouter.route('/System/Info/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/System/Info/');
});

webUI1080pRouter.route('/System/Language/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/System/Sprache/');
});

webUI1080pRouter.route('/System/User/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/System/Benutzer/');
});

webUI1080pRouter.route('/System/Log/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/System/Log/');
});

webUI1080pRouter.route('/System/Reboot/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/System/Neustarten/');
});

webUI1080pRouter.route('/System/Reset/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/System/Werksreset/');
});

webUI1080pRouter.route('/System/Update/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/System/Update/');
});

/* ###################################### fullHD Series Network ###################################### */

webUI1080pRouter.route('/Network/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Netzwerk/');
});

webUI1080pRouter.route('/Network/IP_Configuration/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Netzwerk/IP_Konfiguration/');
});

webUI1080pRouter.route('/Network/WiFi/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Netzwerk/WLAN/');
});

webUI1080pRouter.route('/Network/Remote_Access/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Netzwerk/Fernzugriff/');
});

webUI1080pRouter.route('/Network/ONVIF/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Netzwerk/ONVIF/');
});

webUI1080pRouter.route('/Network/UPnP/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Netzwerk/UPnP/');
});

/* ###################################### fullHD Series Features ###################################### */

webUI1080pRouter.route('/Features/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Features/');
});

webUI1080pRouter.route('/Features/Email/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Features/Email_Einstellungen/');
});

webUI1080pRouter.route('/Features/FTP/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Features/FTP/');
});

webUI1080pRouter.route('/Features/Status_LED/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Features/Status_LED/');
});

webUI1080pRouter.route('/Features/IR_LEDs/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Features/IR_Nachtsicht/');
});

webUI1080pRouter.route('/Features/PTZ/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Features/PTZ/');
});

webUI1080pRouter.route('/Features/SD_Card/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Features/SD_Karte/');
});

webUI1080pRouter.route('/Features/PTZ_Tour/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Features/PTZ_Tour/');
});

webUI1080pRouter.route('/Features/Manual_Recording/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Features/Manuelle_Aufnahme/');
});

/* ###################################### fullHD Series Multimedia ###################################### */

webUI1080pRouter.route('/Multimedia/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Multimedia/');
});

webUI1080pRouter.route('/Multimedia/Audio/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Multimedia/Audio/');
});

webUI1080pRouter.route('/Multimedia/Video/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Multimedia/Video/');
});

webUI1080pRouter.route('/Multimedia/Image/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Multimedia/Bild/');
});

webUI1080pRouter.route('/Multimedia/Image/Wide_Dynamic_Range/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Multimedia/Bild/Wide_Dynamic_Range/');
});

webUI1080pRouter.route('/Multimedia/Image/9008vs5905/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Multimedia/Bild/9008vs5905/');
});

webUI1080pRouter.route('/Multimedia/Video_Overlays/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Multimedia/Video_Overlays/');
});

webUI1080pRouter.route('/Multimedia/Privacy_Mask/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Multimedia/Privat/');
});

/* ###################################### fullHD Series Alarm ###################################### */

webUI1080pRouter.route('/Alarm/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Alarm/');
});

webUI1080pRouter.route('/Alarm/Areas/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Alarm/Bereiche/');
});

webUI1080pRouter.route('/Alarm/Actions/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Alarm/Aktionen/');
});

webUI1080pRouter.route('/Alarm/Schedule/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Alarm/Zeitplan/');
});

webUI1080pRouter.route('/Alarm/Alarm_Server/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Alarm/Alarm_Server/');
});

webUI1080pRouter.route('/Alarm/Push_Service/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Alarm/Push_Dienst/');
});

/* ###################################### fullHD Series Recording ###################################### */

webUI1080pRouter.route('/Recording/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Aufnahme_Aufgaben/');
});

webUI1080pRouter.route('/Recording/Video/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Aufnahme_Aufgaben/Video/');
});

webUI1080pRouter.route('/Recording/Photoseries/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Aufnahme_Aufgaben/Fotoserie/');
});

/* ###################################### fullHD Series LiveVideo ###################################### */

webUI1080pRouter.route('/Live_Video/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Live_Video/');
});

/* ###################################### fullHD Series Cloud ###################################### */

webUI1080pRouter.route('/Cloud/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/1080p_Serie/Cloud/');
});


module.exports = webUI1080pRouter;
