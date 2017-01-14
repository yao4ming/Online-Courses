(function() {
  'use strict'
  categoriesController.$inject = ['MenuDataService'];
  function categoriesController(MenuDataService) {

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
  }
})();
