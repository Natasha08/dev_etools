
// // var app = angular
// // .module('app', ['ui.router','ui.bootstrap'])
//  var app = angular.module('app', ['ui.router'])

// app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
// 	  $urlRouterProvider.otherwise('/');

// 	$stateProvider
// 	.state('view1', {
// 		url: '/view1',
// 		controller: 'SimpleController',
// 		templateUrl: 'templates/view1.ejs' 
// 	});

// }]);

// app.controller('SimpleController', ['$scope', function($scope) {

// $scope.macros = [

// 	{name: 'fat', amount: 20}, 
// 	{name: 'carb', amount: 5}, 
// 	{name: 'protein', amount: 12}, 
// 	{name: 'total', amount: 19}
// 	];

// $scope.addMacro = function() {
// 	$scope.macros.push(
// 	{name: $scope.newMacro.name},
// 	{amount: $scope.newMacro.amount}
// 	)};

// //     //This will hide the DIV by default.
// //     $scope.IsHidden = true;
// //     $scope.ShowHide = function () {
// //         //If DIV is hidden it will be visible and vice versa.
// //         $scope.IsHidden = $scope.IsHidden ? false : true;
// //     }
//  }]);


myApp.controller('EfridgeController', ['$scope', '$rootScope', '$http', '$log', '$cookies', function($scope, $rootScope, $http, $log, $cookies) {


  				$scope.meals = [],
    				$scope.addMeal = function() {

    					$scope.meals.push(
					{food_name: $scope.checkModel.value1.food_name, 
					 total_calories: $scope.checkModel.value1.total_calories,
							fat_grams: $scope.checkModel.value1.fat_grams}
						
    					// $http.post('/efridge', $scope.meals);
    					
    				)},
    					//A button to make an object, and a button to destroy it,
    					//with code that disables the button that makes the object if it is
    					//already made 
  					$scope.daily = [],

    				$scope.addDaily = function() {

    					$scope.daily.push(
					{cal: $scope.daily.cal, 
					 fat: $scope.daily.fat,
					 carb: $scope.daily.carb,
					protein: $scope.daily.protein}

						
    					// $http.post('/efridge', $scope.meals);
    					
    				),
    				console.log(JSON.stringify($scope.daily))
    				},

        $scope.IsHiddenForm = true;
    	$scope.ShowHideForm = function () {
        //If DIV is hidden it will be visible and vice versa.
        $scope.IsHiddenForm = !$scope.IsHiddenForm;
        $scope.IsHidden = true;
        $scope.IsHiddenMeal = true;
    }
        $scope.IsHiddenMeal = true;
    	$scope.ShowHideMeal = function () {
        //If DIV is hidden it will be visible and vice versa.
        $scope.IsHiddenMeal = !$scope.IsHiddenMeal;
        $scope.IsHidden = true;
        $scope.IsHiddenForm = true;
    }    

        $scope.IsHidden = true;
    $scope.ShowHide = function () {
        //If DIV is hidden it will be visible and vice versa.
        $scope.IsHidden = !$scope.IsHidden;
        $scope.IsHiddenForm = true;
        $scope.IsHiddenMeal = true;
    }

if ($http.get('efridge')) {
		$http({

				method:'GET',
				url:'http://localhost:3000/efridge'})
				//data:{email:$scope.email, password:$scope.password}
				.then(function (response) {
					//console.log(response);
					//$scope.userTest = response;
					$scope.foodItems = response.data;
					//console.log($scope.foodItems);
						$scope.checkModel = {
    					value1 : true,
    					value2 : true
    				}
  
   						
});
}

	function foodForm()  {

		$http({

				method:'POST',
				url:'http://localhost:3000/foodform'})
				//data:{email:$scope.email, password:$scope.password}
				.then(function (response) {
					//console.log(response);
					//$scope.userTest = response;
					$scope.UserF = response.data;
					$scope.UserFIdFood = $scope.User.user_id;

					//console.log($scope.userTests.user_id);


});				
}

//ngCookie test
	// $cookies.put("key", "value"); 
	// 	var value = $cookies.get("key");
	// 	console.log(value);

	$scope.macros = [

		{name: 'fat', amount: 20}, 
		{name: 'carb', amount: 5}, 
		{name: 'protein', amount: 12}, 
		{name: 'total', amount: 19}
	],

	$scope.addMacro = function() {
	$scope.macros.push(
		{name: $scope.newMacro.name,
		amount: $scope.newMacro.amount}
	)}


 }]);

myApp.controller('HomeController', ['$scope', '$rootScope', '$http', '$log', '$cookies', function($scope, $rootScope, $http, $log, $cookies) {


        $scope.IsHiddenDaily = true;
    	$scope.ShowHideDaily = function () {
        //If DIV is hidden it will be visible and vice versa.
        $scope.IsHiddenDaily = !$scope.IsHiddenDaily;

    } 

 }]);

myApp.controller('EgymController', ['$scope', '$rootScope', '$http', '$log', '$cookies', function($scope, $rootScope, $http, $log, $cookies) {
		//client-side ajax call [with interceptor]

    $scope.IsHidden = true;
    $scope.ShowHide = function () {
        //If DIV is hidden it will be visible and vice versa.
        $scope.IsHidden = !$scope.IsHidden;
    }

 
					// console.log($scope.daily)
    				 
  }]);
   			  					

