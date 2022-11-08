const User = require('../models/User')
const Tweet = require('../models/Tweet')


async function findAllUsers(req,res){
    const allUsers = await User.find().populate('tweets')
    res.json(allUsers)
}


async function createUser(req, res){
    //Or .create(req.body), but form must match the DB
    try {
        const newUser = await User.create({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        res.json(newUser)
    } catch (error) {
        res.json(error)
    }
}


async function createUserTweet(req,res){
        //Find the user that created the tweet
        let user = await User.findById(req.params.userId)
        //Create the tweet
        let newTweet = await Tweet.create(req.body)
        //push the new tweet ID into the user's 'tweets' property
        user.tweets.push(newTweet._id)
        //Save our changes to the user
        await user.save()
        //Populate the tweet data
        await user.populate('tweets')
        //Respond with the user data
        res.json(user)
}

//Update User Information:
async function updateUserInfo(req,res){
    let updateUser = await User.findByIdAndUpdate(req.params.userId, req.body
        //Or we can specify them like this:
        //{ name: req.body.name,
        // username: req.body.username,
        // email: req.body.email,
        // password: req.body.password
        //}
    )

    res.json(updateUser)
}

//Delete User:
async function deleteUser(req,res){
    let userDelete = await User.findByIdAndRemove(req.params.userId)

    res.json(userDelete)
}



//Exporting it to the Routes ;)
module.exports = {
    createUser,
    createUserTweet,
    updateUserInfo,
    deleteUser,
    findAllUsers
}