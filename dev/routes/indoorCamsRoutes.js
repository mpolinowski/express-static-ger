var express = require('express');
var indoorCamsRouter = express.Router();
var appdata = require('../views/_partials/data/cameras.json');


/* ****************************************** GET /Indoor_Cameras ****************************************** */


indoorCamsRouter.get('/', function(req, res) {

    /* Get all Pictures from cameras.json für    the gallery */

    var indoorPicture = [];
    var indoorPictureAlt = [];
    var indoorHref = [];
    appdata.articles.forEach(function(item) {
        indoorPicture = indoorPicture.concat(item.indoorPic);
        indoorPictureAlt = indoorPictureAlt.concat(item.indoorPicAlt);
        indoorHref = indoorHref.concat(item.indoorUrl);
      });

    res.render('./Indoor_Cams/Indoor_Cameras', {
        title: 'INSTAR IP Innenkameras',
        indoorPic: indoorPicture,
        indoorPicAlt: indoorPictureAlt,
        indoorUrl: indoorHref,
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products/">Produkte</a></li><li class="breadcrumb-item"><a href="/Indoor_Cameras/">Innenkameras</a></li>',
      });
  });


/* ****************************************** GET /IN-8015 HD ****************************************** */


indoorCamsRouter.route('/IN-8015_HD/Safety_Warnings')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-8015 HD Sicherheitshinweise',
          model: 'IN-8015_HD',
		  type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          breadcrumbs: '<li><a href="/Indoor_Cameras">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Usermanual/">Handbuch</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Safety_Warnings/">Sicherheitshinweise</a></li>',
        });
    });

indoorCamsRouter.route('/IN-8015_HD/Warranty')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-8015 HD Warranty & Disposal',
          model: 'IN-8015_HD',
		  type: 'Indoor',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          breadcrumbs: '<li><a href="/Indoor_Cameras">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Usermanual/">Handbuch</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Warranty/">Garantie</a></li>',
        });
    });

indoorCamsRouter.route('/IN-8015_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-8015 HD Video Streaming',
          model: 'IN-8015_HD',
		  type: 'Indoor',
		  uplink: '/Indoor_Cameras/IN-8015_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          breadcrumbs: '<li><a href="/Indoor_Cameras">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Usermanual/">Handbuch</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Video_Streaming/">Video Streaming</a></li>',
        });
    });

indoorCamsRouter.route('/IN-8015_HD/Camera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-8015 HD Hardware Reset',
          model: 'IN-8015_HD',
		  type: 'Indoor',
		  uplink: '/Indoor_Cameras/IN-8015_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          breadcrumbs: '<li><a href="/Indoor_Cameras">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Usermanual/">Handbuch</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Camera_Reset/">Kamera Reset</a></li>',
        });
    });


indoorCamsRouter.route('/IN-8015_HD')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-8015_Overview', {
      title: 'IN-8015 HD Overview',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products">Produkte</a></li><li class="breadcrumb-item"><a href="/Indoor_Cameras/">Innenkameras</a></li><li class="breadcrumb-item"><a href="/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li>',
    });
});

indoorCamsRouter.route('/IN-8015_HD/Usermanual')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-8015_Usermanual', {
      title: 'IN-8015 HD Usermanual',
	  uplink: '/Indoor_Cameras/IN-8015_HD/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      breadcrumbs: '<li><a href="/Products">Produkte</a></li><li><a href="/Indoor_Cameras/">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Usermanual/">Handbuch</a></li>',
    });
});

indoorCamsRouter.route('/IN-8015_HD/Product_Features')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-8015_Product_Features', {
      title: 'IN-8015 HD Product Features',
	  uplink: '/Indoor_Cameras/IN-8015_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Usermanual/">Handbuch</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Product_Features/">Produkt Features</a></li>',
    });
});

indoorCamsRouter.route('/IN-8015_HD/Point2Point')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-8015_Point2Point', {
      title: 'IN-8015 HD Point 2 Point',
	  uplink: '/Indoor_Cameras/IN-8015_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Usermanual/">Handbuch</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Point2Point/">Point2Point</a></li>',
    });
});

