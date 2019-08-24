const helpers = require('../helpers')
const dbActions = require('../db/actions')

const start = async ctx => {
  await dbActions.saveUser(helpers.selectUserAndChatIdFromCtx(ctx))

  ctx.reply('Hello!')
}

const subscribe = async ctx => {
  const text = ctx.update.message.text
  const { chatId } = helpers.selectUserAndChatIdFromCtx(ctx)
  const [, subscribeUrl] = text.split(' ')

  await dbActions.updateUser(chatId, { subscribeUrl })

  ctx.reply('Subscribed!')
}

module.exports = {
  start,
  subscribe,
}
