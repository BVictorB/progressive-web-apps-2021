const
  fetch = require('node-fetch'),
  token = 'c15j4kv48v6tvr5klm7g'

const getQuote = (symbol) => {
  return fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol.toUpperCase()}&token=${token}`)
    .then(res => res.json())
    .catch(_ => null)
}

const quote = async (req, res) => {
  const symbol = req.params.symbol
  const quote = await getQuote(symbol)

  res.render('pages/quote', { quote })
}

module.exports = quote
