const express = require('express')
const router = express.Router()
const tweetsController = require('../controllers/tweets')
// We import our controller functions above

// We define the routes and controllers
router.get('/tweets', tweetsController.getAllTweets)

router.post('/tweets', tweetsController.createTweet)

<<<<<<< HEAD
router.put('/tweets/:_id', tweetsController.updateTweet)

router.delete('/tweets/:_id', tweetsController.deleteTweet)



=======
>>>>>>> 98a2ad1 (Completed Create and Read Tweet Routes)
// We export our routes 
module.exports = router




