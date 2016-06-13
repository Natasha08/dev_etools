// passport.use('bearer', new BearerStrategy(

//       function(token, done) {
  
//  console.log('Well it works at the beginning anyway'),
// // // override the default local strategy email [make changes to the name on the form also]
// //      usernameField : 'email',
// //      passwordField : 'password',
// //      passReqToCallback : true //pass back the entire request to the callback
// //      },
//  console.log('Well it works at the beginning anyway'),

//     pool.query("SELECT * FROM users WHERE email` = '"+ email+"'", function(err, user){

//           if (err)
//               return done(err);
//               console.log('Connected?' +err); 
//           if (!rows.length) {
//               return done(null, false), console.log('no error, and no user either!'); //req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
//             }

//   //salt/hash/stretch pswd for comparison     
//            const key = crypto.pbkdf2Sync(req.body.password, rows[0].salt, 100000, 512, 'sha512');
//            var passbuf2 = (key.toString('hex'));

// //compare passwords
//     if (!(rows[0].password == passbuf2)) {
//               return done(null, false), 
//               console.log('something is wrong with the buffers!'); // create the loginMessage and save it to session as flashdata
//           }           
// //create token to compare to db                

//           if (err) { return done(err); }
//           if (!user) { return done(null, false); }
//           return done(null, token, { scope: 'all' });
//         });

//       }
//     ));


// //This function is currently handled in conjunct w/ ng

// function ensureAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//     next();
//     } else {
//     res.sendStatus(403);
//   };
// };


// function ensureAuthorized(req, res, next) {
//     var bearerToken;
//     var bearerHeader = req.headers["authorization"];
//     console.log(bearerHeader);
//     if (typeof bearerHeader !== 'undefined') {
//         var bearer = bearerHeader.split(" ");
//         bearerToken = bearer[1];
//         req.token = bearerToken;
//         console.log(req.token);
//         next();
//     } else {
//         res.sendStatus(403);
//     }
// }


// app.get('/me', function(req, res) {
//   res.json(req.decoded);
// });

// app.post('/login', passport.authenticate('bearer', { session: false }),
//   function(req, res) {
//     res.json(req.user);
//   });

// // app.post('/login', passport.authenticate('bearer', { session: false, failureRedirect: '/login' }),
// //    function(req, res) {
// //    //req.login();
// //         res.redirect('/');
// //       });


// // app.post('/login', function(req, res, next) {
// //   passport.authenticate('bearer', function(err, user, info) {
// //     if (err) { return next(err); }
// //     if (!user) { return res.redirect('/login'); }
// //     req.logIn(user, function(err) {
// //       if (err) { return next(err); }
// //       return res.redirect("/login?access_token=" + req.user.access_token);
// //     });
// //   })(req, res, next);
// // });



//     // app.post('/login', passport.authenticate('bearer', { session: false }),
//     //   function(req, res) {
//     //     res.json(req.user);
//     //   });


// // app.post('/login', passport.authenticate('basic', {session: false}),
   
// //   function(req, res) {
// //     res.redirect('/');
// //   }); 

// //   app.use('/efridge', passport.authenticate('basic', {session: false}));    

// // app.get('/', ensureAuthorized, function(err, req, res) {
// //   if (!err)
// // res.render('index');
// // else
// // console.log('This is the header...');

// // });

// app.get('/efridge', ensureAuthorized, function(err, res) {
//   res.json([
//     {value: 'efridge'},
//     {value: 'efridge'},
//     {value: 'efridge'},
//     {value: 'efridge'}
    
//   ]); 

// });

// // app.get('/egym', ensureAuthorized, function(err, res) {
// //   res.json([
// //     {value: 'egym'},
// //     {value: 'egym'},
// //     {value: 'egym'},
// //     {value: 'egym'}
    
// //   ]); 

// // });

// app.get('/api/data', ensureAuthorized, function(err, res) {
//   res.json([
//     {value: 'foo'},
//     {value: 'foo2'},
//     {value: 'foo3'},
//     {value: 'foo4'}
    
//   ]); 

// });

















// // passport.use('basic', new HttpStrategy({

// // // override the default local strategy email [make changes to the name on the form also]
// //     usernameField : 'email',
// //     passwordField : 'username',
// //     passReqToCallback : true //pass back the entire request to the callback
// //     },


