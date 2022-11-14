require('dotenv').config()
require('./config/database')
const Tweet = require('./models/Tweet')

Tweet.insertMany([
    {
        name: 'Hussain',
        content: 'I am having an error'
    },
    {
        name: 'Mohd',
        content: 'Hello World'
    },
    {
        name: 'Kareem',
        content: 'If you can hear me put your hand up'
    }
]).then(() => console.log('Data added successfully!!'))
.catch(err => console.log(err))