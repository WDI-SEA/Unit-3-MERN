const User = require('../models/User')
const Tweet = require('../models/Tweet')


async function createUser(req,res) {
    try {
        const newUser = await User.create({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
        res.json(newUser)
    } catch (err) {
        res.json(err)
    }
}

async function createUserTweet(req,res) {

    
}

module.exports = {
    createUser,
    createUserTweet
}