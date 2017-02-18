'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormField = require('grommet/components/FormField');

var _FormField2 = _interopRequireDefault(_FormField);

var _TextInput = require('grommet/components/TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (field) {
  console.log(field);
  if (field.suggestions) {
    var suggestions = field.suggestions.filter(function (el) {
      return el.startsWith(field.input.value);
    });
  } else {
    var suggestions = [];
  }

  var placeholder = field.placeholder || "";

  return _react2.default.createElement(
    _FormField2.default,
    { error: field.meta.touched ? field.meta.error : undefined },
    _react2.default.createElement(_TextInput2.default, {
      onDOMChange: field.input.onChange,
      placeHolder: placeholder,
      suggestions: suggestions,
      onSelect: function onSelect(_ref) {
        var suggestion = _ref.suggestion;
        field.input.onChange(suggestion);
      },
      value: field.input.value,
      onBlur: field.input.onBlur })
  );
};