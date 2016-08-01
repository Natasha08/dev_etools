(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

"use strict";

describe('Login Controller', function() {
  var  Err,
       ErrFactory,
       User,
       UserName,
       $state;

  beforeEach(angular.mock.module('myApp'));

  beforeEach(angular.mock.inject(function( _UserName_, _ErrFactory_, _userData_, _$state_) {
    ErrFactory = _ErrFactory_;
    Err = new ErrFactory();
    userData = _userData_;
    UserName = _UserName_;
    User = {};
    $state = _$state_;
  }));

  var controller,
      data,
      defer,
      authService,
      err,
      promise,
      q,
      userData,
      username,
      $scope,
      $controller;

  beforeEach(angular.mock.inject(function(_$controller_, _$rootScope_, _$q_, _authService_) {
    data = {
      username: "athena",
      status: 200
   };
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
      $state.current = 'main';
      console.log("$STATE", $state.current);
      // console.log(controller);
    });

    it('Sets $scope.IsHidden to true', function() {
      expect($scope.IsHidden).toEqual(true);
    });
  });

  describe('auth Service', function() {
    it('Should define authService.eLogin', function() {
      expect(authService.eLogin).toBeDefined();
    });

    it('should resolve promise', function () {
      authService.eLogin()
       .then(function(res) {
         userData.username = res.username;
         console.log(userData);
         expect(userData.username).toBe(data.username);
       });
      $scope.$apply();
    });
  });
});

},{}]},{},[1]);
