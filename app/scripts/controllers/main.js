'use strict';

/**
* @ngdoc function
* @name it1_app.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the it1_app
*/
angular.module('it1_app')
.controller('MainCtrl', function ($scope, $http) {

  // Possible question types
  // button [X]
  // list [ ] (possible same thing as button, vertically oriented)
  // input [X] (input)
  // case-notes [X] (textarea)
  // checkbox [X] (checkbox)
  // solar-dropdown [X] (dropdown)

  $http.get('http://cerebro-engine.herokuapp.com/api/angular/ricardo_funnel')
  .then(function(res) {
    console.log(res.data.questions)
  })

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
          // {
          //   position: 1,
          //   // Actually the id, just transposed to name
          //   question: {
          //     name: '238947jhsdf90',
          //     type: 'input',
          //     meta: {
          //       inputType: 'text',
          //       placeholder: 'Jane Doe',
          //       validation: {
          //         required: true, minLength: 2, maxLength: 5//, pattern: /^\d_XXX$/
          //       }
          //     }
          //   }
          // },
          // {
          //   position: 3,
          //   // id: 7,
          //   question: { type: 'dropdown', meta: { placeholder: 'Your Job', options: [{ value: 0, text: 'student' }, { value: 1, text: 'teacher' }] } }
          // },
          // {
          //   position: 4,
          //   question: { type: 'checkbox',
          //   name: 'asjkashdkjasd',
          //   meta: {
          //     options: [{ value: 0, text: 'apples' }, { value: 1, text: 'bananas' }, { value: 2, text: 'strawberries' }],
          //     validation: { minSelections: 2, maxSelections: 2 }
          //   } }
          // },
          // {
          //   position:5 , question: { type: 'textarea', name: 'my_textarea', meta: { placeholder: 'Text goes here',
          //   validation: { minLength: 5 } }}
          // },
          {
            position:6 , question: { type: 'radio', name: 'my_radio', meta: { options: [{ value: 0, text: 'student' }, { value: 1, text: 'teacher' }],
             validation: { required: false }
           }}
          }
        ],
      },
      // {
      //   texts: [ // Ordered list
      //   ],
      //   questions: [ // Ordered list
      //     { position: 0,
      //       question: {
      //         type: 'conditional',
      //         meta: { hideText: 'I don\'t play sports.', showText: 'I play these sports:',
      //         question: {
      //           type: 'checkbox',
      //           meta: {
      //             options: [ { value: 0, text: 'Basketball' }, { value: 1, text: 'Soccer' } ]
      //           }
      //         }
      //       }
      //     }
      //   },
      //   ],
      // },
      {
        texts: [ // Ordered list
          { position: 0, text: 'My GPA is' },
          { position: 2, text: 'and I am a' },
        ],
        questions: [ // Ordered list
          { position: 1, question:  { name: 'gpa_value', type: 'input', meta: { inputType: 'number', placeholder: 'GPA' } } },
          { position: 3, question: { type: 'button',
            meta: { options: [
              { value: 0, text: 'boy' },
              { value: 1, text: 'girl' },
              { value: 2, text: 'gender_2' },
              { value: 3, text: 'gender_3' },
              { value: 4, text: 'gender_4' },
            ] } }
          },
        ],
      },
      // {
      //   texts: [ // Ordered list
      //     { position: 0, text: 'My mom\'s maiden name is' },
      //     { position: 2, text: 'and I am her' },
      //   ],
      //   questions: [ // Ordered list
      //     { position: 1, question: { type: 'input', meta: { inputType: 'text', placeholder: 'Smith'  } } },
      //     { position: 3, question:  { type: 'dropdown', meta: { options: [{ value: 0, text: 'son' }, { value: 1, text: 'daughter' }] } } },
      //     { position: 4, question:  { type: 'radio', meta: { options: [{ value: 0, text: 'I like this one' }, { value: 1, text: 'No, this one' }], validation: { required: true } } } },
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
