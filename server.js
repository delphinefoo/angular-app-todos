var express = require('express');
var http = require('http');
var app = express();

var server = http.createServer();

app.use(express.static(__dirname));

server.on('request', function(req, res) {
  if(req.method === 'GET') {
    res.end('Hello there!');
  }
})

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
