process.env.NODE_ENV !== 'production' && require('dotenv').config();

const http = require('http');

const connectToDb = require('../db');
const telegramBot = require('./bot');
const { log } = require('../utils');

connectToDb().then(() => {
  if (process.env.NODE_ENV === 'production') {
    log('setting up updates by telegram webhook');
    telegramBot.telegram.setWebhook(process.env.TELEGRAM_WEBHOOK);
  } else {
    log('setting up updates in polling mode');
    telegramBot.launch();
  }
});

http
  .createServer(telegramBot.webhookCallback(process.env.TELEGRAM_WEBHOOK_PATH))
  .listen(process.env.PORT, () => log('started http server on port', process.env.PORT));
