'use strict';

angular.module('angularMemoryLeaksApp', [
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/another', {
        templateUrl: 'views/another.html',
        controller: 'AnotherCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
