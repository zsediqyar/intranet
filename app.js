var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var ejs = require("ejs");
var methodOverride = require("method-override");

var app = express();


app.set("view engine, ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect("mongodb://localhost/intranet_db");

//index route
app.get("/", function(req, res){
	res.render("index");
});







var PORT = process.env.PORT || 5000;
app.listen(5000);
console.log("connection success");
