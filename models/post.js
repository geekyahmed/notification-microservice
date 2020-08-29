const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
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
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'comment'
    }
  ],
  date: {
    type: Date,
    default: Date.now()
  }
})

const Post = mongoose.model('post', PostSchema)

module.exports = Post
