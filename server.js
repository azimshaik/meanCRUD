console.log("May node be with you");

const express = require('express');
const app = express();

app.listen(3000,function(){
	console.log('listening on 3000');
})

app.get('/',function(req,res){
	//do something
	res.send('Hello world');
})
