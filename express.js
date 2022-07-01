const express=require("express");

const app=express(); //creating server
app.get('/',function(req,res){
    res.json(jsondata.json);
})
app.get("/getstudents", function (req, res) {
    res.json(jsondata.students);
});
app.get("/getteachers", function (req, res) {
    res.json(jsondata.teachers);
});
app.listen(7000);
