(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MyInfoService', 'ApiPath'];
function MyInfoController(MyInfoService, ApiPath) {
  var $ctrl = this;

  $ctrl.user = MyInfoService.getUser();
  $ctrl.apiPath = ApiPath;
  $ctrl.angular = angular;
}

})();
