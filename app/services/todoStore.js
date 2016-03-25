angular.module('angularTest.services', [])

.factory('todoStore', function($http) {
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
    }
  }

  return data;
})
