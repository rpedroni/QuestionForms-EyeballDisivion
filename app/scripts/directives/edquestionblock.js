'use strict'

/**
* @ngdoc directive
* @name it1_app.directive:edQuestionBlock
* @description
* # edQuestionBlock
*/
angular.module('it1_app')
.directive('edQuestionBlock', function (BlockDisplayControl) {

  var _isQuestion = function(part) {
    return !!part.question
  }

  return {
    scope: {
      block: '=',
      index: '=',
      validationTree: '=',
      displayStrategy: '=display',
    },
    templateUrl: '../../views/directives/edquestionblock.html',

    link: function(scope, element) {
      scope.isQuestion = _isQuestion
      scope.parts = scope.block.texts.concat(scope.block.questions)

      // Handle DOM element manipultions
      scope.$watch('validationTree', function() {
        BlockDisplayControl.controlDisplayByStrategy(element, scope.index, scope.validationTree, scope.displayStrategy)        
      })
    },

  }
})
