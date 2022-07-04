const express=require("express");

const app=express();

const port=8000;

const middleWare1=function(req,res,next){
    console.log("MiddleWare1 is executed");
    next();
}

app.use(middleWare1);

const middleWare2=function(req,res,next){
    console.log("MiddleWare2 is executed");
    next();
}

app.get('/',function(req,res){
    res.send("<h1>Home page with  MiddleWare1</h1>")
})

app.get('/user1',middleWare2,function(req,res){
    res.send("<h1>user1 page with both MiddleWare1 and MiddleWare2</h1>")
})

app.get('/user2',middleWare2,function(req,res){
    res.send("<h1>user2 page with both MiddleWare1 and MiddleWare2</h1>")
})

app.get('/user3',function(req,res){
    res.send("<h1>user3 page with MiddleWare1</h1>")
})

app.get('/user4',function(req,res){
    res.send("<h1>user4 page with MiddleWare1</h1>")
})

app.listen(port);