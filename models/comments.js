const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
  content: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

const Comment = mongoose.model('comment', CommentSchema)

module.exports = Comment