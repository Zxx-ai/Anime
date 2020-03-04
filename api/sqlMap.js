// sql语句
var sqlMap = {
  // 用户
  user: {
      All:'select * from user',
      add: 'insert into user values (null,?,?,null)',
      del: 'delete from user where id = ?',
      upd: 'update user set name=?,pwss=? where id=?'      
  },
  anime: {
       Aall: 'select * from anime',
       Adal: 'delete from anime where ano = ?',
       Aadd: 'insert into anime values (null,?,?,?,?,?,?,?)',
    Aupdate: 'update anime set aurl=?,aname=?,alx=?,anoe=?,atexts=?,adata=?,apf=? where ano = ?'
 
  }




}

module.exports = sqlMap;
