const User = require('../models/User')
const Tweet = require ('../models/Tweet')

//Require bcrypt
const bcrypt = require('bcrypt')
const salt = 10 

//Require jsonwebtoken
const jwt = require('jsonwebtoken')



async function getAllUsers (req, res){
    
    let user = await User.find().populate('tweets')
    res.json(user)
}

const auth_singin_post = async (req, res) =>{
    let {email, password} = req.body
    console.log(email)

    try{
        let user = await User.findOne({email})
        console.log(user)

        if (!user){
            return res.json({message: "User not found"}).status(400)
        }

        //Password Comparison
        const isMatch = await bcrypt.compareSync(password, user.password)
        console.log(password) //Plaintext password
        console.log(user.password) //Encrypted password

        if (!isMatch){
            return res.json({massage: "Password not matched"}).status(400)
        }

        // JWT token
        const paylod ={
            user: {
                id: user._id,
                name: user.name
            }
        }

        jwt.sign(
            paylod,
            process.env.SECRET,
            {expiresIn: 3600000},
            (err, token) => {
                if (err) throw err
                res.json({token}).status(200)

            }
        )

    }catch (err){
        console.log(err)
        res.json({message: "You are not logging! Try again later"}).status(400)
    }
}

async function createUser(req, res) {
    try {

        //plain Text to Ecrypted String 
        let hashedPassword = bcrypt.hashSync(req.body.password, salt)
        console.log(hashedPassword)

        const newUser= await User.create({
            name: req.body.name,
            username:req.body.username,
            email: req.body.email,
            password: hashedPassword,
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
   getAllUsers,
  auth_singin_post 
}