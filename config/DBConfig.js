var mysql=require("mysql"); 

var pool=mysql.createPool({   
    host: '127.0.0.1',     
    user: 'root',   
    password: 'root',  
    database:'weixin', 
    port: 3306  
})
var query=function(sql,options,callback){  
    pool.getConnection(function(err,connection){  
        if(err){  
            callback(err,null,null);  
        }else{  
            connection.query(sql,options,function(err,results,fields){  
                //释放连接  
                connection.release();  
                //事件驱动回调  
                callback(err,results,fields);  
            });  
        }  
    });  
};


module.exports = query;