const add = require('./add.json');
const remove = require('./remove.json');
const list = require('./list.json');
const start = require('./start.json');
const help = require('./help.json');

const mocks = {
  add,
  remove,
  list,
  start,
  help,
};

const createCommandUpdateCreator = command => arg => ({
  ...mocks[command],
  message: {
    ...mocks[command].message,
    text: `/${command} ${arg}`,
  },
});

module.exports = {
  mocks,
  creators: {
    add: createCommandUpdateCreator('add'),
    remove: createCommandUpdateCreator('remove'),
    list: createCommandUpdateCreator('list'),
  },
};
