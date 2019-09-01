process.env.NODE_ENV !== 'production' && require('dotenv').config();

const http = require('http');

const handlers = require('./handlers');
const connectToDb = require('../db');
const telegramBot = require('./bot');

(async () => {
  await connectToDb();

  telegramBot.start(handlers.start);
  telegramBot.command('subscribe', handlers.subscribe);
  telegramBot.command('unsubscribe', handlers.unsubscribe);
  telegramBot.command('subscriptions', handlers.subscriptions);
  telegramBot.help(handlers.help);

  if (process.env.NODE_ENV === 'production') {
    telegramBot.telegram.setWebhook(process.env.TELEGRAM_WEBHOOK);
  } else {
    telegramBot.launch();
  }
})();

http
  .createServer(telegramBot.webhookCallback(process.env.TELEGRAM_WEBHOOK_PATH))
  .listen(process.env.PORT);
