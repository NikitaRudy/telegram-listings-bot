const link = (url, text) => `<a href="${url}">${text}</a>`;

const start =
  'Hello!\n' +
  `1. Go to ${link('https://cars.av.by/search', 'av.by')} or ${link(
    'https://ab.onliner.by',
    'ab.onliner.by'
  )}\n` +
  '2. Set the filter you interested in\n' +
  '3. Copy url with applied filters\n' +
  '4. type /subscribe {URL FROM STEP 3} command';

const help =
  '/start - initialize bot\n' +
  '/subscribe {URL} - subscribe to listings updates from provided url\n' +
  '/subscriptions - list subscribed urls\n' +
  '/unsubscribe {URL} - unsubscribe form provided URL updates';

const subscribe = 'Subscribed!';
const subscriptions = 'No subscriptions yet';
const unsubscribe = 'Unsubscribed!';

const validation = {
  url:
    'Provide a valid url. Valid url examples:\n' +
    'https://cars.av.by/search?brand_id%5B0%5D=433&model_id%5B0%5D=&year_from=2009 or\n\n' +
    'https://ab.onliner.by/#max-price=9000&country=248&currency=USD&sort[]=last_time_up&page=1',
};

module.exports = {
  start,
  help,
  subscribe,
  subscriptions,
  unsubscribe,
  link,
  validation,
};
