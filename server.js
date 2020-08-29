const express = require('express')
const connectDB = require('./config/db')
const port = require('./config/port')
const app = express()

connectDB()

app.use(express())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: false
  })
)

app.listen(port.number, err => {
  console.log('API Live At Port ' + `${port.number}`)
})
