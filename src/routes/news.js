const 
  getData = require('../utils/getData'),
  token = process.env.API_TOKEN

const news = async (req, res) => {
  if (req.method === 'GET') {
    res.render('./pages/news')
  } else if (req.method === 'POST') {
    const 
      input = req.body,
      news = await getData(`https://finnhub.io/api/v1/company-news?symbol=${input.symbol}&from=${input.from}&to=${input.to}&token=${token}`)

    res.render('./pages/news', { news, input })
  }
}

module.exports = news
