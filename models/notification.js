const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NotificationSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  senderId: {
      type: Schema.Types.ObjectId,
      ref: 'post'
  },
  receiverId: {
      type: Schema.Types.ObjectId,
      ref: 'post'
  },
  seen: {
    type: Boolean,
    default: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

const Notification = mongoose.model('notification', NotificationSchema)

module.exports = Notification
