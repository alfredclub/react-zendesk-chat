"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var EventsSystem = function () {
  var queue = {};

  return {
    subscribe: function subscribe(event, callback) {
      if (!queue[event]) {
        queue[event] = [];
      }

      queue[event].push(callback);

      return this;
    },
    unsubscribe: function unsubscribe(event, callback) {
      if (!queue[event]) {
        return this;
      }

      if (!callback) {
        delete queue[event];
        return this;
      }

      queue[event] = queue[event].filter(function (cb) {
        return cb !== callback;
      });

      return this;
    },
    emit: function emit(event, data) {
      var eventsQueue = [].concat(_toConsumableArray(queue[event]));

      if (!eventsQueue) {
        return false;
      }

      while (eventsQueue.length) {
        eventsQueue.shift()(data);
      }

      return true;
    }
  };
}();

exports.EventsSystem = EventsSystem;