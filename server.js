const express = require('express');
const statusCodes = require('./data/status-codes.json');

const app = express();

// add your routes here :)
app.get('/code/:status?', (req, res) => {
  // just to store the vslue of url's parameter
  const status = req.params.status;
  // optional url type (when the status is not been requested(the question mark in the routing in get method))
  if(!status) {
     return res.json(
       statusCodes.map((val) =>{
         return ({
          "code": val.code,
          "phrase": val.phrase,
          "image": `https://http.cat/${val.code}.jpg`
         })
       })
     )
  }

  // storing the reqeusted status to statusCode
  const statusCode = statusCodes.find((value) => {
    // find the matching with requested status
    return value.code === status;
  });

  if(!statusCode){
    return res.sendStatus(404);
  }

  return res.json(statusCode);
});

app.listen(8080);

module.exports = app;
