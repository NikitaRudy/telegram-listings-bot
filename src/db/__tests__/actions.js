const dbActions = require('../actions')
const User = require('../User')
const connectToDb = require('../')
const mongoose = require('mongoose')

const input = {
  username: 'johndoe',
  chatId: '131434',
}

const mockSendedListings = [
  '/cars/123123',
  '/cars/435433',
  '/kia/ceed/321455',
  'skoda/rapid/14353453',
  'skoda/rapid/14353434',
]

const mockSubscribedUrls = [
  'https://cars.av.by/search?brand_id%5B0%5D=433&model_id%5B0%5D=&brand_id%5B1%5D=330&model_id%5B1%5D=&brand_id%5B2%5D=1126&model_id%5B2%5D=&brand_id%5B3%5D=545&model_id%5B3%5D=&year_from=2009&year_to=&currency=USD&price_from=&price_to=10000&transmission=2&body_id=&engine_volume_min=1600&engine_volume_max=&driving_id=&mileage_min=&mileage_max=100000&region_id=5&city_id=&interior_material=&interior_color=&order_from%5B%5D=1&exchange=&search_time=7',
  'https://ab.onliner.by/#max-price=10000&country=248&region=349&min-year=2009&min-capacity=1.6&transmission[]=2&max-mileage=100000&seller_type[]=1&currency=USD&sort[]=last_time_up&page=1&car[0][25]=&car[1][57]=&car[2][19]=&car[3][32]=',
]

beforeAll(() => connectToDb(process.env.TEST_MONGO_HOST + '/db-actions'))
afterAll(() => mongoose.disconnect())

beforeEach(() => new User(input).save())
afterEach(() => User.deleteMany({}))

test('getUser', async () => {
  const user = await dbActions.getUser(input.chatId)

  expect(user.username).toEqual(input.username)
  expect(user.chatId).toEqual(input.chatId)
})

test('saveUser', async () => {
  const mockUser = { username: 'joebale', chatId: '4324234' }

  const user = await dbActions.saveUser(mockUser)

  expect(user.username).toEqual(mockUser.username)
  expect(user.chatId).toEqual(mockUser.chatId)
  expect(user.subscribedUrls).toHaveLength(0)
  expect(user.sendedListings).toHaveLength(0)
})

test('updateUser', async () => {
  const user = await dbActions.updateUser(input.chatId, { username: 'bill321' })

  expect(user.username).toEqual('bill321')
  expect(user.chatId).toEqual(input.chatId)
})

test('getUsers', async () => {
  const users = await dbActions.getUsers()

  expect(users).toHaveLength(1)
  expect(users[0].username).toEqual(input.username)
  expect(users[0].chatId).toEqual(input.chatId)
})

test('updateSendedListings', async () => {
  const user = await dbActions.updateSendedListings(input.chatId, mockSendedListings)

  expect(user.sendedListings).toHaveLength(mockSendedListings.length)
  expect(user.chatId).toEqual(input.chatId)
})

test('getUsersWithSubscribedUrl', async () => {
  const result = await dbActions.getUsersWithSubscribedUrl()

  expect(result).toHaveLength(0)

  await dbActions.updateUser(input.chatId, { subscribedUrls: mockSubscribedUrls })

  await dbActions.saveUser({ username: 'billgates', chatId: '12312412' })
  const allUsers = await dbActions.getUsers()
  const users = await dbActions.getUsersWithSubscribedUrl()

  expect(allUsers).toHaveLength(2)
  expect(users).toHaveLength(1)
})

test('removeSubscribedUrl', async () => {
  await dbActions.updateUser(input.chatId, { subscribedUrls: mockSubscribedUrls })

  const result = await dbActions.removeSubscribedUrl(input.chatId, mockSubscribedUrls[0])
  expect(result.subscribedUrls).toHaveLength(mockSubscribedUrls.length - 1)
  expect(result.subscribedUrls).toEqual(expect.not.arrayContaining([mockSubscribedUrls[0]]))
})

test('addSubscribedUrl', async () => {
  const result = await dbActions.addSubscribedUrl(input.chatId, mockSubscribedUrls[0])
  expect(result.subscribedUrls).toHaveLength(1)
  expect(result.subscribedUrls).toEqual(expect.arrayContaining([mockSubscribedUrls[0]]))
})

test('removeSubscriptions', async () => {
  const result1 = await dbActions.updateUser(input.chatId, { subscribedUrls: mockSubscribedUrls })
  expect(result1.subscribedUrls).toHaveLength(mockSubscribedUrls.length)
  const result2 = await dbActions.removeSubscriptions(input.chatId)
  expect(result2.subscribedUrls).toHaveLength(0)
})
