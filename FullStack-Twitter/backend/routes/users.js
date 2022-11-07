const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users')

router.post('/users',usersController.createUser)
router.post('/users/:userId/tweets',usersController.createUserTweet)
router.post('/users/:userId/update',usersController.updateUser)
router.delete('/users/:userId/delete',usersController.deleteUser)

module.exports=router