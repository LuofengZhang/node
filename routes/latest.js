var mysql = require('mysql');
var query = require('../config/DBConfig');
var userSQL = require('../config/Usersql');
var ajax = require('../config/http')

setInterval(function(){
	ajax({
		url:"http://news.at.zhihu.com/api/4/news/latest",
		type:"GET",
		data:{},
		success:function(data){
			var stories=JSON.parse(data).stories;
			for (var i=0;i<stories.length;i++) {
				(function(i){
					var createtime=new Date().getTime();
					query(userSQL.insertnews,[stories[i].id,stories[i].images[0],stories[i].title,createtime],function(err,result){
						if(result){
							console.log(`${i}已成功`)
						}else{
							console.log(`${i}已存在`)
						}
						
					})
				})(i)
			};	
		},
		error:function(err){
			console.log("失败")
		}
	})
},10000)
