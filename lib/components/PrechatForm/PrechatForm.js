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

var _MessageSvg = require('./../MessageSvg');

var _MessageSvg2 = _interopRequireDefault(_MessageSvg);

var _ActionButton = require('./../ActionButton');

var _ActionButton2 = _interopRequireDefault(_ActionButton);

var _utils = require('./../../utils');

var _reactRedux = require('react-redux');

var _webSdk = require('./../../../vendor/web-sdk');

var _webSdk2 = _interopRequireDefault(_webSdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PrechatForm = function (_Component) {
  _inherits(PrechatForm, _Component);

  function PrechatForm(props) {
    _classCallCheck(this, PrechatForm);

    var _this = _possibleConstructorReturn(this, (PrechatForm.__proto__ || Object.getPrototypeOf(PrechatForm)).call(this, props));

    _this.state = {
      sent: false
    };
    _this.send = _this.send.bind(_this);
    _this.renderChild = _this.renderChild.bind(_this);
    return _this;
  }

  _createClass(PrechatForm, [{
    key: 'send',
    value: function send(event) {
      event.preventDefault();
      var msg = this.refs.message.value;

      // Don't send empty messages
      if (!msg) return;

      _webSdk2.default.setVisitorInfo({
        display_name: this.refs.name.value,
        email: this.refs.email.value
      }, function (err) {
        if (err) return;

        _webSdk2.default.sendChatMsg(msg, function (err) {
          if (err) (0, _utils.log)('Error sending message');
        });
      });

      this.props.dispatch({
        type: 'synthetic',
        detail: {
          type: 'visitor_send_msg',
          msg: msg
        }
      });
    }
  }, {
    key: 'renderChild',
    value: function renderChild() {
      return _react2.default.createElement(
        'form',
        { key: 'not-sent', className: 'offline-form' },
        _react2.default.createElement(
          'div',
          { className: 'content' },
          _react2.default.createElement(
            'div',
            { className: 'section' },
            _react2.default.createElement(
              'label',
              { className: 'label' },
              'Name'
            ),
            _react2.default.createElement('input', { ref: 'name' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'section' },
            _react2.default.createElement(
              'label',
              { className: 'label' },
              'Email'
            ),
            _react2.default.createElement('input', { ref: 'email' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'section' },
            _react2.default.createElement(
              'label',
              { className: 'label' },
              'Message'
            ),
            _react2.default.createElement('textarea', { ref: 'message' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'button-container' },
          _react2.default.createElement(_ActionButton2.default, {
            addClass: 'button-send',
            label: 'Send',
            onClick: this.send
          })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _CardContainer2.default,
        {
          title: 'Introduce yourself!',
          addClass: 'offline-card',
          contentAddClass: this.state.sent ? 'sent' : '',
          icon: _react2.default.createElement(_MessageSvg2.default, null)
        },
        this.renderChild()
      );
    }
  }]);

  return PrechatForm;
}(_react.Component);

PrechatForm.displayName = 'PrechatForm';
PrechatForm.propTypes = {
  onClick: _propTypes2.default.func,
  addClass: _propTypes2.default.string
};

exports.default = (0, _reactRedux.connect)()(PrechatForm);