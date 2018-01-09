'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _StatusContainer = require('./../StatusContainer');

var _StatusContainer2 = _interopRequireDefault(_StatusContainer);

var _MessageList = require('./../MessageList');

var _MessageList2 = _interopRequireDefault(_MessageList);

var _ChatButton = require('./../ChatButton');

var _ChatButton2 = _interopRequireDefault(_ChatButton);

var _ChatHistory = require('./../ChatHistory');

var _ChatHistory2 = _interopRequireDefault(_ChatHistory);

var _InitChatButton = require('./../InitChatButton');

var _InitChatButton2 = _interopRequireDefault(_InitChatButton);

var _Input = require('./../Input');

var _Input2 = _interopRequireDefault(_Input);

var _utils = require('./../../utils');

var _lodash = require('lodash');

var _webSdk = require('./../../../vendor/web-sdk');

var _webSdk2 = _interopRequireDefault(_webSdk);

var _eventsSystem = require('./../../utils/events-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var events = ['account_status', 'connection_update', 'department_update', 'visitor_update', 'agent_update', 'chat', 'error'];

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      theme: _this.props.theme,
      typing: false,
      visible: false,
      chatInitiated: false,
      displayingHistory: true,
      displayHistoryMessages: false,
      loading: true
    };

    _this.timer = null;
    _this.handleOnSubmit = _this.handleOnSubmit.bind(_this);
    _this.handleOnChange = _this.handleOnChange.bind(_this);
    _this.getVisibilityClass = _this.getVisibilityClass.bind(_this);
    _this.minimizeOnClick = _this.minimizeOnClick.bind(_this);
    _this.returnToConversationsList = _this.returnToConversationsList.bind(_this);
    _this.chatButtonOnClick = _this.chatButtonOnClick.bind(_this);
    _this.mapToEntities = _this.mapToEntities.bind(_this);
    _this.isOffline = _this.isOffline.bind(_this);
    _this.stopTyping = (0, _lodash.debounce)(_this.stopTyping.bind(_this), 1000);
    _this.setVisible = _this.setVisible.bind(_this);
    _this.handleFileUpload = _this.handleFileUpload.bind(_this);
    _this.displayMessage = _this.displayMessage.bind(_this);
    _this.loadHistory = _this.loadHistory.bind(_this);
    _this.hideHistory = _this.hideHistory.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _webSdk2.default.init({
        account_key: this.props.accountKey
      });

      this.setVisitorInfo();

      this.setState({ chatInitiated: true });

      events.forEach(function (evt) {
        _webSdk2.default.on(evt, function (data) {
          _this2.props.dispatch({
            type: evt,
            detail: data
          });
        });
      });

      this.setState({
        visible: (0, _utils.get)('visible') || this.state.visible,
        theme: (0, _utils.get)('theme') || this.state.theme
      });

      _eventsSystem.EventsSystem.subscribe('display', this.setVisible.bind(this, true)).subscribe('displayNewMessage', this.displayMessage).subscribe('loadHistory', this.loadHistory);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.data.connection === 'connected' && this.state.loading) {
        this.setState({ loading: false });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this3 = this;

      events.forEach(function (evt) {
        _webSdk2.default.un(evt, function (data) {
          _this3.props.dispatch({
            type: evt,
            detail: data
          });
        });
      });

      _eventsSystem.EventsSystem.unsubscribe('display', this.setVisible.bind(this, true)).unsubscribe('displayNewMessage', this.displayMessage).unsubscribe('loadHistory', this.loadHistory);
    }
  }, {
    key: 'setVisitorInfo',
    value: function setVisitorInfo() {
      if (this.props.visitor) {
        var _props$visitor = this.props.visitor,
            name = _props$visitor.name,
            email = _props$visitor.email,
            phone = _props$visitor.phone;


        _webSdk2.default.setVisitorInfo({
          email: email,
          display_name: name,
          phone: phone
        });
      }
    }
  }, {
    key: 'displayMessage',
    value: function displayMessage(message) {
      var _this4 = this;

      this.startChat().then(function () {
        _this4.setVisible(true);
        _this4.refs.input.getRawInput().value = message;
        _webSdk2.default.sendTyping(true);
        _this4.setState({ typing: true });
      });
    }
  }, {
    key: 'loadHistory',
    value: function loadHistory(chats) {
      this.props.dispatch({
        type: 'history_loaded',
        detail: { loaded: true, chats: chats }
      });
    }
  }, {
    key: 'handleOnChange',
    value: function handleOnChange() {
      if (!this.state.typing) {
        _webSdk2.default.sendTyping(true);
        this.setState({ typing: true });
      }
      this.stopTyping();
    }
  }, {
    key: 'stopTyping',
    value: function stopTyping() {
      if (!this.state.typing) return;

      _webSdk2.default.sendTyping(false);
      this.setState({ typing: false });
    }
  }, {
    key: 'handleOnSubmit',
    value: function handleOnSubmit(event) {
      event && event.preventDefault();

      // Don't allow visitor to send msg if not chatting
      if (this.isOffline()) return;

      var msg = this.refs.input.getRawInput().value;

      // Don't send empty messages
      if (!msg) return;

      // Immediately stop typing
      this.stopTyping.flush();

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
      this.refs.input.getRawInput().value = '';
    }
  }, {
    key: 'handleFileUpload',
    value: function handleFileUpload(event) {
      event.preventDefault();

      // Don't allow visitor to send file if offline
      if (this.isOffline()) return;

      // Only send the first file dropped on input
      var file = event.dataTransfer.files[0];

      // Generate attachment object for local echo
      var attachment = {
        mime_type: file.type,
        name: file.name,
        size: file.size,
        url: window.URL.createObjectURL(file)
      };

      _webSdk2.default.sendFile(file, function (err) {
        if (err) {
          (0, _utils.log)('Error occured >>>', err);
          return;
        }
      });

      this.props.dispatch({
        type: 'synthetic',
        detail: {
          type: 'visitor_send_file',
          attachment: attachment
        }
      });
    }
  }, {
    key: 'getVisibilityClass',
    value: function getVisibilityClass() {
      return this.state.visible ? 'visible' : '';
    }
  }, {
    key: 'minimizeOnClick',
    value: function minimizeOnClick() {
      this.setVisible(false);
      _eventsSystem.EventsSystem.emit('onHide');
    }
  }, {
    key: 'returnToConversationsList',
    value: function returnToConversationsList() {
      this.setState({
        displayingHistory: true,
        displayHistoryMessages: false
      });
    }
  }, {
    key: 'chatButtonOnClick',
    value: function chatButtonOnClick() {
      this.setVisible(true);
      _eventsSystem.EventsSystem.emit('display');
    }
  }, {
    key: 'setVisible',
    value: function setVisible(visible) {
      this.setState({
        visible: visible
      });
      (0, _utils.set)('visible', visible);
    }
  }, {
    key: 'mapToEntities',
    value: function mapToEntities(visitor, agents) {
      var entities = {};
      if (visitor) {
        entities[visitor.nick] = _extends({}, visitor, {
          type: 'visitor'
        });
      }

      if (agents && Object.keys(agents).length) {
        Object.values(agents).forEach(function (agent) {
          if (!agent.nick) return;

          entities[agent.nick] = _extends({}, agent, {
            type: 'agent'
          });
        });
      }

      if (this.isOffline()) {
        entities['agent:offline'] = {
          type: 'agent',
          nick: 'agent:offline'
        };
      }

      return entities;
    }
  }, {
    key: 'isOffline',
    value: function isOffline() {
      return this.props.data.account_status === 'offline' && !this.isChatEnabled();
    }
  }, {
    key: 'isChatEnabled',
    value: function isChatEnabled() {
      return this.props.data.is_chatting || !!this.props.visitor;
    }
  }, {
    key: 'getContainerText',
    value: function getContainerText() {
      var _state = this.state,
          displayingHistory = _state.displayingHistory,
          displayHistoryMessages = _state.displayHistoryMessages;


      if (displayingHistory) {
        return 'conversations';
      }

      if (displayHistoryMessages) {
        return 'conversation_history';
      }

      return this.props.data.account_status;
    }
  }, {
    key: 'startChat',
    value: function startChat() {
      var _this5 = this;

      return new Promise(function (resolve) {
        _this5.props.dispatch({ type: 'clean_chats' });
        _this5.hideHistory(false).then(function () {
          _webSdk2.default.getChatLog().forEach(function (detail) {
            _this5.props.dispatch({
              type: 'chat',
              detail: detail
            });
          });

          resolve();
        });
      });
    }
  }, {
    key: 'startHistoryLoad',
    value: function startHistoryLoad() {
      this.setState({ loading: true });
      this.props.dispatch({ type: 'clean_chats' });
    }
  }, {
    key: 'hideHistory',
    value: function hideHistory(displayHistoryMessages) {
      var _this6 = this;

      return new Promise(function (resolve) {
        _this6.setState({
          loading: false,
          displayingHistory: false,
          displayHistoryMessages: displayHistoryMessages
        }, resolve);
      });
    }
  }, {
    key: 'hasChatSessionStarted',
    value: function hasChatSessionStarted() {
      return this.state.chatInitiated && _webSdk2.default.getChatLog().length > 0;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this7 = this;

      var entities = this.mapToEntities(this.props.data.visitor, this.props.data.agents);
      var isOffline = this.isOffline();
      var _state2 = this.state,
          displayingHistory = _state2.displayingHistory,
          displayHistoryMessages = _state2.displayHistoryMessages;


      return _react2.default.createElement(
        'div',
        { className: 'index' },
        _react2.default.createElement(
          'div',
          { className: 'widget-container normal ' + this.getVisibilityClass() },
          _react2.default.createElement(_StatusContainer2.default, {
            accountStatus: this.getContainerText(),
            onBackClick: this.returnToConversationsList,
            minimizeOnClick: this.minimizeOnClick
          }),
          displayingHistory && _react2.default.createElement(_ChatHistory2.default, {
            requestToken: this.props.requestToken,
            onHistoryLoad: function onHistoryLoad() {
              return _this7.startHistoryLoad();
            },
            onHistoryLoaded: function onHistoryLoaded() {
              return _this7.hideHistory(true);
            }
          }),
          !displayingHistory && _react2.default.createElement(_MessageList2.default, {
            isChatting: this.isChatEnabled(),
            isOffline: isOffline,
            messages: this.props.data && this.props.data.chats.toArray(),
            agents: this.props.data.agents,
            entities: entities
          }),
          _react2.default.createElement(
            'div',
            {
              className: 'spinner-container ' + (this.state.visible && (this.props.data.connection !== 'connected' || this.state.loading) ? 'visible' : '')
            },
            _react2.default.createElement('div', { className: 'spinner' })
          ),
          !displayingHistory && !displayHistoryMessages && _react2.default.createElement(_Input2.default, {
            addClass: this.isChatEnabled() ? 'visible' : '',
            ref: 'input',
            onSubmit: this.handleOnSubmit,
            onChange: this.handleOnChange,
            onFocus: this.inputOnFocus,
            onFileUpload: this.handleFileUpload
          }),
          displayingHistory && _react2.default.createElement(_InitChatButton2.default, { onClick: function onClick() {
              return _this7.startChat();
            },
            chatSessionStarted: this.hasChatSessionStarted() })
        ),
        _react2.default.createElement(_ChatButton2.default, {
          addClass: this.getVisibilityClass(),
          onClick: this.chatButtonOnClick
        })
      );
    }
  }]);

  return App;
}(_react.Component);

App.displayName = 'App';

var mapStateToProps = function mapStateToProps(state, props) {
  return _extends({}, props, {
    data: state
  });
};

var WrappedApp = (0, _reactRedux.connect)(mapStateToProps)(App);

exports.default = WrappedApp;