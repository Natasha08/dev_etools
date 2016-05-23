var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = require('../public/javascripts/require');
var expressSession = require('express-session');
var passport = require('passport');
var passportLocal = require('passport-local');
var easyPbkdf2 = require ('easy-pbkdf2')();
const crypto = require('crypto');

//logout
router.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/login');
});

//home page after successful login
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

//home page redirect to login if not authenticated with local strategy
router.post('/', passport.authenticate('local-login', { failureRedirect: '/login' }),
		function(req, res) {
        res.redirect('/');
      });

//registration route
router.post('/register', function(req, res, next) {

//grab password and generate salt function from easyPbkdf2 package
var password = req.body.passWord;
var salt = easyPbkdf2.generateSalt();

//create key using crypto module and convert to hex
const key = crypto.pbkdf2Sync(password, salt, 100000, 512, 'sha512');
var passwordHash = key.toString('hex'); 
//console.log(passwordHash);

//unsure if I should use buffer 
//const passbuf = Buffer.alloc(64, key, 'binary');

//temporary user object
var users = {
	email: req.body.userEmail,
	firstname: req.body.firstName,
	lastname: req.body.lastName,
	username: req.body.userName,
	password: req.body.passWord,
	user_salt: salt,
	password: passwordHash

};

//create new user in mysql database based on temporary user object
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
};

});
});

//uncomment this for pool //connection});

module.exports = router;	

//uncomment vars to send mail using sendgrid
// var natskey = require('../secret');
// var sendgrid  = require('sendgrid')(natskey);
// var ejs = require('ejs');
// var fs = require('fs');


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