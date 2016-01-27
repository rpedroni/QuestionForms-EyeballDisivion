'use strict';

describe('Service: controlNamingScheme', function () {

  // load the service's module
  beforeEach(module('it1_app'));

  // instantiate service
  var controlNamingScheme;
  beforeEach(inject(function (_controlNamingScheme_) {
    controlNamingScheme = _controlNamingScheme_;
  }));

  it('return the block from a control name', function () {
    var name = 'question_11_4';
    expect(controlNamingScheme.getBlock(name)).toBe('11');
    var name = 'question_0_411';
    expect(controlNamingScheme.getBlock(name)).toBe('0');
    var name = 'question_5000_14000';
    expect(controlNamingScheme.getBlock(name)).toBe('5000');
  });

});
