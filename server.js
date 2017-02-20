var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Todo API Root');
});

findTodoItem = function (todoId) {
  var matchedTodo;
  todos.forEach(function (todo) {
    if (todo.id === todoId) matchedTodo = todo;
  });

  return matchedTodo;
};

// GET all
app.get('/todos', function (req, res) {
   res.json(todos);
});

//GET by id
app.get('/todos/:id', function (req, res) {
  var todoId = parseInt(req.params.id, 10);
  var matchedTodo = findTodoItem(todoId);

  if (matchedTodo) {
    res.send(matchedTodo);
  } else {
    res.status(404).send();
  }
});

//  POST
app.post('/todos', function (req, res) {
  var body = req.body;

  body.id = todoNextId++;
  todos.push(body);

  res.json(body);
});

app.listen(PORT, function () {
  console.log('Express listening on port ' +  PORT + '!');
});

