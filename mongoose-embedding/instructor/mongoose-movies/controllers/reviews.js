const Movie = require('../models/movie');

function create(req, res) {
  // 1st find the movie we're dealing in the DB
  Movie.findById(
    req.params.id,

    function (err, movie) {
      // THEN take the submitted review (from the form) and add it to the reviews array
      movie.reviews.push(req.body);

      // FINALLY save the new modified movie model in the DB
      movie.save(function (err) {
        if (err) {
          console.log(err);
        }

        res.redirect(`/movies/${movie._id}`);
      });
    }
  );
}

module.exports = {
  create,
};
