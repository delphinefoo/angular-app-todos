angular.module('angularTest.services', [])

.factory('todoStore', ['$rootScope', '$http','$window', function($rootScope, $http, $window) {
  var data = {
    todos: [],

    get: function () {
      return $http.get('/api/todos')
        .then(function (res) {
          angular.copy(res.data, data.todos);
          return data.todos;
        }, function(err) {
          console.log(err);
        });
    },

    insert: function(todo) {
      return $http.post('/api/todos', todo)
        .then(function(res) {
          data.todos.push(todo);
          return data.todos;
        }, function(err) {
          console.log(err);
        })
    },

    toggle: function(todo) {

      var originalTodos = store.todos.slice(0);

      var completeTodos = [];
      var incompleteTodos = [];
      data.todos.forEach(function (todo) {
        if (todo.completed) {
          completeTodos.push(todo);
        } else {
          incompleteTodos.push(todo);
        }
      });
    }


  }

  return data;
}])
