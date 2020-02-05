const subscribers = {};

export default {
  subscribe(event, cb) {
    if (!subscribers[event]) subscribers[event] = [];
    subscribers[event].push(cb);
  },

  publish(event, data) {
    if (subscribers[event]) {
      subscribers[event].forEach((cb) => cb(data));
    }
  },
};
