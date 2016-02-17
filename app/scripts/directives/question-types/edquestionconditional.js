'use strict';

/**
* @ngdoc directive
* @name it1_app.directive:edQuestionConditional
* @description
* # edQuestionConditional
*/
angular.module('it1_app')
.directive('edQuestionConditional', function ($compile, controlNamingScheme, $timeout) {
  return {
    templateUrl: '../../../views/directives/question-types/edquestionconditional.html',
    link: function(scope, element) {

      scope.displayOptions = [
        { label: scope.question.meta.hideText || 'No', value: false },
        { label: scope.showText = scope.question.meta.showText || 'Yes', value: true }
      ]
      scope.conditionalQuestionIndex = controlNamingScheme.conditionalIndex(scope.name)

      scope.conditionalValidation = function(value) {
        return false
      }

      // Set initial value
      scope.show = scope.displayOptions[0].value

      scope.$watch('show', function() {
        // Timeout so form can process that a new control was added or removed from form
        // and validation can automatically occur
        $timeout(function() {
          scope.onUpdate()
        }, 100)
      })

    }
  };
});
