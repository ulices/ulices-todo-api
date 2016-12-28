var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
  id: 1,
  description: 'Meet mom for lunch',
  completed: false
}, {
  id: 2,
  description: 'Go to market',
  completed: false
}, {
  id: 3,
  description: 'Feed my dogs',
  completed: true
}];

app.get('/', function (req, res) {
  res.send('Todo API Root');
});

app.get('/todos', function (req, res) {
   res.json(todos);
});

findTodoItem = function (todoId) {
  var matchedTodo;
  todos.forEach(function (todo) {
    if (todo.id === todoId) matchedTodo = todo;
  });

  return matchedTodo;
};

app.get('/todos/:id', function (req, res) {
  var todoId = parseInt(req.params.id, 10);
  var matchedTodo = findTodoItem(todoId);

  if (matchedTodo) {
    res.send(matchedTodo);
  } else {
    res.status(404).send();
  }
});

app.listen(PORT, function () {
  console.log('Express listening on port ' +  PORT + '!');
});

