const liveSymbol = (req, res) => {
  const symbol = req.params.symbol.toUpperCase()

  res.render('pages/live', { symbol })
}

module.exports = liveSymbol
