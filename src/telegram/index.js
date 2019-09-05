// process.env.NODE_ENV !== 'production' &&
require('dotenv').config();

const http = require('http');

const connectToDb = require('../db');
const telegramBot = require('./bot');
const { log } = require('../utils');

connectToDb().then(() => {
  if (process.env.NODE_ENV === 'development') {
    log('telegram init', 'setting up updates in polling mode');
    telegramBot.launch();
  } else {
    log('telegram init', 'setting up updates by telegram webhook');
    telegramBot.telegram.setWebhook(process.env.TELEGRAM_WEBHOOK);

    http
      .createServer(telegramBot.webhookCallback(process.env.TELEGRAM_WEBHOOK_PATH))
      .listen(process.env.PORT || 3000, () =>
        log('telegram init', 'listening webhooks on', process.env.PORT || 3000)
      );
  }
});
