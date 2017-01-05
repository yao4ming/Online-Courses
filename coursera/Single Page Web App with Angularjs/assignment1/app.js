(function() {
	'use strict'

	var app1 = angular.module("app1", ["ngRoute"]);

	app1.controller("LunchCheckController", ["$scope", function($scope) {

		$scope.prompt = function() {

			if (!$scope.values) {
				$scope.msg = "Please enter data first";
			} else if ($scope.values.split(",").length > 3) {
				$scope.msg = "Too much!";
			} else if ($scope.values.split(",").length <= 3) {
				$scope.msg = "Enjoy!";
			}
		}
	}]);

})();

