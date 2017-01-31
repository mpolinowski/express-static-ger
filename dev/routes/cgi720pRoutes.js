var express = require('express');
var cgi720pRouter = express.Router();

cgi720pRouter.get('/', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_List', {
      title: '720p Series CGI List',
        breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li>',
    });
});

cgi720pRouter.get('/Software_Menu', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_Software', {
      title: '720p Software CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Software_Menu/">Software</a></li>',
    });
});

cgi720pRouter.get('/Software_Menu/Language', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_Software_Language', {
      title: '720p Software CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Software_Menu/">Software</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Software_Menu/Language/">Language</a></li>',
    });
});

cgi720pRouter.get('/Software_Menu/Reboot-Reset', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_Software_Reboot', {
      title: '720p Software CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Software_Menu/">Software</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Software_Menu/Reboot-Reset/">Reboot & Reset</a></li>',
    });
});

cgi720pRouter.get('/Software_Menu/Backup-Restore', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_Software_Backup', {
      title: '720p Software CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Software_Menu/">Software</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Software_Menu/Backup-Restore/">Backup & Restore</a></li>',
    });
});

cgi720pRouter.get('/Software_Menu/Update', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_Software_Update', {
      title: '720p Software CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Software_Menu/">Software</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Software_Menu/Update/">Update</a></li>',
    });
});

cgi720pRouter.get('/Network_Menu', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_Network', {
      title: '720p Network CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Network_Menu/">Network</a></li>',
    });
});

cgi720pRouter.get('/Network_Menu/IP_Config', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_Network_IP', {
      title: '720p Network CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Network_Menu/">Network</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Network_Menu/IP_Config/">IP Configuration</a></li>',
    });
});

cgi720pRouter.get('/Network_Menu/DDNS', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_Network_DDNS', {
      title: '720p Network CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Network_Menu/">Network</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Network_Menu/DDNS/">DDNS</a></li>',
    });
});

cgi720pRouter.get('/Network_Menu/WiFi', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_Network_WiFi', {
      title: '720p Network CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Network_Menu/">Network</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Network_Menu/WiFi/">WiFi</a></li>',
    });
});

cgi720pRouter.get('/Network_Menu/P2P', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_Network_P2P', {
      title: '720p Network CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Network_Menu/">Network</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Network_Menu/P2P/">P2P</a></li>',
    });
});

cgi720pRouter.get('/Network_Menu/UPnP', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_Network_UPnP', {
      title: '720p Network CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Network_Menu/">Network</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Network_Menu/UPnP/">UPnP</a></li>',
    });
});

cgi720pRouter.get('/Network_Menu/Push_Service', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_Network_Push', {
      title: '720p Network CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Network_Menu/">Network</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Network_Menu/Push_Service/">Push Service</a></li>',
    });
});

cgi720pRouter.get('/System_Menu', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_System', {
      title: '720p System CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/System_Menu/">System</a></li>',
    });
});

cgi720pRouter.get('/System_Menu/Info', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_System_Info', {
      title: '720p System CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/System_Menu/">System</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/System_Menu/Info/">Info</a></li>',
    });
});

cgi720pRouter.get('/System_Menu/Date-Time', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_System_Date', {
      title: '720p System CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/System_Menu/">System</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/System_Menu/Date-Time/">Date & Time</a></li>',
    });
});

cgi720pRouter.get('/System_Menu/User', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_System_User', {
      title: '720p System CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/System_Menu/">System</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/System_Menu/User/">User</a></li>',
    });
});

cgi720pRouter.get('/System_Menu/Status_LED', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_System_Status', {
      title: '720p System CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/System_Menu/">System</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/System_Menu/Status_LED/">Status LED</a></li>',
    });
});

cgi720pRouter.get('/System_Menu/IR_LEDs', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_System_IR', {
      title: '720p System CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/System_Menu/">System</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/System_Menu/IR_LEDs/">IR LEDs</a></li>',
    });
});

