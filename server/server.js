"use strict";
const express = require("express");
const app = express();
const db = require("./db");

app.use(express.static('static'));

app.get('/deals', async function(req,res){
  res.send(await db.getDeals(res));
});
app.get('/fav/:usr', async function(req,res){
  res.send(await db.getFav(res,req.params.usr));
});
app.get('/upFav/:usr/:id', function(req,res){
  db.upFav(req.params.usr, req.params.id);
  return res.redirect(`/home.html#${req.params.id}`);
});
app.get('/remFav/:usr/:id', function(req,res){
  db.remFav(req.params.id,req.params.usr)
  return res.redirect(`/home.html#${req.params.id}`);
});
app.listen(8080);
