var express = require('express');

var app = express();

var userRoute = require('./routes/users');

app.use(userRoute);

app.listen(9011, () => {
    console.log("server started!");
})