'use strict';

angular.module('angularMemoryLeaksApp')
  .controller('MainCtrl', function ($scope, $interval) {
    $scope.greetings = [];
    var intervalPromise = $interval(function () {
      $scope.greetings.push(1);
    }, 100);

    $scope.stopInterval = function () {
      $interval.cancel(intervalPromise);
    };

    $scope.clear = function () {
      $scope.greetings = [];
    };
  });