myApp.controller('AuthController', ['$scope', '$rootScope', '$http', '$log', '$cookies', function($scope, $rootScope, $http, $log, $cookies) {



//currently not working
if ($http.post('/login')) {
		$http({

				method:'POST',
				url:'http://localhost:3000/login',
				data:{email:$scope.email, password:$scope.password}})
				.then(function (response) {
					//console.log(response);
					$scope.apiTest = JSON.stringify(response.data);
					//console.log($scope.apiTest);

	 },
				function (data) {
					//console.log(response);
					//console.log(data);

	 
				}
				)

}

function checkLoggedin ($q, $timeout, $http, $location, $rootScope) {
  //initialize a new promise
  var deferred = $q.defer();


        $http({

				method:'GET',
				url:'http://localhost:3000/loggedin'})
				//data:{email:$scope.email, password:$scope.password}
				.then(function (user) {
					//console.log(user);
					 //Authenticated
    			  if (user !== '0') {
      			  deferred.resolve();
      			  $rootScope.authed = 'You are authorized';

    			  //console.log(user);
			     }

				//Not Authenticated
				    else {
				      $rootScope.message = 'You need to log in.';
				      deferred.reject();
				      $location.url('/login');
				    }
				  });
				  return deferred.promise;
				}


function getAccount() {
		$http({

				method:'GET',
				url:'http://localhost:3000/account'})
				//data:{email:$scope.email, password:$scope.password}
				.then(function (response) {
					//console.log(response);
					//$scope.userTest = response;
					$scope.User = response.data;
					$scope.UserId = $scope.User.user_id;
					$scope.UserName= $scope.User.username;
					//console.log($scope.userTests.user_id);


});
}
 }]);


function db_secret() {
	var db = {};
// db.user = 'tulsi';
// db.password = 'Yoni3454!';
db.user = 'bradis';
db.password = 'L93huY032r39832y';
return db;
}
	

// var db.user = 'trinity';

// var db.password = 'sG1^j84eL';


nano /etc/init/etools.conf
module.exports = db_secret;
// // register the interceptor as a service
// $provide.factory('myHttpInterceptor', function($q, dependency1, dependency2) {
//   return {
//     // optional method
//     'request': function(config) {
//       // do something on success
//       return config;
//     },

//     // optional method
//    'requestError': function(rejection) {
//       // do something on error
//       if (canRecover(rejection)) {
//         return responseOrNewPromise
//       }
//       return $q.reject(rejection);
//     },



//     // optional method
//     'response': function(response) {
//       // do something on success
//       return response;
//     },

//     // optional method
//    'responseError': function(rejection) {
//       // do something on error
//       if (canRecover(rejection)) {
//         return responseOrNewPromise
//       }
//       return $q.reject(rejection);
//     }
//   };
// });

// $httpProvider.interceptors.push('myHttpInterceptor');


// // alternatively, register the interceptor via an anonymous factory

// 		$httpProvider.interceptors.push(function($q, $location) {
//   				return {
//     		response: function(response) {
//       		console.log('success! And here is your response object: '+response);
//       		return response;
//     		},
//    			 responseError: function(response) {
//      		 if (response.status === 401) 
//     	    $location.url('/login');
//      		 return $q.reject(response);
//    		 }
//  		 };
// 	});


// $httpProvider.interceptors.push(function($q, dependency1, dependency2) {
//   return {
//    'request': function(config) {
//        // same as above
//     },

//     'response': function(response) {
//        // same as above
//     }
//   };
// });


// // myApp.factory('Auth', (['$q', '$location', '$localStorage', function($q, $location, $localStorage) {
// // 		return {
// // 			 'request': function (config) {
// // 				config.headers = config.headers || {};
// // 				if ($localStorage.token) {
// // 					config.headers.Authorization = 'Bearer' + $localStorage.token;
// // 				}
// // 				return config;
// // 			},
// // 			 'responseError': function(response) {
// // 			 	if(response.status === 401 || response.status === 403) {
// // 			 		$location.path('/login');
// // 			 	}
// // 			 	return $q.reject(response);
// // 			}
// // 		};
		
