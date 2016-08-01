//   (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//
//   "use strict";
//
//   describe('Login Controller', function() {
//
//   var  config,
//        config,
//        locationProvider,
//        $state,
//        controller,
//        $controller
//
//   beforeEach(angular.mock.inject(function(_$controller_, _$rootScope_, _$q_, _config_) {
//     data = {
//       username: "athena",
//       status: 200
//    };
//     config = _config_;
//     authService = _authService_;
//     $scope = _$rootScope_.$new();
//     $controller = _$controller_;
//     q = _$q_;
//     defer = q.defer();
//
//     defer.resolve(data);
//     spyOn(authService, 'eLogin').and.returnValue(defer.promise);
//
//     // Init the controller
//     controller = $controller('EfridgeController', {
//       $scope: $scope,
//       authService: authService,
//       userData: userData
//     });
//       $scope.init();
//   }));
//
//
//   it('Sets $scope.IsHidden to true', function() {
//     console.log("CONFIG", config);
//   });
//
// });
//
//   },{}]},{},[1]);
