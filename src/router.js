const router = require('express').Router()

const
  home = require('./routes/home'),
  symbol = require('./routes/symbol'),
  news = require('./routes/news'),
  favorites = require('./routes/favorites'),
  remove = require('./routes/remove'),
  subscribe = require('./routes/subscribe')

router
  .get('/', home)
  .get('/symbol', symbol)
  .get('/symbol/:symbol', symbol)
  .post('/symbol', symbol)
  .get('/news', news)
  .post('/news', news)
  .get('/favorites', favorites)
  .post('/favorites', favorites)
  .post('/remove', remove)
  .post('/subscribe', subscribe)

module.exports = router
