var express=require("express"),downloadsRouter=express.Router();downloadsRouter.get("/",function(o,a){a.render("./Downloads/Downloads",{title:"Download Bereich",ampimg:"/images/P_SearchThumb_Products.jpg",uplink:"/Products/",headline:"Download Bereich",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li>'})}),downloadsRouter.get("/IndoorCams/",function(o,a){a.render("./Downloads/IndoorCams",{title:"Downloadbereich für Innenkameras",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",uplink:"/Downloads",breadcrumbs:'<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/IndoorCams/">Innenkameras</a></li>'})}),downloadsRouter.get("/OutdoorCams/",function(o,a){a.render("./Downloads/OutdoorCams",{title:"Downloadbereich für Außenkameras",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",uplink:"/Downloads",breadcrumbs:'<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/IndoorCams/">Außenkameras</a></li>'})}),downloadsRouter.get("/Accessories/",function(o,a){a.render("./Downloads/Accessories",{title:"Downloadbereich für Allgemeines Zubehör",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",uplink:"/Downloads",breadcrumbs:'<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Accessories/">Allgemeines Zubehör</a></li>'})}),downloadsRouter.get("/Network_Accessories/",function(o,a){a.render("./Downloads/Network_Accessories",{title:"Downloadbereich für Netzwerkzubehör",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",uplink:"/Downloads",breadcrumbs:'<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Network_Accessories/">Netzwerkzubehör</a></li>'})}),downloadsRouter.get("/Desktop_Software/",function(o,a){a.render("./Downloads/Desktop_Software",{title:"Downloadbereich unserer Desktop Software",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",uplink:"/Downloads",breadcrumbs:'<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Desktop_Software/">Desktop-Software</a></li>'})}),downloadsRouter.get("/Apps/",function(o,a){a.render("./Downloads/Apps",{title:"Downloadbereich unserer Apps",ampimg:"/images/Search/QI_SearchThumb_WebUI.jpg",uplink:"/Downloads",breadcrumbs:'<li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/Downloads/">Downloads</a></li><li class="breadcrumb-item"><a href="/Apps/">Apps</a></li>'})}),downloadsRouter.get("/IndoorCams/",function(o,a){a.render("./Downloads/IndoorCams",{title:"Downloads for Innenkameras",ampimg:"/images/Search/P_SearchThumb_IndoorCams.jpg",uplink:"/Downloads/",headline:"Downloads for Innenkameras",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/IndoorCams">Innenkameras</a></li>'})}),downloadsRouter.get("/OutdoorCams/",function(o,a){a.render("./Downloads/OutdoorCams",{title:"Downloads for Außenkameras",ampimg:"/images/Search/P_SearchThumb_OutdoorCams.jpg",uplink:"/Downloads/",headline:"Downloads for Außenkameras",breadcrumbs:'<li><a href="/">Home</a></li><li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/OutdoorCams">Außenkameras</a></li>'})}),downloadsRouter.route("/IndoorCams/IN-6014_HD/").get(function(o,a){a.render("./IndoorCams/Downloads_IndoorCams_6014",{title:"IN-6014 HD Downloads",uplink:"/Downloads/IndoorCams/",ampimg:"/images/Search/P_SearchThumb_IndoorCams.jpg",headline:"INSTAR Products IN-6014 HD",breadcrumbs:'<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/IndoorCams">Innenkameras</a></li><li><a href="/Downloads/IndoorCams/IN-6014_HD">IN-6014 HD</a></li>'})}),downloadsRouter.route("/IndoorCams/IN-6012_HD/").get(function(o,a){a.render("./IndoorCams/Downloads_IndoorCams_6012",{title:"IN-6012 HD Downloads",uplink:"/Downloads/IndoorCams/",ampimg:"/images/Search/P_SearchThumb_IndoorCams.jpg",headline:"INSTAR Products IN-6012 HD",breadcrumbs:'<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/IndoorCams">Innenkameras</a></li><li><a href="/Downloads/IndoorCams/IN-6012_HD">IN-6012 HD</a></li>'})}),downloadsRouter.route("/IndoorCams/IN-6001_HD/").get(function(o,a){a.render("./IndoorCams/Downloads_IndoorCams_6001",{title:"IN-6001 HD Downloads",uplink:"/Downloads/IndoorCams/",ampimg:"/images/Search/P_SearchThumb_IndoorCams.jpg",headline:"INSTAR Products IN-6001 HD",breadcrumbs:'<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/IndoorCams">Innenkameras</a></li><li><a href="/Downloads/IndoorCams/IN-6001_HD">IN-6001 HD</a></li>'})}),downloadsRouter.route("/IndoorCams/IN-3011/").get(function(o,a){a.render("./IndoorCams/Downloads_IndoorCams_3011",{title:"IN-3011 Downloads",uplink:"/Downloads/IndoorCams/",ampimg:"/images/Search/P_SearchThumb_IndoorCams.jpg",headline:"INSTAR Products IN-3011",breadcrumbs:'<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/IndoorCams">Innenkameras</a></li><li><a href="/Downloads/IndoorCams/IN-3011">IN-3011</a></li>'})}),downloadsRouter.route("/OutdoorCams/IN-7011_HD/").get(function(o,a){a.render("./OutdoorCams/Downloads_OutdoorCams_7011",{title:"IN-7011 HD Downloads",ampimg:"/images/Search/P_SearchThumb_OutdoorCams.jpg",uplink:"/Downloads/OutdoorCams/",headline:"INSTAR Products IN-7011 HD",breadcrumbs:'<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/OutdoorCams">Außenkameras</a></li><li><a href="/Downloads/OutdoorCams/IN-7011_HD/">IN-7011 HD</a></li>'})}),downloadsRouter.route("/OutdoorCams/IN-5907_HD/").get(function(o,a){a.render("./OutdoorCams/Downloads_OutdoorCams_5907",{title:"IN-5907 HD Downloads",ampimg:"/images/Search/P_SearchThumb_OutdoorCams.jpg",uplink:"/Downloads/OutdoorCams/",headline:"INSTAR Products IN-5907 HD",breadcrumbs:'<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/OutdoorCams">Außenkameras</a></li><li><a href="/Downloads/OutdoorCams/IN-5907_HD/">IN-5907 HD</a></li>'})}),downloadsRouter.route("/OutdoorCams/IN-5905_HD/").get(function(o,a){a.render("./OutdoorCams/Downloads_OutdoorCams_5905",{title:"IN-5905 HD Downloads",ampimg:"/images/Search/P_SearchThumb_OutdoorCams.jpg",uplink:"/Downloads/OutdoorCams/",headline:"INSTAR Products IN-5905 HD",breadcrumbs:'<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/OutdoorCams">Außenkameras</a></li><li><a href="/Downloads/OutdoorCams/IN-5905_HD/">IN-5905 HD</a></li>'})}),downloadsRouter.route("/OutdoorCams/IN-4011/").get(function(o,a){a.render("./OutdoorCams/Downloads_OutdoorCams_4011",{title:"IN-4011 Downloads",ampimg:"/images/Search/P_SearchThumb_OutdoorCams.jpg",uplink:"/Downloads/OutdoorCams/",headline:"INSTAR Products IN-4011",breadcrumbs:'<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/OutdoorCams">Außenkameras</a></li><li><a href="/Downloads/OutdoorCams/IN-4011/">IN-4011</a></li>'})}),downloadsRouter.route("/OutdoorCams/IN-4010_V2/").get(function(o,a){a.render("./OutdoorCams/Downloads_OutdoorCams_4010",{title:"IN-4010 V2 Downloads",ampimg:"/images/Search/P_SearchThumb_OutdoorCams.jpg",uplink:"/Downloads/OutdoorCams/",headline:"INSTAR Products IN-4010 V2",breadcrumbs:'<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/OutdoorCams">Außenkameras</a></li><li><a href="/Downloads/OutdoorCams/IN-4010_V2/">IN-4010 V2</a></li>'})}),downloadsRouter.route("/OutdoorCams/IN-2908/").get(function(o,a){a.render("./OutdoorCams/Downloads_OutdoorCams_2908",{title:"IN-2908 Downloads",ampimg:"/images/Search/P_SearchThumb_OutdoorCams.jpg",uplink:"/Downloads/OutdoorCams/",headline:"INSTAR Products IN-2908",breadcrumbs:'<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/OutdoorCams">Außenkameras</a></li><li><a href="/Downloads/OutdoorCams/IN-2908/">IN-2908</a></li>'})}),downloadsRouter.route("/OutdoorCams/IN-2905_V2/").get(function(o,a){a.render("./OutdoorCams/Downloads_OutdoorCams_2905",{title:"IN-2905 V2 Downloads",ampimg:"/images/Search/P_SearchThumb_OutdoorCams.jpg",uplink:"/Downloads/OutdoorCams/",headline:"INSTAR Products IN-2905 V2",breadcrumbs:'<li><a href="/Products/">Products</a></li><li><a href="/Downloads/">Downloads</a></li><li><a href="/Downloads/OutdoorCams">Außenkameras</a></li><li><a href="/Downloads/OutdoorCams/IN-2905_V2/">IN-2905 V2</a></li>'})}),module.exports=downloadsRouter;