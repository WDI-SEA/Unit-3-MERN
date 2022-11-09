const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: String,
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  }}, {
    timestamps: true
  }
)

const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  releaseYear: {
    type: Number,
    default: function () {
      return new Date().getFullYear();
    }
  }, mpaaRating: String,
  cast: [String],
  nowShowing: { type: Boolean, default: false },
  // added this line to make all reviews match the created schema
  // reviews is created heare so we can call it  whatever we want
  reviews: [reviewSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Movie', movieSchema);