const express = require('express')

const router = express.Router()
const tweetsController = require('../controllers/tweets')
// We import our controller functions above


// Require isLoggedIn Middleware.
const isLoggedIn = require("../helper/isLoggedIn");

// We define the routes and controllers
router.get('/tweets', tweetsController.getAllTweets)


// we define the routes and controllers
// router.get('/tweets',tweetsController.getAllTweets)

router.get('/tweets/:_id', tweetsController.getTweet)
// router.post('/tweets',isLoggedIn, tweetsController.createTweet)

router.post('/tweets', isLoggedIn, tweetsController.createTweet)

router.put('/tweets/:_id',tweetsController.updateTweet)
router.delete('/tweets/:_id',tweetsController.deleteTweet)




//we export our routes
module.exports = router

