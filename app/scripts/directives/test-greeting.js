'use strict';

angular.module('angularMemoryLeaksApp')
  .directive('testGreeting', function () {
    return {
      restrict: 'E',
      scope: {},
      template: '<div>Hello World!</div>',
      link: function (scope, element) {
        var x;
        scope.something = 'something';
        // scope.$watch('something', function (value) {
        //   x = value;
        // });
        scope.$watch(function () {
          return element.height();
        }, function (value) {
          x = value;
        });
      }
    };
  });
