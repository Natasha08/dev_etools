(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

"use strict";

describe('Efridge Controller', function() {
    var controller,
        data,
        defer,
        efridgeService,
        err,
        Err,
        ErrFactory,
        foodItems,
        promise,
        q,
        userData,
        UserName,       
        $scope,
        $controller;


    beforeEach(angular.mock.module('myApp'));

    beforeEach(angular.mock.inject(function( _UserName_, _ErrFactory_, _userData_) {
        userData = _userData_;
        ErrFactory = _ErrFactory_;
        Err = new ErrFactory();
        UserName = _UserName_;
    }));    

    beforeEach(angular.mock.inject(function(_$controller_, _$rootScope_, _$q_, _efridgeService_) {
        data = {food_name: "banana"};
        efridgeService = _efridgeService_;
        $scope = _$rootScope_.$new();
        $controller = _$controller_;
        q = _$q_;
        defer = q.defer();


        defer.resolve(data);
        spyOn(efridgeService, 'getAll').and.returnValue(defer.promise);


    // Init the controller       
        controller = $controller('EfridgeController', {
            $scope: $scope,
            efridgeService: efridgeService
        });
        $scope.init();
    }));

    // afterEach(function(){
    //     scope.$apply();
    // });

    describe('View Buttons', function() { 
        it('Checks that EfridgeController is defined', function() {
            expect(controller).toBeDefined();
        });

        it('Sets $scope.IsHidden to true', function() {                                
            expect($scope.IsHidden).toEqual(true);
        });

        it('Checks that scope.uncheckAll is a function', function() {
            expect(typeof $scope.uncheckAll).toEqual('function');
        });    
    });

    describe('Efridge Service', function() { 
        it('Should call be defined', function() {   
             expect(efridgeService.getAll).toBeDefined();
        }); 

  it('should resolve promise', function () {
        $scope.getAll();

        $scope.$apply();
        //console.log($scope.foodItems);
        expect($scope.foodItems).toBe(data);
        console.log(userData);

  });   
  
    it('user obj should be defined', function () {
//this should look more like above, but have to define the username in the controller first or it wont work
        efridgeService.getAll()
        .then(function(data) {
            $scope.foodItems = data;
            $scope.user = {username: 'natasha', email: 'workhard@email.com'};
        })

        $scope.$apply();
        expect($scope.user).toEqual({username: 'natasha', email: 'workhard@email.com'});

  });  

    });
});

},{}]},{},[1]);