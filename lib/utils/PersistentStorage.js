'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.get = get;
exports.set = set;

var _store = require('store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PREFIX = 'z.wdgt.';

function get(key) {
	return _store2.default.get(PREFIX + key);
}

function set(key, value) {
	return _store2.default.set(PREFIX + key, value);
}

function init() {
	if (!_store2.default.enabled) {
		exports.get = get = function get() {};
		exports.set = set = function set() {};
	}
}

init();