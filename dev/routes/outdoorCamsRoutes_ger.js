var express = require('express');
var outdoorCamsRouter = express.Router();

/* ****************************************** GET /Aussenkameras ****************************************** */

outdoorCamsRouter.route('/')
  .get(function(req, res) {
      res.render('./Outdoor_Cams/Outdoor_Cameras', {
          title: 'INSTAR IP Aussenkameras',
          model: '9008',
          series: '1080p',
		      type: 'Outdoor',
          ampimg: '/images/Search/P_SearchThumb_Outdoor_Cameras.jpg',
          headline: 'INSTAR IP Aussenkameras',
          breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Products">Produkte</a></li><li><a href="/Aussenkameras">Aussenkameras</a></li>',
          canonical: '/Outdoor_Cameras/',
          description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
      		pacc: 'expanded',
      		ptab: '',
      		qiacc: '',
      		qitab: 'hidden',
      		mdacc: '',
      		mdtab: 'hidden',
      		iaacc: '',
      		iatab: 'hidden',
      		auacc: '',
      		autab: 'hidden',
      		hdacc: 'hidden',
      		hdtab: 'hidden',
      		fhdacc: 'hidden',
      		fhdtab: 'hidden',
      		sacc: 'hidden',
      		dlacc: 'hidden',
      		dltab: 'hidden',
        });
    });


/* ###################################################### IN-9008 HD ###################################################### */

outdoorCamsRouter.route('/IN-9008_HD/Sicherheit_Hinweise')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-9008 HD Sicherheit Hinweise',
          model: '9008',
          series: '1080p',
		      type: 'Outdoor',
          ampimg: '/images/Search/P_SearchThumb_IN-9008HD_Safety.jpg',
          headline: 'INSTAR IP Aussenkameras',
          breadcrumbs: '<li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Aussenkameras/IN-9008_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-9008_HD/Sicherheit_Hinweise/">Sicherheitshinweise</a></li>',
          canonical: '/Outdoor_Cameras/IN-9008_HD/Safety_Warnings/',
          description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    		  pacc: '',
    		  qiacc: '',
    		  mdacc: '',
    		  iaacc: '',
    		  auacc: '',
    		  fhdacc: '',
    		  hdacc: 'hidden',
        });
    });

outdoorCamsRouter.route('/IN-9008_HD/Garantie')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-9008 HD Garantie & Entsorgung',
          model: '9008',
          series: '1080p',
		      type: 'Outdoor',
          ampimg: '/images/Search/P_SearchThumb_IN-9008HD_Warranty.jpg',
          headline: 'INSTAR IP Aussenkameras',
          breadcrumbs: '<li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Aussenkameras/IN-9008_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-9008_HD/Garantie/">Garantie</a></li>',
          canonical: '/Outdoor_Cameras/IN-9008_HD/Warranty/',
          description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    		  pacc: '',
    		  qiacc: '',
    		  mdacc: '',
    		  iaacc: '',
    		  auacc: '',
    		  fhdacc: '',
    		  hdacc: 'hidden',
        });
    });

outdoorCamsRouter.route('/IN-9008_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-9008 HD Video Streaming',
          model: '9008',
          series: '1080p',
		      type: 'Outdoor',
          ampimg: '/images/Search/P_SearchThumb_IN-9008HD_Video_Streaming.jpg',
          headline: 'INSTAR IP Aussenkameras',
          breadcrumbs: '<li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Aussenkameras/IN-9008_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-9008_HD/Video_Streaming/">Video Streaming</a></li>',
          canonical: '/Outdoor_Cameras/IN-9008_HD/Video_Streaming/',
          description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    		  pacc: '',
    		  qiacc: '',
    		  mdacc: '',
    		  iaacc: '',
    		  auacc: '',
    		  fhdacc: '',
    		  hdacc: 'hidden',
        });
    });

outdoorCamsRouter.route('/IN-9008_HD/Kamera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-9008 HD Hardware Reset',
          model: '9008',
          series: '1080p',
		      type: 'Outdoor',
          ampimg: '/images/Search/P_SearchThumb_IN-9008HD_Reset.jpg',
          headline: 'INSTAR IP Aussenkameras',
          breadcrumbs: '<li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Aussenkameras/IN-9008_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-9008_HD/Kamera_Reset/">Werksreset</a></li>',
          canonical: '/Outdoor_Cameras/IN-9008_HD/Camera_Reset/',
          description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    		  pacc: '',
    		  qiacc: '',
    		  mdacc: '',
    		  iaacc: '',
    		  auacc: '',
    		  fhdacc: '',
    		  hdacc: 'hidden',
        });
    });

outdoorCamsRouter.route('/IN-9008_HD')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-9008_Overview', {
      title: 'IN-9008 HD Zusammenfassung',
      model: '9008',
      series: '1080p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-9008HD.jpg',
      headline: 'INSTAR IP Aussenkameras',
	    breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Produkte/">Produkte</a></li><li><a href="/Aussenkameras/">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-9008_HD/">IN-9008 HD</a></li>',
      canonical: '/Outdoor_Cameras/IN-9008_HD/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});

