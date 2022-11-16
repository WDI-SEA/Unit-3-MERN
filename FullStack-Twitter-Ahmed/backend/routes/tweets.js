// import the required modules
const express = require('express')
const router = express.Router()

// import the controllers functions
const tweetsController = require('../controllers/tweet')


// require isLoggedIn Middleware
const isLoggedIn = require('../helper/isLoggedIn')


// for the the path '/tweets'
// isLoggedIn require the authentication
// router.get('/tweets', isLoggedIn, tweetsController.getAllTweets)
router.get('/tweets', tweetsController.getAllTweets)

router.post('/tweets', isLoggedIn, tweetsController.createTweet)


router.put('/tweets/:tweetId', tweetsController.updateTweet)
router.delete('/tweets/:userId/:tweetId', tweetsController.deleteTweet)


router.get('/tweets/:userId', tweetsController.getAllUserTweets)

module.exports = router