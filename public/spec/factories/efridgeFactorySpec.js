(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

"use strict";

describe('Efridge Factory', function() {
    var Err,
        ErrFactory,
        userData;
        
    beforeEach(angular.mock.module('myApp'));

    beforeEach(angular.mock.inject(function(_ErrFactory_, _userData_) {
        userData = _userData_;
         ErrFactory = _ErrFactory_;         
         Err = new ErrFactory();
    }));

    describe('Err', function() { 
        it('Checks that Err is defined', function() {
            expect(Err).toBeDefined();
            //console.log(userData);
        });

        it('property Err.fail is "Failed.."', function() {                                
            expect(Err.fail).toBe('Failed...');
        });

        it('property Err.forbid is "Sorry, that access is forbidden"', function() {                                
            expect(Err.forbid).toBe('Sorry, that access is forbidden');
        });     

        it('property Err.disabled is "That function is disabled"', function() {                                
            expect(Err.disabled).toBe('That function is disabled');
        });            
   
    });
});


},{}]},{},[1]);