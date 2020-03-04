//连接mysql
var mysql=require('mysql');

var pool=mysql.createPool({
  host     : 'localhost',
  user     : 'root', 
  password : 'a123',
  database : 'project'
});

function query(sql,sqlobj,callback) {
  pool.getConnection(function (err, connection) {
      // Use the connection
      connection.query(sql,sqlobj,(err, rows) =>{
      //console.log('进入了查询',sql,err)
        connection.release();//释放链接
          callback(err, rows);
      });
  });
}

exports.query = query;


