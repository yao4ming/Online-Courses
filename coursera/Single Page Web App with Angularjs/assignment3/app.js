angular.module('NarrowItDownApp', [])
.constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com')
.controller('NarrowItDownController', ['MenuSearchService', function(MenuSearchService) {
	var ctrl = this;
	this.getMatchedMenuItems = function(searchTerm) {
		var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
		promise.then(function(response) {
			console.log(response);
			ctrl.found = response;
		})
		.catch(function(error) {
			console.log("getMatchedMenuItems callback failed");
		});
	}

	ctrl.removeItem = function(index) {
		ctrl.found.splice(index, 1);
	}
}])
.service('MenuSearchService', ['$http', 'ApiBasePath', function($http, ApiBasePath) {

	this.getMatchedMenuItems = function(searchTerm) {
		console.log(searchTerm);
		return $http({
			url: ApiBasePath + '/menu_items.json'
		}).then(function (result) {
		    var foundItems = result.data.menu_items;
		    if (searchTerm === undefined || searchTerm === "") 
		    	return [];

		    foundItems = foundItems.filter(function(element) {
		    	return element.description.match(searchTerm);
		    });
		    return foundItems;
		});
	}
	return this;
}])
.directive('foundItems', function() {
	return {
		templateUrl: './foundItems.html'
	}
});