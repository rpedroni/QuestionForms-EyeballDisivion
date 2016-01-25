'use strict';

/**
* @ngdoc directive
* @name it1_app.directive:edQuestionForm
* @description
* # edQuestionForm
*/
angular.module('it1_app')
.directive('edQuestionForm', function () {
  return {
    scope: {
      formStructure: '=',
      onUpdate: '&',
    },
    transclude: true,
    template: '<form name="form" novalidate ng-transclude></form>',

    controller: function($scope) {

      // onUpdate's responsible for building the validation and form
      // model objects, based on inner structures (blocks and questions)
      this.onQuestionUpdate = function() {

        var form = $scope.form;

        // Structure template
        /* {
          valid: false,
          blocks: [
            { valid: false, questions: [false, true, true] },
            { valid: true, questions: [true, true] },
          ]
        } */
        var validationTree = { form: form.$valid, blocks: [] };

        // Loop through all the existing questions and verify if each question
        // and each block is valid or not

        // Blocks (valid if all internal questions are valid)
        $scope.formStructure.blocks.forEach(function(block, blockIndex) {

          validationTree.blocks.push({
            valid: false, questions: []
          });

          // Questions
          var blockValid = true;
          for (var questionIndex = 0; questionIndex < block.questions.length; questionIndex++) {

            var index = 'question_' + blockIndex + '_' + questionIndex;
            var q = form[index];

            validationTree.blocks[blockIndex].questions.push(q.$valid);
            blockValid = blockValid && q.$valid;
          }

          validationTree.blocks[blockIndex].valid = blockValid;
        });

        $scope.onUpdate({ form: form, validationTree: validationTree });
      };
    }
  };
});
