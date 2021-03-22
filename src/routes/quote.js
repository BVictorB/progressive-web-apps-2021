const
  getData = require('../utils/getData'),
  token = process.env.API_TOKEN

const quote = async (req, res) => {
  if (req.params.symbol) {
    const 
      symbol = req.params.symbol,
      quote = await getData(`https://finnhub.io/api/v1/quote?symbol=${symbol.toUpperCase()}&token=${token}`)
  
    res.render('pages/quote', { quote })
  } else {
    res.send('quote')
  }
}

module.exports = quote
