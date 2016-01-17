'use strict';

/**
 * @ngdoc directive
 * @name rpedroniIt1FunnelApp.directive:rpQuestionDropdown
 * @description
 * # rpQuestionDropdown
 */
angular.module('rpedroniIt1FunnelApp')
  .directive('rpQuestionDropdown', function () {
    return {
      templateUrl: '../../views/directives/rpquestiondropdown.html',
      restrict: 'E',
    };
  });
