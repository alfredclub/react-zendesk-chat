'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('./../utils');

var _redux = require('redux');

var _sortedMap = require('collections/sorted-map');

var _sortedMap2 = _interopRequireDefault(_sortedMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_STATE = {
	connection: 'closed',
	account_status: 'offline',
	departments: {},
	visitor: {},
	agents: {},
	chats: (0, _sortedMap2.default)(),
	last_timestamp: 0,
	is_chatting: false
};

// IMPT: Need to return on every case
function update() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
	var action = arguments[1];

	(0, _utils.log)('action', action);

	if (action.detail && action.detail.timestamp) state.last_timestamp = action.detail.timestamp;

	switch (action.type) {
		case 'connection_update':
			return _extends({}, state, {
				connection: action.detail
			});
		case 'account_status':
			return _extends({}, state, {
				account_status: action.detail
			});
		case 'department_update':
			return _extends({}, state, {
				departments: _extends({}, state.departments, _defineProperty({}, action.detail.id, action.detail))
			});
		case 'visitor_update':
			return _extends({}, state, {
				visitor: _extends({}, state.visitor, action.detail)
			});
		case 'agent_update':
			return _extends({}, state, {
				agents: _extends({}, state.agents, _defineProperty({}, action.detail.nick, _extends({}, action.detail, {
					nick: action.detail.nick, // To be removed after standardization
					typing: (state.agents[action.detail.nick] || { typing: false }).typing
				})))
			});
		case 'chat':
			var new_state = _extends({}, state);
			switch (action.detail.type) {
				/* Web SDK events */
				case 'chat.memberjoin':
					if ((0, _utils.isAgent)(action.detail.nick)) {
						if (!new_state.agents[action.detail.nick]) new_state.agents[action.detail.nick] = {};
						new_state.agents[action.detail.nick].nick = action.detail.nick;
					} else new_state.visitor.nick = action.detail.nick;

					if (!(0, _utils.isAgent)(action.detail.nick)) {
						new_state.is_chatting = true;
					}

					// Concat this event to chats to be displayed
					new_state.chats = state.chats.concat(_defineProperty({}, action.detail.timestamp, _extends({}, action.detail)));

					return new_state;
				case 'chat.memberleave':
					if (!(0, _utils.isAgent)(action.detail.nick)) {
						new_state.is_chatting = false;
					}

					// Concat this event to chats to be displayed
					new_state.chats = state.chats.concat(_defineProperty({}, action.detail.timestamp, _extends({}, action.detail)));

					return new_state;
				case 'chat.file':
				case 'chat.wait_queue':
				case 'chat.request.rating':
				case 'chat.msg':
					// Ensure that triggers are uniquely identified by their display names
					if ((0, _utils.isTrigger)(action.detail.nick)) action.detail.nick = 'agent:trigger:' + action.detail.display_name;
					new_state.chats = state.chats.concat(_defineProperty({}, action.detail.timestamp, _extends({}, action.detail, {
						member_type: (0, _utils.isAgent)(action.detail.nick) ? 'agent' : 'visitor'
					})));
					return new_state;
				case 'typing':
					var agent = state.agents[action.detail.nick];
					// Ensure that triggers are uniquely identified by their display names
					if ((0, _utils.isTrigger)(action.detail.nick)) {
						agent = {
							nick: 'agent:trigger:' + action.detail.display_name,
							display_name: action.detail.display_name
						};
					}
					return _extends({}, state, {
						agents: _extends({}, state.agents, _defineProperty({}, agent.nick, _extends({}, agent, {
							typing: action.detail.typing
						})))
					});
				default:
					return state;
			}
		default:
			(0, _utils.log)('unhandled action', action);
			return state;
	}
}

function storeHandler() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
	var action = arguments[1];

	var result = void 0,
	    new_action = {};
	if (action.type === 'synthetic') {
		(0, _utils.log)('synthetic action', action);

		/**
   * Use last message timestamp for user-sent messages
   * instead of new Date() since there might be huge skew
   * between user's local computer and the server, which can
   * cause messages to appear in the wrong order.
   */
		var new_timestamp = state.last_timestamp + 1;

		switch (action.detail.type) {
			case 'visitor_send_msg':
				new_action = {
					type: 'chat',
					detail: {
						type: 'chat.msg',
						display_name: state.visitor.display_name,
						nick: state.visitor.nick || 'visitor:',
						timestamp: new_timestamp,
						msg: action.detail.msg,
						source: 'local'
					}
				};
				break;
			case 'visitor_send_file':
				new_action = {
					type: 'chat',
					detail: {
						type: 'chat.file',
						display_name: state.visitor.display_name,
						nick: state.visitor.nick || 'visitor:',
						timestamp: new_timestamp,
						attachment: action.detail.attachment,
						source: 'local'
					}
				};
				break;
			default:
				new_action = action;
		}

		result = update(state, new_action);
	} else {
		result = update(state, action);
	}

	return result;
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
// let ChatStore = createStore(update, applyMiddleware(chatMiddleware));
var ChatStore = (0, _redux.createStore)(storeHandler, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

exports.default = ChatStore;