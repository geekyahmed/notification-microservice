const Post = require('../models/post')
const Notification = require('../models/notification')

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
    createPost: async (req, res) => {
        const {title, content, isPublished} = req.body
        const newPost = new Post({
            title: title,
            content: content,
            isPublished: isPublished
        })
    }
}
