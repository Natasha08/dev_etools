(function(){

"use strict";

angular
  .module('myApp')
  .controller('EfridgeController', ['$scope', '$rootScope', '$http', '$log', '$cookies' , 'efridgeService', 'foodItems', 'UserName', function($scope, $rootScope, $http, $log, $cookies, efridgeService, foodItems, UserName) {

$scope.UserName = this.UserName;
this.foodItems = foodItems.data;

$scope.foodItems = this.foodItems;
$scope.user = {

	foodItems: ['foodItem']
	} 
//console.log('foodItems stringified: '+JSON.stringify($scope.foodItems));



function logFoodCal() {
	alert('foodCal.Items');
}

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


			//$scope.winYa = $rootScope.testRoot;

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



  					$scope.macros = [],

    				$scope.addMacro = function() {

    					$scope.macros.push(
					{cal: $scope.fMacro.food_name, 
					 fat: $scope.fMacro.fat_grams,
					 carb: $scope.fMacro.carb_grams,
					protein: $scope.fMacro.protein_grams}



    					// $http.post('/efridge', $scope.meals);
    					
    				)}
				//console.log($scope.macros);

	function foodForm()  {

		$http({

				method:'POST',
				//url:'https://mycolofitness.com/foodform'
				url:'http://localhost:3000/foodform'})
				//data:{email:$scope.email, password:$scope.password}
				.then(function (response) {
					//console.log(response);
					//$scope.userTest = response;
					$scope.UserF = response.data;
					//$scope.UserFIdFood = $scope.User.user_id;

					//console.log($scope.userTests.user_id);


});	

		$http({

				method:'POST',
				//url:'https://mycolofitness.com/foodform'
				url:'http://localhost:3000/macroform'})
				//data:{email:$scope.email, password:$scope.password}
				.then(function (response) {
					//console.log(response);
					//$scope.userTest = response;
					$scope.UserB = response.data;
					//$scope.UserFIdFood = $scope.User.user_id;

					//console.log($scope.userTests.user_id);


});	


}


 }])





})();

//ngCookie test
	// $cookies.put("key", "value"); 
	// 	var value = $cookies.get("key");
	// 	console.log(value);

