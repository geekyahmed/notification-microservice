const Post = require('../models/post')
const Notification = require('../models/notification')

module.exports = {
    getPosts: async (req, res) => {
        await Post.find({ isPublished: true })   
            .then(posts => {
                await res.status(200).json(posts)
            })
            .catch(err => {
            await res.status(500).json({ msg: "Internal Server Error", error: err.message })
        })
    }
}