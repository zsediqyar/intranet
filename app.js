var express = require("express");
var ejs = require("ejs");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var methodOverride = require("method-override");

var app = express();

var mainRoutes	= require("./routes/main");

//Library setup
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//Database connection in localDB
mongoose.connect("mongodb://localhost/intranet_db");

//index route
app.get("/", function(req, res){
	res.render("index");
});

//ideas page
app.get("/ideas", function(req, res){
	res.render("ideas");
});

//offices page
app.get("/offices", function(req, res){
	res.render("offices");
});

			//sf page
			app.get("/sf", function(req, res){
					res.render("sf");
			});





//PORT configuration
app.listen(5000, () => {
	console.log('App started on port 5000');
});