indoorCamsRouter.route('/IN-8015_HD/Quick_Installation')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-8015_Quick_Installation', {
      title: 'IN-8015 HD Quick Installation',
	  uplink: '/Indoor_Cameras/IN-8015_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Usermanual/">Handbuch</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Quick_Installation/">Schnellinstallation</a></li>',
    });
});

indoorCamsRouter.route('/IN-8015_HD/Lense_Adjustment')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-8015_Lense_Adjustment', {
      title: 'IN-8015 HD Lense Adjustment',
	  uplink: '/Indoor_Cameras/IN-8015_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Usermanual/">Handbuch</a></li><li><a href="/Indoor_Cameras/IN-8015_HD/Lense_Adjustment/">Objektivjustage</a></li>',
    });
});

indoorCamsRouter.route('/IN-8015_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-8015_Tech_Specs', {
      title: 'IN-8015 HD Technical Specifications',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/Products">Produkte</a></li><li class="breadcrumb-item"><a href="/Indoor_Cameras/">Innenkameras</a></li><li class="breadcrumb-item"><a href="/Indoor_Cameras/IN-8015_HD/">IN-8015 HD</a></li><li class="breadcrumb-item"><a href="/Indoor_Cameras/IN-8015_HD/Technical_Specifications/">Technische Spezifikationen</a></li>',
    });
});


/* ****************************************** GET /IN-6014 HD ****************************************** */


indoorCamsRouter.route('/IN-6014_HD/Safety_Warnings')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-6014 HD Sicherheitshinweise',
          model: 'IN-6014_HD',
		  type: 'Indoor',
          uplink: '/Indoor_Cameras/IN-6014_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          breadcrumbs: '<li><a href="/Indoor_Cameras">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Usermanual/">Handbuch</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Safety_Warnings/">Sicherheitshinweise</a></li>',
        });
    });

indoorCamsRouter.route('/IN-6014_HD/Warranty')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-6014 HD Garantie & Entsorgung',
          model: 'IN-6014_HD',
		  type: 'Indoor',
          uplink: '/Indoor_Cameras/IN-6014_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          breadcrumbs: '<li><a href="/Indoor_Cameras">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Usermanual/">Handbuch</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Safety_Warnings/">Sicherheitshinweise</a></li>',
        });
    });

indoorCamsRouter.route('/IN-6014_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-6014 HD Video Streaming',
          model: 'IN-6014_HD',
		  type: 'Indoor',
          uplink: '/Indoor_Cameras/IN-6014_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          breadcrumbs: '<li><a href="/Indoor_Cameras">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Usermanual/">Handbuch</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Video_Streaming/">Video Streaming</a></li>',
        });
    });

indoorCamsRouter.route('/IN-6014_HD/Camera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-6014 HD Hardware Reset',
          model: 'IN-6014_HD',
		  type: 'Indoor',
          uplink: '/Indoor_Cameras/IN-6014_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          breadcrumbs: '<li><a href="/Indoor_Cameras">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Usermanual/">Handbuch</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Camera_Reset/">Kamera Reset</a></li>',
        });
    });

indoorCamsRouter.route('/IN-6014_HD')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6014_Overview', {
      title: 'IN-6014 HD Überblick',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products">Produkte</a></li><li class="breadcrumb-item"><a href="/Indoor_Cameras/">Innenkameras</a></li><li class="breadcrumb-item"><a href="/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li>',
    });
});

indoorCamsRouter.route('/IN-6014_HD/Usermanual')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6014_Usermanual', {
      title: 'IN-6014 HD Handbuch',
      uplink: '/Indoor_Cameras/IN-6014_HD/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      breadcrumbs: '<li><a href="/Products">Produkte</a></li><li><a href="/Indoor_Cameras/">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Usermanual/">Handbuch</a></li>',
    });
});

