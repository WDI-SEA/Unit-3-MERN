const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserModel = new Schema ({
    name: {type:String, require: true},
    username: {type:String, require: true},
    email: {type:String, require: true},
    password: {type:String, require: true},
    //Associate the tweet model
    tweets: [{type: Schema.Types.ObjectId ,
        ref: 'Tweet'
    }]

}, {
    timestamps: true
})


const User = mongoose.model('User', UserModel)

module.exports = User