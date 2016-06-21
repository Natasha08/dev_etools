(function(){

"use strict";

//efridge service
angular
  .module('myApp')
   .service('efridgeService',['$http', '$q', function($http, $q) {

	var efridgeService = this;
 efridgeService.foodItems = {};

	efridgeService.getAll = function() {
    	var defer = $q.defer();
    	
		$http.get('http://localhost:3000/efridge')
		     .then(function(res) {
   				defer.resolve(res.data);
   				//console.log('service resolved!');
   			}, 
   			function(err) {
   				
   				defer.reject(err);
   				//console.log('Service not resolved: '+err);
   			})
		     return defer.promise;
		 }


   }]);		     


// 	 var efridge = {};

//  	 efridge.getAll = function() {
	
// 	   	return	$http({

// 				  method:'GET',
// 				  //url:'https://mycolofitness.com/efridge',
// 				  url:'http://localhost:3000/efridge'})
	
// 	}
//     return efridge;           // <--------- do not go on a new line after return
 
//  }

//    }]);


//egym service
// angular
//   .module('myApp')
//    .service('efridgeService',['$http', '$q', function($http, $q) {

//    		var efridgeService = this;
//    		efridgeService.foodItems = {};

//    		efridgeService.getAll = function() {
//    			var defer = $q.defer();

//    			$http.get('http://localhost:3000/efridge')

//    			.sucess(function(res) {

//    				efridgeService.foodItems = res;
//    				console.log('service call: '+efridgeService.foodItems);
//    				defer.resolve(res);
//    			})
//    			.error(function(err, status) {
//    				defer.reject(err);
//    				$scope.errorCallback = err;
//    			})

//    			return defer.promise;
//    		}

//    		efridgeService.createEfridgeService = function(efridgeService) {
//    			var defer = $q.defer();

//    			$http.post('http://localhost:3000/efridge', efridgeService)

//    			return defer.promise;
//    		}


//    		return efridgeService;

//    }]);










// var efridgeServiceVar = function($http) {


// 	//$http.get('http://localhost:3000/efridge').then(successCallback, errorCallback);
// 	 var efridge = {};

//  	 efridge.getAll = function() {
	
// 	   	return	$http({

// 				  method:'GET',
// 				  //url:'https://mycolofitness.com/efridge',
// 				  url:'http://localhost:3000/efridge'})
	
// 	}
//     return efridge;           // <--------- do not go on a new line after return
 
//  }




// var egymServiceVar = function($http) {


// 	//$http.get('http://localhost:3000/efridge').then(successCallback, errorCallback);
// 	 var egym = {};

//  	 egym.getAll = function() {
	
// 	   	return	$http({

// 				  method:'GET',
// 				  //url:'https://mycolofitness.com/egym',
// 				  url:'http://localhost:3000/egym'})
	
// 	}
//     return egym;           // <--------- do not go on a new line after return
 
//  }



 



// //egym service
// angular
//   .module('myApp')
//    .service('egymService',['$http', egymServiceVar]) 

// //egym service
// angular
//   .module('myApp')
//    .service('efridgeService',['$http', efridgeServiceVar])



// var EfridgeController = function($timeout, efridgeService) {
//   this.foodItems = foodItems;
// };


// EfridgeController.resolve = {

// foodItems: [
//       'efridgeService',
//       function(efridgeService) {
//         return efridgeService.getAll()
//     .then(function(response) {
//       var newResponse = response.data;
//       return newResponse
//     });
//   }
// ]
// }


})();