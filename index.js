const
  router = require('./src/router'),
  express = require('express'),
  app = express()

app
  .set('view engine', 'ejs')
  .set('views', 'src/views')
  .use(express.static('src/static'))
  .listen(3000)

app.use(router)
