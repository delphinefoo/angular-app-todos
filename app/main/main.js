angular.module('angularTest.main', [])

.controller('main.controller', ['$scope', '$state', function($scope, $state) {
  var todos = $scope.todos;

  $scope.newTodo = '';

  $scope.addTodo = function() {
    var newTodo = {
      name: $scope.newTodo.trim(),
      completed: false
    }
  };

  $scope.completeTodo = function() {

  };
}])