const express = require('express');
const router = express.Router();
const fs = require('fs');
const multer  = require('multer')
const upload = multer({ dest: './tmp/' })

router.post('/image',upload.single('file'), function(req, res, next) {
	var filePath = './' + req.file.path;
    // 文件类型
    var fileType = req.file.mimetype;
    var lastName = '';
    switch (fileType){
        case 'image/png':
            lastName = '.png';
            break;
        case 'image/jpeg':
            lastName = '.jpg';
            break;
        default:
            lastName = '.png';
            break;
    }
    // 构建图片名
    var fileName ='public/images/' +Date.now() + lastName;
    fs.rename(filePath,fileName,function(err){
    	if(err){
    		res.send("上传失败！")
    	}else{
    		//删除临时文件
    		fs.unlink(filePath, function() {});
    		res.send("上传成功！")
    	}
    })
});

router.post('/video',upload.single('file'), function(req, res, next) {
	var filePath = './' + req.file.path;
    // 文件类型
    var fileType = req.file.mimetype;
    var lastName = '';
    switch (fileType){
        case 'video/webm':
            lastName = '.webm';
            break;
        case 'video/ogg':
            lastName = '.ogg';
            break;
        case 'audio/mpeg':
            lastName = '.mpeg';
            break;
        case 'audio/ogg':
            lastName = '.ogg';
            break;
        default:
            lastName = '.mp4';
            break;
    }
    // 构建文件名
    var fileName ='public/videos/' +Date.now() + lastName;
    fs.rename(filePath,fileName,function(err){
    	if(err){
    		res.send("上传失败！")
    	}else{
    		//删除临时文件
    		fs.unlink(filePath, function() {});
    		res.send("上传成功！")
    	}
    })
});

router.post('/base64',function(req, res, next) {
	var body=req.body;
	if(body.base64){
		//构建文件名
		var path = 'public/icon/'+ Date.now() +'.png';
		//去头部
    	var base64 = body.img.replace(/^data:image\/\w+;base64,/, "");
    	var dataBuffer = new Buffer(base64, 'base64');
        fs.writeFile(path,dataBuffer,function(err){
            if(err){
                res.send("上传失败！")
            }else{
               	res.send("上传成功！")
            }
        })
	}
});

module.exports = router;
