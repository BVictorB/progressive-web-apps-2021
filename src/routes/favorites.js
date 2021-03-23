const favorites = (req, res) => {
  if (req.method === 'GET') {
    const favorites = req.cookies.symbol
    res.render('pages/favorites', { favorites })
  } else if (req.method === 'POST') {
    const 
      newSymbol = req.body.symbol,
      savedSymbols = req.cookies.symbol

    if (savedSymbols && savedSymbols.includes(newSymbol)) {
      res.render('pages/favorites', { favorites: savedSymbols })
      return
    }

    const favorites = savedSymbols ? [...savedSymbols, newSymbol] : [newSymbol]
    res.cookie('symbol', favorites)
    res.render('pages/favorites', { favorites })
  }
}

module.exports = favorites
