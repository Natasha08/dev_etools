"use strict";

var expect = require('chai').expect;
require('../test-helper');
require('../build/scripts');

describe('Efridge Factory', function() {
    var Err,
        ErrFactory,
        userData;
        
    beforeEach(ngModule('myApp'));

    beforeEach(inject(function(_ErrFactory_, _userData_) {
        userData = _userData_;
         ErrFactory = _ErrFactory_;         
         Err = new ErrFactory();
    }));

    describe('Err', function() { 
        it('Checks that Err is defined', function() {
            expect(Err).to.equal.defined;
            //console.log(userData);
        });

        it('property Err.fail is "Failed.."', function() {
            let err = Err.fail;                                
            expect(err).to.equal('Failed...');
        });

        it('property Err.forbid is "Sorry, that access is forbidden"', function() {  
            let err = Err.forbid;                              
            expect(err).to.equal('Sorry, that access is forbidden');
        });     

        it('property Err.disabled is "That function is disabled"', function() {  
            let err = Err.disabled;                              
            expect(err).to.equal('That function is disabled');
        });            
   
    });
});