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

  var formStructure = {
    blocks: [
      {
        texts: [ // Ordered list
          { position: 0, text: 'My name is' },
          { position: 4, text: 'TEXT TEXT |' },
          { position: 5, text: 'and some more text here.' },
        ],
        questions: [ // Ordered list
          { position: 1, question: { type: 'input', meta: { inputType: 'email', placeholder: 'Your E-mail' } } },
          { position: 2, question: { type: 'radio', meta: { placeholder: 'Gender', options: [{ value: 0, text: 'Female' }, { value: 1, text: 'Male' }] } } },
          { position: 3, question:  { type: 'dropdown', meta: { placeholder: 'Your Job', options: [{ value: 0, text: 'Teacher' }, { value: 1, text: 'Fireman' }] } } },
        ],
      },
      {
        texts: [ // Ordered list
          { position: 0, text: 'My name is' },
          { position: 2, text: 'and I am a' },
          { position: 5, text: 'and look at these options:' },
        ],
        questions: [ // Ordered list
          { position: 1, question: { type: 'input', meta: { inputType: 'text' } } },
          { position: 3, question:  { type: 'dropdown', meta: { placeholder: 'Your Job', options: [{ value: 0, text: 'Teacher' }, { value: 1, text: 'Fireman' }] } } },
          { position: 4, question: { type: 'input', meta: { inputType: 'text', placeholder: 'Another question' } } },
        ],
      },
      //   { type: 'input', meta: { inputType: 'text', placeholder: 'TV Show' } },
      //   'is my favorite TV Show and',
      //   { type: 'dropdown', meta: { placeholder: 'Console', options: [{ value: 0, text: 'Playstation 4' }, { value: 1, text: 'XBOX One' }] } },
      //   'is my favorite video game console.',
      // ]
    ]
  };

  $scope.formStructure = formStructure;

  // Validation tree & form
  $scope.validationTree = {};
  $scope.onUpdate = function(form, validationTree) {
    // console.log(form, validationTree);
    $scope.validationTree = validationTree;
  };
  

});
