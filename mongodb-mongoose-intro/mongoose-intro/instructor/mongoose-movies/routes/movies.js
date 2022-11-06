const express = require('express');
const moviesCtrl = require('../controllers/movies');

const router = express.Router();

router.get('/', moviesCtrl.index);
router.post('/', moviesCtrl.create);
router.get('/new', moviesCtrl.new);

module.exports = router;