outdoorCamsRouter.route('/IN-9008_HD/Handbuch')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-9008_Usermanual', {
      title: 'IN-9008 HD Handbuch',
      model: '9008',
      series: '1080p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-9008HD.jpg',
      headline: 'INSTAR IP Aussenkameras',
	    breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Aussenkameras/">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Aussenkameras/IN-9008_HD/Handbuch">Handbuch</a></li>',
      canonical: '/Outdoor_Cameras/IN-9008_HD/Usermanual/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});

outdoorCamsRouter.route('/IN-9008_HD/Produkt_Features')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-9008_Product_Features', {
      title: 'IN-9008 HD Product Features',
      model: '9008',
      series: '1080p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-9008HD_Features.jpg',
      headline: 'INSTAR IP Aussenkameras',
	    breadcrumbs: '<li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Aussenkameras/IN-9008_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-9008_HD/Produkt_Features/">Produkt Features</a></li>',
      canonical: '/Outdoor_Cameras/IN-9008_HD/Product_Features/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});

outdoorCamsRouter.route('/IN-9008_HD/Schnell_Installation')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-9008_Quick_Installation', {
      title: 'IN-9008 HD Schnell Installation',
      model: '9008',
      series: '1080p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-9008HD_Quick_Installation.jpg',
      headline: 'INSTAR IP Aussenkameras',
	    breadcrumbs: '<li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Aussenkameras/IN-9008_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-9008_HD/Schnell_Installation/">Schnell Installation</a></li>',
      canonical: '/Outdoor_Cameras/IN-9008_HD/Quick_Installation/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});

outdoorCamsRouter.route('/IN-9008_HD/Schnell_Installation/PoE_oder_WiFi')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-9008_Quick_Installation_1hole', {
      title: 'IN-9008 HD Schnell Installation - PoE oder WiFi',
      model: '9008',
      series: '1080p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-9008HD_Quick_Installation.jpg',
      headline: 'INSTAR IP Aussenkameras',
	    breadcrumbs: '<li><a href="/Aussenkameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Aussenkameras/IN-9008_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-9008_HD/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Aussenkameras/IN-9008_HD/Schnell_Installation/PoE_oder_WiFi/">WiFi oder PoE</a></li>',
      canonical: '/Outdoor_Cameras/IN-9008_HD/Quick_Installation/PoE_or_WiFi/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});

outdoorCamsRouter.route('/IN-9008_HD/Schnell_Installation/PoE_oder_WiFi/Ethernet')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-9008_Quick_Installation_1hole_lan', {
      title: 'IN-9008 HD Schnell Installation - PoE oder WiFi',
      model: '9008',
      series: '1080p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-9008HD_Quick_Installation.jpg',
      headline: 'INSTAR IP Aussenkameras',
	    breadcrumbs: '<li><a href="/Aussenkameras/IN-9008_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-9008_HD/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Aussenkameras/IN-9008_HD/Schnell_Installation/PoE_oder_WiFi/">WiFi oder PoE</a></li><li><a href="/Aussenkameras/IN-9008_HD/Schnell_Installation/PoE_oder_WiFi/Ethernet/">Ethernet</a></li>',
      canonical: '/Outdoor_Cameras/IN-9008_HD/Quick_Installation/PoE_or_WiFi/Ethernet/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});

outdoorCamsRouter.route('/IN-9008_HD/Schnell_Installation/PoE_oder_WiFi/WPS')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-9008_Quick_Installation_1hole_wps', {
      title: 'IN-9008 HD Schnell Installation - WiFi oder PoE',
      model: '9008',
      series: '1080p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-9008HD_Quick_Installation.jpg',
      headline: 'INSTAR IP Aussenkameras',
	    breadcrumbs: '<li><a href="/Aussenkameras/IN-9008_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-9008_HD/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Aussenkameras/IN-9008_HD/Schnell_Installation/PoE_oder_WiFi/">WiFi oder PoE</a></li><li><a href="/Aussenkameras/IN-9008_HD/Schnell_Installation/PoE_oder_WiFi/WPS/">WPS</a></li>',
      canonical: '/Outdoor_Cameras/IN-9008_HD/Quick_Installation/PoE_or_WiFi/WPS/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});

outdoorCamsRouter.route('/IN-9008_HD/Schnell_Installation/Ethernet')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-9008_Quick_Installation_2hole', {
      title: 'IN-9008 HD Schnell Installation - Ethernet',
      model: '9008',
      series: '1080p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-9008HD_Quick_Installation.jpg',
      headline: 'INSTAR IP Aussenkameras',
	    breadcrumbs: '<li><a href="/Aussenkameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Aussenkameras/IN-9008_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-9008_HD/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Aussenkameras/IN-9008_HD/Schnell_Installation/Ethernet/">Ethernet</a></li>',
      canonical: '/Outdoor_Cameras/IN-9008_HD/Quick_Installation/Ethernet/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});

