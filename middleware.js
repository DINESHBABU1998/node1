//MiddleWare
//1.Express.js Middleware are different types of functions that are invoked by the Express.js routing layer before the final request handler.
//2.As the name specified, Middleware appears in the middle between an initial request and final intended route.
//3.In stack, middleware functions are always invoked in the order in which they are added.
//4.Middleware functions are the functions that access to the request and response object (req, res) in request-response cycle.

//A middleware function can perform the following tasks:
//It can execute any code.
//It can make changes to the request and the response objects.
//It can end the request-response cycle.
//It can call the next middleware function in the stack.

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
