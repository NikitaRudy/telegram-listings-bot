const http = require('http');
const request = require('request');
const mongoose = require('mongoose');

const User = require('../src/db/User');
const bot = require('../src/telegram/bot');
const db = require('../src/db');
// const scraper = require('../src/scraper');
const { telegramUpdates, mongooseUtils } = require('../test-utils');

let server;
const webhookPath = '/test-webhook-path';

const user = { chatId: '512345673', username: 'username1123' };
const subscribedUrls = [
  'https://cars.av.by/search?brand_id%5B0%5D=433',
  'https://cars.av.by/search?brand_id%5B0%53=5Q3',
  'https://cars.av.by/search?brand_id%5B0%5D=433&model_id%5B0%5D=&year_from=2009&year_to=&currency=USD&price_from=&price_to=9000&transmission=2&body_id=&engine_volume_min=1600&engine_volume_max=&driving_id=&mileage_min=&mileage_max=100000&region_id=5&city_id=&interior_material=&interior_color=&order_from%5B%5D=1&exchange=&search_time=',
  'https://ab.onliner.by/#country=248&currency=USD&sort[]=last_time_up&page=1&car[0][5]=',
];

bot.context = {
  ...bot.context,
  reply: jest.fn(() => Promise.resolve()),
  replyWithHTML: jest.fn(() => Promise.resolve()),
  replyWithMarkdown: jest.fn(() => Promise.resolve()),
};

// const botStub = {
//   telegram: {
//     sendPhoto: jest.fn(() => Promise.resolve()),
//   },
// };

const sendWebhook = payload =>
  new Promise((resolve, reject) => {
    const req = request.post(`http://localhost:${process.env.PORT}${webhookPath}`, {
      body: JSON.stringify(payload),
      headers: {
        'content-type': 'application/json',
      },
    });
    req.on('error', reject);
    req.on('complete', resolve);
  });

const startServer = () =>
  new Promise((resolve, reject) => {
    server = http
      .createServer(bot.webhookCallback(webhookPath))
      .listen(process.env.PORT, err => (err ? reject() : resolve()));
  });

const closeServer = () => new Promise(resolve => server.close(resolve));

beforeAll(async () => {
  await Promise.all([db(`${process.env.TEST_MONGO_HOST}/bot-test`), startServer()]);

  bot.telegram.setWebhook(`https://somwhere.com${webhookPath}`);
});

afterAll(async () => {
  await Promise.all([User.deleteMany({}), closeServer()]);
  await mongoose.disconnect();
});

