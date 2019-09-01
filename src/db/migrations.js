require('dotenv').config();

const connectToDb = require('./index');
const User = require('./User');

const user = {
  'chatId': process.env.CHAT_ID,
  '__v': 0,
  'sendedListings': [],
  'subscribedUrls': [
    'https://cars.av.by/search?brand_id%5B0%5D=433&model_id%5B0%5D=&brand_id%5B1%5D=330&model_id%5B1%5D=&brand_id%5B2%5D=1126&model_id%5B2%5D=&brand_id%5B3%5D=545&model_id%5B3%5D=&year_from=2009&year_to=&currency=USD&price_from=&price_to=10000&transmission=2&body_id=&engine_volume_min=1600&engine_volume_max=&driving_id=&mileage_min=&mileage_max=100000&region_id=5&city_id=&interior_material=&interior_color=&order_from%5B%5D=1&exchange=&search_time=7',
    'https://ab.onliner.by/#max-price=10000&country=248&region=349&min-year=2009&min-capacity=1.6&transmission[]=2&max-mileage=100000&seller_type[]=1&currency=USD&sort[]=last_time_up&page=1&car[0][25]=&car[1][57]=&car[2][19]=&car[3][32]=',
  ],
  'username': process.env.USER_NAME,
};

connectToDb()
  .then(() => new User(user).save())
  .then(() => console.log('done'))
  .then(() => process.exit(0))
  .catch(err => console.log('failed', err));
