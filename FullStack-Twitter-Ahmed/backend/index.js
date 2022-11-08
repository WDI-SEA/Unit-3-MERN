const express = require('express')

// import middleware to allow api calls between different ports
const cors = require('cors')

// initialize our application
const app = express()

require('./config/database')

// Mount our middleware
app.use(cors())

// app.use(express.json());
// This will allow the form data to be understandable by express
app.use(express.urlencoded({ extended: false }));


// ....
app.use('/', require('./routes/tweets'))
app.use('/', require('./routes/users'))


// ....


// listening on a port
app.listen(4000, () => {
    console.log('App listening on port 4000')
})