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


})();