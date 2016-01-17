'use strict';

/**
 * @ngdoc directive
 * @name rpedroniIt1FunnelApp.directive:rpQuestionInput
 * @description
 * # rpQuestionInput
 */
angular.module('rpedroniIt1FunnelApp')
  .directive('rpQuestionInput', function ($compile) {
    return {
      restrict: 'E',
      link: function(scope, element) {

        var question = scope.question;

        var input = '<input name="question_' + scope.index + '" type="' + question.meta.inputType + '" required ng-change="onUpdate()" ng-model="model" ';
        if (question.meta.placeholder) {
          input += 'placeholder="' + question.meta.placeholder + '"';
        }
        input += ' />';

        var e = angular.element(input);
        element.append(e);
        $compile(e)(scope);
      }
    };
  });
