const mongoose = require('mongoose');

const { Schema } = mongoose;

// SubDocuments
const reviewSchema = new Schema(
  {
    content: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, default: 5 },
  },
  { timestamps: true }
);

// MAIN DOCUMENT (PARENT)
const movieSchema = new Schema(
  {
    mpaaRating: String,

    title: {
      type: String,
      required: true,
    },

    releaseYear: {
      type: Number,
      default() {
        return new Date().getFullYear();
      },
    },
    cast: [String],
    reviews: [reviewSchema],
    nowShowing: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Movie', movieSchema);
