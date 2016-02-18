'use strict';

/**
* @ngdoc directive
* @name it1_app.directive:edQuestionInput
* @description
* # edQuestionInput
*/
angular.module('it1_app')
.directive('edQuestionTextarea', function () {
  return {
    templateUrl: '../../../views/directives/question-types/edquestiontextarea.html'
  };
});
