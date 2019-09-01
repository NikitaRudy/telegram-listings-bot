const User = require('./User');

const getUser = chatId => User.findOne({ chatId }).lean();
const getUsers = () => User.find().lean();
const updateUser = (chatId, updates) => User.findOneAndUpdate({ chatId }, updates, { new: true });
const updateSendedListings = (chatId, listings) => updateUser(chatId, { sendedListings: listings });
const getUsersWithSubscribedUrl = async () =>
  (await getUsers()).filter(user => user.subscribedUrls.length);

const saveUser = ({ username, chatId }) =>
  User.findOneAndUpdate(
    { chatId },
    { username, chatId },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );

const addSubscribedUrl = async (chatId, url) => {
  const { subscribedUrls = [] } = await getUser(chatId);

  if (subscribedUrls.includes(url)) {
    return Promise.resolve();
  }

  return updateUser(chatId, {
    subscribedUrls: subscribedUrls.concat(url),
  });
};

const removeSubscribedUrl = async (chatId, urlToRemove) => {
  const { subscribedUrls = [] } = await getUser(chatId);

  return updateUser(chatId, {
    subscribedUrls: subscribedUrls.filter(url => url !== urlToRemove),
  });
};

const removeSubscriptions = chatId => updateUser(chatId, { subscribedUrls: [] });

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
