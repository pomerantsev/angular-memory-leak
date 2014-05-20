'use strict';

angular.module('angularMemoryLeaksApp')
  .controller('AnotherCtrl', function ($scope, $location) {
    $scope.goBack = function () {
      $location.path('/');
    };
  });
