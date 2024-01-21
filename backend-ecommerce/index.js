var express = require('express');
var dotenv =require('dotenv');

var app = express();

dotenv.config();

var dbconnection = require('./services/dbconnection');
dbconnection.connectToDB(process.env.MONGO_URL);


app.get('/healthcheck', (req,res) => {
    res.send("App running successfully!!");
})

app.listen(process.env.PORT, () => {
    console.log("server started!!");
})