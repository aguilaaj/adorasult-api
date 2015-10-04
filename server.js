var http = require('http');
var adorasult = require('adorasult');

var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(adorasult());
}).listen(port);