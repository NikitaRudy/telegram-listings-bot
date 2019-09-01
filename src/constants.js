const platforms = {
  avby: 'avby',
  baraholka: 'baraholka',
};

const platformsArr = Object.values(platforms);

const platformHosts = {
  [platforms.avby]: 'cars.av.by',
  [platforms.baraholka]: 'ab.onliner.by',
};

const platformSearchPaths = {
  [platforms.avby]: '/search',
  [platforms.baraholka]: '/',
};

const listingContainerSelectors = {
  [platforms.avby]: '.listing-item',
  [platforms.baraholka]: '.autoba-table tbody .carRow',
};

const listingLinkSelectors = {
  [platforms.avby]: '.listing-item-title > h4 > a',
  [platforms.baraholka]: '.txt > h2 > span > a',
};

module.exports = {
  platforms,
  platformsArr,
  platformHosts,
  platformSearchPaths,
  listingContainerSelectors,
  listingLinkSelectors,
};
