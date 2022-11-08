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
<<<<<<< HEAD
    // let newTweet = await Tweet.create({
=======
    // await Tweet.create({
>>>>>>> 98a2ad1 (Completed Create and Read Tweet Routes)
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

<<<<<<< HEAD
async function updateTweet(req, res) {
    try {
    // await Tweet.findOne({ _id: ... })
    let updatedTweet = await Tweet.findByIdAndUpdate(
        req.params._id,
        req.body //form body
        // {content: req.body.content}
    )
        res.status(200).json({message: 'Tweet updated Successfully!'})
    // res.json(updatedTweet)
    } catch (err) {
        res.json(err)
    }
}


async function deleteTweet(req,res) {
    try {
        await Tweet.findByIdAndDelete(
            req.params._id
        )
        res.json({message: 'Tweet Deleted Successfully'})
    } catch (err) {
        res.json(err)
    }
}

// Exporting/Sharing our functions
module.exports = {
    getAllTweets,
    createTweet,
    updateTweet,
    deleteTweet
=======
// Exporting/Sharing our functions
module.exports = {
    getAllTweets,
    createTweet
>>>>>>> 98a2ad1 (Completed Create and Read Tweet Routes)
}




