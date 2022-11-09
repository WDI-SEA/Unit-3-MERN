// import the required modules
const express = require('express')
const router = express.Router()

// import the controllers functions
const tweetsController = require('../controllers/tweet')


// for the the path '/tweets'
router.get('/tweets', tweetsController.getAllTweets)

router.post('/tweets', tweetsController.createTweet)


router.put('/tweets/:tweetId', tweetsController.updateTweet)
router.delete('/tweets/:userId/:tweetId', tweetsController.deleteTweet)


router.get('/tweets/:userId', tweetsController.getAllUserTweets)

module.exports = router