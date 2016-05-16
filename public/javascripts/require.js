var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'tulsi',
  password : 'Yoni3454!',
  database : 'freetools'
});

module.exports = connection;

