'use strict'

/**
* @ngdoc service
* @name it1_app.BlockDisplayControl
* @description
* # BlockDisplayControl
* Factory in the it1_app.
*/
angular.module('it1_app')
.factory('BlockDisplayControl', function (displayStrategyFilter, $css) {

  var _classes = {
    pageCurrent:    'q-block-page-current',
    pagePrevious:   'q-block-page-previous',
    pageNext:       'q-block-page-next'
  }
  var _removeClasses = function(elem) {
    for (var key in _classes) {
      elem.removeClass(_classes[key])
    }
  }
  var _css = {
    page: '../../styles/templates/paginated.css',
    scroll: '../../styles/templates/scroll.css',
  }
  var _currentCssPath = null

  var _addCssFile = function(path) {
    if (_currentCssPath === path) return
    if (_currentCssPath) $css.remove(_currentCssPath)
    _currentCssPath = path
    $css.add(path)
  }

  // Padinated blocks
  var _page = function(bElem, bIndex, vTree) {

    bElem.addClass('q-block-page')

    var pageIndex = displayStrategyFilter(bIndex, vTree, 'pageIndex')

    if (pageIndex === 0) {
      bElem.addClass(_classes.pageCurrent)
    } else if (pageIndex < 0) {
      bElem.addClass(_classes.pagePrevious)
    } else {
      bElem.addClass(_classes.pageNext)
    }

    // Add css file
    _addCssFile(_css.page)
  }

  var _scroll = function(bElem, bIndex, vTree) {
    _page(bElem, bIndex, vTree)
    // Add css file
    _addCssFile(_css.scroll)
  }

  var _strategies = {
    page: _page,
    scroll: _scroll
  }


  // Public API method
  var controlDisplayByStrategy = function(blockElement, blockIndex, validationTree, strategy) {

    _removeClasses(blockElement)

    // Always add .q-block
    blockElement.addClass('q-block')

    switch (strategy) {
      case 'page':
      case 'scroll':
      _strategies[strategy](blockElement, blockIndex, validationTree)
      break;
      default:
      console.warn('Unknown display strategy')
    }

  }

  // Public API
  return {
    controlDisplayByStrategy: controlDisplayByStrategy
  }
})
