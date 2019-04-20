const express= require('express');
const app= express();
const routes= express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
var users=[];
routes.get("/",(req,res)=>{
    console.log("Welcome to 2nd req");
    res.send(users);
})
routes.post("/addNew",(req,res)=>{
    users.push(req.body.user);
    // console.log(users);
    res.redirect(req.baseUrl);
})
routes.post("/checkid",(req,res)=>{
    users.forEach((item)=> {
        if (req.body.username == item.un) {
            if(req.body.password == item.password){
                res.send("success");
            } else{
                res.send("passic");
            }
        } else{
            res.send("userni");
        }
            })
})



module.exports = routes;