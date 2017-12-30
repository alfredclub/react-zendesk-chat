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

var _Input = require('./../Input');

var _Input2 = _interopRequireDefault(_Input);

var _utils = require('./../../utils');

var _lodash = require('lodash');

var _webSdk = require('./../../../vendor/web-sdk');

var _webSdk2 = _interopRequireDefault(_webSdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      theme: _this.props.theme,
      typing: false,
      visible: false
    };

    _this.timer = null;
    _this.handleOnSubmit = _this.handleOnSubmit.bind(_this);
    _this.handleOnChange = _this.handleOnChange.bind(_this);
    _this.getVisibilityClass = _this.getVisibilityClass.bind(_this);
    _this.minimizeOnClick = _this.minimizeOnClick.bind(_this);
    _this.chatButtonOnClick = _this.chatButtonOnClick.bind(_this);
    _this.mapToEntities = _this.mapToEntities.bind(_this);
    _this.isOffline = _this.isOffline.bind(_this);
    _this.stopTyping = (0, _lodash.debounce)(_this.stopTyping.bind(_this), 1000);
    _this.setVisible = _this.setVisible.bind(_this);
    _this.handleFileUpload = _this.handleFileUpload.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var events = ['account_status', 'connection_update', 'department_update', 'visitor_update', 'agent_update', 'chat', 'error'];

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
    }
  }, {
    key: 'chatButtonOnClick',
    value: function chatButtonOnClick() {
      this.setVisible(true);
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
    key: 'render',
    value: function render() {
      var entities = this.mapToEntities(this.props.data.visitor, this.props.data.agents);
      var isOffline = this.isOffline();

      return _react2.default.createElement(
        'div',
        { className: 'index' },
        _react2.default.createElement(
          'div',
          { className: 'widget-container normal ' + this.getVisibilityClass() },
          _react2.default.createElement(_StatusContainer2.default, {
            accountStatus: this.props.data.account_status,
            minimizeOnClick: this.minimizeOnClick
          }),
          _react2.default.createElement(_MessageList2.default, {
            isChatting: this.isChatEnabled(),
            isOffline: isOffline,
            messages: this.props.data && this.props.data.chats.toArray(),
            agents: this.props.data.agents,
            entities: entities
          }),
          _react2.default.createElement(
            'div',
            { className: 'spinner-container ' + (this.state.visible && this.props.data.connection !== 'connected' ? 'visible' : '') },
            _react2.default.createElement('div', { className: 'spinner' })
          ),
          _react2.default.createElement(_Input2.default, {
            addClass: this.isChatEnabled() ? 'visible' : '',
            ref: 'input',
            onSubmit: this.handleOnSubmit,
            onChange: this.handleOnChange,
            onFocus: this.inputOnFocus,
            onFileUpload: this.handleFileUpload
          })
        ),
        _react2.default.createElement(_ChatButton2.default, { addClass: this.getVisibilityClass(), onClick: this.chatButtonOnClick })
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