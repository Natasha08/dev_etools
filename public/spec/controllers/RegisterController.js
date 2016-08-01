(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

//CONTROLLER TESTER: RegisterController

describe('Register Controller', function() {
  var controller,
      efridgeService,
      scope = {},
      UserName,
      $controller;

  beforeEach(angular.mock.module('myApp'));

  beforeEach(inject(function(_$controller_, _UserName_) {
    UserName = _UserName_;
    $controller = _$controller_;

    controller = $controller('RegisterController', {
      $scope: scope
    });
  }));

  it('checks that RegisterController is defined', function() {
    expect(controller).toBeDefined();
  });

  it('sets $scope.IsHidden to true', function() {
    scope.init();
    expect(scope.IsHidden).toBeDefined();
  });

  it('toggles $scope.IsHidden', function() {
    scope.ShowHide();
    expect(scope.IsHidden).toEqual(false);

    scope.ShowHide();
    expect(scope.IsHidden).toEqual(true);
  });

  it('checks that the UserName constant works', function() {
    expect(UserName).toEqual("default");
  });
});

},{}]},{},[1]);
