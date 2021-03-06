console.log("May node be with you");

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');
var port = 3000;
var app = express();

// view engine 
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
//https://expressjs.com/en/api.html#app.engine
//to map the EJS template engine to “.html” files:
app.engine('html',require('ejs').renderFile);

//Set Static folder
app.use(express.static(path.join(__dirname,'client')));

//Body parser MW

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/',index);
app.use('/api',tasks);

app.listen(port, function(){
	console.log('Server started on port'+port);
});



