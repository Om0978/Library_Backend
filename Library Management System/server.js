const express = require('express');
const mongoose = require('mongoose');
// express library express variable me store kiya hai

const userData = require('./model/userModel')



const app=express(); // storing express function int app variable
// for invoking a function you have to store it in a variable

app.use(express.json());


//database ko connect kr rhe hai
const db=require("./Middlewares/db");
db.connecttoDB();



// routes ko connect kiya hai
const routes=require("./Routes/userroute");
app.use("/",routes);




app.listen(3008,()=>{
    console.log(`Server is started on 3008`)
})
