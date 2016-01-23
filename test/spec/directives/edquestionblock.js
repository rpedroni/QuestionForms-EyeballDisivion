'use strict';

describe('Directive: edQuestionBlock', function () {

  // load the directive's module
  beforeEach(module('it1_app'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ed-question-block></ed-question-block>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the edQuestionBlock directive');
  }));
});
