const puppeteer = require('puppeteer')
const helpers = require('../helpers')

const initBrowser = async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })
  const page = await browser.newPage()

  return { page, browser }
}

const scrapListingData = async (page, elements) =>
  helpers.reduceAsync(
    elements.map(element => async listings => {
      const screenshot = await page.screenshot({
        type: 'jpeg',
        clip: await element.boundingBox(),
        quality: 50,
      })
      const url = await element.$eval('.listing-item-title > h4 > a', e => e.getAttribute('href'))

      return listings.concat({
        screenshot,
        url,
        listingId: helpers.extractListingIdFromUrl(url),
      })
    }),
    []
  )

module.exports = {
  initBrowser,
  scrapListingData,
}
