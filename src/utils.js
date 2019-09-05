const log = (namespace, ...args) => {
  if (process.env.NODE_ENV === 'test') {
    return;
  }

  console.log(`${new Date().toUTCString()} :::`, `${namespace} :::`, ...args);
};

const withLog = (fn, ...messages) => (...args) => {
  log(...messages, ...args);
  return fn(...args);
};

module.exports = {
  log,
  withLog,
};
