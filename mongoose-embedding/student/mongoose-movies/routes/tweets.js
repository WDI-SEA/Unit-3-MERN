const express = require('express');
const router = express.Router();
const tweetsCtrl = require('../controllers/tweets');

router.get('/', tweetsCtrl.index);
router.get('/new', tweetsCtrl.new);
router.get('/:id', tweetsCtrl.show);
router.post('/', tweetsCtrl.create);

module.exports = router;
