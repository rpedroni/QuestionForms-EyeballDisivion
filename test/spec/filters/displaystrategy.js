'use strict';

describe('Filter: displayStrategy', function () {

  // load the filter's module
  beforeEach(module('it1_app'));

  // initialize a new instance of the filter before each test
  var displayStrategy;
  beforeEach(inject(function ($filter) {
    displayStrategy = $filter('displayStrategy');
  }));

  it('should return the input prefixed with "displayStrategy filter:"', function () {
    var text = 'angularjs';
    expect(displayStrategy(text)).toBe('displayStrategy filter: ' + text);
  });

});
