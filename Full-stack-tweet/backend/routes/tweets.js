const express = require('express')
const router = express.Router()
const tweetsController = require('../controllers/tweets')

// We import our controller functions above


// we define the routes and controllers
router.get('/tweets', tweetsController.getAllTweets)

router.post('/tweets', tweetsController.createTweet)

router.put('/tweets/:_id', tweetsController.updateTweet)

router.delete('/tweets/:_id', tweetsController.deleteTweet)

//we export our routes
module.exports = router
