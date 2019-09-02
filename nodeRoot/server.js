const http = require('http');
const url = require('url');
const fs = require('fs');
const port = 1994;
const hostname = 'localhost';

const server = http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }  
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}); 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



//Load HTTP module
/*const http = require("http");
const hostname = 'localhost';
const port = 1994;
var url = require('url');
var fs = require('fs');

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {

  //Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/

