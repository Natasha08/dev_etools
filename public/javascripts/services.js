(function(){

"use strict";

var efridgeServiceVar = function($http) {


	//$http.get('http://localhost:3000/efridge').then(successCallback, errorCallback);
	 var efridge = {};

 	 efridge.getAll = function() {
	
	   	return	$http({

				  method:'GET',
				  //url:'https://mycolofitness.com/efridge',
				  url:'http://localhost:3000/efridge'})
	
	}
    return efridge;           // <--------- do not go on a new line after return
 
 }




var egymServiceVar = function($http) {


	//$http.get('http://localhost:3000/efridge').then(successCallback, errorCallback);
	 var egym = {};

 	 egym.getAll = function() {
	
	   	return	$http({

				  method:'GET',
				  //url:'https://mycolofitness.com/egym',
				  url:'http://localhost:3000/egym'})
	
	}
    return egym;           // <--------- do not go on a new line after return
 
 }


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

//egym service
angular
  .module('myApp')
   .service('egymService',['$http', egymServiceVar]) 

//egym service
angular
  .module('myApp')
   .service('efridgeService',['$http', efridgeServiceVar])



var EfridgeController = function($timeout, efridgeService) {
  this.foodItems = foodItems;
};


EfridgeController.resolve = {

foodItems: [
      'efridgeService',
      function(efridgeService) {
        return efridgeService.getAll()
    .then(function(response) {
      var newResponse = response.data;
      return newResponse
    });
  }
]
}










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

	 
				}
				)

}
})();

//data:{email:$scope.email, password:$scope.password}})
// 				  .then(function (response) {

//                //set variables and sessionStorage...works!						
// 				  var foodItems = response.data;
					
//                // Save data to sessionStorage
				
//    			  sessionStorage.setItem('foodItems', JSON.stringify(foodItems));

// })
