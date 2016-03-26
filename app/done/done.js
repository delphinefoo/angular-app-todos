angular.module('angularTest.done', [])

.controller('done.controller', ['$scope', '$state', 'todoStore', function($scope, $state, todoStore) {
  todoStore.get().then(function(res) {
    $scope.todos = res;
  });
  $scope.toggleCompleted = function(todo) {
    todoStore.toggle(todo, $scope.todos.indexOf(todo));
  }

}])