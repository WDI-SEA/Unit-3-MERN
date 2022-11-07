//We import the Model to communicate with the Database
const Tweet = require ('../models/Tweet')

async function  getAllTweets(req, res) {
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
    // let newTweet = new Tweet({
    //     name: req.body.name,
    //     content: req.body.content
    // })
    // await newTweet.save()
}


async function UpdateTweet (req, res) {
    let updatetweet = await Tweet.findByIdAndUpdate(req.params.tweetId, 
        {name: req.body.name,
        content: req.body.content,
    })
    
    res.json(updatetweet)
}


async function DeleteTweet(req, res){
    let deleteTweet = await Tweet.findByIdAndDelete(req.params.tweetId)
    res.json(deleteTweet)

}

//Exporting/Sharing our functions
module.exports = {
   getAllTweets, 
   createTweet,
   UpdateTweet,
   DeleteTweet
}