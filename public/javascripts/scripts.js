(function(){

"use strict";

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
        templateUrl: '/templates/partials/nav.html',
        // controllerAs: 'authcontroller',
        controller: 'AuthController' //,
        // resolve: AuthController.resolve   
 
      },
      'btnpanel': {
        templateUrl: '/templates/partials/daily.html',
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
        controller: 'LoginController'
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
        templateUrl: '/templates/partials/nav.html',
        controller: 'NavController'
      },     
    'form': {
       templateUrl: '/egym/exercise.html',
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
        templateUrl: '/templates/partials/nav.html',
        // controllerAs: 'authcontroller',
        controller: 'AuthController' //,
        // resolve: AuthController.resolve   
 
      },           
      'form': {
        templateUrl: '/efridge/partials/foodindex.html',
        controllerAs: 'efridgecontroller',
         controller: 'EfridgeController',
         resolve: EfridgeController.resolve
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
         controller: 'EfridgeController',
         resolve: EfridgeController.resolve
    
      }
  }

  }) 

    .state('nutrition.meals', {  
    url: '/meals',  
    views: {             
      'FoodData': {
        templateUrl: '/efridge/partials/meals.html',
         controllerAs: 'efridgecontroller',
         controller: 'EfridgeController',
         resolve: EfridgeController.resolve
    
      }
  }

  })    

      .state('account', {
    url: '/account',  
    views: {
      'nav': {
        templateUrl: '/templates/partials/nav.html',
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

//data:{email:$scope.email, password:$scope.password}})
// 				  .then(function (response) {

//                //set variables and sessionStorage...works!						
// 				  var foodItems = response.data;
					
//                // Save data to sessionStorage
				
//    			  sessionStorage.setItem('foodItems', JSON.stringify(foodItems));

// })

angular
  .module('myApp')
  .value('UserName', "Natasha");

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


    	//$rootScope.testRoot = 'This root works!';

 }])



.controller('AuthController', ['$scope', '$http', 'authService', 'UserName', function($scope, $http, authService, UserName) {
this.UserName = UserName;

console.log(this.UserName);


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

(function(){

"use strict";

angular
  .module('myApp')

.controller('LoginController', ['$scope', '$http', '$log', function($scope, $http, $log) {




}])

})();
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
(function(){

"use strict";

angular
  .module('myApp')
  .controller('EfridgeController', ['$scope', '$rootScope', '$http', '$log', '$cookies' , 'efridgeService', 'foodItems', 'UserName', function($scope, $rootScope, $http, $log, $cookies, efridgeService, foodItems, UserName) {

$scope.UserName = this.UserName;
this.foodItems = foodItems.data;

$scope.foodItems = this.foodItems;
$scope.user = {

	foodItems: ['foodItem']
	} 
//console.log('foodItems stringified: '+JSON.stringify($scope.foodItems));



function logFoodCal() {
	alert('foodCal.Items');
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
    				},


			//$scope.winYa = $rootScope.testRoot;

        $scope.IsHiddenForm = true;
    	$scope.ShowHideForm = function () {
        //If DIV is hidden it will be visible and vice versa.
        $scope.IsHiddenForm = !$scope.IsHiddenForm;
        $scope.IsHidden = true;
        $scope.IsHiddenMeal = true;
    }
        $scope.IsHiddenMeal = true;
    	$scope.ShowHideMeal = function () {
        //If DIV is hidden it will be visible and vice versa.
        $scope.IsHiddenMeal = !$scope.IsHiddenMeal;
        $scope.IsHidden = true;
        $scope.IsHiddenForm = true;
    }    

        $scope.IsHidden = true;
    $scope.ShowHide = function () {
        //If DIV is hidden it will be visible and vice versa.
        $scope.IsHidden = !$scope.IsHidden;
        $scope.IsHiddenForm = true;
        $scope.IsHiddenMeal = true;
    }



  					$scope.macros = [],

    				$scope.addMacro = function() {

    					$scope.macros.push(
					{cal: $scope.fMacro.food_name, 
					 fat: $scope.fMacro.fat_grams,
					 carb: $scope.fMacro.carb_grams,
					protein: $scope.fMacro.protein_grams}



    					// $http.post('/efridge', $scope.meals);
    					
    				)}
				//console.log($scope.macros);

	function foodForm()  {

		$http({

				method:'POST',
				//url:'https://mycolofitness.com/foodform'
				url:'http://localhost:3000/foodform'})
				//data:{email:$scope.email, password:$scope.password}
				.then(function (response) {
					//console.log(response);
					//$scope.userTest = response;
					$scope.UserF = response.data;
					//$scope.UserFIdFood = $scope.User.user_id;

					//console.log($scope.userTests.user_id);


});	

		$http({

				method:'POST',
				//url:'https://mycolofitness.com/foodform'
				url:'http://localhost:3000/macroform'})
				//data:{email:$scope.email, password:$scope.password}
				.then(function (response) {
					//console.log(response);
					//$scope.userTest = response;
					$scope.UserB = response.data;
					//$scope.UserFIdFood = $scope.User.user_id;

					//console.log($scope.userTests.user_id);


});	


}


 }])





})();

//ngCookie test
	// $cookies.put("key", "value"); 
	// 	var value = $cookies.get("key");
	// 	console.log(value);

