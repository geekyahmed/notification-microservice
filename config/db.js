require('dotenv').config()
const mongoose = require('mongoose')

const db = {
  uri: process.env.MONGODB_URI
}
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  reconnectTries: 60,
  reconnectInterval: 1000,
  poolSize: 10,
  useFindAndModify: false,
  bufferMaxEntries: 0 // If not connected, return errors immediately rather than waiting for reconnect
}

const connectDB = () => {
  mongoose
    .connect(db.uri, options)
    .then(response => {
      console.log(`MongoDB Connected Successfully`)
    })
    .catch(err => {
      console.log(err)
    })
}

module.exports = connectDB