indoorCamsRouter.route('/IN-6014_HD/Product_Features')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6014_Product_Features', {
      title: 'IN-6014 HD Produktfeatures',
      uplink: '/Indoor_Cameras/IN-6014_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Usermanual/">Handbuch</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Product_Features/">Produkt Features</a></li>',
    });
});

indoorCamsRouter.route('/IN-6014_HD/Point2Point')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6014_Point2Point', {
      title: 'IN-6014 HD Point 2 Point',
      uplink: '/Indoor_Cameras/IN-6014_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Usermanual/">Handbuch</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Point2Point/">Point2Point</a></li>',
    });
});

indoorCamsRouter.route('/IN-6014_HD/Quick_Installation')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6014_Quick_Installation', {
      title: 'IN-6014 HD Schnellinstallation',
      uplink: '/Indoor_Cameras/IN-6014_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Usermanual/">Handbuch</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Quick_Installation/">Schnellinstallation</a></li>',
    });
});

indoorCamsRouter.route('/IN-6014_HD/Lense_Adjustment')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6014_Lense_Adjustment', {
      title: 'IN-6014 HD Linse einstellen',
      uplink: '/Indoor_Cameras/IN-6014_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Usermanual/">Handbuch</a></li><li><a href="/Indoor_Cameras/IN-6014_HD/Lense_Adjustment/">Objektivjustage</a></li>',
    });
});

indoorCamsRouter.route('/IN-6014_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6014_Tech_Specs', {
      title: 'IN-6014 HD Technische Spezifikationen',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/Products">Produkte</a></li><li class="breadcrumb-item"><a href="/Indoor_Cameras/">Innenkameras</a></li><li class="breadcrumb-item"><a href="/Indoor_Cameras/IN-6014_HD/">IN-6014 HD</a></li><li class="breadcrumb-item"><a href="/Indoor_Cameras/IN-6014_HD/Technical_Specifications/">Technische Spezifikationen</a></li>',
    });
});


/* ****************************************** GET /IN-6012 HD ****************************************** */


indoorCamsRouter.route('/IN-6012_HD/Safety_Warnings')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-6012 HD Sicherheitshinweise',
          model: 'IN-6012_HD',
		  type: 'Indoor',
          uplink: '/Indoor_Cameras/IN-6012_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          breadcrumbs: '<li><a href="/Indoor_Cameras">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Usermanual/">Handbuch</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Safety_Warnings/">Sicherheitshinweise</a></li>',
        });
    });

indoorCamsRouter.route('/IN-6012_HD/Warranty')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-6012 HD Garantie & Entsorgung',
          model: 'IN-6012_HD',
		  type: 'Indoor',
          uplink: '/Indoor_Cameras/IN-6012_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          breadcrumbs: '<li><a href="/Indoor_Cameras">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Usermanual/">Handbuch</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Warranty/">Garantie</a></li>',
        });
    });

indoorCamsRouter.route('/IN-6012_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-6012 HD Video Streaming',
          model: 'IN-6012_HD',
		  type: 'Indoor',
          uplink: '/Indoor_Cameras/IN-6012_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          breadcrumbs: '<li><a href="/Indoor_Cameras">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Usermanual/">Handbuch</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Video_Streaming/">Video Streaming</a></li>',
        });
    });

indoorCamsRouter.route('/IN-6012_HD/Camera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-6012 HD Hardware Reset',
          model: 'IN-6012_HD',
		  type: 'Indoor',
          uplink: '/Indoor_Cameras/IN-6012_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          breadcrumbs: '<li><a href="/Indoor_Cameras">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Usermanual/">Handbuch</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Camera_Reset/">Kamera Reset</a></li>',
        });
    });

indoorCamsRouter.route('/IN-6012_HD')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6012_Overview', {
      title: 'IN-6012 HD Überblick',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products">Produkte</a></li><li class="breadcrumb-item"><a href="/Indoor_Cameras/">Innenkameras</a></li><li class="breadcrumb-item"><a href="/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li>',
    });
});

