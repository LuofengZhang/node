/**
 * 
 */
exports.sql={
    getPasswordById:'SELECT password,username,icon from user join user_icon  on `user`.id=user_icon.user_id where telephone=?',
    addUser:'insert into user(telephone,password,username,email) values(?,?,?,?)',
    addiconid:'call regist(?,@res)',
    createToken:'update user set token=? where telephone=?',
    getUserIcon:'select user_icon.icon,user_icon.background,username,telephone,email from user inner join user_icon ON user.id=user_icon.user_id where user.telephone=? ',
    addUserIcon:'call addUserIcon(?,?,@res)',
    addclo:'insert into putimg(usertel,img,type,imgname,price,feel,putdate) value (?,?,?,?,?,?,now())',
    changesql:'update user_icon set background=? where user_id=(select id from user where telephone=?)',
    updatep:'update user set password=? where telephone=?',
   	changee:'update user set email=? where telephone=?',
   	changen:'call updaten(?,?)'
};
exports.goodssql={
    getpic:'select goodspic,goodsid from usergoods limit ?,?',
  getpicg:'call girlsshow()',
  getpicl:'select * from usergoods limit ?,8',
  search:'select * from usergoods where goodsname like ?',
    getAll:'SELECT * from usergoods where goodspic=?'
}

exports.comsql={
    insertcommend:'call insertcommend(?,?,?)',
    showmycommend:'select * from share where userid=(select id from user where telephone=?) order by sharedate desc',
    showmyback:'select userback.* from share join userback on `share`.shareid=userback.shareid where userid=(select id from user where telephone=?) order by sharedate desc',
    delmys:'call delmys(?)',
    showcommend:'call commentshows()',
    insertback:'call insertback(?,?,?,@res)',
     addthum:'update share set thum=? where shareid=?',
     insertfoot:'call insertfoot(?,?)',
    showdetail:'select * from usergoods where goodsid=?',
    addshop:'call addshop(?,?,?,?,@res)',
    showput:'select * from putimg order by putdate desc limit 0,8',
    showshop:'select * from shopping where user_id=(select id from user where telephone=?) ',
    showflow:'call showflow(?)',
    addorder:'insert into user_order(goodsid,ordnumber,usertel,goodssize) values(?,?,?,?)',
    delorder:'delete from user_order where goodsid=?',
    dels:'delete from user_order where usertel=?',
    addloves:'update usergoods set praise=praise+1 where goodsid=?',
    shopshow:'call allshows(?)',
    delshop:'delete from shopping where goodsid=?',
    deldan:'delete from user_order where goodsid=? and usertel=?',
    addhome:'call addhome(?,?,?,?,?,?,@res)',
    orderall:'call orderallshow(?)',
    delhome:'delete from user_add where addid=?',
    chhome:'call chhome(?,?)',
    updatehome:'update user_add set address=?,detailadd=?,shopname=?,shoptel=?,postem=? where addid=?',
    Showf:'select * from usergoods limit 112,21',
    insert:'INSERT INTO user(uid,password) VALUES(?,?)',
    updataemail:'update user set email=? where uid=?',
    updataname:'update user set name=? where uid=?',
    updatapassword:'update user set password=? where uid=?',
    updataimg:'update user set img=? where uid=?',
    getUserById:'SELECT * FROM user WHERE uid = ? ',
    queryUser:'SELECT * FROM user',
    insertnews:'INSERT INTO toutiao(id,images,title) VALUES(?,?,?)',
    queryToutiao:'SELECT * FROM toutiao',
    search:'SELECT * FROM toutiao WHERE title LIKE ?',
    news:'select * from toutiao order by create_time desc limit 10'
}
