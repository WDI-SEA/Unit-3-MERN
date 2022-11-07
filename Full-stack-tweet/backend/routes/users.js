const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users')

router.post('/users', usersController.createUser)

router.post('/users/:userId/tweets', usersController.createUserTweet)

router.post('/users/:userId/Update', usersController.UpdateUser)

router.delete('/users/:userId/delete', usersController.DeleteUser)



module.exports = router