const mongoose = require('mongoose')

mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)

const connect = (url = process.env.MONGO_URL) => mongoose.connect(url)

module.exports = connect
