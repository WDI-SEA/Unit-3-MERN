// We import the Model to communicate with the Database
const Tweet = require('../models/Tweet')

async function getAllTweets(req,res) {
    const allTweets = await Tweet.find()
    res.json(allTweets)
}

async function createTweet(req,res) {
    // Method 3
    // Tweet.create({
    //     name: req.body.name,
    //     content: req.body.content
    // })
    Tweet.create(req.body)
    .then(newTweet => res.json(newTweet))
    .catch(err => res.json(err))
    
    // // Method 2
    // await Tweet.create({
    //     name: req.body.name,
    //     content: req.body.content
    // })
    // // Method 1
    // let newTweet = new Tweet(
    //     name: req.body.name
    //     content: req.body.content
    // )
    // await newTweet.save()
}

//Update Tweet:
async function updateTweet(req,res){
  try {
    await Tweet.findByIdAndUpdate(req.params.tweetId, {
        content: req.body.content
    })

    res.status(200).json({message: 'Tweet updated Successfully!'})
    // res.json(tweetUpdate)

  } catch (error) {
    res.json(error)
  }
}

//Delete Tweet
async function deleteTweet(req,res){
    let tweetDelete = await Tweet.findByIdAndRemove(req.params.tweetId)

    res.json(tweetDelete)

}

// Exporting/Sharing our functions
module.exports = {
    getAllTweets,
    createTweet,
    updateTweet,
    deleteTweet
}