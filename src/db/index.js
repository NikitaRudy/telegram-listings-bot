const mongoose = require('mongoose')

mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)

const connect = () => mongoose.connect(process.env.MONGO_URL)

module.exports = connect
