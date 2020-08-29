const express = require('express')
const mongoose = require('mongoose')
const {
  db
} = require('./config/db')
const port = require('./config/port')

const app = express()

app.use(express())
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  reconnectTries: 60,
  reconnectInterval: 1000,
  poolSize: 10,
  bufferMaxEntries: 0 // If not connected, return errors immediately rather than waiting for reconnect
};

app.listen(port.number, err => {
  console.log('Server running at' + `${port.number}`)
})