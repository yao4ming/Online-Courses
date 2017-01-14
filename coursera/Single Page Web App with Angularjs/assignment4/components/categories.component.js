(function() {
  'use strict'

  angular
  .module('data')
  .component('categories', {
    template: '<ol><li ng-repeat="category in $ctrl.categories">{{category.name}}</li></ol>',
    controller: ['MenuDataService', function(MenuDataService) {
      var categoriesCtrl = this;
      categoriesCtrl.$onInit = function() {
        console.log('categories component controller init');
        MenuDataService.getAllCategories()
        .then(function(result) {
          categoriesCtrl.categories = result;
          console.log(categoriesCtrl.categories);
        })
        .catch(function(error) {
    			console.log("getAllCategories callback failed");
    		});
      }
    }],
    bindings: {
      categories: '<'
    }
  });
})();
