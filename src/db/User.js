const mongoose = require('mongoose');

const validation = require('./validation');

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
    validate: validation.subscribedUrls,
  },
});

module.exports = mongoose.model('User', userSchema);
