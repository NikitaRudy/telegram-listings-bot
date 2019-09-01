const Telegraf = require('telegraf');

module.exports = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
