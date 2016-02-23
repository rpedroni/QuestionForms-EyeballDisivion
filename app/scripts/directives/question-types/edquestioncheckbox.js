'use strict'

/**
* @ngdoc directive
* @name it1_app.directive:edQuestionCheckbox
* @description
* # edQuestionCheckbox
*/
angular.module('it1_app')
.directive('edQuestionCheckbox', function ($compile) {

  // Determine custom control's validity
  var _updateValidity = function(validation, ngModelController) {
    validation = validation || {}
    var setCount = ngModelController.$viewValue ? ngModelController.$viewValue.filter(function(val) { return val === true }).length : 0

    // required
    if (!angular.isDefined(validation.required) || validation.required === true) {
      ngModelController.$setValidity('required', setCount > 0)
    }
    // minSelections
    if (angular.isDefined(validation.minSelections)) {
      ngModelController.$setValidity('minSelections', setCount >= validation.minSelections)
    }
    // maxSelections
    if (angular.isDefined(validation.maxSelections)) {
      ngModelController.$setValidity('maxSelections', setCount <= validation.maxSelections)
    }
  }

  return {
    templateUrl: '../../views/directives/question-types/edquestioncheckbox.html',
    require: 'ngModel',
    link: function(scope, element, attrs, ngModelController) {

      // Checkbox is a custom form element (since no html/angular inputs can
      // handle this log out of the box)

      scope.cbModel = scope.question.meta.options.map(function() { return false })
      scope.checkboxChanged = function(model) {

        // Set the view model value
        ngModelController.$setViewValue(model)

        // Custom validations for checkbox
        _updateValidity(scope.question.meta.validation, ngModelController)

        scope.onUpdate()
      }
      _updateValidity(scope.question.meta.validation, ngModelController)

    }

  }
})
