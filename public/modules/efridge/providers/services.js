(function(){

"use strict";

//efridge service
angular
  .module('myApp')
   .service('efridgeService',['$http', '$q', function($http, $q) {

	   var efridgeService = this;
     //var foodItems = {};

	   efridgeService.getAll = function getAll() {
    	  var defer = $q.defer();
    	
		    $http.get('http://localhost:3000/efridge')
        // $http.get('https://mycolofitness.com/efridge')
		    .then(function(res) {
   				defer.resolve(res.data);
          //foodItems = res.data;
   			}, 
   			  function(err) {   				
   				defer.reject(err);
   			})
		     return defer.promise;
		 }
     // return efridgeService;
   }]);		    


})();