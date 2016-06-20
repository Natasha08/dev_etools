(function(){

"use strict";


var authServiceVar = function($http) {


	//$http.get('http://localhost:3000/efridge').then(successCallback, errorCallback);
	 var logId = {};

 	 logId.getAll = function() {
	
	   	return	$http({

				  method:'GET',
				  url:'http://localhost:3000/account'})
				  //data:{email:$scope.email, password:$scope.password}})
				 .then(function(response) {
        		var newResponse = response.data;
      			var username = JSON.stringify(newResponse.username);
      			console.log('$http username'+username);
      			return {
      			username: username
      			}	
   				 });
	
	}
    return logId;           // <--------- do not go on a new line after return
 

 	}



//login service
angular
  .module('myApp')
   .service('authService',['$http', authServiceVar]) 


function login() {
		$http({

				method:'POST',
				//url:'https://mycolofitness.com/login',
				url:'http://localhost:3000/login',
				data:{email:$scope.email, password:$scope.password}})
				.then(function (response) {
					//console.log(response);
					$scope.apiTest = JSON.stringify(response.data);
					console.log($scope.apiTest);

	 },
				function (data) {
					//console.log(response);
					//console.log(data);

	 
				})
				

}

})();