describe('bot tests', () => {
  beforeEach(async () => {
    bot.context.reply.mockReset();
    bot.context.replyWithMarkdown.mockReset();
    bot.context.replyWithHTML.mockReset();

    await new User(user).save();
  });

  afterEach(() => User.deleteMany({}));

  describe('start', () => {
    test('should save new user and reply', async () => {
      await User.deleteMany({});
      await sendWebhook(telegramUpdates.mocks.start);

      const users = await User.find().select(mongooseUtils.selectOptions);

      expect(users).toMatchSnapshot();
      expect(bot.context.replyWithMarkdown.mock.calls).toMatchSnapshot();
    });

    test('multiple start calls', async () => {
      await sendWebhook(telegramUpdates.mocks.start);
      await sendWebhook(telegramUpdates.mocks.start);
      await sendWebhook(telegramUpdates.mocks.start);

      const users = await User.find().select(mongooseUtils.selectOptions);

      expect(users).toMatchSnapshot();
    });
  });

  describe('help', () => {
    test('should reply to user', async () => {
      await sendWebhook(telegramUpdates.mocks.help);
      const users = await User.find().select(mongooseUtils.selectOptions);

      expect(bot.context.replyWithMarkdown.mock.calls).toMatchSnapshot();
      expect(users).toMatchSnapshot();
    });

    test('multiple help calls', async () => {
      await sendWebhook(telegramUpdates.mocks.help);
      const users = await User.find().select(mongooseUtils.selectOptions);

      expect(bot.context.replyWithMarkdown.mock.calls).toMatchSnapshot();
      expect(users).toMatchSnapshot();
    });
  });

  describe('list', () => {
    test('should reply to user', async () => {
      await sendWebhook(telegramUpdates.mocks.list);

      const users = await User.find().select(mongooseUtils.selectOptions);

      expect(bot.context.replyWithMarkdown.mock.calls).toMatchSnapshot();
      expect(users).toMatchSnapshot();
    });

    test('should reply with subscription list if any', async () => {
      await User.findOneAndUpdate({ chatId: user.chatId }, { subscribedUrls });
      await sendWebhook(telegramUpdates.mocks.list);

      const users = await User.find().select(mongooseUtils.selectOptions);

      expect(bot.context.replyWithMarkdown.mock.calls).toMatchSnapshot();
      expect(users).toMatchSnapshot();
    });
  });

  describe('add', () => {
    test('should add an url and reply to user', async () => {
      await sendWebhook(telegramUpdates.creators.add(subscribedUrls[0]));

      const users = await User.find().select(mongooseUtils.selectOptions);

      expect(users).toMatchSnapshot();
      expect(bot.context.replyWithMarkdown.mock.calls).toMatchSnapshot();
    });

    test('should not add url and reply to user if invalid url is provided', async () => {
      await sendWebhook(telegramUpdates.mocks.add);
      await sendWebhook(telegramUpdates.creators.add('https://google.com'));
      await sendWebhook(telegramUpdates.creators.add('https://av.by/search?qwe=test'));
      await sendWebhook(telegramUpdates.creators.add('https://ab.onliner.by/search?qwe/test'));
      await sendWebhook(telegramUpdates.creators.add('https://cars.av.by'));
      await sendWebhook(telegramUpdates.creators.add('https://auto.ru/search?qwe=ter'));

      const users = await User.find().select(mongooseUtils.selectOptions);

      expect(users).toMatchSnapshot();
      expect(bot.context.replyWithMarkdown.mock.calls).toMatchSnapshot();
    });
  });

  describe('remove', () => {
    test('should remove provided url and reply to user', async () => {
      await User.findOneAndUpdate({ chatId: user.chatId }, { subscribedUrls });

      await sendWebhook(telegramUpdates.creators.remove(subscribedUrls[0]));
      const users = await User.find().select(mongooseUtils.selectOptions);

      expect(bot.context.replyWithMarkdown.mock.calls).toMatchSnapshot();
      expect(users).toMatchSnapshot();
    });

    test('should remove all urls if all argument is provided and reply to user', async () => {
      await User.findOneAndUpdate({ chatId: user.chatId }, { subscribedUrls });

      await sendWebhook(telegramUpdates.creators.remove('all'));
      const users = await User.find().select(mongooseUtils.selectOptions);

      expect(bot.context.replyWithMarkdown.mock.calls).toMatchSnapshot();
      expect(users).toMatchSnapshot();
    });

    test('should works correctly if invalid argument provided', async () => {
      await User.findOneAndUpdate({ chatId: user.chatId }, { subscribedUrls });

      await sendWebhook(telegramUpdates.creators.remove('qwe'));
      await sendWebhook(telegramUpdates.creators.remove('https://google.com'));
      await sendWebhook(telegramUpdates.creators.remove('https://av.by/search?qwe=test'));
      await sendWebhook(telegramUpdates.creators.remove('https://ab.onliner.by/search?qwe/test'));
      await sendWebhook(telegramUpdates.creators.remove('https://cars.av.by'));
      await sendWebhook(telegramUpdates.creators.remove('https://auto.ru/search?qwe=ter'));
      const users = await User.find().select(mongooseUtils.selectOptions);

      expect(bot.context.replyWithMarkdown.mock.calls).toMatchSnapshot();
      expect(users).toMatchSnapshot();
    });
  });

  describe('flow', () => {
    test('basic flow', async () => {
      await sendWebhook(telegramUpdates.mocks.start);
      await sendWebhook(telegramUpdates.mocks.help);
      const users1 = await User.find().select(mongooseUtils.selectOptions);
      expect(users1).toMatchSnapshot();

      await sendWebhook(telegramUpdates.mocks.list);
      await sendWebhook(telegramUpdates.creators.add(subscribedUrls[0]));
      const users2 = await User.find().select(mongooseUtils.selectOptions);
      expect(users2).toMatchSnapshot();

      await sendWebhook(telegramUpdates.creators.add(subscribedUrls[1]));
      const users3 = await User.find().select(mongooseUtils.selectOptions);
      expect(users3).toMatchSnapshot();

      await sendWebhook(telegramUpdates.creators.remove(subscribedUrls[0]));
      const users4 = await User.find().select(mongooseUtils.selectOptions);
      expect(users4).toMatchSnapshot();

      await sendWebhook(telegramUpdates.mocks.list);
      const users5 = await User.find().select(mongooseUtils.selectOptions);
      expect(users5).toMatchSnapshot();
      expect(bot.context.replyWithMarkdown.mock.calls).toMatchSnapshot();
    });
  });

  // describe('scraper', () => {
  //   test.only('first', async () => {
  //     await sendWebhook(telegramUpdates.mocks.start);
  //     await sendWebhook(telegramUpdates.creators.add(subscribedUrls[2]));
  //     await sendWebhook(telegramUpdates.creators.add(subscribedUrls[3]));

  //     await scraper.start(botStub, `${process.env.TEST_MONGO_HOST}/bot-test`);
  //     const users = await User.find().select(mongooseUtils.selectOptions);

  //     expect(users).toMatchSnapshot();
  //     expect(bot.context.replyWithMarkdown.mock.calls).toMatchSnapshot();
  //     botStub.telegram.sendPhoto.mock.calls.forEach(([, { source, caption }]) => {
  //       expect(source).toBeInstanceOf(Buffer);
  //       expect(typeof caption === 'string').toBe(true);
  //     });
  //   });
  // });
});
