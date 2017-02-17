const express = require('express');
const statusCodes = require('./data/status-codes.json');

const app = express();

app.get("/code/:code", function(req, res){
	const code = req.params.code;
	const codesWeWant = statusCodes.filter(item => item.code == code);
	res.json(codesWeWant[0]);
});
// add your routes here :)
app.get('/code',(req, res)=>{
	const codesWithImages = statusCodes.map(({ code, phrase }) => (
		{ code, phrase, image: `https://http.cat/${code}.jpg` }
			));
	res.json(codesWithImages);
})

app.listen(8080);

module.exports = app;
