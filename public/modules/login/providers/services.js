(function(){

"use strict";

   angular
  .module('myApp')
   .service('userService',['$http', '$q', function($http, $q) { 
 
   var userService = this;

   userService.eLogin = function() {
      var defer = $q.defer();
      
         $http.get('http://localhost:3000/account')
    // $http.get('https://mycolofitness.com/account')
           .then(function(res) {
               defer.resolve(res.data);

               //console.log('userService resolved!');
            }, 
            function(err) {
               
               defer.reject(err);
               //console.log('userService not resolved: '+err);
            })
           return defer.promise;
       }
         

}]); 

//login service
angular
  .module('myApp')
    .service('authService',['$http', '$q', 'userData', function authService($http, $q, userData) { 
//console.log(logData);
   		var authService = this;

   authService.eLogin = function() {
      var defer = $q.defer();
      var url = 'http://localhost:3000/home';
    
         $http.post(url, userData)
    // $http.get('https://mycolofitness.com/account')
           .then(function(res) {
               defer.resolve(res.data);
               //console.log(res.status);

               //console.log('authService resolved! : '+JSON.stringify(res));
            }, 
            function(err) {
               
               defer.reject(err);
               //console.log('authService not resolved: '+err);
            })
           return defer.promise;
       }

//console.log('authService end!');      
				  
}]) 

   angular
  .module('myApp')
   .service('userService',['$http', '$q', function($http, $q) { 
 
   var userService = this;

   userService.eLogin = function() {
      var defer = $q.defer();
      
         $http.get('http://localhost:3000/account')
    // $http.get('https://mycolofitness.com/account')
           .then(function(res) {
               defer.resolve(res.data);

               //console.log('userService resolved!');
            }, 
            function(err) {
               
               defer.reject(err);
               //console.log('userService not resolved: '+err);
            })
           return defer.promise;
       }
         

}]); 

})();	