const url = require('url');

const listingsIds = [
  '/kia/ceed/1231231',
  '/cars/1231243214',
  '/kia/rio/1231231',
  '/cars/43223423',
  '/cars/90809243',
  '/skoda/rapid/1231231',
  '/cars/92844350',
  '/skoda/octavia/1231231',
  '/cars/92849243',
  '/skoda/superb/1231231',
];

const listingUrls = {
  avby: 'https://cars.av.by/kia/ceed/1231231',
  baraholka: 'https://ab.onliner.by/cars/1231243214',
};

const listings = [
  {
    screenshot: Buffer.alloc(10),
    listingId: '/kia/ceed/1231232',
    url: 'https://av.by/kia/ceed/1231232',
  },
  {
    screenshot: Buffer.alloc(10),
    listingId: '/cars/12314243214',
    url: 'https://ab.onliner.by/cars/12314243214',
  },
];

const createListings = amount =>
  Array.from({ length: amount }, (v, i) => {
    const listingUrl = i % 2 ? listingUrls.avby : listingUrls.baraholka;

    return {
      url: listingUrl,
      listingId: url.parse(listingUrl).pathname,
      screenshot: Buffer.alloc(10),
    };
  });

const createListingsIds = amount => createListings(amount).map(l => l.listingId);
const createScreenshots = amount => createListings(amount).map(l => l.createScreenshots);

module.exports = {
  mocks: {
    listingsIds,
    listingUrls,
    listings,
  },
  creators: {
    listingsIds: createListingsIds,
    screenshots: createScreenshots,
    listings: createListings,
  },
};
