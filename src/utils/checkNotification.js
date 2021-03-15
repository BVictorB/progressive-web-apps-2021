const 
  webPush = require('web-push'),
  getData = require('./getData'),
  roundDecimals = require('./roundDecimals')

const checkNotification = async (sub) => {
  const 
    symbol = sub.symbol.toUpperCase(),
    quote = await getData(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${process.env.API_TOKEN}`),
    profile = await getData(`https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${process.env.API_TOKEN}`)

  const payload = JSON.stringify({
    title: `${profile.ticker} is now only $${roundDecimals(quote.c, 2)}!`,
    content: `That's $${roundDecimals(sub.price - quote.c, 2)} lower than your set price of $${roundDecimals(sub.price, 2)}!`,
    icon: profile.logo
  })

  if (sub.price > quote.c) {
    webPush.sendNotification(sub.subscription, payload).catch(err => console.log(err))
  }
}

module.exports = checkNotification
