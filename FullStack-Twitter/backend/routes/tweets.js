const express = require("express");
const router = express.Router();
const tweetsController = require("../controllers/tweets");
//We import our controller functions above

//We define the routes and controllers
router.get("/tweets", tweetsController.getAllTweets);

router.post('/tweets', tweetsController.createTweet)

router.post('/tweets/:tweetId/update', tweetsController.updateTweet)

router.post('/tweets/:tweetId/delete', tweetsController.deleteTweet)

//We export our routes
module.exports = router;
