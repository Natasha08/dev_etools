var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'tulsi',
  password        : 'Yoni3454!',
  database        : 'freetools'
});

module.exports = pool;
