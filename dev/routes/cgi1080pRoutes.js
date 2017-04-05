var express = require('express');
var cgi1080pRouter = express.Router();

cgi1080pRouter.get('/', function(req, res) {
  res.render('./Advanced_User/1080p_CGIs/1080p_Series_CGI_List', {
      title: '1080p Series CGI List',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li>',
    });
});

cgi1080pRouter.get('/Software_Menu', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_Series_CGI_Software', {
      title: '1080p Software CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Software_Menu/">Software Menu</a></li>',
    });
});

cgi1080pRouter.get('/Network_Menu', function(req, res) {
  res.render('./Web_User_Interface/1080p/WebUserInterface_HD-Series_Network.ejs', {
      title: '1080p Network CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Network_Menu/">Network Menu</a></li>',
    });
});

cgi1080pRouter.get('/System_Menu', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_Series_CGI_System', {
      title: '1080p System CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/System_Menu/">System Menu</a></li>',
    });
});

cgi1080pRouter.get('/Multimedia_Menu', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_Series_CGI_Multimedia', {
      title: '1080p Multimedia CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Multimedia_Menu/">Multimedia Menu</a></li>',
    });
});

cgi1080pRouter.get('/Alarm_Menu', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_Series_CGI_Alarm', {
      title: '1080p Alarm CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Alarm_Menu/">Alarm Menu</a></li>',
    });
});

