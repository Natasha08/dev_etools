
// var app = angular
// .module('app', ['ui.router','ui.bootstrap'])
 var myApp = angular.module('myApp', ['ui.router', 'ui.bootstrap',])

myApp.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider) {
	 $urlRouterProvider.otherwise('/login');  

	$stateProvider
	.state('login', {
		url: '/login',	
    views: {
      'nav': {
        templateUrl: 'templates/view2.html',
        controller: 'MainController'
      },
      'btnpanel': {
        templateUrl: 'templates/partials/btnReg.html',
        controller: 'MainController'
      },      
      'form': {
        templateUrl: 'templates/partials/register.html',
        controller: 'MainController'
      }
	}

	})
	.state('home', {
		url: '/',
		views: {
			'nav': {
				templateUrl: 'templates/partials/nav.html',
				controller: 'MainController'
			},
			'form': {
				templateUrl: 'templates/loggedin.html',
				controller: 'MainController'

			}
		}
	})
		.state('egym', {
		url: '/egym',	
    views: {
      'nav': {
        templateUrl: 'templates/partials/nav.html',
        controller: 'MainController'
      },
      'btnpanel': {
        templateUrl: 'templates/partials/btnGym.html',
        controller: 'MainController'
      },      
      'form': {
        templateUrl: 'templates/partials/exercise.html',
        controller: 'MainController'
      }
	}

	})

	        // use the HTML5 History API
        $locationProvider.html5Mode(true);
// 	On the Angular side, you can set the user data to rootscope from the $http response,

// $rootScope.session = {}
// $rootScope.session.user = res.user;

// or you can create a route to get the logged in user data

//    app.get('/account', function(req, res){
//      if (req.isAuthenticated()) { 
//        res.send({user : req.user}); 
//      }else{
//        res.redirect('/login');
//      }
//    });

	// .state('home', {
	// 	url: '/home',
	// 	templateUrl: 'templates/view1.html',
	// 	controller: 'SimpleController'
		 
	// });


myApp.controller('SimpleController', ['$scope', function($scope) {

$scope.macros = [

	{name: 'fat', amount: 20}, 
	{name: 'carb', amount: 5}, 
	{name: 'protein', amount: 12}, 
	{name: 'total', amount: 19}
	];

$scope.addMacro = function() {
	$scope.macros.push(
	{name: $scope.newMacro.name},
	{amount: $scope.newMacro.amount}
	)};
}]);

 }]);
//     //This will hide the DIV by default.
//     $scope.IsHidden = true;
//     $scope.ShowHide = function () {
//         //If DIV is hidden it will be visible and vice versa.
//         $scope.IsHidden = $scope.IsHidden ? false : true;
//     }

