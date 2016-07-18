"use strict"

var myPromise = {
  getId: () => {
    new Promise((resolve, reject) => {
      resolve(res);
      }).then((res) => {
        console.log(res);
        done();
      }).catch((err) => {
        console.log(err);
        done(err);
      });
  }
 };
 
// var myPromise = {};
// this.getId = () => {
//     new Promise((resolve, reject) => {
//       resolve(res);
//     }).then((res) => {
//       console.log(res);
//       var testRes = res;
//       done();
//     }).catch((err) => {
//       console.log(err);
//       done(err);
//     });
//   };

// return myPromise;


// var myPromise = this;

//   myPromise.getId = () => {
//     new Promise((resolve, reject) => {
//       resolve(res);
//     }).then((res) => {
//       console.log(res);
//       var testRes = res;
//       done();
//     }).catch((err) => {
//       console.log(err);
//       done(err);
//     });
//   };

module.exports = myPromise;