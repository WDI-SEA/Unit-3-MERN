const express = require('express')

const router = express.Router()

const UsersController = require('../controllers/users')

router.post('/users', UsersController.createUser)
router.post('/users/:userId/tweets', UsersController.createUserTweet)

router.put('/users/:userId', UsersController.updateUser)
router.delete('/users/:userId', UsersController.deleteUser)

module.exports = router