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

// var EgymController = function($timeout, egymService) {
//   this.workouts = workouts;
// };


// EgymController.resolve = {

// workouts: [
//       'egymService',
//       function(egymService) {
//         return egymService.getAll()
//     .then(function(response) {
//       return response
//     });
//   }
// ]
// }

angular
// .module('myApp', ['checklist-model', 'ui.router', 'ui.bootstrap', 'ngCookies'])
.module('myApp', ['checklist-model', 'ui.router'])

//.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', '$httpProvider', 'UserName', function($urlRouterProvider, $stateProvider, $locationProvider, $httpProvider, UserName) {
.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', '$httpProvider', function($urlRouterProvider, $stateProvider, $locationProvider, $httpProvider) {
  
//$urlRouterProvider.otherwise('/');
$httpProvider.defaults.withCredentials = true;
// use the HTML5 History API
$locationProvider.html5Mode(true);


function NavBarCtrl($scope) {
$scope.isCollapsed = true;
}

 $stateProvider
     .state('main', {
    url: '/main',
    views: {
      'nav': {
        templateUrl: '/modules/common/partials/nav.html',
        // controllerAs: 'authcontroller',
        controller: 'LoginController' //,
        // resolve: AuthController.resolve   

      },
      'btnpanel': {
        templateUrl: '/modules/common/partials/daily.html',
        //controllerAs: 'homecontroller',
        controller: 'HomeController'
      },
       'footer': {
        templateUrl: '/modules/common/partials/footer.html'
   } 

      }  
  })
   .state('login', {
   url: '/login',
   views: {
     'nav': {
       templateUrl: '/common/partials/nav.html',
       // controllerAs: 'authcontroller',
       controller: 'LoginController' //,
       // resolve: AuthController.resolve   

     },
     'btnpanel': {
       templateUrl: '/common/partials/daily.html',
       controllerAs: 'homecontroller',
       controller: 'HomeController'
     }
     }  
 })

$stateProvider
    .state('contacts.detail', {
        url: "/contacts/:contactId",
        templateUrl: 'contacts.detail.html',
        controller: function ($stateParams) {
            // If we got here from a url of /contacts/42
            expect($stateParams).toBe({contactId: "42"});
        }
    })

	.state('home', {
		url: '/',	
    views: {
      'nav': {
        templateUrl: '/modules/login/partials/loginheader.html',
        controller: 'LoginController'
      },
      'btnpanel': {
        templateUrl: '/modules/login/partials/view1.html'
      },      
      'form': {
        templateUrl: '/modules/login/partials/register.html',
        controller: 'RegisterController'
      },
      'footer': {
        templateUrl: '/common/modules/partials/footer.html'
   }      

	}
})


		.state('exercise', {
		url: '/exercise',	
    views: {
      'nav': {
        templateUrl: '/modules/common/partials/nav.html',
        controller: 'LoginController'
      },     
    'form': {
       templateUrl: '/modules/egym/partials/exercise.html',
      //  controllerAs: 'egymcontroller',
          controller: 'EgymController',
      //  resolve: EgymController.resolve
      'footer': {
        templateUrl: '/modules/common/partials/footer.html'
      }      
    }
	}

	})

		.state('nutrition', {
		url: '/nutrition',	
    views: {
      'nav': {
        templateUrl: '/modules/common/partials/nav.html',
        // controllerAs: 'authcontroller',
        controller: 'LoginController' //,
        // resolve: AuthController.resolve   

      },           
      'form': {
        templateUrl: '/modules/efridge/partials/foodindex.html'//,
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
        templateUrl: '/modules/efridge/partials/foodform.html' //,
         // controller: 'FoodFormController'

      }
  }

  })    

    .state('nutrition.foodlist', {  
    url: '/foodlist',  
    views: {             
      'FoodData': {
        templateUrl: '/modules/efridge/partials/foodlist.html',
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
        templateUrl: '/modules/efridge/partials/meals.html',
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
        templateUrl: '/modules/common/partials/nav.html',
        controller: 'NavController'
      },
      // 'btnpanel': {
      //   templateUrl: '/templates/partials/btnGym.html',
      //   controller: 'HomeController'
      // },      
      'form': {
        templateUrl: '/modules/efridge/partials/foodform.html'
      }
  }

  })  		

   $httpProvider.interceptors.push(function($q, $location) {
         return {
         response: function(response) {
         //console.log('success! And here is your response object: '+JSON.stringify(response.data));
         return response;
       },
	      responseError: function(response) {
	      if (response.status === 401) {
	      $location.url('/');
	      console.log('failure! And here is your response object: '+JSON.stringify(response.config));
	    
	      } else
	      console.log('Rejection!: '+response.data);
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

.controller('EgymController', ['$scope', 'UserName', function($scope, UserName) {
		//client-side ajax call [with interceptor]

    $scope.init = function() {
        $scope.UserName = UserName;
        $scope.IsHidden = true;

    }

    
    $scope.ShowHide = function () {
        //If DIV is hidden it will be visible and vice versa.
        $scope.IsHidden = !$scope.IsHidden;
    }

 
$scope.init();
    				 
  }])
   			  					


.controller('HomeController', ['$scope', '$http', function($scope, $http) {

    $scope.init = function() {

        $scope.IsHiddenDaily = true;

    }


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
                        
                    )
                    //console.log(JSON.stringify($scope.daily))
}
    	//$rootScope.testRoot = 'This root works!';

$scope.init();

 }])

.controller('NavController', ['$scope', '$http', 'UserName', function($scope, $http, UserName) {

this.UserName = UserName;
$scope.UserName = this.UserName;


	console.log('$scope?:: '+$scope.UserName);
	console.log('constant?: '+this.UserName);

}])

.controller('SomeController', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {
  //..

  //..
}])    


})();
(function(){

angular
  .module('myApp')
  .constant('UserName', "default");


angular
  .module('myApp')
  .constant('ErrStatus', "Failed...");

angular
  .module('myApp')
  .constant('logData', {
  	email: '',
  	password: ''
  });

   angular
  .module('myApp')
   .value('userData', {
      email: '',
      password: '',
      username: '',
      message: 'user obj created!',
      err: 'Error making user obj'
});
 
//   angular
//   .module('myApp')
//   .constant('fail', 'Failed...');

// angular
//   .module('myApp')
//   .constant('forbid', 'Sorry, that access is forbidden');

// angular
//   .module('myApp')
//   .constant('disabled', 'That function is disabled');


  })();	
