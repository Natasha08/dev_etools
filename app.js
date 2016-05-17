var mysql = require('mysql');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var passport = require('passport');
var passportLocal = require('passport-local');
var pool = require('./public/javascripts/require');


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

//create local passport strategy
passport.use(new passportLocal.Strategy(function(username, password, done) {
  pool.getConnection(function(err,connection) {
    if (err) {
      console.error(err);
      return;
  } else {
     console.log('it worked!');

  }

  //get user from the database
  connection.query('select username, password from users', function (err, rows) {
    var user = rows;
    for (var i = 0; i< user.length; i++) {
      username: user[i].username;
      password: user[i].password
    }
      if (!err) {
        console.log(username);
      } else {  
          console.error(err);
        }

    //compare db user to user input
    if (username === username && password === password) {
      done(null, {username: username, password: password});

  } else {
      done(null, null);
  }

});
});
}));

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
