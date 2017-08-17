const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

consign()
  .include('src/routes')
  .then('src/services')
  .then('src/controllers')
  .into(app);


module.exports = app;
