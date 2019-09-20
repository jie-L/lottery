const express = require('express')
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const router = express.Router()

router.use(multer({dest:'./assets/title_img'}).any())

router.post('/post',(req,res)=>{
	var f = req.files[0]
	console.log(f)
	var oldname = f.filename
	var newname = oldname+path.parse(f.originalname).ext
	fs.renameSync('./assets/title_img/'+oldname,'./assets/title_img/'+newname)
	res.send(newname)
})







module.exports = router
