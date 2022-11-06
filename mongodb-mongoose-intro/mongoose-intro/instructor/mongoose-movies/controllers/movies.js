const Movie = require('../models/movie');

function newMovie(req, res) {
  res.render('movies/new');
}

function create(req, res) {
  console.log(req.body);
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing;

  /**
   * 2 steps for cast, first remove all white spaces around the commas (format string)
   * THEN convert to array
   */

  // remove whitespace next to commas
  req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
  // split if it's not an empty string
  if (req.body.cast) req.body.cast = req.body.cast.split(',');

  console.log('after formatting', req.body);

  // create the movie object in memory
  const movie = new Movie(req.body);

  // please save the move in the database
  movie.save(function (err) {
    // one way to handle errors
    if (err) return res.render('movies/new');
    console.log(movie);
    // for now, redirect right back to new.ejs
    res.redirect('/movies');
  });
}

function index(req, res) {
  Movie.find({}, function (err, movies) {
    if (err) {
      return console.log(err);
    }
    res.render('movies/index', { movies });
  });
}

module.exports = {
  new: newMovie,
  create,
  index,
};
