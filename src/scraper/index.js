const connectToDb = require('../db')
const telegramBot = require('../telegram/bot')
const dbActions = require('../db/actions')
const telegramActions = require('../telegram/actions')
const utils = require('./utils')
const helpers = require('../helpers')

;(async () => {
  const [{ page, browser }] = await Promise.all([utils.initBrowser(), connectToDb()])

  const users = await dbActions.getUsersWithSubscribedUrl()

  await helpers.reduceAsync(
    users.map(user => async () => {
      const { subscribedUrls, sendedListings, chatId } = user

      await helpers.reduceAsync(
        subscribedUrls.map(url => async () => {
          await page.goto(url)

          const newListings = helpers.findNewListings(
            await utils.scrapListingData(page, await page.$$('.listing-item')),
            sendedListings
          )

          if (newListings.length) {
            await telegramActions.sendListingsToUser(telegramBot, user, newListings)
            await dbActions.updateSendedListings(
              chatId,
              sendedListings.concat(newListings.map(l => l.listingId))
            )
          }
        })
      )
    })
  )
  await browser.close()

  process.exit(0)
})()
