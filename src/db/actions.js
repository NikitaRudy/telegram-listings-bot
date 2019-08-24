const User = require('./User')

const getUsers = () => User.find().lean()
const updateUser = (chatId, updates) => User.findOneAndUpdate({ chatId }, updates)

const saveUser = ({ username, chatId }) =>
  User.findOneAndUpdate(
    { chatId },
    { username, chatId },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  )

const updateSendedListings = (chatId, listings) => updateUser(chatId, { sendedListings: listings })

const getUsersWithSubscribedUrl = async () => (await getUsers()).filter(user => user.subscribeUrl)

module.exports = {
  saveUser,
  updateUser,
  getUsers,
  updateSendedListings,
  getUsersWithSubscribedUrl,
}
