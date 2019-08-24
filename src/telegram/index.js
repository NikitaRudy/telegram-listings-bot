const handlers = require('./handlers')
const connectToDb = require('../db')
const telegramBot = require('./bot')

;(async () => {
  await connectToDb()

  telegramBot.start(handlers.start)
  telegramBot.command('subscribe', handlers.subscribe)
  telegramBot.launch()
})()