// // }
// // ]));
function db_secret(){var a={};return a.user="bradis",a.password="L93huY032r39832y",a}function db_secret(){var a={};return a.user="bradis",a.password="L93huY032r39832y",a}function db_secret(){var a={};return a.user="trinity",a.password="sG1^j84eL",a}myApp.controller("EfridgeController",["$scope","$rootScope","$http","$log","$cookies",function(a,b,c,d,e){a.meals=[],a.addMeal=function(){a.meals.push({food_name:a.checkModel.value1.food_name,total_calories:a.checkModel.value1.total_calories,fat_grams:a.checkModel.value1.fat_grams})},a.daily=[],a.addDaily=function(){a.daily.push({cal:a.daily.cal,fat:a.daily.fat,carb:a.daily.carb,protein:a.daily.protein}),console.log(JSON.stringify(a.daily))},a.IsHiddenForm=!0,a.ShowHideForm=function(){a.IsHiddenForm=!a.IsHiddenForm,a.IsHidden=!0,a.IsHiddenMeal=!0},a.IsHiddenMeal=!0,a.ShowHideMeal=function(){a.IsHiddenMeal=!a.IsHiddenMeal,a.IsHidden=!0,a.IsHiddenForm=!0},a.IsHidden=!0,a.ShowHide=function(){a.IsHidden=!a.IsHidden,a.IsHiddenForm=!0,a.IsHiddenMeal=!0},c.get("efridge")&&c({method:"GET",url:"http://localhost:3000/efridge"}).then(function(b){a.foodItems=b.data,a.checkModel={value1:!0,value2:!0}}),a.macros=[{name:"fat",amount:20},{name:"carb",amount:5},{name:"protein",amount:12},{name:"total",amount:19}],a.addMacro=function(){a.macros.push({name:a.newMacro.name,amount:a.newMacro.amount})}}]),myApp.controller("HomeController",["$scope","$rootScope","$http","$log","$cookies",function(a,b,c,d,e){a.IsHiddenDaily=!0,a.ShowHideDaily=function(){a.IsHiddenDaily=!a.IsHiddenDaily}}]),myApp.controller("EgymController",["$scope","$rootScope","$http","$log","$cookies",function(a,b,c,d,e){a.IsHidden=!0,a.ShowHide=function(){a.IsHidden=!a.IsHidden}}]),myApp.controller("AuthController",["$scope","$rootScope","$http","$log","$cookies",function(a,b,c,d,e){c.post("/login")&&c({method:"POST",url:"http://localhost:3000/login",data:{email:a.email,password:a.password}}).then(function(b){a.apiTest=JSON.stringify(b.data)},function(a){})}]),nano/etc/init/etools.conf,module.exports=db_secret,myApp.controller("EfridgeController",["$scope","$rootScope","$http","$log","$cookies",function(a,b,c,d,e){a.meals=[],a.addMeal=function(){a.meals.push({food_name:a.checkModel.value1.food_name,total_calories:a.checkModel.value1.total_calories,fat_grams:a.checkModel.value1.fat_grams})},a.daily=[],a.addDaily=function(){a.daily.push({cal:a.daily.cal,fat:a.daily.fat,carb:a.daily.carb,protein:a.daily.protein}),console.log(JSON.stringify(a.daily))},a.IsHiddenForm=!0,a.ShowHideForm=function(){a.IsHiddenForm=!a.IsHiddenForm,a.IsHidden=!0,a.IsHiddenMeal=!0},a.IsHiddenMeal=!0,a.ShowHideMeal=function(){a.IsHiddenMeal=!a.IsHiddenMeal,a.IsHidden=!0,a.IsHiddenForm=!0},a.IsHidden=!0,a.ShowHide=function(){a.IsHidden=!a.IsHidden,a.IsHiddenForm=!0,a.IsHiddenMeal=!0},c.get("efridge")&&c({method:"GET",url:"http://localhost:3000/efridge"}).then(function(b){a.foodItems=b.data,a.checkModel={value1:!0,value2:!0}}),a.macros=[{name:"fat",amount:20},{name:"carb",amount:5},{name:"protein",amount:12},{name:"total",amount:19}],a.addMacro=function(){a.macros.push({name:a.newMacro.name,amount:a.newMacro.amount})}}]),myApp.controller("HomeController",["$scope","$rootScope","$http","$log","$cookies",function(a,b,c,d,e){a.IsHiddenDaily=!0,a.ShowHideDaily=function(){a.IsHiddenDaily=!a.IsHiddenDaily}}]),myApp.controller("EgymController",["$scope","$rootScope","$http","$log","$cookies",function(a,b,c,d,e){a.IsHidden=!0,a.ShowHide=function(){a.IsHidden=!a.IsHidden}}]),myApp.controller("AuthController",["$scope","$rootScope","$http","$log","$cookies",function(a,b,c,d,e){c.post("/login")&&c({method:"POST",url:"http://localhost:3000/login",data:{email:a.email,password:a.password}}).then(function(b){a.apiTest=JSON.stringify(b.data)},function(a){})}]),nano/etc/init/etools.conf,module.exports=db_secret,myApp.controller("EfridgeController",["$scope","$rootScope","$http","$log","$cookies",function(a,b,c,d,e){a.meals=[],a.addMeal=function(){a.meals.push({food_name:a.checkModel.value1.food_name,total_calories:a.checkModel.value1.total_calories,fat_grams:a.checkModel.value1.fat_grams})},a.daily=[],a.addDaily=function(){a.daily.push({cal:a.daily.cal,fat:a.daily.fat,carb:a.daily.carb,protein:a.daily.protein}),console.log(JSON.stringify(a.daily))},a.IsHiddenForm=!0,a.ShowHideForm=function(){a.IsHiddenForm=!a.IsHiddenForm,a.IsHidden=!0,a.IsHiddenMeal=!0},a.IsHiddenMeal=!0,a.ShowHideMeal=function(){a.IsHiddenMeal=!a.IsHiddenMeal,a.IsHidden=!0,a.IsHiddenForm=!0},a.IsHidden=!0,a.ShowHide=function(){a.IsHidden=!a.IsHidden,a.IsHiddenForm=!0,a.IsHiddenMeal=!0},c.get("efridge")&&c({method:"GET",url:"http://localhost:3000/efridge"}).then(function(b){a.foodItems=b.data,a.checkModel={value1:!0,value2:!0}}),a.macros=[{name:"fat",amount:20},{name:"carb",amount:5},{name:"protein",amount:12},{name:"total",amount:19}],a.addMacro=function(){a.macros.push({name:a.newMacro.name,amount:a.newMacro.amount})}}]),myApp.controller("HomeController",["$scope","$rootScope","$http","$log","$cookies",function(a,b,c,d,e){a.IsHiddenDaily=!0,a.ShowHideDaily=function(){a.IsHiddenDaily=!a.IsHiddenDaily}}]),myApp.controller("EgymController",["$scope","$rootScope","$http","$log","$cookies",function(a,b,c,d,e){a.IsHidden=!0,a.ShowHide=function(){a.IsHidden=!a.IsHidden}}]),myApp.controller("AuthController",["$scope","$rootScope","$http","$log","$cookies",function(a,b,c,d,e){c.post("/login")&&c({method:"POST",url:"http://localhost:3000/login",data:{email:a.email,password:a.password}}).then(function(b){a.apiTest=JSON.stringify(b.data)},function(a){})}]),module.exports=db_secret;var mysql=require("mysql"),db_secret=require("./db_secret.js"),db=new db_secret,pool=mysql.createPool({connectionLimit:100,host:"localhost",user:db.user,password:db.password,database:"freetools"});module.exports=pool;var myApp=angular.module("myApp",["ui.router","ui.bootstrap","ngCookies"]);myApp.config(["$urlRouterProvider","$stateProvider","$locationProvider","$httpProvider",function(a,b,c,d){d.defaults.withCredentials=!0,b.state("home",{url:"/",views:{nav:{templateUrl:"templates/partials/nav.html",controller:"AuthController"},btnpanel:{templateUrl:"templates/partials/daily.html",controller:"HomeController"}}}).state("login",{url:"/login",views:{nav:{templateUrl:"templates/view2.html",controller:"AuthController"},btnpanel:{templateUrl:"templates/view1.html"},form:{templateUrl:"templates/partials/register.html",controller:"EgymController"}}}).state("egym",{url:"/egym",views:{nav:{templateUrl:"templates/partials/nav.html",controller:"AuthController"},btnpanel:{templateUrl:"templates/partials/btnGym.html",controller:"HomeController"},form:{templateUrl:"templates/partials/exercise.html",controller:"EgymController"}}}).state("efridge",{url:"/efridge",views:{nav:{templateUrl:"templates/partials/nav.html",controller:"AuthController"},btnpanel:{templateUrl:"templates/partials/btnFridge.html",controller:"HomeController"},form:{templateUrl:"templates/partials/foodtable.html",controller:"EfridgeController"}}}).state("account",{url:"/account",views:{nav:{templateUrl:"templates/partials/nav.html",controller:"AuthController"},btnpanel:{templateUrl:"templates/partials/btnGym.html",controller:"HomeController"},form:{templateUrl:"templates/partials/foodform.html",controller:"AuthController"}}}),c.html5Mode(!0),d.interceptors.push(function(a,b){return{response:function(a){return a},responseError:function(c){return 401===c.status&&b.url("/login"),a.reject(c)}}})}]);var mysql=require("mysql"),express=require("express"),path=require("path"),favicon=require("serve-favicon"),logger=require("morgan"),bodyParser=require("body-parser"),pool=require("./public/javascripts/require.js"),easyPbkdf2=require("easy-pbkdf2")();const crypto=require("crypto");var secretKey=require("./secret"),sessionKey=require("./secret"),userFactory=require("./userFactory"),cookieParser=require("cookie-parser"),expressSession=require("express-session"),passport=require("passport"),LocalStrategy=require("passport-local").Strategy,routes=require("./routes/index"),app=express(),hour=36e5;app.set("views",path.join(__dirname,"public/templates")),app.set("view engine","ejs"),app.use(logger("dev")),app.use(bodyParser.json()),app.use(bodyParser.urlencoded({extended:!1})),app.use(cookieParser()),app.use(expressSession({secret:process.env.SESSION_SECRET||sessionKey,resave:!1,saveUninitialized:!1})),app.set(secretKey,secretKey),app.use(require("less-middleware")(path.join(__dirname,"public"))),app.use(express["static"](path.join(__dirname,"public"))),app.use(passport.initialize()),app.use(passport.session()),app.use(function(a,b,c){b.setHeader("Access-Control-Allow-Origin","http://localhost:3000"),b.setHeader("Access-Control-Allow-Methods","GET, POST"),b.setHeader("Access-Control-Allow-Headers","X-Requested-With,content-type, Authorization"),b.setHeader("Access-Control-Allow-Credentials","true"),c()}),passport.use("local-login",new LocalStrategy({usernameField:"email",passwordField:"password",passReqToCallback:!0},function(a,b,c,d){pool.query("SELECT * FROM `users` WHERE `email` = '"+b+"'",function(a,b){if(a)return d(a);if(!b.length)return d(null,!1),console.log("no error, and no user either!");if(!a){var e={salt:b[0].user_salt};const f=crypto.pbkdf2Sync(c,e.salt,1e5,512,"sha512");var g=f.toString("hex")}return b[0].password!=g?(d(null,!1),console.log("something is wrong with the buffers!")):b[0].user_salt!=e.salt?(d(null,!1),console.log("saltless")):(d(null,b[0]),console.log("You are successfully logged in!"))})})),passport.serializeUser(function(a,b){b(null,a.user_id)}),passport.deserializeUser(function(a,b){pool.query("select * from users where user_id = "+a,function(a,c){b(a,c[0])})});var ensureAuth=function(a,b,c){a.isAuthenticated()?c():b.sendStatus(401)};app.post("/login",passport.authenticate("local-login",{session:!0,successRedirect:"/",failureRedirect:"/login"}),function(a,b){b.send({user:a.user})}),app.get("/loggedin",function(a,b){b.send(a.isAuthenticated())?a.user:"0"}),app.get("/account",ensureAuth,function(a,b){b.json(a.user)}),app.use("/",routes),app.use(function(a,b,c){var d=new Error("Not Found");d.status=404,c(d)}),"development"===app.get("env")&&app.use(function(a,b,c,d){c.status(a.status||500),c.render("error",{message:a.message,error:a})}),process.on("uncaughtException",function(a){console.log(a)}),module.exports=app;var express=require("express"),router=express.Router(),mysql=require("mysql"),pool=require("../public/javascripts/require"),expressSession=require("express-session"),passport=require("passport"),passportLocal=require("passport-local"),easyPbkdf2=require("easy-pbkdf2")(),jwt=require("jsonwebtoken"),secretKey=require("../secret");const crypto=require("crypto");router.get("/fridgeTest",function(a,b){pool.getConnection(function(a,c){a?console.log(a):c.query("select email from  users",function(a,c){a?console.log(a):b.json(c)})})}),router.get("/apiTest",function(a,b){b.json([{value:"efridge"},{value:"efridge"},{value:"efridge"},{value:"efridge"}])}),router.get("/efridge",function(a,b){pool.getConnection(function(a,c){a?console.log(a):(console.log("Well efridge is connected!"),c.query("select * from  efridge",function(a,c){b.json(c)}))})}),router.get("/logout",function(a,b){a.logout(),b.redirect("/login")}),router.get("*",function(a,b){b.render("index")}),router.post("/foodform",function(a,b){pool.getConnection(function(c,d){if(c)return void console.error(c);console.log("Successful Connection!");var e={food_name:a.body.food_name,brand:a.body.brand,serving_size:a.body.serving_size,total_calories:a.body.total_calories,fat_grams:a.body.fat_grams,carbohydrate_grams:a.body.carbohydrate_grams,protein_grams:a.body.protein_grams,total_grams:a.body.total_grams,user_id:a.user.user_id};d.query("insert into efridge set ?",e,function(a,c){a?console.error():b.redirect("/efridge")})})}),router.post("/register",function(a,b,c){var d=a.body.passWord,e=easyPbkdf2.generateSalt();const f=crypto.pbkdf2Sync(d,e,1e5,512,"sha512");var g=f.toString("hex"),h={email:a.body.userEmail,firstname:a.body.firstName,lastname:a.body.lastName,username:a.body.userName,password:g,user_salt:e,token:jwt.sign({username:this.username,email:this.email},secretKey)};connection.query("insert into users set ?",h,function(a,c){a?console.log("Did not work"):b.render("index",console.log("It worked!"))})}),module.exports=router;var mysql=require("mysql"),db_secret=require("./db_secret.js"),db=new db_secret,pool=mysql.createPool({connectionLimit:100,host:"localhost",user:db.user,password:db.password,database:"freetools"});module.exports=pool;var myApp=angular.module("myApp",["ui.router","ui.bootstrap","ngCookies"]);myApp.config(["$urlRouterProvider","$stateProvider","$locationProvider","$httpProvider",function(a,b,c,d){d.defaults.withCredentials=!0,b.state("home",{url:"/",views:{nav:{templateUrl:"templates/partials/nav.html",controller:"AuthController"},btnpanel:{templateUrl:"templates/partials/daily.html",controller:"HomeController"}}}).state("login",{url:"/login",views:{nav:{templateUrl:"templates/view2.html",controller:"AuthController"},btnpanel:{templateUrl:"templates/view1.html"},form:{templateUrl:"templates/partials/register.html",controller:"EgymController"}}}).state("egym",{url:"/egym",views:{nav:{templateUrl:"templates/partials/nav.html",controller:"AuthController"},btnpanel:{templateUrl:"templates/partials/btnGym.html",controller:"HomeController"},form:{templateUrl:"templates/partials/exercise.html",controller:"EgymController"}}}).state("efridge",{url:"/efridge",views:{nav:{templateUrl:"templates/partials/nav.html",controller:"AuthController"},btnpanel:{templateUrl:"templates/partials/btnFridge.html",controller:"HomeController"},form:{templateUrl:"templates/partials/foodtable.html",controller:"EfridgeController"}}}).state("account",{url:"/account",views:{nav:{templateUrl:"templates/partials/nav.html",controller:"AuthController"},btnpanel:{templateUrl:"templates/partials/btnGym.html",controller:"HomeController"},form:{templateUrl:"templates/partials/foodform.html",controller:"AuthController"}}}),c.html5Mode(!0),d.interceptors.push(function(a,b){return{response:function(a){return a},responseError:function(c){return 401===c.status&&b.url("/login"),a.reject(c)}}})}]);var mysql=require("mysql"),express=require("express"),path=require("path"),favicon=require("serve-favicon"),logger=require("morgan"),bodyParser=require("body-parser"),pool=require("./public/javascripts/require.js"),easyPbkdf2=require("easy-pbkdf2")();const crypto=require("crypto");var secretKey=require("./secret"),sessionKey=require("./secret"),userFactory=require("./userFactory"),cookieParser=require("cookie-parser"),expressSession=require("express-session"),passport=require("passport"),LocalStrategy=require("passport-local").Strategy,routes=require("./routes/index"),app=express(),hour=36e5;app.set("views",path.join(__dirname,"public/templates")),app.set("view engine","ejs"),app.use(logger("dev")),app.use(bodyParser.json()),app.use(bodyParser.urlencoded({extended:!1})),app.use(cookieParser()),app.use(expressSession({secret:process.env.SESSION_SECRET||sessionKey,resave:!1,saveUninitialized:!1})),app.set(secretKey,secretKey),app.use(require("less-middleware")(path.join(__dirname,"public"))),app.use(express["static"](path.join(__dirname,"public"))),app.use(passport.initialize()),app.use(passport.session()),app.use(function(a,b,c){b.setHeader("Access-Control-Allow-Origin","http://localhost:3000"),b.setHeader("Access-Control-Allow-Methods","GET, POST"),b.setHeader("Access-Control-Allow-Headers","X-Requested-With,content-type, Authorization"),b.setHeader("Access-Control-Allow-Credentials","true"),c()}),passport.use("local-login",new LocalStrategy({usernameField:"email",passwordField:"password",passReqToCallback:!0},function(a,b,c,d){pool.query("SELECT * FROM `users` WHERE `email` = '"+b+"'",function(a,b){if(a)return d(a);if(!b.length)return d(null,!1),console.log("no error, and no user either!");if(!a){var e={salt:b[0].user_salt};const f=crypto.pbkdf2Sync(c,e.salt,1e5,512,"sha512");var g=f.toString("hex")}return b[0].password!=g?(d(null,!1),console.log("something is wrong with the buffers!")):b[0].user_salt!=e.salt?(d(null,!1),console.log("saltless")):(d(null,b[0]),console.log("You are successfully logged in!"))})})),passport.serializeUser(function(a,b){b(null,a.user_id)}),passport.deserializeUser(function(a,b){pool.query("select * from users where user_id = "+a,function(a,c){b(a,c[0])})});var ensureAuth=function(a,b,c){a.isAuthenticated()?c():b.sendStatus(401)};app.post("/login",passport.authenticate("local-login",{session:!0,successRedirect:"/",failureRedirect:"/login"}),function(a,b){b.send({user:a.user})}),app.get("/loggedin",function(a,b){b.send(a.isAuthenticated())?a.user:"0"}),app.get("/account",ensureAuth,function(a,b){b.json(a.user)}),app.use("/",routes),app.use(function(a,b,c){var d=new Error("Not Found");d.status=404,c(d)}),"development"===app.get("env")&&app.use(function(a,b,c,d){c.status(a.status||500),c.render("error",{message:a.message,error:a})}),process.on("uncaughtException",function(a){console.log(a)}),module.exports=app;var express=require("express"),router=express.Router(),mysql=require("mysql"),pool=require("../public/javascripts/require"),expressSession=require("express-session"),passport=require("passport"),passportLocal=require("passport-local"),easyPbkdf2=require("easy-pbkdf2")(),jwt=require("jsonwebtoken"),secretKey=require("../secret");const crypto=require("crypto");router.get("/fridgeTest",function(a,b){pool.getConnection(function(a,c){a?console.log(a):c.query("select email from  users",function(a,c){a?console.log(a):b.json(c)})})}),router.get("/apiTest",function(a,b){b.json([{value:"efridge"},{value:"efridge"},{value:"efridge"},{value:"efridge"}])}),router.get("/efridge",function(a,b){pool.getConnection(function(a,c){a?console.log(a):(console.log("Well efridge is connected!"),c.query("select * from  efridge",function(a,c){b.json(c)}))})}),router.get("/logout",function(a,b){a.logout(),b.redirect("/login")}),router.get("*",function(a,b){b.render("index")}),router.post("/foodform",function(a,b){pool.getConnection(function(c,d){if(c)return void console.error(c);console.log("Successful Connection!");var e={food_name:a.body.food_name,brand:a.body.brand,serving_size:a.body.serving_size,total_calories:a.body.total_calories,fat_grams:a.body.fat_grams,carbohydrate_grams:a.body.carbohydrate_grams,protein_grams:a.body.protein_grams,total_grams:a.body.total_grams,user_id:a.user.user_id};d.query("insert into efridge set ?",e,function(a,c){a?console.error():b.redirect("/efridge")})})}),router.post("/register",function(a,b,c){var d=a.body.passWord,e=easyPbkdf2.generateSalt();const f=crypto.pbkdf2Sync(d,e,1e5,512,"sha512");var g=f.toString("hex"),h={email:a.body.userEmail,firstname:a.body.firstName,lastname:a.body.lastName,username:a.body.userName,password:g,user_salt:e,token:jwt.sign({username:this.username,email:this.email},secretKey)};connection.query("insert into users set ?",h,function(a,c){a?console.log("Did not work"):b.render("index",console.log("It worked!"))})}),module.exports=router;var mysql=require("mysql"),db_secret=require("./db_secret.js"),db=new db_secret,pool=mysql.createPool({connectionLimit:100,host:"localhost",user:db.user,password:db.password,database:"freetools"});module.exports=pool;var myApp=angular.module("myApp",["ui.router","ui.bootstrap","ngCookies"]);myApp.config(["$urlRouterProvider","$stateProvider","$locationProvider","$httpProvider",function(a,b,c,d){d.defaults.withCredentials=!0,b.state("home",{url:"/",views:{nav:{templateUrl:"templates/partials/nav.html",controller:"AuthController"},btnpanel:{templateUrl:"templates/partials/daily.html",controller:"HomeController"}}}).state("login",{url:"/login",views:{nav:{templateUrl:"templates/view2.html",controller:"AuthController"},btnpanel:{templateUrl:"templates/view1.html"},form:{templateUrl:"templates/partials/register.html",controller:"EgymController"}}}).state("egym",{url:"/egym",views:{nav:{templateUrl:"templates/partials/nav.html",controller:"AuthController"},btnpanel:{templateUrl:"templates/partials/btnGym.html",controller:"HomeController"},form:{templateUrl:"templates/partials/exercise.html",controller:"EgymController"}}}).state("efridge",{url:"/efridge",views:{nav:{templateUrl:"templates/partials/nav.html",controller:"AuthController"},btnpanel:{templateUrl:"templates/partials/btnFridge.html",controller:"HomeController"},form:{templateUrl:"templates/partials/foodtable.html",controller:"EfridgeController"}}}).state("account",{url:"/account",views:{nav:{templateUrl:"templates/partials/nav.html",controller:"AuthController"},btnpanel:{templateUrl:"templates/partials/btnGym.html",controller:"HomeController"},form:{templateUrl:"templates/partials/foodform.html",controller:"AuthController"}}}),c.html5Mode(!0),d.interceptors.push(function(a,b){return{response:function(a){return a},responseError:function(c){return 401===c.status&&b.url("/login"),a.reject(c)}}})}]);var mysql=require("mysql"),express=require("express"),path=require("path"),favicon=require("serve-favicon"),logger=require("morgan"),bodyParser=require("body-parser"),pool=require("./public/javascripts/require.js"),easyPbkdf2=require("easy-pbkdf2")();const crypto=require("crypto");var secretKey=require("./secret"),sessionKey=require("./secret"),userFactory=require("./userFactory"),cookieParser=require("cookie-parser"),expressSession=require("express-session"),passport=require("passport"),LocalStrategy=require("passport-local").Strategy,routes=require("./routes/index"),app=express(),hour=36e5;app.set("views",path.join(__dirname,"public/templates")),app.set("view engine","ejs"),app.use(logger("dev")),app.use(bodyParser.json()),app.use(bodyParser.urlencoded({extended:!1})),app.use(cookieParser()),app.use(expressSession({secret:process.env.SESSION_SECRET||sessionKey,resave:!1,saveUninitialized:!1})),app.set(secretKey,secretKey),app.use(require("less-middleware")(path.join(__dirname,"public"))),app.use(express["static"](path.join(__dirname,"public"))),app.use(passport.initialize()),app.use(passport.session()),app.use(function(a,b,c){b.setHeader("Access-Control-Allow-Origin","http://localhost:3000"),b.setHeader("Access-Control-Allow-Methods","GET, POST"),b.setHeader("Access-Control-Allow-Headers","X-Requested-With,content-type, Authorization"),b.setHeader("Access-Control-Allow-Credentials","true"),c()}),passport.use("local-login",new LocalStrategy({usernameField:"email",passwordField:"password",passReqToCallback:!0},function(a,b,c,d){pool.query("SELECT * FROM `users` WHERE `email` = '"+b+"'",function(a,b){if(a)return d(a);if(!b.length)return d(null,!1),console.log("no error, and no user either!");if(!a){var e={salt:b[0].user_salt};const f=crypto.pbkdf2Sync(c,e.salt,1e5,512,"sha512");var g=f.toString("hex")}return b[0].password!=g?(d(null,!1),console.log("something is wrong with the buffers!")):b[0].user_salt!=e.salt?(d(null,!1),console.log("saltless")):(d(null,b[0]),console.log("You are successfully logged in!"))})})),passport.serializeUser(function(a,b){b(null,a.user_id)}),passport.deserializeUser(function(a,b){pool.query("select * from users where user_id = "+a,function(a,c){b(a,c[0])})});var ensureAuth=function(a,b,c){a.isAuthenticated()?c():b.sendStatus(401)};app.post("/login",passport.authenticate("local-login",{session:!0,successRedirect:"/",failureRedirect:"/login"}),function(a,b){b.send({user:a.user})}),app.get("/loggedin",function(a,b){b.send(a.isAuthenticated())?a.user:"0"}),app.get("/account",ensureAuth,function(a,b){b.json(a.user)}),app.use("/",routes),app.use(function(a,b,c){var d=new Error("Not Found");d.status=404,c(d)}),"development"===app.get("env")&&app.use(function(a,b,c,d){c.status(a.status||500),c.render("error",{message:a.message,error:a})}),process.on("uncaughtException",function(a){console.log(a)}),module.exports=app;var express=require("express"),router=express.Router(),mysql=require("mysql"),pool=require("../public/javascripts/require"),expressSession=require("express-session"),passport=require("passport"),passportLocal=require("passport-local"),easyPbkdf2=require("easy-pbkdf2")(),jwt=require("jsonwebtoken"),secretKey=require("../secret");const crypto=require("crypto");router.get("/fridgeTest",function(a,b){pool.getConnection(function(a,c){a?console.log(a):c.query("select email from  users",function(a,c){a?console.log(a):b.json(c)})})}),router.get("/apiTest",function(a,b){b.json([{value:"efridge"},{value:"efridge"},{value:"efridge"},{value:"efridge"}])}),router.get("/efridge",function(a,b){pool.getConnection(function(a,c){a?console.log(a):(console.log("Well efridge is connected!"),c.query("select * from  efridge",function(a,c){b.json(c)}))})}),router.get("/logout",function(a,b){a.logout(),b.redirect("/login")}),router.get("*",function(a,b){b.render("index")}),router.post("/foodform",function(a,b){pool.getConnection(function(c,d){if(c)return void console.error(c);console.log("Successful Connection!");var e={food_name:a.body.food_name,brand:a.body.brand,serving_size:a.body.serving_size,total_calories:a.body.total_calories,fat_grams:a.body.fat_grams,carbohydrate_grams:a.body.carbohydrate_grams,protein_grams:a.body.protein_grams,total_grams:a.body.total_grams,user_id:a.user.user_id};d.query("insert into efridge set ?",e,function(a,c){a?console.error():b.redirect("/efridge")})})}),router.post("/register",function(a,b,c){var d=a.body.passWord,e=easyPbkdf2.generateSalt();const f=crypto.pbkdf2Sync(d,e,1e5,512,"sha512");var g=f.toString("hex"),h={email:a.body.userEmail,firstname:a.body.firstName,lastname:a.body.lastName,username:a.body.userName,password:g,user_salt:e,token:jwt.sign({username:this.username,email:this.email},secretKey)};connection.query("insert into users set ?",h,function(a,c){a?console.log("Did not work"):b.render("index",console.log("It worked!"))})}),module.exports=router;
var mysql = require('mysql');
var db_secret = require('./db_secret.js');
//var connection = mysql.createConnection({

