const telegramActions = require('../actions')

const sendPhotoStub = jest.fn(() => Promise.resolve())

const botMock = {
  telegram: {
    sendPhoto: sendPhotoStub,
  },
}

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

const user = { chatId: '123124', username: 'johndoe' }

test('sendListingsToUser', async () => {
  await telegramActions.sendListingsToUser(botMock, user, listings)

  expect(sendPhotoStub).toHaveBeenCalled()
  expect(
    sendPhotoStub.mock.calls.every(
      ([chatId, photo, extra], i) =>
        chatId === user.chatId &&
        photo.source === listings[i].screenshot &&
        extra.caption === listings[i].url
    )
  ).toEqual(true)
})
