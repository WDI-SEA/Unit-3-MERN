const User = require('../models/User')
const Tweet = require('../models/Tweet')


const createUser = async (req, res) => {

    try {

        const newUser = await User.create({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })

        res.json(newUser)

    } catch (err) {
        res.json(err)
    }

}

const createUserTweet = async (req, res) => {

    // find the user that created the tweet
    let user = await User.findById(req.params.userId)

    // create the tweet
    let newTweet = await Tweet.create(req.body)

    // push the new tweet id into the user's tweets property
    user.tweets.push(newTweet._id)


    // Save our changed to the user
    await user.save()


    // respond with the user data
    // popluate with the tweet data
    // this will add the full data of tweets inside the tweets property of users
    // Will do some kind of join
    await user.populate('tweets')

    res.json(user)
}


const updateUser = async (req, res) => {

    const user = await User.findOneAndUpdate({
            _id: req.params.userId
        },{
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        
        })


    res.json({message: user})
}



const deleteUser = async (req, res) => {

    const user = await User.findOneAndDelete({
        _id: req.params.userId
    })


    res.json({message: user})
}

module.exports = {
    createUser,
    createUserTweet,
    updateUser,
    deleteUser
}