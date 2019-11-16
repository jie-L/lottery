var express = require('express');
var router = express.Router();
const fs =require('fs')
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
var cheerio = require("cheerio");
var server = require("./curl");

router.get('/kuai',(req,res)=>{
	var url = "https://kuai3.cjcp.com.cn/"
  var json=req.query
	url=url+json.city+'/'
	console.log('||||||||',url)
  server.download(url, function(data) {
    if (data) {
      console.log('data');
      var kuai=[]
      var $ = cheerio.load(data);
      $("#kjinfos1 tr").each(function(i, e) {
          // console.log($(e).html());
          // var ws=$(e).html()
          var a=[]
          $(e.children).each(function(idx,itm){
            a.push($(itm).text())
          })
          if(a[1].length>1){
            kuai.push(a)
            // console.log('1-------',a)
          }else{
            // console.log('0-------',a)
          }
          
          // kuai.push(ws)
      });
      console.log('开奖号码',kuai[kuai.length-1][2].split(','))

var hezhi=Number(kuai[kuai.length-1][2].split(',')[0])+Number(kuai[kuai.length-1][2].split(',')[1])+Number(kuai[kuai.length-1][2].split(',')[2])
var iszhong=false
var zhongjhm1=kuai[kuai.length-1][2].split(',')
var zhongjhm2=[]
var moni=''
var userhm=eval(fs.readFileSync('./gmjl.txt', 'utf8'))
      for(var i=0;i<userhm.length;i++){
        if(userhm[i].username==json.username){
          for(var j=0;j<userhm[i].shoplist.length;j++){
            // console.log('------------------------',userhm[i].shoplist[j].num)
            for(var s=0;s<userhm[i].shoplist[j].num.length;s++){
              // console.log(userhm[i].shoplist[j].num[s])
              if(userhm[i].shoplist[j].num[s]==hezhi){
                iszhong=true
              }
            }
            if(iszhong){
              zhongjhm2=userhm[i].shoplist[j].num
              moni=userhm[i].shoplist[j].jin
              console.log('用户中奖号码',zhongjhm2)
            }
          }
        }
      }
      fs.writeFileSync('./kuaisan.txt',JSON.stringify(kuai),'utf8')
      if(iszhong){
        var user = eval(fs.readFileSync('./login.txt', 'utf8'))
        var point=''
        for (var i = 0; i < user.length; i++) {
          if (user[i].account == json.username) {
            user[i].userpoint += moni * 100
            point = user[i].userpoint
          }
        }
        res.send({type:1,data:kuai,userhm:zhongjhm2,ksanhm:zhongjhm1,point:point})
      }else{
        res.send({type:0,data:kuai})
      }
      
    } else {
        console.log("error");
    } 
  });
})



  


module.exports = router;
