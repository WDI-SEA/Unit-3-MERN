const Performer = require('../models/performer');
const Movie = require('../models/movie');

module.exports = {
  new: newPerformer,
  create,
  addToCast
};

function create(req, res) {
  // Need to "fix" date formatting to prevent day off by 1
  // This is due to the <input type="date"> returning the date
  // string in this format:  "YYYY-MM-DD"
  // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
  const s = req.body.born;
  req.body.born = `${s.substr(5, 2)}-${s.substr(8, 2)}-${s.substr(0, 4)}`;
  Performer.create(req.body, function (err, performer) {
    res.redirect('/performers/new');
  });
}

function newPerformer(req, res) {
  Performer.find({}, function (err, performers) {
    res.render('performers/new', {
      title: 'Add Performer',
      performers
    });
  })
}


function addToCast(req, res) {
  //This function will assciate the Performer with a Movie (Tweet& user)

  //we have to find the Moive(user)
  Movie.findById(req.params.id, function(err, movie) {
    //we have to push the _id of the Performer (tweet) into the cast proprty
    movie.cast.push(req.body.performerId)
    //we have to save our changes
    movie.save(function(err) {
      res.redirect(`/movies/${movie._id}`)
    })
  })
}