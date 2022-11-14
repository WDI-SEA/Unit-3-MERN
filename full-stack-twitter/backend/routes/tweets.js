// import controller functions
const express = require('express')
const router = express.Router()
const tweetsController = require('../controllers/tweets')

// define routes & controllers
router.get('/tweets', tweetsController.getAllTweets)
router.post('/tweets', tweetsController.createTweet)
router.put('/tweets/:_id', tweetsController.updateTweet)
router.delete('/tweets/:_id', tweetsController.deleteTweet)

// export our routes
module.exports = router