"use strict";
const express = require("express");
const app = express();

app.use(express.static('static'));

app.use("/js", express.static('js'));

app.use("/img", express.static('img'));

app.use("/", function(req, res){
})
app.listen(8080);