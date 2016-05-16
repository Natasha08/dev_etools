var mysql      = require('mysql');
var pool = mysql.createConnection({
  host     : 'localhost',
  user     : 'tulsi',
  password : 'Yoni3454!',
  database : 'freetools'
});

module.exports = pool;