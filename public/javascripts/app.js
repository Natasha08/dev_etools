
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
