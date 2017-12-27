'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});
exports.ZendeskChat = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ChatWidget = require('./components/ChatWidget');

var _ChatWidget2 = _interopRequireDefault(_ChatWidget);

var _reactRedux = require('react-redux');

var _ChatStore = require('./stores/ChatStore');

var _ChatStore2 = _interopRequireDefault(_ChatStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZendeskChat = exports.ZendeskChat = function ZendeskChat() {
		return _react2.default.createElement(
				_reactRedux.Provider,
				{ store: _ChatStore2.default },
				_react2.default.createElement(_ChatWidget2.default, null)
		);
};