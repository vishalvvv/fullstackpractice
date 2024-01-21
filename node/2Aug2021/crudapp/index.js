var express = require('express');
var app = express();
app.use(express.json());
var users= [
    {
        name:"madonna",
        address:"Italy"
    },
    {
        name:"sharon",
        address:"Ireland"
    },
];
 // http://localhost:9012/users
  
app.get("/users",function(request,response){
    response.send(users);
})

app.post("/user",function(request,response){
      var user = request.body;
      user.push(user);
      response.send(users);
})

 // http://localhost:9012/user/demi
app.delete("/user/:name",function(req,res){
    var name = req.params.name;
    console.log(name);
    users.forEach(function(user,i){
        if(user.name == name){
            users.splice(i,1);
        }
    })
    res.send(users);
})

app.listen(9012,function(){
    console.log("server started!");
})