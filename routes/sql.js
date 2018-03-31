var mysql = require('mysql');
var query = require('../config/DBConfig');
var userSQL = require('../config/Usersql');

//查询所有
//query(userSQL.alluser,function(err,result){
//	if(result){
//		console.log(result)
//	}
//	if(err){
//		console.log(err)
//	}
//})

var name='birthday';
var type ='int';
query(userSQL.addrow,[name,type],function(err,result){
	if(result){
		console.log(result)
	}
	if(err){
		console.log(err)
	}
})