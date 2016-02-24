'use strict'

/**
* @ngdoc filter
* @name it1_app.filter:validation
* @function
* @description
* # validation
* Filter in the it1_app.
*/
angular.module('it1_app')
.filter('validation', function () {

  // Default: true
  var _validations = {
    required: function(val) {
      var req = val.required
      return angular.isDefined(req) ? req : true
    },
    minLength: function(val) {
      var min = val.minLength
      return min > 0 ? min : 0
    },
    maxLength: function(val) {
      var max = val.maxLength
      return max > 0 ? max : null
    },
    pattern: function(val) {
      var pattern = val.pattern
      return pattern
    }
  }

  return function (question, validationType) {

    var validation = question.meta.validation || {}

    if (!validationType || !_validations[validationType]) {
      return
    }

    return _validations[validationType](validation)
  }
})
