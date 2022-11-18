const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users')

// router.get('/users/:userId',usersController.getAllUserData)
router.get('/users',usersController.getAllUsers)

router.post('/users',usersController.createUser)
router.post('/users/:userId/tweets',usersController.createUserTweet)
router.put('/users/:userId',usersController.updateUser)
router.delete('/users/:userId',usersController.deleteUser)


router.post('/auth/signin',usersController.auth_signin_post)

module.exports=router