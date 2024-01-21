var express = require('express');
var app = express();
var dotenv = require('dotenv');
dotenv.config();
var port = process.env.PORT;
app.listen(port, () => {
    console.log("server started at port"+ port);
})