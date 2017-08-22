var compression = require('compression');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var indexRouter = require('./build/routes/indexRoutes');
var searchRouter = require('./build/routes/searchRoutes');
var productRouter = require('./build/routes/productRoutes');
var indoorCamsRouter = require('./build/routes/indoorCamsRoutes');
var indoorCamsGerRouter = require('./build/routes/indoorCamsRoutes_ger');
var outdoorCamsRouter = require('./build/routes/outdoorCamsRoutes');
var outdoorCamsGerRouter = require('./build/routes/outdoorCamsRoutes_ger');
var downloadsRouter = require('./build/routes/downloadsRoutes');
var downloadsGerRouter = require('./build/routes/downloadsRoutes_ger');
var softwareRouter = require('./build/routes/softwareRoutes');
var quickInstallRouter = require('./build/routes/quickInstallRoutes');
var quickInstallGerRouter = require('./build/routes/quickInstallRoutes_ger');
var internetAccessRouter = require('./build/routes/internetAccessRoutes');
var internetAccessGerRouter = require('./build/routes/internetAccessRoutes_ger');
var motionDetectionRouter = require('./build/routes/motionDetectionRoutes');
var motionDetectionGerRouter = require('./build/routes/motionDetectionRoutes_ger');
var advancedUserRouter = require('./build/routes/advancedUserRoutes');
var advancedUserGerRouter = require('./build/routes/advancedUserRoutes_ger');
var cgi720pRouter = require('./build/routes/cgi720pRoutes');
var cgi1080pRouter = require('./build/routes/cgi1080pRoutes');
var webUI720pRouter = require('./build/routes/webUI720pRoutes');
var webUI720pGerRouter = require('./build/routes/webUI720pRoutes_ger');
var webUI1080pRouter = require('./build/routes/webUI1080pRoutes');
var webUI1080pGerRouter = require('./build/routes/webUI1080pRoutes_ger');
var qnaRouter = require('./build/routes/qnaRoutes');
var indexPHPRouter = require('./build/routes/indexPHPRoutes');

var app = express();
// compress all responses
app.use(compression());

// View engine setup
app.set('views', path.join(__dirname, 'build/views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false,
  }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build/public')));

app.use('/', indexRouter);
app.use('/Search/', searchRouter);
app.use('/Products/', productRouter);
app.use('/Indoor_Cameras/', indoorCamsRouter);
app.use('/Innenkameras/', indoorCamsGerRouter);
app.use('/Outdoor_Cameras/', outdoorCamsRouter);
app.use('/Aussenkameras/', outdoorCamsGerRouter);
app.use('/Downloads/', downloadsRouter);
app.use('/Downloadbereich/', downloadsGerRouter);
app.use('/Software/', softwareRouter);
app.use('/Quick_Installation/', quickInstallRouter);
app.use('/Schnell_Installation/', quickInstallGerRouter);
app.use('/Internet_Access/', internetAccessRouter);
app.use('/Fernzugriff/', internetAccessGerRouter);
app.use('/Motion_Detection/', motionDetectionRouter);
app.use('/Bewegungserkennung/', motionDetectionGerRouter);
app.use('/Advanced_User/', advancedUserRouter);
app.use('/Erweitert/', advancedUserGerRouter);
app.use('/720p_Series_CGI_List/', cgi720pRouter);
app.use('/1080p_Series_CGI_List/', cgi1080pRouter);
app.use('/Web_User_Interface/720p_Series/', webUI720pRouter);
app.use('/Web_User_Interface/720p_Serie/', webUI720pGerRouter);
app.use('/Web_User_Interface/1080p_Series/', webUI1080pRouter);
app.use('/Web_User_Interface/1080p_Serie/', webUI1080pGerRouter);
app.use('/Fragen_und_Antworten/', qnaRouter);
app.use('/index.php/', indexPHPRouter);

// Catch 404 and forward to error handler
/* App.use(function(req, res, next) {
 *    var err = new Error('Not Found');
 *   err.status = 404;
 *    next(err);
 * }); */
app.use(function(req, res, next) {
    res.status(404).redirect('/');
  });

// Error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
          message: err.message,
          error: err,
        });
    });
}

// Production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {},
      });
  });


module.exports = app;
