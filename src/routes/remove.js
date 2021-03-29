const remove = (req, res) => {
  const 
    favorites = req.cookies.favorites,
    symbol = req.body.symbol

  const filteredFavorites = favorites.filter(favorite => favorite !== symbol)

  res.cookie('favorites', filteredFavorites)
  res.redirect('/favorites')
}

module.exports = remove
