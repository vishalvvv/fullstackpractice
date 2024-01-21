var express = require('express');

var app = express();

// application level middleware
function auth(req,res,next){
    console.log("middleware invoked!");
     if(req.headers.token == 9899){
         next();
     }
     else
     {
         res.status(401).send("unauthorized access, invalid token");
     }
}

function logger(req,res,next){
    console.log(" logger middleware invoked!");
    console.log(new Date().getDate());
    next();
}
// app.use(auth);
// app.use(logger);

// app.get("/users", function(req,res) {
//     res.send('users');
// })

// app.get("/accounts", function(req,res) {
//     res.send('accounts');
// })

app.get("/users", [auth,logger],function(req,res) {
    res.send('users');
})

app.get("/accounts", function(req,res) {
    res.send('accounts');
})

app.listen(9013, function(){
    console.log("server started!");
})