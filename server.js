const express = require('express');
const json_Query=require('json-query');
const statusCodes = require('./data/status-codes.json');

const app = express();

app.get('/code/:code', (req, res) => {
  const code = req.params.code;  
  const codeResult = statusCodes.filter((statusContent) => { 
    return statusContent.code === code;
  });
  (codeResult.length === 0) ? res.sendStatus('404') : res.json(codeResult[0]);
});

app.get('/code', (req, res) => {
  const allCode = statusCodes.map(({code, phrase}) => (
    {code, phrase, image: 'https://http.cat/' + code + '.jpg'} ));
  res.json(allCode);
});

app.get('/search/:value', (req, res) => {
  const queryValue = req.params.value;
  const codeResult = statusCodes.filter((statusContent) => { 
    return statusContent.phrase.indexOf(queryValue) !== -1;
  });  
  res.json(codeResult);
});

app.listen(3000);

module.exports = app;
