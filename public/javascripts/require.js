var mysql = require('mysql');
var pool = mysql.createPool({
  host     : 'localhost',
  user     : 'tulsi',
  password : 'Vala2114!',
  database : 'freetools'
});

module.exports = pool;



