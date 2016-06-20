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