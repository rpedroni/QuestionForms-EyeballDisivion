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
      // TODO: Verify if these indexes always return in the correct order
      for (var index in validationTree.blocks) {
        if (validationTree.blocks[index].valid === false) {
          firstInvalidIndex = index
          break
        }
      }
      return +firstInvalidIndex
    }

    // validSequential
    // All block up to the first invalid one
    var validSequential = function(blockIndex, validationTree) {
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

    // validCurrentOnly
    var validCurrentOnly = function(blockIndex, validationTree) {
      var firstInvalidIndex = _getFirstInvalidBlockIndex(validationTree)
      console.log(firstInvalidIndex, blockIndex, firstInvalidIndex === blockIndex);
      return (firstInvalidIndex === -1 && blockIndex === 0) || (firstInvalidIndex === blockIndex)
    }

    var pageIndex = function(blockIndex, validationTree) {
      var firstInvalidIndex = _getFirstInvalidBlockIndex(validationTree)
      return firstInvalidIndex === -1 ? blockIndex : blockIndex - firstInvalidIndex
    }

    // Public API
    return function (blockIndex, validationTree, displayStrategyName) {

      // If no tree, just return true
      if (!validationTree) {
        return true
      }

      switch (displayStrategyName) {
        case 'validSequential': // All until first invalid (included)
          return validSequential(blockIndex, validationTree)
        case 'validCurrentOnly': // First invalid only
          return validCurrentOnly(blockIndex, validationTree)
        case 'pageIndex': // Get relative number to currently active block
          return pageIndex(blockIndex, validationTree)
        default:
          console.warn('Unknown display strategy');
          return true
      }

    }

  })
