var UserModel = require('../model/user.model');

// exports.addUser = function(req,res) {

//     console.log(req.body);

//      var document= new UserModel(req.body);
     
//      try{
//         document.save(function(err,result){
//             if(err){
//                 res.send(err.message)
//             }
//             if(result){
//                 res.send(result);
//             }
//         })
//      }
//      catch(e){
//          res.send(e.message);
//      }
     
// }




exports.addUser = async function(req,res) {
    console.log(req.body);
     var document= new UserModel(req.body);
     try{
        var result = await document.save();
            res.send(result);
     }catch(e){
            res.send(e.message);
     }     
}