const url = require('url')

const helpers = require('../helpers')
const constants = require('../constants')

const listingUrls = {
  avby: 'https://cars.av.by/kia/ceed/1231231',
  baraholka: 'https://ab.onliner.by/cars/1231243214',
}

const ctxMock = {
  from: {
    id: '123124',
    username: 'johndoe',
  },
  update: {
    message: {
      text: '/command gqerwqeqweqweqweq qwe qwe',
    },
  },
}

const listingsIds = [
  '/kia/ceed/1231231',
  '/cars/1231243214',
  '/kia/rio/1231231',
  '/cars/43223423',
  '/cars/90809243',
  '/skoda/rapid/1231231',
  '/cars/92844350',
  '/skoda/octavia/1231231',
  '/cars/92849243',
  '/skoda/superb/1231231',
]

test('extractListingIdFromUrl', () => {
  const result = helpers.extractListingIdFromUrl(listingUrls.avby)
  const result2 = helpers.extractListingIdFromUrl(listingUrls.baraholka)

  expect(result).toMatchSnapshot()
  expect(result2).toMatchSnapshot()
})

test('selectUserAndChatId', () => {
  const result = helpers.selectUserAndChatId(ctxMock)

  expect(result.username).toMatchSnapshot()
  expect(result.chatId).toMatchSnapshot()
})

test('selectUserCommandArgs', () => {
  const [result] = helpers.selectUserCommandArgs(ctxMock)

  expect(result).toMatchSnapshot()
})

test('selectChatIdAndFirstArg', () => {
  const result = helpers.selectChatIdAndFirstArg(ctxMock)

  expect(result).toMatchSnapshot()
})

test('findNewListings', () => {
  const listings = [
    {
      screenshot: Buffer.alloc(10),
      listingId: '/kia/ceed/1231232',
      url: 'https://av.by/kia/ceed/1231232',
    },
    {
      screenshot: Buffer.alloc(10),
      listingId: '/cars/12314243214',
      url: 'https://ab.onliner.by/cars/12314243214',
    },
  ]

  const result = helpers.findNewListings(listings, listingsIds)

  expect(result).toMatchSnapshot()
})

test('getPlatformByUrl', () => {
  const result = helpers.getPlatformByUrl(listingUrls.avby)
  const result2 = helpers.getPlatformByUrl(listingUrls.baraholka)

  expect(result).toMatchSnapshot()
  expect(result2).toMatchSnapshot()
})

test('sameHost', () => {
  const result = helpers.sameHost(constants.platforms.avby, url.parse(listingUrls.avby).hostname)
  expect(result).toMatchSnapshot()

  const result2 = helpers.sameHost(
    constants.platforms.baraholka,
    url.parse(listingUrls.baraholka).hostname
  )
  expect(result2).toMatchSnapshot()

  const result3 = helpers.sameHost(constants.platforms.baraholka, 'google.com')
  expect(result3).toMatchSnapshot()

  const result4 = helpers.sameHost(constants.platforms.avby, 'onliner.by')
  expect(result4).toMatchSnapshot()
})

test('searchPath', () => {
  const result = helpers.searchPath(constants.platforms.avby, '/search')
  expect(result).toMatchSnapshot()

  const result2 = helpers.searchPath(constants.platforms.baraholka, '/')
  expect(result2).toMatchSnapshot()

  const result3 = helpers.searchPath(constants.platforms.baraholka, '/search?qweqwe=qweqw')
  expect(result3).toMatchSnapshot()

  const result4 = helpers.searchPath(constants.platforms.avby, '/?qweqweqw=qweqw')
  expect(result4).toMatchSnapshot()

  const result5 = helpers.searchPath(constants.platforms.avby, '/qweqw/qwrqfve/egre')
  expect(result5).toMatchSnapshot()
})

test('searchTermPresented', () => {
  const result = helpers.searchTermPresented(constants.platforms.avby, 'search', 'qweqw', 1, 3)
  expect(result).toMatchSnapshot()

  const result2 = helpers.searchTermPresented(constants.platforms.baraholka, false, null, true)
  expect(result2).toMatchSnapshot()

  const result3 = helpers.searchTermPresented(constants.platforms.baraholka, null)
  expect(result3).toMatchSnapshot()

  const result4 = helpers.searchTermPresented(constants.platforms.avby, undefined, undefined)
  expect(result4).toMatchSnapshot()
})

test('processUrl', () => {
  const result = helpers.processUrl(constants.platforms.avby, listingUrls.avby)
  expect(result).toMatchSnapshot()

  const result2 = helpers.processUrl(constants.platforms.baraholka, listingUrls.baraholka)
  expect(result2).toMatchSnapshot()

  const result3 = helpers.processUrl(constants.platforms.baraholka, '/cars/1231243214')
  expect(result3).toMatchSnapshot()

  const result4 = helpers.processUrl(constants.platforms.avby, '/kia/ceed/1231231')
  expect(result4).toMatchSnapshot()
})

test('asyncIterate', async () => {
  const stubs = [
    jest.fn(() => Promise.resolve(2)),
    jest.fn(() => Promise.resolve(3)),
    jest.fn(() => Promise.resolve(4)),
  ]

  const stub = jest.fn(() => Promise.resolve(1))

  const result = await helpers.asyncIterate(listingsIds, stub)

  expect(stub).toHaveBeenCalledTimes(listingsIds.length)
  stub.mock.calls.forEach(([arg], i) => {
    expect(arg).toEqual(listingsIds[i])
  })
  expect(result).toMatchSnapshot()

  const result1 = await helpers.asyncIterate(stubs, async stub => stub(), [])

  expect(result1).toMatchSnapshot()
})
