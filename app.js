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
            if (err)
                return done(err);
             if (!rows.length) {
                return done(null, false);//, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
            } 
            
            // if the user is found but the password is wrong
            if (!( rows[0].password == password))
                return done(null, false), console.log('Oops! Wrong password.'); // create the loginMessage and save it to session as flashdata
            
            // all is well, return successful user
            return done(null, rows[0]);         
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
