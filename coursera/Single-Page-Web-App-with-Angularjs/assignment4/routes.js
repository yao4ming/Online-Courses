(function() {
  'use strict'
  angular
  .module('MenuApp')
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './templates/home.html'
    })
    .state('categories', {
      url: '/categories',
      templateUrl: './templates/categories.html',
      resolve: {
        categories: ['MenuDataService', function(MenuDataService) {
            return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('categories.items', {
      url: '/items/{categoryShortName}',
      templateUrl: './templates/items.html',
      resolve: {
        items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }]
      }
    })
  }]);

})();
