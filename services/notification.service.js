const Notification = require('../models/notification')

const createNotification = (data, title) => {
  const newActivity = new Notification({
    title: title,
    data: data
  })
  newActivity
    .save()
    .then(savedActivity => {
      console.log('Notification has been Created')
    })
    .catch(err => {
      console.log(err)
    })
}

module.exports = createNotification
