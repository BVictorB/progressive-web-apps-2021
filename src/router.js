const router = require('express').Router()

const
  home = require('./routes/home'),
  quotes = require('./routes/quotes'),
  quote = require('./routes/quote')

router
  .get('/', home)
  .get('/quote', quotes)
  .get('/quote/:symbol', quote)

module.exports = router