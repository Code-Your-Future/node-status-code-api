const express = require('express');
const statusCodes = require('./data/status-codes.json');

const app = express();

// add your routes here :)
app.get('/code/:code', (req,res) => {
	const theCurrentStatus = statusCodes.find(statusObject => {
		if(req.params.code === statusObject.code){
			return true;
		}

	})
	res.send(theCurrentStatus);
})

app.get('/code', (req,res)=>{
	const codesWithImages = statusCodes.map(({ code, phrase }) => (
				{ code, phrase, image: `https://http.cat/${code}.jpg` }
			));
	//console.log(codesWithImages);
	res.send(codesWithImages);
})

app.listen(8080);

module.exports = app;
