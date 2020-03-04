var express = require('express');

var db = require('../db/mysql');

var router = express.Router();

var $sql = require('../api/sqlMap');


// 引入 jwt
const jwt = require('jsonwebtoken')
// 解析 token 用的密钥
const SECRET = 'token_secret'





//查询测试
router.get('/all', (req, res) => {
  var sql = $sql.user.All;

  db.query(sql, function (err, result) {

    if (err) {
      console.log(err)

    }
    // console.log(result)

    res.send(result);
  })
})



// 删除操作

router.post('/delete', (req, res) => {
  var sql = $sql.user.del
  var del = req.body.id;
  db.query(sql, del, function (err, index) {

    if (err) {
      console.log(err)
    }
    console.log(index)

    res.send('删除成功');
  })

})





//注册新增

router.post('/add', (req, res) => {

  var sql = $sql.user.add;

  var props = req.body;

  //console.log(props)
  // console.log(sql)
  //新增注册[]
  db.query(sql,
    [
      props.name, props.pwss
    ], function (err, rowe) {

      res.send("true");
    })



});





//登录用户密码校验
router.post('/verify', (req, res) => {

  var props = req.body;

  // console.log(props)
  var sql = "select * from user where name='" + props.name + "'and pwss='" + props.pwss + "'";
  db.query(sql, function (err, rowe) {

    if (rowe[0] != undefined) {
      res.send(rowe)
    }
  })



});



// 修改用户账号密码


router.post('/Aupdate', (req, res) => {

  var sql = $sql.user.upd

  var upprops = req.body;

  //console.log(upprops)
  
  db.query(sql,
    [
      upprops.name,upprops.pwss,upprops.id
    ], function (err, rowe) {
  console.log(rowe)
      res.send("修改成功！");

    })



});





// -----------------------------------------------------

// 查询所有anime

router.get('/Aall', (req, res) => {
  var sql = $sql.anime.Aall;

  db.query(sql, function (err, result) {

    if (err) {
      console.log(err)

    }
    // console.log(result)

    res.send(result);
  })
})




// 新增----动漫
router.post('/Aadd', (req, res) => {

  var sql = $sql.anime.Aadd;

  var aprops = req.body;

  //console.log(props)
  // console.log(sql)
  //新增注册[]
  db.query(sql,
    [
      aprops.aurl, aprops.aname, aprops.alx, aprops.anoe, aprops.atexts, aprops.adata, aprops.apf
    ], function (err, rowe) {

      res.send("true");
    })



});




// 修改动漫数据


router.post('/Aupdanime', (req, res) => {

  var sql = $sql.anime.Aupdate
  var updprops = req.body;

  //console.log(upprops)
  
  db.query(sql,
    [
      updprops.aurl,updprops.aname,updprops.alx,updprops.anoe,updprops.atexts,updprops.adata,updprops.apf,updprops.ano
    ], function (err, rowe) {
  console.log(rowe)
      
  if(err){
    res.send(err);
  }
      res.send("修改成功！");

    })



});




// 删除----动漫



router.post('/Adelete', (req, res) => {
  var sql = $sql.anime.Adal;
  var del = req.body.ano;
  db.query(sql, del, function (err, index) {

    if (err) {
      console.log(err)
    }
    console.log(index)

    res.send('删除成功');
  })

})







module.exports = router;


