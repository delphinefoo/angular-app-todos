angular.module('angularTest.main', [])

.controller('main.controller', ['$scope', '$state', function($scope, $state) {
  $scope.todos = {};
}])