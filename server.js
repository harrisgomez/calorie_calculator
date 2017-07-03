var express = require('express');
var path = require('path');
var app = express();
var port = 8000;

// create .env file with APP_ID, APP_KEY if not available
require('dotenv').config();
var appId = process.env.APP_ID;
var appKey = process.env.APP_KEY;

if(appId && appKey){
    console.log("APP_ID and APP_KEY are set");
}else{
    console.log('Please set APP_ID and APP_KEY');
}

app.use(express.static(path.join(__dirname, './client'))); // loads your main index. Basically says look inside this folder and run what's inside
app.use(express.static(path.join(__dirname, './client/static/css')));
app.use(express.static(path.join(__dirname, './jasmine_test')));

var server = app.listen(port, function() {
    console.log("listening on port 8000");
})

module.exports = server; // export express server to be used for testing
