const express = require('express');
const statusCodes = require('./data/status-codes.json');

const app = express();
app.get("/code/:code",function (req, res){
 	const status = req.params.code;
 	for(let i=0; i<statusCodes.length; i++){
 		if(statusCodes[i].code===status)
 			res.send(statusCodes[i])
 	}
}) 
app.get('/code',function (req, res){
	const codesWithImages = statusCodes.map(({ code, phrase }) =>  ({ code, phrase, image : `https://http.cat/${code}.jpg` })); 
	res.json(codesWithImages);
});
// add your routes here :)

app.listen(8080,function (){
	console.log("Server is findDOMNode(ReactComponent)")
});


module.exports = app;
