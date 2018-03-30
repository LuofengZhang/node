var mysql = require('mysql');
var query = require('../config/DBConfig');
var userSQL = require('../config/Usersql');

query(userSQL.alluser,function(err,result){
	if(result){
		console.log(result)
	}
	if(err){
		console.log(err)
	}
})
