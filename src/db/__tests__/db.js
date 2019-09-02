const mongoose = require('mongoose');
const User = require('../User');
const connectToDb = require('../');

beforeAll(() => connectToDb(`${process.env.TEST_MONGO_HOST}/general`));
afterAll(() => mongoose.disconnect());

beforeEach(() => User.deleteMany());

test('should save user', async () => {
  const input = {
    username: 'johndoe',
    chatId: '131434',
  };

  const user = await new User(input).save();

  expect(user.username).toEqual('johndoe');
  expect(user.chatId).toEqual('131434');
  expect(user.subscribedUrls).toHaveLength(0);
  expect(user.sendedListings).toHaveLength(0);
});

test('should not save user without chatId or username', async () => {
  const input1 = { username: 'johndoe' };
  const input2 = { chatId: '12314' };

  await expect(new User(input1).save()).rejects.toBeInstanceOf(mongoose.Error.ValidationError);
  await expect(new User(input2).save()).rejects.toBeInstanceOf(mongoose.Error.ValidationError);
});

test('should not save invalid subscribe url', async () => {
  const input1 = { username: 'johndoe', chatId: '124124' };

  await new User(input1).save();

  await expect(
    User.findOneAndUpdate(
      { chatId: input1.chatId },
      { subscribedUrls: ['invalid'] },
      { runValidators: true }
    )
  ).rejects.toBeInstanceOf(mongoose.Error.ValidationError);

  await expect(
    User.findOneAndUpdate(
      { chatId: input1.chatId },
      { subscribedUrls: ['https://google.com'] },
      { runValidators: true }
    )
  ).rejects.toBeInstanceOf(mongoose.Error.ValidationError);
});

test('should not save subscribe url if limit is reached', async () => {
  const input1 = { username: 'johndoe', chatId: '124124' };

  await new User(input1).save();

  await expect(
    User.findOneAndUpdate(
      { chatId: input1.chatId },
      {
        subscribedUrls: [
          'https://cars.av.by/search?brand_id%5B0%5D=433',
          'https://cars.av.by/search?brand_id%5B0%5D=43',
          'https://cars.av.by/search?brand_id%5B0%5D=4533',
          'https://cars.av.by/search?brand_id%5B0%5D=2433',
          'https://cars.av.by/search?brand_id%5B0%5D=1433',
          'https://cars.av.by/search?brand_id%5B0%5D=24323',
          'https://cars.av.by/search?brand_id%5B0%5D=433435',
          'https://cars.av.by/search?brand_id%5B0%5D=433fe',
          'https://cars.av.by/search?brand_id%5B0%5D=433343q',
          'https://cars.av.by/search?brand_id%5B0%5D=433qegerhrt',
          'https://cars.av.by/search?brand_id%5B0%5D=433qegerhrtqw',
        ],
      },
      { runValidators: true }
    )
  ).rejects.toBeInstanceOf(mongoose.Error.ValidationError);
});
