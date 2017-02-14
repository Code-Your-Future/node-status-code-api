const express = require('express');
const statusCodes = require('./data/status-codes.json');

const app = express();
app.get('/code/:code', (req, res) => {
  const data = statusCodes.find(value => value.code === req.params.code);
  res.json(data);
});
app.get('/code', (req, res) => {
  const data = statusCodes.map((value) => {
    const obj = {
      code: value.code,
      phrase: value.phrase,
      image: `https://http.cat/${value.code}.jpg`,
    };
    return obj;
  });
  res.json(data);
});

app.listen(8080);

module.exports = app;
