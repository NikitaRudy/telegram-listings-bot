process.env.NODE_ENV !== 'production' && require('dotenv').config();

const http = require('http');

const connectToDb = require('../db');
const telegramBot = require('./bot');

connectToDb().then(() => {
  if (process.env.NODE_ENV === 'production') {
    telegramBot.telegram.setWebhook(process.env.TELEGRAM_WEBHOOK);
  } else {
    telegramBot.launch();
  }
});

http
  .createServer(telegramBot.webhookCallback(process.env.TELEGRAM_WEBHOOK_PATH))
  .listen(process.env.PORT);
