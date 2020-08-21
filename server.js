const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res){
    console.log("hello world" + req.url);
    if(req.url === '/izac.html' || req === "/"){
        res.writeHead(200, {"content-Type": "text/html"})
        fs.createReadStream(__dirname + "./izac.html").pipe(res)
    }
});
var PORT = process.env.PORT || 5000;
server.listen(PORT, function(){
    return console.log(`Running at ${PORT} engine`)
});
