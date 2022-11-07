const mongoose = require('mongoose');
const Schema = mongoose.Schema;



/*
    Create a Tweet model with the following string properties:
    name
    description
    Begin creating basic CRUD with restful routes for the Tweet model
*/

const tweetSchema = new Schema({
  name: String,
  description: String
}, {
    timestamps: true
  }
)





module.exports = mongoose.model('Tweet', tweetSchema);