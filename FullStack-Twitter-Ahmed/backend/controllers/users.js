const User = require('../models/User')
const Tweet = require('../models/Tweet')


// Require bcrypt
const bcrypt = require('bcrypt')

// make the hashed passoword more random inshort adding more rounds
const salt = 10


// Require jsonwebtokem
const jwt = require('jsonwebtoken')

// To use env
require('dotenv').config()




const createUser = async (req, res) => {

    try {

        // pain text to encrypted string
        let hashedPassowrd = bcrypt.hashSync(req.body.password, salt)

        console.log(hashedPassowrd)

        const newUser = await User.create({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: hashedPassowrd
        })

        return res.json(newUser)

    } catch (err) {
        return res.json(err)
    }

}



const auth_sign_post = async (req, res) => {
    
    
    // destructuring
    let { email, password} = req.body;
    
    console.log(email)
    
    try {
        
        // let user = await User.findOne({email: email})
        // Both are equal
        
        let user = await User.findOne({email})
        
        console.log(user)
        
        if(!user){
            return res.json({message: "user not found"}).status(400)
        } 
        
        // password comparison
        const isMatched = await bcrypt.compareSync(password, user.password)
        
        // plaintext
        console.log('password:', password)
        
        // encrypted password
        console.log('user password:', user.password)
        
        if(!isMatched){
            return res.json({message: "passoword not matched"}).status(400)
        }
        
        
        // the password got matched here
        // JWT Token
        const payload = {
            
            user: {
                id: user._id,
                name: user.name
            }
        }
        
        jwt.sign(
            payload,
            process.env.SECRET,
            {expiresIn: 36000000},
            (err, token) => {
                if(err) throw err
                return res.json({token}).status(200)
            }
            
            )
            
            
        } catch (err) {
            console.log(err)
            return res.json({message: 'You are not logged in'}).status(400)
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
        
        
        try {

        const user = await User.findByIdAndUpdate(
                req.params.userId
            ,{
                name: req.body.name,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password

                // or req.body
            })
    
    
        res.json({message: 'user updated successfuly'})

    } catch (err){
        res.json(err)
    }
}



const deleteUser = async (req, res) => {

    try {

        const user = await User.findByIdAndDelete(
            req.params.userId
        )
    
        res.json({message: user})
    } catch (err) {
        res.json(err)
    }

}


const getUser = async (req, res) => {

    try {

        const user = await User.findById(
            req.params.userId
        )
    

        await user.populate('tweets')

        res.json(user)
    } catch (err) {
        res.json(err)
    }
}


const getAllUsers = async (req, res) => {

    try {

        const users = await User.find().populate('tweets')
    


        res.json(users)
    } catch (err) {
        res.json(err)
    }
}


module.exports = {
    createUser,
    createUserTweet,
    updateUser,
    deleteUser,
    getUser,
    getAllUsers,
    auth_sign_post
}