'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SystemMessage = function (_Component) {
  _inherits(SystemMessage, _Component);

  function SystemMessage(props) {
    _classCallCheck(this, SystemMessage);

    return _possibleConstructorReturn(this, (SystemMessage.__proto__ || Object.getPrototypeOf(SystemMessage)).call(this, props));
  }

  _createClass(SystemMessage, [{
    key: 'getMessageByType',
    value: function getMessageByType(msg) {
      switch (msg.type) {
        case 'chat.memberjoin':
          return this.props.message.display_name + ' has joined the chat';
        case 'chat.memberleave':
          return this.props.message.display_name + ' has left the chat';
        case 'chat.wait_queue':
          return 'Please wait. There are currently ' + msg.wait_queue + ' people(s) in the queue.';
        default:
          return JSON.stringify(msg);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'system-msg-container' },
        _react2.default.createElement(
          'span',
          { className: 'system-msg' },
          this.getMessageByType(this.props.message)
        )
      );
    }
  }]);

  return SystemMessage;
}(_react.Component);

SystemMessage.displayName = 'SystemMessage';
SystemMessage.propTypes = {
  message: _propTypes2.default.object
};
SystemMessage.defaultProps = {
  message: {
    msg: ''
  }
};

exports.default = SystemMessage;