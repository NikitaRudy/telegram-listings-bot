const mongoose = require('mongoose');
const handlers = require('../handlers');
const messages = require('../messages');
const User = require('../../db/User');
const connectToDb = require('../../db');

const ctxMock = {
  reply: jest.fn(() => Promise.resolve()),
  replyWithHTML: jest.fn(() => Promise.resolve()),
  from: {
    id: '131434',
    username: 'johndoe',
  },
  update: {
    message: {
      text: '/command qwe qweqrwer wt',
    },
  },
};

const formatCtx = text => {
  return {
    ...ctxMock,
    update: {
      message: {
        text,
      },
    },
  };
};

const input = {
  username: 'johndoe',
  chatId: '131434',
};

const subscribedUrls = [
  'https://cars.av.by/search?brand_id%5B0%5D=433',
  'https://cars.av.by/search?brand_id%5B0%53=5Q3',
];

beforeAll(() => connectToDb(`${process.env.TEST_MONGO_HOST}/bot-handlers`));
afterAll(() => mongoose.disconnect());

beforeEach(() => {
  ctxMock.reply.mockReset();
  ctxMock.replyWithHTML.mockReset();
  return new User(input).save();
});
afterEach(() => User.deleteMany({}));

test('start', async () => {
  await User.deleteMany({});
  await handlers.start(ctxMock);

  const user = await User.findOne(input).lean();

  expect(user.username).toEqual(input.username);
  expect(user.chatId).toEqual(input.chatId);
  expect(ctxMock.replyWithHTML).toHaveBeenLastCalledWith(messages.start);

  await handlers.start(ctxMock);
  await handlers.start(ctxMock);
  await handlers.start(ctxMock);

  const users = await User.find();

  expect(users).toHaveLength(1);
});

test('help', async () => {
  await handlers.help(ctxMock);

  expect(ctxMock.reply).toHaveBeenLastCalledWith(messages.help);
});

test('subscribe', async () => {
  await handlers.subscribe(formatCtx('/subscribe https://cars.av.by/search?brand_id%5B0%5D=433'));

  const user = await User.findOne({ chatId: input.chatId }).lean();

  expect(ctxMock.reply).toHaveBeenLastCalledWith(messages.subscribe);
  expect(user.subscribedUrls).toHaveLength(1);
  expect(user.subscribedUrls).toEqual(
    expect.arrayContaining(['https://cars.av.by/search?brand_id%5B0%5D=433'])
  );
});

test('unsubscribe', async () => {
  await User.updateOne(
    { chatId: input.chatId },
    {
      subscribedUrls: [
        'https://cars.av.by/search?brand_id%5B0%5D=433',
        'https://cars.av.by/search?brand_id%5B0%53=5Q3',
      ],
    }
  );
  await handlers.unsubscribe(
    formatCtx('/unsubscribe https://cars.av.by/search?brand_id%5B0%5D=433')
  );

  const user = await User.findOne({ chatId: input.chatId }).lean();

  expect(ctxMock.reply).toHaveBeenLastCalledWith(messages.unsubscribe);
  expect(user.subscribedUrls).toHaveLength(1);
  expect(user.subscribedUrls[0]).toEqual('https://cars.av.by/search?brand_id%5B0%53=5Q3');

  await handlers.unsubscribe(formatCtx('/unsubscribe w'));

  const result = await User.findOne({ chatId: input.chatId }).lean();
  expect(result.subscribedUrls).toHaveLength(1);
  expect(result.subscribedUrls[0]).toEqual('https://cars.av.by/search?brand_id%5B0%53=5Q3');
});

test('unsubscribe all', async () => {
  await User.updateOne(
    { chatId: input.chatId },
    {
      subscribedUrls: [
        'https://cars.av.by/search?brand_id%5B0%5D=433',
        'https://cars.av.by/search?brand_id%5B0%53=5Q3',
      ],
    }
  );
  await handlers.unsubscribe(formatCtx('/unsubscribe all'));

  const user = await User.findOne({ chatId: input.chatId }).lean();

  expect(ctxMock.reply).toHaveBeenLastCalledWith(messages.unsubscribe);
  expect(user.subscribedUrls).toHaveLength(0);
});

test('subscriptions', async () => {
  await User.updateOne({ chatId: input.chatId }, { subscribedUrls });

  await handlers.subscriptions(ctxMock);
  const replyMessage =
    ctxMock.replyWithHTML.mock.calls[ctxMock.replyWithHTML.mock.calls.length - 1][0];

  expect(replyMessage.includes(subscribedUrls[0])).toEqual(true);
  expect(replyMessage.includes(subscribedUrls[1])).toEqual(true);
});
