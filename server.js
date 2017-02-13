const express = require('express');
const statusCodes = require('./data/status-codes.json');

const app = express();
app.get('/code/:code', (req, res) => {
  const code = req.params.code;
  const codeResult = statusCodes.filter((statusContent) => { 
    return statusContent.code === code;
  });
  if (codeResult.length === 0) {
    res.sendStatus('404');
  } else {
    res.json(codeResult[0]);
  }
});

app.listen(3000);

module.exports = app;
