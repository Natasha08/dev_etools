var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbrequire = require('../public/javascripts/require');


router.get('/egym', function(req, res, next) {

	var egym;

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

module.exports = router;