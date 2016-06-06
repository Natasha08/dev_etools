//Local passport strategy with cookies

// var cookieParser = require('cookie-parser');
// var expressSession = require('express-session');
// var passport = require('passport');
// var LocalStrategy   = require('passport-local').Strategy;

//app.use(cookieParser());
// app.use(expressSession({ secret: process.env.SESSION_SECRET || 'woiefjwafo;ajwefoewifjaweof;jiawef;oweijf;awoefijaw;foijew;eofijaeofjef\'pweofFJEAFIOAEJFALRJ3P28U4TO3WF5ILGJ\;OTIJWE\;T/OIJTGWPAIT\'JKL/MQRA;wozesnfpoaij;eirjw;3eorakljtmw;isoejta',
//                           resave: false,
//                           saveUninitialized: false
//                         }));

// app.use(passport.session());

//creates a new strategy for passport. Note username (default) changed to email 

// passport.use('local-login', new LocalStrategy({

// // by default, local strategy uses username and password, the following will override with email [change the name on the form also]
//     usernameField : 'email',
//     passwordField : 'password',
//     passReqToCallback : true // allows us to pass back the entire request to the callback
// },

//     function(req, email, password, done) { // callback with email and password from our form


//   connection.query("SELECT * FROM `users` WHERE `email` = '" + email + "'",function(err,rows){
  

// //if not connected to a users db
//         if (err)
//             return done(err); 
//           if (!rows.length) {
//               return done(null, false), console.log('no error, and no user either!'); //req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
//             } 

//             if (!err) {

// //temporary user object
//       var users = {
      
//         //password: req.body.password,
//         salt: rows[0].user_salt

//       }
// //create key with password from user input and orginal salt
//       const key = crypto.pbkdf2Sync(password, users.salt, 100000, 512, 'sha512');
//       var passbuf2 = (key.toString('hex'));

//             }
            
// // if the user is found but the password is wrong
//           if (!(rows[0].password == passbuf2)) 
//                 return done(null, false), console.log('something is wrong with the buffers!'); // create the loginMessage and save it to session as flashdata
// //if the salt does not match up
//           if (!( rows[0].user_salt == users.salt))
//                 return done(null, false), console.log('saltless');
// // all is well, return successful user
//             return done(null, rows[0]), console.log('You are successfully logged in!');         
//         });
        


//     }));


// passport.serializeUser(function(user, done) {
//     done(null, user.user_id);
//     });

// // used to deserialize the user
// passport.deserializeUser(function(user_id, done) {
//     connection.query("select * from users where user_id = "+user_id,function(err,rows){   
//           done(err, rows[0]);
//         });
//     });
