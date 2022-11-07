const express = require('express')


// initialize our application
const app = express()

require('./config/database')

// mount our middleware


// ....


// ....


// listening on a port
app.listen(4000, () => {
    console.log('App listening on port 4000')
})