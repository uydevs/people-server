const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const serverless = require('serverless-http');
const mongoose = require('mongoose');

const config = require('../config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Mongoose Models
require('../models/person');

// Routes
require('../routes/people')(router);

app.use(router);
app.use('/.netlify/functions/server', router);

// DB connection
mongoose.connect(config.MONGO_DB_URI, {
  useNewUrlParser: true,
  dbName: 'test'
}).then(
  () => {
    console.log('Connected to DB correctly');
  },
  err => {
    console.log('Errror connecting to DB: ', err);
  }
);

module.exports = app;
module.exports.handler = serverless(app);
