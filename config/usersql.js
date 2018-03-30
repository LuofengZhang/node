var UserSQL = {  
    selectuser:'select * from persons where openid = ?',
    insertuser:'insert into persons(openid,createtime) VALUES(?,?)',
    alluser:"select * from persons"
};

 module.exports = UserSQL;