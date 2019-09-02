const helpers = require('../helpers');
const dbActions = require('../db/actions');
const messages = require('./messages');

const start = async ctx => {
  await dbActions.saveUser(helpers.selectUserAndChatId(ctx));

  ctx.replyWithHTML(messages.start);
};

const add = async ctx => {
  const { chatId, arg } = helpers.selectChatIdAndFirstArg(ctx);

  await dbActions.addSubscribedUrl(chatId, arg);
  ctx.reply(messages.add);
};

const list = async ctx => {
  const { chatId } = helpers.selectUserAndChatId(ctx);
  const { subscribedUrls } = await dbActions.getUser(chatId);

  if (subscribedUrls.length) {
    ctx.replyWithHTML(
      subscribedUrls.map((url, i) => messages.link(url, `Subscription ${i + 1}`)).join('\n')
    );
  } else {
    ctx.reply(messages.subscriptions);
  }
};

const help = async ctx => {
  ctx.reply(messages.help);
};

const remove = async ctx => {
  const { chatId, arg } = helpers.selectChatIdAndFirstArg(ctx);

  if (!arg) {
    return ctx.reply(messages.remove.empty);
  }

  if (arg === 'all') {
    await dbActions.removeSubscriptions(chatId);
  } else {
    await dbActions.removeSubscribedUrl(chatId, arg);
  }

  return ctx.reply(messages.remove.success);
};

module.exports = {
  start,
  add,
  list,
  help,
  remove,
};
