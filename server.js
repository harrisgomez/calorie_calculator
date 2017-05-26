var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var port = 8000;

app.use(express.static(path.join(__dirname, './client'))); // loads your main index. Basically says look inside this folder and run what's inside
app.use(express.static(path.join(__dirname, './bower_components'))); // ngRoute no longer part of angular.js file, so use bower
app.use(bodyParser.urlencoded({ extended: true }));

var server = app.listen(port, function() {
    console.log("listening on port 8000");
})
