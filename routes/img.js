var express = require('express');
var router = express.Router();
var fs = require('fs');
// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('../db/DBConfig');
var userSQL = require('../db/usersql');
// 使用DBConfig.js的配置信息创建一个MySQL连接池

var pool = mysql.createPool(dbConfig.mysql);

router.post('/',function(req,res,next){
	//预设返回状态
	var fanhui={"code":404,"log":"连接失败"}
	// 从连接池获取连接 
	var param = req.body;
	if(param.img){
　　　　 	var path = 'public/icon/'+ Date.now() +'.png';
        var base64 = param.img.replace(/^data:image\/\w+;base64,/, "");
        var img=path.replace(/public/, "");
        var img='http://zhchina.top:8040'+img
        var dataBuffer = new Buffer(base64, 'base64');
        fs.writeFile(path,dataBuffer,function(err){
            if(err){
                console.log(err);
            }else{
               	res.json({"img":img});
            }
        })
        pool.getConnection(function(err, connection){
			 if (param.uid) {
			 	// 建立连接 查找一个用户信息 
				connection.query(userSQL.updataimg,[img,param.uid],function(err,result){
					if(result) {
						console.log("插入成功")
					}else{
						console.log("插入失败")
					}
					connection.release();
			  	});
			 }
		});
	}
});
module.exports = router;