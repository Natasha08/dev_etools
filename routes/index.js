var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = require('../public/javascripts/require');
var natskey = require('../secret');
var sendgrid  = require('sendgrid')(natskey);
var ejs = require('ejs');
var fs = require('fs');

//read file

router.get('/', function(req, res, next) {

	 res.render('index', {title: 'MyColo'});
// var email     = new sendgrid.Email(); 
// email.setTos('');
// email.setFrom('');
// email.setSubject('');
// email.setText('');
// //compile file and .setHtml
// email.setHtml(ejs.render(templateString, {firstName: ''}));

// //send email
// sendgrid.send(email, function(err, json) {
//   if (err) { console.error(err); }
//   console.log(json);
// });
});
	// res.render('preview', {title: 'MyColo'});
	// router.get('/preview', function(req, res) {
	// 	res.render('email', {firstName: ''});

	// });

module.exports = router;