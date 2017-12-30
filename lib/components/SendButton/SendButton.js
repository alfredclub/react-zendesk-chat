'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SendButton = function (_Component) {
  _inherits(SendButton, _Component);

  function SendButton(props) {
    _classCallCheck(this, SendButton);

    return _possibleConstructorReturn(this, (SendButton.__proto__ || Object.getPrototypeOf(SendButton)).call(this, props));
  }

  _createClass(SendButton, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          className: 'send-button ' + (this.props.addClass || ''),
          onClick: this.props.onClick
        },
        _react2.default.createElement(
          'svg',
          { width: '12', height: '13', viewBox: '0 0 12 13' },
          _react2.default.createElement('path', {
            d: 'M3 6L0 0c-.056.14 12 6 12 6L0 13c.053.083 3-7 3-7z',
            fill: '#FFF',
            fillRule: 'evenodd'
          })
        )
      );
    }
  }]);

  return SendButton;
}(_react.Component);

SendButton.displayName = 'SendButton';
SendButton.propTypes = {
  onClick: _propTypes2.default.func,
  addClass: _propTypes2.default.string
};

exports.default = SendButton;