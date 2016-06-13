
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

