const mongoose = require('mongoose');

require('dotenv').config()

mongoose.connect('mongodb+srv://notahmed:4wGisR5BSXHNSqlA@cluster0.qayj98y.mongodb.net/movie',
  { useNewUrlParser: true, useCreateIndex: true }
);

// shortcut to mongoose.connection objec
const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});