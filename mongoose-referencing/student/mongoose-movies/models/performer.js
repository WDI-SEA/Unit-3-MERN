const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const performerSchema = new Schema({
  name: {type: String, required: true, unique: true},
  born: Date,
  // for the manyToMany relation
  movies: [{
    type: Schema.Types.ObjectId,
    ref: 'Movie'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Performer', performerSchema);