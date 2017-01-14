(function() {
  'use strict'
  angular
  .module('MenuApp')
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('/', {
      url: '/',
      templateUrl: './templates/home.html'
    })
    .state('categories', {
      url: '/categories',
      templateUrl: './templates/categories.html'
    })
    .state('items', {
      url: '/items',
      templateUrl: './templates/items.html'
    })
  }])

})();
