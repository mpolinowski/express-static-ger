var express = require('express');
var downloadsRouter = express.Router();
var appdata = require('../views/_partials/data/cameras.json');

/* GET Internet_Access page. */
downloadsRouter.get('/', function(req, res) {

    var mdPicture = []; /* Get all Pictures from gallery.json for the gallery */
    var mdPictureAlt = [];
    var mdHref = [];
    appdata.articles.forEach(function(item) {
        mdPicture = mdPicture.concat(item.mdPic);
        mdPictureAlt = mdPictureAlt.concat(item.mdPicAlt);
        mdHref = mdHref.concat(item.mdUrl);
      });

    res.render('./Downloads/Downloads', {
        title: 'Downloadbereich',
        mdPic: mdPicture,
        mdPicAlt: mdPictureAlt,
        mdUrl: mdHref,
      });
  });

downloadsRouter.get('/Downloads/', function(req, res) {
    res.render('./Downloads/Downloads', {
        title: 'Downloadbereich',
        uplink: '/Downloads',
      });
  });





module.exports = downloadsRouter;
