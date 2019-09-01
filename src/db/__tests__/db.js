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
