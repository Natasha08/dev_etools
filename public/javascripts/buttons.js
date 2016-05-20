var ninja = require('./ninja');

//btncall.addEventListener('click', registerUser, false);

window.addEventListener("load", btncall, false);

var btn = new ninja('registerDiv');
var btncall = document.getElementById('btntest4');
 btncall.addEventListener('click', btn.RegisterUser, false);

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
