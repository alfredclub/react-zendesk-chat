'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CardContainer = require('./../CardContainer');

var _CardContainer2 = _interopRequireDefault(_CardContainer);

var _ActionButton = require('./../ActionButton');

var _ActionButton2 = _interopRequireDefault(_ActionButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatRating = function (_Component) {
  _inherits(ChatRating, _Component);

  function ChatRating(props) {
    _classCallCheck(this, ChatRating);

    return _possibleConstructorReturn(this, (ChatRating.__proto__ || Object.getPrototypeOf(ChatRating)).call(this, props));
  }

  _createClass(ChatRating, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _CardContainer2.default,
        { title: 'Chat Rating', addClass: 'chat-rating-card' },
        this.props.agent.display_name,
        ' has requested you to rate the chat service.',
        _react2.default.createElement(
          'div',
          { className: 'buttons-container' },
          _react2.default.createElement(_ActionButton2.default, { addClass: 'button button-rate-down', label: 'Rate down' }),
          _react2.default.createElement(_ActionButton2.default, { addClass: 'button button-rate-up', label: 'Rate up' })
        )
      );
    }
  }]);

  return ChatRating;
}(_react.Component);

ChatRating.displayName = 'ChatRating';
ChatRating.propTypes = {
  agent: _propTypes2.default.object
};
ChatRating.defaultProps = {};

exports.default = ChatRating;