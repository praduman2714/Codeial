const express = require('express');
const postController = require('../controller/postController');

const router = express.Router();

router.get('/post', postController.post);

module.exports = router;