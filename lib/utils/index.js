'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.log = log;
exports.isAgent = isAgent;
exports.isTrigger = isTrigger;

var _PersistentStorage = require('./PersistentStorage');

Object.keys(_PersistentStorage).forEach(function (key) {
	if (key === "default" || key === "__esModule") return;
	Object.defineProperty(exports, key, {
		enumerable: true,
		get: function get() {
			return _PersistentStorage[key];
		}
	});
});
function log() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	console.log.apply(console, args); // eslint-disable-line no-console
}

function isAgent(nick) {
	return nick && nick.startsWith('agent:');
}

function isTrigger(nick) {
	return nick && nick.startsWith('agent:trigger');
}