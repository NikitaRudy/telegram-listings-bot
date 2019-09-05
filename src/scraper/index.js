// process.env.NODE_ENV !== 'production' &&
require('dotenv').config();

const connectToDb = require('../db');
const dbActions = require('../db/actions');
const utils = require('./utils');
const helpers = require('../helpers');
const telegramActions = require('../telegram/actions');
const telegramBot = require('../telegram/bot');
const { log } = require('../utils');

(async () => {
  log('scraper', 'start');
  const [{ page, browser }] = await Promise.all([utils.initBrowser(), connectToDb()]);

  log('scraper', 'getting users');
  const users = await dbActions.getUsersWithSubscribedUrl();

  log('scraper', 'subscribed users count: ', users.length);
  await helpers.asyncIterate(users, async user => {
    log('scraper', 'visiting subscribed urls for user:', user.username, user.chatId);
    await helpers.asyncIterate(user.subscribedUrls, async url => {
      log('scraper', 'visit url:', url);
      const newListings = await utils.visitUrl(page, url, user);

      if (newListings.length) {
        log('scraper', 'sending updates to user: ', user.username, user.chatId);
        log('scraper', 'updates: ', newListings.map(l => l.listingId));
        await telegramActions.sendListingsToUser(telegramBot, user, newListings);
        log('scraper', 'saving sended listings to the db');
        await dbActions.updateSendedListings(
          user.chatId,
          user.sendedListings.concat(newListings.map(l => l.listingId))
        );
      } else {
        log('scraper', 'no updates for user: ', user.username, user.chatId);
      }
    });
  });

  await browser.close();

  log('scraper', 'finished');
  process.exit(0);
})();
