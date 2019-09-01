process.env.NODE_ENV !== 'production' && require('dotenv').config();

const connectToDb = require('../db');
const dbActions = require('../db/actions');
const utils = require('./utils');
const helpers = require('../helpers');
const telegramActions = require('../telegram/actions');
const telegramBot = require('../telegram/bot');

(async () => {
  const [{ page, browser }] = await Promise.all([utils.initBrowser(), connectToDb()]);

  const users = await dbActions.getUsersWithSubscribedUrl();

  await helpers.asyncIterate(users, async user => {
    await helpers.asyncIterate(user.subscribedUrls, async url => {
      const newListings = await utils.visitUrl(page, url, user);

      if (newListings.length) {
        await telegramActions.sendListingsToUser(telegramBot, user, newListings);
        await dbActions.updateSendedListings(
          user.chatId,
          user.sendedListings.concat(newListings.map(l => l.listingId))
        );
      }
    });
  });

  await browser.close();

  process.exit(0);
})();
