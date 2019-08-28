const url = require('url')
const constants = require('./constants')
const messages = require('./telegram/messages')
const helpers = require('./helpers')

const validateSubscribeUrl = u => {
  const { pathname, hostname, query, hash } = url.parse(u)

  return {
    error: !constants.platformsArr.some(
      platform =>
        helpers.sameHost(platform, hostname) &&
        helpers.searchPath(platform, pathname) &&
        helpers.searchTermPresented(platform, query, hash)
    ),
    message: messages.validation.url,
  }
}

module.exports = {
  validateSubscribeUrl,
}
