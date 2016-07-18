"use strict";

var expect = require('chai').expect;
var assert = require('chai').assert;
var sinon = require('sinon');
require('../test-helper');
require('../build/scripts');

describe('Login Controller', function() {
  beforeEach(ngModule('myApp'));

  var Err,
      ErrFactory,
      userData;

  beforeEach(inject(function(_userData_, _ErrFactory_) {
      Err = new _ErrFactory_();
      userData = _userData_;
  }));    

  var ctrl,    
      authService,
      $scope;

  beforeEach(inject(function($controller, $rootScope, $q, _authService_) {
      let data = {username: "DragonMaster"};
      let defer = $q.defer();
      let promise = defer.promise;

      defer.resolve(data);      
      authService = _authService_;   
      $scope = $rootScope.$new();

      ctrl = $controller('LoginController', {
      $scope: $scope
      });
            
      sinon.stub(authService, 'eLogin', function(){
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

    it('should define authService', function() {
      let service = authService.getAll;
      expect(service).to.be.defined;
    });

    it('should define Err (Err.Fail)', function() {
      let myError = Err.fail;
      assert.equal('Failed...', myError, 'Err.Fail');
    });   

     it('resolve a promise', function() {
      let username = $scope.username;

      $scope.getAll();

      $scope.$apply();
            $scope.email = 'natasha08@me.com';
      $scope.password = 'poo';
      userData.email = $scope.email;
      userData.password = $scope.password;
      console.log($scope.username);

      expect(username).to.eql.data;
    });   
  });
}); 