var db = new db_secret();

var pool = mysql.createPool({
  connectionLimit : 100,	

  host            : 'localhost',
  user            : db.user,
  password        : db.password,
  database		  : 'freetools'
});

//pool.query('USE freetools'); 
//console.log(pool);


module.exports = pool;

// myApp.factory('Auth', function($http, $q, AuthToken) {
// 	var authFactory = {};
// 	authfactory.login = function(username, password) {

// 		return $http.post('/login', {
// 			email: email,
// 			password: password
// 		})
// 		.success(function(data) {
// 			AuthToken.setToken(user.token);
// 			return data;
// 		})
// 	}

// 	authFactory.logout = function() {
// 		AuthToken.setToken();
// 	}

// 	authFactory.isLoggedIn = function() {
// 		if(AuthToken.getToken())
// 			return true;
// 		else
// 			return false;
// 	}

// 	authFactory.getUser = function() {
// 		if(AuthToken.getToken())
// 			return $http.get('/me');
// 		else
// 			return $q.reject({ message: "User has no token"});
// 	}
// });

// myApp.factory('AuthToken', function($window) {
// 	var authTokenFactory = {};

// 	authTokenFactory.getToken = function() {
// 		return $window.localStorage.getItem('token');
// 	}
// 	authTokenFactory.setToken = function(token) {
// 		if(token)
// 			$window.localStorage.setItem('token', token);
// 		else
// 			$window.localStorage.removeItem('token');
// 	}

