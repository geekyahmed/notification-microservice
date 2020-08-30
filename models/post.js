const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  views: {
    type: Number
  },
  reacts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'react'
    }
  ],
  isPublished: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

const Post = mongoose.model('post', PostSchema)

module.exports = Post
