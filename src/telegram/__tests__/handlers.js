const mongoose = require('mongoose');
const handlers = require('../handlers');
const messages = require('../messages');
const User = require('../../db/User');
const connectToDb = require('../../db');

const ctxMock = {
  reply: jest.fn(() => Promise.resolve()),
  replyWithHTML: jest.fn(() => Promise.resolve()),
  replyWithMarkdown: jest.fn(() => Promise.resolve()),
  replyWithMarkdownDisabledLinkPreview: jest.fn(() => Promise.resolve()),
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
  ctxMock.replyWithMarkdownDisabledLinkPreview.mockReset();
  return new User(input).save();
});
afterEach(() => User.deleteMany({}));

describe('start', () => {
  test('should create a new user and reply with welcome text', async () => {
    await User.deleteMany({});
    await handlers.start(ctxMock);

    const user = await User.findOne(input).lean();

    expect(user.username).toEqual(input.username);
    expect(user.chatId).toEqual(input.chatId);
    expect(ctxMock.replyWithMarkdownDisabledLinkPreview).toHaveBeenLastCalledWith(messages.start);
  });

  test('should not save user if /start was called multiple times after initialization', async () => {
    await handlers.start(ctxMock);
    await handlers.start(ctxMock);
    await handlers.start(ctxMock);

    const users = await User.find();

    expect(users).toHaveLength(1);
  });
});

test('help', async () => {
  await handlers.help(ctxMock);

  expect(ctxMock.replyWithMarkdownDisabledLinkPreview).toHaveBeenLastCalledWith(messages.help);
});

describe('add', () => {
  test('should add a new subscription', async () => {
    await handlers.add(formatCtx('/add https://cars.av.by/search?brand_id%5B0%5D=433'));

    const user = await User.findOne({ chatId: input.chatId }).lean();

    expect(ctxMock.replyWithMarkdownDisabledLinkPreview).toHaveBeenLastCalledWith(messages.add);
    expect(user.subscribedUrls).toHaveLength(1);
    expect(user.subscribedUrls).toEqual(
      expect.arrayContaining(['https://cars.av.by/search?brand_id%5B0%5D=433'])
    );
  });

  test('should reject if called without arguments', async () => {
    await expect(handlers.add(formatCtx('/add'))).rejects.toBeInstanceOf(
      mongoose.Error.ValidationError
    );
  });

  test('should reject if provided url is invalid', async () => {
    await expect(handlers.add(formatCtx('/add https://google.com'))).rejects.toBeInstanceOf(
      mongoose.Error.ValidationError
    );
  });

  test('should reject if subscriptions limit is reached', async () => {
    await User.updateOne(
      { chatId: input.chatId },
      {
        subscribedUrls: [
          'https://cars.av.by/search?brand_id%5B0%5D=4533',
          'https://cars.av.by/search?brand_id%5B0%5D=2433',
          'https://cars.av.by/search?brand_id%5B0%5D=1433',
          'https://cars.av.by/search?brand_id%5B0%5D=24323',
          'https://cars.av.by/search?brand_id%5B0%5D=433435',
          'https://cars.av.by/search?brand_id%5B0%5D=433fe',
          'https://cars.av.by/search?brand_id%5B0%5D=433343q',
          'https://cars.av.by/search?brand_id%5B0%5D=433qegerhrt',
          'https://cars.av.by/search?brand_id%5B0%5D=433qegerhrtqw',
          'https://cars.av.by/search?brand_id%5B0%5D=433qegerhrtqw',
          'https://cars.av.by/search?brand_id%5B0%5D=433qegerhrtqw',
          'https://cars.av.by/search?brand_id%5B0%5D=433qegerhrtqw',
        ],
      }
    );

    await expect(
      handlers.add(formatCtx('/add https://cars.av.by/search?brand_id%www5B0%5D=433qegerhrtqw'))
    ).rejects.toBeInstanceOf(mongoose.Error.ValidationError);
  });
});

describe('remove', () => {
  test('should remove subscribed url', async () => {
    await User.updateOne(
      { chatId: input.chatId },
      {
        subscribedUrls: [
          'https://cars.av.by/search?brand_id%5B0%5D=433',
          'https://cars.av.by/search?brand_id%5B0%53=5Q3',
        ],
      }
    );
    await handlers.remove(formatCtx('/remove https://cars.av.by/search?brand_id%5B0%5D=433'));

    const user = await User.findOne({ chatId: input.chatId }).lean();

    expect(ctxMock.replyWithMarkdownDisabledLinkPreview).toHaveBeenLastCalledWith(
      messages.remove.success
    );
    expect(user.subscribedUrls).toHaveLength(1);
    expect(user.subscribedUrls[0]).toEqual('https://cars.av.by/search?brand_id%5B0%53=5Q3');
  });

  test('should do nothing if url was not found', async () => {
    await User.updateOne(
      { chatId: input.chatId },
      {
        subscribedUrls: ['https://cars.av.by/search?brand_id%5B0%5D=433'],
      }
    );

    await handlers.remove(formatCtx('/remove w'));

    const result = await User.findOne({ chatId: input.chatId }).lean();
    expect(result.subscribedUrls).toHaveLength(1);
    expect(result.subscribedUrls[0]).toEqual('https://cars.av.by/search?brand_id%5B0%5D=433');
  });

  test('should reply with error message if called without arguments', async () => {
    await handlers.remove(formatCtx('/remove'));

    expect(ctxMock.replyWithMarkdownDisabledLinkPreview).toHaveBeenLastCalledWith(
      messages.remove.empty
    );
  });
});

test('remove all', async () => {
  await User.updateOne(
    { chatId: input.chatId },
    {
      subscribedUrls: [
        'https://cars.av.by/search?brand_id%5B0%5D=433',
        'https://cars.av.by/search?brand_id%5B0%53=5Q3',
      ],
    }
  );
  await handlers.remove(formatCtx('/remove all'));

  const user = await User.findOne({ chatId: input.chatId }).lean();

  expect(ctxMock.replyWithMarkdownDisabledLinkPreview).toHaveBeenLastCalledWith(
    messages.remove.success
  );
  expect(user.subscribedUrls).toHaveLength(0);
});

test('list', async () => {
  await User.updateOne({ chatId: input.chatId }, { subscribedUrls });

  await handlers.list(ctxMock);
  const replyMessage =
    ctxMock.replyWithMarkdownDisabledLinkPreview.mock.calls[
      ctxMock.replyWithMarkdownDisabledLinkPreview.mock.calls.length - 1
    ][0];

  expect(replyMessage.includes(subscribedUrls[0])).toEqual(true);
  expect(replyMessage.includes(subscribedUrls[1])).toEqual(true);
});
