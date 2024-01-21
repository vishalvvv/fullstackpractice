var express = require('express');
var router =express.Router();

// router level middleware
function auth(req,res,next){
    console.log("middleware invoked!");
    console.log(req.headers);
    console.log(req.headers.token);
     if(req.headers.token == 9899){
         next();
     }
     else
     {
         res.status(401).send("unauthorized access, invalid token");
     }
}
router.use(auth);
router.get('/users', (req,res) => {
    res.send({"name":"sai"})
})

router.get('/user/:id', (req,res) => {
      var id =req.params.id;

      if(id == 101){
          res.send({id:101, name:"kiran"})
      }
})

module.exports = router;
 