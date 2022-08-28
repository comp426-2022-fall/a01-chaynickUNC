var http = require("http"); 
var fs = require("fs"); 
var minimist = require("minimist"); 

var port_arg = minimist(process.argv)["port"]; 
const port = port_arg ? port_arg : 3000;


var webData;
fs.readFile("./public/index.html", "utf8", (err, data) => {
    if(err){ console.log(err); return; }
    webData = data;
}); 


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", 'text/html');
    res.end(webData); 
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`); 
})




console.log(port)