outdoorCamsRouter.route('/IN-9008_HD/Schnell_Installation/Ethernet_und_Audio-Out')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-9008_Quick_Installation_3hole', {
      title: 'IN-9008 HD Schnell Installation - Ethernet & Audio-Out',
      model: '9008',
      series: '1080p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-9008HD_Quick_Installation.jpg',
      headline: 'INSTAR IP Aussenkameras',
	    breadcrumbs: '<li><a href="/Aussenkameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Aussenkameras/IN-9008_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-9008_HD/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Aussenkameras/IN-9008_HD/Schnell_Installation/Ethernet_und_Audio-Out/">Ethernet & Audio</a></li>',
      canonical: '/Outdoor_Cameras/IN-9008_HD/Quick_Installation/Ethernet_and_Audio-Out/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});

outdoorCamsRouter.route('/IN-9008_HD/Objektiv_Justage')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-9008_Lense_Adjustment', {
      title: 'IN-9008 HD Objektiv Justage',
      model: '9008',
      series: '1080p',
  	  type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-9008HD_Lense_Adjust.jpg',
      headline: 'INSTAR IP Aussenkameras',
      breadcrumbs: '<li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Aussenkameras/IN-9008_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-9008_HD/Objektiv_Justage/">Objektiv Justage</a></li>',
      canonical: '/Outdoor_Cameras/IN-9008_HD/Lense_Adjustment/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});

outdoorCamsRouter.route('/IN-9008_HD/Technische_Spezifikationen')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-9008_Tech_Specs', {
      title: 'IN-9008 HD Technische Spezifikationen',
      model: '9008',
      series: '1080p',
  	  type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-9008HD_Technical_Specifications.jpg',
      headline: 'INSTAR IP Aussenkameras',
      breadcrumbs: '<li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-9008_HD/">IN-9008 HD</a></li><li><a href="/Aussenkameras/IN-9008_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-9008_HD/Technische_Spezifikationen/">Technische Spezifikationen</a></li>',
      canonical: '/Outdoor_Cameras/IN-9008_HD/Technical_Specifications/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: '',
		  hdacc: 'hidden',
    });
});


/* ###################################################### IN-7011 HD ###################################################### */


outdoorCamsRouter.route('/IN-7011_HD/Sicherheit_Hinweise')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-7011 HD Sicherheit Hinweise',
          model: '7011',
          series: '720p',
		      type: 'Outdoor',
          ampimg: '/images/Search/P_SearchThumb_IN-7011HD_Safety_Warnings.jpg',
          headline: 'INSTAR IP Aussenkameras',
          breadcrumbs: '<li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Aussenkameras/IN-7011_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-7011_HD/Sicherheit_Hinweise/">Sicherheitshinweise</a></li>',
          canonical: '/Outdoor_Cameras/IN-7011_HD/Safety_Warnings/',
          description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    		  pacc: '',
    		  qiacc: '',
    		  mdacc: '',
    		  iaacc: '',
    		  auacc: '',
    		  fhdacc: 'hidden',
    		  hdacc: '',
        });
    });

outdoorCamsRouter.route('/IN-7011_HD/Garantie')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-7011 HD Garantie & Entsorgung',
          model: '7011',
          series: '720p',
		      type: 'Outdoor',
          ampimg: '/images/Search/P_SearchThumb_IN-7011HD_Warranty.jpg',
          headline: 'INSTAR IP Aussenkameras',
          breadcrumbs: '<li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Aussenkameras/IN-7011_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-7011_HD/Garantie/">Garantie</a></li>',
          canonical: '/Outdoor_Cameras/IN-7011_HD/Warranty/',
          description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    		  pacc: '',
    		  qiacc: '',
    		  mdacc: '',
    		  iaacc: '',
    		  auacc: '',
    		  fhdacc: 'hidden',
    		  hdacc: '',
        });
    });

outdoorCamsRouter.route('/IN-7011_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-7011 HD Video Streaming',
          model: '7011',
          series: '720p',
		      type: 'Outdoor',
          ampimg: '/images/Search/P_SearchThumb_IN-7011HD_Video_Streaming.jpg',
          headline: 'INSTAR IP Aussenkameras',
          breadcrumbs: '<li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Aussenkameras/IN-7011_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-7011_HD/Video_Streaming/">Video Streaming</a></li>',
          canonical: '/Outdoor_Cameras/IN-7011_HD/Video_Streaming/',
          description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    		  pacc: '',
    		  qiacc: '',
    		  mdacc: '',
    		  iaacc: '',
    		  auacc: '',
    		  fhdacc: 'hidden',
    		  hdacc: '',
        });
    });

