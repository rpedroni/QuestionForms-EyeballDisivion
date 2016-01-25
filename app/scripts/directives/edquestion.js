'use strict';

/**
* @ngdoc directive
* @name it1_app.directive:edQuestion
* @description
* # edQuestion
*/
angular.module('it1_app')
.directive('edQuestion', function ($compile) {

  // Try to find directive for the specific question type
  var _getQuestionDirective = function(question) {
    var questionDirective;

    // Determine the type of question/answer directive we want to use
    switch (question.type) {
      case 'input':
      questionDirective = 'ed-question-input';
      break;
      case 'dropdown':
      questionDirective = 'ed-question-dropdown';
      break;
      case 'radio':
      questionDirective = 'ed-question-radio';
      break;
      default:
      console.warn('unknown question type');
    }
    return questionDirective;
  };

  return {
    scope: {
      question: '=',
      blockIndex: '@',
      index: '@',
    },

    require: '^edQuestionForm',

    link: function(scope, element, attrs, questionFormCtrl) {

      var questionDirective = _getQuestionDirective(scope.question);

      // Build it's html and compile to force the usage of the inner directive
      if (questionDirective) {

        // Attach the validation function to the scope so every question can
        // use it to communicate with parent
        scope.onUpdate = questionFormCtrl.onQuestionUpdate;

        // question inputs name definition
        scope.name = 'question_' + scope.blockIndex + '_' + scope.index;

        var e = angular.element('<' + questionDirective + ' />');
        element.append(e);
        $compile(e)(scope);
      }

    }
  };
});
