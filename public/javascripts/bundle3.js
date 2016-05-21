(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//To show the workout input form

function showWorkoutTable() {
var workoutData = document.getElementById('workoutData');
var workSearch = document.getElementById('workSearch');

 if (workoutData.hasAttribute('hidden')) {
 workoutData.removeAttribute('hidden');
  workSearch.removeAttribute('hidden');
  workProfile.setAttribute('hidden', 'true');
 } 
 else {
 	console.log('err');
}
};	

var btnShowWork = document.getElementById('btnworkget');
btnShowWork.addEventListener('click', showWorkoutTable, false);

function exerciseForm() {
var workProfile = document.getElementById('workProfile');

 if (workProfile.hasAttribute('hidden')) {
 workProfile.removeAttribute('hidden');
 workoutData.setAttribute('hidden', 'true');
 workSearch.setAttribute('hidden', 'true');
 } 
 else {
 	console.log('err');
}
};	

var showWorkout = document.getElementById('btnworkpos');
showWorkout.addEventListener('click', exerciseForm, false);


module.exports = showWorkoutTable;
module.exports = exerciseForm;
module.exports = showWorkout;
},{}]},{},[1]);
