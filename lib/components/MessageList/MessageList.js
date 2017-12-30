'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ChatMessage = require('./../ChatMessage');

var _ChatMessage2 = _interopRequireDefault(_ChatMessage);

var _SystemMessage = require('./../SystemMessage');

var _SystemMessage2 = _interopRequireDefault(_SystemMessage);

var _Avatar = require('./../Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _OfflineForm = require('./../OfflineForm');

var _OfflineForm2 = _interopRequireDefault(_OfflineForm);

var _PrechatForm = require('./../PrechatForm');

var _PrechatForm2 = _interopRequireDefault(_PrechatForm);

var _ChatRating = require('./../ChatRating');

var _ChatRating2 = _interopRequireDefault(_ChatRating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MessageList = function (_Component) {
  _inherits(MessageList, _Component);

  function MessageList(props) {
    _classCallCheck(this, MessageList);

    var _this = _possibleConstructorReturn(this, (MessageList.__proto__ || Object.getPrototypeOf(MessageList)).call(this, props));

    _this.renderTyping = _this.renderTyping.bind(_this);
    _this.renderByType = _this.renderByType.bind(_this);
    return _this;
  }

  _createClass(MessageList, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      // Scroll to bottom
      var node = _reactDom2.default.findDOMNode(this);
      if (node.children.length > 0) {
        node = node.children[0];
        if (node.children.length > 0) {
          setTimeout(function () {
            node.children[node.children.length - 1].scrollIntoView();
          });
        }
      }
    }
  }, {
    key: 'renderByType',
    value: function renderByType(msg, addClass) {
      switch (msg.type) {
        case 'chat.file':
        case 'chat.msg':
          return _react2.default.createElement(_ChatMessage2.default, {
            key: msg.type + msg.timestamp,
            message: msg,
            addClass: addClass,
            agent: this.props.agents[msg.nick]
          });
        case 'chat.memberjoin':
        case 'chat.memberleave':
        case 'chat.wait_queue':
        case 'typing':
          return _react2.default.createElement(_SystemMessage2.default, { key: msg.type + msg.timestamp, message: msg });
        case 'chat.rating':
          return _react2.default.createElement(_ChatRating2.default, { key: msg.type + msg.timestamp });
        case 'offline':
          return _react2.default.createElement(_OfflineForm2.default, { key: 'offline' });
        case 'prechat':
          return _react2.default.createElement(_PrechatForm2.default, { key: 'prechat' });
        default:
          return _react2.default.createElement(
            'div',
            { key: +new Date() },
            'Unhandled message: ',
            JSON.stringify(msg)
          );
      }
    }
  }, {
    key: 'renderTyping',
    value: function renderTyping(agents) {
      var _this2 = this;

      var agent_names = Object.values(agents).filter(function (agent) {
        return agent.typing;
      });
      return agent_names.map(function (agent) {
        return _react2.default.createElement(
          'div',
          { key: agent.nick, className: 'chat-msg-container agent' },
          _react2.default.createElement(
            'div',
            { className: 'avatar-container' },
            _react2.default.createElement(_Avatar2.default, { entity: _this2.props.agents[agent.nick] })
          ),
          _react2.default.createElement(
            'div',
            { className: 'chat-msg-wrapper' },
            _react2.default.createElement(
              'div',
              { className: 'chat-msg' },
              _react2.default.createElement(
                'div',
                { className: 'typing-indicator' },
                _react2.default.createElement(
                  'div',
                  { className: 'typing-indicator-part' },
                  '\u2022'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'typing-indicator-part' },
                  '\u2022'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'typing-indicator-part' },
                  '\u2022'
                )
              )
            )
          )
        );
      });
    }
  }, {
    key: 'renderAll',
    value: function renderAll(isOffline, messages) {
      var _this3 = this;

      var allMessages = [].concat(_toConsumableArray(messages));

      if (isOffline) {
        allMessages = [];
        allMessages.push({
          type: 'chat.msg',
          display_name: 'Chat Agent',
          nick: 'agent:offline',
          timestamp: +new Date(),
          member_type: 'agent',
          msg: 'Sorry, we are offline at the moment. Please leave us your contact information and we will get back to you soon!'
        });
        allMessages.push({
          type: 'offline'
        });
      } else if (!this.props.isChatting) {
        allMessages = [{
          type: 'prechat'
        }];
      }

      var prev = null;

      return allMessages.map(function (message) {
        var addClass = '',
            currentNick = message.nick,
            prevNick = prev && prev.nick;

        if (prev && prev.type === message.type && currentNick && currentNick === prevNick) addClass = 'sibling';

        prev = message;

        return _this3.renderByType(message, addClass);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'message-list-container' },
        _react2.default.createElement(
          'div',
          null,
          this.renderAll(this.props.isOffline, this.props.messages)
        ),
        this.renderTyping(this.props.agents)
      );
    }
  }]);

  return MessageList;
}(_react.Component);

MessageList.displayName = 'MessageList';
MessageList.propTypes = {
  messages: _propTypes2.default.array,
  agents: _propTypes2.default.object,
  isOffline: _propTypes2.default.bool,
  isChatting: _propTypes2.default.bool
};
MessageList.defaultProps = {
  messages: [],
  agents: {}
};

exports.default = MessageList;