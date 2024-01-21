const express = require("express");
const app = express();
const path = require("path");
const logger = require("morgan");
const multer = require("multer");
const router = express.Router();
const upload = multer({dest:"./public/uploads "});
const port = 5001;

// built in middleware

  app.use(express.json());
  app.use(express.urlencoded({extended:true}));
  app.use("/static",express.static(path.join(__dirname,"public")));

 // Application level middleware

  const loggerMiddleware = (req,res,next) => {
    console.log(`${new Date()} --- Request [${req.method}]  [${req.url}]`);
    next();
  };

  app.use(loggerMiddleware);

  // third party middleware

  app.use(logger("combined"));

   // router level midddleware

  app.use("/api/users",router);

   const fakeAuth = (req,res,next) => {
    const authStatus = true;
    if(authStatus){
        console.log("user authstatus:",authStatus);
        next();
 }
 else {
    res.status(401);
    throw new Error("user is not authorized");
 }
   }

  const getUsers = (req,res) => {
    res.json({message:"get all users"});
  };

  const createUser = (req,res) => {
    console.log("this is the request body received from client",req.body);
    res.json({message:"create new user"});
  };
  
 router.use(fakeAuth);
  router.route("/").get(getUsers).post(createUser);

  // error handler middleware

  const errorHandler = (err,req,res,next) => {
    const statusCode = res.statusCode ? res.statusCode:500;
    res.status(statusCode);
    switch (statusCode) {
        case 401:
            res.json({
                title:"unauthorized",
                message:err.message,
            });
            break;
            case 404:
                res.json({
                    title:"not found",
                    message:err.message,
                });
                break;
                case 500:
                    res.json({
                        title:"server error",
                        message:err.message,
                 });
                 break;

                 default:
                    break;
    }

  };
/*
 ROUTES
  app.get("/",(req,res) => {
    res.send("this is home page");
});
app.get("/users",(req,res) => {
    res.send("get all users");
});
app.get("/users/:id",(req,res) => {
    res.send(`get user with ID ${req.params.id}`);
});
app.post("/users",(req,res)=>{
    res.send("create new user");
});
app.put("/users/:id",(req,res)=> {
    res.send(`update user with ID ${req.params.id}`);
});
app.delete("/users/:id",(req,res)=> {
    res.send(`delete user with ID ${req.params.id}`);
})
 */

 app.post(
    "/upload",upload.single("image"),
    (req,res,next) => {
        console.log(req.file,req.body);
        res.send(req.file);
    },
    (err,req,res,next) => {
        res.status(400).send({err:err.message});
    }
 ); 
  app.all('*',(req,res) => {
    res.status(404);
    throw new Error("route not found");
  });


app.use(errorHandler);
app.listen(port,()=>{
    console.log(`example app is listening on port ${port}`);
});