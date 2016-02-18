'use strict';

describe('Directive: edQuestionCheckbox', function () {

  // load the directive's module
  beforeEach(module('it1_app'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ed-question-checkbox></ed-question-checkbox>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the edQuestionCheckbox directive');
  }));
});
