var express = require('express');
var webUI720pRouter = express.Router();

/* ###################################### HD Series ###################################### */

webUI720pRouter.route('/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/');
});

/* ###################################### HD Series Software ###################################### */

webUI720pRouter.route('/Software/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/Software/');
});

webUI720pRouter.route('/Software/Language/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/Software/Sprache/');
});

webUI720pRouter.route('/Software/Backup/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/Software/Sicherung/');
});

webUI720pRouter.route('/Software/Update/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/Software/Update/');
});

webUI720pRouter.route('/Software/Reboot_Reset/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/Software/Neustart_Werkseinstellungen/');
});

/* ###################################### HD Series Network ###################################### */

webUI720pRouter.route('/Network/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/Netzwerk/');
});

webUI720pRouter.route('/Network/IP_Configuration/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/Netzwerk/IP_Konfiguration/');
});

webUI720pRouter.route('/Network/WiFi/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/Netzwerk/WLAN/');
});

webUI720pRouter.route('/Network/DDNS/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/Netzwerk/DDNS/');
});

webUI720pRouter.route('/Network/P2P/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/Netzwerk/P2P/');
});

webUI720pRouter.route('/Network/UPnP/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/Netzwerk/UPnP/');
});

webUI720pRouter.route('/Network/Push_Service/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/Netzwerk/Push_Dienst/');
});

/* ###################################### HD Series System ###################################### */

webUI720pRouter.route('/System/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/System/');
});

webUI720pRouter.route('/System/Info/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/System/Info/');
});

webUI720pRouter.route('/System/Date_Time/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/System/Datum_Uhrzeit/');
});

webUI720pRouter.route('/System/User/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/System/Benutzer/');
});

webUI720pRouter.route('/System/Status_LED/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/System/Status_LED/');
});

webUI720pRouter.route('/System/IR_LED/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/System/IR_LEDs/');
});

webUI720pRouter.route('/System/ONVIF/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/System/ONVIF/');
});

webUI720pRouter.route('/System/PTZ/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/System/PTZ/');
});

webUI720pRouter.route('/System/PTZ_Tour/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/System/PTZ_Tour/');
});

webUI720pRouter.route('/System/System_Log/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/System/System_Logbuch/');
});

/* ###################################### HD Series Multimedia ###################################### */

webUI720pRouter.route('/Multimedia/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/Multimedia/');
});

webUI720pRouter.route('/Multimedia/Audio/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/Multimedia/Audio/');
});

webUI720pRouter.route('/Multimedia/Video/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/Multimedia/Video/');
});

webUI720pRouter.route('/Multimedia/Image/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/Multimedia/Bildeinstellungen/');
});

/* ###################################### HD Series Alarm ###################################### */

webUI720pRouter.route('/Alarm/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/Alarm/');
});

webUI720pRouter.route('/Alarm/Areas/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/Alarm/Bereiche/');
});

webUI720pRouter.route('/Alarm/Privacy_Mask/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/Alarm/Privat_Maske/');
});

webUI720pRouter.route('/Alarm/Actions/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/Alarm/Aktionen/');
});

webUI720pRouter.route('/Alarm/Schedule/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/Alarm/Zeitplan/');
});

webUI720pRouter.route('/Alarm/SMTP_Server/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/Alarm/SMTP_Server/');
});

webUI720pRouter.route('/Alarm/Email/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/Alarm/Email/');
});

webUI720pRouter.route('/Alarm/FTP/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/Alarm/FTP/');
});

webUI720pRouter.route('/Alarm/Audio_Alarm/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/Alarm/Audio_Alarm/');
});

webUI720pRouter.route('/Alarm/Alarmserver/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/Alarm/Alarmserver/');
});

webUI720pRouter.route('/Alarm/SD_Card/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/Alarm/SD_Karte/');
});

/* ###################################### HD Series Recording ###################################### */

webUI720pRouter.route('/Recording/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/Videoaufnahme/');
});

webUI720pRouter.route('/Recording/Schedule/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/Videoaufnahme/Zeitplan/');
});

webUI720pRouter.route('/Recording/Video/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/Videoaufnahme/Video/');
});

webUI720pRouter.route('/Recording/Photoseries/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/Videoaufnahme/Fotoserie/');
});

/* ###################################### HD Series Menu Bar ###################################### */

webUI720pRouter.route('/Menu_Bar/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/Menu_Bar/');
});

/* ###################################### HD Series Video Menu Bar ###################################### */

webUI720pRouter.route('/Video_Menu_Bar/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/Video_Menu_Bar/');
});

/* ###################################### HD Series PTZ ###################################### */

webUI720pRouter.route('/Video_Menu_Bar/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/Video_Menu_Bar/');
});

webUI720pRouter.route('/PTZ_Control/')
  .get(function(req, res) {
    res.status(301).redirect('/Web_User_Interface/720p_Serie/PTZ_Kontrolle/');
});

module.exports = webUI720pRouter;
