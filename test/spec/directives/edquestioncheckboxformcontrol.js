'use strict';

describe('Directive: edQuestionCheckboxFormControl', function () {

  // load the directive's module
  beforeEach(module('it1_app'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ed-question-checkbox-form-control></ed-question-checkbox-form-control>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the edQuestionCheckboxFormControl directive');
  }));
});
