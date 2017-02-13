const express = require('express');
const statusCodes = require('./data/status-codes.json');
const app = express();

app.get('/code/:code', function (req,res) {
	var data = statusCodes.find((value) => value.code === req.params.code)
	res.json(data);
});

app.get('/code', function (req,res) {
	var data = statusCodes.map((value) => {
		var obj = {
			code: value.code,
			phrase: value.phrase,
			img: 'https://http.cat/' + value.code + '.jpg'
		}
		return obj;
	});
	res.json(data);
});

app.listen(8080);

module.exports = app;
