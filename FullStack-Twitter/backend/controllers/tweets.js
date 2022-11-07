// We import the Model to communicate with the database
const Tweet = require('../models/Tweet')


async function getAllTweets(req,res){
    
    const allTweets = await Tweet.find()

    res.json(allTweets)
}


async function createTweet(req,res){
    //Method 1
    // let newTweet = new Tweet({
    //     name:req.body.name
    //     content:req.body.content
    // })
    // await newTweet.save()

    //Method 2
    // await Tweet.create(
    //     {
    //     name:req.body.name,
    //     content:req.body.content
    //     }
    // )


    //Method 3

    // Tweet.create({
    //     name:req.body.name,
    //     content:req.body.content
    // })
    Tweet.create(req.body)
    .then(newTweet => res.json(newTweet))
    .catch(err => res.json(err))
}


async function updateTweet(req,res){

    let tweet = await Tweet.findByIdAndUpdate(req.params._id,
        {
        name: req.body.name,
        
        content:req.body.content
    } )


    res.json(tweet)
}

async function deleteTweet(req,res){

    let tweet = await Tweet.findByIdAndRemove(req.params._Id,
       )


    res.json(tweet)
}

// Exporting/Sharing our functions
module.exports = {
    getAllTweets,
    createTweet,
    updateTweet,
    deleteTweet
}