cgi1080pRouter.get('/Recording_Menu', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_Series_CGI_Recording', {
      title: '1080p Recording CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Recording_Menu/">Recording Menu</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_Complete_CGI_List', {
      title: '1080p Series Complete CGI List',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Video_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getvideoattr', {
      title: '1080p cmd=getvideoattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_Video_Attribute/">Get Video Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Video_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=setvideoattr', {
      title: '1080p cmd=setvideoattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Set_Video_Attribute/">Set Video Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Video_Encoder_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getvencattr', {
      title: '1080p cmd=getvencattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_Video_Encoder_Attribute/">Get Video Encoder Attributee</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Video_Encoder_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=setvencattr', {
      title: '1080p cmd=setvencattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Set_Video_Encoder_Attribute/">Set Video Encoder Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Image_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getimageattr', {
      title: '1080p cmd=getimageattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_Image_Attribute/">Get Image Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Image_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=setimageattr', {
      title: '1080p cmd=setimageattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Set_Image_Attribute/">Set Image Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Overlay_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getoverlayattr', {
      title: '1080p cmd=getoverlayattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_Overlay_Attribute/">Get Overlay Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Overlay_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=setoverlayattr', {
      title: '1080p cmd=setoverlayattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Set_Overlay_Attribute/">Set Overlay Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Mobile_Image_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getmobilesnapattr', {
      title: '1080p cmd=getmobilesnapattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_Mobile_Image_Attribute/">Get Mobile Image Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Mobile_Image_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=setmobilesnapattr', {
      title: '1080p cmd=setmobilesnapattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Set_Mobile_Image_Attribute/">Set Mobile Image Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Audio_Encoder_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getaencattr', {
      title: '1080p cmd=getaencattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_Audio_Encoder_Attribute/">Get Audio Encoder Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Audio_Encoder_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=setaencattr', {
      title: '1080p cmd=setaencattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Set_Audio_Encoder_Attribute/">Set Audio Encoder Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Audio-In_Volume_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getaudioinvolume', {
      title: '1080p cmd=getaudioinvolume',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_Audio-In_Volume_Attribute/">Get Audio-In Volume Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Audio-In_Volume_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=setaudioinvolume', {
      title: '1080p cmd=setaudioinvolume',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Set_Audio-In_Volume_Attribute/">Set Audio-In Volume Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Audio-Out_Volume_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getaudiooutvolume', {
      title: '1080p cmd=getaudiooutvolume',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_Audio-Out_Volume_Attribute/">Get Audio-Out Volume Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Audio-Out_Volume_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=setaudiooutvolume', {
      title: '1080p cmd=setaudiooutvolume',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Set_Audio-Out_Volume_Attribute/">Set Audio-Out Volume Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Request_Keyframe', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=requestifrm', {
      title: '1080p cmd=requestifrm',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Request_Keyframe/">Request Keyframe</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Infrared_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getinfrared', {
      title: '1080p cmd=getinfrared',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_Infrared_Attribute/">Get_Infrared_Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Infrared_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=setinfrared', {
      title: '1080p cmd=setinfrared',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Set_Infrared_Attribute/">Set Infrared Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Network_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getnetattr', {
      title: '1080p cmd=getnetattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_Network_Attribute/">Get Network Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Network_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=setnetattr', {
      title: '1080p cmd=setnetattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Set_Network_Attribute/">Set Network Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_HTTP_Port', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=gethttpport', {
      title: '1080p cmd=gethttpport',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_HTTP_Port/">Get HTTP Port</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_HTTP_Port', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=sethttpport', {
      title: '1080p cmd=sethttpport',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Set_HTTP_Port/">Set HTTP Port</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_RTSP_Port', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getrtspport', {
      title: '1080p cmd=getrtspport',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_RTSP_Port/">Get RTSP Port</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_RTSP_Port', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=setrtspport', {
      title: '1080p cmd=setrtspport',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Set_RTSP_Port/">Set RTSP Port</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Internet_IP', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getinterip', {
      title: '1080p cmd=getinterip',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_Internet_IP/">Get Internet IP</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_UPnP_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getupnpattr', {
      title: '1080p cmd=getupnpattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_UPnP_Attribute/">Get UPnP Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_UPnP_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=setupnpattr', {
      title: '1080p cmd=setupnpattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Set_UPnP_Attribute/">Set UPnP Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_ONVIF_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getonvifattr', {
      title: '1080p cmd=getonvifattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_ONVIF_Attribute/">Get ONVIF Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_ONVIF_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=setonvifattr', {
      title: '1080p cmd=setonvifattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Set_ONVIF_Attribute/">Set ONVIF Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Wireless_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getwirelessattr', {
      title: '1080p cmd=getwirelessattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_Wireless_Attribute/">Get Wireless Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Wireless_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=setwirelessattr', {
      title: '1080p cmd=setwirelessattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Set_Wireless_Attribute/">Set Wireless Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Search_Wireless', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=searchwireless', {
      title: '1080p cmd=searchwireless',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Search_Wireless/">Search Wireless</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Check_Wireless_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=chkwirelessattr', {
      title: '1080p cmd=chkwirelessattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Check_Wireless_Attribute/">Check Wireless Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Check_Wireless_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getchkwireless', {
      title: '1080p cmd=getchkwireless',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_Check_Wireless_Attribute/">Get Check Wireless Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Thirdparty_DDNS_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=get3thddnsattr', {
      title: '1080p cmd=get3thddnsattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_Thirdparty_DDNS_Attribute/">Get Thirdparty DDNS Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Thirdparty_DDNS_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=set3thddnsattr', {
      title: '1080p cmd=set3thddnsattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Set_Thirdparty_DDNS_Attribute/">Set Thirdparty DDNS Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/PTZ_Control', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=ptzctrl', {
      title: '1080p cmd=ptzctrl',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/PTZ_Control/">PTZ Control</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/PTZ_Preset', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=preset', {
      title: '1080p cmd=preset',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/PTZ_Preset/">PTZ Preset</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/PTZ_Move_Up', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=ptzup', {
      title: '1080p cmd=ptzup',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/PTZ_Move_Up/">PTZ Move Up</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/PTZ_Move_Down', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=ptzdown', {
      title: '1080p cmd=ptzdown',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/PTZ_Move_Down/">PTZ Move Down</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/PTZ_Move_Left', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=ptzleft', {
      title: '1080p cmd=ptzleft',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/PTZ_Move_Left/">PTZ Move Left</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/PTZ_Move_Right', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=ptzright', {
      title: '1080p cmd=ptzright',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/PTZ_Move_Right/">PTZ Move Right</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/PTZ_Zoom_In', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=ptzzoomin', {
      title: '1080p cmd=ptzzoomin',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/PTZ_Zoom_In/">PTZ Zoom In</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/PTZ_Zoom_Out', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=ptzzoomout', {
      title: '1080p cmd=ptzzoomout',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/PTZ_Zoom_Out/">PTZ Zoom Out</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Motion_Detection_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getmdattr', {
      title: '1080p cmd=getmdattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_Motion_Detection_Attribute/">Get Motion Detection Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Motion_Detection_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=setmdattr', {
      title: '1080p cmd=setmdattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Set_Motion_Detection_Attribute/">Set Motion Detection Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Alarm_Input_Output_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getioattr', {
      title: '1080p cmd=getioattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_Alarm_Input_Output_Attribute/">Get Alarm Input Output Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Alarm_Input_Output_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=setioattr', {
      title: '1080p cmd=setioattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Set_Alarm_Input_Output_Attribute/">Set Alarm Input Output Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Motion_Detection_Alarm_Status', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getmdalarm', {
      title: '1080p cmd=getmdalarm',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_Motion_Detection_Alarm_Status/">Get Motion Detection Alarm Status</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Motion_Detection_Alarm_Status', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=setmdalarm', {
      title: '1080p cmd=setmdalarm',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Set_Motion_Detection_Alarm_Status/">Set Motion Detection Alarm Status</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Alarm_Relay_Delay_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getrelayattr', {
      title: '1080p cmd=getrelayattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_Alarm_Relay_Delay_Attribute/">Get Alarm Relay Delay Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Alarm_Relay_Delay_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=setrelayattr', {
      title: '1080p cmd=setrelayattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Set_Alarm_Relay_Delay_Attribute/">Set Alarm Relay Delay Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Alarm_Snap_Quantity_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getalarmsnapattr', {
      title: '1080p cmd=getalarmsnapattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_Alarm_Snap_Quantity_Attribute/">Get Alarm Snap Quantity Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Alarm_Snap_Quantity_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=setalarmsnapattr', {
      title: '1080p cmd=setalarmsnapattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Set_Alarm_Snap_Quantity_Attribute/">Set Alarm Snap Quantity Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Alarm_And_Planned_Recording_Schedule', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getscheduleex', {
      title: '1080p cmd=getscheduleex',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_Alarm_And_Planned_Recording_Schedule/">Get Alarm And Planned Recording Schedule</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Alarm_And_Planned_Recording_Schedule', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=setscheduleex', {
      title: '1080p cmd=setscheduleex',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Set_Alarm_And_Planned_Recording_Schedule/">Set Alarm And Planned Recording Schedule</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Planned_Recording_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getplanrecattr', {
      title: '1080p cmd=getplanrecattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_Planned_Recording_Attribute/">Get Planned Recording Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Planned_Recording_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=setplanrecattr', {
      title: '1080p cmd=setplanrecattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Set_Planned_Recording_Attribute/">Set Planned Recording Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Alarm_Server_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getalarmserverattr', {
      title: '1080p cmd=getalarmserverattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_Alarm_Server_Attribute/">Get Alarm Server Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Alarm_Server_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=setalarmserverattr', {
      title: '1080p cmd=setalarmserverattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Set_Alarm_Server_Attribute/">Set Alarm Server Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_User_Attributes', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getuserattr', {
      title: '1080p cmd=getuserattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_User_Attributes/">Get User Attributes</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_User_Attributes', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=setuserattr', {
      title: '1080p cmd=setuserattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Set_User_Attributes/">Set User Attributes</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Active_User_Info', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getuserinfo', {
      title: '1080p cmd=getuserinfo',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_Active_User_Info/">Get Active User Info</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Snapshot_Attributes', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getsnaptimerattrex', {
      title: '1080p cmd=getsnaptimerattrex',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_Snapshot_Attributes/">Get Snapshot Attributes</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Snapshot_Attributes', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=setsnaptimerattrex', {
      title: '1080p cmd=setsnaptimerattrex',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Set_Snapshot_Attributes/">Set Snapshot Attributes</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_FTP_Attributes', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getftpattr', {
      title: '1080p cmd=getftpattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_FTP_Attributes/">Get FTP Attributes</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_FTP_Attributes', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=setftpattr', {
      title: '1080p cmd=setftpattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Set_FTP_Attributes/">Set FTP Attributes</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Test_FTP', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=testftp', {
      title: '1080p cmd=testftp',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Test_FTP/">Test FTP</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_SMTP_Attributes', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getsmtpattr', {
      title: '1080p cmd=getsmtpattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_SMTP_Attributes/">Get SMTP Attributes</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_SMTP_Attributes', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=setsmtpattr', {
      title: '1080p cmd=setsmtpattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Set_SMTP_Attributes/">Set SMTP Attributes</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Test_SMTP', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=testsmtp', {
      title: '1080p cmd=testsmtp',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Test_SMTP/">Test SMTP</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Format_SD_Card', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=sdfrmt', {
      title: '1080p cmd=sdfrmt',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Format_SD_Card/">Format SD Card</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Unmount_SD_Card', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=sdstop', {
      title: '1080p cmd=sdstop',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Unmount_SD_Card/">Unmount SD Card</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Device_Info', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getserverinfo', {
      title: '1080p cmd=getserverinfo',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_Device_Info/">Get Device Info</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Device_Type', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getdevtype', {
      title: '1080p cmd=getdevtype',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_Device_Type/">Get Device Type</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Streaming_User_Number', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getstreamnum', {
      title: '1080p cmd=getstreamnum',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_Streaming_User_Number/">Get Streaming User Number</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Server_Time', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getservertime', {
      title: '1080p cmd=getservertime',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_Server_Time/">Get Server Time</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Server_Time', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=setservertime', {
      title: '1080p cmd=setservertime',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Set_Server_Time/">Set Server Time</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_NTP_Server_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getntpattr', {
      title: '1080p cmd=getntpattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_NTP_Server_Attribute/">Get NTP Server Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_NTP_Server_Attribute', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=setntpattr', {
      title: '1080p cmd=setntpattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Set_NTP_Server_Attribute/">Set NTP Server Attribute</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Multi-Device_Parameter', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=getdevices', {
      title: '1080p cmd=getdevices',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_Multi-Device_Parameter/">Get Multi-Device Parameter</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Multi-Device_Parameter', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=setdevices', {
      title: '1080p cmd=setdevices',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Set_Multi-Device_Parameter/">Set Multi-Device Parameter</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/MJPEG_Videostream', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_mjpegstream', {
      title: '1080p mjpegstream',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/MJPEG_Videostream/">MJPEG Videostream</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Snapshot_Size', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=snapimage', {
      title: '1080p cmd=snapimage',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Set_Snapshot_Size/">Set Snapshot Size</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/System_Reset', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_Sysreset', {
      title: '1080p Sysreset',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/System_Reset/">System Reset</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/System_Reboot', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_Sysreboot', {
      title: '1080p Sysreboot',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/System_Reboot/">System Reboot</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/System_Backup', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_backup', {
      title: '1080p backup',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/System_Backup/">System Backup</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/System_Restore', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_restore', {
      title: '1080p restore',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/System_Restore/">System Restore</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/System_Upgrade', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_upgrade', {
      title: '1080p upgrade',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/System_Upgrade/">System Upgrade</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Admin_Variables', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=get_instar_admin', {
      title: '1080p cmd=get_instar_admin',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_Admin_Variables/">Get Admin Variables</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Set_Admin_Variables', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=set_instar_admin', {
      title: '1080p cmd=set_instar_admin',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Set_Admin_Variables/">Set Admin Variables</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Get_Login_Data', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=logsync', {
      title: '1080p cmd=logsync',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Get_Login_Data/">Get Login Data</a></li>',
    });
});

cgi1080pRouter.get('/Complete_CGI_List/Clear_Login_Data', function(req, res) {
  res.render('./Web_User_Interface/1080p/1080p_cmd=cleanlog', {
      title: '1080p cmd=cleanlog',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Advanced User</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Commands</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/">1080p Serie</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/1080p_Series_CGI_List/Complete_CGI_List/Clear_Login_Data/">Clear Login Data</a></li>',
    });
});

module.exports = cgi1080pRouter;