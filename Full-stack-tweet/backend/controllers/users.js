const User = require('../models/User')
const Tweet = require ('../models/Tweet')


async function createUser(req, res) {
    try {

        const newUser= await User.create({
            name: req.body.name,
            username:req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
        res.json(newUser)
    } catch (err){
        res.json(err)
    }

}

async function createUserTweet(req, res){
    //Find the user created the tweet
    let user = await User.findById(req.params.userId)

    //create the tweet
    let newTweet = await Tweet.create(req.body)

    // push the new tweet ID into the user's tweets proprty
    user.tweets.push(newTweet._id)

    // save our changes to our user
    await user.save()

    //populate the tweet data
    await user.populate('tweets')

    //Respond with the user data
    res.json(user)

}


async function UpdateUser(req, res){
    let updateuser = await User.findByIdAndUpdate(req.params.userId, 
    {name: req.body.name,
      username:req.body.username, 
        email: req.body.email, 
        password: req.body.password,
    })

    res.json(updateuser)

}

async function DeleteUser(req, res){
    let deleteUser = await User.findByIdAndDelete(req.params.userId)
    res.json(deleteUser)

}

module.exports = {
   createUser,
   createUserTweet,
   UpdateUser,
   DeleteUser
}