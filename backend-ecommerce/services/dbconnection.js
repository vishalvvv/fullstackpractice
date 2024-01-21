var mongoose = require('mongoose');
var dotenv = require('dotenv');
dotenv.config();

exports.connectToDB = (mongoURL) => {
    mongoose.connect(mongoURL, (err) => {

        if(err){
            console.log('error', err);
        }
        else
        {
            console.log("connected to db");
        }
    })
}