indoorCamsRouter.route('/IN-6012_HD/Usermanual')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6012_Usermanual', {
      title: 'IN-6012 HD Handbuch',
      uplink: '/Indoor_Cameras/IN-6012_HD/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      breadcrumbs: '<li><a href="/Products">Produkte</a></li><li><a href="/Indoor_Cameras/">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Usermanual/">Handbuch</a></li>',
    });
});

indoorCamsRouter.route('/IN-6012_HD/Product_Features')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6012_Product_Features', {
      title: 'IN-6012 HD Produktfeatures',
      uplink: '/Indoor_Cameras/IN-6012_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Usermanual/">Handbuch</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Product_Features/">Produkt Features</a></li>',
    });
});

indoorCamsRouter.route('/IN-6012_HD/Point2Point')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6012_Point2Point', {
      title: 'IN-6012 HD Point 2 Point',
      uplink: '/Indoor_Cameras/IN-6012_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Usermanual/">Handbuch</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Point2Point/">Point2Point</a></li>',
    });
});

indoorCamsRouter.route('/IN-6012_HD/Quick_Installation')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6012_Quick_Installation', {
      title: 'IN-6012 HD Schnellinstallation',
      uplink: '/Indoor_Cameras/IN-6012_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Usermanual/">Handbuch</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Quick_Installation/">Schnellinstallation</a></li>',
    });
});

indoorCamsRouter.route('/IN-6012_HD/Lense_Adjustment')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6012_Lense_Adjustment', {
      title: 'IN-6012 HD Linse einstellen',
      uplink: '/Indoor_Cameras/IN-6012_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Usermanual/">Handbuch</a></li><li><a href="/Indoor_Cameras/IN-6012_HD/Quick_Installation/">Schnellinstallation</a></li>',
    });
});

indoorCamsRouter.route('/IN-6012_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6012_Tech_Specs', {
      title: 'IN-6012 HD Technische Spezifikationen',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/Products">Produkte</a></li><li class="breadcrumb-item"><a href="/Indoor_Cameras/">Innenkameras</a></li><li class="breadcrumb-item"><a href="/Indoor_Cameras/IN-6012_HD/">IN-6012 HD</a></li><li class="breadcrumb-item"><a href="/Indoor_Cameras/IN-6012_HD/Technical_Specifications/">Technische Spezifikationen</a></li>',
    });
});


/* ****************************************** GET /IN-6001 HD ****************************************** */


indoorCamsRouter.route('/IN-6001_HD/Safety_Warnings')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-6001 HD Sicherheitshinweise',
          model: 'IN-6001_HD',
		  type: 'Indoor',
          uplink: '/Indoor_Cameras/IN-6001_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          breadcrumbs: '<li><a href="/Indoor_Cameras">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Usermanual/">Handbuch</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Safety_Warnings/">Sicherheitshinweise</a></li>',
        });
    });

indoorCamsRouter.route('/IN-6001_HD/Warranty')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-6001 HD Garantie & Entsorgung',
          model: 'IN-6001_HD',
		  type: 'Indoor',
          uplink: '/Indoor_Cameras/IN-6001_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          breadcrumbs: '<li><a href="/Indoor_Cameras">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Usermanual/">Handbuch</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Warranty/">Garantie</a></li>',
        });
    });

indoorCamsRouter.route('/IN-6001_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-6001 HD Video Streaming',
          model: 'IN-6001_HD',
		  type: 'Indoor',
          uplink: '/Indoor_Cameras/IN-6001_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          breadcrumbs: '<li><a href="/Indoor_Cameras">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Usermanual/">Handbuch</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Video_Streaming/">Video Streaming</a></li>',
        });
    });

indoorCamsRouter.route('/IN-6001_HD/Camera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-6001 HD Hardware Reset',
          model: 'IN-6001_HD',
		  type: 'Indoor',
          uplink: '/Indoor_Cameras/IN-6001_HD/Usermanual/',
          ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
          breadcrumbs: '<li><a href="/Indoor_Cameras">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Usermanual/">Handbuch</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Camera_Reset/">Kamera Reset</a></li>',
        });
    });

