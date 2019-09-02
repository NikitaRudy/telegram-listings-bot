const url = require('url');
const constants = require('../constants');
const messages = require('../telegram/messages');
const helpers = require('../helpers');

const subscribedUrls = [
  {
    validator: val =>
      val.every(u => {
        const { pathname, hostname, query, hash } = url.parse(u);

        return constants.platformsArr.some(
          platform =>
            helpers.sameHost(platform, hostname) &&
            helpers.searchPath(platform, pathname) &&
            helpers.searchTermPresented(platform, query, hash)
        );
      }),
    msg: messages.validation.subscribedUrls.invalidUrl,
  },
  {
    validator: val => val.length <= 10,
    msg: messages.validation.subscribedUrls.limit,
  },
];

module.exports = {
  subscribedUrls,
};
