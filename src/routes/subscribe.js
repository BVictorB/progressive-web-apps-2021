require("dotenv").config()

const subscribe = (req, res) => {
  const publicVapidKey = process.env.PUBLIC_VAPID

  res.render('./pages/subscribe', { publicVapidKey })
}

module.exports = subscribe
