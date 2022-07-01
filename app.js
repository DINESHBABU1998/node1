const express=require("express");

const app=express(); //creating server
app.get('/',function(req,res){
    res.write("<h1>This is our first server</h1>");
    res.write("Hello this is Node.js")
    res.write(JSON.stringify({Name:"DineshBabu",Batch:"EA9",Course:"Full Stack Developer"}));
    res.end();
})
app.listen(7000);
