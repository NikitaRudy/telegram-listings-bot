const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  chatId: {
    type: String,
    required: true,
  },
  sendedListings: {
    type: [String],
    default: [],
  },
  subscribedUrls: {
    type: [String],
    default: [],
  },
});

module.exports = mongoose.model('User', userSchema);
