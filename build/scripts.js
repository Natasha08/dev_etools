var mysql = require('mysql');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var passport = require('passport');
var LocalStrategy   = require('passport-local').Strategy;
var connection = require('./public/javascripts/require.js');
var easyPbkdf2 = require ('easy-pbkdf2')();
const crypto = require('crypto');

var routesf = require('./routes/efridge');
var routesg = require('./routes/egym');
var routes = require('./routes/index');
var routesl = require('./routes/login');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSession({ secret: process.env.SESSION_SECRET || 'woiefjwafo;ajwefoewifjaweof;jiawef;oweijf;awoefijaw;foijew;eofijaeofjef\'pweofFJEAFIOAEJFALRJ3P28U4TO3WF5ILGJ\;OTIJWE\;T/OIJTGWPAIT\'JKL/MQRA;wozesnfpoaij;eirjw;3eorakljtmw;isoejta',
                          resave: false,
                          saveUninitialized: false
                        }));
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));


//passport configuration
app.use(passport.initialize());
app.use(passport.session());

//creates a new strategy for passport. Note username (default) changed to email 

passport.use('local-login', new LocalStrategy({

// by default, local strategy uses username and password, the following will override with email [change the name on the form also]
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true // allows us to pass back the entire request to the callback
},

    function(req, email, password, done) { // callback with email and password from our form


  connection.query("SELECT * FROM `users` WHERE `email` = '" + email + "'",function(err,rows){
  
//temporary user object
      var users = {
      
        password: req.body.password,
        salt: rows[0].user_salt,

      }
//create key with password from user input and orginal salt
      const key = crypto.pbkdf2Sync(users.password, users.salt, 100000, 512, 'sha512');
      var passbuf2 = (key.toString('hex'));

// if (key) {
//     console.log('passbuf2:  '+ passbuf2);
// };

//if not connected to a users db
        if (err)
            return done(err); 
          if (!rows.length) {
              return done(null, false), console.log('no error, and no user either!'); //req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
            } 
            
// if the user is found but the password is wrong
          if (!(rows[0].password == passbuf2))
                return done(null, false), console.log('something is wrong with the buffers!'+ rows[0].password); // create the loginMessage and save it to session as flashdata
//if the salt does not match up
          if (!( rows[0].user_salt == users.salt))
                return done(null, false), console.log('saltless');
// all is well, return successful user
            return done(null, rows[0]), console.log('You are successfully logged in!');         
        });
        


    }));

passport.serializeUser(function(user, done) {
    done(null, user.user_id);
    });

// used to deserialize the user
passport.deserializeUser(function(user_id, done) {
    connection.query("select * from users where user_id = "+user_id,function(err,rows){   
          done(err, rows[0]);
        });
    });

//use the routes specified earlier
app.use('/', routes);
app.use('/', routesg);
app.use('/', routesf);
app.use('/', routesl);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

//development error handler
//will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
 res.status(err.status || 500);
 res.render('error', {
   message: err.message,
   error: {}
 });
});


module.exports = app;

var express = require('express');
var routerf = express.Router();
var mysql = require('mysql');
var connection = require('../public/javascripts/require');
var expressSession = require('express-session');
var passport = require('passport');
var passportLocal = require('passport-local');

routerf.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/');
});


routerf.get('/efridge', function(req, res, next) {

//pool.getConnection(function(err,connection) {
	var user = {
isAuthenticated: req.isAuthenticated(),
	 	   user: req.user 	
	 	};
      if (!user.isAuthenticated) { 
          res.redirect('/login');
         } else {	 	

var efridge;

connection.query('select * from  efridge where user_id = '+user.user.user_id, function (err,rows) {
	efridge = rows;

		res.render('efridge', {

  		  title: 'My e-fridge',
  	description: 'Enter the name of the food in your e-fridge that you want to add to today\'s meal.',
  		   data: efridge,
  		   isAuthenticated: req.isAuthenticated(),
	 	   user: req.user 
 	 });
});
};});




// connection.query('select * from  efridge where user_id = '+user.user.user_id, function (err,rows) {

// 	efridge = rows;

//   res.render('efridge', {

//   		  title: 'My e-tools',
//   	description: 'Enter the name of the food in your e-fridge that you want to add to today\'s meal.',
//   		   data: efridge,
//   		   isAuthenticated: req.isAuthenticated(),
// 	 	   user: req.user 
 	 
//   });
	
// });

// });
// //});


