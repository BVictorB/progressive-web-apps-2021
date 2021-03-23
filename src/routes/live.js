require("dotenv").config()

const live = (req, res) => {
  if (req.method === 'GET') {
    res.render('pages/live')  
  } else if (req.method === 'POST') {
    const 
      symbol = req.body.symbol.toUpperCase(),
      token = process.env.API_TOKEN

    res.render('pages/live', { symbol, token })  
  }
}

module.exports = live
