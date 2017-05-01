var express = require('express');
var indoorCamsRouter = express.Router();

indoorCamsRouter.route('/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/');
});

/* ###################################################### IN-8015 HD ###################################################### */

indoorCamsRouter.route('/IN-8015_HD/Safety_Warnings/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-8015_HD/Sicherheit_Hinweise/');
});

indoorCamsRouter.route('/IN-8015_HD/Warranty/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-8015_HD/Garantie/');
});

indoorCamsRouter.route('/IN-8015_HD/Video_Streaming/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-8015_HD/Video_Streaming/');
});

indoorCamsRouter.route('/IN-8015_HD/Camera_Reset/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-8015_HD/Kamera_Reset/');
});

indoorCamsRouter.route('/IN-8015_HD/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-8015_HD/');
});

indoorCamsRouter.route('/IN-8015_HD/Nightvision_Graph/')
  .get(function(req, res) {
      res.render('./Indoor_Cams/IN-8015_Overview_Nightvision_Graph', {
          title: 'IN-8015 HD Nightvision Comparison',
        });
    });

indoorCamsRouter.route('/IN-8015_HD/Angle_Graph/')
  .get(function(req, res) {
      res.render('./Indoor_Cams/IN-8015_Overview_Angle_Graph', {
          title: 'IN-8015 HD Angle of View Comparison',
        });
    });

indoorCamsRouter.route('/IN-8015_HD/8015v6012/')
  .get(function(req, res) {
      res.render('./Indoor_Cams/IN-8015_Overview_8015v6012_Graph', {
          title: 'IN-8015 HD vs IN-6012 HD',
        });
    });

indoorCamsRouter.route('/IN-8015_HD/8015v3011/')
  .get(function(req, res) {
      res.render('./Indoor_Cams/IN-8015_Overview_8015v3011_Graph', {
          title: 'IN-8015 HD vs IN-3011',
        });
    });

indoorCamsRouter.route('/IN-8015_HD/Usermanual/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-8015_HD/Handbuch/');
});

indoorCamsRouter.route('/IN-8015_HD/Product_Features/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-8015_HD/Produkt_Features/');
});

indoorCamsRouter.route('/IN-8015_HD/Point2Point/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-8015_HD/Point2Point/');
});

indoorCamsRouter.route('/IN-8015_HD/Quick_Installation/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-8015_HD/Schnell_Installation/');
});

indoorCamsRouter.route('/IN-8015_HD/Lense_Adjustment/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-8015_HD/Objektivjustage/');
});

indoorCamsRouter.route('/IN-8015_HD/Technical_Specifications/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-8015_HD/Technische_Spezifikationen/');
});

indoorCamsRouter.route('')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-8015_HD/Technische_Spezifikationen/');
});

indoorCamsRouter.route('/IN-8015_HD/Technical_Specifications/Power_Graph')
  .get(function(req, res) {
      res.render('./Indoor_Cams/IN-8015_Tech_Specs_Power_Graph', {
          title: 'IN-8015 HD Power Consumption',
        });
    });

indoorCamsRouter.route('/IN-8015_HD/Technical_Specifications/4-2mm_Lense_Graph')
  .get(function(req, res) {
      res.render('./Indoor_Cams/IN-8015_Tech_Specs_4-2mm_Lense_Graph', {
          title: 'IN-8015 HD 4.2mm Wideangle Lense',
        });
    });

indoorCamsRouter.route('/IN-8015_HD/Technical_Specifications/Image_Width_Graph')
  .get(function(req, res) {
      res.render('./Indoor_Cams/IN-8015_Tech_Specs_Image_Width_Graph', {
          title: 'IN-8015 HD Image Width Comparison',
        });
    });


/* ###################################################### IN-6014 HD ###################################################### */

indoorCamsRouter.route('/IN-6014_HD/Safety_Warnings/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-6014_HD/Sicherheit_Hinweise/');
});

indoorCamsRouter.route('/IN-6014_HD/Warranty/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-6014_HD/Garantie/');
});

indoorCamsRouter.route('/IN-6014_HD/Video_Streaming/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-6014_HD/Video_Streaming/');
});

indoorCamsRouter.route('/IN-6014_HD/Camera_Reset/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-6014_HD/Kamera_Reset/');
});

indoorCamsRouter.route('/IN-6014_HD/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-6014_HD/');
});

indoorCamsRouter.route('/IN-6014_HD/Nightvision_Graph/')
  .get(function(req, res) {
      res.render('./Indoor_Cams/IN-6014_Overview_Nightvision_Graph', {
          title: 'IN-6014 HD Nightvision Comparison',
        });
    });

