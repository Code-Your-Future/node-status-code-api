const express = require('express');
const statusCodes = require('./data/status-codes.json');
const app = module.exports = express();

// add your routes here :)
app.get('/code/:code', (req, res) => {
  const code = req.params.code;
  const data = statusCodes.filter(item => item.code === code)[0];
  res.json(data);
})
app.listen(8080);
