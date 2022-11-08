const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users')

router.post('/users', usersController.createUser)

router.post('/users/:userId/tweets', usersController.createUserTweet)

router.put('/users/:userId', usersController.updateUser)

router.delete('/users/:userId', usersController.deleteUser)



module.exports = router