const mongoose = require('mongoose')

const Schema = mongoose.Schema

// creating Tweet schema
const TweetModel = new Schema({
    name: {type: String, required: true},
    content: {type: String, required: true}
}, {
    timestamps: true
})

// storing Tweet schema as a model
const Tweet = mongoose.model('Tweet', TweetModel)

module.exports = Tweet