cgi720pRouter.get('/System_Menu/ONVIF', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_System_ONVIF', {
      title: '720p System CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/System_Menu/">System</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/System_Menu/ONVIF/">ONVIF</a></li>',
    });
});

cgi720pRouter.get('/System_Menu/PTZ', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_System_PTZ', {
      title: '720p System CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/System_Menu/">System</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/System_Menu/PTZ/">PTZ</a></li>',
    });
});

cgi720pRouter.get('/System_Menu/PTZ_Tour', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_System_Tour', {
      title: '720p System CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/System_Menu/">System</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/System_Menu/PTZ_Tour/">PTZ Tour</a></li>',
    });
});

cgi720pRouter.get('/System_Menu/Log', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_System_Log', {
      title: '720p System CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/System_Menu/">System</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/System_Menu/Log/">Log</a></li>',
    });
});

cgi720pRouter.get('/Multimedia_Menu', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_Multimedia', {
      title: '720p Multimedia CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Multimedia_Menu/">Multimedia</a></li>',
    });
});

cgi720pRouter.get('/Multimedia_Menu/Audio', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_Multimedia_Audio', {
      title: '720p Multimedia CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Multimedia_Menu/">Multimedia</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Multimedia_Menu/Audio/">Audio</a></li>',
    });
});

cgi720pRouter.get('/Multimedia_Menu/Video', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_Multimedia_Video', {
      title: '720p Multimedia CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Multimedia_Menu/">Multimedia</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Multimedia_Menu/Video/">Video</a></li>',
    });
});

cgi720pRouter.get('/Multimedia_Menu/Image', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_Multimedia_Image', {
      title: '720p Multimedia CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Multimedia_Menu/">Multimedia</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Multimedia_Menu/Image/">Image</a></li>',
    });
});

cgi720pRouter.get('/Alarm_Menu', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_Alarm', {
      title: '720p Alarm CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Alarm_Menu/">Alarm</a></li>',
    });
});

cgi720pRouter.get('/Alarm_Menu/Areas', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_Alarm_Areas', {
      title: '720p Alarm CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Alarm_Menu/">Alarm</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Alarm_Menu/Areas/">Areas</a></li>',
    });
});

cgi720pRouter.get('/Alarm_Menu/Privacy_Mask', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_Alarm_Privacy', {
      title: '720p Alarm CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Alarm_Menu/">Alarm</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Alarm_Menu/Privacy_Mask/">Privacy Mask</a></li>',
    });
});

cgi720pRouter.get('/Alarm_Menu/Actions', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_Alarm_Actions', {
      title: '720p Alarm CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Alarm_Menu/">Alarm</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Alarm_Menu/Actions/">Actions</a></li>',
    });
});

cgi720pRouter.get('/Alarm_Menu/Schedule', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_Alarm_Schedule', {
      title: '720p Alarm CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Alarm_Menu/">Alarm</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Alarm_Menu/Schedule/">Schedule</a></li>',
    });
});

cgi720pRouter.get('/Alarm_Menu/SMTP_Server', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_Alarm_SMTP', {
      title: '720p Alarm CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Alarm_Menu/">Alarm</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Alarm_Menu/SMTP_Server/">SMTP Server</a></li>',
    });
});

cgi720pRouter.get('/Alarm_Menu/Email', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_Alarm_Email', {
      title: '720p Alarm CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Alarm_Menu/">Alarm</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Alarm_Menu/Email/">Email</a></li>',
    });
});

cgi720pRouter.get('/Alarm_Menu/FTP', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_Alarm_FTP', {
      title: '720p Alarm CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Alarm_Menu/">Alarm</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Alarm_Menu/FTP/">FTP</a></li>',
    });
});

cgi720pRouter.get('/Alarm_Menu/Alarm_Server', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_Alarm_Server', {
      title: '720p Alarm CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Alarm_Menu/">Alarm</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Alarm_Menu/Alarm_Server/">Alarm Server</a></li>',
    });
});

cgi720pRouter.get('/Alarm_Menu/Audio_Alarm', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_Alarm_Audio', {
      title: '720p Alarm CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Alarm_Menu/">Alarm</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Alarm_Menu/Audio_Alarm/">Audio Alarm</a></li>',
    });
});

