const express = require('express');
const {createPost, getPosts, getPostById, updatePost, deletePost} = require('../controllers/postController');
const {authMiddleware, adminMiddleware} = require('../middlewares/auth');
const router = express.Router();

router.get('/', getPosts);
router.get('/:id',getPostById);
router.post('/', authMiddleware, adminMiddleware, createPost);
router.put('/:id', authMiddleware, adminMiddleware, updatePost);
router.delete('/:id', authMiddleware, adminMiddleware, deletePost);

module.exports = router;