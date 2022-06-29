const express=require("express");

const app=express(); //creating server
app.get('/',function(req,res){
    // res.send("Hello World");
    res.json({Name:"Dinesh",Age:"23"}) //using express res.send--(it automatically ends the response) or res.json we can only either send json or html or normal data
                                       //we can write res.write multiple times and end it by res.end
})
app.listen(7000);