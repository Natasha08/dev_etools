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

var routes = require('./routes/index');
var routesg = require('./routes/egym');
var routesf = require('./routes/efridge');

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
        // by default, local strategy uses username and password, we will override with email
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true // allows us to pass back the entire request to the callback
},
    function(req, email, password, done) { // callback with email and password from our form

         connection.query("SELECT * FROM `users` WHERE `email` = '" + email + "'",function(err,rows){
            if (err)
                return done(err);
             if (!rows.length) {
                return done(null, false);//, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
            } 
            
            // if the user is found but the password is wrong
            if (!( rows[0].password == password))
                return done(null, false);//, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
            
            // all is well, return successful user
            return done(null, rows[0]);         
        });
        


    }));

passport.serializeUser(function(user, done) {
    done(null, user.id);
    });

// used to deserialize the user
passport.deserializeUser(function(id, done) {
    connection.query("select * from users where id = "+id,function(err,rows){   
          done(err, rows[0]);
        });
    });

app.use('/', routes);
app.use('/', routesg);
app.use('/', routesf);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

//development error handler
//will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//  res.status(err.status || 500);
//  res.render('error', {
//    message: err.message,
//    error: {}
//  });
// });


module.exports = app;

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
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = require('../public/javascripts/require');
var expressSession = require('express-session');
var passport = require('passport');
//var passportp = require('../passport');
var passportLocal = require('passport-local');

// var natskey = require('../secret');
// var sendgrid  = require('sendgrid')(natskey);
// var ejs = require('ejs');
// var fs = require('fs');

//read file
router.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/');
});

router.get('/', function(req, res, next) {

	 res.render('index', {
	 	title: 'MyColo',
	 	isAuthenticated: req.isAuthenticated(),
	 	user: req.user
	 });
});

router.post('/login', passport.authenticate('local-login', { failureRedirect: '/' }),
      function(req, res) {
        res.redirect('/');
      });

router.post('/register', function(req, res, next) {
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
	res.redirect('/');
}

});
});



//uncomment this for pool //connection});

module.exports = router;	

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
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function registerUser() {

var registerDiv = document.getElementById('registerDiv');


 if (registerDiv.hasAttribute('hidden')) {
 registerDiv.removeAttribute('hidden');
 } 
 else {
 	console.log('err');
}
};	

var showRegister = document.getElementById('btntest4');
showRegister.addEventListener('click', registerUser, false);

module.exports = registerUser;
module.exports = showRegister;

},{}]},{},[1]);

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// To show the food profiles stored in the database.

function shownutritiontable() {
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
showtblclick.addEventListener('click', shownutritiontable, false);


//to show the food profile FORM for the user. 

function createFood() {
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
showFood.addEventListener('click', createFood, false);

module.exports = shownutritiontable;
module.exports = createFood;
module.exports = showFood;
},{}]},{},[1]);

var mysql = require('mysql');
var connection = mysql.createConnection({

  host            : 'localhost',
  user            : 'tulsi',
  password        : 'Vala2114!',
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
