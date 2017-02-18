'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMaskedinput = require('react-maskedinput');

var _reactMaskedinput2 = _interopRequireDefault(_reactMaskedinput);

var _FormField = require('grommet/components/FormField');

var _FormField2 = _interopRequireDefault(_FormField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (field) {

  var placeholder = field.placeholder || "";

  return _react2.default.createElement(
    _FormField2.default,
    { error: field.meta.touched ? field.meta.error : undefined },
    _react2.default.createElement(_reactMaskedinput2.default, _extends({}, field.input, { mask: field.mask, placeholder: placeholder }))
  );
};