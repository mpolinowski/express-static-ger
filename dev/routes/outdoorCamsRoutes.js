var express = require('express');
var outdoorCamsRouter = express.Router();

outdoorCamsRouter.route('/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/');
});

outdoorCamsRouter.route('/IN-9008_HD/Safety_Warnings/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-9008_HD/Sicherheit_Hinweise/');
});

outdoorCamsRouter.route('/IN-9008_HD/Warranty/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-9008_HD/Garantie/');
});

outdoorCamsRouter.route('/IN-9008_HD/Video_Streaming/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-9008_HD/Video_Streaming/');
});

outdoorCamsRouter.route('/IN-9008_HD/Camera_Reset/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-9008_HD/Kamera_Reset/');
});

outdoorCamsRouter.route('/IN-9008_HD/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-9008_HD/');
});

outdoorCamsRouter.route('/IN-9008_HD/Nightvision_Graph/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-9008_Overview_Nightvision_Graph', {
          title: 'IN-9008 HD Nightvision Comparison',
        });
    });

outdoorCamsRouter.route('/IN-9008_HD/Angle_Graph/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-9008_Overview_Angle_Graph', {
          title: 'IN-9008 HD Angle of View Comparison',
        });
    });

outdoorCamsRouter.route('/IN-9008_HD/9008v5907/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-9008_Overview_9008v5907_Graph', {
          title: 'IN-9008 HD vs IN-5907 HD',
        });
    });

outdoorCamsRouter.route('/IN-9008_HD/9008v2905/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-9008_Overview_9008v2905_Graph', {
          title: 'IN-9008 HD vs IN-2905',
        });
    });

outdoorCamsRouter.route('/IN-9008_HD/Usermanual/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-9008_HD/Handbuch/');
});

outdoorCamsRouter.route('/IN-9008_HD/Product_Features/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-9008_HD/Produkt_Features/');
});

outdoorCamsRouter.route('/IN-9008_HD/Quick_Installation/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-9008_HD/Schnell_Installation/');
});

outdoorCamsRouter.route('/IN-9008_HD/Quick_Installation/PoE_or_WiFi/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-9008_HD/Schnell_Installation/PoE_oder_WiFi/');
});

outdoorCamsRouter.route('/IN-9008_HD/Quick_Installation/PoE_or_WiFi/Ethernet/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-9008_HD/Schnell_Installation/PoE_oder_WiFi/Ethernet/');
});

outdoorCamsRouter.route('/IN-9008_HD/Quick_Installation/PoE_or_WiFi/WPS/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-9008_HD/Schnell_Installation/PoE_oder_WiFi/WPS/');
});

outdoorCamsRouter.route('/IN-9008_HD/Quick_Installation/Ethernet/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-9008_HD/Schnell_Installation/Ethernet/');
});

outdoorCamsRouter.route('/IN-9008_HD/Quick_Installation/Ethernet_and_Audio-Out/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-9008_HD/Schnell_Installation/Ethernet_und_Audio-Out/');
});

outdoorCamsRouter.route('/IN-9008_HD/Lense_Adjustment/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-9008_HD/Objektiv_Justage/');
});

outdoorCamsRouter.route('/IN-9008_HD/Technical_Specifications/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-9008_HD/Technische_Spezifikationen/');
});

outdoorCamsRouter.route('/IN-9008_HD/Technical_Specifications/Power_Graph')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-9008_Tech_Specs_Power_Graph', {
          title: 'IN-9008 HD Power Consumption',
        });
    });

outdoorCamsRouter.route('/IN-9008_HD/Technical_Specifications/4-2mm_Lense_Graph')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-9008_Tech_Specs_4-2mm_Lense_Graph', {
          title: 'IN-9008 HD 4.2mm Wideangle Lense',
        });
    });

outdoorCamsRouter.route('/IN-9008_HD/Technical_Specifications/Image_Width_Graph')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-9008_Tech_Specs_Image_Width_Graph', {
          title: 'IN-9008 HD Image Width Comparison',
        });
    });


