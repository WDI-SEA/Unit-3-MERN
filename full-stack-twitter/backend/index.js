const express = require('express')
// this is not needed
// const bodyParser = require('body-parser')

// Initializing our application
const app = express()

// dotenv has to be first before the database file runs because it needs the env
require('dotenv').config()
require('./config/database')

// Mount our middleware
// express.json means that we accept json data from our frontend
// to send json in postman go to body -> raw -> change text to json
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//......
// if we keep it / then in the controller we have to write /tweets for all the routes or if we want we can prepend the tweets portion of the route here
app.use('/', require('./routes/tweets'))
app.use('/', require('./routes/users'))
//......

// Listening on port
// we made it 4000 because react is on 3000 so we don't want them to interfere
app.listen(4000, () => {
    console.log('App listening on port 4000 :)')
})