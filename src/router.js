const router = require('express').Router()

const
  home = require('./routes/home'),
  quote = require('./routes/quote'),
  live = require('./routes/live'),
  subscribe = require('./routes/subscribe'),
  news = require('./routes/news'),
  offline = require('./routes/offline'),
  favorites = require('./routes/favorites')

router
  .get('/', home)
  .get('/quote', quote)
  .post('/quote', quote)
  .get('/live', live)
  .post('/live/', live)
  .get('/subscribe', subscribe)
  .get('/news', news)
  .post('/news', news)
  .get('/offline', offline)
  .get('/favorites', favorites)
  .post('/favorites', favorites)

module.exports = router