cgi720pRouter.get('/Alarm_Menu/SD_Card', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_Alarm_SD', {
      title: '720p Alarm CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Alarm_Menu/">Alarm</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Alarm_Menu/SD_Card/">SD Card</a></li>',
    });
});

cgi720pRouter.get('/Recording_Menu', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_Recording', {
      title: '720p Recording CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Recording_Menu/">Recording</a></li>',
    });
});

cgi720pRouter.get('/Recording_Menu/Schedule', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_Recording_Schedule', {
      title: '720p Recording CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Recording_Menu/">Recording</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Recording_Menu/Schedule/">Schedule</a></li>',
    });
});

cgi720pRouter.get('/Recording_Menu/Video', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_Recording_Video', {
      title: '720p Recording CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Recording_Menu/">Recording</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Recording_Menu/Video/">Video</a></li>',
    });
});

cgi720pRouter.get('/Recording_Menu/Photoseries', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Series_CGI_Recording_Photoseries', {
      title: '720p Recording CGIs',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Recording_Menu/">Recording</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Recording_Menu/Photoseries/">Photoseries</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Complete_CGI_List', {
      title: '720p Series Complete CGI List',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Video_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getvideoattr', {
      title: '720p cmd=getvideoattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_Video_Attribute/">Get Video Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Video_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=setvideoattr', {
      title: '720p cmd=setvideoattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Set_Video_Attribute/">Set Video Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Video_Encoder_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getvencattr', {
      title: '720p cmd=getvencattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_Video_Encoder_Attribute/">Get Video Encoder Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Video_Encoder_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=setvencattr', {
      title: '720p cmd=setvencattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Set_Video_Encoder_Attribute/">Set Video Encoder Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Image_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getimageattr', {
      title: '720p cmd=getimageattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_Image_Attribute/">Get Image Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Image_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=setimageattr', {
      title: '720p cmd=setimageattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Set_Image_Attribute/">Set Image Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Overlay_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getoverlayattr', {
      title: '720p cmd=getoverlayattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_Overlay_Attribute/">Get Overlay Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Overlay_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=setoverlayattr', {
      title: '720p cmd=setoverlayattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Set_Overlay_Attribute/">Set Overlay Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Mobile_Image_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getmobilesnapattr', {
      title: '720p cmd=getmobilesnapattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_Mobile_Image_Attribute/">Get Mobile Image Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Mobile_Image_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=setmobilesnapattr', {
      title: '720p cmd=setmobilesnapattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Set_Mobile_Image_Attribute/">Set Mobile Image Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Audio_Encoder_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getaencattr', {
      title: '720p cmd=getaencattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_Audio_Encoder_Attribute/">Get Audio Encoder Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Audio_Encoder_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=setaencattr', {
      title: '720p cmd=setaencattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Set_Audio_Encoder_Attribute/">Set Audio Encoder Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Audio-In_Volume_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getaudioinvolume', {
      title: '720p cmd=getaudioinvolume',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_Audio-In_Volume_Attribute/">Get Audio-In Volume Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Audio-In_Volume_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=setaudioinvolume', {
      title: '720p cmd=setaudioinvolume',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Set_Audio-In_Volume_Attribute/">Set Audio-In Volume Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Audio-Out_Volume_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getaudiooutvolume', {
      title: '720p cmd=getaudiooutvolume',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_Audio-Out_Volume_Attribute/">Get Audio-Out Volume Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Audio-Out_Volume_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=setaudiooutvolume', {
      title: '720p cmd=setaudiooutvolume',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Set_Audio-Out_Volume_Attribute/">Set Audio-Out Volume Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Request_Keyframe', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=requestifrm', {
      title: '720p cmd=requestifrm',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Request_Keyframe/">Request Keyframe</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Infrared_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getinfrared', {
      title: '720p cmd=getinfrared',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_Infrared_Attribute/">Get Infrared Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Infrared_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=setinfrared', {
      title: '720p cmd=setinfrared',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Set_Infrared_Attribute/">Set Infrared Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Network_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getnetattr', {
      title: '720p cmd=getnetattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_Network_Attribute/">Get Network Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Network_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=setnetattr', {
      title: '720p cmd=setnetattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Set_Network_Attribute/">Set Network Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_HTTP_Port', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=gethttpport', {
      title: '720p cmd=gethttpport',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_HTTP_Port/">Get HTTP Port</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_HTTP_Port', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=sethttpport', {
      title: '720p cmd=sethttpport',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Set_HTTP_Port/">Set HTTP Port</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_RTSP_Port', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getrtspport', {
      title: '720p cmd=getrtspport',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_RTSP_Port/">Get RTSP Port</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_RTSP_Port', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=setrtspport', {
      title: '720p cmd=setrtspport',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Set_RTSP_Port/">Set RTSP Port</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Internet_IP', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getinterip', {
      title: '720p cmd=getinterip',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_Internet_IP/">Get Internet IP</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_UPnP_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getupnpattr', {
      title: '720p cmd=getupnpattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_UPnP_Attribute/">Get UPnP Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_UPnP_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=setupnpattr', {
      title: '720p cmd=setupnpattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Set_UPnP_Attribute/">Set UPnP Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_ONVIF_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getonvifattr', {
      title: '720p cmd=getonvifattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_ONVIF_Attribute/">Get ONVIF Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_ONVIF_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=setonvifattr', {
      title: '720p cmd=setonvifattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Set_ONVIF_Attribute/">Set ONVIF Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Wireless_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getwirelessattr', {
      title: '720p cmd=getwirelessattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_Wireless_Attribute/">Get Wireless Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Wireless_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=setwirelessattr', {
      title: '720p cmd=setwirelessattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Set_Wireless_Attribute/">Set Wireless Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Search_Wireless', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=searchwireless', {
      title: '720p cmd=searchwireless',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Search_Wireless/">Search Wireless</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Check_Wireless_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=chkwirelessattr', {
      title: '720p cmd=chkwirelessattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Check_Wireless_Attribute/">Check Wireless Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Check_Wireless_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getchkwireless', {
      title: '720p cmd=getchkwireless',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_Check_Wireless_Attribute/">Get Check Wireless Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Thirdparty_DDNS_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=get3thddnsattr', {
      title: '720p cmd=get3thddnsattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_Thirdparty_DDNS_Attribute/">Get Thirdparty DDNS Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Thirdparty_DDNS_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=set3thddnsattr', {
      title: '720p cmd=set3thddnsattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Set_Thirdparty_DDNS_Attribute/">Set Thirdparty DDNS Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/PTZ_Control', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=ptzctrl', {
      title: '720p cmd=ptzctrl',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/PTZ_Control/">PTZ Control</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/PTZ_Preset', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=preset', {
      title: '720p cmd=preset',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/PTZ_Preset/">PTZ Preset</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/PTZ_Move_Up', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=ptzup', {
      title: '720p cmd=ptzup',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/PTZ_Move_Up/">PTZ Move Up</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/PTZ_Move_Down', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=ptzdown', {
      title: '720p cmd=ptzdown',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/PTZ_Move_Down/">PTZ Move Down</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/PTZ_Move_Left', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=ptzleft', {
      title: '720p cmd=ptzleft',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/PTZ_Move_Left/">PTZ Move Left</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/PTZ_Move_Right', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=ptzright', {
      title: '720p cmd=ptzright',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/PTZ_Move_Right/">PTZ Move Right</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/PTZ_Zoom_In', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=ptzzoomin', {
      title: '720p cmd=ptzzoomin',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/PTZ_Zoom_In/">PTZ Zoom In</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/PTZ_Zoom_Out', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=ptzzoomout', {
      title: '720p cmd=ptzzoomout',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/PTZ_Zoom_Out/">PTZ Zoom Out</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Motion_Detection_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getmdattr', {
      title: '720p cmd=getmdattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_Motion_Detection_Attribute/">Get Motion Detection Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Motion_Detection_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=setmdattr', {
      title: '720p cmd=setmdattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Set_Motion_Detection_Attribute/">Set Motion Detection Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Alarm_Input_Output_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getioattr', {
      title: '720p cmd=getioattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_Alarm_Input_Output_Attribute/">Get Alarm Input Output Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Alarm_Input_Output_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=setioattr', {
      title: '720p cmd=setioattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Set_Alarm_Input_Output_Attribute/">Set Alarm Input Output Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Motion_Detection_Alarm_Status', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getmdalarm', {
      title: '720p cmd=getmdalarm',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_Motion_Detection_Alarm_Status/">Get Motion Detection Alarm Status</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Motion_Detection_Alarm_Status', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=setmdalarm', {
      title: '720p cmd=setmdalarm',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Set_Motion_Detection_Alarm_Status/">Set Motion Detection Alarm Status</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Alarm_Relay_Delay_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getrelayattr', {
      title: '720p cmd=getrelayattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_Alarm_Relay_Delay_Attribute/">Get Alarm Relay Delay Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Alarm_Relay_Delay_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=setrelayattr', {
      title: '720p cmd=setrelayattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Set_Alarm_Relay_Delay_Attribute/">Set Alarm Relay Delay Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Alarm_Snap_Quantity_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getalarmsnapattr', {
      title: '720p cmd=getalarmsnapattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_Alarm_Snap_Quantity_Attribute/">Get Alarm Snap Quantity Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Alarm_Snap_Quantity_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=setalarmsnapattr', {
      title: '720p cmd=setalarmsnapattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Set_Alarm_Snap_Quantity_Attribute/">Set Alarm Snap Quantity Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Alarm_And_Planned_Recording_Schedule', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getscheduleex', {
      title: '720p cmd=getscheduleex',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_Alarm_And_Planned_Recording_Schedule/">Get Alarm And Planned Recording Schedule</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Alarm_And_Planned_Recording_Schedule', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=setscheduleex', {
      title: '720p cmd=setscheduleex',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Set_Alarm_And_Planned_Recording_Schedule/">Set Alarm And Planned Recording Schedule</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Planned_Recording_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getplanrecattr', {
      title: '720p cmd=getplanrecattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_Planned_Recording_Attribute/">Get Planned Recording Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Planned_Recording_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=setplanrecattr', {
      title: '720p cmd=setplanrecattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Set_Planned_Recording_Attribute/">Set Planned Recording Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Alarm_Server_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getalarmserverattr', {
      title: '720p cmd=getalarmserverattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_Alarm_Server_Attribute/">Get Alarm Server Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Alarm_Server_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=setalarmserverattr', {
      title: '720p cmd=setalarmserverattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Set_Alarm_Server_Attribute/">Set Alarm Server Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_User_Attributes', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getuserattr', {
      title: '720p cmd=getuserattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/XXXXXXX/">XXXXXX</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_User_Attributes', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=setuserattr', {
      title: '720p cmd=setuserattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_User_Attributes/">Get User Attributes</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Active_User_Info', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getuserinfo', {
      title: '720p cmd=getuserinfo',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_Active_User_Info/">Get Active User Info</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Snapshot_Attributes', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getsnaptimerattrex', {
      title: '720p cmd=getsnaptimerattrex',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_Snapshot_Attributes/">Get Snapshot Attributes</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Snapshot_Attributes', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=setsnaptimerattrex', {
      title: '720p cmd=setsnaptimerattrex',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Set_Snapshot_Attributes/">Set Snapshot Attributes</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_FTP_Attributes', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getftpattr', {
      title: '720p cmd=getftpattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_FTP_Attributes/">Get FTP Attributes</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_FTP_Attributes', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=setftpattr', {
      title: '720p cmd=setftpattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Set_FTP_Attributes/">Set_FTP_Attributes</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Test_FTP', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=testftp', {
      title: '720p cmd=testftp',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Test_FTP/">Test FTP</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_SMTP_Attributes', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getsmtpattr', {
      title: '720p cmd=getsmtpattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_SMTP_Attributes/">Get SMTP Attributes</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_SMTP_Attributes', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=setsmtpattr', {
      title: '720p cmd=setsmtpattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Set_SMTP_Attributes/">Set SMTP Attributes</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Test_SMTP', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=testsmtp', {
      title: '720p cmd=testsmtp',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Test_SMTP/">Test SMTP</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Format_SD_Card', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=sdfrmt', {
      title: '720p cmd=sdfrmt',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Format_SD_Card/">Format SD Card</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Unmount_SD_Card', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=sdstop', {
      title: '720p cmd=sdstop',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Unmount_SD_Card/">Unmount SD Card</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Device_Info', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getserverinfo', {
      title: '720p cmd=getserverinfo',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_Device_Info/">Get Device Info</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Device_Type', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getdevtype', {
      title: '720p cmd=getdevtype',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_Device_Type/">Get Device Type</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Streaming_User_Number', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getstreamnum', {
      title: '720p cmd=getstreamnum',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_Streaming_User_Number/">Get Streaming User Number</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Server_Time', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getservertime', {
      title: '720p cmd=getservertime',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_Server_Time/">Get Server Time</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Server_Time', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=setservertime', {
      title: '720p cmd=setservertime',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Set_Server_Time/">Set Server Time</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_NTP_Server_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getntpattr', {
      title: '720p cmd=getntpattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_NTP_Server_Attribute/">Get NTP Server Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_NTP_Server_Attribute', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=setntpattr', {
      title: '720p cmd=setntpattr',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Set_NTP_Server_Attribute/">Set NTP Server Attribute</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Multi-Device_Parameter', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=getdevices', {
      title: '720p cmd=getdevices',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_Multi-Device_Parameter/">Get Multi-Device Parameter</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Multi-Device_Parameter', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=setdevices', {
      title: '720p cmd=setdevices',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Set_Multi-Device_Parameter/">Set Multi-Device Parameter</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/MJPEG_Videostream', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_mjpegstream', {
      title: '720p mjpegstream',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/MJPEG_Videostream/">MJPEG Videostream</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Snapshot_Size', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=snapimage', {
      title: '720p cmd=snapimage',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Set_Snapshot_Size/">Set Snapshot Size</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/System_Reset', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Sysreset', {
      title: '720p Sysreset',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/System_Reset/">System Reset</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/System_Reboot', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_Sysreboot', {
      title: '720p Sysreboot',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/System Reboot/">System_Reboot</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/System_Backup', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_backup', {
      title: '720p backup',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/System_Backup/">System Backup</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/System_Restore', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_restore', {
      title: '720p restore',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/System_Restore/">System Restore</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/System_Upgrade', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_upgrade', {
      title: '720p upgrade',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/System_Upgrade/">System Upgrade</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Admin_Variables', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=get_instar_admin', {
      title: '720p cmd=get_instar_admin',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_Admin_Variables/">Get Admin Variables</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Set_Admin_Variables', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=set_instar_admin', {
      title: '720p cmd=set_instar_admin',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Set_Admin_Variables/">Set Admin Variables</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Get_Login_Data', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=logsync', {
      title: '720p cmd=logsync',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Get_Login_Data/">Get Login Data</a></li>',
    });
});

cgi720pRouter.get('/Complete_CGI_List/Clear_Login_Data', function(req, res) {
  res.render('./Advanced_User/720p_CGIs/720p_cmd=cleanlog', {
      title: '720p cmd=cleanlog',
      breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Advanced_User/">Fortgeschrittene</a></li><li class="breadcrumb-item"><a href="/Advanced_User/CGI_Commands/">CGI Befehle</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/">720p Serie</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/">Complete CGI List</a></li><li class="breadcrumb-item"><a href="/720p_Series_CGI_List/Complete_CGI_List/Clear_Login_Data/">Clear Login Data</a></li>',
    });
});


module.exports = cgi720pRouter;
