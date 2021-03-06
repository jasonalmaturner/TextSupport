'use strict';

var express = require('express'),
	app = express(),
	Firebase = require('firebase'),
	twilio = require('twilio')(env.twilioSID, env.twilioAuthToken),
	bodyParser = require('body-parser'),
	env = require('env.js');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var server = app.listen(9001, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('TextSupport app listening at http://%s:%s', host, port);
})

app.post('/support/messages', function(req, res){
	twilio.messages.create({
		body: req.body.message,
		to: req.body.to,
		from: '+12082617136'
	}, function(err, message){
		if(err) {
			res.status(400).send(message.status);
		} else {
			message.support = true;
			new Firebase("https://text-support-9001.firebaseio.com/number/" + message.to).push(message);
			return res.status(200).send(req.body.to);
		}
	})
})
	// myRootRef = new Firebase("https://text-support-9001.firebaseio.com")