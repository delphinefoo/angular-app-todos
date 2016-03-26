angular.module('angularTest.main', [])

.controller('main.controller', ['$scope', '$state', 'todoStore', '$window', function($scope, $state, todoStore, $window) {
  $scope.todos = todoStore;
  $scope.newTodo = '';
  todoStore.get().then(function(res) {
    $scope.todos = res;
    console.log($scope.todos);
  })

  $scope.addTodo = function() {
    var newTodo = {
      name: $scope.newTodo,
      completed: false
    };
    todoStore.insert(newTodo)
      .then(function(res) {
        $scope.newTodo = '';
        $scope.todos = res;
      })
  };

  $scope.toggleCompleted = function(todo) {
    todoStore.toggle(todo, $scope.todos.indexOf(todo));
  }

}])