angular
  .module('myApp')
   .factory('UserFactory', function UserFactory() {

   	function User() {
   		this.email = '';
   		this.password = '';
   		this.message = 'user obj created!';
   		this.err = 'Error making user obj';
}
   		return User;
   });


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
      this.userData = userData;

   authService.eLogin = function() {
      var defer = $q.defer();
      var url = 'http://localhost:3000/login';
    
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
(function(){

"use strict";


angular
  .module('myApp')
  .controller('LoginController', ['$scope', 'authService', 'ErrFactory', 'userData', '$state', function LoginController($scope, authService, ErrFactory, userData, $state) {

    $scope.init = function init() {
    this.authService = authService;
    this.userData = userData;
      $scope.Err = new ErrFactory();
      $scope.IsHidden = true;
      // var User = [];

      //$scope.isDisabled = false;
    }

 //   hardcode userdata
        // $scope.email = 'loginemail@email.com';
        // $scope.password = 'loginpassword';
//console.log(efridgeService);
        userData.email = $scope.email;
        userData.password = $scope.password;
// userData = {
//         email: $scope.email,
//       password: $scope.password
//}

$scope.getAll = function(userData) {
 // $scope.username= [];
    authService.eLogin()
    .then(function(data) {  
       $scope.username = data;
       userData.username = data.username;
       //$state.go('main');
        $state.go('main');
       $window.location.href = '/main';
       
    })
    .catch(function(err) {
            //console.log(Err.fail);
            console.log(err);  
            $scope.errorFail = " Err.fail not working...but this error is!"+err; 
            //$window.location.href = '/' 
        })
    //return $scope.username;
};

    $scope.init();



 }])

  .controller('RegisterController', ['$scope', 'UserName', function RegisterController($scope, UserName) {



    $scope.init = function() {
        $scope.IsHidden = true;
        var tester = UserName;
    };
        		
    	  $scope.ShowHide = function () {
          //If DIV is hidden it will be visible and vice versa.
          $scope.IsHidden = !$scope.IsHidden;
    	  }
    $scope.init();  
 }]);
// 	function registerUser() {
// 		$http({

// 				method:'POST',
// 				 // url:'https://mycolofitness.com/register',
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




})();

(function(){

"use strict";

angular
  .module('myApp')
	  .controller('EfridgeController', ['$scope', 'efridgeService', 'ErrFactory', function EfridgeController($scope, efridgeService, ErrFactory) {

  	$scope.init = function init() {
  	  this.efridgeService = efridgeService;
      var Err = new ErrFactory();
      $scope.IsHidden = true;
      $scope.foodItems = [];
  	}
    $scope.getAll = function() {
      $scope.foodItems= {};


  	  efridgeService.getAll()
  	  .then(function(data) {   
  		$scope.foodItems = data;
		  $scope.user = {};

      })
    .catch(function(err) { 
      $scope.err = Err.fail;	
  	  })
    return $scope.foodItems;
    };

    $scope.uncheckAll = function() {
      $scope.user.foodItems = [];
      return $scope.user.foodItems;
    };
    $scope.checkAll = function() {
      $scope.user.foodItems = angular.copy($scope.foodItems);
    };



//     $scope.disableButton = function() {
//         $scope.isDisabled = true;
//     }

//   		$scope.addMacro = function() {
//               $scope.macros = [];

//   angular.forEach($scope.user.foodItems, function(value) {
//   this.push(value);
// }, $scope.macros);

//   $scope.IsHidden = false;
//   $scope.isDisabled = true;

// }

//       $scope.clearMacro = function() {
//         $scope.IsHidden = true;
//         $scope.macros = [];
//         $scope.isDisabled = false;
//       }



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

"use strict"

angular
  .module('myApp')
   .factory('ErrFactory', function() {

   	function Err() {
   		this.fail = 'Failed...';
   		this.forbid = 'Sorry, that access is forbidden';
   		this.disabled = 'That function is disabled';
}
   		return Err;
   });
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
