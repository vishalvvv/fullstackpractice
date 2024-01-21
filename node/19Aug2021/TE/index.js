var express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine','pug');
app.get('/',function(req,res){
    res.render('index');
})
app.post('/login',function(req,res){
console.log(req.body);
})
app.listen(9011,function(){
    console.log("server started!")
})