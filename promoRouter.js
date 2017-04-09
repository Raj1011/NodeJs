var express=require('express');
var bodyParser=require('body-parser');


var promoRouter=express.Router();
// dishRouter.use(bodyParser.json());
promoRouter.route('/')
	.all(function(req,res,next){
		res.writeHead(200,{'Content-Type':'text/plain'});

		next();
	})
	.get(function(req,res,next){
		res.end('will send all promotions to you !');
	})
	.post(function(req,res,next){
		res.end('will add the promotion '+req.body.name +' with details '+req.body.description);
	})
	.delete(function(req,res,next){
		res.end('deleting all promotions');
	});
promoRouter.route('/:promotionId')
	.all(function(req,res,next) {
	      res.writeHead(200, { 'Content-Type': 'text/plain' });
	      next();
	})

	.get(function(req,res,next){
	        res.end('Will send details of the promotion: ' + req.params.promotionId +' to you!');
	})

	.put(function(req, res, next){
	        res.write('Updating the promotion: ' + req.params.promotionId + '\n');
	    res.end('Will update the promotion: ' + req.body.name + 
	            ' with details: ' + req.body.description);
	})

	.delete(function(req, res, next){
	        res.end('Deleting promotion: ' + req.params.promotionId);
	});

module.exports = promoRouter;
