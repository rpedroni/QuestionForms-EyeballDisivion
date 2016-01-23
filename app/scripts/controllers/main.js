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
        texts: [
          { position: 0, text: 'My name is' },
          { position: 2, text: 'and I am a' },
        ],
        questions: [
          { position: 1, question: { type: 'input', meta: { inputType: 'email', placeholder: 'Your E-mail' } } },
          { position: 3, question:  { type: 'dropdown', meta: { placeholder: 'Your Job', options: [{ value: 0, text: 'Teacher' }, { value: 1, text: 'Fireman' }] } } },
        ],
      },
      {
        texts: [
          { position: 0, text: 'My name is' },
          { position: 2, text: 'and I am a' },
          { position: 5, text: 'and look at these options:' },
        ],
        questions: [
          { position: 1, question: { type: 'input', meta: { inputType: 'text' } } },
          { position: 3, question:  { type: 'dropdown', meta: { placeholder: 'Your Job', options: [{ value: 0, text: 'Teacher' }, { value: 1, text: 'Fireman' }] } } },
          { position: 4, question: { type: 'input', meta: { inputType: 'text', placeholder: 'Another question' } } },
          { position: 6, question: { type: 'input', meta: { inputType: 'radio', placeholder: 'Hey' } } },
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

  $scope.onUpdate = function(form, validationTree) {
    console.log(form, validationTree);
    $scope.validationTree = validationTree;
  };

  $scope.validationTree = {};

});
