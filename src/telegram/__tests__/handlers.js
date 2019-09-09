const mongoose = require('mongoose');
const handlers = require('../handlers');
const User = require('../../db/User');
const connectToDb = require('../../db');

const testUtils = require('../../../test-utils');

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

    expect(user).toMatchSnapshot(testUtils.mongooseUtils.snapshotOptions);
    expect(ctxMock.replyWithMarkdown.mock.calls).toMatchSnapshot();
  });

  test('should not save user if /start was called multiple times after initialization', async () => {
    await handlers.start(ctxMock);
    await handlers.start(ctxMock);
    await handlers.start(ctxMock);

    const users = await User.find().select(testUtils.mongooseUtils.selectOptions);

    expect(users).toMatchSnapshot();
  });
});

test('help', async () => {
  await handlers.help(ctxMock);

  expect(ctxMock.replyWithMarkdown.mock.calls).toMatchSnapshot();
});

describe('add', () => {
  test('should add a new subscription', async () => {
    await handlers.add(formatCtx('/add https://cars.av.by/search?brand_id%5B0%5D=433'));

    const user = await User.findOne({ chatId: input.chatId }).lean();

    expect(ctxMock.replyWithMarkdown.mock.calls).toMatchSnapshot();
    expect(user).toMatchSnapshot(testUtils.mongooseUtils.snapshotOptions);
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

    expect(ctxMock.replyWithMarkdown.mock.calls).toMatchSnapshot();
    expect(user).toMatchSnapshot(testUtils.mongooseUtils.snapshotOptions);
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
    expect(result.subscribedUrls).toMatchSnapshot();
  });

  test('should reply with error message if called without arguments', async () => {
    await handlers.remove(formatCtx('/remove'));

    expect(ctxMock.replyWithMarkdown.mock.calls).toMatchSnapshot();
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

  expect(ctxMock.replyWithMarkdown.mock.calls).toMatchSnapshot();
  expect(user.subscribedUrls).toMatchSnapshot();
});

test('list', async () => {
  await User.updateOne({ chatId: input.chatId }, { subscribedUrls });

  await handlers.list(ctxMock);

  expect(ctxMock.replyWithMarkdownDisabledLinkPreview.mock.calls).toMatchSnapshot();
});
