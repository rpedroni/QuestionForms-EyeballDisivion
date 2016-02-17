'use strict'

/**
* @ngdoc directive
* @name it1_app.directive:edQuestion
* @description
* # edQuestion
*/
angular.module('it1_app')
.directive('edQuestion', function ($compile, controlNamingScheme) {

  // Try to find directive for the specific question type
  var _getQuestionDirective = function(question) {
    var questionDirective

    // Determine the type of question/answer directive we want to use
    // TODO: Automatic question type registration?
    switch (question.type) {
      case 'input':
      questionDirective = 'ed-question-input'
      break

      case 'dropdown':
      questionDirective = 'ed-question-dropdown'
      break

      case 'radio':
      questionDirective = 'ed-question-radio'
      break

      case 'conditional':
      questionDirective = 'ed-question-conditional'
      break

      default:
      console.warn('unknown question type')
    }
    return questionDirective
  }

  return {
    scope: {
      question: '=',
      blockIndex: '@',
      index: '@',
      validations: '=?'
    },

    // Require the form directive's controller to gain access to the onQuestionUpdate method
    require: '^edQuestionForm',

    link: function(scope, element, attrs, questionFormCtrl) {

      var questionDirective = _getQuestionDirective(scope.question)

      // Build it's html and compile to force the usage of the inner directive
      if (questionDirective) {

        // Attach the validation function to the scope so every question can
        // use it to communicate with parent
        scope.onUpdate = questionFormCtrl.onQuestionUpdate

        // Name definition for each question based on block and individual index
        // or from the predefined name
        scope.name = scope.question.name || controlNamingScheme.namingScheme(scope.blockIndex, scope.index)

        // Add reference to this question
        questionFormCtrl.addQuestionReference({
          name: scope.name,
          block: scope.blockIndex
        })

        //
        // scope.validations = scope.validations || {}

        // Build 'em
        var e = angular.element('<' + questionDirective + ' />')
        $compile(e)(scope)
        element.append(e)
      }

    }
  }
})
