const puppeteer = require('puppeteer')
const helpers = require('../helpers')
const constants = require('../constants')
const telegramActions = require('../telegram/actions')
const telegramBot = require('../telegram/bot')
const dbActions = require('../db/actions')

const initBrowser = async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })
  const page = await browser.newPage()

  return { page, browser }
}

const takeScreenshot = async (page, element) =>
  page.screenshot({
    type: 'jpeg',
    clip: await element.boundingBox(),
    quality: 50,
  })

const takeUrl = async (element, platform) =>
  helpers.processUrl(
    platform,
    await element.$eval(constants.listingLinkSelectors[platform], e => e.getAttribute('href'))
  )

const scrapListingData = async (page, elements, platform) =>
  helpers.asyncIterate(
    elements,
    async element => {
      const screenshot = await takeScreenshot(page, element)
      const url = await takeUrl(element, platform)

      return {
        screenshot,
        url,
        listingId: helpers.extractListingIdFromUrl(url),
      }
    },
    []
  )

const visitUrl = async (page, url, sendedListings, user) => {
  const platform = helpers.getPlatformByUrl(url)
  await page.goto(url)

  const newListings = helpers.findNewListings(
    await scrapListingData(
      page,
      await page.$$(constants.listingContainerSelectors[platform]),
      platform
    ),
    sendedListings
  )

  if (newListings.length) {
    await telegramActions.sendListingsToUser(telegramBot, user, newListings)
    await dbActions.updateSendedListings(
      user.chatId,
      sendedListings.concat(newListings.map(l => l.listingId))
    )
  }
}

module.exports = {
  initBrowser,
  scrapListingData,
  visitUrl,
  takeScreenshot,
  takeUrl,
}
