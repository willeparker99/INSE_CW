const mysql = require('mysql2/promise');
const config = require('./dbConf');
const globalConnection = init();

async function getDeals(res) {
  const myConn = await init();
  const [rows] = await myConn.execute('SELECT * FROM Deal;');
  var deals = JSON.stringify(rows);
  return deals;
}
async function getFav(res,usr){
  const myConn = await init();
  const [rows] = await myConn.execute(`SELECT * FROM Fav WHERE user = '${usr}';`);
  var fav = JSON.stringify(rows);
  return fav;
}
async function upFav(usr,id){
  const sql = await init();
  const [check] = await sql.execute(`SELECT * FROM Fav WHERE DealId = ${id};`);
  if(check.length === 0) {
    const insertQuery = sql.format(`INSERT INTO Fav (DealId, user) VALUES(${id}, ${usr});`);
    await sql.query(insertQuery);
  }
}
async function remFav(id,usr){
    const sql = await init();
    sql.query(`DELETE FROM Fav WHERE DealId = '${id}' and user = '${usr}';`);
}
module.exports = {
  getDeals : getDeals,
  getFav: getFav,
  upFav: upFav,
  remFav: remFav
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
    sql = await mysql.createConnection(config.mysql);
  }
  catch(e){
    console.log("Cannot connect to db \nHave you modified dbConf.json correctly?");
    return e;
  }
  return sql;

}
async function releaseConnection(connection) {
  await connection.end();
}
