const mongoose = require('mongoose')

require('./config/database')

const Tweet = require('./models/Tweet')

Tweet.insertMany([
    {
        name: 'Hussein',
        content: 'I get red text around nameand content'
    },
    {
        name: 'Mohd',
        content: 'Hello world'
    },
    {
        name: 'Kareem',
        content: 'If you can hear me then put your hands up'
    },
]).then(() => console.log('Data Added successfully!'))
.catch(err => console.log(err))