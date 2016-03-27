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

    toggle: function(todo, index) {
      return $http.put('/api/todos', { index: index })
        .then(function(res) {
          data.todos[index].completed = !data.todos[index].completed;
          return data.todos;
        }, function(err) {
          console.log(err);
        })
    }

  }

  return data;
}])

