"use strict";

var expect = require('chai').expect;
require('../test-helper');
require('../build/scripts');

describe('efridgeService', function() {
 
  var ctrl,
      data,
      defer,
      efridgeService,
      efridgeRequestHandler,
      Err,
      ErrFactory,
      promise,
      $http,
      $httpBackend,
      $q;

  beforeEach(ngModule('myApp'));

  beforeEach(inject(function(_$http_, _$q_, _$httpBackend_, _efridgeService_,_ErrFactory_) {
      data = {food_name: "banana"};
      efridgeService = _efridgeService_;
      ErrFactory = _ErrFactory_;
      Err = new ErrFactory();;
      $q = _$q_;
      $http = _$http_;
      $httpBackend = _$httpBackend_;    

      efridgeRequestHandler = $httpBackend.when('http://localhost:3000/efridge')
      .respond(200, data);
  }));

  describe('Mock BackEnd', function() {
    it('Checks that the  BackEnd (response) is defined', function() {                            
      $httpBackend.expectGET('http://localhost:3000/efridge').respond(200, {data: data});
      efridgeService.getAll()
      .then(function(res) {
        expect(res).to.be.defined;
      },
      function(err) {
      }); 
      $httpBackend.flush();  
    });

    it('should return an forbid message when service call response is 401', function() {
      $httpBackend.when('http://localhost:3000/efridge').respond(401, '');                            
      $httpBackend.expectGET('http://localhost:3000/efridge').respond(401, ''); 

      efridgeService.getAll()
      .then(function(res) {
      },
      function(res) {
          // console.log(Err.forbid);
      expect(Err.forbid).to.equal('Sorry, that access is forbidden');
      }); 
      $httpBackend.flush();  
    });

    it('should return a promise', function () {
      expect(efridgeService.getAll().then).to.be.defined;
    });

    it('should get something', function() {
      $httpBackend.expectGET('http://localhost:3000/efridge').respond(200, {data: data});
      promise = efridgeService.getAll();

      promise.then(function(res) {
      expect(res.data).to.eql({food_name: 'banana'}); 
    });
      $httpBackend.flush();
    });                      
  });
}); 