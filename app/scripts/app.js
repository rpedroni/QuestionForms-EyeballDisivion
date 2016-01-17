'use strict';

/**
 * @ngdoc overview
 * @name rpedroniIt1FunnelApp
 * @description
 * # rpedroniIt1FunnelApp
 *
 * Main module of the application.
 */
angular
  .module('rpedroniIt1FunnelApp', [
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
