(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// This script deals mostly with client-side javascript functionality - mainly buttons.

var foodData = document.getElementById('foodData');
var foodProfile = document.getElementById('foodProfile');
var dataSearch = document.getElementById('dataSearch');
var registerDiv = document.getElementById('registerDiv');
var workoutData = document.getElementById('workoutData');

//To show the workout input form

function exerciseForm() {

 if (workoutData.hasAttribute('hidden')) {
 workoutData.removeAttribute('hidden');

 } 
 else {
 	console.log('err');
}
}	

var showRegister = document.getElementById('btntest5');
showRegister.addEventListener('click', exerciseForm, false);

// To show the food profiles stored in the database.

function shownutritiontable() {

 if (foodData.hasAttribute('hidden')) {
 foodData.removeAttribute('hidden');
 dataSearch.removeAttribute('hidden');
 foodProfile.setAttribute('hidden', 'true');
 registerDiv.setAttribute('hidden', 'true');
 workoutData.setAttribute('hidden', 'true');
 
 } 
 else {
 	console.log('err');
}
}	

var showtblclick = document.getElementById('btntest3');
showtblclick.addEventListener('click', shownutritiontable, false);


//to show the food profile FORM for the user. 

function createFood() {

 if (foodProfile.hasAttribute('hidden')) {
 foodProfile.removeAttribute('hidden');
 foodData.setAttribute('hidden', 'true');
 dataSearch.setAttribute('hidden', 'true');
 registerDiv.setAttribute('hidden', 'true');
 workoutData.setAttribute('hidden', 'true');
 
 } 
 else {
 	console.log('err');
}
}	

var showFood = document.getElementById('btntest1');
showFood.addEventListener('click', createFood, false);


//to show the registration form 

function registerUser() {

 if (registerDiv.hasAttribute('hidden')) {
 registerDiv.removeAttribute('hidden');
 foodData.setAttribute('hidden', 'true');
 dataSearch.setAttribute('hidden', 'true');
 foodProfile.setAttribute('hidden', 'true');
 workoutData.setAttribute('hidden', 'true');
 
 } 
 else {
 	console.log('err');
}
}	

var showRegister = document.getElementById('btntest4');
showRegister.addEventListener('click', registerUser, false);

// To show the workout input form

// function exerciseForm() {

//  if (workoutData.hasAttribute('hidden')) {
//  workoutData.removeAttribute('hidden');
//  console.log(workoutData);
//  } 
//  else {
//  	console.log('err');
// }
// }	

// var showRegister = document.getElementById('btntest5');
// showRegister.addEventListener('click', exerciseForm, false);

},{}]},{},[1]);
