const express = require('express');

const homeController = require('../controller/homeController');


const router = express.Router();

router.get('/', homeController.home);
router.use('/user', require('./user'));
router.use('/post', require('./post'));

router.get('/user', homeController.userHome);

router.get('/fuck', homeController.calling);

console.log("Router Loded");

module.exports = router;