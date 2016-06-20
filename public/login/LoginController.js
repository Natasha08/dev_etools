(function(){

"use strict";

angular
  .module('myApp')

.controller('LoginController', ['$scope', '$http', '$log', function($scope, $http, $log) {




}])



.controller('RegisterController', ['$scope', '$rootScope', '$http', '$log', '$cookies', function($scope, $rootScope, $http, $log, $cookies) {

			$scope.IsHidden = true;
    		$scope.ShowHide = function () {
        	//If DIV is hidden it will be visible and vice versa.
        	$scope.IsHidden = !$scope.IsHidden;
    		}


	function registerUser() {
		$http({

				method:'POST',
				// url:'https://mycolofitness.com/register',
				url:'http://localhost:3000/register',
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

 }]);


})();