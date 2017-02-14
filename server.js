const express = require('express');
const statusCodes = require('./data/status-codes.json');

const app = express();

app.get("/code/:statusCode", function(req, res){
	const statusCode = req.params.statusCode;
	const codesWeWant = statusCodes.filter(item => item.code == statusCode);
	res.json(codesWeWant[0]);
});

// add your routes here :)

app.listen(8080);

module.exports = app;
