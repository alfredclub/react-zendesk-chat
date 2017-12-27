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

var CardContainer = function (_Component) {
  _inherits(CardContainer, _Component);

  function CardContainer(props) {
    _classCallCheck(this, CardContainer);

    var _this = _possibleConstructorReturn(this, (CardContainer.__proto__ || Object.getPrototypeOf(CardContainer)).call(this, props));

    _this.renderIcon = _this.renderIcon.bind(_this);
    return _this;
  }

  _createClass(CardContainer, [{
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
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'card-container ' + this.props.addClass },
        this.renderIcon(),
        _react2.default.createElement(
          'div',
          { className: 'card-content ' + this.props.contentAddClass },
          _react2.default.createElement(
            'div',
            { className: 'card-title' },
            this.props.title
          ),
          this.props.children
        )
      );
    }
  }]);

  return CardContainer;
}(_react.Component);

CardContainer.displayName = 'CardContainer';
CardContainer.propTypes = {
  icon: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element]),
  title: _react2.default.PropTypes.string,
  addClass: _react2.default.PropTypes.string,
  contentAddClass: _react2.default.PropTypes.string
};
exports.default = CardContainer;