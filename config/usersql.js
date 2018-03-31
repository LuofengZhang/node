var UserSQL = {  
    selectuser:'select * from persons where openid = ?',//通过openid查询
    insertuser:'insert into persons(openid,createtime) values(?,?)',//插入一个用户
    alluser:"select * from persons",//查询所有用户
    addrow:"alter table persons add ? ?",//增加列
    insertnews:'insert into news(newsid,images,title,createtime) values(?,?,?,?)',
};

 module.exports = UserSQL;