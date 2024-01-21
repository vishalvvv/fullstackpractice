var mongoose = require('mongoose');
var Schema = mongoose.Schema;
   var productSchema = new Schema({
       name: {
           type:String,
           unique:true,
       },
       price: {
           type:Number
       },
       brand:{
           type:String
       }
   })
   module.exports= mongoose.model('product',productSchema);