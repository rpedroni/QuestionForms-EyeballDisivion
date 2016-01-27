'use strict';

/**
* @ngdoc directive
* @name it1_app.directive:edQuestionConditional
* @description
* # edQuestionConditional
*/
angular.module('it1_app')
.directive('edQuestionConditional', function ($compile, controlNamingScheme) {
  return {
    // templateUrl: '../../../views/directives/question-types/edquestionconditional.html',
    link: function(scope, element) {

      // Conditional question type conditionally displays another inner question when prompted to
      // The conditional can only be true/on or false/off
      // When on, display the embedded inner question

      var conditionalQuestion = {
        type: 'dropdown',
        meta: {
          options: [
            { value: false, text: scope.question.meta.hideText || 'No' },
            { value: true, text: scope.question.meta.showText || 'Yes' }
          ]
        }
      };

      // Make the scope for the "conditional question", that controls showing of next question
      var conditionalScope = scope.$new();
      conditionalScope.question = conditionalQuestion;

      // Create a dropdown and automatically it will get it's index/block index from the current scope
      // var e1 = angular.element('<ed-question question="question" block-index="{{ blockIndex }}" index="{{ index }}" />');
      var e1 = angular.element('<ed-question-dropdown />');
      $compile(e1)(conditionalScope);
      element.append(e1);

      // Make the scope for the question itself
      var questionScope = scope.$new();
      questionScope.question = scope.question.meta.question;
      // Create the directive for the question itself
      var e2 = angular.element('<ed-question ng-if="show" question="question" block-index="{{ blockIndex }}" index="{{ index }}" />');

      questionScope.show = false;

      // Change index to force the question directive to give this control a new name
      // Manipulate control name to avoid form control name collisions
      questionScope.index = questionScope.index + controlNamingScheme.conditionalIndexModifier();
      $compile(e2)(questionScope);
      element.append(e2);


      // // TODO: Verify this
      conditionalScope.$watch('model', function(val) {
        questionScope.show = val;
      }, true);

    }
  };
});
