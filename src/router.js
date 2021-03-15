const router = require('express').Router()

const
  home = require('./routes/home'),
  quotes = require('./routes/quotes'),
  quote = require('./routes/quote'),
  live = require('./routes/liveSymbol'),
  liveSymbol = require('./routes/liveSymbol'),
  subscribe = require('./routes/subscribe')

router
  .get('/', home)
  .get('/quote', quotes)
  .get('/quote/:symbol', quote)
  .get('/live', live)
  .get('/live/:symbol', liveSymbol)
  .get('/subscribe', subscribe)

module.exports = router
