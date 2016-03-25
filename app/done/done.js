angular.module('angularTest.done', [])

.controller('done.controller', ['$scope', '$state', 'todoStore', function($scope, $state, todoStore) {

  $scope.newTodo = '';
  todoStore.get().then(function(res) {
    $scope.todos = res;
  })

  $scope.addTodo = function() {
    var newTodo = {
      name: $scope.newTodo.trim(),
      completed: false
    }
    todoStore.insert(newTodo)
      .then(function() {
        $scope.newTodo = '';
      })
  };
}])