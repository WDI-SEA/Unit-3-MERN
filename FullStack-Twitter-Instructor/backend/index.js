const express = require('express')
// Initializing our application
const app = express()

require('dotenv').config()
require('./config/database')

// Mount our middleware
//....
// app.use(express.json())
app.use(express.urlencoded({extended: false}))
//....
app.use('/', require('./routes/tweets'))
app.use('/', require('./routes/users'))

// Listening on a port
app.listen(4000, () => {
    console.log('App listening on port 4000!')
})











