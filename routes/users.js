var express = require('express');
var router = express.Router();
var config = require('../config/config')
var ajax = require('../config/https')

router.get('/login', function(req, res, next) {
	var data=config;
	data.js_code=req.query.code;
	data.grant_type="uthorization_code";
	ajax({
		url:"https://api.weixin.qq.com/sns/jscode2session",
		data:data,
		success:function(data){
			if(data.openid){
				res.send({openid:data.openid});
			}else{
				res.send('err');
			}
		},
		error:function(){
			res.send('err');
		}
	})
	
});

module.exports = router;
