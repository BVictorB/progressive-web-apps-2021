require("dotenv").config()

const liveSymbol = (req, res) => {
  const 
    symbol = req.params.symbol.toUpperCase(),
    token = process.env.API_TOKEN

  res.render('pages/live', { symbol, token })
}

module.exports = liveSymbol
