const User = require('../models/User')
const Tweet = require('../models/Tweet')
const { findOne } = require('../models/Tweet')

// require bcrypt
const bcrypt = require('bcrypt')
const salt = 10; // 10 is a random string to make the password unpredectable

// require JWT (json web token)
const jwt = require('jsonwebtoken')

async function createUser(req, res) {
    // const newUser = await User.create(req.body)

    try {

        // convert password to encrypted string
        let hashedPassword = bcrypt.hashSync(req.body.password, salt)
        console.log(hashedPassword)

        const newUser = await User.create({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
        })
    
        res.json(newUser)

    } catch (err) {
        res.json(err)
    }
}

const auth_signin_post = async (req, res) => {
    // Instead of using req.body.email or req.body.password
    let {email, password} = req.body;
    console.log(email)

    try {
        let user = await User.findOne({email})
        console.log(user)

        // if the user does not exist this we won't continue with password comparison
        if(!user) {
            return res.json({message: 'User not found'}).status(400)
        }

        // password comparison
        const isMatch = await bcrypt.compareSync(password, user.password)
        console.log(password)
        console.log(user.password)

        // if the password is incorrect then return a message & exist the function (do not continue)
        if(!isMatch) {
            return res.json({message: 'Password does not match'}).status(400)
            // you can put any status number / 400 means you are not authorised to access
            // For what each code means -> HTTP response status code
        }

        // JWT Token
        const payload = {
            user: {
                id: user._id
                // id is a claim & we can put other claims as well, but we should keep a few ones only because it effects the performance/speed of the webpage
            }
        }

        jwt.sign(
            payload,
            process.env.SECRET,
            {expiresIn: 36000000},
            // expiresIn means how long before the password is asked again
            (err, token) => {
                if(err) throw err
                res.json({token}).status(200)
            }
        )

    } catch (err) {
        console.log(err)
        res.json({message: 'You are not loggedin! Try again later'}).status(400)
    }
}

async function createUserTweet(req, res) {

    try {
        // find the user
        let user = await User.findById(req.params.userId)

        // create the tweet
        let newTweet = await Tweet.create(req.body)

        // push the new tweet Id into the user's tweets
        user.tweets.push(newTweet._id)

        // save changes
        await user.save()

        // show the data
        // populate the data
        await user.populate('tweets')
        res.json(user)

    } catch (err) {
        res.json(err)
    }
}

async function updateUser(req, res) {
    try {
        let updatedUser = await User.findByIdAndUpdate(
            req.params._id,
            req.body
            )
        res.json({message: 'User updated successfully'})
        // res.json(updatedUser)
    } catch (err) {
        res.json(err)
    }
}

async function deleteUser(req, res) {
    try {
        await User.findByIdAndDelete(
            req.params._id,
            res.json({message: 'User deleted successfully'})
        )
    } catch (err) {
        res.json(err)
    }
}

module.exports = {
    createUser,
    createUserTweet,
    updateUser,
    deleteUser,
    auth_signin_post
}