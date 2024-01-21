var express = require('express');
var router = express.Router();
var ProductModel = require('../model/product.model');
router.post('/product',function(req,res){
    var body = req.body;
    console.log('body',body);
    var doc = new ProductModel(body);
    doc.save(function(err,document){
        if(err){
            res.send("error")
        }else
        {
            res.send(document);
        }
    })
})
module.exports = router;