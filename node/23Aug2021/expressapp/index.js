var express = require('express');
var app = express();
app.use(express.json());

var mongoose = require('mongoose');
var UserRoute = require('./routes/user.route');

mongoose.connect("mongodb://localhost/expressapp",{useNewUrlParser: true,useUnifiedTopology: true} , function(error){
    if(error){
        console.log('error',error.message)
    }
    else{
        console.log("connected to db");
    }
})
app.use(UserRoute);
app.listen(9011, function(){
    console.log("server started!!!");
})