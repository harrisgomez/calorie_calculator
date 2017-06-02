var express = require('express');
var path = require('path');
var app = express();
var port = 8000;

app.use(express.static(path.join(__dirname, './client'))); // loads your main index. Basically says look inside this folder and run what's inside
app.use(express.static(path.join(__dirname, './client/static/css')));
app.use(express.static(path.join(__dirname, './jasmine_test')));

var server = app.listen(port, function() {
    console.log("listening on port 8000");
})

module.exports = server; // export express server to be used for testing
