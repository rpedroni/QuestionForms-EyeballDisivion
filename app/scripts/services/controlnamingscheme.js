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
    // var name = 'question[' + blockIndex + '][' + qIndex + ']'
    return name;
  };

  var _getBlock = function(name) {
    // question_11_2
    var block = name.replace(new RegExp('^' + _prefix + _separator), '');
    // 11_2
    block = block.replace(new RegExp(_separator + '.*$'), '');
    // 11
    return block;
  };
  var _getIndex = function(name) {
    // question_11_2
    var index = name.replace(new RegExp('^' + _prefix + _separator + '\\d*' + _separator), '');
    // 2
    return index;
  }

  var _conditionalIndexModifier = function() {
    return _separator + '0';
  };
  var _conditionalIndex = function(name) {
    return _getIndex(name) + _separator + '0'
  }

  return {
    namingScheme: _namingScheme,
    getBlock: _getBlock,
    conditionalIndexModifier: _conditionalIndexModifier,
    conditionalIndex: _conditionalIndex,
  };
});
