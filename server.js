console.log("May node be with you");

const express = require('express');
const app = express();

app.listen(3000,function(){
	console.log('listening on 3000');
})

app.get('/',function(req,res){
	//do something
	//res.send('Hello world');
       res.sendFile(__dirname + '/index.html')
	
})
app.post('/quotes',function(req,res) {
	console.log('Heloooooooooo!');
})
