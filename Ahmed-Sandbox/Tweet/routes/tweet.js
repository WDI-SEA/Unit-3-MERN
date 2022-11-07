const express = require('express');
const router = express.Router();
const tweetController = require('../controllers/tweet')

router.get('/', function(req, res, next) {
  res.redirect('/movies');
});

module.exports = router;
