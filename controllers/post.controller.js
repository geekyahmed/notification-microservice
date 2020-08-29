const Post = require('../models/post')
const createNotification = require('../services/notification.service')

module.exports = {
  getPosts: async (req, res) => {
    await Post.find({ isPublished: true })
      .then(posts => {
        if (posts == 0) {
          res.status(200).json({ msg: 'No Posts Available' })
        } else {
          res.status(200).json(posts)
        }
      })
      .catch(err => {
        res
          .status(500)
          .json({ msg: 'Internal Server Error', error: err.message })
      })
  },
  createPost: (req, res) => {
    const { title, content, isPublished } = req.body
    const newPost = new Post({
      title: title,
      content: content,
      isPublished: isPublished
    })
    newPost.save().then(savedPost => {
      createNotification(savedPost, `${savedPost.title} have been created`)
      res.status(200).json(savedPost)
    })
  }
}
