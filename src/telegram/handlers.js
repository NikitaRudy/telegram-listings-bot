const helpers = require('../helpers');
const dbActions = require('../db/actions');
const messages = require('./messages');
const { log } = require('../utils');

const start = async ctx => {
  log('received start command');
  await dbActions.saveUser(helpers.selectUserAndChatId(ctx));

  ctx.replyWithMarkdownDisabledLinkPreview(messages.start);
};

const add = async ctx => {
  const { chatId, arg } = helpers.selectChatIdAndFirstArg(ctx);
  log('received add command', chatId, arg);
  await dbActions.addSubscribedUrl(chatId, arg);
  ctx.replyWithMarkdownDisabledLinkPreview(messages.add);
};

const list = async ctx => {
  const { chatId } = helpers.selectUserAndChatId(ctx);
  log('received list command', chatId);
  const { subscribedUrls } = await dbActions.getUser(chatId);

  if (subscribedUrls.length) {
    log('list command', 'replying to user', chatId, subscribedUrls);
    ctx.replyWithMarkdownDisabledLinkPreview(
      subscribedUrls.map((url, i) => messages.linkMD(url, `Subscription ${i + 1}`)).join('\n')
    );
  } else {
    log('list command', 'empty list', chatId);
    ctx.replyWithMarkdownDisabledLinkPreview(messages.list);
  }
};

const help = async ctx => {
  log('received help command');
  ctx.replyWithMarkdownDisabledLinkPreview(messages.help);
};

const remove = async ctx => {
  const { chatId, arg } = helpers.selectChatIdAndFirstArg(ctx);
  log('received remove command', chatId, arg);

  if (!arg) {
    return ctx.replyWithMarkdownDisabledLinkPreview(messages.remove.empty);
  }

  if (arg === 'all') {
    await dbActions.removeSubscriptions(chatId);
  } else {
    await dbActions.removeSubscribedUrl(chatId, arg);
  }

  return ctx.replyWithMarkdownDisabledLinkPreview(messages.remove.success);
};

module.exports = {
  start,
  add,
  list,
  help,
  remove,
};
