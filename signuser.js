const express=require('express');
const routes=express.Router();
const newUserRoute= require("./addUser.js");
routes.post("/",(req,res)=>{
    res.send("Thanks for signing in");
    }
)
    console.log(newUserRoute);
    // users.forEach((item,index,array)=>{
    //     if(item.un===req.body.usernm && item.password===req.body.passw){
    //         res.redirect(req.baseUrl);
    //     }
    // })



module.exports= routes;