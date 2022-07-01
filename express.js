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
app.get("/express", function (req, res) {
    res.send("<h1>Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It facilitates the rapid development of Node based Web applications.</h1>")
});
app.listen(7000);
