require("dotenv").config()

const live = (req, res) => {
  if (req.params.symbol) {
    const 
      symbol = req.params.symbol.toUpperCase(),
      token = process.env.API_TOKEN

    res.render('./pages/live', { symbol, token })
  } else {
    res.send('live')
  }
}

module.exports = live
