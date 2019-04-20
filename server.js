const express= require('express');
const app= express();
const newUserRoute= require("./addUser.js");
const locate=require("./locations.js");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/',express.static(__dirname+"/public_static"));
app.use("/SignUpPage",newUserRoute);
app.use("/SignInPage",newUserRoute);
app.use("/",locate);
app.use("/weatherOfPlace",locate);

app.listen('8772',()=>{
    console.log('Server has Started');
})
