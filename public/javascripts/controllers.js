
myApp.controller('MainController', 
	['$rootScope', '$scope', '$location', '$localStorage', 'Main', function($rootScope, $scope, $location, $localStorage, Main) {

	$scope.signin = function() {
		var formData = {
			email: $scope.email,
			password: $scope.password
		};

		Main.signin(formData, function(res) {
			if (res.type == false) {
				alert(res.data);
			} else {
				$localStorage.token = res.data.token;
				window.location = "/";
			}
		}, function() {
			$rootScope.error = 'Failed to signin';
		
		})
	};

	$scope.me = function() {
		Main.me(function(res) {
			$scope.myDetails = res;
		}, function() {
			$rootScope.error = 'Failed to fetch details';
		})
	};

	$scope.logout = function() {
		Main.logout(function() {
			window.location = '/'
		}, function() {
			alert('Failed to logout!');
		});
	};
	$scope.token = $localStorage.token;

	$scope.macros = [

		{name: 'fat', amount: 20}, 
		{name: 'carb', amount: 5}, 
		{name: 'protein', amount: 12}, 
		{name: 'total', amount: 19}
	],

	$scope.addMacro = function() {
	$scope.macros.push(
		{name: $scope.newMacro.name},
		{amount: $scope.newMacro.amount}
	)};

    //This will hide the DIV by default.
    $scope.IsHidden = true;
    $scope.ShowHide = function () {
        //If DIV is hidden it will be visible and vice versa.
        $scope.IsHidden = $scope.IsHidden ? false : true;
    }
 }]);





// // script.js
// var app = angular.module('app.SimpleController', [])

// app.controller("SimpleController", ['$scope', function($scope) {

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

//     //This will hide the DIV by default.
//     $scope.IsHidden = true;
//     $scope.ShowHide = function () {
//         //If DIV is hidden it will be visible and vice versa.
//         $scope.IsHidden = $scope.IsHidden ? false : true;
//     }
// }]);

// angular.module('app', ['ui-router', 'ui-bootstrap', 'app'])
// .controller('appCtrl', ['$scope', function($scope) {
//   $scope.templates =
//     [ { head: 'head.html', url: '../templates/head.html'},
//       { header: 'header.html', url: '../templates/header.html'} ];
//   $scope.template = $scope.templates[0];
// }]);


//     // create the module and name it scotchApp
//     var app2 = angular.module('app', ['ui.bootstrap'])

//     // create the controller and inject Angular's $scope
// angular.module('app', ['ui-router', 'ui-bootstrap'])
//    app.controller('appCtrl', function($scope) {

//         // create a message to display in our view
//         $scope.message = 'Everyone come and see how good I look!';
//         $scope.user = {
//         	username: Natasha
//         }
//     });
