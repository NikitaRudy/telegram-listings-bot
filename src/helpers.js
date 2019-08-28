const url = require('url')
const constants = require('./constants')

const extractListingIdFromUrl = u => url.parse(u).pathname
const selectUserAndChatId = ctx => ({ username: ctx.from.username, chatId: ctx.from.id })

const asyncIterate = async (list, cb, initial) => {
  const results = []
  for (let i = 0; i < list.length; i++) {
    const result = await cb(list[i])
    initial && results.push(result)
  }

  return results
}

const findNewListings = (listings, sendedListings) =>
  listings.filter(listing => !sendedListings.includes(listing.listingId))

const selectUserCommandArgs = ctx => ctx.update.message.text.split(' ').slice(1)

const selectChatIdAndFirstArg = ctx => ({
  arg: selectUserCommandArgs(ctx)[0] || '',
  chatId: selectUserAndChatId(ctx).chatId,
})

const getPlatformByUrl = u => {
  const { hostname } = url.parse(u)

  const platform = Object.entries(constants.platformHosts).find(
    ([, platformUrl]) => platformUrl === hostname
  )

  return platform && platform[0]
}

const sameHost = (platform, hostname) => hostname === constants.platformHosts[platform]
const searchPath = (platform, path) => path === constants.platformSearchPaths[platform]
const searchTermPresented = (platform, ...terms) => terms.some(Boolean)

const processUrl = (platform, u) => {
  const { host } = url.parse(u)

  return host ? u : `https://${constants.platformHosts[platform]}${u}`
}

module.exports = {
  extractListingIdFromUrl,
  selectUserAndChatId,
  findNewListings,
  selectUserCommandArgs,
  selectChatIdAndFirstArg,
  getPlatformByUrl,
  sameHost,
  searchPath,
  searchTermPresented,
  processUrl,
  asyncIterate,
}
