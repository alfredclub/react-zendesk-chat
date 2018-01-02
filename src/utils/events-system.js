const EventsSystem = (() => {
  const queue = {};

  return {
    subscribe(event, callback) {
      if (!queue[event]) {
        queue[event] = [];
      }

      queue[event].push(callback);

      return this;
    },

    unsubscribe(event, callback) {
      if (!queue[event]) {
        return this;
      }

      if (!callback) {
        delete queue[event];
        return this;
      }

      queue[event] = queue[event].filter(cb => cb !== callback);

      return this;
    },

    emit(event, data) {
      const eventsQueue = [...queue[event]];

      if (!eventsQueue) {
        return false;
      }

      while (eventsQueue.length) {
        (eventsQueue.shift())(data);
      }

      return true;
    }
  };
})();

export { EventsSystem };
