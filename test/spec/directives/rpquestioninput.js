'use strict';

describe('Directive: rpQuestionInput', function () {

  // load the directive's module
  beforeEach(module('rpedroniIt1FunnelApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<rp-question-input></rp-question-input>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the rpQuestionInput directive');
  }));
});
