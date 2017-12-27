'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ChatImage = require('components/ChatImage');

var _ChatImage2 = _interopRequireDefault(_ChatImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatMedia = function (_Component) {
  _inherits(ChatMedia, _Component);

  function ChatMedia(props) {
    _classCallCheck(this, ChatMedia);

    var _this = _possibleConstructorReturn(this, (ChatMedia.__proto__ || Object.getPrototypeOf(ChatMedia)).call(this, props));

    _this.renderMediaByType = _this.renderMediaByType.bind(_this);
    return _this;
  }

  _createClass(ChatMedia, [{
    key: 'renderMediaByType',
    value: function renderMediaByType(message) {
      switch (true) {
        case /^image/.test(message.attachment.mime_type):
          return _react2.default.createElement(_ChatImage2.default, { message: message });
        default:
          return _react2.default.createElement(
            'a',
            { href: this.props.message.attachment.url, target: '_blank' },
            _react2.default.createElement(
              'div',
              { className: 'chat-msg' },
              '\u2B07\uFE0F Download ',
              this.props.message.attachment.name
            )
          );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'chat-media-container' },
        this.renderMediaByType(this.props.message)
      );
    }
  }]);

  return ChatMedia;
}(_react.Component);

ChatMedia.displayName = 'ChatMedia';
ChatMedia.propTypes = {
  message: _react2.default.PropTypes.object
};

exports.default = ChatMedia;