var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool = require('../public/javascripts/require');
var passport = require('passport');
var passportLocal = require('passport-local');

// var natskey = require('../secret');
// var sendgrid  = require('sendgrid')(natskey);
// var ejs = require('ejs');
// var fs = require('fs');

//read file

router.get('/', function(req, res, next) {

	 res.render('index', {
	 	title: 'MyColo',
	 	isAuthenticated: req.isAuthenticated(),
	 	user: req.user
	 });
});

router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }),
      function(req, res) {
        res.redirect('/');
      });

router.post('/register', function(req, res, next) {
pool.getConnection(function(err,connection) {
	if (err) {
		console.error(err);
		return;
	} else {
		console.log(connection);

	}

var users = {
	email: req.body.email,
	firstname: req.body.firstname,
	lastname: req.body.lastname,
	username: req.body.username,
	password: req.body.password
};

 connection.query('insert into users set ?', users, function (err, result) {

	if (err) {
		console.error(err);
		res.render('index', {
			title: 'MyColo',
			erobj: 'Please enter a valid and unique email address.'
		});
		return;
	} else {
	res.redirect('/');
}

});
});
});

module.exports = router;	

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
//});
// res.render('preview', {title: 'MyColo'});
// router.get('/preview', function(req, res) {
// 	res.render('email', {firstName: ''});
// });