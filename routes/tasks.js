var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

var db = mongojs('mongodb://azimshaik:password@ds131119.mlab.com:31119/star-wars-quotes',['tasks']);
//Get All Tasks
router.get('/tasks',function(req,res,next){
        //res.send('TASKS API');
        db.tasks.find(function(err,tasks){
        	if(err){
        		res.send(err);
        	}
        	res.json(tasks);
        });
});

//Get Single Task
router.get('/tasks/:id',function(req,res,next){
        //res.send('TASKS API');
        db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)},function(err,task){
        	if(err){
        		res.send(err);
        	}
        	res.json(task);
        });
});
//Save task

router.post('/tasks',function(req,res,next){
	var task = req.body;
	if(!task.title ||(task.isDone + '')){
		res.status(400);
		res.json({
			"error": "Bad Data"
		});
	}else{
		db.tasks.save(task, function(err,task){
			if(err){
        		res.send(err);
        	}
        	res.json(task);
		});
	}
});

//Delete Task
router.delete('/tasks/:id',function(req,res,next){
        //res.send('TASKS API');
        db.tasks.remove({_id: mongojs.ObjectId(req.params.id)},function(err,task){
        	if(err){
        		res.send(err);
        	}
        	res.json(task);
        });
});

//Update Task
router.put('/tasks/:id',function(req,res,next){
		var task = req.body;
		var updTask = {};
		if(task.isDone){
			updTask.isDone = task.isDone;
		}
		if(task.title){
			updTask.title = task.title;
		}
		if(!updTask){
			res.status(400);
			res.json({
				"error":"Bad Data"
			});
		}else{
			db.tasks.update({_id: mongojs.ObjectId(req.params.id)},updTask,{}, function(err,task){
        	if(err){
        		res.send(err);
        	}
        	res.json(task);
        });

		}
        //res.send('TASKS API');
        
});
module.exports = router;


