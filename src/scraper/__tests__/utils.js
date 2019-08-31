const puppeteer = require('puppeteer')
const path = require('path')
const mongoose = require('mongoose')

const utils = require('../utils')
const connectToDb = require('../../db')
const User = require('../../db/User')
const constants = require('../../constants')

const listingsUrls = {
  avby: `file://${path.join(__dirname, './platform-mocks/av.by/av.by.html')}`,
  baraholka: `file://${path.join(__dirname, './platform-mocks/baraholka/baraholka.html')}`,
}

let browser

const input = {
  username: 'johndoe',
  chatId: '131434',
  sendedListings: [],
  subscribedUrls: [],
}

beforeAll(async () => {
  await connectToDb(process.env.TEST_MONGO_HOST + '/scraper-utils')
  browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })
})

afterAll(async () => {
  await browser.close()
  await mongoose.disconnect()
})

beforeEach(async () => {
  await new User(input).save()
})

afterEach(async () => {
  await User.deleteMany({})
})

test('takeScreenshot', async () => {
  const page = await browser.newPage()
  await page.goto('https://google.com')
  const element = await page.$('*')

  const screenshot = await utils.takeScreenshot(page, element)

  expect(Buffer.isBuffer(screenshot)).toBe(true)

  await page.close()
})

test('visitUrl', async () => {
  const page = await browser.newPage()

  const listings1 = await utils.visitUrl(page, listingsUrls.avby, input, constants.platforms.avby)
  expect(listings1).toMatchSnapshot()

  const listings2 = await utils.visitUrl(
    page,
    listingsUrls.baraholka,
    input,
    constants.platforms.baraholka
  )
  expect(listings2).toMatchSnapshot()
})
