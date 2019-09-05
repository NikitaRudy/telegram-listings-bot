const User = require('./User');

const { withLog } = require('../utils');

const getUser = chatId => User.findOne({ chatId }).lean();
const getUsers = () => User.find().lean();
const updateUser = withLog(
  (chatId, updates) =>
    User.findOneAndUpdate({ chatId }, updates, { new: true, runValidators: true }),
  'dbActions.getUsers'
);
const updateSendedListings = withLog(
  (chatId, listings) => updateUser(chatId, { sendedListings: listings }),
  'dbActions.updateSendedListings'
);
const getUsersWithSubscribedUrl = async () =>
  (await getUsers()).filter(user => user.subscribedUrls.length);

const saveUser = withLog(
  ({ username, chatId }) =>
    User.findOneAndUpdate(
      { chatId },
      { username, chatId },
      { upsert: true, new: true, setDefaultsOnInsert: true, runValidators: true }
    ),
  'dbActions.saveUser'
);

const addSubscribedUrl = withLog(async (chatId, url) => {
  const { subscribedUrls = [] } = await getUser(chatId);

  if (subscribedUrls.includes(url)) {
    return Promise.resolve();
  }

  return updateUser(chatId, {
    subscribedUrls: subscribedUrls.concat(url),
  });
}, 'dbActions.addSubscribedUrl');

const removeSubscribedUrl = withLog(async (chatId, urlToRemove) => {
  const { subscribedUrls = [] } = await getUser(chatId);

  return updateUser(chatId, {
    subscribedUrls: subscribedUrls.filter(url => url !== urlToRemove),
  });
}, 'dbActions.removeSubscribedUrl');

const removeSubscriptions = withLog(
  chatId => updateUser(chatId, { subscribedUrls: [] }),
  'dbActions.removeSubscriptions'
);

module.exports = {
  saveUser,
  updateUser,
  getUsers,
  updateSendedListings,
  getUsersWithSubscribedUrl,
  getUser,
  removeSubscribedUrl,
  addSubscribedUrl,
  removeSubscriptions,
};
