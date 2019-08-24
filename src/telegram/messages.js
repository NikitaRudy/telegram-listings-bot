const start =
  'Hello!\n1. Go to https://cars.av.by/search\n2. Set the filter you interested in\n' +
  '3. Copy url with applied filters\n4. type /subscribe <URL FROM STEP 3> command'

const help =
  '/start - initialize bot\n/subscribe <URL> - subscribe to listings updates from provided url\n' +
  '/subscriptions - list subscribed urls'

const subscribe = 'Subscribed!'
const subscriptions = 'No subscriptions yet'
const unsubscribe = 'Unsubscribed!'

module.exports = {
  start,
  help,
  subscribe,
  subscriptions,
  unsubscribe,
}
