var express = require('express');
var downloadsRouter = express.Router();

downloadsRouter.get('/', function(req, res) {
    res.render('./Downloads/Downloads', {
        title: 'Downloadbereich',
        ampimg: '/images/Search/QI_SearchThumb_WebUI.jpg',
        uplink: '/Downloads',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li>',
      });
  });





module.exports = downloadsRouter;
