var express = require('express');
var app = express();
var multer = require('multer');
const upload = multer({dest: 'uploads/'})
app.get('/',function(req,res){
res.sendFile(__dirname+"/index.html");
})
app.post("/upload",upload.single('profile'),function(req,res){
    console.log(req.file)
})
app.listen(9011,function(){
    console.log("server started!");
})