outdoorCamsRouter.route('/IN-7011_HD/Kamera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-7011 HD Hardware Reset',
          model: '7011',
          series: '720p',
		      type: 'Outdoor',
          ampimg: '/images/Search/P_SearchThumb_IN-7011HD_Reset.jpg',
          headline: 'INSTAR IP Aussenkameras',
          breadcrumbs: '<li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Aussenkameras/IN-7011_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-7011_HD/Kamera_Reset/">Werksreset</a></li>',
          canonical: '/Outdoor_Cameras/IN-7011_HD/Camera_Reset/',
          description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    		  pacc: '',
    		  qiacc: '',
    		  mdacc: '',
    		  iaacc: '',
    		  auacc: '',
    		  fhdacc: 'hidden',
    		  hdacc: '',
        });
    });

outdoorCamsRouter.route('/IN-7011_HD')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-7011_Overview', {
      title: 'IN-7011 HD Übersicht',
      model: '7011',
      series: '720p',
      type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-7011HD.jpg',
      headline: 'INSTAR IP Aussenkameras',
	    breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Produkte/">Produkte</a></li><li><a href="/Aussenkameras/">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-7011_HD/">IN-7011 HD</a></li>',
      canonical: '/Outdoor_Cameras/IN-7011_HD/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-7011_HD/Handbuch')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-7011_Usermanual', {
      title: 'IN-7011 HD Handbuch',
      model: '7011',
      series: '720p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-7011HD.jpg',
      headline: 'INSTAR IP Aussenkameras',
	    breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Aussenkameras/">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Aussenkameras/IN-7011_HD/Handbuch">Handbuch</a></li>',
      canonical: '/Outdoor_Cameras/IN-7011_HD/Usermanual/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-7011_HD/Produkt_Features')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-7011_Product_Features', {
      title: 'IN-7011 HD Product Features',
      model: '7011',
      series: '720p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-7011HD_Features.jpg',
      headline: 'INSTAR IP Aussenkameras',
	    breadcrumbs: '<li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Aussenkameras/IN-7011_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-7011_HD/Produkt_Features/">Produkt Features</a></li>',
      canonical: '/Outdoor_Cameras/IN-7011_HD/Product_Features/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-7011_HD/Point2Point')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-7011_Point2Point', {
      title: 'IN-7011 HD Point 2 Point',
      model: '7011',
      series: '720p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-7011HD_Quick_Installation.jpg',
      headline: 'INSTAR IP Aussenkameras',
	    breadcrumbs: '<li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Aussenkameras/IN-7011_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-7011_HD/Point2Point/">Point2Point</a></li>',
      canonical: '/Outdoor_Cameras/IN-7011_HD/Point2Point/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-7011_HD/Schnell_Installation')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-7011_Quick_Installation', {
      title: 'IN-7011 HD Schnell Installation',
      model: '7011',
      series: '720p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-7011HD_Quick_Installation.jpg',
      headline: 'INSTAR IP Aussenkameras',
	    breadcrumbs: '<li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Aussenkameras/IN-7011_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-7011_HD/Schnell_Installation/">Schnell Installation</a></li>',
      canonical: '/Outdoor_Cameras/IN-7011_HD/Quick_Installation/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-7011_HD/Objektiv_Justage')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-7011_Lense_Adjustment', {
      title: 'IN-7011 HD Objektiv Justage',
      model: '7011',
      series: '720p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-7011HD_Lense_Adjust.jpg',
      headline: 'INSTAR IP Aussenkameras',
      breadcrumbs: '<li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Aussenkameras/IN-7011_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-7011_HD/Objektiv_Justage/">Objektiv Justage</a></li>',
      canonical: '/Outdoor_Cameras/IN-7011_HD/Lense_Adjustment/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-7011_HD/Technische_Spezifikationen')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-7011_Tech_Specs', {
    title: 'IN-7011 HD Technische Spezifikationen',
    model: '7011',
    series: '720p',
	  type: 'Outdoor',
    ampimg: '/images/Search/P_SearchThumb_IN-7011HD_Technical_Specification.jpg',
    headline: 'INSTAR IP Aussenkameras',
	  breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Aussenkameras/">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-7011_HD/">IN-7011 HD</a></li><li><a href="/Aussenkameras/IN-7011_HD/Technische_Spezifikationen/">Technische Spezifikationen</a></li>',
    canonical: '/Outdoor_Cameras/IN-7011_HD/Technical_Specifications/',
    description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
	  pacc: '',
	  qiacc: '',
	  mdacc: '',
	  iaacc: '',
	  auacc: '',
	  fhdacc: 'hidden',
	  hdacc: '',
    });
});


/* ###################################################### IN-5907 HD ###################################################### */