// })


 var myApp = angular.module('myApp', ['ui.router', 'ui.bootstrap', 'ngCookies'])

myApp.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', '$httpProvider', function($urlRouterProvider, $stateProvider, $locationProvider, $httpProvider) {
	 //$urlRouterProvider.otherwise('/login');  

    $httpProvider.defaults.withCredentials = true;



	$stateProvider
    .state('home', {
    url: '/',
    views: {
      'nav': {
        templateUrl: 'templates/partials/nav.html',
        controller: 'AuthController'
      },
      'btnpanel': {
        templateUrl: 'templates/partials/daily.html',
        controller: 'HomeController'
      }//,      
//       'form': {
//         templateUrl: 'templates/loggedin.html',
//         controller: 'MainController',
//         resolve: {
//           loggedin: 
//           //promise
// function($q, $timeout, $http, $location, $rootScope) {
//  //initialize a new promise
//  var deferred = $q.defer();

//  //Make an AJAX call to check if the user if logged in
//  $http.get('/loggedin').success(function(user) {
//    //Authenticated
//    if (user !== '0')
//      deferred.resolve();

//    //Not Authenticated
//    else {
//      $rootScope.message = 'You need to log in.';
//      deferred.reject();
//      $location.url('/login');
//    }
//  });
//   //console.log(deferred.promise);
//  return deferred.promise;

// }
//         }
 //       }
      }  
  })

	.state('login', {
		url: '/login',	
    views: {
      'nav': {
        templateUrl: 'templates/view2.html',
        controller: 'AuthController'
      },
      'btnpanel': {
        templateUrl: 'templates/view1.html'
      },      
      'form': {
        templateUrl: 'templates/partials/register.html',
        controller: 'EgymController'
   }

	}})


		.state('egym', {
		url: '/egym',	
    views: {
      'nav': {
        templateUrl: 'templates/partials/nav.html',
        controller: 'AuthController'
      },
      'btnpanel': {
        templateUrl: 'templates/partials/btnGym.html',
        controller: 'HomeController'
      },      
      'form': {
        templateUrl: 'templates/partials/exercise.html',
        controller: 'EgymController'
      }
	}

	})

		.state('efridge', {
		url: '/efridge',	
    views: {
      'nav': {
        templateUrl: 'templates/partials/nav.html',
         controller: 'AuthController'
      },
      'btnpanel': {
        templateUrl: 'templates/partials/btnFridge.html',
         controller: 'HomeController'
      },             
      'form': {
        templateUrl: 'templates/partials/foodtable.html',
         controller: 'EfridgeController'
      }
	}

	})


      .state('account', {
    url: '/account',  
    views: {
      'nav': {
        templateUrl: 'templates/partials/nav.html',
        controller: 'AuthController'
      },
      'btnpanel': {
        templateUrl: 'templates/partials/btnGym.html',
        controller: 'HomeController'
      },      
      'form': {
        templateUrl: 'templates/partials/foodform.html',
        controller: 'AuthController'
      }
  }

  })  		

	        // use the HTML5 History API
        $locationProvider.html5Mode(true);

   $httpProvider.interceptors.push(function($q, $location) {
         return {
       response: function(response) {
         //console.log('success! And here is your response object: '+JSON.stringify(response.data));
         return response;
       },
          responseError: function(response) {
          if (response.status === 401) 
         $location.url('/login');
          return $q.reject(response);
        }
      };
 });






 }]);


// angular.module('starter')
 
// .constant('AUTH_EVENTS', {
//   notAuthenticated: 'auth-not-authenticated'
// })
 
// .constant('API_ENDPOINT', {
//   url: 'http://127.0.0.1:3000/api'
//   //  For a simulator use: url: 'http://127.0.0.1:8080/api'
// });
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
var userFactory = require('./userFactory');
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

//header config 


app.use(function(req, res, next) {
       res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
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
       res.send({user : req.user});
      });


//route to test if the user is logged in or not
app.get('/loggedin', function(req, res) {
 res.send(req.isAuthenticated()) ? req.user : '0';
});

app.get('/account', ensureAuth, function(req, res){
      res.json(req.user);

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