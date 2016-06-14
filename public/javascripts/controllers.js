
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

		$http({

				method:'GET',
				url:'https://mycolofitness.com/efridge'})
				data:{email:$scope.email, password:$scope.password}
				.then(function (response) {
					//console.log(response);
					//$scope.userTest = response;
					$scope.foodItems = response.data;
					//console.log($scope.foodItems);
						$scope.checkModel = {
    					value1 : true,
    				}
  
   						
});


	function foodForm()  {

		$http({

				method:'POST',
				url:'https://mycolofitness.com/foodform'})
				//data:{email:$scope.email, password:$scope.password}
				.then(function (response) {
					//console.log(response);
					//$scope.userTest = response;
					$scope.UserF = response.data;
					//$scope.UserFIdFood = $scope.User.user_id;

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

$scope.IsHidden = true;
    $scope.ShowHide = function () {
        //If DIV is hidden it will be visible and vice versa.
        $scope.IsHidden = !$scope.IsHidden;
    }


function login() {
		$http({

				method:'POST',
				url:'https://mycolofitness.com/login',
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


// study this 

    // var app = angular.module("app", []);
    // app.controller("HttpGetController", function ($scope, $http) {

    //     $scope.SendData = function () {
    //        // use $.param jQuery function to serialize data from JSON 
    //         var data = $.param({
    //             fName: $scope.firstName,
    //             lName: $scope.lastName
    //         });
        
    //         var config = {
    //             headers : {
    //                 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
    //             }
    //         }

    //         $http.post('/ServerRequest/PostDataResponse', data, config)
    //         .success(function (data, status, headers, config) {
    //             $scope.PostDataResponse = data;
    //         })
    //         .error(function (data, status, header, config) {
    //             $scope.ResponseDetails = "Data: " + data +
    //                 "<hr />status: " + status +
    //                 "<hr />headers: " + header +
    //                 "<hr />config: " + config;
    //         });
    //     };

    // });



function registerUser() {
		$http({

				method:'POST',
				url:'https://mycolofitness.com/register',
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
				url:'https://mycolofitness.com/loggedin'})
				//data:{email:$scope.email, password:$scope.password}
				.then(function (user) {
					//console.log(user);
					 //Authenticated
    			  if (user !== '0') {
      			  deferred.resolve();
      			  $scope.authed = 'You are authorized';

    			  //console.log(user);
			     }

				//Not Authenticated
				    else {
				      $scope.message = 'You need to log in.';
				      deferred.reject();
				      $location.url('/login');
				    }
				  });
				  return deferred.promise;
				}


function getAccount() {
		$http({

				method:'GET',
				url:'https://mycolofitness.com/account'})
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

