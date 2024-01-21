const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
//@ desc Register a user
//@route GET/api/users/register
//@access public

const registerUser =asyncHandler(async(req,res) => {
    const {username,email,password}=req.body;
    if(!username || !email || !password) {
        res.status(400);
        throw new Error("all fields are mandatory");
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("user already registered!");
    }

    // hash password
    const hashedPassword=await bcrypt.hash(password,10);
    console.log("hashed password is:",hashedPassword);
    const user = await User.create({
        username,
        email,
        password:hashedPassword,
    });
    console.log(`User created ${user}`);
    if(user){
        res.status(201).json({_id:user.id,email:user.email});

    }
    else {
        res.status(400);
        throw new Error("user data is not valid");
    }
    res.json({message:"register the user"});
}) ;

//@ desc login a user
//@route post/api/users/login
//@access public

const loginUser =asyncHandler(async(req,res) => {
    const {email,password} = req.body;
    if(!email || !password) {
        res.status(400);
        throw new Error("all fields are mandatory!");
    }
    const user = await User.findOne({email});
    // compare password with hashedpassword
    if(user && (await bcrypt.compare(password,user.password))){
        const accessToken = jwt.sign({
    user:{
        username:user.username,
        email:user.email,
        id:user.id,
    },
        },
        process.env.ACESS_TOKEN_SECRET,
        {expiresIn:"1m"}
        );
        res.status(200).json({accessToken});
    }
    else {
              res.status(401);
              throw new Error("email or password is not valid");
    }
    
}) ;

//@ desc current user info 
//@route post/api/users/current
//@access private

const currentUser =asyncHandler(async(req,res) => {
    res.json({message:"current user information"});
}) ;



module.exports = {registerUser,loginUser,currentUser}