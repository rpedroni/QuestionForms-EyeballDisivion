'use strict';

describe('Filter: validation', function () {

  // load the filter's module
  beforeEach(module('it1_app'));

  // initialize a new instance of the filter before each test
  var validation;
  beforeEach(inject(function ($filter) {
    validation = $filter('validation');
  }));

  it('should return the input prefixed with "validation filter:"', function () {
    var text = 'angularjs';
    expect(validation(text)).toBe('validation filter: ' + text);
  });

});
