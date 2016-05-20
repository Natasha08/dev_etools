var express = require('express');
var routerl = express.Router();
var mysql = require('mysql');
var connection = require('../public/javascripts/require');
var expressSession = require('express-session');
var passport = require('passport');
var passportLocal = require('passport-local');

routerl.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/');
});

routerl.get('/login', function(req, res, next) {

	 res.render('login', {
	 	title: 'MyColoFitness',
	 });
});

routerl.post('/login', passport.authenticate('local-login', { failureRedirect: '/login' }),
		function(req, res) {
        res.redirect('/');
      });

routerl.post('/register', function(req, res, next) {
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

module.exports = routerl;	
