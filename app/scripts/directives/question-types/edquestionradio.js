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
      templateUrl: '../../../views/directives/question-types/edquestionradio.html'
    };
  });
