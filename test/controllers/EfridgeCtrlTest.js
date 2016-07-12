"use strict";

var expect = require('chai').expect;
var assert = require('chai').assert;
require('../test-helper');
require('../build/scripts');

describe('EfridgeController', function() {
  beforeEach(ngModule('myApp'));

  var ctrl,
      data,
      efridgeService,
      Err,
      ErrFactory,
      $scope,
      userData;

  beforeEach(inject(function(_userData_, _ErrFactory_) {
      Err = new _ErrFactory_();
      userData = _userData_;
  }))    

  beforeEach(inject(function($controller, $rootScope, _efridgeService_) {
      data = {food_name: "banana"};
      efridgeService = _efridgeService_;
      $scope = $rootScope.$new();
      ctrl = $controller('EfridgeController', {
      $scope: $scope
      });
      $scope.init();
  }));

  describe('the controller', function() {
    it('is defined', function() {
    //console.log(ctrl);
      expect(ctrl).to.not.be.undefined;
    });

    it('should define $scope.IsHidden as true', function() {
      expect($scope.IsHidden).to.be.true;
    });     

    it('should define efridgeService', function() {
      expect(efridgeService.getAll).to.be.a.defined;
    });

    it('should define Err (Err.Fail)', function() {
      assert.equal('Failed...', Err.fail, 'Err.Fail');
    });

    it('should resolve a promise', function() {
      $scope.getAll;
      $scope.$apply();
      expect($scope.getAll).to.be.data;
      expect($scope.foodItems).to.be.data;
    });
  });
}); 
