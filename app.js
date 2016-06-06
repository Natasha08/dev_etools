var mysql = require('mysql');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var passport = require('passport');
var HttpStrategy = require('passport-http').BasicStrategy;
var pool = require('./public/javascripts/require.js');
var easyPbkdf2 = require ('easy-pbkdf2')();
const crypto = require('crypto');
var jsonwebtoken = require('jsonwebtoken');
var secretKey = require('./secret');
var User = require('./userFactory');
var jsonwebtoken = require('jsonwebtoken');


var routes = require('./routes/index');
var routesf = require('./routes/efridge');
var routesg = require('./routes/egym');
//var routesl = require('./routes/login');




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'public/templates'));
app.set('view engine', 'ejs');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set(secretKey, secretKey);
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));


//passport configuration
 app.use(passport.initialize());

//header config 
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});


passport.use('basic', new HttpStrategy({

// override the default local strategy email [make changes to the name on the form also]
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true //pass back the entire request to the callback
    },


    function(req, email, password, done) { // callback with email and password from our form


        pool.query("SELECT * FROM `users` WHERE `email` = '" + email + "'", function(err, rows){
            
//if not connected to a users db
          if (err)
              return done(err);
              console.log('Connected?' +err); 
          if (!rows.length) {
              return done(null, false), console.log('no error, and no user either!'); //req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
            } 


//users object for password comparison
               var users = {
        //password: req.body.password,
                salt: rows[0].user_salt
               }

//create key with password from user input and orginal salt
               const key = crypto.pbkdf2Sync(req.body.password, users.salt, 100000, 512, 'sha512');
               var passbuf2 = (key.toString('hex'));
               //console.log(passbuf2);
          
            
// if the user is found but the password is wrong
          if (!(rows[0].password == passbuf2)) {
              return done(null, false), 
              console.log('something is wrong with the buffers!'); // create the loginMessage and save it to session as flashdata
          } 
          else {
              console.log('This area is responsive');
              return done(null, rows);
              // if(rows) {

              // var string=JSON.stringify(rows);
              // var json =  JSON.parse(string);
              // var user = json;
              //        console.log(user);
              //      }
                
                //  var user = JSON.stringify(rows);

             }
// req.models.tb_user.query(sql,function(err, rows) {
//         console.log('>> results: ', rows );
        
//         console.log('>> string: ', string );
        
//         console.log('>> json: ', json);
//         console.log('>> user.name: ', json[0].name);
        
//         next();
//     });
// }

            
                       
              // console.log(rows[0].username);//('You are successfully logged in!');

              // var token = createToken(user);

          //connection.release();

             });  //  pool.query close
        
        } //  anon function close
    ));  // passport.use close

passport.serializeUser(function(user, done) {
    done(null, user.user_id);
    });

// used to deserialize the user
passport.deserializeUser(function(user_id, done) {
    pool.query("select * from users where user_id = "+user_id,function(err,rows){   
          done(err, rows[0]);
        });
    });


//This function is currently handled in conjunct w/ ng

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
    next();
    } else {
    res.sendStatus(403);
  };
};


function ensureAuthorized(req, res, next) {
    var bearerToken;
    var bearerHeader = req.headers["authorization"];
    console.log(bearerHeader);
    if (typeof bearerHeader !== 'undefined') {
        var bearer = bearerHeader.split(" ");
        bearerToken = bearer[1];
        req.token = bearerToken;
        console.log(req.token);
        next();
    } else {
        res.sendStatus(403);
    }
}

process.on('uncaughtException', function(err) {
    console.log(err);
});

app.get('/me', function(req, res) {
  res.json(req.decoded);
});



app.post('/login', passport.authenticate('basic', {session: false}),
   
  function(req, res) {
    res.redirect('/');
  }); 

  app.use('/efridge', passport.authenticate('basic', {session: false}));    

// app.get('/', ensureAuthorized, function(err, req, res) {
//   if (!err)
// res.render('index');
// else
// console.log('This is the header...');

// });

app.get('/efridge', ensureAuthorized, function(err, res) {
  res.json([
    {value: 'efridge'},
    {value: 'efridge'},
    {value: 'efridge'},
    {value: 'efridge'}
    
  ]); 

});

// app.get('/egym', ensureAuthorized, function(err, res) {
//   res.json([
//     {value: 'egym'},
//     {value: 'egym'},
//     {value: 'egym'},
//     {value: 'egym'}
    
//   ]); 

// });

app.get('/api/data', ensureAuthorized, function(err, res) {
  res.json([
    {value: 'foo'},
    {value: 'foo2'},
    {value: 'foo3'},
    {value: 'foo4'}
    
  ]); 

});


//use the routes specified earlier
app.use('/', routes);

// app.all('/*', function (req, res) {
//   res.render('./public/templates/index.html'); /* <= Where my ng-view is located */
// });

// //app.use('/login', routes);
// app.use('/', routesg);
// app.use('/', routesf);
// app.use('/', routesl);

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

