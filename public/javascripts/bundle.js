(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// This script deals mostly with client-side javascript functionality - mainly buttons.

//separated javascript control buttons on my_etools.ejs and 
//to prevent null errors with exerciseForm()
//to show the registration form 

function registerUser() {

var registerDiv = document.getElementById('registerDiv');


 if (registerDiv.hasAttribute('hidden')) {
 registerDiv.removeAttribute('hidden');
 } 
 else {
 	console.log('err');
}
};	

var showRegister = document.getElementById('btntest4');
showRegister.addEventListener('click', registerUser, false);


var homebtn



module.exports = registerUser;
module.exports = showRegister;

},{}]},{},[1]);
