var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

consign()
    .include('src/routes')
    .then('src/services')
    .then('src/controllers')
    .into(app);


module.exports = app;