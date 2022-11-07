const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserModel = new Schema({
    name: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},

    // Associate with the tweet model
    tweets: [{
        type: Schema.Types.ObjectId,
        ref: 'Tweet'
    }]
},{
    timestamps: true
})


const User = mongoose.model('User', UserModel)

module.exports = User