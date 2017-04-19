var express = require('express');
var qnaRouter = express.Router();

qnaRouter.route('/')
  .get(function(req, res) {
      res.render('./QnA/QnA_Tiddler', {
          title: 'Fragen & Antworten — Häufig gestellte Kundenanfragen und Support Antworten',
          ampimg: '/images/Search/P_SearchThumb_Products.jpg',
          headline: 'Fragen & Antworten',
        });
    });


module.exports = qnaRouter;