// //     function(req, email, username, done) { // callback with email and password from our form

 
// //         pool.query("SELECT * FROM `users` WHERE `email` = '" + email + "'", function(err, rows){

// // //if not connected to a users db
// //           if (err)
// //               return done(err);
// //               console.log('Connected?' +err); 
// //           if (!rows.length) {
// //               return done(null, false), console.log('no error, and no user either!'); //req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
// //             } 





// // //users object for password comparison
// //                var users = {}
// //         //password: req.body.password,
// //                 users.email = email;
               
// //                console.log('This is the users printout: '+users);

// // //create key with password from user input and orginal salt
// //                const key = crypto.pbkdf2Sync(req.body.password, rows[0].salt, 100000, 512, 'sha512');
// //                var passbuf2 = (key.toString('hex'));
// //                //console.log(passbuf2);
          
            
// // // if the user is found but the password is wrong
// //           if (!(rows[0].password == passbuf2)) {
// //               return done(null, false), 
// //               console.log('something is wrong with the buffers!'); // create the loginMessage and save it to session as flashdata
// //           } 
// //           else {

// //               console.log('This area is responsive');
// //               return done(null, rows);
              

//           //connection.release();

//              // });  //  pool.query close
//         // delete users.salt;
//         // console.log(users);
//        // } //  anon function close
//     // ));  // passport.use close

// // passport.serializeUser(function(user, done) {
// //     done(null, user.user_id);
// //     });

// // // used to deserialize the user
// // passport.deserializeUser(function(user_id, done) {
// //     pool.query("select * from users where user_id = "+user_id,function(err,rows){   
// //           done(err, rows[0]);
// //         });
// //     });










// //Local passport strategy with cookies

// // var cookieParser = require('cookie-parser');
// // var expressSession = require('express-session');
// // var passport = require('passport');
// // var LocalStrategy   = require('passport-local').Strategy;

// //app.use(cookieParser());
// // app.use(expressSession({ secret: process.env.SESSION_SECRET || 'woiefjwafo;ajwefoewifjaweof;jiawef;oweijf;awoefijaw;foijew;eofijaeofjef\'pweofFJEAFIOAEJFALRJ3P28U4TO3WF5ILGJ\;OTIJWE\;T/OIJTGWPAIT\'JKL/MQRA;wozesnfpoaij;eirjw;3eorakljtmw;isoejta',
// //                           resave: false,
// //                           saveUninitialized: false
// //                         }));

// // app.use(passport.session());

// //creates a new strategy for passport. Note username (default) changed to email 

// // passport.use('local-login', new LocalStrategy({

// // // by default, local strategy uses username and password, the following will override with email [change the name on the form also]
// //     usernameField : 'email',
// //     passwordField : 'password',
// //     passReqToCallback : true // allows us to pass back the entire request to the callback
// // },

// //     function(req, email, password, done) { // callback with email and password from our form


// //   connection.query("SELECT * FROM `users` WHERE `email` = '" + email + "'",function(err,rows){
  

// // //if not connected to a users db
// //         if (err)
// //             return done(err); 
// //           if (!rows.length) {
// //               return done(null, false), console.log('no error, and no user either!'); //req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
// //             } 

// //             if (!err) {

// // //temporary user object
// //       var users = {
      
// //         //password: req.body.password,
// //         salt: rows[0].user_salt

// //       }
// // //create key with password from user input and orginal salt
// //       const key = crypto.pbkdf2Sync(password, users.salt, 100000, 512, 'sha512');
// //       var passbuf2 = (key.toString('hex'));

// //             }
            
// // // if the user is found but the password is wrong
// //           if (!(rows[0].password == passbuf2)) 
// //                 return done(null, false), console.log('something is wrong with the buffers!'); // create the loginMessage and save it to session as flashdata
// // //if the salt does not match up
// //           if (!( rows[0].user_salt == users.salt))
// //                 return done(null, false), console.log('saltless');
// // // all is well, return successful user
// //             return done(null, rows[0]), console.log('You are successfully logged in!');         
// //         });
        


// //     }));


// // passport.serializeUser(function(user, done) {
// //     done(null, user.user_id);
// //     });

// // // used to deserialize the user
// // passport.deserializeUser(function(user_id, done) {
// //     connection.query("select * from users where user_id = "+user_id,function(err,rows){   
// //           done(err, rows[0]);
// //         });
// //     });
