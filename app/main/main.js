angular.module('angularTest.main', [])

.controller('main.controller', ['$scope', '$state', 'todoStore', function($scope, $state, todoStore) {

  $scope.newTodo = '';
  todoStore.get().then(function(res) {
    console.log(res)
    $scope.todos = res;
  })

  $scope.addTodo = function() {
    var newTodo = {
      name: $scope.newTodo,
      completed: false
    }
    todoStore.insert(newTodo)
      .then(function(res) {
        $scope.newTodo = '';
        $scope.todos = res;
      })
  };

  $scope.completeTodo = function() {

  };
}])