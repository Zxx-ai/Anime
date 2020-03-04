var express = require('express');
var app = express();

var userApi = require('./api/userApi')

var body = require('body-parser');



var session = require('express-session');
var redisStore = require('connect-redis')(session);



// session
app.use(session({
  name: 'session-name', // 这里是cookie的name，默认是connect.sid
  secret: 'my_session_secret', // 建议使用 128 个字符的随机字符串
  resave: true,
  saveUninitialized: false,
  cookie: { maxAge: 60 * 1000, httpOnly: true }
}));



// 在框架中注册 body-parser
app.use(body.urlencoded({ extended: false }))
app.use(body.json())

app.all("/*", function(req, res, next) {
  // 跨域处理
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next(); // 执行下一个路由
});


//查询api路由
app.use('/api/user',userApi);
// 删除用户
app.use('/api/userdel',userApi)

//注册
app.use('/api/adduser',userApi)
//登录校验api路由
app.use('/api/userverify',userApi)

// 用户修改
app.use('/api/upduser',userApi)

// ------------------------------------------------------

//查询所有动漫
app.use('/api/anime',userApi)


// 新增动漫
app.use('/api/animeadd',userApi)

// 修改动漫
app.use('/api/updanime',userApi)

// 删除动漫
app.use('/api/animedel',userApi)






app.listen(4000, ()=>{

console.log("serve启动了");

})