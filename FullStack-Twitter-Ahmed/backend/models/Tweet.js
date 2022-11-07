const mongoose = require('mongoose')

const Schema = mongoose.Schema


const TweetModel = new Schema({
    name: {type: String, require: true},
    content: {type: String, required: true}
}, {
    timestamps: true
})


// Storing our schema as a model
const Tweet = mongoose.model('Tweet', TweetModel)


// exporting our Model
module.exports = Tweet