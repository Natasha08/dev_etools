var mysql = require('mysql');
var db = require('./db_secret.js');
//var connection = mysql.createConnection({

var pool = mysql.createPool(db, {
  connectionLimit : 100,	

  host            : 'localhost',
  user            : db.user,
  password        : db.password
});

pool.query('USE freetools'); 


module.exports = pool;