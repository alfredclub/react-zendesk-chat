'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CardContainer = require('./../CardContainer');

var _CardContainer2 = _interopRequireDefault(_CardContainer);

var _MessageSvg = require('./../MessageSvg');

var _MessageSvg2 = _interopRequireDefault(_MessageSvg);

var _ActionButton = require('./../ActionButton');

var _ActionButton2 = _interopRequireDefault(_ActionButton);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _webSdk = require('./../../../vendor/web-sdk');

var _webSdk2 = _interopRequireDefault(_webSdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OfflineForm = function (_Component) {
  _inherits(OfflineForm, _Component);

  function OfflineForm(props) {
    _classCallCheck(this, OfflineForm);

    var _this = _possibleConstructorReturn(this, (OfflineForm.__proto__ || Object.getPrototypeOf(OfflineForm)).call(this, props));

    _this.state = {
      sent: false
    };
    _this.send = _this.send.bind(_this);
    _this.sendAnother = _this.sendAnother.bind(_this);
    _this.renderChild = _this.renderChild.bind(_this);
    return _this;
  }

  _createClass(OfflineForm, [{
    key: 'send',
    value: function send(event) {
      var _this2 = this;

      event.preventDefault();
      _webSdk2.default.sendOfflineMsg({
        name: this.refs.name.value,
        email: this.refs.email.value,
        message: this.refs.message.value
      }, function (err) {
        if (err) return;
        _this2.setState({
          sent: true
        });
      });
    }
  }, {
    key: 'sendAnother',
    value: function sendAnother() {
      this.setState({
        sent: false
      });
    }
  }, {
    key: 'renderChild',
    value: function renderChild() {
      if (this.state.sent) {
        return _react2.default.createElement(
          'div',
          { key: 'sent', className: 'offline-sent' },
          'Your message has been sent. We will get back to you as soon as possible.',
          _react2.default.createElement(_ActionButton2.default, {
            addClass: 'button-resend',
            label: 'Send another',
            onClick: this.sendAnother
          })
        );
      } else {
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
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _CardContainer2.default,
        { addClass: 'offline-card', contentAddClass: this.state.sent ? 'sent' : '', icon: _react2.default.createElement(_MessageSvg2.default, null) },
        _react2.default.createElement(
          _reactAddonsCssTransitionGroup2.default,
          {
            className: 'offline-container',
            transitionName: this.state.sent ? 'offline-shrink' : 'offline-grow',
            transitionEnterTimeout: 250,
            transitionLeaveTimeout: 250 },
          this.renderChild()
        )
      );
    }
  }]);

  return OfflineForm;
}(_react.Component);

OfflineForm.displayName = 'OfflineForm';
OfflineForm.propTypes = {
  onClick: _react2.default.PropTypes.func,
  addClass: _react2.default.PropTypes.string
};

exports.default = OfflineForm;