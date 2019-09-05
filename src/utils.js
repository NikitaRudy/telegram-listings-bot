const log = (...msgs) => {
  console.log(`${new Date().toUTCString()} ---->`, ...msgs);
};

module.exports = {
  log,
};
