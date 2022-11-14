// importing our model so we can communicate with our DB
const Tweet = require('../models/Tweet')

// here we declare the function & we use it by exporting it to other files such as in router
async function getAllTweets(req, res) {

    const allTweets = await Tweet.find()

    res.json(allTweets)
}

async function createTweet(req, res) {

    console.log('Req Body: ', req.body)

    // method one make new tweet then save it in DB
    // let newTweet = new Tweet({
    //     name: req.body.name,
    //     content: req.body.content
    // })
    // await newTweet.save()

    // method two is to create which makes a new tweet & saves it directly
    // await Tweet.create({
    //     name: req.body.name,
    //     content: req.body.content
    // })

    // method three using .then
    Tweet.create({
        name: req.body.name,
        content: req.body.content
    }).then(newTweet => res.json(newTweet))
    .catch(err => res.json(err))

    // method four
    // Tweet.create(req, body)
    // .then(newTweet => res.json(newTweet))
    // .catch(err => res.json(err))
}

async function updateTweet(req, res) {
    try {
        // await Tweet.findOne({ _id: ... })
        let updatedTweet = await Tweet.findByIdAndUpdate(
        req.params._id,
        req.body //form body
        // {content: req.body.content}
        )
        res.status(200).json({message: 'Tweet updated Successfully!'})
    } catch (err) {
        res.json(err)
    }
}

async function deleteTweet(req, res) {
    try {
        await Tweet.findByIdAndDelete(
            req.params._id
        )
        res.json({message: 'Tweet deleted successfully'})
    } catch (err) {
        res.json(err)
    }
}

// exporting/sharing our functions
module.exports = {
    getAllTweets,
    createTweet,
    updateTweet,
    deleteTweet
}