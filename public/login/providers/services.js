(function(){

"use strict";



//login service
angular
  .module('myApp')
   .service('authService',['$http', '$q', function() { 

   		var authService = this;
   		authService.eLogin = function() {
   			var defer = $q.defer();
		$http({

				method:'POST',
				//url:'https://mycolofitness.com/login',
				url:'http://localhost:3000/login',
				data:{email:$scope.email, password:$scope.password}})
   			.then(function(res) {
   				defer.resolve(res.data);
   				console.log('authService resolved!');
   				}, function(err) {
   				
   				defer.reject(err);
   				console.log('Service not resolved: '+err);
   				})
		     		return defer.promise;
		 	}
				

}]) 

})();	