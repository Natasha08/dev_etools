

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

