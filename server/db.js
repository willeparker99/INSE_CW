const mysql = require('mysql2/promise');
const config = require('./dbConf');
const globalConnection = init();

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


async function init() {
  let sqlPromise = null;
  if (sqlPromise){
    return sqlPromise;
  }
  sqlPromise = newConnection();
  return sqlPromise;
}
async function newConnection() {
  let sql = null
  try{
<<<<<<< HEAD
    const sql = await mysql.createConnection(config.mysql);
    return sql;
=======
    sql = await mysql.createConnection(config.mysql);
>>>>>>> d7c3db9e9c7f3e53850c1d5f8a387a4385fe13c6
  }
  catch(e){
    console.log("Cannot connect to db \nHave you modified dbConf.json correctly?");
    return e;
  }
<<<<<<< HEAD
=======
  return sql;

>>>>>>> d7c3db9e9c7f3e53850c1d5f8a387a4385fe13c6
}
async function releaseConnection(connection) {
  await connection.end();
}
