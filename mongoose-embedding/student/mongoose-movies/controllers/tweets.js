const Tweet = require('../models/tweet');

module.exports = {
  index,
  show,
  new: newTweet,
  create
};

function index(req, res) {
  Tweet.find({}, function(err, tweets) {
    res.render('tweets/index', { name: 'All Tweets', tweets });
  });
}

function show(req, res) {
  Tweet.findById(req.params.id, function(err, tweet) {
    res.render('tweets/show', { description: 'Tweet Description', tweet });
  });
}

function newTweet(req, res) {
  res.render('tweets/new', { name: 'Add Tweet' });
}

function create(req, res) {
  const tweet = new Tweet(req.body);
  tweet.save(function(err) {
    if (err) return res.redirect('/tweets/new');
    res.redirect('/tweets');
  });
}
