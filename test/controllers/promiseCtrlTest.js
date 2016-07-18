"use strict";

var expect = require('chai').expect;
var assert = require('chai').assert;
var sinon = require('sinon');
require('../test-helper');
var myPromise = require('./repository.js');

describe('es6 promises', function() {   

  context("sets up the call", function() {
    let  result = { id: "ExternalId" };

    sinon.stub(myPromise, 'getId', function() {
      return result;
    }); 
  });

  it("checks if call is defined", function () {

      expect(myPromise.getId()).not.be.undefined;
  }); 

  it("calls the original function", function () {
      let callback = sinon.spy();
      let proxy = myPromise.getId(callback);

      proxy;
      console.log(proxy);
      expect(proxy).to.eql( { id: "ExternalId" } );
  });
});













// require('es6-promise').polyfill();
 // this.repositoryAction = this.sinon.stub(repository, 'action').returns(new Promise(value);
// export default {
//   create: () => new Promise(function(resolve, reject) {}),
//   update: () => new Promise(function(resolve, reject) {}),
//   get: _.noop,
//   fetch: _.noop,
//   delete: _.noop
// };
