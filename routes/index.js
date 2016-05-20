var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = require('../public/javascripts/require');
var expressSession = require('express-session');
var passport = require('passport');
//var passportp = require('../passport');
var passportLocal = require('passport-local');

// var natskey = require('../secret');
// var sendgrid  = require('sendgrid')(natskey);
// var ejs = require('ejs');
// var fs = require('fs');

//read file
router.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/login');
});

router.get('/', function(req, res, next) {
	var user = {
		isAuthenticated: req.isAuthenticated(),
		user: req.user
	};
      if (!user.isAuthenticated) { 
          res.redirect('/login');
         } else {
      
	 res.render('index', {
	 	title: 'My e-tools',
	 	isAuthenticated: req.isAuthenticated(),
	 	user: req.user
	 });
}});

router.post('/', passport.authenticate('local-login', { failureRedirect: '/login' }),
		function(req, res) {
        res.redirect('/');
      });

router.post('/register', function(req, res, next) {
//uncomment this for pool connection //pool.getConnection(function(err,connection) {
	// if (err) {
	// 	console.error(err);
	// 	return;
	// } else {
	// 	console.log(connection);

	// }

var users = {
	email: req.body.userEmail,
	firstname: req.body.firstName,
	lastname: req.body.lastName,
	username: req.body.userName,
	password: req.body.passWord
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
	res.redirect('/login');
}

});
});



//uncomment this for pool //connection});

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