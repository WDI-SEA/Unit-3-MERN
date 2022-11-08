const User = require('../models/User')
const Tweet = require ('../models/Tweet')

async function getAllUsers (req, res){
    let user = await User.find().populate('tweets')
    res.json(user)
}


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


async function updateUser(req, res){
    try{
        let updateuser = await User.findByIdAndUpdate(
        req.params.userId, req.body
        // {name: req.body.name,
        //   username:req.body.username, 
        //     email: req.body.email, 
        //     password: req.body.password,
        // }
        )
        res.json({message: 'User update successfully'})
        // res.json(updateuser)

    }catch (err){
        res.json(err)

    }
}

async function deleteUser(req, res){
    try {
        let deleteuser = await User.findByIdAndDelete(req.params.userId)
        res.json({message: 'User delete successfully'})
        // res.json(deleteuser)
    }catch (err){
        res.json(err)

    }
}

module.exports = {
   createUser,
   createUserTweet,
   updateUser,
   deleteUser,
   getAllUsers
}