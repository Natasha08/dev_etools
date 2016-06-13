// // register the interceptor as a service
// $provide.factory('myHttpInterceptor', function($q, dependency1, dependency2) {
//   return {
//     // optional method
//     'request': function(config) {
//       // do something on success
//       return config;
//     },

//     // optional method
//    'requestError': function(rejection) {
//       // do something on error
//       if (canRecover(rejection)) {
//         return responseOrNewPromise
//       }
//       return $q.reject(rejection);
//     },



//     // optional method
//     'response': function(response) {
//       // do something on success
//       return response;
//     },

//     // optional method
//    'responseError': function(rejection) {
//       // do something on error
//       if (canRecover(rejection)) {
//         return responseOrNewPromise
//       }
//       return $q.reject(rejection);
//     }
//   };
// });

// $httpProvider.interceptors.push('myHttpInterceptor');


// // alternatively, register the interceptor via an anonymous factory

// 		$httpProvider.interceptors.push(function($q, $location) {
//   				return {
//     		response: function(response) {
//       		console.log('success! And here is your response object: '+response);
//       		return response;
//     		},
//    			 responseError: function(response) {
//      		 if (response.status === 401) 
//     	    $location.url('/login');
//      		 return $q.reject(response);
//    		 }
//  		 };
// 	});


// $httpProvider.interceptors.push(function($q, dependency1, dependency2) {
//   return {
//    'request': function(config) {
//        // same as above
//     },

//     'response': function(response) {
//        // same as above
//     }
//   };
// });


// // myApp.factory('Auth', (['$q', '$location', '$localStorage', function($q, $location, $localStorage) {
// // 		return {
// // 			 'request': function (config) {
// // 				config.headers = config.headers || {};
// // 				if ($localStorage.token) {
// // 					config.headers.Authorization = 'Bearer' + $localStorage.token;
// // 				}
// // 				return config;
// // 			},
// // 			 'responseError': function(response) {
// // 			 	if(response.status === 401 || response.status === 403) {
// // 			 		$location.path('/login');
// // 			 	}
// // 			 	return $q.reject(response);
// // 			}
// // 		};
		
// // }
// // ]));