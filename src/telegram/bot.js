const Telegraf = require('telegraf');
const mongoose = require('mongoose');

const handlers = require('./handlers');

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.use(async (ctx, next) => {
  try {
    await next(ctx);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      const [field] = Object.keys(error.errors);
      ctx.reply(error.errors[field].message);
    }
  }
});

bot.start(handlers.start);
bot.command('add', handlers.add);
bot.command('remove', handlers.remove);
bot.command('list', handlers.list);
bot.help(handlers.help);

module.exports = bot;
