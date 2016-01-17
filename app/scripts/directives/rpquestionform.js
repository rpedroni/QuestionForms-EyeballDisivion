'use strict';

/**
 * @ngdoc directive
 * @name rpedroniIt1FunnelApp.directive:rpQuestionForm
 * @description
 * # rpQuestionForm
 */
angular.module('rpedroniIt1FunnelApp')
  .directive('rpQuestionForm', function () {
    return {
      scope: {
        onUpdate: '&',
      },
      template: '<form name="form" novalidate ng-transclude></form>',
      restrict: 'E',
      transclude: true,

      controller: function($scope) {

        var createValidations = function(form, questions) {
          var validations = {
            form: !form.$invalid,
            blocks: []
          };
          questions.forEach(function(question) {
            // console.log(question.$error);
            validations.blocks.push(!question.$invalid);
          });

          return validations;
        };

        this.onUpdate = function() {

          var form = $scope.form;

          var i = 0, formQuestions = [];
          while(true) {
            var q = form['question_' + i++];
            if (q) {
              formQuestions.push(q);
            } else {
              break;
            }
          }

          var validations = createValidations(form, formQuestions);

          $scope.onUpdate({ form: form, validations: validations });
        };
      }
    };
  });
