(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

"use strict";

describe('Login Factory', function() {
    var UserFactory,
        User

    beforeEach(angular.mock.module('myApp'));

    beforeEach(angular.mock.inject(function(_UserFactory_, _userData_) {
         UserFactory = _UserFactory_;
    }));

    describe('User', function() {
        it('Checks that User is defined', function() {
          User = new UserFactory();
          User.email = 'myemail@me.com'
          expect(User).toBeDefined();
        });
        it('Adds an email to User obj', function() {
          User = new UserFactory();
          User.email = 'myemail@me.com';
          expect(User.email).toBe('myemail@me.com');
        });
    });
});


},{}]},{},[1]);
