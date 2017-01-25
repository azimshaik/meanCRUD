console.log("May node be with you");

const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();
var db
// MongoClient.connect('mongodb://azim:Az1001*#im@ds131119.mlab.com:31119/star-wars-quotes',function(err,database){
// 	if(err) 
// 		throw err;
// 	db = database
// 	app.listen(3000,function(){
// 		console.log('listening on 3000')
// 	})

// })
app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000,function(){
	console.log('listening on 3000');
})

app.get('/',function(req,res){
	//do something
	//res.send('Hello world');
       res.sendFile(__dirname + '/index.html')
	
})
app.post('/quotes',function(req,res) {
	db.collection('quotes').save(req.body, function(err, result){
		if(err) return console.log(err);
		console.log('saved to database')
		res.redirect('/')
	})
})
