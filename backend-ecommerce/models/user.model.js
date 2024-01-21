var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
          username: {
              type: String,
              unique:true, 
              required:true,
              index:true
          },
          password: {
              type:String, 
              required:true,
          }, 

          email: {
              type:String, 
               required:true
          }, 
          role: {
              type:String, 
              required:true, 
              default:"ROLE_CUSTOMER"
          }
    }
);

module.exports = mongoose.model("user",UserSchema);