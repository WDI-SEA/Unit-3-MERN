const mongoose = require('mongoose')

// we store the link in .env because we don't want hackers to see our credentials
mongoose.connect(process.env.DATABASE_URL)

mongoose.connection.on('connected', () => {
    console.log('Connected to database')
})