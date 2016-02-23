'use strict'

/**
 * @ngdoc directive
 * @name it1_app.directive:edQuestionList
 * @description
 * # edQuestionList
 */
angular.module('it1_app')
  .directive('edQuestionList', function () {
    return {
      templateUrl: '../../../views/directives/question-types/edquestionlist.html',
      link: function(scope) {

        // 'list' question type is the same thing as the button directive, so
        // we just go ahead and use it, chaning the type

        scope.question.type = 'button'
      }
    }
  })
