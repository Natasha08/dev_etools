"use strict";

var expect = require('chai').expect;
var assert = require('chai').assert;
var sinon = require('sinon');
require('../test-helper');
require('../build/scripts');

describe('EfridgeController', function() {
  beforeEach(ngModule('myApp'));

  var Err,
      ErrFactory,
      userData;

  beforeEach(inject(function(_userData_, _ErrFactory_) {
      Err = new _ErrFactory_();
      userData = _userData_;
  }));    

  var ctrl,    
      efridgeService,
      $scope;

  beforeEach(inject(function($controller, $rootScope, $q, _efridgeService_) {
      let data = {food_name: "banana"};
      let defer = $q.defer();
      let promise = defer.promise;

      defer.resolve(data);      
      efridgeService = _efridgeService_;   
      $scope = $rootScope.$new();

      ctrl = $controller('EfridgeController', {
      $scope: $scope
      });
            
      sinon.stub(efridgeService, 'getAll', function(){
      return $q.when(promise);
  });

      $scope.init();
  }));

  describe('the controller', function() {
    it('is defined', function() {
      expect(ctrl).to.not.be.undefined;
    });

    it('should define $scope.IsHidden as true', function() {
      let hidden = $scope.IsHidden;
      expect(hidden).to.be.true;
    });

    it('should define efridgeService', function() {
      let service = efridgeService.getAll;
      expect(service).to.be.defined;
    });

    it('should define Err (Err.Fail)', function() {
      let myError = Err.fail;
      assert.equal('Failed...', myError, 'Err.Fail');
    });   

     it('resolve a promise', function() {
      let foodItems = $scope.foodItems;

      $scope.getAll();
      $scope.$apply();
      console.log($scope.foodItems);

      expect(foodItems).to.eql.data;
    });   
  });
}); 
