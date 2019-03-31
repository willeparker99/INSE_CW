const mysql = require('mysql2/promise');
const config = require('./dbConf');
const globalConnection = mysql.createConnection(config.mysql);

async function getDeals(res) {
  const myConn = await init();
  const [rows] = await myConn.execute('SELECT * FROM Deal');
  var deals = JSON.stringify(rows);
  return deals;
}
async function getFav(res,usr){
  const myConn = await init();
  const [rows] = await myConn.execute(`SELECT * FROM Fav WHERE user = '${usr}'`);
  var fav = JSON.stringify(rows);
  return fav;
}
module.exports = {
  getDeals : getDeals
};
/*
connection to db
*/
let sqlPromise = null;

async function init() {
  if (sqlPromise){
    return sqlPromise;
  }
  sqlPromise = newConnection();
  return sqlPromise;
}
async function newConnection() {
  const sql = await mysql.createConnection(config.mysql);

  sql.on('error', (err) => {
    console.error(err);
    sql.end();
  });
  return sql;
}
async function releaseConnection(connection) {
  await connection.end();
}
