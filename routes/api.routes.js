const express = require('express')
const router = express.Router()
const postController = require('../controllers/post.controller')

router.get('/posts', postController.getPosts)

router.get('/post/:id', postController.getSinglePost)

router.post('/new', postController.createPost)

router.put('/edit/:id', postController.updatePost)

router.delete('/delete/:id', postController.deletePost)

module.exports = router
