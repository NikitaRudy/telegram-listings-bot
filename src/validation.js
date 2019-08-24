const url = require('url')

const avbyHostname = 'cars.av.by'
const searchPath = '/search'

const validateSubscribeUrl = u => {
  const { pathname, hostname, query } = url.parse(u)

  return {
    error: hostname !== avbyHostname && pathname !== searchPath && query === null,
    message:
      'Provide a valid url. Valid url example: https://cars.av.by/search?brand_id%5B0%5D=433&model_id%5B0%5D=&year_from=2009',
  }
}

module.exports = {
  validateSubscribeUrl,
}
