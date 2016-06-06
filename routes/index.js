var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = require('../public/javascripts/require');
var expressSession = require('express-session');
var passport = require('passport');
var passportLocal = require('passport-local');
var easyPbkdf2 = require ('easy-pbkdf2')();
const crypto = require('crypto');


// router.post('/login', passport.authenticate('local-login', { failureRedirect: '/login' }),
// 		function(req, res) {
// 		//req.login();
//         res.redirect('/');
//       });

// router.post('/login', passport.authenticate('local-login', { failureRedirect: '/login' }),
// 		function(err, req, res) {
// 			if(!err)
//         res.redirect('/');

// });

  router.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/login');
});
    router.get('*', function(req, res) {

	res.render('index', { user: req.user });
	
});

// router.get('/login', function(req, res, next) {

// 	 res.render('login', {
// 	 	title: 'MyColoFitness',
// 	 });
// });

//home page redirect to login if not authenticated with local strategy
// router.post('/', passport.authenticate('local-login', { failureRedirect: '/login' }),
// 		function(req, res) {
//         res.redirect('/');
//       });



//registration route
router.post('/register', function(req, res, next) {

// //grab password and generate salt function from easyPbkdf2 package
var password = req.body.passWord;
var salt = easyPbkdf2.generateSalt();

// //create key using crypto module and convert to hex
const key = crypto.pbkdf2Sync(password, salt, 100000, 512, 'sha512');
var passwordHash = key.toString('hex'); 
// //console.log(passwordHash);

// //unsure if I should use buffer 
// //const passbuf = Buffer.alloc(64, key, 'binary');

// //temporary user object
var users = {
	email: req.body.userEmail,
	firstname: req.body.firstName,
	lastname: req.body.lastName,
	username: req.body.userName,
	password: req.body.passWord,
	user_salt: salt,
	password: passwordHash

};

// //create new user in mysql database based on temporary user object
  connection.query('insert into users set ?', users, function (err, result) {

	if (!err) {
		console.log('It worked!');

		} else {

	console.log('Did not work');
};

});
});

//uncomment this for pool //connection});

module.exports = router;	



// router.post('/login', passport.authenticate('local-login', { failureRedirect: '/login'}),
// 		function(req, res) {
//         res.redirect('/');
//       });

// router.post('/register', function(req, res, next) {
// //uncomment this for pool connection //pool.getConnection(function(err,connection) {
// 	// if (err) {
// 	// 	console.error(err);
// 	// 	return;
// 	// } else {
// 	// 	console.log(connection);

// 	// }

// var users = {
// 	email: req.body.userEmail,
// 	firstname: req.body.firstName,
// 	lastname: req.body.lastName,
// 	username: req.body.userName,
// 	password: req.body.passWord
// };

//  connection.query('insert into users set ?', users, function (err, result) {

// 	if (err) {
// 		console.error(err);
// 		res.render('index', {
// 			title: 'MyColo',
// 			erobj: 'Please enter a valid and unique email address.'
// 		});
// 		return;
// 	} else {
// 	res.redirect('/login');
// }

// });
// });
















// //logout
// router.get('/logout', function(req, res) {
// 	req.logout();
// 	res.redirect('/');
// })





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