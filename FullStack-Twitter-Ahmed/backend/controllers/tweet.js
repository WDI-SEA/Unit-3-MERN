const Tweet = require('../models/Tweet')
const mongoose = require('mongoose')



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


// Exporting/Sharing our functions
module.exports = {
    getAllTweets,
    createTweet
}