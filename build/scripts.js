
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