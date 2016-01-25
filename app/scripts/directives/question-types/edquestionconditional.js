'use strict';

/**
 * @ngdoc directive
 * @name it1_app.directive:edQuestionConditional
 * @description
 * # edQuestionConditional
 */
angular.module('it1_app')
  .directive('edQuestionConditional', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the edQuestionConditional directive');
      }
    };
  });
