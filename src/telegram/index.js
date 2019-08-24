const http = require('http')

const handlers = require('./handlers')
const connectToDb = require('../db')
const telegramBot = require('./bot')

;(async () => {
  await connectToDb()

  telegramBot.start(handlers.start)
  telegramBot.command('subscribe', handlers.subscribe)
  telegramBot.launch()
})()

const server = http.createServer((rqe, res) => {
  res
    .writeHead(200, { 'Content-type': 'text/html' })
    .end(`<h1><a href="https://t.me/new_listings_bot">Telegram bot</a></h1>`)
})

server.listen(process.env.PORT)
