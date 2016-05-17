var express = require('express');
var routerg = express.Router();
var mysql = require('mysql');
var pool = require('../public/javascripts/require');


routerg.get('/egym', function(req, res, next) {

	var egym;
pool.getConnection(function(err,connection) {
	connection.query('select * from  egym', function (err, rows) {

	egym = rows;

	if (!err) {
		res.render('egym', {
			title: 'My e-tools',
			description: 'Checkout your workouts!',
			data: egym
		});

	}	if (err) {
			console.log(err);

		}
});		

});
});
module.exports = routerg;