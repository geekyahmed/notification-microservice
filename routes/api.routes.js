const express = require('express')
const router = express.Router()
const postController = require('../controllers/post.controller')

router.get('/posts', postController.getPosts)

router.post('/new', postController.createPost)

router.put('/edit/:id', postController.updatePost)

module.exports = router
