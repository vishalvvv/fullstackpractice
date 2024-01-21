var express = require('express');
var mongoose = require('mongoose');
var app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost/7backend",{useUnifiedTopology: true,useNewUrlParser:true},function(err){
    if(err){
        console.log(err.message);
    }
    else
    {
        console.log("connected to db");
    }
})

var ProductSchema = require('./model/product.model');
// http://localhost:9011/add
 app.post('/add',function(request,response){
     var product = request.body;
      var newProduct=new ProductSchema(product);
      newProduct.save(function(err,doc){
           if(doc._id){
               response.send("success");
           }
           else
           {
               response.send("failure");
           }
      });
 })

 app.get("/products",function(req,res){

    ProductSchema.find(function(err,docs){
        if(docs){
            res.send(docs);
        }
    })
 })

app.listen(9011, function(){
    console.log("server started!");
})