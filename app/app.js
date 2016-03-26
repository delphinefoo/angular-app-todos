angular.module('angularTest', [
  'angularTest.main',
  'angularTest.done',
  'angularTest.services',
  'ui.router'])

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
      templateUrl: 'app/done/done.html',
      controller: 'done.controller'
    })
})

