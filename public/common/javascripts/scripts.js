(function(){

"use strict";

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

var EgymController = function($timeout, egymService) {
  this.workouts = workouts;
};


EgymController.resolve = {

workouts: [
      'egymService',
      function(egymService) {
        return egymService.getAll()
    .then(function(response) {
      return response
    });
  }
]
}

 angular
 .module('myApp', ['checklist-model', 'ui.router', 'ui.bootstrap', 'ngCookies'])

.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', '$httpProvider', function($urlRouterProvider, $stateProvider, $locationProvider, $httpProvider) {
	  
    $urlRouterProvider.otherwise('/login');  
    $httpProvider.defaults.withCredentials = true;


	$stateProvider
    .state('home', {
    url: '/',
    views: {
      'nav': {
        templateUrl: '/common/partials/nav.html',
        // controllerAs: 'authcontroller',
        controller: 'AuthController' //,
        // resolve: AuthController.resolve   
 
      },
      'btnpanel': {
        templateUrl: '/common/partials/daily.html',
        controllerAs: 'homecontroller',
        controller: 'HomeController'
      },
      }  
  })

	.state('login', {
		url: '/login',	
    views: {
      'nav': {
        templateUrl: '/login/partials/loginheader.html',
        controller: 'AuthController'
      },
      'btnpanel': {
        templateUrl: '/login/partials/view1.html'
      },      
      'form': {
        templateUrl: '/login/partials/register.html',
        controller: 'RegisterController'
   }

	}
})


		.state('exercise', {
		url: '/exercise',	
    views: {
      'nav': {
        templateUrl: '/common/partials/nav.html',
        controller: 'NavController'
      },     
    'form': {
       templateUrl: '/egym/partials/exercise.html',
       controllerAs: 'egymcontroller',
       controller: 'EgymController',
       resolve: EgymController.resolve
      }
	}

	})

		.state('nutrition', {
		url: '/nutrition',	
    views: {
      'nav': {
        templateUrl: '/common/partials/nav.html',
        // controllerAs: 'authcontroller',
        controller: 'AuthController' //,
        // resolve: AuthController.resolve   
 
      },           
      'form': {
        templateUrl: '/efridge/partials/foodindex.html'//,
        // controllerAs: 'efridgecontroller',
        //   controller: 'EfridgeController' //,
         // resolve: EfridgeController.resolve
      }
	}

	})

    .state('nutrition.foodprofile', {  
    url: '/foodprofile',  
    views: {             
      'FoodData': {
        templateUrl: '/efridge/partials/foodform.html' //,
         // controller: 'FoodFormController'
    
      }
  }

  })    

    .state('nutrition.foodlist', {  
    url: '/foodlist',  
    views: {             
      'FoodData': {
        templateUrl: '/efridge/partials/foodlist.html',
         controllerAs: 'efridgecontroller',
         controller: 'EfridgeController' //,
         // resolve: EfridgeController.resolve
    
      }
  }

  }) 

    .state('nutrition.meals', {  
    url: '/meals',  
    views: {             
      'FoodData': {
        templateUrl: '/efridge/partials/meals.html',
         controllerAs: 'efridgecontroller',
         // controller: 'EfridgeController',
         // resolve: EfridgeController.resolve
    
      }
  }

  })    

      .state('account', {
    url: '/account',  
    views: {
      'nav': {
        templateUrl: '/common/partials/nav.html',
        controller: 'NavController'
      },
      'btnpanel': {
        templateUrl: '/templates/partials/btnGym.html',
        controller: 'HomeController'
      },      
      'form': {
        templateUrl: '/efridge/partials/foodform.html'
      }
  }

  })  		

	        // use the HTML5 History API
        $locationProvider.html5Mode(true);

   $httpProvider.interceptors.push(function($q, $location) {
         return {
       response: function(response) {
         //console.log('success! And here is your response object: '+JSON.stringify(response.data));
         return response;
       },
          responseError: function(response) {
          if (response.status === 401) 
         $location.url('/login');
          return $q.reject(response);
        }
      };
 });



 }]);

})();

//delete after learning promises

// var AuthController = function($timeout, authService) {
//   this.account = account;
//   console.log('var Auth: '+this.account);
// };


// AuthController.resolve = {

// account: [
//       'authService',
//       function(authService) {
//         return authService.getAll()
//     .then(function(response) {
//       var newResponse = response.data;
//       console.log('resolve-response: '+newResponse);
//       //UserName = newResponse;
//       //console.log('this.UserName as newResponse: '+UserName);
//       return newResponse
//     });
//   }
// ]
// }
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
angular
  .module('myApp')
  .value('UserName', "Natasha");

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
(function(){

"use strict";


angular
  .module('myApp')
  .controller('EfridgeController', ['$scope', '$http', 'efridgeService', 'UserName', function($scope, $http, efridgeService, UserName) {
	  	


  	$scope.init = function() {
  		this.efridgeService = efridgeService;
  		$scope.getAll();

  	}

$scope.getAll = function() {

  	efridgeService.getAll()
  	.then(function(res) {
  		 $scope.foodItems = res.data;
  		 console.log($scope.foodItems);
		 $scope.user = {}

  		 }, function(err) {
  		      console.log('err: '+err);
  	
  	    })
  }


  $scope.uncheckAll = function() {
    $scope.user.foodItems = [];
  };
  $scope.checkAll = function() {
    $scope.user.foodItems = angular.copy($scope.foodItems);
  };


  		$scope.macros = [];
  		$scope.addMacro = function() {
  			$scope.macros.push({
  				foodName: $scope.user.foodItems
  			})
  			alert(JSON.stringify($scope.macros));
  		}


  	$scope.init();



 }]);

//   					$scope.macros = [],

//     				$scope.addMacro = function() {

//     					$scope.macros.push(
// 					{cal: $scope.fMacro.food_name, 
// 					 fat: $scope.fMacro.fat_grams,
// 					 carb: $scope.fMacro.carb_grams,
// 					protein: $scope.fMacro.protein_grams}



// function logFoodCal() {
// 	alert('foodCal.Items');
// }













//   					$scope.macros = [],

//     				$scope.addMacro = function() {

//     					$scope.macros.push(
// 					{cal: $scope.fMacro.food_name, 
// 					 fat: $scope.fMacro.fat_grams,
// 					 carb: $scope.fMacro.carb_grams,
// 					protein: $scope.fMacro.protein_grams}




//         $scope.IsHidden = true;
//     $scope.ShowHide = function () {
//         //If DIV is hidden it will be visible and vice versa.
//         $scope.IsHidden = !$scope.IsHidden;
//         $scope.IsHiddenForm = true;
//         $scope.IsHiddenMeal = true;
//     }









})();

//ngCookie test
	// $cookies.put("key", "value"); 
	// 	var value = $cookies.get("key");
	// 	console.log(value);


// angular
//   .module('myApp')
//   .value('Title', "Efridge");


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
   				console.log('service resolved!');
   			}, 
   			function(err) {
   				
   				defer.reject(err);
   				console.log('Service not resolved: '+err);
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
