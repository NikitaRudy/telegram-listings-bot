const connectToDb = require('../db')
const dbActions = require('../db/actions')
const utils = require('./utils')
const helpers = require('../helpers')

;(async () => {
  const [{ page, browser }] = await Promise.all([utils.initBrowser(), connectToDb()])

  const users = await dbActions.getUsersWithSubscribedUrl()

  await helpers.asyncIterate(users, async user => {
    const { subscribedUrls, sendedListings } = user

    await helpers.asyncIterate(subscribedUrls, url =>
      utils.visitUrl(page, url, sendedListings, user)
    )
  })

  await browser.close()

  process.exit(0)
})()
