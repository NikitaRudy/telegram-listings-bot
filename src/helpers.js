const url = require('url')

const extractListingIdFromUrl = u => url.parse(u).pathname
const selectUserAndChatId = ctx => ({ username: ctx.from.username, chatId: ctx.from.id })
const reduceAsync = (promiseCreators, initValue) =>
  promiseCreators.reduce((promise, pCreator) => promise.then(pCreator), Promise.resolve(initValue))

const findNewListings = (listings, sendedListings) =>
  listings.filter(listing => !sendedListings.includes(listing.listingId))

const selectUserCommandArgs = ctx => ctx.update.message.text.split(' ').slice(1)

const selectChatIdAndFirstArg = ctx => ({
  arg: selectUserCommandArgs(ctx)[0] || '',
  chatId: selectUserAndChatId(ctx).chatId,
})

module.exports = {
  extractListingIdFromUrl,
  selectUserAndChatId,
  reduceAsync,
  findNewListings,
  selectUserCommandArgs,
  selectChatIdAndFirstArg,
}
