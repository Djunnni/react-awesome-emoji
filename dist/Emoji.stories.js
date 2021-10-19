"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Emoji = _interopRequireDefault(require("./Emoji"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// src/components/Button.stories.js
var _default = {
  title: 'Example/Emoji',
  component: _Emoji.default,
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Emoji.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  label: 'My Emoji'
};