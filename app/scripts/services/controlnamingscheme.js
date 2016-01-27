'use strict';

/**
* @ngdoc service
* @name it1_app.controlNamingScheme
* @description
* # controlNamingScheme
* Factory in the it1_app.
*/
angular.module('it1_app')
.factory('controlNamingScheme', function () {

  var _prefix = 'question';
  var _separator = '_';

  var _namingScheme = function(blockIndex, qIndex) {
    var name = _prefix + _separator + blockIndex + _separator + qIndex;
    return name;
  };

  var _getBlock = function(name) {
    // question_11_2
    var block = name.replace(new RegExp('^' + _prefix), '');
    // 11_2
    block = block.replace(new RegExp(_separator + '.*$'), '');
    // 11
    return block;
  };

  var _conditionalIndexModifier = function() {
    return _separator + '0';
  };

  return {
    namingScheme: _namingScheme,
    getBlock: _getBlock,
    conditionalIndexModifier: _conditionalIndexModifier,
  };
});
