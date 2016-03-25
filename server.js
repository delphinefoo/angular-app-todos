var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer();

app.use(express.static(__dirname));

var todos = [
  {
    name: 'Bathe dog',
    completed: true
  },
  {
    name: 'Go grocery shopping',
    completed: false
  },
  {
    name: 'Deposit check',
    completed: false
  }
];

app.get('/api/todos', function(req,res) {
  res.send(todos);
});

app.post('/api/todos', function(req,res) {
  res.send(todos);
})

app.listen(3000, function() {
  console.log('Listening on port 3000');
});

