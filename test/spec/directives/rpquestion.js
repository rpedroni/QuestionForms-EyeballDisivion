'use strict';

describe('Directive: rpQuestion', function () {

  // load the directive's module
  beforeEach(module('rpedroniIt1FunnelApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<rp-question></rp-question>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the rpQuestion directive');
  }));
});
