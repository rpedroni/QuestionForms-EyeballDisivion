'use strict';

describe('Service: BlockDisplayControl', function () {

  // load the service's module
  beforeEach(module('it1_app'));

  // instantiate service
  var BlockDisplayControl;
  beforeEach(inject(function (_BlockDisplayControl_) {
    BlockDisplayControl = _BlockDisplayControl_;
  }));

  it('should do something', function () {
    expect(!!BlockDisplayControl).toBe(true);
  });

});
