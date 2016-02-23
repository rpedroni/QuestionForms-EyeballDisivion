'use strict'

/**
* @ngdoc directive
* @name it1_app.directive:edQuestionCheckbox
* @description
* # edQuestionCheckbox
*/
angular.module('it1_app')
.directive('edQuestionButton', function ($compile) {

  // Determine custom control's validity
  var _updateValidity = function(validation, ngModelController) {
    validation = validation || {}
    var viewValue = ngModelController.$viewValue

    // required
    if (!validation.required || validation.required === true) {
      var requiredValidity = angular.isDefined(viewValue) && (viewValue === viewValue) // Very ugly code to check for 'NaN's
      ngModelController.$setValidity('required', requiredValidity)
    }
  }

  return {
    templateUrl: '../../views/directives/question-types/edquestionbutton.html',
    require: 'ngModel',
    link: function(scope, element, attrs, ngModelController) {

      scope.buttonClicked = function(value) {

        // Set the view model value
        ngModelController.$setViewValue(value)

        // Buttons automatically validate since it only requires to be pressed
        _updateValidity(scope.question.meta.validation, ngModelController)

        scope.onUpdate()
      }
      _updateValidity(scope.question.meta.validation, ngModelController)

    }

  }
})
