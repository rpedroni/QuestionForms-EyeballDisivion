'use strict';

/**
 * @ngdoc directive
 * @name rpedroniIt1FunnelApp.directive:rpQuestionBlock
 * @description
 * # rpQuestionBlock
 */
angular.module('rpedroniIt1FunnelApp')
  .directive('rpQuestionBlock', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the rpQuestionBlock directive');
      }
    };
  });
