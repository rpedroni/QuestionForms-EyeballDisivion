'use strict';

describe('Directive: edQuestionInput', function () {

  // load the directive's module
  beforeEach(module('it1_app'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ed-question-input></ed-question-input>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the edQuestionInput directive');
  }));
});
