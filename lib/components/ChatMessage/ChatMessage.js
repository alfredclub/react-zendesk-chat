'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _Avatar = require('./../Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _ChatMedia = require('./../ChatMedia');

var _ChatMedia2 = _interopRequireDefault(_ChatMedia);

var _utils = require('./../../utils');

var _webSdk = require('./../../../vendor/web-sdk');

var _webSdk2 = _interopRequireDefault(_webSdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatMessage = function (_Component) {
  _inherits(ChatMessage, _Component);

  function ChatMessage(props) {
    _classCallCheck(this, ChatMessage);

    var _this = _possibleConstructorReturn(this, (ChatMessage.__proto__ || Object.getPrototypeOf(ChatMessage)).call(this, props));

    _this.getClassName = _this.getClassName.bind(_this);
    _this.renderMessagePart = _this.renderMessagePart.bind(_this);
    _this.renderOptions = _this.renderOptions.bind(_this);
    _this.optionOnChange = _this.optionOnChange.bind(_this);
    return _this;
  }

  _createClass(ChatMessage, [{
    key: 'getClassName',
    value: function getClassName(msg) {
      return msg.member_type;
    }
  }, {
    key: 'optionOnChange',
    value: function optionOnChange(e) {
      var index = e.currentTarget.value,
          msg = this.props.message.options[index];
      _webSdk2.default.sendChatMsg(msg, function (err) {
        if (err) {
          (0, _utils.log)('Error occured >>>', err);
          return;
        }
      });
      this.props.dispatch({
        type: 'synthetic',
        detail: {
          type: 'visitor_send_msg',
          msg: msg
        }
      });
    }
  }, {
    key: 'renderOptions',
    value: function renderOptions(options) {
      var _this2 = this;

      if (!options || options.length <= 0) return;

      return _react2.default.createElement(
        'div',
        null,
        options.map(function (option, i) {
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('input', {
              type: 'radio',
              name: 'option',
              value: i,
              onChange: _this2.optionOnChange
            }),
            ' ',
            option
          );
        })
      );
    }
  }, {
    key: 'renderMessagePart',
    value: function renderMessagePart(msg) {
      switch (msg.type) {
        case 'chat.file':
          return _react2.default.createElement(_ChatMedia2.default, { message: msg });
        default:
          return _react2.default.createElement(
            'div',
            { className: 'chat-msg' },
            _react2.default.createElement(
              'span',
              null,
              this.props.message.msg
            ),
            this.renderOptions(this.props.message.options)
          );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          className: 'chat-msg-container ' + this.getClassName(this.props.message) + ' ' + this.props.addClass
        },
        _react2.default.createElement(
          'div',
          { className: 'avatar-container' },
          _react2.default.createElement(_Avatar2.default, { entity: this.props.agent })
        ),
        _react2.default.createElement(
          'div',
          { className: 'chat-msg-wrapper' },
          this.renderMessagePart(this.props.message)
        )
      );
    }
  }]);

  return ChatMessage;
}(_react.Component);

ChatMessage.displayName = 'ChatMessage';
ChatMessage.propTypes = {
  message: _propTypes2.default.object,
  agent: _propTypes2.default.object,
  addClass: _propTypes2.default.string
};
ChatMessage.defaultProps = {
  message: {
    msg: ''
  }
};

exports.default = (0, _reactRedux.connect)()(ChatMessage);