const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const serverless = require('serverless-http');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Routes
require('../routes/people')(router);

app.use(router);
app.use('/.netlify/functions/server', router);

module.exports = app;
module.exports.handler = serverless(app);
