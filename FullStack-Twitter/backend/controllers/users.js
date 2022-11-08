const User = require('../models/User')
const Tweet = require('../models/Tweet')




async function getAllUsers(req,res){
    
    const allUsers = await User.find().populate('tweets')

    res.json(allUsers)
}

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


// async function updateUser(req,res){

//     let user = await User.findByIdAndUpdate(req.params.userId,
//         {
//         name: req.body.name,
//         username:req.body.username,
//         email:req.body.email,
//         password:req.body.password
//     } )


//     res.json(user)
// }



// async function deleteUser(req,res){

//     await User.findByIdAndDelete(req.params.userId,
//        )


//     res.json('User has been deleted successfully!')
// }


//update user function
async function updateUser() {
    try {
         await User.findByIdAndUpdate(req.params.userId, req.body)
        res.status(200).json({message: 'User updated successfully'})
    }
    catch(err) {
        res.status(400).json({message: 'User not updated'})
    }
}

//delete user function
async function deleteUser(req,res) {
    try {
         await User.findByIdAndDelete(req.params.userId)
        res.status(200).json({message: 'User deleted successfully'})
    }
    catch(err) {
        res.status(400).json({message: 'User not deleted'})
    }
}

module.exports = {
    createUser,
    createUserTweet,
    updateUser,
    deleteUser,
    getAllUsers
}