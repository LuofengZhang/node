const https = require('https');
var Url = require("url");  
var querystring = require('querystring');  
  
var ajax=function(obj){
	if((typeof obj) != "object"){
		console.log(typeof obj)
        console.log("请求方式错误！");  
        return;  
    }
	if(obj.url == null || obj.url == ""){  
        console.log("URL错误！");  
        return;  
    }
	if(obj.data != null){  
        obj.url += "?";  
        for (var key in obj.data) {  
            obj.url = obj.url + "&" + key + "=" + obj.data[key];  
        }  
    }
	https.get(obj.url, function(res) {
		res.on('data', function(data) {
			data=JSON.parse(data.toString())
			if(obj.success){
				obj.success(data)
			}
		});
		res.on('error', function(err) {
			if(obj.error){
				obj.error(err)
			}
		});
	})
}

module.exports = ajax;