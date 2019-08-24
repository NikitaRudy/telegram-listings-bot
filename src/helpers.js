const url = require('url')

const extractListingIdFromUrl = u => url.parse(u).pathname
const selectUserAndChatIdFromCtx = ctx => ({ username: ctx.from.username, chatId: ctx.from.id })
const reduceAsync = (promiseCreators, initValue) =>
  promiseCreators.reduce((promise, pCreator) => promise.then(pCreator), Promise.resolve(initValue))

const findNewListings = (listings, sendedListings) =>
  listings.filter(listing => !sendedListings.includes(listing.listingId))

module.exports = {
  extractListingIdFromUrl,
  selectUserAndChatIdFromCtx,
  reduceAsync,
  findNewListings,
}
