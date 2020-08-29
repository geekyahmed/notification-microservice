const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NotificationSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  data: {
    type: Schema.Types.ObjectId,
    ref: 'post'
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

const Notification = mongoose.model('notification', NotificationSchema)

module.exports = Notification
