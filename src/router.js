const router = require('express').Router()

const
  home = require('./routes/home'),
  symbol = require('./routes/symbol'),
  news = require('./routes/news'),
  offline = require('./routes/offline'),
  favorites = require('./routes/favorites')

router
  .get('/', home)
  .get('/symbol', symbol)
  .get('/symbol/:symbol', symbol)
  .post('/symbol', symbol)
  .get('/news', news)
  .post('/news', news)
  .get('/offline', offline)
  .get('/favorites', favorites)
  .post('/favorites', favorites)

module.exports = router