routerf.post('/efridge', function(req, res, next) {
// pool.getConnection(function(err,connection) {
// 	if (err) {
// 		console.error('What is this' + err);
// 		return;
// 	} else {
// 		console.log(connection);

// 	}

var user ={
	isAthenticated: req.isAuthenticated(),
	user: req.user
};

var efridge = {

 			 food_name: req.body.food_name,
 				 brand: req.body.brand,
	 	  serving_size: req.body.serving_size,
   		total_calories: req.body.total_calories,
	   		 fat_grams: req.body.fat_grams,
	carbohydrate_grams: req.body.carbohydrate_grams,
		 protein_grams: req.body.protein_grams,
		   total_grams: req.body.total_grams,
		   	   user_id: user.user.user_id
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


var express = require('express');
var routerg = express.Router();
var mysql = require('mysql');
var connection = require('../public/javascripts/require');
var expressSession = require('express-session');
var passport = require('passport');
var passportLocal = require('passport-local');

routerg.get('/egym', function(req, res, next) {
		var user = {
		isAuthenticated: req.isAuthenticated(),
		user: req.user
	};
      if (!user.isAuthenticated) { 
          res.redirect('/login');
         } else {

	var egym;
//pool.getConnection(function(err,connection) {
	connection.query('select * from  egym', function (err, rows) {

	egym = rows;

	if (!err) {
		res.render('egym', {
			   title: 'My e-gym',
		 description: 'Checkout your workouts!',
				data: egym,
	 isAuthenticated: req.isAuthenticated(),
	 			user: req.user			
		});

	}	if (err) {
			console.log(err);

		}
});		

}});

routerg.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/');
});
//});
module.exports = routerg;
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

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var registerDiv = document.getElementById('registerDiv');


function registerUser() {

 if (registerDiv.hasAttribute('hidden')) {
 registerDiv.removeAttribute('hidden');
 } 
 else {
 	console.log('err');

};	
};
var showRegister = document.getElementById('btntest4');

showRegister.addEventListener('click', registerUser, false);

module.exports = registerUser;
module.exports = showRegister;






// var ninja = require('./ninja');

//btncall.addEventListener('click', registerUser, false);

// window.addEventListener("load", btncall, false);

// var btn = new ninja();
// var btncall = document.getElementById('btntest4');
//  btncall.addEventListener('click', btn.RegisterUser, false);

//btn.btncall.addEventListener('click', btn.registerUser, false);



// var showRegister = document.getElementById('btntest4');
// showRegister.addEventListener('click', registerUser, false);



// function registerUser(formid, attribute) {

// if(document.getElementById('formid')) {

//    if (registerDiv.hasAttribute('attribute')) {
//    registerDiv.removeAttribute('attribute');
//    } 
//    else {
//  	console.log('err');
// }
// };	

// registerUser('registerDiv', 'hidden');



// module.exports = registerUser;
// module.exports = showRegister;

},{}]},{},[1]);

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// To show the food profiles stored in the database.

function showNutritionTable() {
var foodData = document.getElementById('foodData');
var dataSearch = document.getElementById('dataSearch');


 if (foodData.hasAttribute('hidden')) {
 foodData.removeAttribute('hidden');
 dataSearch.removeAttribute('hidden');
 foodProfile.setAttribute('hidden', 'true');
 
 } 
 else {
 	console.log('err');
}
};	

var showtblclick = document.getElementById('btntest3');
showtblclick.addEventListener('click', showNutritionTable, false);


//to show the food profile FORM for the user. 

function foodForm() {
var foodProfile = document.getElementById('foodProfile');

 if (foodProfile.hasAttribute('hidden')) {
 foodProfile.removeAttribute('hidden');
 foodData.setAttribute('hidden', 'true');
 dataSearch.setAttribute('hidden', 'true');
 
 } 
 else {
 	console.log('err');
}
};	

var showFood = document.getElementById('btntest1');
showFood.addEventListener('click', foodForm, false);

module.exports = showNutritionTable;
module.exports = foodForm;
module.exports = showFood;
},{}]},{},[1]);

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//To show the workout input form

function showWorkoutTable() {
var workoutData = document.getElementById('workoutData');
var workSearch = document.getElementById('workSearch');

 if (workoutData.hasAttribute('hidden')) {
 workoutData.removeAttribute('hidden');
  workSearch.removeAttribute('hidden');
  workProfile.setAttribute('hidden', 'true');
 } 
 else {
 	console.log('err');
}
};	

var btnShowWork = document.getElementById('btnworkget');
btnShowWork.addEventListener('click', showWorkoutTable, false);

function exerciseForm() {
var workProfile = document.getElementById('workProfile');

 if (workProfile.hasAttribute('hidden')) {
 workProfile.removeAttribute('hidden');
 workoutData.setAttribute('hidden', 'true');
 workSearch.setAttribute('hidden', 'true');
 } 
 else {
 	console.log('err');
}
};	

var showWorkout = document.getElementById('btnworkpos');
showWorkout.addEventListener('click', exerciseForm, false);


module.exports = showWorkoutTable;
module.exports = exerciseForm;
module.exports = showWorkout;
},{}]},{},[1]);

var mysql = require('mysql');
var connection = mysql.createConnection({

  host            : 'localhost',
  user            : 'tulsi',
  password        : 'Yoni3454!',
  database        : 'freetools'

});

connection.query('USE freetools'); 

module.exports = connection;


// var mysql = require('mysql');
// var pool = mysql.createPool({
//   connectionLimit : 10,
//   host            : 'localhost',
//   user            : 'tulsi',
//   password        : 'Yoni3454!',
//   database        : 'freetools'
// });

// module.exports = pool;
//password        : 'owei93ihr9h$',