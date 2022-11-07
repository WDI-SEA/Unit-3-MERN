const User = require('../models/User')
const Tweet = require('../models/Tweet')

async function createUser(req,res){

    try {
        // const newUser = await User.create(req.body)
        //we can either do it as above or like down

        const newUser = await User.create({
            name: req.body.name,
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
        })
        res.json(newUser)
    } 
    catch(err){
        res.json(err)
    }
   
}


async function createUserTweet(req,res){

    //Find the user tht created the tweet
    let user = await User.findById(
        req.params.userId
     )

    //Create the tweet
    let newTweet = await Tweet.create(req.body)

    //Push the new tweet ID into the users tweets property
    user.tweets.push(newTweet._id)

    //save our changes
    await user.save()

    //respond with the user data

    //populate the tweet dta
    await user.populate('tweets')
    res.json(user)
}


async function updateUser(req,res){

    let user = await User.findByIdAndUpdate(req.params.userId,
        {
        name: req.body.name,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    } )


    res.json(user)
}



async function deleteUser(req,res){

    let user = await User.findByIdAndRemove(req.params.userId,
       )


    res.json(user)
}


module.exports = {
    createUser,
    createUserTweet,
    updateUser,
    deleteUser
}