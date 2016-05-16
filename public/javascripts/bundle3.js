(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// To show the food profiles stored in the database.

//To show the workout input form

function exerciseForm() {
var workoutData = document.getElementById('workoutData');

 if (workoutData.hasAttribute('hidden')) {
 workoutData.removeAttribute('hidden');
 } 
 else {
 	console.log('err');
}
};	

var showWorkout = document.getElementById('btntest5');
showWorkout.addEventListener('click', exerciseForm, false);

module.exports = exerciseForm;
},{}]},{},[1]);
