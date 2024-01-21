var http = require('http');
var emailValidator = require('email-validator');
var email="vishal@gmail.com";
var server = http.createServer(function(request,response){
    if(emailValidator.validate(email)){
        response.end("valid Email");
    }
    else{
        response.end("invalid Email");
    }
   

})

server.listen(9087,function(){
    console.log("server started!!");
})


// http://localhost:9087/