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