const mongoose = require('mongoose')

const Schema = mongoose.Schema
//Creating our Tweet Schema
const TweertModel = new Schema({
  name:{type: String, require: true},
  content:{type: String, require: true},
  }, {
    timestamps: true
})


//Storing our Schema as a model 
const Tweet = mongoose.model('Tweet', TweertModel)

//Exporting our Model 
module.exports = Tweet;
