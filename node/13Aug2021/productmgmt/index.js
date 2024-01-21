var express = require('express');
var app = express();
app.use(express.json());
var mongoose = require('mongoose');
var ProductRouter = require("./routes/product.route");
mongoose.connect("mongodb://localhost/7ampgmt",{useNewUrlParser: true , useUnifiedTopology:true},function(error){
    if(error){
        console.log(error);
    }
      else
      {
          console.log("db connected");
      }
})
app.use(ProductRouter);
app.listen(8787,function(){
    console.log("server started!");
})