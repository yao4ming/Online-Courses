(function() {
  'use strict'
  angular
  .module('data')
  .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com')
  .service('MenuDataService', ['$http', 'ApiBasePath', function($http, ApiBasePath) {

    this.getAllCategories = function() {
      return $http({
  			url: ApiBasePath + '/categories.json'
  		}).then(function (result) {
  		    return result.data;
  		}, function (error) {
          console.log("http error " + error);
          return {};
      });
    }

    this.getItemsForCategory = function(categoryShortName) {
      return $http({
  			url: ApiBasePath + '/menu_items.json?category=' + categoryShortName
  		}).then(function (result) {
  		    return result.data.menu_items;
  		}, function (error) {
          console.log("http error " + error);
          return {};
      });
    }

    return this;

  }]);

})();
