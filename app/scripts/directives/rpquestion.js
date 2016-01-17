'use strict';

/**
* @ngdoc directive
* @name rpedroniIt1FunnelApp.directive:rpQuestion
* @description
* # rpQuestion
*/
angular.module('rpedroniIt1FunnelApp')
.directive('rpQuestion', function ($compile) {
  return {
    scope: {
      question: '=',
      index: '@'
    },

    require: '^rpQuestionForm',

    restrict: 'E',
    link: function(scope, element, attrs, questionFormCtrl) {

      var question = scope.question;
      var questionDirective = null;

      // Determine the type of question/answer directive we want to use
      switch (question.type) {
        case 'input':
          questionDirective = 'rp-question-input';
          break;
        case 'dropdown':
          questionDirective = 'rp-question-dropdown';
          break;
        default:
        console.log('unknown question type');
      }


      // Build it's html and compile to force the usage of the inner directive
      if (questionDirective) {

        scope.onUpdate = questionFormCtrl.onUpdate;

        var e = angular.element('<div>This is text before the question <' + questionDirective + ' /> and after </div>');
        element.append(e);
        $compile(e)(scope);
      }

    }
  };
});
