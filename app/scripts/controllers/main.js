'use strict';

/**
* @ngdoc function
* @name rpedroniIt1FunnelApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the rpedroniIt1FunnelApp
*/
angular.module('rpedroniIt1FunnelApp')
.controller('MainCtrl', function ($scope) {

  var questions = [
    { type: 'input', validation: 'abc', meta: { inputType: 'number', placeholder: 'Favorite Number' } },
    { type: 'input', validation: '123', meta: { inputType: 'text', placeholder: 'First Name' } },
    { type: 'input', meta: { inputType: 'email', placeholder: 'E-mail' } },
    { type: 'dropdown', meta: { placeholder: 'Your Job', options: [{ value: 0, text: 'Teacher' }, { value: 1, text: 'Fireman' }] } },
    // { type: 'input', meta: { inputType: 'checkbox' } },
    // { type: 'input', meta: { inputType: 'radio' } },
  ];

  $scope.questions = questions;

  // $scope.form = [
  //   // Block
  //   [ 'Hi, I\'m ', questions[0], ', nice to meet you!' ],
  //   // Block
  //   [ 'I work with ', questions[1], ' and I love my job.' ],
  // ];

  $scope.onUpdate = function(form, validations) {

    $scope.formValid = validations.form;
    // or
    $scope.formValid = !form.$invalid;

    validations.blocks.forEach(function(validation, index) {
      if (validation) {
        $scope.blockValidations[index] = true;
      }


    });

  };

  $scope.blockValidations = [];
  $scope.formValid = false;

});
