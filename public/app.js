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
  
// $urlRouterProvider.otherwise('/');
// $httpProvider.defaults.withCredentials = true;
// // use the HTML5 History API
// $locationProvider.html5Mode(true);


// function NavBarCtrl($scope) {
// $scope.isCollapsed = true;
// }

//  $stateProvider
//    .state('home', {
//    url: '/',
//    views: {
//      'nav': {
//        templateUrl: '/common/partials/nav.html',
//        // controllerAs: 'authcontroller',
//        controller: 'AuthController' //,
//        // resolve: AuthController.resolve   

//      },
//      'btnpanel': {
//        templateUrl: '/common/partials/daily.html',
//        controllerAs: 'homecontroller',
//        controller: 'HomeController'
//      }
//      }  
//  })

// $stateProvider
//     .state('contacts.detail', {
//         url: "/contacts/:contactId",
//         templateUrl: 'contacts.detail.html',
//         controller: function ($stateParams) {
//             // If we got here from a url of /contacts/42
//             expect($stateParams).toBe({contactId: "42"});
//         }
//     })

// 	.state('main', {
// 		url: '/',	
//     views: {
//       'nav': {
//         templateUrl: '/modules/login/partials/loginheader.html',
//         controller: 'LoginController'
//       },
//       'btnpanel': {
//         templateUrl: '/modules/login/partials/view1.html'
//       },      
//       'form': {
//         templateUrl: '/modules/login/partials/register.html',
//         controller: 'RegisterController'
//       },
//       'footer': {
//         templateUrl: '/common/modules/partials/footer.html'
//    }      

// 	}
// })


// 		.state('exercise', {
// 		url: '/exercise',	
//     views: {
//       'nav': {
//         templateUrl: '/modules/common/partials/nav.html',
//         controller: 'LoginController'
//       },     
//     'form': {
//        templateUrl: '/modules/egym/partials/exercise.html',
//       //  controllerAs: 'egymcontroller',
//           controller: 'EgymController',
//       //  resolve: EgymController.resolve
//       'footer': {
//         templateUrl: '/modules/common/partials/footer.html'
//       }      
//     }
// 	}

// 	})

// 		.state('nutrition', {
// 		url: '/nutrition',	
//     views: {
//       'nav': {
//         templateUrl: '/modules/common/partials/nav.html',
//         // controllerAs: 'authcontroller',
//         controller: 'LoginController' //,
//         // resolve: AuthController.resolve   

//       },           
//       'form': {
//         templateUrl: '/modules/efridge/partials/foodindex.html'//,
//         // controllerAs: 'efridgecontroller',
//         //   controller: 'EfridgeController' //,
//          // resolve: EfridgeController.resolve
//       }
// 	}

// 	})

//     .state('nutrition.foodprofile', {  
//     url: '/foodprofile',  
//     views: {             
//       'FoodData': {
//         templateUrl: '/modules/efridge/partials/foodform.html' //,
//          // controller: 'FoodFormController'

//       }
//   }

//   })    

//     .state('nutrition.foodlist', {  
//     url: '/foodlist',  
//     views: {             
//       'FoodData': {
//         templateUrl: '/modules/efridge/partials/foodlist.html',
//          controllerAs: 'efridgecontroller',
//          controller: 'EfridgeController' //,
//          // resolve: EfridgeController.resolve

//       }
//   }

//   }) 

//     .state('nutrition.meals', {  
//     url: '/meals',  
//     views: {             
//       'FoodData': {
//         templateUrl: '/modules/efridge/partials/meals.html',
//          controllerAs: 'efridgecontroller',
//          // controller: 'EfridgeController',
//          // resolve: EfridgeController.resolve

//       }
//   }

//   })    

//       .state('account', {
//     url: '/account',  
//     views: {
//       'nav': {
//         templateUrl: '/modules/common/partials/nav.html',
//         controller: 'NavController'
//       },
//       // 'btnpanel': {
//       //   templateUrl: '/templates/partials/btnGym.html',
//       //   controller: 'HomeController'
//       // },      
//       'form': {
//         templateUrl: '/modules/efridge/partials/foodform.html'
//       }
//   }

//   })  		

//     .state('home', {
//     url: '/home',
//     views: {
//       'nav': {
//         templateUrl: '/modules/common/partials/nav.html',
//         // controllerAs: 'authcontroller',
//         controller: 'LoginController' //,
//         // resolve: AuthController.resolve   

//       },
//       'btnpanel': {
//         templateUrl: '/modules/common/partials/daily.html',
//         //controllerAs: 'homecontroller',
//         controller: 'HomeController'
//       },
//        'footer': {
//         templateUrl: '/modules/common/partials/footer.html'
//    } 

//       }  
//   })


//    $httpProvider.interceptors.push(function($q, $location) {
//          return {
//        response: function(response) {
//          //console.log('success! And here is your response object: '+JSON.stringify(response.data));
//          return response;
//        },
//           responseError: function(response) {
//           if (response.status === 401) {
//          $location.url('/');
//         console.log('failure! And here is your response object: '+JSON.stringify(response.config));
        
//           } else
//           console.log('Rejection!: '+response.data);
//           return $q.reject(response);
//         }
//       };
//  });



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