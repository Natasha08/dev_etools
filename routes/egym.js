var express = require('express');
var routerg = express.Router();
var mysql = require('mysql');
var connection = require('../public/javascripts/require');
var expressSession = require('express-session');
var passport = require('passport');
var passportLocal = require('passport-local');

routerg.get('/egym', function(req, res, next) {

	var egym;
//pool.getConnection(function(err,connection) {
	connection.query('select * from  egym', function (err, rows) {

	egym = rows;

	if (!err) {
		res.render('egym', {
			   title: 'My e-tools',
		 description: 'Checkout your workouts!',
				data: egym,
	 isAuthenticated: req.isAuthenticated(),
	 			user: req.user			
		});

	}	if (err) {
			console.log(err);

		}
});		

});

routerg.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/');
});
//});
module.exports = routerg;