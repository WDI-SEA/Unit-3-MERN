/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  releaseYear: Number,
  mpaaRating: String,
  cast: [String],
  nowShowing: Boolean,
 });

 module.exports = mongoose.model('Movie', movieSchema)

/**
 * Op 1 - for creating ONE single instance of the model
 * const matrix = new Movie({title:"matrix"....})
 *
 * Op 2  ONE OR MORE  (multiple instances)
 *
 * create one
 * const matrix = Movie.create({title:"matrix".....})
 *
 * create multiple instances
 *
 * matrix 1, 2, 3
 * matrixTrilogy = [{title: matrix......},{title: reloaded....},{title: revolutions ...}]
 *
 * Movie.create( matrixTrilogy )
 */
