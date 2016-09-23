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

// var pg = require('pg');
//
// var config = {
//   user: 'aloisia', //env var: PGUSER\
//   schema: 'public',
//   database: 'etools', //env var: PGDATABASE
//   password: 'hb10zq',
//   //table: 'food', //env var: PGPASSWORD
//   port: 5432, //env var: PGPORT
//   max: 10, // max number of clients in the pool
//   idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
// };
//
// var pool = new pg.Pool(config);
//
// pool.connect(function(err, client, done) {
//   if(err) {
//     return console.error('error fetching client from pool', err);
//   }
//
//
//   var rows = [{
//     food_id: 10581,
//     food_name: 'mango juices'
//   }, {
//     food_id: 90925 ,
//     food_name: 'popsicle juice'
//   }]
//
//   var buildStatement = function(rows) {
//     var params = []
//     var chunks = []
//     for(var i = 0; i < rows.length; i++) {
//       var row = rows[i]
//       var valueClause = []
//       params.push(row.food_id)
//       valueClause.push('$' + params.length)
//       params.push(row.food_name)
//       valueClause.push('$' + params.length)
//       chunks.push('(' + valueClause.join(', ') + ')')
//     }
//
//     // console.log("pushing", params.push(row.food_id))
//     // console.log("params", params);
//
//     return {
//       text: 'INSERT INTO food(food_id, food_name) VALUES ' + chunks.join(', '),
//       values: params
//     }
//   }
//
// client.query(buildStatement(rows), function(err, result) {
//   done();
//
//   if(err) {
//     return console.error('error running query', err);
//   }
//   console.log(result);
//   console.log(rows);
// });
//
// // client.query('select * from food', function(err, result) {
// //     done();
// //
// //     if(err) {
// //       return console.error('error running query', err);
// //     }
// //     console.log(result);
// //   });
// //
// });
//
// pool.on('error', function (err, client) {
//   console.error('idle client error', err.message, err.stack)
// })
