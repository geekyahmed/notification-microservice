const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReactSchema = new Schema({
  reacts: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

const React = mongoose.model('react', ReactSchema)

module.exports = React
