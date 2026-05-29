const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.send("Hello Coder Army");
});

app.get("/contact", (req,res)=>{
    res.send("This is our Contact Page");
});

app.get("/about", (req,res)=>{
    res.send("This is our About Page");
});

app.listen(4000, ()=>{
    console.log("I am Listening at port number 4000");
})  