outdoorCamsRouter.route('/IN-5907_HD/Sicherheit_Hinweise')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-5907 HD Sicherheit Hinweise',
          model: '5907',
          series: '720p',
		      type: 'Outdoor',
          ampimg: '/images/Search/P_SearchThumb_IN-5907HD_Safety_Warnings.jpg',
          headline: 'INSTAR IP Aussenkameras',
          breadcrumbs: '<li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Aussenkameras/IN-5907_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-5907_HD/Sicherheit_Hinweise/">Sicherheitshinweise</a></li>',
          canonical: '/Outdoor_Cameras/IN-5907_HD/Safety_Warnings/',
          description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    		  pacc: '',
    		  qiacc: '',
    		  mdacc: '',
    		  iaacc: '',
    		  auacc: '',
    		  fhdacc: 'hidden',
    		  hdacc: '',
        });
    });

outdoorCamsRouter.route('/IN-5907_HD/Garantie')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-5907 HD Garantie & Entsorgung',
          model: '5907',
          series: '720p',
		      type: 'Outdoor',
          ampimg: '/images/Search/P_SearchThumb_IN-5907HD_Warranty.jpg',
          headline: 'INSTAR IP Aussenkameras',
          breadcrumbs: '<li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Aussenkameras/IN-5907_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-5907_HD/Garantie/">Garantie</a></li>',
          canonical: '/Outdoor_Cameras/IN-5907_HD/Warranty/',
          description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    		  pacc: '',
    		  qiacc: '',
    		  mdacc: '',
    		  iaacc: '',
    		  auacc: '',
    		  fhdacc: 'hidden',
    		  hdacc: '',
        });
    });

outdoorCamsRouter.route('/IN-5907_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-5907 HD Video Streaming',
          model: '5907',
          series: '720p',
		      type: 'Outdoor',
          ampimg: '/images/Search/P_SearchThumb_IN-5907HD_Video_Streaming.jpg',
          headline: 'INSTAR IP Aussenkameras',
          breadcrumbs: '<li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Aussenkameras/IN-5907_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-5907_HD/Video_Streaming/">Video Streaming</a></li>',
          canonical: '/Outdoor_Cameras/IN-5907_HD/Video_Streaming/',
          description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    		  pacc: '',
    		  qiacc: '',
    		  mdacc: '',
    		  iaacc: '',
    		  auacc: '',
    		  fhdacc: 'hidden',
    		  hdacc: '',
        });
    });

outdoorCamsRouter.route('/IN-5907_HD/Kamera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-5907 HD Hardware Reset',
          model: '5907',
          series: '720p',
		      type: 'Outdoor',
          ampimg: '/images/Search/P_SearchThumb_IN-5907HD_Reset.jpg',
          headline: 'INSTAR IP Aussenkameras',
          breadcrumbs: '<li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Aussenkameras/IN-5907_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-5907_HD/Kamera_Reset/">Werksreset</a></li>',
          canonical: '/Outdoor_Cameras/IN-5907_HD/Camera_Reset/',
          description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    		  pacc: '',
    		  qiacc: '',
    		  mdacc: '',
    		  iaacc: '',
    		  auacc: '',
    		  fhdacc: 'hidden',
    		  hdacc: '',
        });
    });

outdoorCamsRouter.route('/IN-5907_HD')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5907_Overview', {
      title: 'IN-5907 HD Zusammenfassung',
      model: '5907',
      series: '720p',
      type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-5907HD.jpg',
      headline: 'INSTAR IP Aussenkameras',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Produkte/">Produkte</a></li><li><a href="/Aussenkameras/">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-5907_HD/">IN-5907 HD</a></li>',
      canonical: '/Outdoor_Cameras/IN-5907_HD/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-5907_HD/Handbuch')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5907_Usermanual', {
      title: 'IN-5907 HD Handbuch',
      model: '5907',
      series: '720p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-5907HD.jpg',
      headline: 'INSTAR IP Aussenkameras',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Aussenkameras/IN-5907_HD/Handbuch">Handbuch</a></li>',
      canonical: '/Outdoor_Cameras/IN-5907_HD/Usermanual/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-5907_HD/Produkt_Features')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5907_Product_Features', {
      title: 'IN-5907 HD Product Features',
      model: '5907',
      series: '720p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-5907HD_Features.jpg',
      headline: 'INSTAR IP Aussenkameras',
      breadcrumbs: '<li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Aussenkameras/IN-5907_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-5907_HD/Produkt_Features/">Produkt Features</a></li>',
      canonical: '/Outdoor_Cameras/IN-5907_HD/Product_Features/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-5907_HD/Point2Point')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5907_Point2Point', {
      title: 'IN-5907 HD Point 2 Point',
      model: '5907',
      series: '720p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-5907HD_Quick_Installation.jpg',
      headline: 'INSTAR IP Aussenkameras',
      breadcrumbs: '<li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Aussenkameras/IN-5907_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-5907_HD/Point2Point/">Point2Point</a></li>',
      canonical: '/Outdoor_Cameras/IN-5907_HD/Point2Point/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-5907_HD/Schnell_Installation')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5907_Quick_Installation', {
      title: 'IN-5907 HD Schnell Installation',
      model: '5907',
      series: '720p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-5907HD_Quick_Installation.jpg',
      headline: 'INSTAR IP Aussenkameras',
      breadcrumbs: '<li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Aussenkameras/IN-5907_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-5907_HD/Schnell_Installation/">Schnell Installation</a></li>',
      canonical: '/Outdoor_Cameras/IN-5907_HD/Quick_Installation/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-5907_HD/Objektiv_Justage')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5907_Lense_Adjustment', {
      title: 'IN-5907 HD Objektiv Justage',
      model: '5907',
      series: '720p',
  	  type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-5907HD_Lense_Adjust.jpg',
      headline: 'INSTAR IP Aussenkameras',
      breadcrumbs: '<li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Aussenkameras/IN-5907_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-5907_HD/Objektiv_Justage/">Objektiv Justage</a></li>',
      canonical: '/Outdoor_Cameras/IN-5907_HD/Lense_Adjustment/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-5907_HD/Technische_Spezifikationen')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5907_Tech_Specs', {
      title: 'IN-5907 HD Technische Spezifikationen',
      model: '5907',
      series: '720p',
  	  type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-5907HD_Technical_Specifications.jpg',
      headline: 'INSTAR IP Aussenkameras',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Aussenkameras/">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-5907_HD/">IN-5907 HD</a></li><li><a href="/Aussenkameras/IN-5907_HD/Technische_Spezifikationen/">Technische Spezifikationen</a></li>',
      canonical: '/Outdoor_Cameras/IN-5907_HD/Technical_Specifications/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});


