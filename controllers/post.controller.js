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
  getSinglePost: async (req, res) => {
    const id = req.params.id

    await Post.findOneAndUpdate(id, {
      $inc: {
        views: 1
      }
    }).then(singlePost => {
      res.status(200).json(singlePost)
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
  },
  updatePost: async (req, res) => {
    const { title, content, isPublished } = req.body
    const id = req.params.id
    await Post.findById(id)
      .then(singlePost => {
        ;(singlePost.title = title), (singlePost.content = content)
        singlePost.isPublished = isPublished

        singlePost.save().then(updatedPost => {
          createNotification(
            updatedPost,
            `${updatedPost.title} have been updated`
          )
          res.status(200).json(updatedPost)
        })
      })
      .catch(err => {
        res
          .status(500)
          .json({ msg: 'Internal Server Error', error: err.message })
      })
  },
  deletePost: async (req, res) => {
    const id = req.params.id
    await Post.findByIdAndDelete(id)
      .then(deletedPost => {
        createNotification(deletedPost, `${deletedPost.title} has been deleted`)
        res.status(200).json({ msg: 'Deleted Successfully' })
      })
      .catch(err => {
        res
          .status(500)
          .json({ msg: 'Internal Server Error', error: err.message })
      })
  }
}
