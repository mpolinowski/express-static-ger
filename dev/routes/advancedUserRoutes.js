var express = require('express');
var advancedUserRouter = express.Router();
var appdata = require('../views/_partials/data/advancedUser.json');

/* GET Internet_Access page. */
advancedUserRouter.get('/', function(req, res) {

    var mdPicture = []; /* Get all Pictures from gallery.json for the gallery */
    var mdPictureAlt = [];
    var mdHref = [];
    appdata.articles.forEach(function(item) {
        mdPicture = mdPicture.concat(item.mdPic);
        mdPictureAlt = mdPictureAlt.concat(item.mdPicAlt);
        mdHref = mdHref.concat(item.mdUrl);
      });

    res.render('./Advanced_User/Advanced_User', {
        title: 'Für Entwickler',
        mdPic: mdPicture,
        mdPicAlt: mdPictureAlt,
        mdUrl: mdHref,
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Für Entwickler</a></li>',
      });
  });

advancedUserRouter.get('/Website_Integration/', function(req, res) {
    res.render('./Advanced_User/Website_Integration', {
        title: 'Webseiten Integration',
        uplink: '/Advanced_User',
        ampimg: '/images/Search/AU_SearchThumb_WebsiteIntegration.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Advanced_User/">Für Entwickler</a></li><li><a href="/Advanced_User/Website_Integration/">Webseiten Integration</a></li>',
      });
  });

advancedUserRouter.get('/Website_Integration/Cambozola', function(req, res) {
    res.render('./Advanced_User/Cambozola', {
        title: 'Cambozola (JAVA Plugin)',
        uplink: '/Advanced_User/Website_Integration',
        ampimg: '/images/Search/AU_SearchThumb_WebsiteIntegration.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Advanced_User/">Für Entwickler</a></li><li><a href="/Advanced_User/Website_Integration/">Webseiten Integration</a></li><li><a href="/Advanced_User/Website_Integration/Cambozola/">Cambozola</a></li>',
      });
  });

advancedUserRouter.get('/Website_Integration/Open_IP_Camera_Manager', function(req, res) {
    res.render('./Advanced_User/Open_IP_Camera_Manager', {
        title: 'Open IP Camera Manager (PHP)',
        uplink: '/Advanced_User/Website_Integration',
        ampimg: '/images/Search/AU_SearchThumb_WebsiteIntegration.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Advanced_User/">Für Entwickler</a></li><li><a href="/Advanced_User/Website_Integration/">Webseiten Integration</a></li><li><a href="/Advanced_User/Website_Integration/Open_IP_Camera_Manager/">OIPCM</a></li>',
      });
  });

advancedUserRouter.get('/Website_Integration/HD_Camera_Integration', function(req, res) {
    res.render('./Advanced_User/HD_Camera_Integration', {
        title: 'HD Camera Webseiten Integration',
        uplink: '/Advanced_User/Website_Integration',
        ampimg: '/images/Search/AU_SearchThumb_WebsiteIntegration.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Advanced_User/">Für Entwickler</a></li><li><a href="/Advanced_User/Website_Integration/">Webseiten Integration</a></li><li><a href="/Advanced_User/Website_Integration/HD_Camera_Integration/">HD Kameras</a></li>',
      });
  });

advancedUserRouter.get('/CGI_Commands/', function(req, res) {
    res.render('./Advanced_User/CGI_Commands', {
        title: 'CGI Commands',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Für Entwickler</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li>',
      });
  });

advancedUserRouter.get('/CGI_Commands/VGA_Series_CGI_List', function(req, res) {
    res.render('./Advanced_User/VGA_Series_CGI_List', {
        title: 'VGA Series CGI List',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Für Entwickler</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/VGA_Series_CGI_List/">VGA Serie</a></li>',
      });
  });

advancedUserRouter.get('/Restore_WebUI/', function(req, res) {
    res.render('./Advanced_User/Restore_WebUI', {
        title: 'Restore your Camera after a faulty WebUI Upgrade',
        uplink: '/Advanced_User',
        ampimg: '/images/Search/AU_SearchThumb_ResetAfterWebUIError.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Advanced_User/">Für Entwickler</a></li><li><a href="/Advanced_User/Restore_WebUI/">Wiederherstellen der WebUI</a></li>',
      });
  });

advancedUserRouter.get('/Restore_Firmware/', function(req, res) {
    res.render('./Advanced_User/Restore_Firmware', {
        title: 'Restore your Camera after a faulty Firmware Upgrade',
        uplink: '/Advanced_User',
        ampimg: '/images/Search/AU_SearchThumb_ResetAfterFirmwareError.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Advanced_User/">Für Entwickler</a></li><li><a href="/Advanced_User/Restore_Firmware/">Wiederherstellen der Firmware</a></li>',
      });
  });

advancedUserRouter.get('/CCTV_vs_IP/', function(req, res) {
    res.render('./Advanced_User/CCTV_vs_IP', {
        title: 'Difference Between Analog And IP Cameras',
        uplink: '/Advanced_User',
        ampimg: '/images/Search/AU_SearchThumb_IPvsCCTV.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Advanced_User/">Für Entwickler</a></li><li><a href="/Advanced_User/CCTV_vs_IP/">CCTV vs IP</a></li>',
      });
  });

advancedUserRouter.get('/VPN_AVM_Fritzbox/', function(req, res) {
    res.render('./Advanced_User/VPN_AVM_Fritzbox_Windows', {
        title: 'VPN in AVM Fritzbox',
        uplink: '/Advanced_User',
        ampimg: '/images/Search/AU_SearchThumb_VPN.jpg',
        breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Advanced_User/">Für Entwickler</a></li><li><a href="/Advanced_User/VPN_AVM_Fritzbox/">VPN AVM Fritzbox</a></li>',
      });
  });



module.exports = advancedUserRouter;
