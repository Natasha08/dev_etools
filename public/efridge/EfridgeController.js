(function(){

"use strict";


angular
  .module('myApp')
  .controller('EfridgeController', ['$scope', '$http', 'efridgeService', 'UserName', function($scope, $http, efridgeService, UserName) {
	  	


  	$scope.init = function() {
  		this.efridgeService = efridgeService;
  		$scope.getAll();

  	}

$scope.getAll = function() {

  	efridgeService.getAll()
  	.then(function(res) {
  		 $scope.foodItems = res.data;
  		 console.log($scope.foodItems);
		 $scope.user = {}

  		 }, function(err) {
  		      console.log('err: '+err);
  	
  	    })
  }


  $scope.uncheckAll = function() {
    $scope.user.foodItems = [];
  };
  $scope.checkAll = function() {
    $scope.user.foodItems = angular.copy($scope.foodItems);
  };


  		$scope.macros = [];
  		$scope.addMacro = function() {
  			$scope.macros.push({
  				foodName: $scope.user.foodItems
  			})
  			alert(JSON.stringify($scope.macros));
  		}


  	$scope.init();



 }]);

//   					$scope.macros = [],

//     				$scope.addMacro = function() {

//     					$scope.macros.push(
// 					{cal: $scope.fMacro.food_name, 
// 					 fat: $scope.fMacro.fat_grams,
// 					 carb: $scope.fMacro.carb_grams,
// 					protein: $scope.fMacro.protein_grams}



// function logFoodCal() {
// 	alert('foodCal.Items');
// }













//   					$scope.macros = [],

//     				$scope.addMacro = function() {

//     					$scope.macros.push(
// 					{cal: $scope.fMacro.food_name, 
// 					 fat: $scope.fMacro.fat_grams,
// 					 carb: $scope.fMacro.carb_grams,
// 					protein: $scope.fMacro.protein_grams}




//         $scope.IsHidden = true;
//     $scope.ShowHide = function () {
//         //If DIV is hidden it will be visible and vice versa.
//         $scope.IsHidden = !$scope.IsHidden;
//         $scope.IsHiddenForm = true;
//         $scope.IsHiddenMeal = true;
//     }









})();

//ngCookie test
	// $cookies.put("key", "value"); 
	// 	var value = $cookies.get("key");
	// 	console.log(value);

