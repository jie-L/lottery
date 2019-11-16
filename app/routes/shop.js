var express = require('express');
var fs = require('fs')
var router = express.Router();

router.get('/hq', function (req, res) {
  var shoplist = eval(fs.readFileSync('./goushop.txt', 'utf8'))
  var pointlist = eval(fs.readFileSync('./goupoint.txt', 'utf8'))
  //     console.log(shoplist)
  res.send({ shoplist: shoplist, pointlist: pointlist })
})

//金币买商品换模拟金
router.post('/gm', function (req, res) {
  var json = req.body
  var shoplist = eval(fs.readFileSync('./goushop.txt', 'utf8'))
  var user = eval(fs.readFileSync('./login.txt', 'utf8'))
  jinbi = 0
  for (var i = 0; i < user.length; i++) {
    if (user[i].account == json.username) {
      jinbi = user[i].usercoin
    }
  }
  var goldcoin = ''
  var coin = ''
  var moni = ''
  for (var i = 0; i < shoplist.length; i++) {
    if (shoplist[i].shopid == json.shopid) {
      goldcoin = shoplist[i].goldcoin
    }
  }
  if ((jinbi - goldcoin) < 0) {
    res.send({ type: '金币不足，请联系客服充值' })
  } else {
    for (var i = 0; i < user.length; i++) {
      if (user[i].account == json.username) {
        user[i].usercoin -= goldcoin
        user[i].usermoni += goldcoin * 10
        coin = user[i].usercoin
        moni = user[i].usermoni
      }
    }

    var jbgmjl = eval(fs.readFileSync('./jbgmjl.txt', 'utf8'))
    if (jbgmjl.length > 0) {
      for (var i = 0; i < jbgmjl.length; i++) {
        if (jbgmjlr[i].username == json.username) {
          jbgmjlr[i].gmjl.push(json.shopid)
        }
      }
    } else {
      jbgmjl.push({ username: json.username, gmjl: [json.shopid] })
    }

    fs.writeFileSync('./login.txt', JSON.stringify(user), 'utf8');
    fs.writeFileSync('./jbgmjl.txt', JSON.stringify(jbgmjl), 'utf8');


    res.send({ type: '购买成功', usercoin: coin, usermoni: moni })

  }

})

//模拟金下注换积分
router.post('/zhu', function (req, res) {
  var json = req.body
  console.log(json)
  var user = eval(fs.readFileSync('./login.txt', 'utf8'))
  var usermoni = 0
  var moni = ''
  var point = ''
  for (var i = 0; i < user.length; i++) {
    if (user[i].account == json.username) {
      usermoni = user[i].usermoni
    }
  }
  usermoni = usermoni - json.monijin
  if (usermoni < 0) {
    res.send({ type: '模拟金不足，请到购买页购买商品兑换' })
  } else {
    for (var i = 0; i < user.length; i++) {
      if (user[i].account == json.username) {
        user[i].usermoni = usermoni
        // user[i].userpoint += json.monijin * 100
        moni = user[i].usermoni
        point = user[i].userpoint
      }
    }

    var gmjl = eval(fs.readFileSync('./gmjl.txt', 'utf8'))
    var istypes = false
    var index = ''
    if (gmjl.length > 0) {
      console.log('y', 'length', gmjl.length)
      for (var i = 0; i < gmjl.length; i++) {
        if (gmjl[i].username == json.username) {
          istypes = true
          index = i
        }
      }
      if (istypes) {
        console.log(index)
        gmjl[index].shoplist = gmjl[index].shoplist.concat(json.shoplist)
      } else {
        gmjl.push({ username: json.username, shoplist: json.shoplist })
      }
    } else {
      console.log('n', 'length', gmjl.length)
      gmjl.push({ username: json.username, shoplist: json.shoplist })
    }

    fs.writeFileSync('./login.txt', JSON.stringify(user), 'utf8');
    fs.writeFileSync('./gmjl.txt', JSON.stringify(gmjl), 'utf8');

    res.send({ type: '投注成功', data: gmjl, moni: moni, point: point })
  }

})

//积分兑换商品
router.post('/dh', function (req, res) {
  var json = req.body
  var goupoint = eval(fs.readFileSync('./goupoint.txt', 'utf8'))
  var user = eval(fs.readFileSync('./login.txt', 'utf8'))
  jifen = 0
  for (var i = 0; i < user.length; i++) {
    if (user[i].account == json.username) {
      jifen = user[i].userpoint
    }
  }
  var point = ''
  var coin = ''
  var moni = ''
  for (var i = 0; i < goupoint.length; i++) {
    if (goupoint[i].shopid == json.shopid) {
      point = goupoint[i].goldcoin
    }
  }
  if ((jifen - point) < 0) {
    res.send({ type: '积分不足，请下注兑换' })
  } else {
    for (var i = 0; i < user.length; i++) {
      if (user[i].account == json.username) {
        user[i].userpoint -= point
        jifen = user[i].userpoint
      }
    }

    var jfdhjl = eval(fs.readFileSync('./jfdhjl.txt', 'utf8'))
    if (jfdhjl.length > 0) {
      for (var i = 0; i < jfdhjl.length; i++) {
        if (jfdhjl[i].username == json.username) {
          jfdhjl[i].dhjl.push(json.shopid)
        }
      }
    } else {
      jfdhjl.push({ username: json.username, dhjl: [json.shopid] })
    }

    fs.writeFileSync('./login.txt', JSON.stringify(user), 'utf8');
    fs.writeFileSync('./jfdhjl.txt', JSON.stringify(jfdhjl), 'utf8');

    res.send({ type: '兑换成功', point:jifen})

  }

})


module.exports = router;
