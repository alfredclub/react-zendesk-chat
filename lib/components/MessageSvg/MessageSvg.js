'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MessageSvg = function (_Component) {
  _inherits(MessageSvg, _Component);

  function MessageSvg() {
    _classCallCheck(this, MessageSvg);

    return _possibleConstructorReturn(this, (MessageSvg.__proto__ || Object.getPrototypeOf(MessageSvg)).apply(this, arguments));
  }

  _createClass(MessageSvg, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'svg',
        { className: 'message-svg', width: '16', height: '12', viewBox: '0 0 16 12' },
        _react2.default.createElement('path', { d: 'M14.4 0H1.6C.72 0 .008.675.008 1.5L0 10.5c0 .825.72 1.5 1.6 1.5h12.8c.88 0 1.6-.675 1.6-1.5v-9c0-.825-.72-1.5-1.6-1.5zm0 3L8 6.75 1.6 3V1.5L8 5.25l6.4-3.75V3z', fill: '#424242', fillRule: 'evenodd' })
      );
    }
  }]);

  return MessageSvg;
}(_react.Component);

MessageSvg.displayName = 'MessageSvg';

exports.default = MessageSvg;