/* ###################################################### IN-7011 HD ###################################################### */


outdoorCamsRouter.route('/IN-7011_HD/Safety_Warnings/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-7011_HD/Sicherheit_Hinweise/');
});

outdoorCamsRouter.route('/IN-7011_HD/Warranty/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-7011_HD/Garantie/');
});

outdoorCamsRouter.route('/IN-7011_HD/Video_Streaming/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-7011_HD/Video_Streaming/');
});

outdoorCamsRouter.route('/IN-7011_HD/Camera_Reset/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-7011_HD/Kamera_Reset/');
});

outdoorCamsRouter.route('/IN-7011_HD/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-7011_HD/');
});

outdoorCamsRouter.route('/IN-7011_HD/Nightvision_Graph/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-7011_Overview_Nightvision_Graph', {
          title: 'IN-7011 HD Nightvision Comparison',
        });
    });

outdoorCamsRouter.route('/IN-7011_HD/Angle_Graph/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-7011_Overview_Angle_Graph', {
          title: 'IN-7011 HD Angle of View Comparison',
        });
    });

outdoorCamsRouter.route('/IN-7011_HD/7011v9008/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-7011_Overview_7011v9008_Graph', {
          title: 'IN-7011 HD vs IN-9008 HD',
        });
    });

outdoorCamsRouter.route('/IN-7011_HD/7011v2905/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-7011_Overview_7011v2905_Graph', {
          title: 'IN-7011 HD vs IN-2905',
        });
    });

outdoorCamsRouter.route('/IN-7011_HD/Usermanual/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-7011_HD/Handbuch/');
});

outdoorCamsRouter.route('/IN-7011_HD/Product_Features/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-7011_HD/Produkt_Features/');
});

outdoorCamsRouter.route('/IN-7011_HD/Point2Point/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-7011_HD/Point2Point/');
});

outdoorCamsRouter.route('/IN-7011_HD/Quick_Installation/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-7011_HD/Schnell_Installation/');
});

outdoorCamsRouter.route('/IN-7011_HD/Lense_Adjustment/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-7011_HD/Objektiv_Justage/');
});

outdoorCamsRouter.route('/IN-7011_HD/Technical_Specifications/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-7011_HD/Technische_Spezifikationen/');
});


/* ###################################################### IN-5907 HD ###################################################### */


outdoorCamsRouter.route('/IN-5907_HD/Safety_Warnings/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-5907_HD/Sicherheit_Hinweise/');
});

outdoorCamsRouter.route('/IN-5907_HD/Warranty/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-5907_HD/Garantie/');
});

outdoorCamsRouter.route('/IN-5907_HD/Video_Streaming/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-5907_HD/Video_Streaming/');
});

outdoorCamsRouter.route('/IN-5907_HD/Camera_Reset/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-5907_HD/Kamera_Reset/');
});

outdoorCamsRouter.route('/IN-5907_HD/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-5907_HD/');
});

outdoorCamsRouter.route('/IN-5907_HD/Nightvision_Graph/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-5907_Overview_Nightvision_Graph', {
          title: 'IN-5907 HD Nightvision Comparison',
        });
    });

outdoorCamsRouter.route('/IN-5907_HD/Angle_Graph/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-5907_Overview_Angle_Graph', {
          title: 'IN-5907 HD Angle of View Comparison',
        });
    });

outdoorCamsRouter.route('/IN-5907_HD/5907v9008/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-5907_Overview_5907v9008_Graph', {
          title: 'IN-5907 HD vs IN-9008 HD',
        });
    });

outdoorCamsRouter.route('/IN-5907_HD/5907v2905/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-5907_Overview_5907v2905_Graph', {
          title: 'IN-5907 HD vs IN-2905',
        });
    });

outdoorCamsRouter.route('/IN-5907_HD/Usermanual/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-5907_HD/Handbuch/');
});

