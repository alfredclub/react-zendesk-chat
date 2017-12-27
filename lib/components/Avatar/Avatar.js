'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Avatar = function (_Component) {
  _inherits(Avatar, _Component);

  function Avatar() {
    _classCallCheck(this, Avatar);

    return _possibleConstructorReturn(this, (Avatar.__proto__ || Object.getPrototypeOf(Avatar)).apply(this, arguments));
  }

  _createClass(Avatar, [{
    key: 'getVisitorSvg',
    value: function getVisitorSvg() {
      return _react2.default.createElement(
        'svg',
        { width: '16', height: '19', viewBox: '0 0 16 19' },
        _react2.default.createElement('path', { d: 'M11.5 5c0-1.933-1.567-3.5-3.5-3.5S4.5 3.067 4.5 5 6.067 8.5 8 8.5s3.5-1.567 3.5-3.5zM3 5c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5zM1.955 17.294c.21-.642.504-1.285.898-1.88C3.963 13.74 5.615 12.75 8 12.75c2.385 0 4.038.99 5.147 2.664.394.595.69 1.238.898 1.88.124.382.19.672.214.822.063.41.447.69.856.625.41-.063.69-.447.625-.856-.034-.225-.118-.59-.27-1.053-.247-.763-.598-1.527-1.073-2.244C13.024 12.51 10.917 11.25 8 11.25c-2.916 0-5.024 1.26-6.397 3.336-.475.717-.826 1.48-1.074 2.245-.152.463-.236.83-.27 1.054-.065.41.215.793.624.857.41.065.793-.215.857-.624.025-.15.09-.44.215-.822z', fill: '#FFF', fillRule: 'evenodd' })
      );
    }
  }, {
    key: 'renderAvatar',
    value: function renderAvatar(entity) {
      var style = {};
      var child = void 0;
      if (entity && (0, _utils.isAgent)(entity.nick) && entity.avatar_path) {
        style.backgroundImage = 'url(\'' + entity.avatar_path + '\')';
        style.backgroundColor = 'none';
      } else {
        child = this.getVisitorSvg();
      }

      return _react2.default.createElement(
        'div',
        { className: 'avatar', style: style, title: entity ? entity.display_name : 'Agent' },
        child
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return this.renderAvatar(this.props.entity);
    }
  }]);

  return Avatar;
}(_react.Component);

Avatar.displayName = 'Avatar';
Avatar.propTypes = {
  entity: _react2.default.PropTypes.object
};

exports.default = Avatar;