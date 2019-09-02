const link = (url, text) => `<a href="${url}">${text}</a>`;

const start =
  'Hello!\n' +
  `1. Go to ${link('https://cars.av.by/search', 'av.by')} or ${link(
    'https://ab.onliner.by',
    'ab.onliner.by'
  )}\n` +
  '2. Set the filter you interested in\n' +
  '3. Copy url with applied filters\n' +
  '4. type /add {URL FROM STEP 3} command';

const help =
  '/start - initialize bot\n' +
  '/add {URL} - add to listings updates from provided url\n' +
  '/list - list subscribed urls\n' +
  '/remove {URL} - unsubscribe form provided URL updates';

const add = 'Subscribed!';
const list = 'No subscriptions yet';
const remove = {
  success: 'Unsubscribed!',
  empty: 'Provide an url to remove',
};

const validation = {
  subscribedUrls: {
    invalidUrl:
      'Provide a valid url. Valid url examples:\n' +
      'https://cars.av.by/search?brand_id%5B0%5D=433&model_id%5B0%5D=&year_from=2009 or\n\n' +
      'https://ab.onliner.by/#max-price=9000&country=248&currency=USD&sort[]=last_time_up&page=1',
    limit: 'You have reached subscriptions limit',
  },
};

module.exports = {
  start,
  help,
  add,
  list,
  remove,
  link,
  validation,
};
