const express = require('express')
const connectDB = require('./config/db')
const apiRoutes = require('./routes/api.routes')
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

app.use('/api', apiRoutes)

app.listen(port.number, err => {
  console.log('API Live At Port ' + `${port.number}`)
})
