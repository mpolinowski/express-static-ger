var express=require("express"),qnaRouter=express.Router();qnaRouter.route("/").get(function(e,r){r.render("./QnA/QnA_Tiddler",{title:"Fragen & Antworten — Häufig gestellte Kundenanfragen und Support Antworten",ampimg:"/images/Search/FAQ_SearchThumb.jpg",headline:"Kundenanfrage über INSTAR Überwachungskameras, Kamera Software oder Handy Apps und Netzwerktechnik",breadcrumbs:'<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Fragen_und_Antworten/">Fragen & Antworten</a></li>',canonical:"/Fragen_und_Antworten/",description:"Kundenanfrage über INSTAR Überwachungskameras, Kamera Software oder Handy Apps und Netzwerktechnik"})}),module.exports=qnaRouter;