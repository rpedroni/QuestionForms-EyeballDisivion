'use strict';

/**
* @ngdoc function
* @name it1_app.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the it1_app
*/
angular.module('it1_app')
.controller('MainCtrl', function ($scope) {

  // TODO: define validation/validators for each input type (e.g. min/max length, regex, etc.)

  $scope.formStructure = {
    blocks: [
      {
        texts: [ // Ordered list
          { position: 0, text: 'My name is' },
          { position: 2, text: 'and I am a' },
        ],
        questions: [ // Ordered list
          { position: 1, question: { type: 'input', meta: { inputType: 'text', placeholder: 'Jane Doe' } } },
          { position: 3, question:  { type: 'dropdown', meta: { placeholder: 'Your Job', options: [{ value: 0, text: 'student' }, { value: 1, text: 'teacher' }] } } },
          { position: 4, question:  { type: 'conditional', meta: { question: { type: 'input', meta: { inputType: 'text', placeholder: 'Jane Doe' } } } } },
          // { position: 4, question: { type: 'radio', meta: { placeholder: 'Gender', options: [{ value: 0, text: 'Female' }, { value: 1, text: 'Male' }] } } },
          // { position: 5, question: { type: 'input', meta: { inputType: 'checkbox', labelAfter: 'Do you agree?' } } },
        ],
      },
      {
        texts: [ // Ordered list
          { position: 1, text: 'on a sports team.' },
        ],
        questions: [ // Ordered list
          { position: 0, question:  { type: 'dropdown', meta: { options: [{ value: 0, text: 'I play' }, { value: 1, text: 'I do not play' }] } } },
        ],
      },
      {
        texts: [ // Ordered list
          { position: 0, text: 'My GPA is' },
        ],
        questions: [ // Ordered list
          { position: 1, question:  { type: 'input', meta: { inputType: 'number', placeholder: 'GPA' } } },
        ],
      },
      {
        texts: [ // Ordered list
          { position: 0, text: 'My mom\'s maiden name is' },
          { position: 2, text: 'and I am her' },
        ],
        questions: [ // Ordered list
          { position: 1, question: { type: 'input', meta: { inputType: 'text', placeholder: 'Smith' } } },
          { position: 3, question:  { type: 'dropdown', meta: { options: [{ value: 0, text: 'son' }, { value: 1, text: 'daughter' }] } } },
        ],
      },
    ]
  };

  // Validation tree & form
  $scope.validationTree = {};
  $scope.onUpdate = function(form, validationTree, model) {
    $scope.validationTree = validationTree;
    $scope.errors = form.$error;
    $scope.model = model;
  };


  // TODO: Dummy stuffy
  $scope.change = function() {
    $scope.template = $scope.template === 'A' ? 'B' : 'A';
  };
  $scope.change();

});
