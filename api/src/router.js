const router = require('express').Router()

const
  home = require('./routes/home'),
  quote = require('./routes/quote'),
  live = require('./routes/live'),
  subscribe = require('./routes/subscribe'),
  news = require('./routes/news')

router
  .get('/', home)
  .get('/quote', quote)
  .get('/quote/:symbol', quote)
  .get('/live', live)
  .get('/live/:symbol', live)
  .get('/subscribe', subscribe)
  .get('/news', news)
  .post('/news', news)

module.exports = router
