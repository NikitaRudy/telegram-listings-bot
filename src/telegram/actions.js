const sendListingsToUser = (bot, user, listings) =>
  Promise.all(
    listings.map(listing =>
      bot.telegram.sendPhoto(user.chatId, { source: listing.screenshot }, { caption: listing.url })
    )
  )
module.exports = {
  sendListingsToUser,
}