/* ###################################################### IN-5905 HD ###################################################### */


outdoorCamsRouter.route('/IN-5905_HD/Sicherheit_Hinweise')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-5905 HD Sicherheit Hinweise',
          model: '5905',
          series: '720p',
		      type: 'Outdoor',
          ampimg: '/images/Search/P_SearchThumb_IN-5905HD_Safety_Warnings.jpg',
          headline: 'INSTAR IP Aussenkameras',
          breadcrumbs: '<li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/ProductsOutdoor_Cameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Aussenkameras/IN-5905_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-5905_HD/Sicherheit_Hinweise/">Sicherheitshinweise</a></li>',
          canonical: '/Outdoor_Cameras/IN-5905_HD/Safety_Warnings/',
          description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    		  pacc: '',
    		  qiacc: '',
    		  mdacc: '',
    		  iaacc: '',
    		  auacc: '',
    		  fhdacc: 'hidden',
    		  hdacc: '',
        });
    });

outdoorCamsRouter.route('/IN-5905_HD/Garantie')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-5905 HD Garantie & Entsorgung',
          model: '5905',
          series: '720p',
		      type: 'Outdoor',
          ampimg: '/images/Search/P_SearchThumb_IN-5905HD_Warranty.jpg',
          headline: 'INSTAR IP Aussenkameras',
          breadcrumbs: '<li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Aussenkameras/IN-5905_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-5905_HD/Garantie/">Garantie</a></li>',
          canonical: '/Outdoor_Cameras/IN-5905_HD/Warranty/',
          description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    		  pacc: '',
    		  qiacc: '',
    		  mdacc: '',
    		  iaacc: '',
    		  auacc: '',
    		  fhdacc: 'hidden',
    		  hdacc: '',
        });
    });

outdoorCamsRouter.route('/IN-5905_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-5905 HD Video Streaming',
          model: '5905',
          series: '720p',
		      type: 'Outdoor',
          ampimg: '/images/Search/P_SearchThumb_IN-5905HD_Video_Streaming.jpg',
          headline: 'INSTAR IP Aussenkameras',
          breadcrumbs: '<li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Aussenkameras/IN-5905_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-5905_HD/Video_Streaming/">Video Streaming</a></li>',
          canonical: '/Outdoor_Cameras/IN-5905_HD/Video_Streaming/',
          description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    		  pacc: '',
    		  qiacc: '',
    		  mdacc: '',
    		  iaacc: '',
    		  auacc: '',
    		  fhdacc: 'hidden',
    		  hdacc: '',
        });
    });

outdoorCamsRouter.route('/IN-5905_HD/Kamera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-5905 HD Hardware Reset',
          model: '5905',
          series: '720p',
		      type: 'Outdoor',
          ampimg: '/images/Search/P_SearchThumb_IN-5905HD_Reset.jpg',
          headline: 'INSTAR IP Aussenkameras',
          breadcrumbs: '<li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Aussenkameras/IN-5905_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-5905_HD/Kamera_Reset/">Werksreset</a></li>',
          canonical: '/Outdoor_Cameras/IN-5905_HD/Camera_Reset/',
          description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
    		  pacc: '',
    		  qiacc: '',
    		  mdacc: '',
    		  iaacc: '',
    		  auacc: '',
    		  fhdacc: 'hidden',
    		  hdacc: '',
        });
    });

