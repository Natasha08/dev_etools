(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var registerDiv = document.getElementById('registerDiv');


function registerUser() {

 if (registerDiv.hasAttribute('hidden')) {
 registerDiv.removeAttribute('hidden');
 } 
 else {
 	console.log('err');

};	
};
var showRegister = document.getElementById('btntest4');

showRegister.addEventListener('click', registerUser, false);

module.exports = registerUser;
module.exports = showRegister;






// var ninja = require('./ninja');

//btncall.addEventListener('click', registerUser, false);

// window.addEventListener("load", btncall, false);

// var btn = new ninja();
// var btncall = document.getElementById('btntest4');
//  btncall.addEventListener('click', btn.RegisterUser, false);

//btn.btncall.addEventListener('click', btn.registerUser, false);



// var showRegister = document.getElementById('btntest4');
// showRegister.addEventListener('click', registerUser, false);



// function registerUser(formid, attribute) {

// if(document.getElementById('formid')) {

//    if (registerDiv.hasAttribute('attribute')) {
//    registerDiv.removeAttribute('attribute');
//    } 
//    else {
//  	console.log('err');
// }
// };	

// registerUser('registerDiv', 'hidden');



// module.exports = registerUser;
// module.exports = showRegister;

},{}]},{},[1]);
