var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool = require('../require');
var expressSession = require('express-session');
var passport = require('passport');
var passportLocal = require('passport-local');
var easyPbkdf2 = require ('easy-pbkdf2')();
//var jwt = require('jsonwebtoken');
var secretKey = require('../secret');
const crypto = require('crypto');

// working endpoint for ng (test working) 
// will add http-bearer to endpoint


var ensureAuth = function(req, res, next) {
  if(!req.isAuthenticated()) 
    res.sendStatus(401);
  else {
    next();
  }
};

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});


router.get('/efridge', ensureAuth, function(req, res) {

  pool.getConnection(function(err,connection) {
 	var	getId = req.user.user_id;
 

    if (err) {
     //console.log(err);
  
    } else {
      //console.log('Well efridge is connected!');
      //where user_id = '+user_id,
      connection.query('select * from  efridge where user_id = '+getId, function (err,rows) {

        res.status(200).send({data: rows});

      });

    }}); 

 });

router.get('/egym',ensureAuth, function(req, res, next) {

  pool.getConnection(function(err,connection) {
var getId = req.user.user_id;
 

    if (err) {
     console.log(err);
  
    } else {
      //console.log('Well egym is connected!');
      //where user_id = '+user_id,
      connection.query('select * from  egym where user_id = '+getId, function (err,rows) {

        res.status(200).send({data: rows});

      });

    }}); 

 });



// router.get('/', function(req, res) {

//   res.render('index', {user: req.user});

  
// });


// router.get('*', function(req, res) {

// 	res.render('index', {user: req.user});

	
// });



//logout

  router.get('*', function(req, res) {

	  res.render('index');
	
});



//add a food profile
router.post('/foodform', function(req, res) {
  pool.getConnection(function(err,connection) {
	if (err) {
		//console.error( err);
		return;
	} else {
		//console.log('Successful Connection!');

       var efridge = {

 			     food_name: req.body.food_name,
 				       brand: req.body.brand,
	 	    serving_size: req.body.serving_size,
   		total_calories: req.body.total_calories,
	   		   fat_grams: req.body.fat_grams,
	carbohydrate_grams: req.body.carbohydrate_grams,
		   protein_grams: req.body.protein_grams,
		     total_grams: req.body.total_grams,
		   	     user_id: req.user.user_id
};

       connection.query('insert into efridge set ?', efridge, function (err, result) {
	       if (err) {
		      //console.error();

	       } else {

	         res.redirect('/efridge');
         }

      });

  }});	


});


//registration route
router.post('/register', function(req, res, next) {


  pool.getConnection(function(err,connection) {
    if (err) {
     console.error( err);
    return;
  } else {
     console.log('Successful Connection!');

// //grab password and generate salt function from easyPbkdf2 package
  var password = req.body.passWord;
  var salt = easyPbkdf2.generateSalt();

  // //create key using crypto module and convert to hex
  const key = crypto.pbkdf2Sync(password, salt, 100000, 512, 'sha512');
  var passwordHash = key.toString('hex'); 
  // //console.log(passwordHash);

  // //temporary user object
  var users = {
	      email: req.body.userEmail,
	  firstname: req.body.firstName,
	   lastname: req.body.lastName,
	   username: req.body.userName,
	   password: passwordHash,
	  user_salt: salt,
	  //token: jwt.sign({ username: this.username, email: this.email }, secretKey)


  }

   //create new user in mysql database based on temporary user object
   connection.query('insert into users set ?', users, function (err, result) {
       if (err) {
        console.error(err);

       } else {

        res.redirect('/');

       };

    });
    }
  });
});


//uncomment this for pool //connection});

module.exports = router;	