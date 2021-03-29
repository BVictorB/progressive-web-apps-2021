const Subscription = require('../models/subscription')

const subscribe = (req, res) => {
  const 
    subscriptionModel = new Subscription(),
    { subscription, symbol, price } = req.body
    
  subscriptionModel.subscription = subscription
  subscriptionModel.symbol = symbol
  subscriptionModel.price = price

  subscriptionModel.save(err => {
    !err && res.status(201).json({})
  })
}

module.exports = subscribe
