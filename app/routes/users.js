var express = require('express');
var fs = require('fs')
var md5 = require('md5')
var router = express.Router();

/* GET users listing. */
// 注册
router.post('/up', function (req, res) {
  var json = req.body
  json.password = md5(json.password)
  console.log(json)
  
  var json_type=true
  for(var key in json){
    if(json[key].length==0||json[key]==''){
      json_type=false
    }
  }
  if(json_type){
    var vip = eval(fs.readFileSync('./login.txt', 'utf8'))
    var vip_type = true;
    for (var i = 0; i < vip.length; i++) {
      if (vip[i].account == json.account) {
        vip_type = false
      }
    }
    if (vip_type) {
      json.password = md5(json.password)
      vip.push(json)
      fs.writeFileSync('./login.txt', JSON.stringify(vip), 'utf8');
      res.send({ type: 'yes', data: '注册成功' })
    } else {
      res.send({ type: 'no', data: '用户名重复' })
    }
  }else{
    res.send({ type: 'no', data: '参数缺失' })
  }
})

//登录
router.post('/in',function (req,res) { 
  var json = req.body;
  json.password = md5(json.password)
  console.log(json)
  var json_type=true
  for(var key in json){
    if(json[key].length==0||json[key]==''){
      json_type=false
    }
  }
  if(json_type){
    json.password = md5(json.password)
    var vip = eval(fs.readFileSync('./login.txt', 'utf8'))
    var vip_type = false;
    for (var i = 0; i < vip.length; i++) {
      if (vip[i].account == json.account && vip[i].password == json.password) {
        vip_type = true
        // data = json.url
      }
    }
    if(vip_type){
      res.send({
        type:'yes',
        data:'登录成功'
      })
    }else{
      res.send({
        type:'no',
        data:'用户名或密码不匹配'
      })
    }
  }else{
    res.send({ type: 'no', data: '参数缺失' })
  }
}) 

module.exports = router;
