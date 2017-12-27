'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatButton = function (_Component) {
  _inherits(ChatButton, _Component);

  function ChatButton() {
    _classCallCheck(this, ChatButton);

    return _possibleConstructorReturn(this, (ChatButton.__proto__ || Object.getPrototypeOf(ChatButton)).apply(this, arguments));
  }

  _createClass(ChatButton, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          className: 'chat-button ' + this.props.addClass,
          onClick: this.props.onClick },
        _react2.default.createElement(
          'svg',
          { width: '22', height: '22', viewBox: '0 0 22 22' },
          _react2.default.createElement('path', { d: 'M13 22l-4-6H2c-1.11-.043-2-.935-2-2V2C0 .89.89 0 2 0h18c1.11 0 2 .892 2 2v12c0 1.067-.89 1.957-2 2h-3l-4 6zm3-8h4c-.005.3-.01-12 0-12-.01.004-18 .006-18 0 .005.006 0 12 0 12h8l3 5 3-5z', fill: '#FFF', fillRule: 'evenodd' })
        )
      );
    }
  }]);

  return ChatButton;
}(_react.Component);

ChatButton.displayName = 'ChatButton';
ChatButton.propTypes = {
  onClick: _react2.default.PropTypes.func,
  addClass: _react2.default.PropTypes.string
};

exports.default = ChatButton;