"use strict";
const express = require("express");
const app = express();
const db = require("./db");

app.use(express.static('static'));

app.get('/deals', async function(req,res){
  res.send(await db.getDeals(res));
})
app.get('/fav/:usr', async function(req,res){
  res.send(await db.getFav(res,req.params.usr));
})
app.listen(8080);