indoorCamsRouter.route('/IN-6001_HD')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6001_Overview', {
      title: 'IN-6001 HD Überblick',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products">Produkte</a></li><li class="breadcrumb-item"><a href="/Indoor_Cameras/">Innenkameras</a></li><li class="breadcrumb-item"><a href="/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li>',
    });
});

indoorCamsRouter.route('/IN-6001_HD/Usermanual')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6001_Usermanual', {
      title: 'IN-6001 HD Handbuch',
      uplink: '/Indoor_Cameras/IN-6001_HD/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      breadcrumbs: '<li><a href="/Products">Produkte</a></li><li><a href="/Indoor_Cameras/">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Usermanual/">Handbuch</a></li>',
    });
});

indoorCamsRouter.route('/IN-6001_HD/Product_Features')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6001_Product_Features', {
      title: 'IN-6001 HD Produktfeatures',
      uplink: '/Indoor_Cameras/IN-6001_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Usermanual/">Handbuch</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Product_Features/">Produkt Features</a></li>',
    });
});

indoorCamsRouter.route('/IN-6001_HD/Point2Point')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6001_Point2Point', {
      title: 'IN-6001 HD Point 2 Point',
      uplink: '/Indoor_Cameras/IN-6001_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Usermanual/">Handbuch</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Point2Point/">Point2Point</a></li>',
    });
});

indoorCamsRouter.route('/IN-6001_HD/Quick_Installation')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6001_Quick_Installation', {
      title: 'IN-6001 HD Schnellinstallation',
      uplink: '/Indoor_Cameras/IN-6001_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Usermanual/">Handbuch</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Quick_Installation/">Schnellinstallation</a></li>',
    });
});

indoorCamsRouter.route('/IN-6001_HD/Lense_Adjustment')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6001_Lense_Adjustment', {
      title: 'IN-6001 HD Linse einstellen',
      uplink: '/Indoor_Cameras/IN-6001_HD/Usermanual/',
      ampimg: '/images/Search/P_SearchThumb_Indoor_Cameras.jpg',
      breadcrumbs: '<li><a href="/Indoor_Cameras/">Innenkameras</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Usermanual/">Handbuch</a></li><li><a href="/Indoor_Cameras/IN-6001_HD/Quick_Installation/">Schnellinstallation</a></li>',
    });
});

indoorCamsRouter.route('/IN-6001_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-6001_Tech_Specs', {
      title: 'IN-6001 HD Technische Spezifikationen',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/Products">Produkte</a></li><li class="breadcrumb-item"><a href="/Indoor_Cameras/">Innenkameras</a></li><li class="breadcrumb-item"><a href="/Indoor_Cameras/IN-6001_HD/">IN-6001 HD</a></li><li class="breadcrumb-item"><a href="/Indoor_Cameras/IN-6001_HD/Technical_Specifications/">Technische Spezifikationen</a></li>',
    });
});


/* ****************************************** GET /VGA ****************************************** */


indoorCamsRouter.route('/IN-3011')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-3011_Overview', {
      title: 'IN-3011 Overview',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products">Produkte</a></li><li class="breadcrumb-item"><a href="/Indoor_Cameras/">Innenkameras</a></li><li class="breadcrumb-item"><a href="/Indoor_Cameras/IN-3011/">IN-3011</a></li>',
    });
});

indoorCamsRouter.route('/IN-3011/Technical_Specifications')
.get(function(req, res) {
  res.render('./Indoor_Cams/IN-3011_Tech_Specs', {
      title: 'IN-3011 Technische Spezifikationen',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Products">Produkte</a></li><li class="breadcrumb-item"><a href="/Indoor_Cameras/">Innenkameras</a></li><li class="breadcrumb-item"><a href="/Indoor_Cameras/IN-3011/">IN-3011</a></li><li class="breadcrumb-item"><a href="/Indoor_Cameras/IN-3011/Technical_Specifications/">Technische Spezifikationen</a></li>',
    });
});




module.exports = indoorCamsRouter;
