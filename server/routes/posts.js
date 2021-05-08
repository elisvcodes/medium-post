const express = require('express');
const router = express.Router();
const { createPost, getPosts, updatePost, deletePost, likePost } = require('../controllers/posts')

router.post('/', createPost);
router.get('/', getPosts);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likepost', likePost);

module.exports = router;