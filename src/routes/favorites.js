const
  getData = require('../utils/getData'),
  token = process.env.API_TOKEN

const favorites = async (req, res) => {
  if (req.method === 'GET') {
    const 
      favoriteCookies = req.cookies.favorites,
      today = new Date().toISOString().slice(0, 10)

    if (favoriteCookies) {
      const favorites = await Promise.all(favoriteCookies.map(async favorite => {
        const quote = await getData(`https://finnhub.io/api/v1/quote?symbol=${favorite}&token=${token}`)
        const news = await getData(`https://finnhub.io/api/v1/company-news?symbol=${favorite}&from=${today}&to=${today}&token=${token}`)
        return {
          symbol: favorite,
          updated: new Date(),
          quote,
          news
        }
      }))
  
      res.render('pages/favorites', { favorites, url: process.env.URL })
    } else {
      res.render('pages/favorites')
    }
  } else if (req.method === 'POST') {
    const 
      newSymbol = req.body.symbol,
      savedSymbols = req.cookies.favorites

    if (savedSymbols && savedSymbols.includes(newSymbol)) {
      res.render('pages/favorites', { favorites: savedSymbols })
      return
    }

    const favorites = savedSymbols ? [...savedSymbols, newSymbol] : [newSymbol]
    res.cookie('favorites', favorites)
    res.redirect('/favorites')
  }
}

module.exports = favorites
