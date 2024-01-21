var express = require('express');
var router =express.Router();

router.get('/users', (req,res) => {
    res.send({"name":"sai"})
})

router.post('/user', (req,res) =>{
     console.log(req.body);
     res.send(req.body);
})

router.get('/user/:id', (req,res) => {
      var id =req.params.id;

      if(id == 101){
          res.send({id:101, name:"kiran"})
      }
})

module.exports = router;
 