outdoorCamsRouter.route('/IN-5907_HD/Product_Features/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-5907_HD/Produkt_Features/');
});

outdoorCamsRouter.route('/IN-5907_HD/Point2Point/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-5907_HD/Point2Point/');
});

outdoorCamsRouter.route('/IN-5907_HD/Quick_Installation/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-5907_HD/Schnell_Installation/');
});

outdoorCamsRouter.route('/IN-5907_HD/Lense_Adjustment/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-5907_HD/Objektiv_Justage/');
});

outdoorCamsRouter.route('/IN-5907_HD/Technical_Specifications/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-5907_HD/Technische_Spezifikationen/');
});


/* ###################################################### IN-5905 HD ###################################################### */


outdoorCamsRouter.route('/IN-5905_HD/Safety_Warnings/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-5905_HD/Sicherheit_Hinweise/');
});

outdoorCamsRouter.route('/IN-5905_HD/Warranty/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-5905_HD/Garantie/');
});

outdoorCamsRouter.route('/IN-5905_HD/Video_Streaming/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-5905_HD/Video_Streaming/');
});

outdoorCamsRouter.route('/IN-5905_HD/Camera_Reset/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-5905_HD/Kamera_Reset/');
});

outdoorCamsRouter.route('/IN-5905_HD/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-5905_HD/');
});

outdoorCamsRouter.route('/IN-5905_HD/Nightvision_Graph/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-5905_Overview_Nightvision_Graph', {
          title: 'IN-5905 HD Nightvision Comparison',
        });
    });

outdoorCamsRouter.route('/IN-5905_HD/Angle_Graph/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-5905_Overview_Angle_Graph', {
          title: 'IN-5905 HD Angle of View Comparison',
        });
    });

outdoorCamsRouter.route('/IN-5905_HD/5905v9008/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-5905_Overview_5905v9008_Graph', {
          title: 'IN-5905 HD vs IN-9008 HD',
        });
    });

outdoorCamsRouter.route('/IN-5905_HD/5905v2905/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/IN-5905_Overview_5905v2905_Graph', {
          title: 'IN-5905 HD vs IN-2905',
        });
    });

outdoorCamsRouter.route('/IN-5905_HD/Usermanual/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-5905_HD/Handbuch/');
});

outdoorCamsRouter.route('/IN-5905_HD/Product_Features/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-5905_HD/Produkt_Features/');
});

outdoorCamsRouter.route('/IN-5905_HD/Point2Point/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-5905_HD/Point2Point/');
});

outdoorCamsRouter.route('/IN-5905_HD/Quick_Installation/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-5905_HD/Schnell_Installation/');
});

outdoorCamsRouter.route('/IN-5905_HD/Lense_Adjustment/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-5905_HD/Objektiv_Justage/');
});

outdoorCamsRouter.route('/IN-5905_HD/Technical_Specifications/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-5905_HD/Technische_Spezifikationen/');
});


/* ###################################################### VGA ###################################################### */


outdoorCamsRouter.route('/IN-4011/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-4011/');
});

outdoorCamsRouter.route('/IN-4011/Technical_Specifications/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-4011/Technische_Spezifikationen/');
});

outdoorCamsRouter.route('/IN-4010_V2/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-4010_V2/');
});

outdoorCamsRouter.route('/IN-4010_V2/Technical_Specifications/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-4010_V2/Technische_Spezifikationen/');
});

outdoorCamsRouter.route('/IN-2908/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-2908/');
});

outdoorCamsRouter.route('/IN-2908/Technical_Specifications/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-2908/Technische_Spezifikationen/');
});

outdoorCamsRouter.route('/IN-2905_V2/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-2905_V2/');
});

outdoorCamsRouter.route('/IN-2905_V2/Technical_Specifications/')
  .get(function(req, res) {
    res.status(301).redirect('/Aussenkameras/IN-2905_V2/Technische_Spezifikationen/');
});

module.exports = outdoorCamsRouter;
