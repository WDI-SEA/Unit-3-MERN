const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users')

router.post('/users', usersController.createUser)

router.post('/users/tweets', usersController.createUserTweet)

module.exports = router





