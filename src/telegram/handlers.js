const helpers = require('../helpers');
const dbActions = require('../db/actions');
const messages = require('./messages');
const { log } = require('../utils');

const start = async ctx => {
  log('start handler', 'command received');
  await dbActions.saveUser(helpers.selectUserAndChatId(ctx));

  ctx.replyWithMarkdownDisabledLinkPreview(messages.start);
};

const add = async ctx => {
  const { chatId, arg } = helpers.selectChatIdAndFirstArg(ctx);
  log('add handler', 'command received', `provided argument: ${arg}`);
  await dbActions.addSubscribedUrl(chatId, arg);
  ctx.replyWithMarkdownDisabledLinkPreview(messages.add);
};

const list = async ctx => {
  const { chatId } = helpers.selectUserAndChatId(ctx);
  log('list handler', 'command received');
  const { subscribedUrls } = await dbActions.getUser(chatId);

  if (subscribedUrls.length) {
    log('list handler', 'replying to user');
    ctx.replyWithMarkdownDisabledLinkPreview(
      subscribedUrls.map((url, i) => messages.linkMD(url, `Subscription ${i + 1}`)).join('\n')
    );
  } else {
    log('list handler', 'empty list');
    ctx.replyWithMarkdownDisabledLinkPreview(messages.list);
  }
};

const help = async ctx => {
  log('help handler', 'empty list');
  ctx.replyWithMarkdownDisabledLinkPreview(messages.help);
};

const remove = async ctx => {
  const { chatId, arg } = helpers.selectChatIdAndFirstArg(ctx);
  log('remove handler', 'command received', `provided argument: ${arg}`);

  if (!arg) {
    log('remove handler', 'no url provided');
    return ctx.replyWithMarkdownDisabledLinkPreview(messages.remove.empty);
  }

  if (arg === 'all') {
    log('remove handler', 'remove all');
    await dbActions.removeSubscriptions(chatId);
  } else {
    log('remove handler', 'remove url');
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
