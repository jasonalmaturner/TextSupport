'use strict';

var express = require('express'),
	app = express(),
	firebase = require('firebase'),
	twilio = require('twilio'),
	bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var server = app.listen(9001, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('TextSupport app listening at http://%s:%s', host, port);
})

// var myFirebaseRef = new Firebase("https://text-support-9001.firebaseio.com/");