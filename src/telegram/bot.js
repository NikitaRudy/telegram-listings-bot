const Telegraf = require('telegraf');
const mongoose = require('mongoose');

const handlers = require('./handlers');

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
bot.use((ctx, next) => {
  ctx.replyWithMarkdownDisabledLinkPreview = (md, extra, ...args) =>
    ctx.replyWithMarkdown(md, { ...extra, disable_web_page_preview: true }, ...args);

  next(ctx);
});
bot.use(async (ctx, next) => {
  try {
    await next(ctx);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      const [field] = Object.keys(error.errors);
      ctx.replyWithMarkdownDisabledLinkPreview(error.errors[field].message);
    }
  }
});

bot.start(handlers.start);
bot.command('add', handlers.add);
bot.command('remove', handlers.remove);
bot.command('list', handlers.list);
bot.help(handlers.help);

module.exports = bot;
