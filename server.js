// Requiring express, bodyparser, and mysql
var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var path = require('path');

// Creating an express app instance
var app = express();

// Specifying the port for heroku, otherwise its port 8080
var PORT = process.env.PORT || 8080;

// Set default directory to public
app.use(express.static("public"));

app.use('/js',express.static(path.join(__dirname, 'public/assets/js')));
app.use('/css',express.static(path.join(__dirname, 'public/assets/css')));

app.use(bodyParser.urlencoded({ extended: true }));

// Tells app to use json
app.use(bodyParser.json());

// Requiring express handlebars
var exphbs = require("express-handlebars");

// Prepare express app to use and layout handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Requiring routes specified int th burger_controller file
var routes = require("./controllers/burgers_controller.js");

// Telling express to use routes
app.use(routes);

// Sets app to listen at the specified port.
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});

