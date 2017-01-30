angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ['ShoppingListCheckOffService', function(ShoppingListCheckOffService) {
	this.items = ShoppingListCheckOffService.buyItems;
	this.bought = function(index) {
		ShoppingListCheckOffService.bought(index);
	}
	this.allMessage = "Everything is bought!";
}])
.controller('AlreadyBoughtController', ['ShoppingListCheckOffService', function(ShoppingListCheckOffService) {
	this.items = ShoppingListCheckOffService.boughtItems;
	this.noneMessage = "Nothing bought yet.";
}])
.service('ShoppingListCheckOffService', function() {
	var service = this;

	service.buyItems = [
	{
		name: "cookies",
		quantity: 10,
	},
	{
		name: "burgers",
		quantity: 15,
	},
	{
		name: "pajamas",
		quantity: 120,
	},
	{
		name: "bread",
		quantity: 11,
	},
	{
		name: "books",
		quantity: 23,
	}];

	service.boughtItems = [];

	service.bought = function(index) {
		service.boughtItems.push(service.buyItems[index]);
		service.buyItems.splice(index, 1);
	}

	return service;
	
});