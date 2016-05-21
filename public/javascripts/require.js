var mysql = require('mysql');
var connection = mysql.createConnection({

  host            : 'localhost',
  user            : 'tulsi',
  password        : 'owei93ihr9h$',
  database        : 'freetools'

});

connection.query('USE freetools'); 

module.exports = connection;


// var mysql = require('mysql');
// var pool = mysql.createPool({
//   connectionLimit : 10,
//   host            : 'localhost',
//   user            : 'tulsi',
//   password        : 'Yoni3454!',
//   database        : 'freetools'
// });

// module.exports = pool;
