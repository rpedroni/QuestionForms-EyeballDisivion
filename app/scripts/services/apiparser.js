'use strict';

/**
 * @ngdoc service
 * @name it1_app.APIParser
 * @description
 * # APIParser
 * Service in the it1_app.
 */
angular.module('it1_app')
  .service('APIParser', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function


    // Generic for all questions
    var parseQuestion = function(question) {

      // Parse to local question type name
      var questionType = _convertType(question.dataType)

      return {
        name: question.name,
        type: questionType,
        heading: question.heading,
        // Possibly specific to each question
        meta: _buildMeta(question, questionType)
      }
    }

    var _convertType = function(questionType) {
      switch (questionType) {
        // identities
        case 'button':
        case 'checkbox':
        case 'input':
        case 'list':
          return questionType

        case 'solar_dropdown':
          return 'dropdown'

        case 'case-notes':
          return 'textarea'

        default:
          console.warn('Warning: unknown question type')
          return null
      }
    }

    var _buildMeta = function(question, questionType) {
      var meta = {}
      switch (questionType) {
        case 'button':
        case 'checkbox':
        case 'dropdown':
        case 'list':
          meta.options = question.answers.map(_buildOption)
          break;

        case 'input':
        case 'textarea':
          meta.placeholder = question.answers[0].text
          break

        default:
          break
      }
      return meta
    }

    var _buildOption = function(answerObj) {
      return {
        text: answerObj.text,
        value: answerObj.post_out_value
      }
    }

    // Building each block with a single question inside and no texts
    // "questions" the already locally mapped question array
    var buildSingleQuestionblocks = function(questions) {
      return {
        blocks: questions.map(function(q) {
          return {
            texts: [],
            questions: [{
              position: 0,
              question: q
            }]
          }
        })
      }
    }

    // Service API
    return {
      parseQuestion: parseQuestion,
      buildSingleQuestionblocks: buildSingleQuestionblocks
    }

  });
