var express = require('express');
var routerf = express.Router();
var mysql = require('mysql');
var connection = require('../public/javascripts/require');
var expressSession = require('express-session');
var passport = require('passport');
var passportLocal = require('passport-local');

// router.get('/', function(req, res, next) {
// 	res.render('index', {title: 'NuColo'});

// });
routerf.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/');
});


routerf.get('/efridge', function(req, res, next) {

var efridge;

//pool.getConnection(function(err,connection) {
//	('select * from  efridge', 
//if (!err) {

connection.query('select * from  efridge', function (err,rows) {

	efridge = rows;

  res.render('efridge', {

  		  title: 'My e-tools',
  	description: 'Enter the name of the food in your e-fridge that you want to add to today\'s meal.',
  		   data: efridge,
isAuthenticated: req.isAuthenticated(),
	 	   user: req.user  	 
  });
	
});

});
//});


routerf.post('/efridge', function(req, res, next) {
// pool.getConnection(function(err,connection) {
// 	if (err) {
// 		console.error('What is this' + err);
// 		return;
// 	} else {
// 		console.log(connection);

// 	}
var efridge = {
 			 food_name: req.body.food_name,
 				 brand: req.body.brand,
	 	  serving_size: req.body.serving_size,
   		total_calories: req.body.total_calories,
	   		 fat_grams: req.body.fat_grams,
	carbohydrate_grams: req.body.carbohydrate_grams,
		 protein_grams: req.body.protein_grams,
		   total_grams: req.body.total_grams
};

 connection.query('insert into efridge set ?', efridge, function (err, result) {
	if (err) {
		console.error(err);
		return;
	} else {

	res.redirect('/efridge');
}
});

});	


//});


module.exports = routerf;

