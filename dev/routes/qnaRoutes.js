var express = require('express');
var qnaRouter = express.Router();

qnaRouter.route('/')
  .get(function(req, res) {
      res.render('./QnA/QnA_Tiddler', {
          title: 'Fragen & Antworten — Häufig gestellte Kundenanfragen und Support Antworten',
          ampimg: '/images/Search/P_SearchThumb_Products.jpg',
          headline: 'Fragen & Antworten',
          breadcrumbs: '<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Fragen_und_Antworten/">Fragen & Antworten</a></li>',
          canonical: '/Fragen_und_Antworten/',
        });
    });


module.exports = qnaRouter;
