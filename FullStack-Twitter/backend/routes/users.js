const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')

router.get('/users', userController.findAllUsers)

router.post('/users', userController.createUser)

router.post('/users/:userId/tweets', userController.createUserTweet)

router.put('/users/:userId', userController.updateUserInfo)

router.delete('/users/:userId', userController.deleteUser)

router.post('/auth/signin', userController.auth_sigin_post)

module.exports = router