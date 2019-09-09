const telegramActions = require('../actions');
const testUtils = require('../../../test-utils');

const botMock = {
  telegram: {
    sendPhoto: jest.fn(() => Promise.resolve()),
  },
};

const user = { chatId: '123124', username: 'johndoe' };

test('sendListingsToUser', async () => {
  await telegramActions.sendListingsToUser(botMock, user, testUtils.listings.mocks.listings);

  expect(botMock.telegram.sendPhoto).toHaveBeenCalled();
  expect(botMock.telegram.sendPhoto.mock.calls).toMatchSnapshot();
});
