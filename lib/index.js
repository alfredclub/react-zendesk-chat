'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZendeskChat = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ChatWidget = require('./components/ChatWidget');

var _ChatWidget2 = _interopRequireDefault(_ChatWidget);

var _reactRedux = require('react-redux');

var _ChatStore = require('./stores/ChatStore');

var _ChatStore2 = _interopRequireDefault(_ChatStore);

var _webSdk = require('./../vendor/web-sdk');

var _webSdk2 = _interopRequireDefault(_webSdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ZendeskChat = exports.ZendeskChat = function (_Component) {
  _inherits(ZendeskChat, _Component);

  function ZendeskChat(props) {
    _classCallCheck(this, ZendeskChat);

    return _possibleConstructorReturn(this, (ZendeskChat.__proto__ || Object.getPrototypeOf(ZendeskChat)).call(this, props));
  }

  _createClass(ZendeskChat, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _webSdk2.default.init({
        account_key: this.props.accountKey
      });

      this.setVisitorInfo();
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
          email: email, display_name: name, phone: phone
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: _ChatStore2.default },
        _react2.default.createElement(_ChatWidget2.default, this.props)
      );
    }
  }]);

  return ZendeskChat;
}(_react.Component);