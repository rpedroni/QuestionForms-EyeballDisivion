'use strict';

/**
* @ngdoc directive
* @name it1_app.directive:edQuestionBlock
* @description
* # edQuestionBlock
*/
angular.module('it1_app')
.directive('edQuestionBlock', function () {

  var _isQuestion = function(part) {
    return !!part.question;
  };

  var _questionIndex = function(questions) {
    return function(question) {
      return questions.findIndex(function(q) {
        return q.position === question.position;
      });
    };
  };

  return {
    scope: {
      block: '=',
      index: '@'
    },
    templateUrl: '../../views/directives/edquestionblock.html',

    link: function(scope) {
      scope.isQuestion = _isQuestion;
      scope.questionIndex = _questionIndex(scope.block.questions);
      scope.parts = scope.block.texts.concat(scope.block.questions);
    },

  };
});
