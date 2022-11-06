const Performer = require('../models/performer');
const Movie = require('../models/movie');

function create(req, res) {
  // Need to "fix" date formatting to prevent day off by 1
  // This is due to the <input type="date"> returning the date
  // string in this format:  "YYYY-MM-DD"
  // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
  const s = req.body.born;
  req.body.born = `${s.substr(5, 2)}-${s.substr(8, 2)}-${s.substr(0, 4)}`;

  // the Model.create basically calls
  // new Model({....props}) && Model.save()
  Performer.create(req.body, function (err, performer) {
    res.redirect('/performers/new');
  });
}

function newPerformer(req, res) {
  Performer.find({}, function (err, performers) {
    res.render('performers/new', {
      title: 'Add Performer',
      performers,
    });
  });
}

function addToCast(req, res) {
  // 1- find the movie
  Movie.findById(req.params.id, function (err, movie) {
    // 2 - push the Object id the cast array
    movie.cast.push(req.body.performerId);
    // 3 - call save method
    movie.save(function (err) {
      res.redirect(`/movies/${movie._id}`);
    });
  });
}

module.exports = {
  new: newPerformer,
  create,
  addToCast,
};
