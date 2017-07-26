var express = require('express');
var downloadsRouter = express.Router();

downloadsRouter.route('/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/');
});

downloadsRouter.route('/Indoor_Cameras/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Innenkameras/');
});

downloadsRouter.route('/Outdoor_Cameras/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Aussenkameras/');
});

downloadsRouter.route('/Accessories/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Zubeh%F6r/');
});

downloadsRouter.route('/Accessories/IN-90x/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Zubeh%F6r/IN-90x/');
});

downloadsRouter.route('/Accessories/IN-DV1215/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Zubeh%F6r/IN-DV1215/');
});

downloadsRouter.route('/Accessories/IN-Mikro_380/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Zubeh%F6r/IN-Mikro_380/');
});

downloadsRouter.route('/Accessories/IN-Motion_300/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Zubeh%F6r/IN-Motion_300/');
});

downloadsRouter.route('/Accessories/IN-Motion_500/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Zubeh%F6r/IN-Motion_500/');
});

downloadsRouter.route('/Network_Accessories/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Netzwerk_Zubeh%F6r/');
});

downloadsRouter.route('/Network_Accessories/IN-LAN500/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Netzwerk_Zubeh%F6r/IN-LAN500/');
});

downloadsRouter.route('/Network_Accessories/IN-PoE_1000/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Netzwerk_Zubeh%F6r/IN-PoE_1000/');
});

/* ###################################################### Mobile Apps ###################################################### */

downloadsRouter.route('/Mobile_Apps/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Mobile_Apps/');
});

downloadsRouter.route('/Mobile_Apps/Android_BlackBerry/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Mobile_Apps/Android_BlackBerry/');
});

downloadsRouter.route('/Mobile_Apps/iOS/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Mobile_Apps/iOS/');
});

downloadsRouter.route('/Mobile_Apps/Windows_Phone/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Mobile_Apps/Windows_Phone/');
});

/* #################################################### Desktop Software#################################################### */

downloadsRouter.route('/Desktop_Software/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Desktop_Software/');
});

downloadsRouter.route('/Desktop_Software/InstarVision/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Desktop_Software/InstarVision/');
});

downloadsRouter.route('/Desktop_Software/InstarVision_Metro/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Desktop_Software/InstarVision_Metro/');
});

downloadsRouter.route('/Desktop_Software/Instar_Camera_Tool/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Desktop_Software/Instar_Kamera_Tool/');
});

/* #################################################### Indoor Cameras #################################################### */

downloadsRouter.route('/Indoor_Cameras/IN-8015_HD/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Innenkameras/IN-8015_HD/');
});

downloadsRouter.route('/Indoor_Cameras/IN-6014_HD/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Innenkameras/IN-6014_HD/');
});

downloadsRouter.route('/Indoor_Cameras/IN-6012_HD/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Innenkameras/IN-6012_HD/');
});

downloadsRouter.route('/Indoor_Cameras/IN-6001_HD/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Innenkameras/IN-6001_HD/');
});

downloadsRouter.route('/Indoor_Cameras/IN-3011/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Innenkameras/IN-3011/');
});

downloadsRouter.route('/Indoor_Cameras/IN-3010/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Innenkameras/IN-3010/');
});

downloadsRouter.route('/Indoor_Cameras/IN-3003/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Innenkameras/IN-3003/');
});

downloadsRouter.route('/Indoor_Cameras/IN-3001/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Innenkameras/IN-3001/');
});

/* ################################################## Outdoor Cameras ################################################### */

downloadsRouter.route('/Outdoor_Cameras/IN-9008_HD/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Aussenkameras/IN-9008_HD/');
});

downloadsRouter.route('/Outdoor_Cameras/IN-7011_HD/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Aussenkameras/IN-7011_HD/');
});

downloadsRouter.route('/Outdoor_Cameras/IN-5907_HD/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Aussenkameras/IN-5907_HD/');
});

downloadsRouter.route('/Outdoor_Cameras/IN-5905_HD/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Aussenkameras/IN-5905_HD/');
});

downloadsRouter.route('/Outdoor_Cameras/IN-4011/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Aussenkameras/IN-4011/');
});

downloadsRouter.route('/Outdoor_Cameras/IN-4010_V2/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Aussenkameras/IN-4010_V2/');
});

downloadsRouter.route('/Outdoor_Cameras/IN-4009/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Aussenkameras/IN-4009/');
});

downloadsRouter.route('/Outdoor_Cameras/IN-2908/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Aussenkameras/IN-2908/');
});

downloadsRouter.route('/Outdoor_Cameras/IN-2905_V2/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Aussenkameras/IN-2905_V2/');
});

downloadsRouter.route('/Outdoor_Cameras/IN-2904/')
  .get(function(req, res) {
    res.status(301).redirect('/Downloadbereich/Aussenkameras/IN-2904/');
});

module.exports = downloadsRouter;
