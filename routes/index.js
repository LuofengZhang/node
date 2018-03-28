var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//res.render('index', { title: 'Express' });
	var arr=[
		{
			name:"张三",
			age:"12",
			sex:"女"
		},
		{
			name:"李四",
			age:"12",
			sex:"男"
		},
		{
			name:"王二",
			age:"12",
			sex:"女"
		},
		{
			name:"麻子",
			age:"12",
			sex:"女"
		},
		
	]
	res.json(arr)
});

module.exports = router;
