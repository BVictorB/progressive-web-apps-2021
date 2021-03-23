const
  getData = require('../utils/getData'),
  token = process.env.API_TOKEN

const quote = async (req, res) => {
  if (req.method === 'GET') {
    res.render('pages/quote')  
  } else if (req.method === 'POST') {
    const 
      symbol = req.body.symbol.toUpperCase(),
      quote = await getData(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${token}`)

    res.render('pages/quote', { symbol, quote })  
  }
}

module.exports = quote
