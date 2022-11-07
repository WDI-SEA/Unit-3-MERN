const { SchemaTypeOptions } = require('mongoose');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const performerSchema = new Schema({
  name: {type: String, required: true, unique: true},
  born: Date,
  // movies: [{
  //   type:SchemaTypeOptions.Types.ObjectId,
  //   ref: 'Movies'
  // }]

},

{
  timestamps: true
});

module.exports = mongoose.model('Performer', performerSchema);