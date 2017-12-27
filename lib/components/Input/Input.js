'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SendButton = require('./../SendButton');

var _SendButton2 = _interopRequireDefault(_SendButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.state = {};
    _this.onDragOver = _this.onDragOver.bind(_this);
    _this.onDrop = _this.onDrop.bind(_this);
    _this.onDragLeave = _this.onDragLeave.bind(_this);
    return _this;
  }

  _createClass(Input, [{
    key: 'getRawInput',
    value: function getRawInput() {
      return this.refs.input;
    }
  }, {
    key: 'onDragOver',
    value: function onDragOver(event) {
      this.setState({ dragover: true });
      event.preventDefault();

      event.dataTransfer.dropEffect = 'copy';
    }
  }, {
    key: 'onDrop',
    value: function onDrop(event) {
      this.setState({ dragover: false });
      this.props.onFileUpload(event);
    }
  }, {
    key: 'onDragLeave',
    value: function onDragLeave() {
      this.setState({ dragover: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var class_name = ['input-container', this.props.addClass, this.state.dragover ? 'drag-drop-zone' : ''].join(' ');

      return _react2.default.createElement(
        'div',
        { className: class_name,
          onDrop: this.onDrop,
          onDragOver: this.onDragOver,
          onDragLeave: this.onDragLeave },
        _react2.default.createElement(
          'form',
          {
            className: 'input-form',
            onSubmit: this.props.onSubmit },
          _react2.default.createElement('input', {
            className: 'input',
            ref: 'input',
            placeholder: 'Enter message here',
            onChange: this.props.onChange,
            onFocus: this.props.onFocus }),
          _react2.default.createElement(_SendButton2.default, { onClick: this.props.onSubmit })
        )
      );
    }
  }]);

  return Input;
}(_react.Component);

Input.displayName = 'Input';
Input.propTypes = {
  addClass: _react2.default.PropTypes.string,
  onSubmit: _react2.default.PropTypes.func,
  onChange: _react2.default.PropTypes.func,
  onFocus: _react2.default.PropTypes.func,
  onFileUpload: _react2.default.PropTypes.func
};

exports.default = Input;