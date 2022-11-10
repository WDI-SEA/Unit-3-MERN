const express = require('express')

const router = express.Router()

const UsersController = require('../controllers/users')

router.post('/users', UsersController.createUser)
router.post('/users/:userId/tweets', UsersController.createUserTweet)

router.put('/users/:userId', UsersController.updateUser)
router.delete('/users/:userId', UsersController.deleteUser)


router.get('/users/:userId', UsersController.getUser)

router.get('/users', UsersController.getAllUsers)

router.post('/auth/signin', UsersController.auth_sign_post)

module.exports = router