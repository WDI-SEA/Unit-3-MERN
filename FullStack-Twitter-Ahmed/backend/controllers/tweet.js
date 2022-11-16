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


    try {

        let tweet = await Tweet.findByIdAndUpdate(
            req.params.tweetId
        ,{
            name: req.body.name,
            content: req.body.content
    
            // Or { req.body }
        })
    
        res.status(200).json({message: 'Tweet got updated'})


    } catch(err) {

        res.json(err)
    }

}



const deleteTweet = async (req, res) => {


    try {

        // delete the tweet
        const tweet = await Tweet.findByIdAndDelete(
            req.params.tweetId
        )
    
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
    
        res.json({message: 'Tweet got deleted'})

    } catch (err) {

        res.json(err)

    }

}


const getAllUserTweets = async (req, res) => {


    try {

        
        let user = await User.findById(req.params.userId)
    
        await user.populate('tweets')
    
        console.log(user)
    
        res.json(user)

    } catch (err) {
        res.json(err)
    }
}


// Exporting/Sharing our functions
module.exports = {
    getAllTweets,
    createTweet,
    updateTweet,
    deleteTweet,
    getAllUserTweets
}