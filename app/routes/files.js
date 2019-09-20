const express = require('express')
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const router = express.Router()

router.use(multer({dest:'./public/img'}).any())


router.post('/file',(req,res)=>{
	var f = req.files[0]
	console.log(f)
	var oldname = f.filename
	var newname = oldname+path.parse(f.originalname).ext
	fs.renameSync('./public/img/'+oldname,'./public/img/'+newname)
	res.send(newname)
})







module.exports = router
