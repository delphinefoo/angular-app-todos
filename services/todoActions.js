angular.module('angularTest')

.factory('api', function($http) {
  var data = {
    todos: [],

    insert: function(todo) {
      return $http.post('api/todos', todo)
        .then(function(res) {

        })
    }
  }
})