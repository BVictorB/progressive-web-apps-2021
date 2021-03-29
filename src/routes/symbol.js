const
  getData = require('../utils/getData'),
  token = process.env.API_TOKEN,
  publicVapidKey = process.env.PUBLIC_VAPID

const symbol = async (req, res) => {
  if (req.method === 'GET') {
    res.render('pages/symbol')
  } else if (req.method === 'POST') {
    const 
      symbol = req.body.symbol.toUpperCase(),
      today = new Date().toISOString().slice(0, 10),
      weekAgo = new Date(new Date().getTime() - (60*60*24*7*1000)).toISOString().slice(0, 10)
      quote = await getData(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${token}`),
      news = await getData(`https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=${weekAgo}&to=${today}&token=${token}`)

    res.render('pages/symbol', { symbol, token, quote, news, publicVapidKey })  
  }
}

module.exports = symbol
