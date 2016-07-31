var mysql = require('mysql');
var db_secret = require('./db_secret.js');
//var connection = mysql.createConnection({

var db = new db_secret();

var pool = mysql.createPool({
  connectionLimit : 100,

  host            : 'localhost',
  user            : db.user,
  password        : db.password,
  database		  : db.name
});

//pool.query('USE freetools');
//console.log(pool);


module.exports = pool;
