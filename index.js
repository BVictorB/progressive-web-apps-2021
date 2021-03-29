require("dotenv").config()

const
  express = require('express'),
  minify = require('express-minify'),
  mongoose = require('mongoose'),
  db = mongoose.connection,
  Subscription = require('./src/models/subscription'),
  app = express(),
  webPush = require('web-push'),
  compression = require('compression'),
  cookieParser = require('cookie-parser'),
  router = require('./src/router'),
  checkNotification = require('./src/utils/checkNotification')

mongoose.connect(process.env.DB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})

db.once('open', _ => {
  console.log('Connected to MongoDB!')
})

app
  .set('view engine', 'ejs')
  .set('views', __dirname + '/src/views/')
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(cookieParser())
  .use(compression())
  .use(minify())
  .use(express.static(__dirname + '/src/static'))
  .listen(3000)

webPush.setVapidDetails('mailto:replacethislater@test.com', process.env.PUBLIC_VAPID, process.env.PRIVATE_VAPID)

setInterval(async _ => {
  const subscriptions = await Subscription.find({})
  subscriptions.forEach(async subscription => {
    if (await checkNotification(subscription)) {
      Subscription.find({ _id: subscription.id }).remove().exec()
    }
  })
}, 60000)

app.use(router)
