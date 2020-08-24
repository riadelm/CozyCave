var express = require("express"),
	app = express(),
	mongoose = require("mongoose"),
	bodyParser = require("body-parser");
	const engine = require('ejs');
	const http = require('http');
	const path = require('path');

	//mongoose configuration: database environment setup with a url
var url = process.env.DATABASEURL || "mongodb://localhost:27017/carbonFootprintMcGill";
mongoose.connect(url, {useFindAndModify: false });


//setting up application 
	//bodyParser
		app.use(bodyParser.urlencoded({extended : true}));
	//views ejs
		app.set("view engine","ejs");
		app.engine('html', engine.__express);
        app.set('views', path.join(__dirname, './views'));
        app.set('view engine', 'html');


    app.get("/",function(req,res){
    		res.render("views/popup.html");
    });
	app.post("/secondDay",function(req,res){
        res.send("post route");
	})