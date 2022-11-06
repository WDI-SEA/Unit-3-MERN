const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  name:String,
  description:String
}, {
  timestamps: true
});

module.exports = mongoose.model('Tweet', tweetSchema);