outdoorCamsRouter.route('/IN-5905_HD')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5905_Overview', {
      title: 'IN-5905 HD Zusammenfassung',
      model: '5905',
      series: '720p',
      type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-5905HD.jpg',
      headline: 'INSTAR IP Aussenkameras',
      breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Produkte/">Produkte</a></li><li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-5905_HD/">IN-5905 HD</a></li>',
      canonical: '/Outdoor_Cameras/IN-5905_HD/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-5905_HD/Handbuch')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5905_Usermanual', {
      title: 'IN-5905 HD Handbuch',
      model: '5905',
      series: '720p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-5905HD.jpg',
      headline: 'INSTAR IP Aussenkameras',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Aussenkameras/IN-5905_HD/Handbuch">Handbuch</a></li>',
      canonical: '/Outdoor_Cameras/IN-5905_HD/Usermanual/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-5905_HD/Produkt_Features')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5905_Product_Features', {
      title: 'IN-5905 HD Product Features',
      model: '5905',
      series: '720p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-5905HD_Features.jpg',
      headline: 'INSTAR IP Aussenkameras',
      breadcrumbs: '<li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Aussenkameras/IN-5905_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-5905_HD/Produkt_Features/">Produkt Features</a></li>',
      canonical: '/Outdoor_Cameras/IN-5905_HD/Product_Features/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-5905_HD/Point2Point')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5905_Point2Point', {
      title: 'IN-5905 HD Point 2 Point',
      model: '5905',
      series: '720p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-5905HD_Quick_Installation.jpg',
      headline: 'INSTAR IP Aussenkameras',
      breadcrumbs: '<li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Aussenkameras/IN-5905_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-5905_HD/Point2Point/">Point2Point</a></li>',
      canonical: '/Outdoor_Cameras/IN-5905_HD/Point2Point/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-5905_HD/Schnell_Installation')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5905_Quick_Installation', {
      title: 'IN-5905 HD Schnell Installation',
      model: '5905',
      series: '720p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-5905HD_Quick_Installation.jpg',
      headline: 'INSTAR IP Aussenkameras',
      breadcrumbs: '<li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Aussenkameras/IN-5905_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-5905_HD/Schnell_Installation/">Schnell Installation</a></li>',
      canonical: '/Outdoor_Cameras/IN-5905_HD/Quick_Installation/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-5905_HD/Objektiv_Justage')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5905_Lense_Adjustment', {
      title: 'IN-5905 HD Objektiv Justage',
      model: '5905',
      series: '720p',
	    type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-5905HD_Lense_adjust.jpg',
      headline: 'INSTAR IP Aussenkameras',
      breadcrumbs: '<li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Aussenkameras/IN-5905_HD/Handbuch">Handbuch</a></li><li><a href="/Aussenkameras/IN-5905_HD/Objektiv_Justage/">Objektiv Justage</a></li>',
      canonical: '/Outdoor_Cameras/IN-5905_HD/Lense_Adjustment/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-5905_HD/Technische_Spezifikationen')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-5905_Tech_Specs', {
      title: 'IN-5905 HD Technische Spezifikationen',
      model: '5905',
      series: '720p',
  	  type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-5905HD_Technical_Specifications.jpg',
      headline: 'INSTAR IP Aussenkameras',
      breadcrumbs: '<li><a href="/Produkte/">Produkte</a></li><li><a href="/Aussenkameras">Aussenkameras</a></li><li><a href="/Aussenkameras/IN-5905_HD/">IN-5905 HD</a></li><li><a href="/Aussenkameras/IN-5905_HD/Technische_Spezifikationen/">Technische Spezifikationen</a></li>',
      canonical: '/Outdoor_Cameras/IN-5905_HD/Technical_Specifications/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});


/* ###################################################### VGA ###################################################### */


