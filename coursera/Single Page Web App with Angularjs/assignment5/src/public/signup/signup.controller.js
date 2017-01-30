(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'MyInfoService'];
function SignUpController(MenuService, MyInfoService) {
  var $ctrl = this;

  $ctrl.user = MyInfoService.getUser();

  $ctrl.submit = function() {
    var promise = MenuService.getMenuItemByShortName($ctrl.user.favMenuNum.toUpperCase());
    promise.then(function(response) {
      $ctrl.menuItemNotFound = (response == null) ? true : false;
      $ctrl.user.favMenuItem = response;
      MyInfoService.setUser($ctrl.user);

      $ctrl.savedMsg = "Your information has been saved";
		});
  }
}


})();
