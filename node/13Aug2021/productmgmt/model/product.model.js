var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema= new Schema(
    {
        name: {
            type:String
        },
        price: {
            type:Number
        }
    }
)
module.exports = mongoose.model('product',ProductSchema);