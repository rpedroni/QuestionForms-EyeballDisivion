'use strict'

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
    templateUrl: '../../views/directives/ed-question-form.html',

    controller: function($scope) {

      var _questionReferences = []

      // Add reference to each individual question - makes it easier to fetch
      // reference to question later on when validating
      this.addQuestionReference = function(questionInfo) {
        if (_questionReferences.filter(function(q) { return q.name === questionInfo.name }).length === 0) {
          _questionReferences.push(questionInfo)
        }
      }

      // onQuestionUpdate is responsible for building the validation and form
      // model objects, based on inner structures (blocks and questions)
      this.onQuestionUpdate = function() {

        // Get form controller
        var form = $scope.form

        // -- Get validity from form controller
        var formValidationTree = { valid: form.$valid, blocks: {} }

        // -- Build model by getting each question and normalizing values into a flat object
        var model = {}

        // -- Start block validation objects with all true values
        $scope.formStructure.blocks.forEach(function(b, blockIndex) {
          formValidationTree.blocks[blockIndex] = { valid: true, questions: {} }
        })

        // -- For each existent question in form, find it by the added reference
        _questionReferences.forEach(function(questionInfo) {
          var questionController = form[questionInfo.name]

          // If the question exists
          if (questionController) {
            // Save the model value
            model[questionInfo.name] = questionController.$modelValue
            // Find which block it belongs to
            var blockIndex = questionInfo.block
            // Update if block is valid or not based if it's questions are all valid
            formValidationTree.blocks[blockIndex].valid = formValidationTree.blocks[blockIndex].valid && questionController.$valid
            // Update if question is valid or not
            formValidationTree.blocks[blockIndex].questions[questionInfo.name] = { valid: questionController.$valid }
          }
        })

        $scope.onUpdate({ form: form, validationTree: formValidationTree, model: model })
      }
    }
  }
})
