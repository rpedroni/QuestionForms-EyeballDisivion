'use strict'

/**
 * @ngdoc filter
 * @name it1_app.filter:displayStrategy
 * @function
 * @description
 * # displayStrategy
 * Filter in the it1_app.
 */
angular.module('it1_app')
  .filter('displayStrategy', function () {

    var _getFirstInvalidBlockIndex = function(validationTree) {
      var firstInvalidIndex = -1
      for (var index in validationTree.blocks) {
        if (validationTree.blocks[index].valid === false) {
          firstInvalidIndex = index
          break
        }
      }
      return firstInvalidIndex
    }

    // Shows all block up to the first invalid one. All others after it are hidden
    var _validSequential = function(blockIndex, validationTree) {
      // First block is always visible
      if (blockIndex === 0) {
        return true
      }
      if (!validationTree.blocks) {
        return blockIndex === 0
      }

      // Search for invalid block index
      var firstInvalidIndex = _getFirstInvalidBlockIndex(validationTree)
      return firstInvalidIndex === -1 || (blockIndex <= firstInvalidIndex)
    }

    return function (blockIndex, validationTree, displayStrategyName) {

      // If no tree, just return true
      if (!validationTree) {
        return true
      }

      switch (displayStrategyName) {
        case 'validSequential':
          return _validSequential(blockIndex, validationTree)
          break;
        default:
          console.warn('Unknown display strategy');
          return true
      }

    }

  })
