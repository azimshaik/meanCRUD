var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

var db = mongojs('mongodb://azimshaik:password@ds131119.mlab.com:31119/star-wars-quotes',['tasks']);

router.get('/tasks',function(req,res,next){
        //res.send('TASKS API');
        db.tasks.find(function(err,tasks){
        	if(err){
        		res.send(err);
        	}
        	res.json(tasks);
        });
});

module.exports = router;


