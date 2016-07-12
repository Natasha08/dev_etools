"use strict";

var expect = require('chai').expect;
var assert = require('chai').assert;
require('../test-helper');
require('../build/scripts');
var sinon = require('sinon');

describe('efridgeService', function() {
 
  var ctrl,
  callback,
      data,
      defer,
      efridgeService,
      efridgeRequestHandler,
      Err,
      ErrFactory,
      promise,
      server,
      $http,
      $q;

  beforeEach(ngModule('myApp'));

  beforeEach(inject(function(_$http_, _$q_, _efridgeService_,_ErrFactory_) {
      data = {food_name: "banana"};
      efridgeService = _efridgeService_;
      ErrFactory = _ErrFactory_;
      Err = new ErrFactory();;
      $q = _$q_;
      $http = _$http_;
      server = sinon.fakeServer.create();  

  }));

afterEach(function () { this.server.restore(); });

// it("calls callback with deserialized data", function () {
//     //This is part of the FakeXMLHttpRequest API
//     server.requests[0].respond(
//         200,
//         { "Content-Type": "application/json" },
//         JSON.stringify({ data: data})
//     );  
//     //var callback = sinon.spy();
//     efridgeService.getAll()
//       .then(function(res) {
//         expect(res).to.be.defined;
//       },
//       function(err) {
//       });

//     //console.log(efridgeService.getAll(callback));


//     // assert(callback.calledOnce);
// });




  describe('Mock BackEnd', function() {
    it("makes a GET request for todo items", function () {
      server.respondWith("GET", "'http://localhost:3000/efridge'",
          [200, { "Content-Type": "application/json" },
          '[{ "id": 12, "comment": "Hey there" }]']);
          var callback = sinon.spy();
          efridgeService.getAll('http://localhost:3000/efridge', callback);
          this.server.respond();
          // console.log(server.respond());
    });
                     
  });
}); 