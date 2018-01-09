'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Avatar = require('./../Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _ActionButton = require('./../ActionButton/ActionButton');

var _ActionButton2 = _interopRequireDefault(_ActionButton);

var _webSdk = require('./../../../vendor/web-sdk');

var _webSdk2 = _interopRequireDefault(_webSdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatHistory = function (_Component) {
  _inherits(ChatHistory, _Component);

  function ChatHistory(props) {
    _classCallCheck(this, ChatHistory);

    var _this = _possibleConstructorReturn(this, (ChatHistory.__proto__ || Object.getPrototypeOf(ChatHistory)).call(this, props));

    _this.state = {
      chatsLoaded: 0
    };

    _this.loadMessages = _this.loadMessages.bind(_this);
    _this.handlePreviewClick = _this.handlePreviewClick.bind(_this);
    return _this;
  }

  _createClass(ChatHistory, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      var chats = props.history.chats;


      this.setState({
        chatsLoaded: chats.length
      });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var chats = nextProps.history.chats;


      return this.state.chatsLoaded !== chats.length;
    }
  }, {
    key: 'handlePreviewClick',
    value: function handlePreviewClick(chat) {
      var _this2 = this;

      this.props.onHistoryLoad();

      var storedChat = this.props.historyChats[chat.id];

      if (storedChat) {
        this.loadMessages(storedChat);
      }

      fetch(chat.url, {
        credentials: false,
        headers: {
          'X-Auth-Token': this.props.requestToken,
          Accept: 'application/vnd.alfredclub.v1+json',
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        return res.json();
      }).then(function (chat) {
        _this2.props.dispatch({
          type: 'history_chats',
          detail: { id: chat.id, messages: chat }
        });

        return chat;
      }).then(this.loadMessages);
    }
  }, {
    key: 'isAgentMsg',
    value: function isAgentMsg(chat, name) {
      return chat.agent_names.indexOf(name) > -1;
    }
  }, {
    key: 'loadMessages',
    value: function loadMessages(chat) {
      var _this3 = this;

      this.props.onHistoryLoaded();

      chat.history.forEach(function (detail) {
        return _this3.props.dispatch({
          type: 'chat',
          detail: _extends({}, detail, {
            nick: _this3.isAgentMsg(chat, detail.name) ? 'agent:' + detail.name : 'visitor',
            display_name: detail.name
          })
        });
      });
    }
  }, {
    key: 'renderPreviews',
    value: function renderPreviews() {
      var _this4 = this;

      var chats = this.props.history.chats;


      return chats.map(function (chat, index) {
        return _react2.default.createElement(
          'div',
          {
            className: 'preview',
            key: 'preview_' + index,
            onClick: function onClick() {
              return _this4.handlePreviewClick(chat);
            }
          },
          _react2.default.createElement(
            'div',
            { className: 'preview-text' },
            _react2.default.createElement(
              'div',
              { className: 'chat-msg-container visitor' },
              _react2.default.createElement(
                'div',
                { className: 'avatar-container visitor' },
                _react2.default.createElement(_Avatar2.default, { entity: _extends({}, _this4.props.visitor, { nick: '' }) })
              )
            ),
            _react2.default.createElement(
              'span',
              null,
              chat.preview
            )
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'history' },
        this.renderPreviews()
      );
    }
  }]);

  return ChatHistory;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref, props) {
  var history = _ref.history,
      historyChats = _ref.historyChats,
      visitor = _ref.visitor;
  return _extends({}, props, {
    history: history,
    historyChats: historyChats,
    visitor: visitor
  });
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ChatHistory);