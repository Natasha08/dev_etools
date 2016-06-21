(function(){

"use strict";


angular
  .module('myApp')
  .controller('EfridgeController', ['$scope', '$http', 'efridgeService', 'UserName', function($scope, $http, efridgeService, UserName) {
	  	


  	$scope.init = function() {
  		this.efridgeService = efridgeService;
  		$scope.getAll();
      $scope.IsHidden = true;
      $scope.isDisabled = false;

  	}

$scope.getAll = function() {

  	efridgeService.getAll()
  	.then(function(res) {
  		 $scope.foodItems = res.data;
  		 //console.log($scope.foodItems);
		 $scope.user = {}

  		 }, function(err) {
  		      //console.log('err: '+err);
  	
  	    })
  }


  $scope.uncheckAll = function() {
    $scope.user.foodItems = [];
  };
  $scope.checkAll = function() {
    $scope.user.foodItems = angular.copy($scope.foodItems);
  };



    $scope.disableButton = function() {
        $scope.isDisabled = true;
    }

  		$scope.addMacro = function() {
              $scope.macros = [];

  angular.forEach($scope.user.foodItems, function(value) {
  this.push(value);
}, $scope.macros);

  $scope.IsHidden = false;
  $scope.isDisabled = true;
  //console.log('updated macros: '+JSON.stringify($scope.macros));


     //console.log(key + ': ' + JSON.stringify(value));
}
  		// 		foodName: $scope.user.foodItems

  		// 	})
    //     $scope.IsHidden = false;
  		// 	console.log(JSON.stringify($scope.macros));
  		// }
      $scope.clearMacro = function() {
        $scope.IsHidden = true;
        $scope.macros = [];
        $scope.isDisabled = false;
      }



// $scope.mealCalc = function() {
//       $scope.meal = [];
//   angular.forEach($scope.macros, function(value, key) {

//      console.log(key + ': ' + value);
// });
// }
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

