'use strict';

/**
* @ngdoc directive
* @name it1_app.directive:edQuestionDropdown
* @description
* # edQuestionDropdown
*/
angular.module('it1_app')
.directive('edQuestionDropdown', function () {
  return {
    templateUrl: '../../views/directives/question-types/edquestiondropdown.html',
    // link: function(scope) {
    //   if (scope.question.meta.placeholder) {
    //     scope.question.meta.options.unshift({ text: scope.question.meta.placeholder, value: '' });
    //   }
    // }
  };
});
