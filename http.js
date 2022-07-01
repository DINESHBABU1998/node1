const http=require("http");
const server=http.createServer(function(req,res){
res.write("<h1>This is our first server</h1>");
res.write("Hello this is Node.js")
res.write(JSON.stringify({Name:"DineshBabu",Batch:"EA9",Course:"Full Stack Developer"}));
res.end();
})
server.listen(5000)
