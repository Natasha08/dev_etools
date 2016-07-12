(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

"use strict";

describe('Efridge Service', function() {
    var data,
        efridgeService,
        efridgeRequestHandler,
        Err,
        ErrFactory,
        promise,
        scope,      
        $http,
        $httpBackend,
        $q;
        
    beforeEach(angular.mock.module('myApp'));

    beforeEach(angular.mock.inject(function(_$rootScope_, _$http_, _$q_, _$httpBackend_, _efridgeService_,_ErrFactory_) {
        data = {food_name: "banana"};
        efridgeService = _efridgeService_;
        ErrFactory = _ErrFactory_;
        Err = new ErrFactory();
        scope = _$rootScope_.$new();
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
                expect(res).toBeDefined();
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
                expect(Err.forbid).toBe('Sorry, that access is forbidden');
            }); 
            $httpBackend.flush();  
        });  

        it('should return a promise', function () {
            expect(efridgeService.getAll().then).toBeDefined();

        });

        it('should get something', function() {
            $httpBackend.expectGET('http://localhost:3000/efridge').respond(200, {data: data});
            promise = efridgeService.getAll();

            promise.then(function(res) {
            expect(res.data).toEqual({food_name: "banana"}); 
            // console.log(res.data);   
        });
            $httpBackend.flush();
      });            

      });
    });


},{}]},{},[1]);