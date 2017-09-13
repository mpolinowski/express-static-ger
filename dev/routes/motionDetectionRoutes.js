var express = require('express');
var motionDetectionRouter = express.Router();

motionDetectionRouter.route('/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/');
});

motionDetectionRouter.route('/Setup/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/Einrichtung/');
});

motionDetectionRouter.route('/Setup/720p_Series/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/Einrichtung/720p_Serie/');
});

motionDetectionRouter.route('/Setup/VGA_Series/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/Einrichtung/VGA_Serie/');
});

motionDetectionRouter.route('/Alarm_Notification/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/Alarmbenachrichtigung/');
});

motionDetectionRouter.route('/Alarm_Notification/720p_Series/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/Alarmbenachrichtigung/720p_Serie/');
});

motionDetectionRouter.route('/Alarm_Notification/VGA_Series/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/Alarmbenachrichtigung/VGA_Serie/');
});

motionDetectionRouter.route('/Alarm_Notification/Troubleshooting/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/Alarmbenachrichtigung/Fehlerbehebung/');
});

motionDetectionRouter.route('/Alarm_Notification/SMTP_Servers/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/Alarmbenachrichtigung/SMTP_Server/');
});

motionDetectionRouter.route('/Alarm_Recording/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/Alarm_Aufnahme/');
});

motionDetectionRouter.route('/SD_Card_Access/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/SD_Karten_Zugriff/');
});

motionDetectionRouter.route('/SD_Card_Access/Bitkinex/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/SD_Karten_Zugriff/Bitkinex/');
});

motionDetectionRouter.route('/SD_Card_Access/CuteFTP/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/SD_Karten_Zugriff/CuteFTP/');
});

motionDetectionRouter.route('/SD_Card_Access/DownThemAll/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/SD_Karten_Zugriff/DownThemAll/');
});

motionDetectionRouter.route('/SD_Card_Access/Interachy/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/SD_Karten_Zugriff/Interachy/');
});

motionDetectionRouter.route('/SD_Card_Access/DeepVacuum/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/SD_Karten_Zugriff/DeepVacuum/');
});

motionDetectionRouter.route('/SD_Card_Access/SiteSucker/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/SD_Karten_Zugriff/SiteSucker/');
});

motionDetectionRouter.route('/SD_Card_Access/SimpleWget/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/SD_Karten_Zugriff/SimpleWget/');
});

motionDetectionRouter.route('/Alarm_FTP_Upload/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/Alarm_FTP_Upload/');
});

motionDetectionRouter.route('/Alarm_FTP_Upload/720p_Series/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/Alarm_FTP_Upload/720p_Serie/');
});

motionDetectionRouter.route('/Alarm_FTP_Upload/VGA_Series/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/Alarm_FTP_Upload/VGA_Serie/');
});

motionDetectionRouter.route('/Router_as_a_FTP_Server/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/Router_als_FTP_Server/');
});

motionDetectionRouter.route('/Router_as_a_FTP_Server/AVM_Fritzbox_as_FTP_Server/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/Router_als_FTP_Server/AVM_Fritzbox_als_FTP_Server/');
});

motionDetectionRouter.route('/Router_as_a_FTP_Server/Telekom_Speedport_as_FTP_Server/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/Router_als_FTP_Server/Telekom_Speedport_als_FTP_Server/');
});

motionDetectionRouter.route('/Router_as_a_FTP_Server/QNAP_as_FTP_Server/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/Router_als_FTP_Server/QNAP_als_FTP_Server/');
});

motionDetectionRouter.route('/Router_as_a_FTP_Server/Synology_as_FTP_Server/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/Router_als_FTP_Server/Synology_als_FTP_Server/');
});

motionDetectionRouter.route('/Router_as_a_FTP_Server/Linksys_as_FTP_Server/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/Router_als_FTP_Server/Linksys_als_FTP_Server/');
});

motionDetectionRouter.route('/Router_as_a_FTP_Server/TP-Link_as_FTP_Server/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/Router_als_FTP_Server/TP-Link_als_FTP_Server/');
});

motionDetectionRouter.route('/Router_as_a_FTP_Server/WD_MyCloud_as_FTP_Server/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/Router_als_FTP_Server/WD_MyCloud_als_FTP_Server/');
});

motionDetectionRouter.route('/FTP_Server_Setup/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/FTP_Server_Setup/');
});

motionDetectionRouter.route('/FTP_Server_Setup/Install_FileZilla_Server/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/FTP_Server_Setup/Install_FileZilla_Server/');
});

motionDetectionRouter.route('/Alarm_Server/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/Alarm_Server/');
});

motionDetectionRouter.route('/INSTAR_Cloud/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/INSTAR_Cloud/');
});

motionDetectionRouter.route('/INSTAR_Cloud/Create_User_Account/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/INSTAR_Cloud/Benutzer_Account_Erstellen/');
});

motionDetectionRouter.route('/INSTAR_Cloud/Storage/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/INSTAR_Cloud/Speicherplatz/');
});

motionDetectionRouter.route('/INSTAR_Cloud/User/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/INSTAR_Cloud/Benutzer/');
});

motionDetectionRouter.route('/INSTAR_Cloud/Administration/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/INSTAR_Cloud/Administration/');
});

motionDetectionRouter.route('/INSTAR_Cloud/Alarm_Recordings/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/INSTAR_Cloud/Alarm_Aufnahmen/');
});

motionDetectionRouter.route('/INSTAR_Cloud/Camera_Sets/')
  .get(function(req, res) {
    res.status(301).redirect('/Bewegungserkennung/INSTAR_Cloud/Kamera_Sets/');
});

module.exports = motionDetectionRouter;
