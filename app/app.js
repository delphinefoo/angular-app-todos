angular.module('angularTest', [])

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'main.controller'
    })
    .state('done', {
      url: '/done',
      templateUrl: 'app/main/done.html',
      controller: 'done.controller'
    })
})