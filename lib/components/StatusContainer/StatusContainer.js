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

var StatusContainer = function (_Component) {
  _inherits(StatusContainer, _Component);

  function StatusContainer(props) {
    _classCallCheck(this, StatusContainer);

    var _this = _possibleConstructorReturn(this, (StatusContainer.__proto__ || Object.getPrototypeOf(StatusContainer)).call(this, props));

    _this.getStatusText = _this.getStatusText.bind(_this);
    return _this;
  }

  _createClass(StatusContainer, [{
    key: 'renderIcon',
    value: function renderIcon() {
      var isString = typeof this.props.icon === 'string';
      return _react2.default.createElement(
        'div',
        { className: 'card-icon' },
        !isString && this.props.icon
      );
    }
  }, {
    key: 'getStatusText',
    value: function getStatusText(status) {
      switch (status) {
        case 'online':
          return 'We\'re online!';
        case 'offline':
          return 'Leave us a message';
        case 'away':
          return 'We\'re away!';
        default:
          return 'Connecting...';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'status-container' },
        this.getStatusText(this.props.accountStatus),
        _react2.default.createElement(
          'div',
          { className: 'minimize-button', onClick: this.props.minimizeOnClick },
          _react2.default.createElement('div', { className: 'minimize-button-bar' })
        )
      );
    }
  }]);

  return StatusContainer;
}(_react.Component);

StatusContainer.displayName = 'StatusContainer';
StatusContainer.propTypes = {
  accountStatus: _propTypes2.default.string,
  minimizeOnClick: _propTypes2.default.func
};
exports.default = StatusContainer;