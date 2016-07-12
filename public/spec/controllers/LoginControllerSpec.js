(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

"use strict";

describe('Login Controller', function() {
    var controller,
        data,
        defer,
        authService,
        err,
        Err,
        ErrFactory,
        promise,
        q,
        userData,
        User,
        UserName,
        username,       
        $scope,
        $controller;


    beforeEach(angular.mock.module('myApp'));

      beforeEach(angular.mock.inject(function( _UserName_, _ErrFactory_, _userData_) {
        ErrFactory = _ErrFactory_;
        Err = new ErrFactory();
        userData = _userData_;
        UserName = _UserName_;
        User = {};

    })); 

    beforeEach(angular.mock.inject(function(_$controller_, _$rootScope_, _$q_, _authService_) {
        data = {username: "athena"};
        authService = _authService_;
        $scope = _$rootScope_.$new();
        $controller = _$controller_;
        q = _$q_;
        defer = q.defer();


        defer.resolve(data);
     spyOn(authService, 'eLogin').and.returnValue(defer.promise);


    // Init the controller       
        controller = $controller('LoginController', {
            $scope: $scope,
            authService: authService,
            userData: userData
        });

        $scope.init();
    }));

    describe('View Buttons', function() { 
        it('Checks that LoginController is defined', function() {
            expect(controller).toBeDefined();
            // console.log(controller);

        });

        it('Sets $scope.IsHidden to true', function() {                                
            expect($scope.IsHidden).toEqual(true);
        });
        });

    describe('auth Service', function() { 
        it('Should call be defined', function() {   
             expect(authService.eLogin).toBeDefined();
        }); 

  it('should resolve promise', function () {
        $scope.getAll();

        $scope.$apply();
        console.log($scope.username);
        expect($scope.username).toBe(data);

  }); 

//     it('user obj should be defined', function () {
// //this should look more like above, but have to define the username in the controller first or it wont work
//         efridgeService.getAll()
//         .then(function(data) {
//             $scope.foodItems = data;
//             $scope.user = {username: 'natasha', email: 'workhard@email.com'};
//         })

//         $scope.$apply();
//         expect($scope.user).toEqual({username: 'natasha', email: 'workhard@email.com'});

//   });     

    });
});


// //CONTROLLER TESTER: RegisterController

// describe('Register Controller', function() {
//     var controller,
//         efridgeService,
//         scope = {},
//         UserName,
//         $controller;
    
//     beforeEach(angular.mock.module('myApp'));

//     beforeEach(inject(function(_$controller_, _UserName_) {
//         UserName = _UserName_;
//         $controller = _$controller_;
                
//         controller = $controller('RegisterController', {
//             $scope: scope
//         });

//     }));   

//     it('checks that RegisterController is defined', function() {
//         expect(controller).toBeDefined();
//     });

//     it('sets $scope.IsHidden to true', function() {
//         scope.init();
//         expect(scope.IsHidden).toBeDefined();
//     });

//     it('toggles $scope.IsHidden', function() {
//         scope.ShowHide();
//         expect(scope.IsHidden).toEqual(false);

//         scope.ShowHide();
//         expect(scope.IsHidden).toEqual(true);
//     });  

//     it('checks that the UserName constant works', function() {
//         expect(UserName).toEqual("default");
//     });    
// });


},{}]},{},[1]);