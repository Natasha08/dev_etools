var mysql = require('mysql');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
//var passport = require('passport');
// var BearerStrategy = require('passport-http-bearer').Strategy;
var pool = require('./public/javascripts/require.js');
var easyPbkdf2 = require ('easy-pbkdf2')();
const crypto = require('crypto');
var secretKey = require('./secret');
var sessionKey = require('./secret');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var passport = require('passport');
var LocalStrategy   = require('passport-local').Strategy;

var routes = require('./routes/index');


var app = express();

var hour = 3600000;

// view engine setup
app.set('views', path.join(__dirname, 'public/templates'));
app.set('view engine', 'ejs');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSession({ secret: process.env.SESSION_SECRET || sessionKey,
                          resave: false,
                          saveUninitialized: false,
                        }));
app.set(secretKey, secretKey);
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));


//passport configuration
 app.use(passport.initialize());
 app.use(passport.session());

//access-control origins
//var origin = ['https://mycolofitness.com']

var origin = ['http://localhost']

//header config 
app.use(function(req, res, next) {
       res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});



passport.use('local-login', new LocalStrategy({

// by default, local strategy uses username and password, the following will override with email [change the name on the form also]
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true // allows us to pass back the entire request to the callback
},

    function(req, email, password, done) { // callback with email and password from our form


  pool.query("SELECT * FROM `users` WHERE `email` = '" + email + "'",function(err,user){
  

//if not connected to a users db
        if (err)
            return done(err); 
          if (!user.length) {
              return done(null, false), console.log('no error, and no user either!'); //req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
            } 

            if (!err) {

//temporary user object
      var tempUser = {
      
        //password: req.body.password,
        salt: user[0].user_salt

      }
//create key with password from user input and orginal salt
      const key = crypto.pbkdf2Sync(password, tempUser.salt, 100000, 512, 'sha512');
      var passbuf2 = (key.toString('hex'));

            }
            
// if the user is found but the password is wrong
          if (!(user[0].password == passbuf2)) 
                return done(null, false), console.log('something is wrong with the buffers!'); // create the loginMessage and save it to session as flashdata
//if the salt does not match up
          if (!( user[0].user_salt == tempUser.salt))
                return done(null, false), console.log('saltless');
// all is well, return successful user
            return done(null, user[0]), console.log('You are successfully logged in!');         
        });
        


    }));


passport.serializeUser(function(user, done) {
    done(null, user.user_id);
    });

// used to deserialize the user
passport.deserializeUser(function(user_id, done) {
    pool.query("select * from users where user_id = "+user_id,function(err,user){   
          done(err, user[0]);
        });
    });

var ensureAuth = function(req, res, next) {
  if(!req.isAuthenticated()) 
    res.sendStatus(401);
  else {
    next();
  }
};

app.post('/login', passport.authenticate('local-login', { session: true, successRedirect: '/', failureRedirect: '/login' }),
      function(req, res) {
        //res.redirect('/');//+req.user.firstname);
        res.status(200).send(req.user.username);

      });


//route to test if the user is logged in or not
app.get('/loggedin', ensureAuth, function(req, res) {
 res.send(req.isAuthenticated()) ? req.user : '0';
});

app.get('/account', ensureAuth, function(req, res){
      res.json(req.user.username);

});



// app.use(function (req, res, next) {
//     if (req.isAuthenticated()) 
//       var userTest = req.user;
//     console.log(userTest);
//     next ();
// });

    // app.get('/efridge', passport.authenticate('local-login', { session: true, failureRedirect: '/login' }),
    //   function(req, res) {
    //     res.render('index');
    //   });



//use the routes specified earlier
app.use('/', routes);

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


process.on('uncaughtException', function(err) {
    console.log(err);
});
module.exports = app;
//module.exports = user;
