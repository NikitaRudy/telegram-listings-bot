const puppeteer = require('puppeteer');
const mongoose = require('mongoose');

const utils = require('../utils');
const connectToDb = require('../../db');
const User = require('../../db/User');

const listingsUrls = {
  avby:
    'https://cars.av.by/search?brand_id%5B0%5D=&year_from=2009&year_to=2013&currency=USD&price_from=&price_to=9000&transmission=2&body_id=&engine_volume_min=1600&engine_volume_max=&driving_id=&mileage_min=&mileage_max=100000&region_id=5&city_id=&interior_material=&interior_color=&order_from%5B%5D=1&exchange=&search_time=7',
  baraholka:
    'https://ab.onliner.by/#country=248&body_type[]=11&min-capacity=1.5&currency=USD&sort[]=last_time_up&page=1&car[0][5]=',
};

let browser;

const input = {
  username: 'johndoe',
  chatId: '131434',
  sendedListings: [],
  subscribedUrls: [],
};

beforeAll(async () => {
  await connectToDb(`${process.env.TEST_MONGO_HOST}/scraper-utils`);
  browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
});

afterAll(async () => {
  await browser.close();
  await mongoose.disconnect();
});

beforeEach(async () => {
  await new User(input).save();
});

afterEach(async () => {
  await User.deleteMany({});
});

test('takeScreenshot', async () => {
  const page = await browser.newPage();
  await page.goto('https://google.com');
  const element = await page.$('*');

  const screenshot = await utils.takeScreenshot(page, element);

  expect(screenshot).toBeInstanceOf(Buffer);

  await page.close();
});

test('visitUrl', async () => {
  const page1 = await browser.newPage();
  const page2 = await browser.newPage();

  const [listings1, listings2] = await Promise.all([
    utils.visitUrl(page1, listingsUrls.avby, input),
    utils.visitUrl(page2, listingsUrls.baraholka, input),
  ]);

  [...listings1, ...listings2].forEach(({ listingId, screenshot, url }) => {
    expect(typeof listingId === 'string').toBe(true);
    expect(screenshot).toBeInstanceOf(Buffer);
    expect(typeof url === 'string').toBe(true);
  });

  await Promise.all([page1.close(), page2.close()]);
});
