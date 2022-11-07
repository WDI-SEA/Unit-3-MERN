const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')

router.post('/users', userController.createUser)

router.post('/users/:userId/tweets', userController.createUserTweet)

router.post('/users/:userId/updateInfo', userController.updateUserInfo)

router.post('/users/:userId/deleteUser', userController.deleteUser)

module.exports = router