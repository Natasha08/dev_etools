(function(){

"use strict";

angular
  .module('myApp')

.controller('EgymController', ['$scope', 'egymService', 'workouts', function($scope, egymService, workouts) {
		//client-side ajax call [with interceptor]

var workouts = JSON.stringify(workouts);
console.log('Just workouts: '+workouts);


    $scope.IsHidden = true;
    $scope.ShowHide = function () {
        //If DIV is hidden it will be visible and vice versa.
        $scope.IsHidden = !$scope.IsHidden;
    }

 
					// console.log($scope.daily)
    				 
  }])
   			  					


.controller('HomeController', ['$scope', '$http', function($scope, $http) {

//console.log(this.UserName);
// this.account = account;
// this.UserName = this.account;
// $scope.UserName = this.account;

// console.log('HomeController is getting: '+UserName);
// console.log('this.account:'+this.account);
// console.log('this.UserName:'+this.UserName);
// console.log('$scope.UserName:'+$scope.UserName);

//$scope.UserName = this.UserName;

        $scope.IsHiddenDaily = true;
    	$scope.ShowHideDaily = function () {
        //If DIV is hidden it will be visible and vice versa.
        $scope.IsHiddenDaily = !$scope.IsHiddenDaily;

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
}
    	//$rootScope.testRoot = 'This root works!';

 }])



.controller('AuthController', ['$scope', '$http', 'authService', 'UserName', function($scope, $http, authService, UserName) {
        this.authService = authService;
        this.UserName = UserName;
console.log(this.UserName);



$scope.eLogin = function() {

    authService.eLogin()
    .then(function(res) {
         $scope.loginData = res.data;
         console.log($scope.loginData);
         $scope.user = {}
         console.log($scope.user.username);
         }, function(err) {
              console.log('err: '+err);
    
        })
  }

// function registerUser() {
// 		$http({

// 				method:'POST',
// 				// url:'https://mycolofitness.com/register',
// 				url:'http://localhost:3000/register',
// 				data:{email:$scope.email, password:$scope.password}})
// 				.then(function (response) {
// 					//console.log(response);
// 					$scope.apiTest = JSON.stringify(response.data);
// 					//console.log($scope.apiTest);

// 	 },
// 				function (data) {
// 					//console.log(response);
// 					//console.log(data);

	 
// 				}
// 				)

// }



}])

.controller('NavController', ['$scope', '$http', 'UserName', function($scope, $http, UserName) {

this.UserName = UserName;
$scope.UserName = this.UserName;


	console.log('$scope?:: '+$scope.UserName);
	console.log('constant?: '+this.UserName);

}])



})();