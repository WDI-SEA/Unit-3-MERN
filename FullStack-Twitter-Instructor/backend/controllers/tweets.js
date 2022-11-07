// We import the Model to communicate with the Database
const Tweet = require('../models/Tweet')

async function getAllTweets(req,res) {
    const allTweets = await Tweet.find()
    res.json(allTweets)
}

async function createTweet(req,res) {
    console.log('Req Body! ', req.body)
    // Method 3
    // Tweet.create({
    //     name: req.body.name,
    //     content: req.body.content
    // })
    Tweet.create(req.body)
    .then(newTweet => res.json(newTweet))
    .catch(err => res.json(err))
    
    // Method 2
    // await Tweet.create({
    //     name: req.body.name,
    //     content: req.body.content
    // })
    // Method 1
    // let newTweet = new Tweet(
    //     name: req.body.name
    //     content: req.body.content
    // )
    // await newTweet.save()
}

// Exporting/Sharing our functions
module.exports = {
    getAllTweets,
    createTweet
}




