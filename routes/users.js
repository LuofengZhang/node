var express = require('express');
var router = express.Router();
var config = require('../config/config')
var ajax = require('../config/https')
var mysql = require('mysql');
var query = require('../config/DBConfig');
var userSQL = require('../config/Usersql');

router.get('/login', function(req, res, next) {
	var data=config;
	data.js_code=req.query.code;
	data.grant_type="uthorization_code";
	ajax({
		url:"https://api.weixin.qq.com/sns/jscode2session",
		data:data,
		success:function(data){
			if(data.openid){
				// 从连接池获取连接
				query(userSQL.selectuser,data.openid,function(err,result){
					if(result){
						if(result.length>=1){
							var datas={}
							datas.openid=result[0].openid;
							datas.createtime=result[0].createtime;
							if(result[0].City){
								datas.City=result[0].City;
							}
							if(result[0].username){
								datas.username=result[0].username;
							}
							res.send(datas)//如果通过openid查到数据
						}else{
							var createtime=new Date().getTime();
							query(userSQL.insertuser,[data.openid,createtime],function(err,result){
								if(result){
									res.send({
										openid:data.openid,
										createtime:createtime
									})
								}
								if(err){
									res.send(err)
								}
							})
						}
					}
					if(err){
						res.send(err)
					}
				})
			}else{
				res.send('err');//获取openid失败
			}
		},
		error:function(){
			res.send('err');//向微信发送请求失败
		}
	})
});

module.exports = router;


