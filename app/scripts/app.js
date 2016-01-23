'use strict';

/**
 * @ngdoc overview
 * @name it1_app
 * @description
 * # it1_app
 *
 * Main module of the application.
 */
angular
  .module('it1_app', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
