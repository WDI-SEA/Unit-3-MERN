const Tweet = require('../models/Tweet')
const mongoose = require('mongoose')
const User = require('../models/User')



// defining a function to get all the tweets from the database
const getAllTweets = async (req, res) => {

    const allTweets = await Tweet.find()
    res.json(allTweets)
}

const createTweet = async (req, res) => {


    console.log('req body ', req.body)


    // Method One
    // let newTweet = new Tweet({
    //     name: req.body.name,
    //     content: req.body.content
    // })
    // await newTweet.save()


    // Method Two
    // const newTweet = Tweet.create({
    //     name: req.body.name,
    //     content: req.body.content
    // }).then(newTweet => res.json(newTweet))
    // .catch(err => res.json(err))


    // Method Three
    // const newTweet = await Tweet.create({
    //     name: req.body.name,
    //     content: req.body.content
    // })


    // shortcut
    const newTweet = await Tweet.create(req.body)

    res.json({message: 'Tew tweet Created', tweet: newTweet})
}


const updateTweet = async (req, res) => {


    let tweet = await Tweet.findOneAndUpdate({
        _id: req.params.tweetId
    }, {
        name: req.body.name,
        content: req.body.content,
    })

    res.json({message: 'update tweet'})
}



const deleteTweet = async (req, res) => {



    // delete the tweet
    const tweet = await Tweet.findOneAndDelete({
        _id: req.params.tweetId
    })

    // must also delete the reference
    const user = await User.findById(req.params.userId)
    
    let index =  user.tweets.findIndex(element => element.valueOf() === req.params.tweetId)
    

    console.log('user ', user)
    console.log('user id ', user.tweets[index].valueOf())
    console.log('index ', index)

    // remove that elment
    user.tweets.splice(index, 1)

    // Save our changed to the user
    await user.save()

    res.json({message: 'delete tweet'})
}


// Exporting/Sharing our functions
module.exports = {
    getAllTweets,
    createTweet,
    updateTweet,
    deleteTweet
}