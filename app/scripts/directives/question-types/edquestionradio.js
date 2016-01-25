'use strict';

/**
 * @ngdoc directive
 * @name it1_app.directive:edQuestionRadio
 * @description
 * # edQuestionRadio
 */
angular.module('it1_app')
  .directive('edQuestionRadio', function () {
    return {
      templateUrl: '../../../views/directives/question-types/edquestionradio.html',
      link: function(scope) {
        // Set default value due to angular 1.0.3+ bug on $digest'ing model updates on radio
        scope.model = { option: scope.question.meta.options[0].value };
      }
    };
  });
