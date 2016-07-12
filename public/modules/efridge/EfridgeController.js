(function(){

"use strict";

angular
  .module('myApp')
	  .controller('EfridgeController', ['$scope', 'efridgeService', 'ErrFactory', function EfridgeController($scope, efridgeService, ErrFactory) {

  	$scope.init = function init() {
  	this.efridgeService = efridgeService;
      // var Err = new ErrFactory();
      var Err = new ErrFactory();
      $scope.Err = Err;
      $scope.IsHidden = true;
      $scope.foodItems = [];
      //$scope.isDisabled = false;
  	}
//console.log(efridgeService);
$scope.getAll = function() {
  $scope.foodItems= [];

  	efridgeService.getAll()
  	.then(function(data) {   
  		 $scope.foodItems = data;
		   $scope.user = {};

    })
    .catch(function(err) {
  		      console.log(Err.fail);
            console.log(err);  
            $scope.errorTest = 'this is an error';	
  	    })
    return $scope.foodItems;
};

  $scope.uncheckAll = function() {
    $scope.user.foodItems = [];
  };
  $scope.checkAll = function() {
    $scope.user.foodItems = angular.copy($scope.foodItems);
  };



//     $scope.disableButton = function() {
//         $scope.isDisabled = true;
//     }

//   		$scope.addMacro = function() {
//               $scope.macros = [];

//   angular.forEach($scope.user.foodItems, function(value) {
//   this.push(value);
// }, $scope.macros);

//   $scope.IsHidden = false;
//   $scope.isDisabled = true;

// }

//       $scope.clearMacro = function() {
//         $scope.IsHidden = true;
//         $scope.macros = [];
//         $scope.isDisabled = false;
//       }



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