indoorCamsRouter.route('/IN-6014_HD/Angle_Graph/')
  .get(function(req, res) {
      res.render('./Indoor_Cams/IN-6014_Overview_Angle_Graph', {
          title: 'IN-6014 HD Angle of View Comparison',
        });
    });

indoorCamsRouter.route('/IN-6014_HD/8015v6012/')
  .get(function(req, res) {
      res.render('./Indoor_Cams/IN-6014_Overview_6014v8015_Graph', {
          title: 'IN-6014 HD vs IN-8015 HD',
        });
    });

indoorCamsRouter.route('/IN-6014_HD/8015v3011/')
  .get(function(req, res) {
      res.render('./Indoor_Cams/IN-6014_Overview_6014v3011_Graph', {
          title: 'IN-6014 HD vs IN-3011',
        });
    });

indoorCamsRouter.route('/IN-6014_HD/Usermanual/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-6014_HD/Handbuch/');
});

indoorCamsRouter.route('/IN-6014_HD/Product_Features/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-6014_HD/Produkt_Features/');
});

indoorCamsRouter.route('/IN-6014_HD/Point2Point/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-6014_HD/Point2Point/');
});

indoorCamsRouter.route('/IN-6014_HD/Quick_Installation/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-6014_HD/Schnell_Installation/');
});

indoorCamsRouter.route('/IN-6014_HD/Lense_Adjustment/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-6014_HD/Objektivjustage/');
});

indoorCamsRouter.route('/IN-6014_HD/Technical_Specifications/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-6014_HD/Technische_Spezifikationen/');
});

/* ###################################################### IN-6012 HD ###################################################### */

indoorCamsRouter.route('/IN-6012_HD/Safety_Warnings/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-6012_HD/Sicherheit_Hinweise/');
});

indoorCamsRouter.route('/IN-6012_HD/Warranty/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-6012_HD/Garantie/');
});

indoorCamsRouter.route('/IN-6012_HD/Video_Streaming/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-6012_HD/Video_Streaming/');
});

indoorCamsRouter.route('/IN-6012_HD/Camera_Reset/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-6012_HD/Kamera_Reset/');
});

indoorCamsRouter.route('/IN-6012_HD/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-6012_HD/');
});

indoorCamsRouter.route('/IN-6012_HD/Usermanual/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-6012_HD/Handbuch/');
});

indoorCamsRouter.route('/IN-6012_HD/Product_Features/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-6012_HD/Produkt_Features/');
});

indoorCamsRouter.route('/IN-6012_HD/Usermanual/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-6012_HD/Handbuch/');
});

indoorCamsRouter.route('/IN-6012_HD/Point2Point/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-6012_HD/Point2Point/');
});

indoorCamsRouter.route('/IN-6012_HD/Quick_Installation/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-6012_HD/Schnell_Installation/');
});

indoorCamsRouter.route('/IN-6012_HD/Lense_Adjustment/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-6012_HD/Objektivjustage/');
});

indoorCamsRouter.route('/IN-6012_HD/Technical_Specifications/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-6012_HD/Technische_Spezifikationen/');
});

/* ###################################################### IN-6001 HD ###################################################### */

indoorCamsRouter.route('/IN-6001_HD/Safety_Warnings/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-6001_HD/Sicherheit_Hinweise/');
});

indoorCamsRouter.route('/IN-6001_HD/Warranty/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-6001_HD/Garantie/');
});

indoorCamsRouter.route('/IN-6001_HD/Video_Streaming/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-6001_HD/Video_Streaming/');
});

indoorCamsRouter.route('/IN-6001_HD/Camera_Reset/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-6001_HD/Kamera_Reset/');
});

indoorCamsRouter.route('/IN-6001_HD/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-6001_HD/');
});

indoorCamsRouter.route('/IN-6001_HD/Usermanual/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-6001_HD/Handbuch/');
});

indoorCamsRouter.route('/IN-6001_HD/Product_Features/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-6001_HD/Produkt_Features/');
});

indoorCamsRouter.route('/IN-6001_HD/Point2Point/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-6001_HD/Point2Point/');
});

indoorCamsRouter.route('/IN-6001_HD/Quick_Installation/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-6001_HD/Schnell_Installation/');
});

indoorCamsRouter.route('/IN-6001_HD/Lense_Adjustment/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-6001_HD/Objektivjustage/');
});

indoorCamsRouter.route('/IN-6001_HD/Technical_Specifications/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-6001_HD/Technische_Spezifikationen/');
});

/* ###################################################### VGA ###################################################### */

indoorCamsRouter.route('/IN-3011/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-3011/');
});

indoorCamsRouter.route('/IN-3011/Technical_Specifications/')
  .get(function(req, res) {
    res.status(301).redirect('/Innenkameras/IN-3011/Technische_Spezifikationen/');
});

module.exports = indoorCamsRouter;
