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

      var createValidations = function(form, questions) {
        var validations = {
          form: !form.$invalid,
          blocks: []
        };
        questions.forEach(function(question) {
          validations.blocks.push(!question.$invalid);
        });

        return validations;
      };

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

        //
        // var i = 0, formQuestions = [];
        // while(true) {
        //   var q = form['question_' + i++];
        //   if (q) {
        //     formQuestions.push(q);
        //   } else {
        //     break;
        //   }
        // }

        // var validations = createValidations(form, formQuestions);

        $scope.onUpdate({ form: form, validationTree: validationTree });
      };
    }
  };
});
