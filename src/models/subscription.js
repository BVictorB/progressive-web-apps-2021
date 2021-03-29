const 
  mongoose = require('mongoose'),
  Schema = mongoose.Schema

const subscriptionSchema = new Schema({
  subscription: {
    type: Object,
    required: true
  },
  symbol: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
})

const Subscription = mongoose.model('subscriptions', subscriptionSchema)

module.exports = Subscription
