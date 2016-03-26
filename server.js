var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();
var server = http.createServer();

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

app.use(express.static(__dirname));
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/todos', function(req,res) {
  res.send(todos);
});

app.post('/api/todos', function(req,res) {
  var todo = req.body;
  todo.completed = todo.completed === 'true' ? true : false;
  todos.push(todo);
  res.send(todos);
});


app.listen(3000, function() {
  console.log('Listening on port 3000');
});

