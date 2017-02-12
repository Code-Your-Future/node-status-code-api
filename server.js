const express = require('express');
const statusCodes = require('./data/status-codes.json');

const app = express();

// add your routes here :)

app.listen(8080);

module.exports = app;
