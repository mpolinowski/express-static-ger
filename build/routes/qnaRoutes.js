var express=require("express"),qnaRouter=express.Router();qnaRouter.route("/").get(function(e,r){r.render("./QnA/QnA_Tiddler",{title:"Fragen & Antworten — Häufig gestellte Kundenanfragen und Support Antworten",ampimg:"/images/Search/P_SearchThumb_Products.jpg",headline:"Fragen & Antworten",breadcrumbs:'<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Fragen_und_Antworten/">Fragen & Antworten</a></li>',canonical:"/Fragen_und_Antworten/"})}),module.exports=qnaRouter;