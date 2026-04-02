// store.js
let count = 0;
let listeners = [];

export const store = {
  getSnapshot: () => count,

  subscribe: (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  },

  increment: () => {
    count++;
    listeners.forEach(l => l());
  }
};