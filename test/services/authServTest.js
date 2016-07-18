"use strict";

var expect = require('chai').expect;
var sinon = require('sinon');
require('../test-helper');
require('../build/scripts');

describe.only('authService', function() {
 
  var ctrl,
      data,
      defer,
      authService,
      authRequestHandler,
      Err,
      ErrFactory,
      promise,
      server,
      userData,
      $http,
      $q;

  beforeEach(ngModule('myApp'));

  beforeEach(inject(function(_$http_, _$q_, _authService_, _ErrFactory_, userData) {
      let data = {username: "DragonMaster"};
      authService = _authService_;
      ErrFactory = _ErrFactory_;
      Err = new ErrFactory();;
      $q = _$q_;
      $http = _$http_;
  }));
    before(function () {
      this.server = sinon.fakeServer.create();
    });

    after(function () { this.server.restore(); });

  describe('Mock BackEnd', function() {
    it('Checks that the  BackEnd (response) is defined', function() {                            
        server.respondWith("GET", "/efridge/",
            [200, { "Content-Type": "application/json" },
             '[{ "id": 12, "comment": "Hey there" }]']);
    });                  
  });
}); 