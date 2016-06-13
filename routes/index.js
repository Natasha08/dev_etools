var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool = require('../public/javascripts/require');
var expressSession = require('express-session');
var passport = require('passport');
var passportLocal = require('passport-local');
var easyPbkdf2 = require ('easy-pbkdf2')();
var jwt = require('jsonwebtoken');
var secretKey = require('../secret');
const crypto = require('crypto');
// var user = require('../app');

// working endpoint for ng (test working) 
// will add http-bearer to endpoint



// router.post('/login', passport.authenticate('local-login', { session: true, successRedirect: '/', failureRedirect: '/login' }),
//       function(req, res) {
//         //res.redirect('/');//+req.user.firstname);
//        res.send({user : req.user});
//       });

// app.use(function (req, res, next) {
//     if (req.isAuthenticated()) 
//       var userTest = req.user;
//     console.log(userTest);
//     next ();
// });



router.get('/fridgeTest', function(req, res) {

  pool.getConnection(function(err,connection) {
 

    if (err) {
     console.log(err);
  
    } else {

      connection.query('select email from  users', function (err,rows) {

          if (!err) {
            res.json(rows);
          } else {
            console.log(err);

          }

      });

    }}); 

 });


   // router.get('/api/*', function(req, res){
   //   if (req.isAuthenticated()) { 
   //     var user = req.user; 
   //   }else{
   //     res.redirect('/login');
   //   }
   // });

router.get('/apiTest', function(err, res) {
  res.json([
    {value: 'efridge'},
    {value: 'efridge'},
    {value: 'efridge'},
    {value: 'efridge'}
    
  ]); 

});

router.get('/efridge', function(req, res) {

  pool.getConnection(function(err,connection) {
 	//var	user_id = req.user.user_id;
 

    if (err) {
     console.log(err);
  
    } else {
      console.log('Well efridge is connected!');
//where user_id = '+user_id,
      connection.query('select * from  efridge', function (err,rows) {
        res.json(rows);

      });

    }}); 

 });

// router.get('*', function(req, res) {

// 	res.render('index', {user: req.user});

	
// });





//logout

router.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/login');
});

    router.get('*', function(req, res) {

	res.render('index');
	
});



//add a food profile
router.post('/foodform', function(req, res) {
  pool.getConnection(function(err,connection) {
	if (err) {
		console.error( err);
		return;
	} else {
		console.log('Successful Connection!');

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
		   console.error();

	     } else {

	     res.redirect('/efridge');
}

});

}});	


});


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
	password: passwordHash,
	user_salt: salt,
	token: jwt.sign({ username: this.username, email: this.email }, secretKey)


};

// //create new user in mysql database based on temporary user object
  connection.query('insert into users set ?', users, function (err, result) {

	if (!err) {
		res.render('index', console.log('It worked!'));

		} else {

	console.log('Did not work');
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