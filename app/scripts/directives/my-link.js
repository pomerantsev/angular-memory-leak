'use strict';

angular.module('angularMemoryLeaksApp')
  .directive('myLink', function () {
    return {
      restrict: 'E',
      scope: {
        action: '&',
        someProperty: '@'
      },
      templateUrl: 'views/directives/my-link.html'
    };
  });
