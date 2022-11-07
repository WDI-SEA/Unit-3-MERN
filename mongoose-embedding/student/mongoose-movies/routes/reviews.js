const express = require('express')
const router = express.Router()

// importing the reviewsController
const reviewsController = require('../controllers/reviews')



router.post('/movies/:id/reviews', reviewsController.create)

module.exports = router