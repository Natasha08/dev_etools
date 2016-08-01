(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

"use strict";

describe('auth Service', function() {
    var data,
        authService,
        authRequestHandler,
        Err,
        ErrFactory,
        promise,
        scope,
        userData,
        $http,
        $httpBackend,
        $q;

    beforeEach(angular.mock.module('myApp'));

    beforeEach(angular.mock.inject(function(_$rootScope_, _$http_, _$q_, _$httpBackend_, _authService_, _ErrFactory_, _userData_) {
        userData = _userData_;
        data = ({ username: 'athena' });
        authService = _authService_;
        ErrFactory = _ErrFactory_;
        Err = new ErrFactory();
        scope = _$rootScope_.$new();
        $q = _$q_;
        $http = _$http_;
        $httpBackend = _$httpBackend_;

        authRequestHandler = $httpBackend.when('http://localhost:3000/login')
        .respond(200, data);
    }));

    describe('Mock BackEnd', function() {
        it('Checks that the  BackEnd (response) is defined', function() {
            $httpBackend.expectPOST('http://localhost:3000/login').respond(200, {data: data});
            authService.eLogin()
            .then(function(res) {
                expect(res).toBeDefined();
                //console.log(res.data);
            },
            function(err) {
            });
            $httpBackend.flush();
        });

        it('should return an forbid message when service call response is 401', function() {
            $httpBackend.when('http://localhost:3000/login').respond(401, '');
            $httpBackend.expectPOST('http://localhost:3000/login').respond(401, '');

            authService.eLogin()
              .then(function(res) {
              },
              function(err) {
                console.log(Err.forbid);
                expect(Err.forbid).toBe('Sorry, that access is forbidden');
              });
              $httpBackend.flush();
           });

        it('should return a promise', function () {
            expect(authService.eLogin().then).toBeDefined();

        });

        it('should get something', function() {
            $httpBackend.expectPOST('http://localhost:3000/login').respond(200, {data: data});
            promise = authService.eLogin();

            promise.then(function(res) {
            expect(res.data).toEqual({username: "athena"});
            // console.log(res.data);
        });
            $httpBackend.flush();
      });

        it('should get something', function() {
            //console.log(userData);
            $httpBackend.expectPOST('http://localhost:3000/login').respond(200, {data: data});
            promise = authService.eLogin();

            promise.then(function(res) {
            expect(res.data).toEqual({username: "athena"});

        });
            $httpBackend.flush();
      });

      });
    });


},{}]},{},[1]);
