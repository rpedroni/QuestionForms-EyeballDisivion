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

      template: '='
    },
    transclude: true,
    // template: '<form name="form" novalidate ng-transclude class="q-form"></form>',

    // TODO: Examine best way to use this
    templateUrl: '../../views/directives/ed-question-form.html',
    // function(elem, attrs) {
    //   console.log(attrs);
    //   var template = '<form name="form" novalidate ng-transclude class="q-form"></form>';
    //   template += '<div ng-include="\'../../views/directives/form-templates/form-template-A.html\'" />';
    //   return template;
    // },

    link: function(scope) {
      // TODO: Template path

      scope.templatePath = '../../views/directives/form-templates/' + scope.template + '.html';
      scope.$watch('template', function(t) {
        scope.templatePath = '../../views/directives/form-templates/' + t + '.html';        
      });


    },

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

        // Model
        var model = {};

        // If we want to go over all the errors in the form
        // Object.keys(form.$error).forEach(function(key) {
        //   console.log(key, form.$error[key]);
        // });

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

            model[index] = q.$modelValue;

            validationTree.blocks[blockIndex].questions.push(q.$valid);
            blockValid = blockValid && q.$valid;
          }

          validationTree.blocks[blockIndex].valid = blockValid;
        });

        $scope.onUpdate({ form: form, validationTree: validationTree, model: model });
      };
    }
  };
});
