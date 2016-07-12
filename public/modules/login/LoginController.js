(function(){

"use strict";


angular
  .module('myApp')
  .controller('LoginController', ['$scope', 'authService', 'ErrFactory', 'userData', function LoginController($scope, authService, ErrFactory, userData) {

    $scope.init = function init() {
    this.authService = authService;
    this.userData = userData;
      var Err = new ErrFactory();
      $scope.IsHidden = true;
      // var User = [];

      //$scope.isDisabled = false;
    }

 //   hardcode userdata
        $scope.email = 'loginemail@email.com';
        $scope.password = 'loginpassword';
//console.log(efridgeService);
        userData.email = $scope.email;
        userData.password = $scope.password;
// userData = {
//         email: $scope.email,
//       password: $scope.password
//}

$scope.getAll = function() {
 // $scope.username= [];

    authService.eLogin()
    .then(function(data) {
       var Err = undefined;   
       $scope.username = data;
       userData.username = data.username;
       
    })
    .catch(function(err) {
            console.log(Err.fail);
            console.log(err);  
            $scope.errorTest = 'this is an error';  
        })
    return $scope.username;
};

    $scope.init();



 }])

  .controller('RegisterController', ['$scope', 'UserName', function RegisterController($scope, UserName) {



    $scope.init = function() {
        $scope.IsHidden = true;
        var tester = UserName;
    };
        		
    	  $scope.ShowHide = function () {
          //If DIV is hidden it will be visible and vice versa.
          $scope.IsHidden = !$scope.IsHidden;
    	  }
    $scope.init();  
 }]);
// 	function registerUser() {
// 		$http({

// 				method:'POST',
// 				 // url:'https://mycolofitness.com/register',
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




})();
