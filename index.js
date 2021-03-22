require("dotenv").config()

const
  express = require('express'),
  app = express(),
  webPush = require('web-push'),
  router = require('./src/router'),
  checkNotification = require('./src/utils/checkNotification'),
  path = require('path')

app
  .set('view engine', 'ejs')
  .set('views', path.join(__dirname + '/src/views/'))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(express.static(path.join(__dirname + '/src/static/')))
  .listen(3000)

webPush.setVapidDetails('mailto:replacethislater@test.com', process.env.PUBLIC_VAPID, process.env.PRIVATE_VAPID)

let subscriptions = []

setInterval(_ => {
  subscriptions.forEach(subscription => {
    checkNotification(subscription)
  })
}, 10000)

app.post('/subscribe', (req, res) => {
  res.status(201).json({})
  subscriptions.push(req.body)
})

app.use(router)
