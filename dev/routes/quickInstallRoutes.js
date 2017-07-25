var express = require('express');
var quickInstallRouter = express.Router();

quickInstallRouter.route('/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/');
});

quickInstallRouter.route('/How_Does_An_IP_Camera_Work/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/Wie_Funktioniert_eine_IP_Camera/');
});

quickInstallRouter.route('/First_Steps/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/Erste_Schritte/');
});

quickInstallRouter.route('/After_Unpacking/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/Nach_dem_Auspacken/');
});

quickInstallRouter.route('/Power_over_Ethernet/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/Power_over_Ethernet/');
});

quickInstallRouter.route('/Powerline/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/Powerline/');
});

quickInstallRouter.route('/Direct_LAN_Connection/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/Direkte_LAN_Verbindung/');
});

quickInstallRouter.route('/Alternative_IP_Scanner/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/Alternative_IP_Scanner/');
});

quickInstallRouter.route('/Alternative_IP_Scanner/Angry_IP_Scanner/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/Alternative_IP_Scanner/Angry_IP_Scanner/');
});

quickInstallRouter.route('/Alternative_IP_Scanner/Fing_CLI/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/Alternative_IP_Scanner/Fing_CLI/');
});

quickInstallRouter.route('/Alternative_IP_Scanner/Fing_Mobile/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/Alternative_IP_Scanner/Fing_Mobile/');
});

quickInstallRouter.route('/Language_Selection/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/Sprachauswahl/');
});

quickInstallRouter.route('/Live_Video/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/Live_Video/');
});

quickInstallRouter.route('/Live_Video/ActiveX/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/Live_Video/ActiveX/');
});

quickInstallRouter.route('/Live_Video/QuickTime/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/Live_Video/QuickTime/');
});

quickInstallRouter.route('/Live_Video/MJPEG/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/Live_Video/MJPEG/');
});

quickInstallRouter.route('/Live_Video/Troubleshooting/Avast/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/Live_Video/Problembehebung/Avast/');
});

quickInstallRouter.route('/Live_Video/Troubleshooting/Kaspersky_2013/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/Live_Video/Problembehebung/Kaspersky_2013/');
});

quickInstallRouter.route('/Live_Video/Troubleshooting/Kaspersky_2014/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/Live_Video/Problembehebung/Kaspersky_2014/');
});

quickInstallRouter.route('/Live_Video/Troubleshooting/Kaspersky_2017/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/Live_Video/Problembehebung/Kaspersky_2017/');
});

quickInstallRouter.route('/Live_Video/Troubleshooting/AVG/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/Live_Video/Problembehebung/AVG/');
});

quickInstallRouter.route('/Live_Video/Troubleshooting/GDATA/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/Live_Video/Problembehebung/GDATA/');
});

quickInstallRouter.route('/Live_Video/Troubleshooting/AVIRA/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/Live_Video/Problembehebung/AVIRA/');
});

quickInstallRouter.route('/Live_Video/Troubleshooting/F-Secure/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/Live_Video/Problembehebung/F-Secure/');
});

quickInstallRouter.route('/Creating_User_Accounts/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/Benutzerverwaltung/');
});

quickInstallRouter.route('/WebUI_And_Firmware_Upgrade/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/WebUI_und_Firmware_Upgrade/');
});

quickInstallRouter.route('/WebUI_And_Firmware_Upgrade/720p_Cameras/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/WebUI_und_Firmware_Upgrade/720p_Kameras/');
});

quickInstallRouter.route('/WebUI_And_Firmware_Upgrade/VGA_Cameras/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/WebUI_und_Firmware_Upgrade/VGA_Kameras/');
});

quickInstallRouter.route('/How_To_Clear_Your_Browsing_History/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/Leeren_des_Browserverlaufs/');
});

quickInstallRouter.route('/How_To_Clear_Your_Browsing_History/Internet_Explorer/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/Leeren_des_Browserverlaufs/Internet_Explorer/');
});

quickInstallRouter.route('/How_To_Clear_Your_Browsing_History/Mozilla_Firefox/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/Leeren_des_Browserverlaufs/Mozilla_Firefox/');
});

quickInstallRouter.route('/How_To_Clear_Your_Browsing_History/Google_Chromium/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/Leeren_des_Browserverlaufs/Google_Chromium/');
});

quickInstallRouter.route('/How_To_Clear_Your_Browsing_History/Opera/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/Leeren_des_Browserverlaufs/Opera/');
});

quickInstallRouter.route('/How_To_Clear_Your_Browsing_History/Microsoft_Edge/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/Leeren_des_Browserverlaufs/Microsoft_Edge/');
});

quickInstallRouter.route('/How_To_Clear_Your_Browsing_History/Vivaldi/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/Leeren_des_Browserverlaufs/Vivaldi/');
});

quickInstallRouter.route('/Set_Up_A_Wireless_Connection/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/Herstellen_der_WLAN_Verbindung/');
});

quickInstallRouter.route('/ONVIF/')
  .get(function(req, res) {
    res.status(301).redirect('/Schnell_Installation/ONVIF/');
});

module.exports = quickInstallRouter;
