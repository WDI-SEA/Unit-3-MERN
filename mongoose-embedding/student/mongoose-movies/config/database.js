const mongoose = require('mongoose');

require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL,
  { useNewUrlParser: true, useCreateIndex: true }
);

// shortcut to mongoose.connection objec
const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});