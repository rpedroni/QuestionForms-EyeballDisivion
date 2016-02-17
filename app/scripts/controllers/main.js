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
          {
            position: 0,
            text: 'My name is',
            // isHeading: false
          },
          {
            position: 2,
            text: 'and I am a',
            // isHeading: true
          },
        ],
        questions: [ // Ordered list
          {
            position: 1,
            // Actually the id, just transposed to name
            question: { name: '238947jhsdf90',  type: 'input', meta: { inputType: 'text', placeholder: 'Jane Doe' } }
          },
          {
            position: 3,
            // id: 7,
            question: { type: 'dropdown', meta: { placeholder: 'Your Job', options: [{ value: 0, text: 'student' }, { value: 1, text: 'teacher' }] } }
          },
        ],
      },
      {
        texts: [ // Ordered list
        ],
        questions: [ // Ordered list
          { position: 0, question: { type: 'conditional', meta: { hideText: 'I don\'t play sports', showText: 'I play', question: { type: 'input', meta: { inputType: 'text', placeholder: 'Sport(s)' } } } } },
        ],
      },
      // {
      //   texts: [ // Ordered list
      //     { position: 0, text: 'My GPA is' },
      //     { position: 2, text: 'and I am a' },
      //   ],
      //   questions: [ // Ordered list
      //     { position: 1, question:  { name: 'gpa_value', type: 'input', meta: { inputType: 'number', placeholder: 'GPA' } } },
      //     { position: 3, question: { type: 'dropdown', meta: { placeholder: 'Gender', options: [{ value: 0, text: 'boy' }, { value: 1, text: 'girl' }] } } },
      //   ],
      // },
      // {
      //   texts: [ // Ordered list
      //     { position: 0, text: 'My mom\'s maiden name is' },
      //     { position: 2, text: 'and I am her' },
      //   ],
      //   questions: [ // Ordered list
      //     { position: 1, question: { type: 'input', meta: { inputType: 'text', placeholder: 'Smith' } } },
      //     { position: 3, question:  { type: 'dropdown', meta: { options: [{ value: 0, text: 'son' }, { value: 1, text: 'daughter' }] } } },
      //   ],
      // },
    ]
  };

  // Validation tree & form
  $scope.validationTree = {};
  $scope.onUpdate = function(form, validationTree, model) {
    $scope.validationTree = validationTree
    $scope.errors = form.$error
    $scope.model = model
  }


  // TODO: Dummy stuffy
  $scope.change = function() {
    if ($scope.template === 'A') {
      $scope.template = 'B'
    } else if ($scope.template === 'B') {
      $scope.template = 'C'
    } else {
      $scope.template = 'A'
    }
  }
  $scope.change()

})
