const mongoose = require('mongoose')

const Schema = mongoose.Schema

// creating User schema
const UserModel = new Schema({
    name: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    // associate the Tweet model (one to many)
    // when we have [] it means it's to many relation (one user to many tweets)
    tweets: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ]
}, {
    timestamps: true
})

// storing Tweet schema as a model
const User = mongoose.model('User', UserModel)

module.exports = User