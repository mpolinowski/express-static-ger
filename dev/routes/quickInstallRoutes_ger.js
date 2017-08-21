var express = require('express');
var quickInstallGerRouter = express.Router();

/* GET quickInstall page. */
quickInstallGerRouter.route('/')
    .get(function(req, res) {
    res.render('./Quick_Installation/Quick_Installation', {
        title: 'Schnell Installation für Ihre INSTAR Überwachungskamera',
        ampimg: '/images/Search/QI_SearchThumb_QuickInstallation.jpg',
        headline: 'Installation Ihrer INSTAR IP Webcam - Erste Schritte, nach dem Auspacken, verbinden mit Ihrem Netzwerk, Kamerasoftware und Benutzerverwaltung, Livevideo und Software Updates',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Schnell_Installation/">Schnell Installation</a></li>',
        canonical: '/Quick_Installation/',
        description: 'Packen Sie Ihre INSTAR Sicherheitskamera aus und binden Sie sie in Ihr LAN oder WLAN Netzwerk ein. Das INSTAR Kamera Tool ermöglicht Ihnen das Auffinden der Kamera und Aufrufen der Weboberfläche in Ihrem Webbrowser. Der Zugriff auf die Kamera kann auch direkt per LAN Kabel, über eine Powerline Verbindung oder per Power-over-Ethernet erfolgen.',
        pacc: '',
        ptab: 'hidden',
        qiacc: 'expanded',
        qitab: '',
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

/* GET How Does An IP Camera Work? /How_Does_An_IP_Camera_Work */
quickInstallGerRouter.route('/Wie_Funktioniert_eine_IP_Camera')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_Does_An_IP_Camera_Work', {
            title: 'Wie funktioniert eine INSTAR IP Camera?',
            ampimg: '/images/Search/QI_SearchThumb_HowDoesAnIPCameraWork.jpg',
            headline: 'Was ist eine IP Netzwerkkamera und wie funktioniert sie?',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Wie_Funktioniert_eine_IP_Camera/">Wie funktioniert eine IP Camera?</a></li>',
            canonical: '/Quick_Installation/How_Does_An_IP_Camera_Work/',
            description: 'Eine IP Überwachungskamera unterscheidet sich von regulären Webcams oder analogen CCTV Kameras dadurch, das sie ein autonomes Netzwerkgerät in Ihrem LAN oder WLAN ist. Sie brauchen IP Sicherheitskamera nur mir Ihrem Router verbinden und haben direkt mit Ihrem Standard Webbrowser Zugriff auf das Live Video und die Konfiguration des Fernzugriffes, der Bewegungserkennung und Alarmbenachrichtigung.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET First Steps to get your IP camera working /First_Steps */
quickInstallGerRouter.route('/Erste_Schritte')
    .get(function(req, res) {
        res.render('./Quick_Installation/First_Steps', {
            title: 'Erste Schritte der INSTAR Überwachungskamera Installation',
            ampimg: '/images/Search/QI_SearchThumb_FirstStepsWithYourIPCamera.jpg',
            headline: 'Erste Schritte der INSTAR IP Sicherheitskamera Installation',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Erste_Schritte/">Erste Schritte</a></li>',
            canonical: '/Quick_Installation/First_Steps/',
            description: 'Im Folgenden geben wir Ihnen eine kurze Einführung in die Grundfunktionen und die Ersten Schritte mit Ihrer neuen INSTAR Netzwerkkamera. Wir erläutern auf was man anfangs achten sollte und die häufigsten Einsteiger-Fragen werden beantwortet. ',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET After unpacking your INSTAR IP Camera /After_Unpacking */
quickInstallGerRouter.route('/Nach_dem_Auspacken')
    .get(function(req, res) {
        res.render('./Quick_Installation/After_Unpacking', {
            title: 'Nach dem Auspacken Ihrer INSTAR IP Kamera',
            ampimg: '/images/Search/QI_SearchThumb_AfterUnpackingYourIPCamera.jpg',
            headline: 'Ist das Objektiv Ihrer INSTAR Überwachungskamera scharf-gestellt? Möchten Sie eine Heizung bei Ihrer Außenkamera verbauen? Das Anschlusskabel verlängern? Oder eine größere SD Karte verbauen? Die folgenden Videos werden Sie dabei unterstützen.',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Nach_dem_Auspacken/">Nach dem Auspacken</a></li>',
            canonical: '/Quick_Installation/After_Unpacking/',
            description: 'Ist das Objektiv Ihrer INSTAR Überwachungskamera scharf-gestellt? Möchten Sie eine Heizung bei Ihrer Außenkamera verbauen? Das Anschlusskabel verlängern? Oder eine größere SD Karte verbauen? Die folgenden Videos werden Sie dabei unterstützen.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET Direct connection with a PC or Notebook /Direct_LAN_Connection */
quickInstallGerRouter.route('/Power_over_Ethernet')
    .get(function(req, res) {
        res.render('./Quick_Installation/Power_over_Ethernet', {
            title: 'PoE Zubehör für Ihre INSTAR Netzwerkkamera',
            ampimg: '/images/Search/QI_SearchThumb_PowerOverEthernet.jpg',
            headline: 'Power over Ethernet Stromversorgung über das Netzwerkkabel - sparen Sie sich die Steckdose am Installationsort der INSTAR Überwachungskamera.',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Power_over_Ethernet/">Power over Ethernet</a></li>',
            canonical: '/Quick_Installation/Power_over_Ethernet/',
            description: 'Nutzen Sie unseren INSTAR PoE Switch oder Injektor um Ihre INSTAR Power-over-Ethernet Sicherheitskamera über das LAN Kabel mit Strom zu versorgen.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET Direct connection with a PC or Notebook /Direct_LAN_Connection */
quickInstallGerRouter.route('/Powerline')
    .get(function(req, res) {
        res.render('./Quick_Installation/Powerline', {
            title: 'IN-LAN 500 :: Internetverbindung über das Stromkabel für Ihre INSTAR Überwachungskamera',
            ampimg: '/images/Search/QI_SearchThumb_Powerline.jpg',
            headline: 'IN-LAN Powerline - Binden Sie Ihre INSTAR Webcam über das Stromnetz an Ihr Netzwerk an.',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Quick_Installation/">Schnell Installation</a></li><li><a href="/Quick_Installation/Powerline/">Powerline</a></li>',
            canonical: '/Quick_Installation/Powerline/',
            description: 'IN-LAN 500 ist kompatibel zum HomeplugAV Standard, der z.B. auch von Devolo (DLAN) verwendet wird. Nutzen Sie Ihren IN-LAN 500 Adapter um eine Netzwerkverbindung für Ihre INSTAR Netzwerkamera über das Stromnetz in Ihrem Haus herzustellen.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET Direct connection with a PC or Notebook /Direct_LAN_Connection */
quickInstallGerRouter.route('/Direkte_LAN_Verbindung')
    .get(function(req, res) {
        res.render('./Quick_Installation/Direct_LAN_Connection', {
            title: 'Direkte LAN Verbindung Ihrer INSTAR Netzwerkkamera mit Ihrem Laptop',
            ampimg: '/images/Search/QI_SearchThumb_DirectConnectionWithYourPC.jpg',
            headline: 'Ihre INSTAR Kamera benötigt kein Internet. Verbinden Sie einfach die Überwachungskamera direkt mit Ihrem Computer.',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Direkte_LAN_Verbindung/">Direkte LAN Verbindung</a></li>',
            canonical: '/Quick_Installation/Direct_LAN_Connection/',
            description: 'Wenn Ihnen kein Internet Router zur Verfügung steht, können Sie Ihre INSTAR Sicherheitskamera auch direkt über ein Netzwerkkabel mit Ihrem Computer verbinden und die Kamerasoftware in Ihrem Webbrowser konfigurieren.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET Find your IP Camera with an IP Scanner /Alternative_IP_Scanner */
quickInstallGerRouter.route('/Alternative_IP_Scanner')
    .get(function(req, res) {
        res.render('./Quick_Installation/Alternative_IP_Scanner', {
            title: 'Auffinden Ihrer INSTAR Sicherheitskamera in Ihrem Netzwerk',
            ampimg: '/images/Search/QI_SearchThumb_AlternativeIPScanner_eng.jpg',
            headline: 'Wenn das INSTAR Kamera Tool Ihre Kamera nicht findet gibt es Alternativen.',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Alternative_IP_Scanner/">Alternative IP Scanner</a></li>',
            canonical: '/Quick_Installation/Alternative_IP_Scanner/',
            description: 'Das INSTAR Kamera Tool zeigt Ihnen alle INSTAR IP Kameras in Ihrem Netzwerk an und ermöglicht es diese auf Doppelklick in Ihrem Webbrowser zu öffnen und konfigurieren. Sollte das Kamera Ihnen keine Kameras anzeigen, möchten wir Ihnen hier ein paar Alternativen vorstellen.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET Angry IP Scanner /Angry_IP_Scanner */
quickInstallGerRouter.route('/Alternative_IP_Scanner/Angry_IP_Scanner')
    .get(function(req, res) {
        res.render('./Quick_Installation/Angry_IP_Scanner', {
            title: 'Angry IP Scanner :: Auffinden Ihrer INSTAR Sicherheitskamera in Ihrem Netzwerk',
            ampimg: '/images/Search/QI_SearchThumb_AlternativeIPScanner_Angry_eng.jpg',
            headline: 'Wenn das INSTAR Kamera Tool Ihre Kamera nicht findet gibt es Alternativen.',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Alternative_IP_Scanner/">Alternative IP Scanner</a></li><li><a href="/Schnell_Installation/Alternative_IP_Scanner/Angry_IP_Scanner/">Angry IP Scanner</a></li>',
            canonical: '/Quick_Installation/Alternative_IP_Scanner/Angry_IP_Scanner/',
            description: 'Das INSTAR Kamera Tool zeigt Ihnen alle INSTAR IP Kameras in Ihrem Netzwerk an und ermöglicht es diese auf Doppelklick in Ihrem Webbrowser zu öffnen und konfigurieren. Sollte das Kamera Ihnen keine Kameras anzeigen, möchten wir Ihnen hier den Angry IP Scanner als Alternativen vorstellen.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET Fing CLI /Fing_CLI */
quickInstallGerRouter.route('/Alternative_IP_Scanner/Fing_CLI')
    .get(function(req, res) {
        res.render('./Quick_Installation/Fing_CLI', {
            title: 'Fing IP Scanner :: Command Line Interface :: Auffinden Ihrer INSTAR Sicherheitskamera in Ihrem Netzwerk',
            ampimg: '/images/Search/QI_SearchThumb_AlternativeIPScanner_FingCLI_eng.jpg',
            headline: 'Wenn das INSTAR Kamera Tool Ihre Kamera nicht findet gibt es Alternativen.',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Alternative_IP_Scanner/">Alternative IP Scanner</a></li><li><a href="/Schnell_Installation/Alternative_IP_Scanner/Fing_CLI/">Fing CLI</a></li>',
            canonical: '/Quick_Installation/Alternative_IP_Scanner/Fing_CLI/',
            description: 'Das INSTAR Kamera Tool zeigt Ihnen alle INSTAR IP Kameras in Ihrem Netzwerk an und ermöglicht es diese auf Doppelklick in Ihrem Webbrowser zu öffnen und konfigurieren. Sollte das Kamera Ihnen keine Kameras anzeigen, möchten wir Ihnen hier den Fing IP Scanner als Alternativen vorstellen.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET Fing Mobile /Fing_Mobile */
quickInstallGerRouter.route('/Alternative_IP_Scanner/Fing_Mobile')
    .get(function(req, res) {
        res.render('./Quick_Installation/Fing_Mobile', {
            title: 'Fing IP Scanner :: Mobile App :: Auffinden Ihrer INSTAR Sicherheitskamera in Ihrem Netzwerk',
            ampimg: '/images/Search/QI_SearchThumb_AlternativeIPScanner_FingMobile_eng.jpg',
            headline: 'Wenn das INSTAR Kamera Tool Ihre Kamera nicht findet gibt es Alternativen.',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Alternative_IP_Scanner/">Alternative IP Scanner</a></li><li><a href="/Schnell_Installation/Alternative_IP_Scanner/Fing_Mobile/">Fing Mobile</a></li>',
            canonical: '/Quick_Installation/Alternative_IP_Scanner/Fing_Mobile/',
            description: 'Das INSTAR Kamera Tool zeigt Ihnen alle INSTAR IP Kameras in Ihrem Netzwerk an und ermöglicht es diese auf Doppelklick in Ihrem Webbrowser zu öffnen und konfigurieren. Sollte das Kamera Ihnen keine Kameras anzeigen, möchten wir Ihnen hier den Fing IP Scanner als Alternativen vorstellen.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET Language Selection /Language_Selection */
quickInstallGerRouter.route('/Sprachauswahl')
    .get(function(req, res) {
        res.render('./Quick_Installation/Language_Selection', {
            title: 'Sprachauswahl in der Software Oberfläche Ihrer INSTAR IP Kamera',
            ampimg: '/images/Search/QI_SearchThumb_LanguageSettings.jpg',
            headline: 'Hier legen Sie die Sprache fest in der Ihnen die Weboberfläche Ihrer Kamera angezeigt werden soll.',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Sprachauswahl/">Sprachauswahl</a></li>',
            canonical: '/Quick_Installation/Language_Selection/',
            description: 'Hier legen Sie die Sprache fest in der Ihnen die Weboberfläche Ihrer Kamera angezeigt werden soll.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET Live Video Selection /Live_Video */
quickInstallGerRouter.route('/Live_Video')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video', {
            title: 'Anzeige des Live Videos Ihrer INSTAR IP Kamera',
            ampimg: '/images/Search/QI_SearchThumb_LiveVideo.jpg',
            headline: 'Greifen Sie mit Ihrem Webbrowser auf das Live Video Ihrer Kamera zu.',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Live_Video/">Live Video</a></li>',
            canonical: '/Quick_Installation/Live_Video/',
            description: 'Greifen Sie mit Ihrem Webbrowser auf das Live Video Ihrer Kamera zu.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET Live Video Selection /Live_Video */
quickInstallGerRouter.route('/Live_Video/ActiveX')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_ActiveX', {
            title: 'ActiveX :: Anzeige des Live Videos Ihrer INSTAR IP Kamera über das ActiveX Steuerelement',
            ampimg: '/images/Search/QI_SearchThumb_LiveVideo_ActiveX.jpg',
            headline: 'Greifen Sie mit Ihrem Webbrowser über das ActiveX Steuerelement auf das Live Video Ihrer Kamera zu.',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Live_Video/">Live Video</a></li><li><a href="/Schnell_Installation/Live_Video/ActiveX/">ActiveX</a></li>',
            canonical: '/Quick_Installation/Live_Video/ActiveX/',
            description: 'Greifen Sie mit Ihrem Webbrowser über das ActiveX Steuerelement auf das Live Video Ihrer Kamera zu.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET Live Video Selection /Live_Video */
quickInstallGerRouter.route('/Live_Video/QuickTime')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_QuickTime', {
            title: 'QuickTime :: Anzeige des Live Videos Ihrer INSTAR IP Kamera über den QuickTime Player',
            ampimg: '/images/Search/QI_SearchThumb_LiveVideo_QuickTime.jpg',
            headline: 'Greifen Sie mit Ihrem Webbrowser über den QuickTime Player auf das Live Video Ihrer Kamera zu.',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Live_Video/">Live Video</a></li><li><a href="/Schnell_Installation/Live_Video/QuickTime/">QuickTime</a></li>',
            canonical: '/Quick_Installation/Live_Video/QuickTime/',
            description: 'Greifen Sie mit Ihrem Webbrowser über den QuickTime Player auf das Live Video Ihrer Kamera zu.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET Live Video Selection /Live_Video */
quickInstallGerRouter.route('/Live_Video/MJPEG')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_MJPEG', {
            title: 'MJPEG :: Anzeige des Live Videos Ihrer INSTAR IP Kamera über den MJPEG Stream',
            ampimg: '/images/Search/QI_SearchThumb_LiveVideo_MJPEG.jpg',
            headline: 'Greifen Sie mit Ihrem Webbrowser über den MJPEG auf das Live Video Ihrer Kamera zu.',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Live_Video/">Live Video</a></li><li><a href="/Schnell_Installation/Live_Video/MJPEG/">MJPEG</a></li>',
            canonical: '/Quick_Installation/Live_Video/MJPEG/',
            description: 'Greifen Sie mit Ihrem Webbrowser über den MJPEG auf das Live Video Ihrer Kamera zu.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET Live Video Selection /Live_Video */
quickInstallGerRouter.route('/Live_Video/Problembehebung/Avast')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_Avast', {
            title: 'Avast Virenscanner :: Entblocken der Weboberfläche Ihrer INSTAR Netzwerkkamera',
            ampimg: '/images/Search/QI_SearchThumb_LiveVideo_Avast.jpg',
            headline: 'Live Video Troubleshooting Avast',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Live_Video/">Live Video</a></li><li><a href="/Schnell_Installation/Live_Video/Problembehebung/Avast/">AVAST</a></li>',
            canonical: '/Quick_Installation/Live_Video/Troubleshooting/Avast/',
            description: 'Wenn das Video Ihrer INSTAR Sicherheitskamera geblockt wird, kann es sein, dass Sie eine Ausnahmeregel in Ihrem Virenscanner oder Firewall anlegen müssen, um dieses abspielen zu können.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET Live Video Selection /Live_Video */
quickInstallGerRouter.route('/Live_Video/Problembehebung/Kaspersky_2013')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_Kaspersky_2013', {
            title: 'Kaspersky 2013 Virenscanner :: Entblocken der Weboberfläche Ihrer INSTAR Netzwerkkamera',
            ampimg: '/images/Search/QI_SearchThumb_LiveVideo_Kaspersky13.jpg',
            headline: 'Live Video Troubleshooting Kaspersky 2013',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Live_Video/">Live Video</a></li><li><a href="/Schnell_Installation/Live_Video/Problembehebung/Kaspersky_2013/">Kaspersky 2013</a></li>',
            canonical: '/Quick_Installation/Live_Video/Troubleshooting/Kaspersky_2013/',
            description: 'Wenn das Video Ihrer INSTAR Sicherheitskamera geblockt wird, kann es sein, dass Sie eine Ausnahmeregel in Ihrem Virenscanner oder Firewall anlegen müssen, um dieses abspielen zu können.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET Live Video Selection /Live_Video */
quickInstallGerRouter.route('/Live_Video/Problembehebung/Kaspersky_2014')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_Kaspersky_2014', {
            title: 'Kaspersky 2014 Virenscanner :: Entblocken der Weboberfläche Ihrer INSTAR Netzwerkkamera',
            ampimg: '/images/Search/QI_SearchThumb_LiveVideo_Kaspersky14.jpg',
            headline: 'Live Video TroubleshootingKaspersky 2014',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Live_Video/">Live Video</a></li><li><a href="/Schnell_Installation/Live_Video/Problembehebung/Kaspersky_2014/">Kaspersky 2014</a></li>',
            canonical: '/Quick_Installation/Live_Video/Troubleshooting/Kaspersky_2014/',
            description: 'Wenn das Video Ihrer INSTAR Sicherheitskamera geblockt wird, kann es sein, dass Sie eine Ausnahmeregel in Ihrem Virenscanner oder Firewall anlegen müssen, um dieses abspielen zu können.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET Live Video Selection /Live_Video */
quickInstallGerRouter.route('/Live_Video/Problembehebung/Kaspersky_2017')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_Kaspersky_2017', {
            title: 'Kaspersky 2017 Virenscanner :: Entblocken der Weboberfläche Ihrer INSTAR Netzwerkkamera',
            ampimg: '/images/Search/QI_SearchThumb_LiveVideo_Kaspersky17.jpg',
            headline: 'Live Video Troubleshooting Kaspersky 2017',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Live_Video/">Live Video</a></li><li><a href="/Schnell_Installation/Live_Video/Problembehebung/Kaspersky_2017/">Kaspersky 2017</a></li>',
            canonical: '/Quick_Installation/Live_Video/Troubleshooting/Kaspersky_2017/',
            description: 'Wenn das Video Ihrer INSTAR Sicherheitskamera geblockt wird, kann es sein, dass Sie eine Ausnahmeregel in Ihrem Virenscanner oder Firewall anlegen müssen, um dieses abspielen zu können.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET Live Video Selection /Live_Video */
quickInstallGerRouter.route('/Live_Video/Problembehebung/AVG')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_AVG', {
            title: 'AVG Virenscanner :: Entblocken der Weboberfläche Ihrer INSTAR Netzwerkkamera',
            ampimg: '/images/Search/QI_SearchThumb_LiveVideo_AVG.jpg',
            headline: 'Live Video Troubleshooting AVG',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Live_Video/">Live Video</a></li><li><a href="/Schnell_Installation/Live_Video/Problembehebung/AVG/">AVG</a></li>',
            canonical: '/Quick_Installation/Live_Video/Troubleshooting/AVG/',
            description: 'Wenn das Video Ihrer INSTAR Sicherheitskamera geblockt wird, kann es sein, dass Sie eine Ausnahmeregel in Ihrem Virenscanner oder Firewall anlegen müssen, um dieses abspielen zu können.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET Live Video Selection /Live_Video */
quickInstallGerRouter.route('/Live_Video/Problembehebung/GDATA')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_GDATA', {
            title: 'GDATA Virenscanner :: Entblocken der Weboberfläche Ihrer INSTAR Netzwerkkamera',
            ampimg: '/images/Search/QI_SearchThumb_LiveVideo_GDATA.jpg',
            headline: 'Live Video Troubleshooting GDATA',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Live_Video/">Live Video</a></li><li><a href="/Schnell_Installation/Live_Video/Problembehebung/GDATA/">GDATA</a></li>',
            canonical: '/Quick_Installation/Live_Video/Troubleshooting/GDATA/',
            description: 'Wenn das Video Ihrer INSTAR Sicherheitskamera geblockt wird, kann es sein, dass Sie eine Ausnahmeregel in Ihrem Virenscanner oder Firewall anlegen müssen, um dieses abspielen zu können.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET Live Video Selection /Live_Video */
quickInstallGerRouter.route('/Live_Video/Problembehebung/AVIRA')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_AVIRA', {
            title: 'AVIRA Virenscanner :: Entblocken der Weboberfläche Ihrer INSTAR Netzwerkkamera',
            ampimg: '/images/Search/QI_SearchThumb_LiveVideo_Avira.jpg',
            headline: 'Live Video Troubleshooting AVIRA',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Live_Video/">Live Video</a></li><li><a href="/Schnell_Installation/Live_Video/Problembehebung/Avira/">Avira</a></li>',
            canonical: '/Quick_Installation/Live_Video/Troubleshooting/AVIRA/',
            description: 'Wenn das Video Ihrer INSTAR Sicherheitskamera geblockt wird, kann es sein, dass Sie eine Ausnahmeregel in Ihrem Virenscanner oder Firewall anlegen müssen, um dieses abspielen zu können.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET Live Video Selection /Live_Video */
quickInstallGerRouter.route('/Live_Video/Problembehebung/F-Secure')
    .get(function(req, res) {
        res.render('./Quick_Installation/Live_Video_F-Secure', {
            title: 'F-Secure Virenscanner :: Entblocken der Weboberfläche Ihrer INSTAR Netzwerkkamera',
            ampimg: '/images/Search/QI_SearchThumb_LiveVideo_F-Secure.jpg',
            headline: 'Live Video Troubleshooting F-Secure',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Live_Video/">Live Video</a></li><li><a href="/Schnell_Installation/Live_Video/Problembehebung/F-Secure/">F-Secure</a></li>',
            canonical: '/Quick_Installation/Live_Video/Troubleshooting/F-Secure/',
            description: 'Wenn das Video Ihrer INSTAR Sicherheitskamera geblockt wird, kann es sein, dass Sie eine Ausnahmeregel in Ihrem Virenscanner oder Firewall anlegen müssen, um dieses abspielen zu können.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET Creating user accounts on your camera /Creating_User_Accounts */
quickInstallGerRouter.route('/Benutzerverwaltung')
    .get(function(req, res) {
        res.render('./Quick_Installation/Creating_User_Accounts', {
            title: 'Sichern Sie den Zugriff auf Ihre INSTAR Netzwerkkamera ab',
            ampimg: '/images/Search/QI_SearchThumb_CreatingUserAccounts.jpg',
            headline: 'Ändern Sie immer die Standard Logins zu Ihrer Überwachungskamera bevor Sie diese online stellen.',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Benutzerverwaltung/">Benutzerverwaltung</a></li>',
            canonical: '/Quick_Installation/Creating_User_Accounts/',
            description: 'Jede INSTAR Netzwerkkamera wird mit einem Standard Benutzernamen und Benutzerkennwort ausgeliefert. Dieses sollte umgehend personalisiert werden, bevor Sie den Fernzugriff auf die Kamera zulassen!',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET WebUI and Firmware Upgrade /WebUI_And_Firmware_Upgrade */
quickInstallGerRouter.route('/WebUI_und_Firmware_Upgrade')
    .get(function(req, res) {
        res.render('./Quick_Installation/WebUI_And_Firmware_Upgrade', {
            title: 'Weboberfläche und Firmware Upgrade für Ihre INSTAR Full HD Sicherheitskamera',
            ampimg: '/images/Search/QI_SearchThumb_WebUIFirmwareUpgrade_1080p.jpg',
            headline: 'Weboberfläche und Firmware Upgrade für Ihre INSTAR 1080p Überwachungskamera',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/WebUI_und_Firmware_Upgrade/">Software Upgrade</a></li>',
            canonical: '/Quick_Installation/WebUI_And_Firmware_Upgrade/',
            description: 'INSTAR arbeitet ständig an Verbesserungen und Erweiterungen der Full HD Kamersoftware. Es empfiehlt sich daher regelmäßig zu prüfen, ob ein Update verfügbar ist und dieses umgehend aufzuspielen. Für die Kameramodelle IN-9008 Full HD, IN-8015 Full HD und IN-9020 Full HD.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET /WebUI_And_Firmware_Upgrade_HD */
quickInstallGerRouter.route('/WebUI_und_Firmware_Upgrade/720p_Kameras')
    .get(function(req, res) {
        res.render('./Quick_Installation/WebUI_And_Firmware_Upgrade_HD', {
            title: 'Weboberfläche und Firmware Upgrade für INSTAR HD Sicherheitskameras',
            ampimg: '/images/Search/QI_SearchThumb_WebUIFirmwareUpgrade_720p.jpg',
            headline: 'Weboberfläche und Firmware Upgrade für INSTAR 720p Netzwerkkameras',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/WebUI_und_Firmware_Upgrade/">Software Upgrade</a></li><li><a href="/Schnell_Installation/WebUI_und_Firmware_Upgrade/720p_Kameras/">720p Kameras</a></li>',
            canonical: '/Quick_Installation/WebUI_And_Firmware_Upgrade/720p_Cameras/',
            description: 'INSTAR arbeitet ständig an Verbesserungen und Erweiterungen der HD Kamersoftware. Es empfiehlt sich daher regelmäßig zu prüfen, ob ein Update verfügbar ist und dieses umgehend aufzuspielen. Für die Kameramodelle IN-7011 HD, IN-6014 HD, IN-6012 HD, IN-6001 HD, IN-5907 HD und IN-5905 HD.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET /WebUI_And_Firmware_Upgrade_VGA */
quickInstallGerRouter.route('/WebUI_und_Firmware_Upgrade/VGA_Kameras')
    .get(function(req, res) {
        res.render('./Quick_Installation/WebUI_And_Firmware_Upgrade_VGA', {
            title: 'Weboberfläche und Firmware Upgrade für VGA Überwachungskameras',
            ampimg: '/images/Search/QI_SearchThumb_WebUIFirmwareUpgrade_VGA.jpg',
            headline: 'Weboberfläche und Firmware Upgrade für VGA Sicherheitskameras',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/WebUI_und_Firmware_Upgrade/">Software Upgrade</a></li><li><a href="/Schnell_Installation/WebUI_und_Firmware_Upgrade/VGA_Kameras/">VGA Kameras</a></li>',
            canonical: '/Quick_Installation/WebUI_And_Firmware_Upgrade/VGA_Cameras/',
            description: 'INSTAR arbeitet ständig an Verbesserungen und Erweiterungen der VGA Kamersoftware. Es empfiehlt sich daher regelmäßig zu prüfen, ob ein Update verfügbar ist und dieses umgehend aufzuspielen. Für die Kameramodelle IN-3011, IN-3010, IN-3001, IN-2908, IN-2907 und IN-2905.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET /How_To_Clear_Your_Browsing_History */
quickInstallGerRouter.route('/Leeren_des_Browserverlaufs')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History', {
            title: 'Wie leert man den Browserverlauf?',
            ampimg: '/images/Search/QI_SearchThumb_ClearBrowsingHistory.jpg',
            headline: 'Nach einem Update der Weboberfläche Ihrer INSTAR IP Kamera, kann es notwendig sein, das man die Browser Historie löschen muss, bevor diese richtig angezeigt wird.',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Leeren_des_Browserverlaufs/">Wie leert man den Browserverlauf?</a></li>',
            canonical: '/Quick_Installation/How_To_Clear_Your_Browsing_History/',
            description: 'Nach einem Update der Weboberfläche Ihrer INSTAR IP Kamera, kann es notwendig sein, das man die Browser Historie löschen muss, bevor diese richtig angezeigt wird.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET /Internet_Explorer */
quickInstallGerRouter.route('/Leeren_des_Browserverlaufs/Internet_Explorer')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History_Internet_Explorer', {
            title: 'Wie leert man den Browserverlauf Internet Explorer',
            ampimg: '/images/Search/QI_SearchThumb_ClearBrowsingHistory_IE.jpg',
            headline: 'Nach einem Update der Weboberfläche Ihrer INSTAR IP Kamera, kann es notwendig sein, das man die Browser Historie löschen muss, bevor diese richtig angezeigt wird.',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Leeren_des_Browserverlaufs/">Browserverlauf</a></li><li><a href="/Schnell_Installation/Leeren_des_Browserverlaufs/Internet_Explorer/">Internet Explorer</a></li>',
            canonical: '/Quick_Installation/How_To_Clear_Your_Browsing_History/Internet_Explorer/',
            description: 'Nach einem Update der Weboberfläche Ihrer INSTAR IP Kamera, kann es notwendig sein, das man die Internet Explorer Historie löschen muss, bevor diese richtig angezeigt wird.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET /Mozilla_Firefox */
quickInstallGerRouter.route('/Leeren_des_Browserverlaufs/Mozilla_Firefox')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History_Mozilla_Firefox', {
            title: 'Wie leert man den Browserverlauf Mozilla Firefox',
            ampimg: '/images/Search/QI_SearchThumb_ClearBrowsingHistory_Firefox.jpg',
            headline: 'Nach einem Update der Weboberfläche Ihrer INSTAR IP Kamera, kann es notwendig sein, das man die Browser Historie löschen muss, bevor diese richtig angezeigt wird.',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Leeren_des_Browserverlaufs/">Browserverlauf</a></li><li><a href="/Schnell_Installation/Leeren_des_Browserverlaufs/Mozilla_Firefox/">Mozilla Firefox</a></li>',
            canonical: '/Quick_Installation/How_To_Clear_Your_Browsing_History/Mozilla_Firefox/',
            description: 'Nach einem Update der Weboberfläche Ihrer INSTAR IP Kamera, kann es notwendig sein, das man die Mozilla Firefox Historie löschen muss, bevor diese richtig angezeigt wird.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET /Google_Chromium */
quickInstallGerRouter.route('/Leeren_des_Browserverlaufs/Google_Chromium')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History_Google_Chromium', {
            title: 'Wie leert man den Browserverlauf Google Chromium',
            ampimg: '/images/Search/QI_SearchThumb_ClearBrowsingHistory_Chrome.jpg',
            headline: 'Nach einem Update der Weboberfläche Ihrer INSTAR IP Kamera, kann es notwendig sein, das man die Browser Historie löschen muss, bevor diese richtig angezeigt wird.',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Leeren_des_Browserverlaufs/">Browserverlauf</a></li><li><a href="/Schnell_Installation/Leeren_des_Browserverlaufs/Google_Chromium/">Google Chromium</a></li>',
            canonical: '/Quick_Installation/How_To_Clear_Your_Browsing_History/Google_Chromium/',
            description: 'Nach einem Update der Weboberfläche Ihrer INSTAR IP Kamera, kann es notwendig sein, das man die Google Chrome Historie löschen muss, bevor diese richtig angezeigt wird.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET /Opera */
quickInstallGerRouter.route('/Leeren_des_Browserverlaufs/Opera')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History_Opera', {
            title: 'Wie leert man den Browserverlauf Opera',
            ampimg: '/images/Search/QI_SearchThumb_ClearBrowsingHistory_Opera.jpg',
            headline: 'Nach einem Update der Weboberfläche Ihrer INSTAR IP Kamera, kann es notwendig sein, das man die Browser Historie löschen muss, bevor diese richtig angezeigt wird.',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Leeren_des_Browserverlaufs/">Browserverlauf</a></li><li><a href="/Schnell_Installation/Leeren_des_Browserverlaufs/Opera/">Opera</a></li>',
            canonical: '/Quick_Installation/How_To_Clear_Your_Browsing_History/Opera/',
            description: 'Nach einem Update der Weboberfläche Ihrer INSTAR IP Kamera, kann es notwendig sein, das man die Opera Historie löschen muss, bevor diese richtig angezeigt wird.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET /Microsoft_Edge */
quickInstallGerRouter.route('/Leeren_des_Browserverlaufs/Microsoft_Edge')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History_Microsoft_Edge', {
            title: 'Wie leert man den Browserverlauf Microsoft Edge',
            ampimg: '/images/Search/QI_SearchThumb_ClearBrowsingHistory_Edge.jpg',
            headline: 'Nach einem Update der Weboberfläche Ihrer INSTAR IP Kamera, kann es notwendig sein, das man die Browser Historie löschen muss, bevor diese richtig angezeigt wird.',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Leeren_des_Browserverlaufs/">Browserverlauf</a></li><li><a href="/Schnell_Installation/Leeren_des_Browserverlaufs/Microsoft_Edge/">Microsoft Edge</a></li>',
            canonical: '/Quick_Installation/How_To_Clear_Your_Browsing_History/Microsoft_Edge/',
            description: 'Nach einem Update der Weboberfläche Ihrer INSTAR IP Kamera, kann es notwendig sein, das man die Microsoft Edge Historie löschen muss, bevor diese richtig angezeigt wird.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET /Vivaldi */
quickInstallGerRouter.route('/Leeren_des_Browserverlaufs/Vivaldi')
    .get(function(req, res) {
        res.render('./Quick_Installation/How_To_Clear_Your_Browsing_History_Vivaldi', {
            title: 'Wie leert man den Browserverlauf Vivaldi',
            ampimg: '/images/Search/QI_SearchThumb_ClearBrowsingHistory_Vivaldi.jpg',
            headline: 'Nach einem Update der Weboberfläche Ihrer INSTAR IP Kamera, kann es notwendig sein, das man die Browser Historie löschen muss, bevor diese richtig angezeigt wird.',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Leeren_des_Browserverlaufs/">Browserverlauf</a></li><li><a href="/Schnell_Installation/Leeren_des_Browserverlaufs/Vivaldi/">Vivaldi</a></li>',
            canonical: '/Quick_Installation/How_To_Clear_Your_Browsing_History/Vivaldi/',
            description: 'Nach einem Update der Weboberfläche Ihrer INSTAR IP Kamera, kann es notwendig sein, das man die Vivaldi Historie löschen muss, bevor diese richtig angezeigt wird.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET How to set up a Wireless Connection /Set_Up_A_Wireless_Connection */
quickInstallGerRouter.route('/Herstellen_der_WLAN_Verbindung')
    .get(function(req, res) {
        res.render('./Quick_Installation/Set_Up_A_Wireless_Connection', {
            title: 'Herstellen der WLAN Verbindung zu Ihrer INSTAR Netzwerkkamera',
            ampimg: '/images/Search/QI_SearchThumb_WLAN.jpg',
            headline: 'Wie bindet man eine INSTAR IP Kamera ins WiFi Netzwerk ein?',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/Herstellen_der_WLAN_Verbindung/">Herstellen der WLAN Verbindung</a></li>',
            canonical: '/Quick_Installation/Set_Up_A_Wireless_Connection/',
            description: 'Sie möchten Ihre INSTAR WLAN Kamera kabellos betreiben? Lernen Sie hier, wie Sie Ihre Kamera und Ihren WLAN Router konfigurieren müssen, um die Kamera ins WiFi Netz einzubinden.',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

/* GET /ONVIF */
quickInstallGerRouter.route('/ONVIF')
    .get(function(req, res) {
        res.render('./Quick_Installation/ONVIF', {
            title: 'Der ONVIF Standard für Netzwerk Überwachungsprodukte',
            ampimg: '/images/Search/QI_SearchThumb_ONVIF.jpg',
            headline: 'Die Industrie für Netzwerk Überwachungsprodukte hat den offenen ONVIF Standard entwickelt, der es Kameras und Aufnahme-Geräten erlaubt untereinander im Netzwerk zu kommunizieren. Alle INSTAR IP Kameras sinde kompatibel mit dem ONVIF Profil S',
            breadcrumbs: '<li><a href="/">Home</a></li><li><a href="/Schnell_Installation/">Schnell Installation</a></li><li><a href="/Schnell_Installation/ONVIF/">ONVIF</a></li>',
            canonical: '/Quick_Installation/ONVIF/',
            description: 'Die Industrie für Netzwerk Überwachungsprodukte hat den offenen ONVIF Standard entwickelt, der es Kameras und Aufnahme-Geräten erlaubt untereinander im Netzwerk zu kommunizieren. Alle INSTAR IP Kameras sinde kompatibel mit dem ONVIF Profil S',
      			pacc: '',
      			ptab: 'hidden',
      			qiacc: 'expanded',
      			qitab: '',
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

module.exports = quickInstallGerRouter;
