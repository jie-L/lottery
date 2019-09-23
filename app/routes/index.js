var express = require('express');
var router = express.Router();
const fs =require('fs')
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
var cheerio = require("cheerio");
var server = require("./curl");
var url = "https://kuai3.cjcp.com.cn/beijing/"
router.get('/aaa',(req,res)=>{
	res.send('123')
})

router.get('/kuai',(req,res)=>{
  server.download(url, function(data) {
    if (data) {
      //console.log(data);
      var kuai=[]
      console.log('----------',kuai)
      var $ = cheerio.load(data);
      $("#kjinfos1 tr").each(function(i, e) {
          // console.log($(e).html());
          // var ws=$(e).html()
          var a=[]
          $(e.children).each(function(idx,itm){
            a.push($(itm).html())
          })
          kuai.push(a)
          // kuai.push(ws)
      });
      console.log(kuai)
      console.log("done");
      fs.writeFileSync('./kuaisan.txt',JSON.stringify(kuai),'utf8')
      fs.writeFileSync('./kuaisan.txt',JSON.stringify(kuai),'utf8')
      res.send(kuai)
    } else {
        console.log("error");
    } 
  });
})



  


module.exports = router;
