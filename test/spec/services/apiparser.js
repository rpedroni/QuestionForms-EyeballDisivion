'use strict';

describe('Service: APIParser', function () {

  // load the service's module
  beforeEach(module('it1_app'));

  // instantiate service
  var APIParser;
  beforeEach(inject(function (_APIParser_) {
    APIParser = _APIParser_;
  }));

  it('should do something', function () {
    expect(!!APIParser).toBe(true);
  });

});
