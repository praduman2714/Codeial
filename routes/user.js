const express = require('express');

const userController = require('../controller/userController');


const router = express.Router();

router.get('/profile', userController.profile);

router.get('/sign-up' , userController.signUp);
router.get('/sign-in' , userController.signIN);

router.post('/create', userController.create);

module.exports = router;