outdoorCamsRouter.route('/IN-4011')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-4011_Overview', {
      title: 'IN-4011 Zusammenfassung',
      model: '4011',
      series: 'VGA',
  	  type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-4011.jpg',
      headline: 'INSTAR IP Aussenkameras',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Produkte/">Produkte</a></li><li class="breadcrumb-item"><a href="/Aussenkameras/">Aussenkameras</a></li><li class="breadcrumb-item active"><a href="/Aussenkameras/IN-4011/">IN-4011</a></li>',
      canonical: '/Outdoor_Cameras/IN-4011/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-4011/Technische_Spezifikationen')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-4011_Tech_Specs', {
      title: 'IN-4011 Technische Spezifikationen',
      model: '4011',
      series: 'VGA',
  	  type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-4011_Technical_Specifications.jpg',
      headline: 'INSTAR IP Aussenkameras',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/Produkte/">Produkte</a></li><li class="breadcrumb-item"><a href="/Aussenkameras/">Aussenkameras</a></li><li class="breadcrumb-item"><a href="/Aussenkameras/IN-4011/">IN-4011</a></li><li class="breadcrumb-item active"><a href="/Aussenkameras/IN-4011/Technische_Spezifikationen/">Technische Spezifikationen</a></li>',
      canonical: '/Outdoor_Cameras/IN-4011/Technical_Specifications/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-4010_V2')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-4010_V2_Overview', {
      title: 'IN-4010 V2 Zusammenfassung',
      model: '4010',
      series: 'VGA',
  	  type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-4010.jpg',
      headline: 'INSTAR IP Aussenkameras',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Produkte/">Produkte</a></li><li class="breadcrumb-item"><a href="/Aussenkameras/">Aussenkameras</a></li><li class="breadcrumb-item active"><a href="/Aussenkameras/IN-4010_V2/">IN-4010 V2</a></li>',
      canonical: '/Outdoor_Cameras/IN-4010_V2/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-4010_V2/Technische_Spezifikationen')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-4010_V2_Tech_Specs', {
      title: 'IN-4010 V2 Technische Spezifikationen',
      model: '4010',
      series: 'VGA',
  	  type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-4010_Technical_Specifications.jpg',
      headline: 'INSTAR IP Aussenkameras',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/Produkte/">Produkte</a></li><li class="breadcrumb-item"><a href="/Aussenkameras/">Aussenkameras</a></li><li class="breadcrumb-item"><a href="/Aussenkameras/IN-4010_V2/">IN-4010 V2</a></li><li class="breadcrumb-item active"><a href="/Aussenkameras/IN-4010_V2/Technische_Spezifikationen/">Technische Spezifikationen</a></li>',
      canonical: '/Outdoor_Cameras/IN-4010_V2/Technical_Specifications/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-2908')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-2908_Overview', {
      title: 'IN-2908 Zusammenfassung',
      model: '2908',
      series: 'VGA',
  	  type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-2908.jpg',
      headline: 'INSTAR IP Aussenkameras',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Produkte/">Produkte</a></li><li class="breadcrumb-item"><a href="/Aussenkameras/">Aussenkameras</a></li><li class="breadcrumb-item active"><a href="/Aussenkameras/IN-2908/">IN-2908</a></li>',
      canonical: '/Outdoor_Cameras/IN-2908/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-2908/Technische_Spezifikationen')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-2908_Tech_Specs', {
      title: 'IN-2908 Technische Spezifikationen',
      model: '2908',
      series: 'VGA',
  	  type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-2908_Technical_Specifications.jpg',
      headline: 'INSTAR IP Aussenkameras',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/Produkte/">Produkte</a></li><li class="breadcrumb-item"><a href="/Aussenkameras/">Aussenkameras</a></li><li class="breadcrumb-item"><a href="/Aussenkameras/IN-2908/">IN-2908</a></li><li class="breadcrumb-item active"><a href="/Aussenkameras/IN-2908/Technische_Spezifikationen/">Technische Spezifikationen</a></li>',
      canonical: '/Outdoor_Cameras/IN-2908/Technical_Specifications/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-2905_V2')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-2905_V2_Overview', {
      title: 'IN-2905 V2 Zusammenfassung',
      model: '2905',
      series: 'VGA',
  	  type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-2905.jpg',
      headline: 'INSTAR IP Aussenkameras',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Produkte/">Produkte</a></li><li class="breadcrumb-item"><a href="/Aussenkameras/">Aussenkameras</a></li><li class="breadcrumb-item active"><a href="/Aussenkameras/IN-2905_V2/">IN-2905 V2</a></li>',
      canonical: '/Outdoor_Cameras/IN-2905_V2/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});

outdoorCamsRouter.route('/IN-2905_V2/Technische_Spezifikationen')
.get(function(req, res) {
  res.render('./Outdoor_Cams/IN-2905_V2_Tech_Specs', {
      title: 'IN-2905 V2 Technische Spezifikationen',
      model: '2905',
      series: 'VGA',
  	  type: 'Outdoor',
      ampimg: '/images/Search/P_SearchThumb_IN-2905_Technical_Specifications.jpg',
      headline: 'INSTAR IP Aussenkameras',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/Produkte/">Produkte</a></li><li class="breadcrumb-item"><a href="/Aussenkameras/">Aussenkameras</a></li><li class="breadcrumb-item"><a href="/Aussenkameras/IN-2905_V2/">IN-2905 V2</a></li><li class="breadcrumb-item active"><a href="/Aussenkameras/IN-2905_V2/Technische_Spezifikationen/">Technische Spezifikationen</a></li>',
      canonical: '/Outdoor_Cameras/IN-2905_V2/Technical_Specifications/',
      description: 'INSTAR Wiki - IP Kamera Wissensdatenbank',
		  pacc: '',
		  qiacc: '',
		  mdacc: '',
		  iaacc: '',
		  auacc: '',
		  fhdacc: 'hidden',
		  hdacc: '',
    });
});



module.exports = outdoorCamsRouter;
